import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import migrate from "../../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  const checkItems = [
    "Expert consultants in Power BI",
    "Enhanced data collaboration",
    "Real time insights and analytics",
    "Drill through and drill down into your data",
  ];
  return (
    <section
      className={styles.pageSegment}
      style={{ margin: "8rem 10vw 0rem 10vw" }}
    >
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Expert Advice</p>
            <h2>Unlock Data-Driven Success with Power BI</h2>
            <p>
              Our trained consultants at Power Platform Experts specialise in
              Power BI, Microsoft’s dynamic business intelligence tool. With our
              expert consultancy services, your business can tap into real-time
              insights, customised analytics and improved collaboration, all
              facilitated by our experienced team.
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
      </div>
    </section>
  );
};

export default PageSegmentMain;
