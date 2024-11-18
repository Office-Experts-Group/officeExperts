import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import cloud from "../../../../../public/Cloud400x267.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegmentCentered}
      id="vsto"
      style={{ marginBottom: "4rem" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={cloud}
          alt="person clicking a computer mouse"
          width={400}
          height={267}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>We Build Web Applications!</h2>
          </div>
          <p>
            Using ASP.NET we can custom build fully blown web applications,
            tailored to your business needs!
          </p>
          <p>Our experts are ready to analyse your requirements.</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
