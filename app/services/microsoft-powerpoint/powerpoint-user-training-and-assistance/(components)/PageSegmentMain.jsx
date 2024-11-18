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
            <p>Microsoft PowerPoint Design Services</p>
            <h2>We're Here For You!</h2>
            <p>
              Are you struggling with PowerPoint? Do you need some guidance from
              time to time?
            </p>
            <p>
              Via remote access or over the phone, we can offer you instant help
              and advice. Whether you are an individual or have a team of
              people, our experts are ready to talk through your requirements
              and help work through your issues. You'll appreciate having your
              own dedicated consultant available when you need them most.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
