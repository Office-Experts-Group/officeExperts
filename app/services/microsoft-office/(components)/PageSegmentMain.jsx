import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import migrate from "../../../../public/migrate600x400.webp";

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
            <p>Custom Office Solutions</p>
            <h2>Analysis, Design, Development, Training and Support</h2>
            <p>
              Our Australia-wide, cross-industry consultants specialise in
              custom development, databases, integration, support and data
              manipulation with Office and Microsoft technologies. We deliver a
              prompt, quality service with competitive pricing.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
