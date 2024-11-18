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
            <p>We can help...</p>
            <h2>Streamline Your Business!</h2>
            <p>
              Using Office 365 we can create simple forms that will help you
              eliminate the clutter that comes with paper forms. We can
              streamline your business and processes by moving your paper forms
              to Office 365. You'll be able to search for archived forms easily
              or create reports based on form data in order to help you make
              more informed business decisions.
            </p>
            <p>
              If you need help in create forms for your organisation, our
              consultants are available to talk through your requirements.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
