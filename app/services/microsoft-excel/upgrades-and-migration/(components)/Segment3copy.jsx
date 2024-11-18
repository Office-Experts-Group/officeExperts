import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../../public/dashboard400x240.webp";

const Segment3copy = () => {
  return (
    <section
      className={styles.pageSegment}
      id="which-is-best"
      style={{ margin: "4rem 0 0 0" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={dashboard}
          alt="person clicking a computer mouse"
          width={400}
          height={240}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Which Add-in Is Best for You?</h2>
          </div>
          <p>
            Firstly, it is important to consider whether an add-in is the right
            solution for you. If the code you need is required for all
            workbooks, then an add-in could be a smart choice.
          </p>
          <p>
            If the add-in features are for your organisation only and security
            and deployment won&apos;t be a barrier for you, then a simple VBA
            add-in will suit your needs, otherwise a VSTO add-in may be
            required.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Segment3copy;
