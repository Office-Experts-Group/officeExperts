import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentCenter.module.css";

import pointing from "../../../../../public/pointing600x400.webp";

const PageSegmentCenter = () => {
  const points = [
    "Form creation",
    "Customising toolbars",
    "Automation of common or repetitive tasks",
    "Linking to external data, 3rd party software and databases",
    "Web based data retrieval",
    "User validation",
    "Automatic creation of charts/pivot tables and reports",
    "Sorting and manipulating data",
  ];

  return (
    <section className={`${styles.pageSegment} ${styles.customSegment}`}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={pointing}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.pageSegmentCenter}>
        <h2>What VBA Can Do For You!</h2>
        <div className={styles.benefitsList}>
          {points.map((point, index) => (
            <AnimateOnScroll
              key={point}
              animation="slide-right"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
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
                <p>{point}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageSegmentCenter;
