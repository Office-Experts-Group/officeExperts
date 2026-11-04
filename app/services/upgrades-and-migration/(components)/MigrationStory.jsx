"use client";
// app/services/upgrades-and-migration/(components)/MigrationStory.jsx
// Plays the homepage hero animation on its own, with no tabs or text frames.
// It does the same job as HeroRotator for the illustration: it tells HeroStory
// which act to play, and when to stop (paused or scrolled out of view).

import { useEffect, useMemo, useRef, useState } from "react";

// Global story engine: act lengths in seconds, e.g. [9, 10, 12]
import { STORY_DURATIONS } from "@/utils/heroStoryScene";
// Shared state HeroStory reads: { active, mode, onScreen, restart }
import { HeroContext } from "./HeroContext";
// The animation itself
import HeroStory from "./HeroStory";
import { PauseIcon, PlayIcon } from "../(svgs)/HeroIcons";
import styles from "@/styles/migrationStory.module.scss";

const MigrationStory = () => {
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState("auto"); // "auto" | "paused"
  const [onScreen, setOnScreen] = useState(true);
  const rootRef = useRef(null);

  // Stop everything while the hero is scrolled out of view
  useEffect(() => {
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const playing = mode === "auto" && onScreen;

  // Moves to the next act when the current one ends. Time left in the act is
  // remembered, so pausing or scrolling away resumes mid-act instead of restarting it.
  const remaining = useRef(STORY_DURATIONS[0] * 1000);
  useEffect(() => {
    if (!playing) return;
    const startedAt = performance.now();
    let fired = false;

    const timer = setTimeout(() => {
      fired = true;
      const next = (active + 1) % STORY_DURATIONS.length;
      remaining.current = STORY_DURATIONS[next] * 1000;
      setActive(next);
    }, remaining.current);

    return () => {
      clearTimeout(timer);
      // Only bank the elapsed time if the act was interrupted (pause or scrolled away).
      // If the timer fired, remaining already holds the full length of the next act.
      if (!fired) remaining.current -= performance.now() - startedAt;
    };
  }, [playing, active]);

  // Memoised so HeroStory only re-renders when something it uses changes.
  // restart is always 0 because there are no tabs to replay an act.
  const story = useMemo(
    () => ({ active, mode, onScreen, restart: 0 }),
    [active, mode, onScreen],
  );

  return (
    <HeroContext value={story}>
      <div ref={rootRef} className={styles.visual}>
        <HeroStory />
        {/* Auto-moving content needs a pause control (WCAG 2.2.2) */}
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setMode((m) => (m === "auto" ? "paused" : "auto"))}
          aria-label={mode === "auto" ? "Pause animation" : "Play animation"}
        >
          {mode === "auto" ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </HeroContext>
  );
};

export default MigrationStory;
