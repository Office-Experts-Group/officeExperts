import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../../public/dashboard400x240.webp";

const PageSegment7 = () => {
  return (
    <section className={styles.pageSegment} style={{ marginBottom: "4rem" }}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={dashboard}
          alt="person clicking a computer mouse"
          width={400}
          height={267}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Office Integration</h2>
          </div>
          <p>
            All Microsoft Office products include a macro language called VBA.
          </p>
          <p>
            With macros we can create automated solutions to increase
            productivity and reduce man hours, decrease costs, validate user
            tasks and link your Office application with 3rd party products.
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

export default PageSegment7;
