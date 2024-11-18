import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import programmer from "../../../../../public/programmer600x400.webp";

const PageSegment8 = () => {
  return (
    <section className={styles.pageSegment} id="template-solutions">
      <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>The Solution You Need!</h2>
          </div>
          <p>
            Office Experts Group have developed an advanced Corporate Word
            Template Solution to enable users to effectively and efficiently
            create corporate documents in house. These documents are created
            under a controlled environment, therefore only allowing formatting
            that is consistent to your branding guidelines.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
        <Image
          src={programmer}
          alt="person clicking a computer mouse"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegment8;
