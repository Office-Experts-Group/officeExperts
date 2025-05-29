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
            <p>Microsoft Office 365</p>
            <h2>OneDrive Online Storage</h2>
            <p>
              Online storage has been a growing trend over the past decade,
              and one of the best options available on the market is OneDrive
              from Microsoft. It's a powerful tool that provides users of all
              levels with a number of benefits. OneDrive is available for
              iPhones, Android phones, Windows Phones, iPads, Android tablets,
              Windows tablets, Windows PCs and Macs.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
