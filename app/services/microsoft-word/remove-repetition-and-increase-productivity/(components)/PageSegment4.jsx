import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import success from "../../../../../public/success400x267.webp";

const PageSegment4 = () => {
  const checkItems = [
    "Covers",
    "Image layout pages",
    "Chapter break pages",
    "Pre-built tables",
    "Landscape pages",
    "Content",
    "A3 pages",
    "Multiple column sections",
    "Appendix sections",
    "Terms and conditions sections",
    "Automation of header and footer content",
  ];

  return (
    <div
      className="animate-wrapper"
      style={{ marginBottom: "2rem", marginTop: "-2rem" }}
    >
      <div className={styles.pageSegmentGrid} id="web-apps">
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Simple Integration</h2>
            </div>
            <p>
              We&apos;ll make documents consistent and effortless across your
              business.
            </p>
          </div>
          <div className={styles.pointsGrid}>
            {checkItems.map((text, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={success}
              alt="person clicking a computer mouse"
              width={400}
              height={267}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
