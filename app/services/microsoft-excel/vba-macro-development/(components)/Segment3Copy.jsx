import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import cloud from "../../../../../public/Cloud400x267.webp";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} style={{ padding: "8rem 10vw" }}>
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
            <h2>Add-ins to Extend Functionality</h2>
          </div>
          <p>
            We can create add-ins for you using VBA. Add-ins can be used to
            extend the functionality of all of your Office products. In the case
            of Excel, add-ins let you add global functionality to your workbooks
            by allowing your macros to be available to all workbooks when Excel
            is opened. There are several ways to achieve this and we would be
            more than happy to point your company in the right direction.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
