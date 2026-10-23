import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import migrate from "../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
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
            <p>Simplify Document Creation</p>
            <h2>Seamless Microsoft Word Template Conversions</h2>
            <p>
              Our team of Word design experts take the stress out of your
              company templates by converting all of your organisation's
              documents to our easy to use templates, complete with your
              branding, a consistent look and a professional feel.
            </p>
            <p>
              Let us help you create templates that are easy to use and
              perfectly aligned with your branding.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
