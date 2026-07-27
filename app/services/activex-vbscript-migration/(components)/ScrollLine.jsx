// app/services/activex-vbscript-migration/(components)/ScrollLine.jsx
"use client";

import { useEffect, useRef } from "react";

import styles from "../../../../styles/scrollLine.module.css";

// Isolated as its own client component so the rest of MigrationReplaces can
// stay a server component. This only listens to scroll position within the
// section and fades the line from white to the accent colour as the user
// scrolls through it, writing the result to a CSS variable rather than
// re-rendering React on every scroll event.
const ScrollLine = () => {
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const line = lineRef.current;
    if (!wrapper || !line) return;

    let ticking = false;

    const updateProgress = () => {
      ticking = false;

      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Progress reaches 0 when the wrapper's top enters the bottom of the
      // viewport, and 1 once its top reaches the middle of the viewport —
      // this keeps the colour transition tied to natural reading scroll
      // rather than the full, much taller, height of the section.
      const start = viewportHeight;
      const end = viewportHeight * 0.5;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, raw));

      line.style.setProperty("--line-progress", progress);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper} aria-hidden="true">
      <div ref={lineRef} className={styles.line} />
    </div>
  );
};

export default ScrollLine;
