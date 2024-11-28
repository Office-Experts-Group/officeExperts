import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import migrate from "../../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  return (
    <section
      id="stuck"
      className={`${styles.pageSegment} ${styles.customMargin}`}
    >
      <div className={styles.imgWrapper}>
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
            <p>Microsoft Word</p>
            <h2>Stuck on an Old Version?</h2>
            <p>
              Are you experiencing the cold reality or unsettling concerns that
              your Microsoft Office workbooks, documents or databases won't
              function correctly with your upgraded version of Microsoft Office?
            </p>
            <p>
              Do you have slow or unworkable existing applications you've
              outgrown? Were they designed poorly or with the wrong product?
            </p>
            <p>
              Do you want to migrate your workbooks or applications to a new
              database or to a cloud based solution?
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
