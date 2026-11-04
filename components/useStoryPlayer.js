"use client";
// app/(components)/useStoryPlayer.js
// Shared player for the animated hero stories (HeroStory, WordHeroStory).
// Give it a story's sceneAt(t) function and its act timings; it returns
// `bind` (registers an SVG/HTML node under its scene key) and `wrapRef`
// (the element that fades when the story has to jump).
//
//  - Reads the active frame and play state from HeroContext (set by HeroRotator).
//  - Runs a requestAnimationFrame loop only while the hero is on screen and not
//    paused, writing just the attributes that changed. React never re-renders per frame.
//  - Autoplay flows from one act into the next; a tab click or the loop back to
//    frame 1 fades out, jumps, and fades back in.
//  - Reduced motion: no loop, one still per frame.

import { useContext, useEffect, useRef } from "react";

// Active frame, play mode, visibility and restart counter from HeroRotator
import { HeroContext } from "../app/test-page/(components)/HeroContext";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// strokeDashoffset → stroke-dashoffset for setAttribute
const domName = (name) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

// Writes a scene onto the registered nodes, skipping values that have not changed.
// The special "text" key sets the node's text instead of an attribute.
const paintScene = (nodes, written, scene) => {
  for (const key in scene) {
    const node = nodes.get(key);
    if (!node) continue;
    const previous = written.get(key) ?? {};
    const attrs = scene[key];
    for (const name in attrs) {
      const value = attrs[name];
      if (previous[name] === value) continue;
      previous[name] = value;
      if (name === "text") node.textContent = value;
      else node.setAttribute(domName(name), value);
    }
    written.set(key, previous);
  }
};

// Quick fade out, jump, fade in
const crossfade = (node, jump) => {
  if (!node?.animate) {
    jump();
    return;
  }
  const out = node.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 200,
    easing: "ease-in",
    fill: "forwards",
  });
  out.finished
    .then(() => {
      jump();
      node.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 350,
        easing: "ease-out",
      });
      out.cancel();
    })
    .catch(() => {});
};

// Props for one element in a story's opening frame, for the server render.
// ("text" is content, not an attribute, so it is left out.)
export const openingProps = (scene, key) => {
  const { text, ...attrs } = scene[key];
  return attrs;
};

export const useStoryPlayer = ({ sceneAt, acts, initialT, reducedMotionT }) => {
  const { active, mode, onScreen, restart } = useContext(HeroContext);
  const wrapRef = useRef(null);
  const nodes = useRef(new Map());
  const written = useRef(new Map());
  const time = useRef(initialT);
  const seenRestart = useRef(restart);

  const bind = (key) => (node) => {
    if (node) nodes.current.set(key, node);
  };
  const draw = (t) => paintScene(nodes.current, written.current, sceneAt(t));

  // Line the story up with the frame being shown
  useEffect(() => {
    if (prefersReducedMotion()) {
      time.current = reducedMotionT[active];
      draw(time.current);
      return;
    }

    const act = acts[active];
    const replay = restart !== seenRestart.current;
    seenRestart.current = restart;

    // Autoplay moving on to the next frame: the story is already there, keep flowing
    const flowingOn =
      time.current >= act.start - 0.75 && time.current < act.end;
    if (flowingOn && !replay) return;

    crossfade(wrapRef.current, () => {
      time.current = act.start;
      draw(act.start);
    });
  }, [active, restart]);

  // Animation loop
  useEffect(() => {
    if (prefersReducedMotion() || !onScreen || mode === "paused") return;

    // Never run past this frame's act. In auto mode the rotator moves on at that
    // point; in manual mode the act holds on its last frame.
    const end = acts[active].end - 0.001;
    let frame;
    let last = performance.now();

    const step = (now) => {
      // Capped so a backgrounded tab resumes smoothly instead of jumping ahead
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Beyond this act means a jump back is mid crossfade: wait for it
      if (time.current <= end) {
        time.current = Math.min(time.current + dt, end);
        draw(time.current);
        if (mode === "manual" && time.current >= end) return;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, mode, onScreen, restart]);

  return { wrapRef, bind };
};
