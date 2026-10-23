"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "../../../styles/boxSegment.module.scss";
import Image from "next/image";
import Link from "next/link";

import tick from "../../../public/tick.png";
import cross from "../../../public/cross.png";
import thumbsUp from "../../../public/thumbsUp.webp";

const controlItems = [
  "Control content inserted from other documents.",
  "Unknown formatting will default to the 'Normal' style.",
  "Tables will have the default table style applied for consistent branding.",
  "Pasted text will look for default Word styles such as Headings and 'Normal'.",
];

const headacheItems = [
  "Unauthorised formatting from user pasted content.",
  "User manipulated colours, fonts and font sizes.",
  "Incorrect formatting, content, styles and disturbing headings.",
  "Inconsistent fonts, colour themes and branding.",
];

export default function BoxSegment() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const accScroll = useRef(0);
  const lastScrollY = useRef(0);
  const SCROLL_THRESHOLD = 80;
  const ANIM_MS = 900;

  const advance = useCallback(
    (delta) => {
      if (isAnimating) return;
      setStep((prev) => {
        const next = Math.max(0, Math.min(2, prev + delta));
        if (next === prev) return prev;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), ANIM_MS);
        return next;
      });
    },
    [isAnimating],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * -1.5;

      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      if (!inView) {
        accScroll.current = 0;
        return;
      }

      accScroll.current += delta;

      if (Math.abs(accScroll.current) >= SCROLL_THRESHOLD) {
        advance(accScroll.current > 0 ? 1 : -1);
        accScroll.current = 0;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [advance]);

  const rotation = step * -180;
  const isDark = step === 1;

  return (
    <section
      ref={sectionRef}
      className={`${styles.flipSection} ${isDark ? styles.darkSection : styles.lightSection}`}
      id="no-more-headaches"
      style={{ scrollMarginTop: "150px" }}
    >
      {/* LEFT card — text summary + thumbs image top-left */}
      <div className={styles.cardWrapper}>
        <div
          className={styles.cardInner}
          style={{ transform: `rotateX(${rotation}deg)` }}
        >
          <div
            className={`${styles.cardFace} ${styles.face0} ${styles.lightCard}`}
          >
            <div className={styles.cardImageTopLeft}>
              <Image
                src={thumbsUp}
                alt=""
                aria-hidden="true"
                fill
                sizes="600px"
              />
            </div>
            <div className={styles.contentBox}>
              <h2>
                We'll Put You
                <br />
                Back In Control!
              </h2>
              <p>
                With our master templates, users can create sub templates in
                house under our controlled template environment.
              </p>
            </div>
          </div>

          <div
            className={`${styles.cardFace} ${styles.face1} ${styles.darkCard}`}
          >
            <div className={styles.cardImageTopLeft}>
              <Image
                src={thumbsUp}
                alt=""
                aria-hidden="true"
                fill
                sizes="600px"
              />
            </div>
            <div className={styles.contentBox}>
              <h2>
                No More
                <br />
                Headaches!
              </h2>
              <p>
                We can help you put an end to messy documents that break{" "}
                <Link href="/corporate-identity">corporate branding</Link>.
              </p>
            </div>
          </div>

          <div
            className={`${styles.cardFace} ${styles.face2} ${styles.lightCard}`}
          >
            <div className={styles.cardImageTopLeft}>
              <Image
                src={thumbsUp}
                alt=""
                aria-hidden="true"
                fill
                sizes="600px"
              />
            </div>
            <div className={styles.contentBox}>
              <h2>
                We'll Put You
                <br />
                Back In Control!
              </h2>
              <p>
                With our master templates, users can create sub templates in
                house under our controlled template environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT card — bullet points + tick/cross image bottom-right */}
      <div className={styles.cardWrapper}>
        <div
          className={styles.cardInner}
          style={{
            transform: `rotateX(${rotation}deg)`,
            transitionDelay: "100ms",
          }}
        >
          <div
            className={`${styles.cardFace} ${styles.face0} ${styles.lightCard}`}
          >
            <div className={styles.pointsBox}>
              <ul>
                {controlItems.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardImage}>
              <Image src={tick} alt="" aria-hidden="true" fill sizes="600px" />
            </div>
          </div>

          <div
            className={`${styles.cardFace} ${styles.face1} ${styles.darkCard}`}
          >
            <div className={styles.pointsBox}>
              <ul>
                {headacheItems.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardImage}>
              <Image src={cross} alt="" aria-hidden="true" fill sizes="600px" />
            </div>
          </div>

          <div
            className={`${styles.cardFace} ${styles.face2} ${styles.lightCard}`}
          >
            <div className={styles.pointsBox}>
              <ul>
                {controlItems.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardImage}>
              <Image src={tick} alt="" aria-hidden="true" fill sizes="600px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
