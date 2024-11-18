import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../../public/dashboard400x240.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="cloud-based-solutions"
      style={{ margin: "4rem 0 -2rem 0" }}
    >
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
            <h2>We'll Get You on the Cloud!</h2>
          </div>
          <p>
            Our experts can work in most areas of Microsoft development. If you
            need help designing or determining what is best for your
            organisation, then our experienced team can help analyse, design and
            develop a cloud based solution that suits your organisation's
            requirements.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
