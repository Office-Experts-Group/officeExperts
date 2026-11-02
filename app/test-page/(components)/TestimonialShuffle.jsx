"use client";
// app/test-page/(components)/TestimonialShuffle.jsx
// Six-card testimonial grid that works through the whole list: every few
// seconds one card fades out and comes back with the next testimonial.
// Card heights are fixed and quotes are clamped, so swapping content never
// changes the size of the section (no layout shift).
// Rotation pauses on hover or focus, while scrolled out of view, when the
// visitor presses pause, and never starts for reduced motion.

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "@/styles/testimonialShuffle.module.scss";
import { QuoteIcon, PauseIcon, PlayIcon } from "../(svgs)/HomeIcons";

const SLOT_COUNT = 6; // cards in the grid on desktop and tablet
const MOBILE_SLOTS = 3; // cards shown on phones (matches the SCSS)
const SWAP_EVERY = 2000; // ms between card swaps
const FADE_TIME = 400; // ms, matches the .fading transition in the SCSS

// Initials for testimonials without a logo
const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const TestimonialShuffle = ({ items }) => {
  // Which testimonial (by index into items) each card is showing
  const [slots, setSlots] = useState(() =>
    items.slice(0, SLOT_COUNT).map((_, index) => index),
  );
  const [fadingSlot, setFadingSlot] = useState(-1);
  const [held, setHeld] = useState(false); // hover or keyboard focus
  const [onScreen, setOnScreen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const rootRef = useRef(null);
  const nextItem = useRef(SLOT_COUNT); // next testimonial to bring in
  const tick = useRef(0); // which card swaps next

  const canRotate = items.length > SLOT_COUNT;

  // Respect the visitor's reduced motion setting
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  // Only rotate while the grid is on screen
  useEffect(() => {
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Swaps one card: fade out, change the testimonial, fade back in
  useEffect(() => {
    if (!canRotate || held || !onScreen || reducedMotion) return;

    let fadeTimer;
    const interval = setInterval(() => {
      // Phones only show the first three cards, so only rotate those
      const visible = window.matchMedia("(max-width: 766px)").matches
        ? MOBILE_SLOTS
        : SLOT_COUNT;
      const slot = tick.current % visible;
      tick.current += 1;

      setFadingSlot(slot);
      fadeTimer = setTimeout(() => {
        setSlots((current) => {
          const updated = [...current];
          updated[slot] = nextItem.current % items.length;
          return updated;
        });
        nextItem.current += 1;
        setFadingSlot(-1);
      }, FADE_TIME);
    }, SWAP_EVERY);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
    };
  }, [canRotate, held, onScreen, reducedMotion, items.length]);

  return (
    <div
      ref={rootRef}
      className={styles.wrapper}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      {/* aria-live off: swaps are not announced, screen readers read the grid as is */}
      <ul className={styles.grid} aria-live="off">
        {slots.map((itemIndex, slot) => {
          const item = items[itemIndex];
          return (
            // Keyed by slot so the same card fades out and back in
            <li
              key={slot}
              className={`${styles.card} ${
                fadingSlot === slot ? styles.fading : ""
              }`}
            >
              <figure className={styles.figure}>
                <span className={styles.quoteMark}>
                  <QuoteIcon />
                </span>
                <blockquote className={styles.quote}>
                  <p>{item.content}</p>
                </blockquote>
                <figcaption className={styles.caption}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      width={item.width}
                      height={item.height}
                      className={styles.logo}
                    />
                  ) : (
                    <span className={styles.initials} aria-hidden="true">
                      {getInitials(item.name)}
                    </span>
                  )}
                  <span className={styles.person}>
                    <span className={styles.name}>{item.name}</span>
                    {item.contact && (
                      <span className={styles.company}>{item.contact}</span>
                    )}
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TestimonialShuffle;
