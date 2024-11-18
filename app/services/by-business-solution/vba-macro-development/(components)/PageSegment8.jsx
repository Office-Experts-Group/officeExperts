import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import programmer from "../../../../../public/programmer600x400.webp";

const PageSegment8 = () => {
  const checkItems = [
    "Form creation",
    "Web based data retrieval",
    "Customising toolbars",
    "User validation",
    "Automation of common or repetitive tasks",
    "Automatic creation of charts/pivot tables and reports",
    "Linking to external data, 3rd party software and databases",
    "Sorting and manipulating data",
  ];
  return (
    <section className={styles.pageSegment} id="vba">
      <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>What VBA Can Do For You!</h2>
          </div>
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

      <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
        <Image
          src={programmer}
          alt="person clicking a computer mouse"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegment8;
