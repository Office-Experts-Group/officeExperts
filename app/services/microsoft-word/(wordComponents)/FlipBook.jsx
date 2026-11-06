"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import styles from "@/styles/flipBook.module.scss";

/**
 * FlipBook
 *
 * A 3D page-flipping book component. Images only — no required text.
 * Navigation: scroll-triggered (non-locking), prev/next buttons, arrow keys, dots.
 *
 * Page model:
 *   images[0] = cover (right-hand page only)
 *   images[1] = back of sheet 0 (shows on left after first flip)
 *   images[2] = front of sheet 1 (right page of spread 1) ...etc.
 *
 * How stacking works:
 *   Every sheet sits a tiny distance off the "table" (translateZ) based on how
 *   close it is to the top of its pile. The browser's real 3D depth sorting then
 *   always puts the most recent page on top. We don't rely on z-index here, because
 *   browsers ignore it between elements in a shared preserve-3d context. That was
 *   what made the first page show through on every flip.
 *
 *   Flips are queued and may overlap (one sheet can start lifting before the
 *   previous one lands), which gives the "flicking through" feel on fast
 *   scrolls or when jumping via the dots.
 *
 * Props:
 *   images         array of image src strings or Next.js static imports (required)
 *   size           "full" | "half" (default: "full")
 *   className      optional wrapper className
 *   scrollOffset   px of scroll needed to trigger a page turn (default: 120)
 *   animDuration   flip animation duration in ms (default: 900)
 *   flipStagger    min ms between queued flips from buttons / keys / dots
 *                  (default: 35% of animDuration). Set equal to animDuration
 *                  to stop flips ever overlapping.
 *   scrollCooldown ms after a scroll-triggered flip during which further scroll
 *                  input is ignored (default: 80% of animDuration). This is
 *                  the main control for "too many pages at once" on scroll.
 *   scrollQueue    extra scroll flips allowed to queue up behind the current
 *                  one (default: 0 = one page per scroll gesture/cooldown).
 */

const DEPTH_GAP = 1; // px between stacked sheets
const DEPTH_LEVELS = 4; // how many sheets per pile get a distinct depth

export default function FlipBook({
  images = [],
  size = "full",
  className = "",
  scrollOffset = 120,
  animDuration = 900,
  flipStagger,
  scrollCooldown,
  scrollQueue = 0,
}) {
  const sheets = useMemo(
    () =>
      Array.from({ length: Math.ceil(images.length / 2) }, (_, i) => ({
        front: images[i * 2] ?? null,
        back: images[i * 2 + 1] ?? null,
      })),
    [images],
  );

  const totalSheets = sheets.length;
  // currentPage: 0 = closed (cover on right), N = number of sheets flipped
  const maxPage = totalSheets;
  const stagger = flipStagger ?? Math.round(animDuration * 0.35);
  const scrollLock = scrollCooldown ?? Math.round(animDuration * 0.8);

  const [currentPage, setCurrentPage] = useState(0);
  // Sheets currently mid-flip: { [sheetIndex]: sequenceNumber }
  const [moving, setMoving] = useState({});

  const containerRef = useRef(null);
  const pageRef = useRef(0); // source of truth for the queue (avoids stale closures)
  const queueRef = useRef([]); // pending flip directions (1 | -1)
  const nextFlipAt = useRef(0);
  const pumpTimer = useRef(null);
  const landTimers = useRef({});
  const seqRef = useRef(0);
  const accumulatedScroll = useRef(0);
  const lastScrollY = useRef(0);
  const scrollLockedUntil = useRef(0);

  // ---------------------------------------------------------------------------
  // Flip engine
  // ---------------------------------------------------------------------------

  const flipOnce = useCallback(
    (dir) => {
      const from = pageRef.current;
      const to = Math.max(0, Math.min(maxPage, from + dir));
      if (to === from) return false;

      // Forward: the sheet at `from` turns over. Backward: the sheet at `to` turns back.
      const sheet = dir > 0 ? from : to;
      const seq = ++seqRef.current;

      pageRef.current = to;
      setCurrentPage(to);
      setMoving((m) => ({ ...m, [sheet]: seq }));

      clearTimeout(landTimers.current[sheet]);
      landTimers.current[sheet] = setTimeout(() => {
        delete landTimers.current[sheet];
        setMoving((m) => {
          if (m[sheet] !== seq) return m; // sheet was re-flipped since; leave it
          const next = { ...m };
          delete next[sheet];
          return next;
        });
      }, animDuration);

      return true;
    },
    [maxPage, animDuration],
  );

  const pump = useCallback(
    function run() {
      clearTimeout(pumpTimer.current);
      pumpTimer.current = null;
      const q = queueRef.current;
      while (q.length) {
        const wait = nextFlipAt.current - performance.now();
        if (wait > 0) {
          pumpTimer.current = setTimeout(run, wait);
          return;
        }
        if (flipOnce(q.shift())) {
          nextFlipAt.current = performance.now() + stagger;
        } else {
          q.length = 0; // hit the start/end of the book
        }
      }
    },
    [flipOnce, stagger],
  );

  const enqueue = useCallback(
    (dir, steps = 1, maxQueued = Infinity) => {
      const q = queueRef.current;
      if (q.length && q[0] !== dir) q.length = 0; // direction change cancels pending flips
      for (let i = 0; i < steps && q.length < maxQueued; i++) q.push(dir);
      pump();
    },
    [pump],
  );

  const goNext = useCallback(() => enqueue(1), [enqueue]);
  const goPrev = useCallback(() => enqueue(-1), [enqueue]);
  const goTo = useCallback(
    (target) => {
      queueRef.current.length = 0;
      const diff = target - pageRef.current;
      if (diff) enqueue(Math.sign(diff), Math.abs(diff));
    },
    [enqueue],
  );

  // Clear timers on unmount
  useEffect(() => {
    const lands = landTimers.current;
    return () => {
      clearTimeout(pumpTimer.current);
      Object.values(lands).forEach(clearTimeout);
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Input
  // ---------------------------------------------------------------------------

  const isInView = useCallback(() => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    return (
      rect.top < window.innerHeight * 0.7 &&
      rect.bottom > window.innerHeight * 0.3
    );
  }, []);

  // Scroll: non-locking, accumulates delta while the book is in view
  useEffect(() => {
    const handleScroll = () => {
      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      if (!isInView()) {
        accumulatedScroll.current = 0;
        return;
      }

      // During the cooldown, throw scroll away rather than banking it. Otherwise a
      // fast wheel spin or trackpad momentum fires a burst of flips once it ends.
      if (performance.now() < scrollLockedUntil.current) {
        accumulatedScroll.current = 0;
        return;
      }

      accumulatedScroll.current += delta;
      if (Math.abs(accumulatedScroll.current) >= scrollOffset) {
        // +1 = the flip about to run; scrollQueue = extras allowed to wait behind it
        enqueue(accumulatedScroll.current > 0 ? 1 : -1, 1, scrollQueue + 1);
        accumulatedScroll.current = 0;
        scrollLockedUntil.current = performance.now() + scrollLock;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enqueue, scrollOffset, scrollLock, scrollQueue, isInView]);

  // Keyboard: left/right only, and only while the book is on screen.
  // (Up/down would also scroll the page and double-trigger via the scroll listener.)
  useEffect(() => {
    const handleKey = (e) => {
      if (!isInView()) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, isInView]);

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------

  // Distance from the table: top of each pile is highest, so it always wins depth sorting.
  const sheetDepth = (i) => {
    const rank = i < currentPage ? currentPage - 1 - i : i - currentPage;
    return (DEPTH_LEVELS - Math.min(rank, DEPTH_LEVELS)) * DEPTH_GAP;
  };

  // Mount a few sheets either side (so images are loaded before they're revealed),
  // plus any sheet that's still mid-flight.
  const isMounted = (i) =>
    (i >= currentPage - 3 && i <= currentPage + 2) || moving[i] != null;

  const showSpine = currentPage > 0 && currentPage < maxPage;
  const showPrev = currentPage > 0;
  const showNext = currentPage < maxPage;

  return (
    <div
      ref={containerRef}
      className={[styles.wrapper, styles[size], className]
        .filter(Boolean)
        .join(" ")}
      aria-label="Flip book"
    >
      <div className={styles.scene}>
        {/* 3D stage: only the sheets (and spine) live in the preserve-3d context */}
        <div className={styles.stage}>
          {showSpine && <div className={styles.spine} />}

          {sheets.map((sheet, i) => {
            if (!isMounted(i)) return null;
            const isFlipped = i < currentPage;
            const isTurning = moving[i] != null;

            return (
              <div
                key={i}
                className={[
                  styles.sheet,
                  isFlipped ? styles.flipped : "",
                  isTurning ? styles.turning : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  transform: `translateZ(${sheetDepth(i)}px) rotateY(${
                    isFlipped ? -180 : 0
                  }deg)`,
                  "--anim-duration": `${animDuration}ms`,
                }}
              >
                {/* Front face (right-side page) */}
                <div className={styles.front}>
                  {sheet.front && (
                    <Image
                      src={sheet.front}
                      alt={`Page ${i * 2 + 1}`}
                      fill
                      className={styles.pageImg}
                      sizes="50vw"
                      priority={i <= 1}
                    />
                  )}
                  <div className={styles.pageShadowFront} />
                  <div className={styles.turnShade} />
                </div>

                {/* Back face (left-side page, visible after flip) */}
                <div className={styles.back}>
                  {sheet.back && (
                    <Image
                      src={sheet.back}
                      alt={`Page ${i * 2 + 2}`}
                      fill
                      className={styles.pageImg}
                      sizes="50vw"
                    />
                  )}
                  <div className={styles.pageShadowBack} />
                  <div className={styles.turnShade} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons sit outside the 3D stage so pages never cover them */}
        {showPrev && (
          <button
            className={[styles.navBtn, styles.navPrev].join(" ")}
            onClick={goPrev}
            aria-label="Previous page"
          >
            <span className={styles.navArrow} />
            <span className={styles.navLine} />
          </button>
        )}

        {showNext && (
          <button
            className={[styles.navBtn, styles.navNext].join(" ")}
            onClick={goNext}
            aria-label="Next page"
          >
            <span className={styles.navLine} />
            <span
              className={[styles.navArrow, styles.navArrowRight].join(" ")}
            />
          </button>
        )}
      </div>

      {/* Page indicator dots — jumping several spreads riffles through each page */}
      <div className={styles.dots} aria-hidden="true">
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <button
            key={i}
            className={[styles.dot, i === currentPage ? styles.dotActive : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => goTo(i)}
            aria-label={`Go to spread ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
