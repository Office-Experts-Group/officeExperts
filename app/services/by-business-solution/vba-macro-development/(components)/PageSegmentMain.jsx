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
            <p>Transform Your Business</p>
            <h2>Professional VBA Consultants</h2>
            <p>
            At Office Experts Group, we leverage the power of Visual Basic for Applications (VBA) to transform how your business interacts with Microsoft Office. Our team of certified VBA developers brings over 20 years of experience creating bespoke solutions that automate workflows, enhance functionality, and drive productivity across your organisation.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
