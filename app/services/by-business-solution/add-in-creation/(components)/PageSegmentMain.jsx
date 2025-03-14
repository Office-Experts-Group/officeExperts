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
            <p>Why Use Add-Ins?</p>
            <h2>Add Functionality to Microsoft Office, Excel and Word</h2>
            <p>
              Add-ins extend the functionality of Office products and can make
              new functionality available to all of your staff, documents and
              workbooks.
            </p>
            <p>
              Add-ins are a great solution for repetitive tasks that you want to
              perform in multiple documents or workbooks.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
