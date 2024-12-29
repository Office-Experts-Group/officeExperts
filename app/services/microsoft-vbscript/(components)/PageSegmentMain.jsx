import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import box from "../../../../public/box600x400.webp";

const PageSegmentMain = () => {
  const checkItems = [
    "Windows Command Line Tasks",
    "Process and Backup Automation",
    "Automatically Launch Processes",
    "Batch Jobs",
    "Windows Task Scheduling",
    "File Processing",
  ];

  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={box}
            alt="Two boxing gloves coming together"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Our Experts Unleash</p>
            <h2>The Power Of VBScript!</h2>
            <p>Our experts know when VBScript is the best tool for the job.</p>
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
      </div>
    </section>
  );
};

export default PageSegmentMain;
