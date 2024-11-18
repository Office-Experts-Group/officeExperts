import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import success from "../../../../../public/success400x267.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "No more unauthorised formatting from user pasted content",
    "No more user manipulated colours, fonts and font sizes",
    "No more unauthorised formatting being populated into the content and styles, disturbing headings and list numbering orders",
    "No more creating tables and graphs with incorrect colour themes",
  ];

  return (
    <div
      className="animate-wrapper"
      id="no-more-headaches"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 3rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>No More Headaches!</h2>
            <p>
              We can help you put an end to messy documents that break corporate
              branding.
            </p>
          </div>

          <div className={styles.points}>
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

export default Segment4Repeat;
