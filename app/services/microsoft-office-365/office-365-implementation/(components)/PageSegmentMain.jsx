import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import migrate from "../../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Let Us Find</p>
            <h2>The Best Plan For You!</h2>
            <p>
              Microsoft offers a wide range of Office 365 subscription plans
              that target, individuals, businesses and business-like entities of
              all sizes. With the tremendous value and sheer amount of choice,
              it can be overwhelming to choose the right plan for you.
            </p>
            <p>
              Our experts are ready to consult with you to gain an understanding
              of your business and the challenges you face. With our product
              experience and in depth knowledge of what each subscription
              offers, we will advise you of the best plan for your organisation
              as well as how to take advantage the applications and features
              within that plan.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
