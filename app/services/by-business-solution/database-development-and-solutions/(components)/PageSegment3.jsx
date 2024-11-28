import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import cloud from "../../../../../public/Cloud400x267.webp";

const PageSegment3 = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.noImg}`}
      id="why-choose-access"
      style={{ marginBottom: "2rem" }}
    >
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
            <h2>Why Choose An Access Database?</h2>
          </div>
          <p>
            Access is an efficient, reliable and cost effective desktop database
            management solution. Often the “go to” solution when Excel workbooks
            get too big and complex, Access can organise data more efficiently,
            better maintain data integrity and provide simultaneous multi-user
            access to your data. Scalable and easily handling most business
            processes, Access provides a rich forms based GUI with powerful
            querying, reporting and charting tools.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
