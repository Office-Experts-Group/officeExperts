import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import migrate from "../../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  const checkItems = [
    "Leverage Power Pages expertise",
    "Cross-device and cross-browser compatibility",
    "Data integration and interactive visuals",
    "AI-driven insights",
  ];
  return (
    <section
      className={styles.pageSegment}
      style={{ margin: "4rem 10vw 0rem 10vw" }}
      id="enhance-your-business-productivity"
    >
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Feel the Power</p>
            <h2>Enhance your Business with Power Pages</h2>
            <p>
              Power Platform Experts are consultants in leveraging Power Pages,
              a versatile web platform that ensures cross-device and
              cross-browser compatibility. Power Pages offers a range of
              advantages, including effortless data integration, interactive
              visuals, AI-powered insights and robust security and governance
              measures. Allow our expertise to guide you in harnessing the full
              potential of Power Pages, enhancing your business&apos;s digital
              presence.
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
