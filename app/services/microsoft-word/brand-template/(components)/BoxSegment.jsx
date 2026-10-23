"use client";

import React from "react";
import styles from "../../../styles/boxSegment.module.scss";
import Image from "next/image";

import tick from "../../../public/tick.png";

const checkItems = [
  "Companies launching a new brand identity",
  "Businesses seeking to standardise document formats",
  "Organisations looking to improve professional presentation",
  "Teams that need user-friendly documentation tools",
  "Companies merging with consistent document styles",
];

export default function BoxSegment() {
  return (
    <section
      className={`${styles.flipSection} ${styles.lightSection} ${styles.singleSection}`}
      id="no-more-headaches"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.cardWrapper}>
        <div className={styles.cardInner}>
          <div
            className={`${styles.cardFace} ${styles.face0} ${styles.lightCard}`}
          >
            <div className={styles.contentBox}>
              <h2>Who Needs Brand Templates?</h2>
              <p>
                Word templates help organisations ensure documents follow the
                same structure, formatting, and style across teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT card — bullet points + tick image bottom-right */}
      <div className={styles.cardWrapper}>
        <div className={styles.cardInner}>
          <div
            className={`${styles.cardFace} ${styles.face0} ${styles.lightCard}`}
          >
            <div className={styles.pointsBox}>
              <ul>
                {checkItems.map((text, i) => (
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
