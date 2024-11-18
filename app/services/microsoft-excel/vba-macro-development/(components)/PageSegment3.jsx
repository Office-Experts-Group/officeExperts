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
            <h2>VBA Macros in MS Office</h2>
          </div>
          <p>
            With macros we can create automated solutions to reduce man hours,
            validate user tasks and link your Office application with 3rd party
            products.
          </p>
          <p>
            All Office products come with macro recorders which allow you to
            record a series of steps you would like to be able to repeat. In
            recording a macro, the Office product automatically creates the VBA
            code for those steps, but the macro recorder is just the tip of the
            iceberg.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
