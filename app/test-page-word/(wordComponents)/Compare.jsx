// components/Compare.jsx
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/compare.module.scss";

export default function Compare({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  defaultSplit = 50,
  controlledSplit,
  onFirstDrag,
  onDragStart,
  onDragEnd,
}) {
  // manualSplit holds the user's dragged position and persists after drag ends.
  // null means "defer to scroll (controlledSplit)".
  const [manualSplit, setManualSplit] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const containerRef = useRef(null);

  const onFirstDragRef = useRef(onFirstDrag);
  const onDragStartRef = useRef(onDragStart);
  const onDragEndRef = useRef(onDragEnd);
  useEffect(() => {
    onFirstDragRef.current = onFirstDrag;
  }, [onFirstDrag]);
  useEffect(() => {
    onDragStartRef.current = onDragStart;
  }, [onDragStart]);
  useEffect(() => {
    onDragEndRef.current = onDragEnd;
  }, [onDragEnd]);

  // When scroll sends a genuinely new position (page scrolled), clear manualSplit
  // so scroll takes back control. This does NOT fire on drag end — only when
  // controlledSplit itself changes — so the slider holds position after release.
  const prevControlledRef = useRef(controlledSplit);
  useEffect(() => {
    if (controlledSplit !== prevControlledRef.current) {
      prevControlledRef.current = controlledSplit;
      if (!dragging) {
        setManualSplit(null);
      }
    }
  }, [controlledSplit, dragging]);

  // Priority: user-dragged position → scroll-driven → defaultSplit
  const activeSplit =
    manualSplit !== null
      ? manualSplit
      : controlledSplit !== undefined
        ? controlledSplit
        : defaultSplit;

  const getSplitFromEvent = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, raw));
  }, []);

  const fireDragStart = useCallback(() => {
    onDragStartRef.current?.();
    if (!hasDragged) {
      setHasDragged(true);
      setShowHint(false);
      onFirstDragRef.current?.();
    }
  }, [hasDragged]);

  // ── Mouse ──────────────────────────────────────────────────────────────────
  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(true);
      fireDragStart();
      setManualSplit(getSplitFromEvent(e.clientX));
    },
    [fireDragStart, getSplitFromEvent],
  );

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => setManualSplit(getSplitFromEvent(e.clientX));
    const onUp = () => {
      setDragging(false);
      onDragEndRef.current?.();
      // manualSplit intentionally NOT cleared — slider stays where user left it
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, getSplitFromEvent]);

  // ── Touch ──────────────────────────────────────────────────────────────────
  const handleTouchStart = useCallback(
    (e) => {
      setDragging(true);
      fireDragStart();
      setManualSplit(getSplitFromEvent(e.touches[0].clientX));
    },
    [fireDragStart, getSplitFromEvent],
  );

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      setManualSplit(getSplitFromEvent(e.touches[0].clientX));
    },
    [getSplitFromEvent],
  );

  const handleTouchEnd = useCallback(() => {
    setDragging(false);
    onDragEndRef.current?.();
    // manualSplit intentionally NOT cleared
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.compare}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Before and after comparison slider"
      role="img"
    >
      <Image
        src={before}
        alt={beforeAlt}
        fill
        className={styles.imageBefore}
        draggable={false}
        sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
        priority
      />

      <Image
        src={after}
        alt={afterAlt}
        fill
        className={styles.imageAfter}
        style={{ clipPath: `inset(0 0 0 ${activeSplit}%)` }}
        draggable={false}
        sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
        priority
      />

      <div className={styles.divider} style={{ left: `${activeSplit}%` }} />

      <div className={styles.handle} style={{ left: `${activeSplit}%` }}>
        <span className={styles.handleArrows} aria-hidden="true">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 3L5 8l5 5" />
          </svg>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3l5 5-5 5" />
          </svg>
        </span>
      </div>

      <span className={styles.labelBefore}>Before</span>
      <span className={styles.labelAfter}>After</span>

      {showHint && (
        <div className={styles.hint}>
          <div className={styles.hintPill}>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 8h12M6 4l-4 4 4 4M10 4l4 4-4 4" />
            </svg>
            Drag to compare
          </div>
        </div>
      )}
    </div>
  );
}
