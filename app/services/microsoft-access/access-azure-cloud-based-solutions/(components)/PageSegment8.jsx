import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import programmer from "../../../../../public/programmer600x400.webp";

const PageSegment8 = () => {
  return (
    <section className={styles.pageSegment} id="experts">
      <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>Microsoft Database Solution Experts</h2>
          </div>
          <p>
            We have developers that can work in all areas of Microsoft database
            development. If you need help designing or determining what is best
            for your business, our talented database programmers can help
            analyse and develop a solution that suits your organisation's
            requirements. Our experienced consultants are ready to help you out.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
        <Image
          src={programmer}
          alt="person clicking a computer mouse"
          width={600}
          height={400}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegment8;
