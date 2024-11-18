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
    <section
      className={styles.pageSegment}
      style={{ padding: "8rem 10vw", backgroundColor: "#f2f3f5" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={pointing}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.pageSegmentCenter}>
        <div className={styles.underline}>
          <h2>What VBA Can Do For You!</h2>
        </div>
        <div className={styles.benefitsList}>
          {points.map((point, index) => (
            <AnimateOnScroll
              key={point}
              animation="slide-right"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
                <div className={styles.tick}>✓</div>
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
