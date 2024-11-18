import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import success from "../../../../../public/success400x267.webp";

const PageSegment4 = () => {
  const checkItems = [
    "Resolve Your Issues",
    "Document Reviews",
    "Onsite or Remote Access",
    "Troubleshoot Documents",
    "Professional Guidance",
    "Upgrades and Migration",
    "Highly Experienced Consultants",
    "Document Conversions",
    "Competitive Rates",
  ];

  return (
    <div
      className="animate-wrapper"
      id="word-assistance"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 3rem 0" }}>
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

        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Microsoft Word Assistance</h2>
            <p>
              Have our experts take over the word processing logistics for you,
              enabling your team to efficiently create the content you need.
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
      </div>
    </div>
  );
};

export default PageSegment4;
