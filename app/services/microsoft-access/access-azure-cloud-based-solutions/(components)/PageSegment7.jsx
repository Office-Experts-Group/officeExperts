import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../../public/dashboard400x240.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="low-cost"
      style={{ marginTop: "4rem" }}
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
            <h2>Low Cost Solution</h2>
          </div>
          <p>
            There is a monthly fee for hosting a database with Azure. If you
            would like us to take care of the maintenance and hosting then the
            current cost is $35 per month for a small to medium size data usage.
            Once a custom database is delivered there are no further costs
            unless you require ongoing help, training or additions to the
            database. We are always here to help you with any ongoing
            requirements.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
