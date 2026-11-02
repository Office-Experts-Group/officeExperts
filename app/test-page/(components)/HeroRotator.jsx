"use client";
// app/test-page/(components)/HeroRotator.jsx
// Client wrapper for the home hero. It only decides which frame is showing:
//  - writes data-frame="0|1|2" on its root. CSS uses that to show the matching
//    frame (by position) and to move the illustration into its matching layout.
//  - renders the tabs. The active tab's progress bar is a CSS animation, and when
//    it finishes it moves to the next frame, so there is no setInterval to manage.
// The frames come in as children, already rendered on the server by HomeHero,
// so none of the copy is shipped in this component's JavaScript.

import { useEffect, useRef, useState } from "react";

// SCSS module for the layout, frame visibility and tab controls
import styles from "@/styles/heroRotator.module.scss";
import { PauseIcon, PlayIcon } from "../(svgs)/HeroIcons";

const HeroRotator = ({ labels, durations, visual, children }) => {
  const [active, setActive] = useState(0);
  // true once the visitor picks a tab or presses pause; autoplay stays off
  const [paused, setPaused] = useState(false);
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
    setPaused(true);
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

  return (
    <div
      ref={rootRef}
      className={styles.rotator}
      data-frame={active}
      data-paused={paused}
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
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          >
            {paused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>
      </div>

      <div className={styles.visual}>{visual}</div>
    </div>
  );
};

export default HeroRotator;
