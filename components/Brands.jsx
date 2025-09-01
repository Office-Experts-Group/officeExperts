"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/brands.module.css";

import { brandData } from "../brandData";

export default function Brands() {
  // State to track which brand index each position is showing
  const [positionIndices, setPositionIndices] = useState([0, 1, 2, 3, 4]);
  // State to track which positions are currently fading
  const [fadingPositions, setFadingPositions] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const numberOfPositions = 5;
  const cycleDuration = 4000; // Each brand shows for 2 seconds
  const staggerDelay = 400; // 400ms delay between each position starting to fade

  useEffect(() => {
    // Create intervals for each position with staggered timing
    const intervals = [];

    for (let position = 0; position < numberOfPositions; position++) {
      // Start each position's interval with a staggered delay
      const timeoutId = setTimeout(() => {
        const intervalId = setInterval(() => {
          // Start fade out
          setFadingPositions((prev) => {
            const newFading = [...prev];
            newFading[position] = true;
            return newFading;
          });

          // After fade out completes, change brand and fade back in
          setTimeout(() => {
            setPositionIndices((prev) => {
              const newIndices = [...prev];
              newIndices[position] =
                (newIndices[position] + numberOfPositions) % brandData.length;
              return newIndices;
            });

            // Fade back in
            setFadingPositions((prev) => {
              const newFading = [...prev];
              newFading[position] = false;
              return newFading;
            });
          }, 500); // This should match your CSS transition duration
        }, cycleDuration);

        intervals.push(intervalId);
      }, position * staggerDelay);

      intervals.push(timeoutId);
    }

    // Cleanup function
    return () => {
      intervals.forEach((id) => {
        clearInterval(id);
        clearTimeout(id);
      });
    };
  }, []);

  return (
    <section className={styles.brands}>
      <div className={styles.brandContainer}>
        {positionIndices.map((brandIndex, position) => {
          const brand = brandData[brandIndex];
          const isVisible = !fadingPositions[position];

          return (
            <div
              key={position}
              className={`${styles.brandPosition} ${
                isVisible ? styles.visible : styles.hidden
              }`}
            >
              <Link
                href={brand.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={styles.brandLink}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className={styles.brandImage}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
