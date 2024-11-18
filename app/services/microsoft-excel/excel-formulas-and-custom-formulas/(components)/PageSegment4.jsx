import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import hand from "../../../../../public/hand600x400.webp";

const PageSegment4 = () => {
  return (
    <div
      className="animate-wrapper"
      style={{ margin: "6rem 0 2rem 0", scrollMarginTop: "150px" }}
      id="created"
    >
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Excel Formulas</h2>
            </div>
            <p>
              Formula intensive workbooks often lead to high maintenance and
              inaccurate results over their lifetime. In fact, workbooks that
              use formulas intensively can result in poor performance, and cause
              crashes and data corruption, so it matters that formulas are set
              up correctly and not overused. Often a few cleverly written custom
              formulas or macros can lead to a more manageable and workable
              workbook, saving you time, money and a few headaches over the long
              term.
            </p>
            <p>
              We can help with all of your formulas and custom formula needs.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hand}
              alt="person hand with digital people above it"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
