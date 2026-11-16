"use client";
// app/(components)/HeroRotator.jsx
// Client wrapper for the animated heroes (home page, Power Platform hub). It
// decides which frame is showing and shares that with the illustration:
//  - writes data-frame="0|1|2" on its root. CSS uses that to show the matching frame.
//    data-mode ("auto" | "manual" | "paused"), data-paused and data-onscreen are
//    there for the tab progress bars.
//  - renders the tabs. The active tab's progress bar is a CSS animation, and when
//    it finishes it moves to the next frame, so there is no setInterval to manage.
//  - provides HeroContext so the story (HeroStory, PphHeroStory...) plays the
//    matching act of the animation.
// The frames come in as children, already rendered on the server, so none of the
// copy is shipped in this component's JavaScript.
//
// Optional props for reuse (the home hero passes none of them):
//   label     aria-label for the tab list
//   idPrefix  prefix for the tab and panel ids ("hero" → hero-tab-0 / hero-frame-0)
//   classes   a CSS module to style the rotator instead of heroRotator.module.scss.
//             It needs: rotator, copy, frames, controls, tabs, tab, track, fill,
//             toggle, visual.

import { useEffect, useMemo, useRef, useState } from "react";

// Default look (home hero), unchanged
import defaultStyles from "@/styles/heroRotator.module.scss";
// Shared frame/play state for the illustration
import { HeroContext } from "./HeroContext";
import { PauseIcon, PlayIcon } from "../(svgs)/HeroIcons";

const HeroRotator = ({
  labels,
  durations,
  visual,
  children,
  label = "About Office Experts",
  idPrefix = "hero",
  classes = defaultStyles,
}) => {
  const styles = classes;
  const [active, setActive] = useState(0);
  // "auto": frames advance on their timers.
  // "manual": the visitor picked a tab, so the frame stays put while its act plays once.
  // "paused": the pause button froze both the slideshow and the animation.
  const [mode, setMode] = useState("auto");
  // Goes up on every tab click so the illustration replays the chosen act
  const [restart, setRestart] = useState(0);
  const [onScreen, setOnScreen] = useState(true);
  const rootRef = useRef(null);
  const tabRefs = useRef([]);

  // Freezes every animation in the hero while it is scrolled out of view,
  // so the illustration costs nothing once the visitor is further down the page
  useEffect(() => {
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Called by the active progress bar's onAnimationEnd
  const showNext = () => {
    setActive((current) => (current + 1) % labels.length);
  };

  // A tab choice means the visitor has taken control, so autoplay stops
  const selectFrame = (index) => {
    setActive(index);
    setMode("manual");
    setRestart((count) => count + 1);
  };

  // Pause freezes everything; play resumes the slideshow from where it is
  const togglePlay = () => {
    setMode((current) => (current === "auto" ? "paused" : "auto"));
  };

  // Arrow keys, Home and End move between tabs (WAI-ARIA tabs pattern)
  const handleKeyDown = (event) => {
    const last = labels.length - 1;
    const targets = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in targets)) return;

    event.preventDefault();
    selectFrame(targets[event.key]);
    tabRefs.current[targets[event.key]]?.focus();
  };

  // Memoised so the story only re-renders when something it uses changes
  const story = useMemo(
    () => ({ active, mode, onScreen, restart }),
    [active, mode, onScreen, restart],
  );
  const playing = mode === "auto";

  return (
    <HeroContext value={story}>
      <div
        ref={rootRef}
        className={styles.rotator}
        data-frame={active}
        data-mode={mode}
        data-paused={!playing}
        data-onscreen={onScreen}
      >
        <div className={styles.copy}>
          {/* All frames sit in one grid cell; CSS shows the one matching data-frame */}
          <div className={styles.frames}>{children}</div>

          <div className={styles.controls}>
            <div
              role="tablist"
              aria-label={label}
              className={styles.tabs}
              onKeyDown={handleKeyDown}
            >
              {labels.map((tabLabel, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={tabLabel}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`${idPrefix}-tab-${index}`}
                    aria-controls={`${idPrefix}-frame-${index}`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={styles.tab}
                    onClick={() => selectFrame(index)}
                  >
                    <span className={styles.track}>
                      {/* Mounted fresh each time a tab becomes active, which restarts the timer */}
                      {isActive && (
                        <span
                          className={styles.fill}
                          style={{ animationDuration: `${durations[index]}s` }}
                          onAnimationEnd={showNext}
                        />
                      )}
                    </span>
                    {tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Required for auto-moving content (WCAG 2.2.2). Hidden for reduced motion, where nothing autoplays. */}
            <button
              type="button"
              className={styles.toggle}
              onClick={togglePlay}
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>
        </div>

        <div className={styles.visual}>{visual}</div>
      </div>
    </HeroContext>
  );
};

export default HeroRotator;
