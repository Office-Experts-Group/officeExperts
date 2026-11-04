"use client";
// app/(components)/HeroRotator.jsx
// Client wrapper for the home hero. It decides which frame is showing and
// shares that with the illustration:
//  - writes data-frame="0|1|2" on its root. CSS uses that to show the matching frame.
//  - renders the tabs. The active tab's progress bar is a CSS animation, and when
//    it finishes it moves to the next frame, so there is no setInterval to manage.
//  - provides HeroContext so HeroStory can play the matching act of the animation.
// The frames come in as children, already rendered on the server by HomeHero,
// so none of the copy is shipped in this component's JavaScript.

import { useEffect, useMemo, useRef, useState } from "react";

// SCSS module for the layout, frame visibility and tab controls (unchanged)
import styles from "@/styles/heroRotator.module.scss";
// Shared frame/play state for the illustration
import { HeroContext } from "./HeroContext";
import { PauseIcon, PlayIcon } from "../(svgs)/HeroIcons";

const HeroRotator = ({ labels, durations, visual, children }) => {
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

  // Memoised so HeroStory only re-renders when something it uses changes
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
        data-paused={!playing}
        data-onscreen={onScreen}
      >
        <div className={styles.copy}>
          {/* All frames sit in one grid cell; CSS shows the one matching data-frame */}
          <div className={styles.frames}>{children}</div>

          <div className={styles.controls}>
            <div
              role="tablist"
              aria-label="About Office Experts"
              className={styles.tabs}
              onKeyDown={handleKeyDown}
            >
              {labels.map((label, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={label}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`hero-tab-${index}`}
                    aria-controls={`hero-frame-${index}`}
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
                    {label}
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
