import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import tellMeMore from "../../../../../public/tellMeMore.webp";

const PerformanceSection = () => {
  const performanceFeatures = [
    "SQL Server processes queries on the server, sending only the results to Access reducing network traffic by avoiding browser functions.",
    "Supports tens or even hundreds of users working concurrently, compared to Access which begins to slow or corrupt after 10-20 users.",
    "Easily handles databases from a few megabytes to multiple terabytes.",
    "Forms and reports that can take minutes to load now open in seconds.",
  ];

  return (
    <section className={styles.pageSegment} style={{ marginTop: "3rem" }}>
      <div style={{ rotate: "-15deg" }} className={styles.deskOnly}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={tellMeMore}
            alt="Tell me more text"
            width={450}
            height={300}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <h2 style={{ fontSize: "2rem" }}>
            Handle More Data, More Users, and More Work
          </h2>
          <div className={styles.content}>
            <div className={styles.points}>
              {performanceFeatures.map((feature, index) => (
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
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PerformanceSection;
