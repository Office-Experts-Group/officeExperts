"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "@/styles/flipBook.module.scss";

/**
 * FlipBook
 *
 * A 3D page-flipping book component. Images only  no required text.
 * Navigation: scroll-triggered (non-locking) + prev/next click buttons.
 *
 * Page model:
 *   images[0] = cover (right-hand page only, no left ghost)
 *   images[1] = back of sheet 0 (shows on left after first flip)
 *   images[2] = front of sheet 1 (right page of spread 1) ...etc.
 *   If the last sheet has no back image, the left side stays empty after the final flip.
 *
 * Props:
 *   images         array of image src strings or Next.js static imports (required)
 *   size           "full" | "half" (default: "full")
 *   className      optional wrapper className
 *   scrollOffset   px of scroll needed to trigger a page turn (default: 120)
 *   animDuration   flip animation duration in ms (default: 900)
 */

export default function FlipBook({
  images = [],
  size = "full",
  className = "",
  scrollOffset = 120,
  animDuration = 900,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayPage, setDisplayPage] = useState(0);
  const [displayLeftPage, setDisplayLeftPage] = useState(0);
  // Which sheet index is actively mid-flip — gets max z-index so it always renders on top
  const [activeSheet, setActiveSheet] = useState(null);
  const containerRef = useRef(null);
  const accumulatedScroll = useRef(0);
  const lastScrollY = useRef(0);

  // Build sheets: each sheet has a front (right-side image) and back (left-side image).
  // Sheet 0: front = images[0] (cover), back = images[1]
  // Sheet 1: front = images[2], back = images[3] ... etc.
  const totalSheets = Math.ceil(images.length / 2);
  const sheets = Array.from({ length: totalSheets }, (_, i) => ({
    front: images[i * 2] ?? null,
    back: images[i * 2 + 1] ?? null,
  }));

  // currentPage:  0 = book closed (only cover visible on right)
  //               1 = sheet 0 flipped (spread: images[1] left, images[2] right)
  //               N = all sheets flipped
  const maxPage = totalSheets;

  const navigate = useCallback(
    (delta) => {
      if (isAnimating) return;
      const next = Math.max(0, Math.min(maxPage, currentPage + delta));
      if (next === currentPage) return;
      const goingForward = next > currentPage;
      // The sheet that will physically animate: going forward it's the sheet
      // at currentPage (about to flip); going backward it's at next (unflipping)
      const movingSheet = goingForward ? currentPage : next;
      setIsAnimating(true);
      setActiveSheet(movingSheet);
      setCurrentPage(next);
      if (goingForward) {
        if (next === maxPage) {
          setDisplayPage(next);
        }
        // displayLeftPage intentionally NOT touched here at all
        setTimeout(() => {
          setDisplayPage(next);
          setDisplayLeftPage(next); // only update left AFTER sheet has landed
          setIsAnimating(false);
          setActiveSheet(null);
        }, animDuration);
      } else {
        if (next === 0) {
          setDisplayLeftPage(0);
        }
        setDisplayPage(next);
        setTimeout(() => {
          setDisplayLeftPage(next);
          setIsAnimating(false);
          setActiveSheet(null);
        }, animDuration);
      }
    },
    [isAnimating, currentPage, maxPage, animDuration],
  );

  const goNext = useCallback(() => navigate(1), [navigate]);
  const goPrev = useCallback(() => navigate(-1), [navigate]);

  // Scroll listener non-locking, accumulates delta while book is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

      if (!inView) {
        accumulatedScroll.current = 0;
        lastScrollY.current = window.scrollY; // keep this in sync while out of view
        return;
      }

      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY; // ← move this BEFORE the navigate check
      accumulatedScroll.current += delta;

      if (Math.abs(accumulatedScroll.current) >= scrollOffset) {
        navigate(accumulatedScroll.current > 0 ? 1 : -1);
        accumulatedScroll.current = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    lastScrollY.current = window.scrollY;
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, scrollOffset]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  // What's currently visible on the LEFT background (behind flipped sheets)?
  // Uses displayLeftPage so it only appears after the sheet has swept across on
  // the first flip, and clears immediately when returning to page 0.
  const leftBgImage =
    displayLeftPage > 0 ? sheets[displayLeftPage - 1]?.back : null;
  const showLeftBg = !!leftBgImage;

  // What's currently visible on the RIGHT background (beneath the current sheet stack)?
  // Uses displayPage (not currentPage) so it only updates after the flip animation
  // completes when going forward — preventing the next image from popping in early.
  const rightBgImage = sheets[displayPage]?.front ?? null;
  const showRightBg = !!rightBgImage;

  // Spine: only once the book is open (both sides have content)
  const showSpine = currentPage > 0 && currentPage < maxPage;

  // The scene is ALWAYS double-page width  this prevents any layout shift.
  // On the cover (page 0), the right half shows the cover image and the left
  // half is simply transparent (nothing rendered there). Same for the last page
  // if it has no back image. The aspect-ratio never changes, so no reflow.
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
        {/* Spine  only visible mid-book */}
        {showSpine && <div className={styles.spine} />}

        {/* LEFT background  only renders when there's actually a flipped page to show */}
        {showLeftBg && (
          <div className={styles.leftBg}>
            <Image
              src={leftBgImage}
              alt=""
              fill
              className={styles.pageImg}
              sizes="50vw"
            />
          </div>
        )}

        {/* RIGHT background  only renders when there's a front-facing page.
            Always half-width (right side of the double-page scene). */}
        {showRightBg && (
          <div className={styles.rightBg}>
            <Image
              src={rightBgImage}
              alt=""
              fill
              className={styles.pageImg}
              sizes="50vw"
              priority={currentPage === 0}
            />
          </div>
        )}

        {/* Sheets  only render those adjacent to current for performance */}
        {sheets.map((sheet, i) => {
          const isFlipped = i < currentPage;
          const isRelevant =
            Math.abs(i - currentPage) <= 1 || i === 0 || i === totalSheets - 1;
          if (!isRelevant) return null;

          return (
            <div
              key={i}
              className={[styles.sheet, isFlipped ? styles.flipped : ""].join(
                " ",
              )}
              style={{
                zIndex:
                  i === activeSheet
                    ? 999
                    : isFlipped
                      ? i + 10
                      : totalSheets - i + 10,
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
                    priority={i === 0}
                  />
                )}
                <div className={styles.pageShadowFront} />
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
                    priority={false}
                  />
                )}
                <div className={styles.pageShadowBack} />
              </div>
            </div>
          );
        })}

        {/* Navigation buttons */}
        {showPrev && (
          <button
            className={[styles.navBtn, styles.navPrev].join(" ")}
            onClick={goPrev}
            aria-label="Previous page"
            disabled={isAnimating}
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
            disabled={isAnimating}
          >
            <span className={styles.navLine} />
            <span
              className={[styles.navArrow, styles.navArrowRight].join(" ")}
            />
          </button>
        )}
      </div>

      {/* Page indicator dots */}
      <div className={styles.dots} aria-hidden="true">
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <button
            key={i}
            className={[
              styles.dot,
              i === currentPage ? styles.dotActive : "",
            ].join(" ")}
            onClick={() => {
              if (isAnimating) return;
              navigate(i - currentPage);
            }}
            aria-label={`Go to spread ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
