// components/CompareScrollReveal.jsx
"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import styles from "@/styles/compareScrollReveal.module.scss";

/**
 * Thin wrapper that drives the Compare slider via scroll position.
 * Pauses scroll updates while the user is actively dragging the slider,
 * then resumes when they release.
 *
 * Props:
 *  - children: render prop `(position, onDragStart, onDragEnd) => ReactNode`
 *  - index: number — used to apply the responsive visibility class
 */
export default function CompareScrollReveal({ children, index, className }) {
  const wrapperRef = useRef(null);
  const [position, setPosition] = useState(100); // start fully "before"
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const pausedRef = useRef(false); // ref copy so scroll handler reads current value without stale closure

  const handleDragStart = useCallback(() => {
    pausedRef.current = true;
    setPaused(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    pausedRef.current = false;
    setPaused(false);
  }, []);

  const updatePosition = useCallback(() => {
    // Don't overwrite the slider position while the user is dragging it
    if (pausedRef.current) return;

    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const elH = rect.height;

    const visiblePx = Math.max(
      0,
      Math.min(rect.bottom, vh) - Math.max(rect.top, 0),
    );
    const visibleRatio = visiblePx / elH;

    const START_RATIO = 0.3;
    const END_RATIO = 1.1;

    if (visibleRatio <= START_RATIO) {
      setPosition(100);
    } else if (visibleRatio >= END_RATIO) {
      setPosition(0);
    } else {
      const t = (visibleRatio - START_RATIO) / (END_RATIO - START_RATIO);
      const eased = 1 - Math.pow(1 - t, 3);
      setPosition(Math.round((1 - eased) * 100));
    }
  }, []); // no deps — reads pausedRef.current at call time

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Stable reference — same function used for both add and remove
    function handleScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updatePosition);
    }

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll, { passive: true });
            updatePosition();
          } else {
            window.removeEventListener("scroll", handleScroll);
            const rect = el.getBoundingClientRect();
            if (!pausedRef.current) {
              setPosition(rect.top < 0 ? 0 : 100);
            }
          }
        });
      },
      { threshold: thresholds },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updatePosition]);

  const indexClass = index !== undefined ? styles[`index${index}`] : "";
  const extraClass = className || "";

  return (
    <div
      ref={wrapperRef}
      className={`${styles.scrollRevealWrapper} ${indexClass} ${extraClass}`.trim()}
    >
      {typeof children === "function"
        ? children(position, handleDragStart, handleDragEnd)
        : children}
    </div>
  );
}
