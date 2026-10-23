"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/templateCards.module.scss";

/**
 * TemplateCards
 *
 * Displays an array of images fanned out like a hand of cards.
 * Each card is rotated and offset to create a cascading spread effect.
 * Hovering a card raises it to the foreground.
 *
 * Props:
 *   images       – array of image src strings or Next.js static imports (required)
 *   className    – optional wrapper className
 *   spread       – how wide the fan spreads in degrees total (default: 30)
 *   offsetX      – px of horizontal stagger per card (default: 28)
 */

export default function TemplateCards({
  images = [],
  className = "",
  spread = 52,
  offsetX = 44,
  cardWidth = 220,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const count = images.length;
  if (count === 0) return null;

  // Fan: evenly distribute rotation across -spread/2 to +spread/2
  // Cards are stacked left-to-right, last card is frontmost by default
  const getRotation = (i) => {
    if (count === 1) return 0;
    const t = i / (count - 1); // 0 → 1
    return -spread / 2 + t * spread;
  };

  // Horizontal offset: cards cascade from left to right
  const getTranslateX = (i) => {
    return i * offsetX - (count * offsetX) / 2;
  };

  // Vertical arc: cards at the extremes dip slightly
  const getTranslateY = (i) => {
    if (count === 1) return 0;
    const t = i / (count - 1);
    // Parabolic arc — centre cards sit higher
    return Math.abs(t - 0.5) * 2 * 24;
  };

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(" ")}
      aria-label="Document preview spread"
    >
      <div className={styles.fan} style={{ "--card-width": `${cardWidth}px` }}>
        {images.map((src, i) => {
          const isHovered = hoveredIndex === i;
          const rotation = getRotation(i);
          const translateX = getTranslateX(i);
          const translateY = getTranslateY(i);

          // z-index: hovered card wins; otherwise first card (i=0) sits on top
          const zIndex = isHovered ? 1000 : count - i;

          return (
            <div
              key={i}
              className={[styles.card, isHovered ? styles.hovered : ""].join(
                " ",
              )}
              style={{
                "--rotation": `${rotation}deg`,
                "--translate-x": `${translateX}px`,
                "--translate-y": `${translateY}px`,
                zIndex,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.cardInner}>
                <Image
                  src={src}
                  alt={`Page ${i + 1}`}
                  fill
                  className={styles.cardImg}
                  sizes="(max-width: 768px) 40vw, 20vw"
                  priority={i === 0}
                />
                <div className={styles.cardSheen} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
