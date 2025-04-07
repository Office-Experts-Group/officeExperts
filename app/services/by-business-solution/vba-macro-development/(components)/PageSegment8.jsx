import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import programmer from "../../../../../public/programmer600x400.webp";

const PageSegment8 = () => {
  return (
    <section className={styles.pageSegment} id="vba">
      <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>Automate Repetitive Tasks</h2>
          </div>
        </div>
        <div className={styles.content}>
          
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
