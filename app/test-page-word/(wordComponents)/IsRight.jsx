import React from "react";
import Link from "next/link";

import styles from "@/styles/isRightWord.module.scss";
import FullscreenVideo from "./FullscreenVideo";

const IsRight = () => {
  return (
    <div className={styles.videoSection}>
      <div className={styles.isRight}>
        <div className={styles.contentWrapper}>
          <div className={styles.sub}>
            <p>Transform Your Documents</p>
          </div>
          <h2>
            Professional Word Template Solutions for{" "}
            <span className={styles.accent}>Your Business</span>
          </h2>
          <p className={styles.text}>
            At Word Experts we create sophisticated Microsoft Word solutions
            that protect, maintain your corporate identity, and streamline
            document creation. Our team of experienced consultants deliver
            professional templates with built-in automation, ensuring consistent
            branding and formatting across your organisation. From government
            departments to corporate entities, we provide comprehensive document
            solutions including template design, accessibility compliance, and
            custom automation to save time and reduce errors.
          </p>
        </div>

        <div className={styles.video}>
          <FullscreenVideo
            src="/videos/word-template-solutions.mp4"
            label="Formatting tab in a custom Microsoft Word template"
          />
          <em>Click for fullscreen video</em>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.contentGrid}>
          <div className={styles.excerpt}>
            <div>
              <div className={styles.bar}></div>
              <h3>Corporate Template Solutions</h3>
            </div>
            <p>
              Protected templates that maintain brand consistency and document
              integrity.
            </p>
          </div>
          <div className={styles.excerpt}>
            <div>
              <div className={styles.bar}></div>
              <h3>Expert Implementation</h3>
            </div>
            <p>
              Comprehensive design, development, and training support
              nationwide.
            </p>
          </div>
        </div>

        <Link href="/about-us" className={`${styles.linkBtn}`}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default IsRight;
