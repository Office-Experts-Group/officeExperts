import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import document from "../../../../public/document600x400.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "Handle millions of rows of data with high performance",
    "Build relationships across multiple tables",
    "Create powerful DAX (Data Analysis Expressions) calculations",
    "Generate dynamic pivot tables and dashboards"
  ]
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>What is Power Pivot?</h2>
            <p>
            Power Pivot is Microsoft's in-memory data modeling engine, built directly into Excel and Power BI. It allows you to:</p>
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
            <p>Whether you're working with finance, operations, sales, or any other department, Power Pivot transforms how your team interacts with data — turning spreadsheets into smart, scalable reporting systems.</p>
          </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={document}
              alt="digital design man pushing cloud documents"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
