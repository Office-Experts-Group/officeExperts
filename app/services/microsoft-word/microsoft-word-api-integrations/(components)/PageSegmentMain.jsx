import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import javascript from "../../../public/javascript.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div
        className={styles.imgWrapper}
        style={{ height: "fit-content", borderBottom: "none" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={javascript}
            alt="javascript digital design"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Bridging the gap</p>
            <h2>Modern JavaScript Development</h2>
            <p>
              At Word Experts, as part of the Office Experts Group we have
              specialists in Microsoft Word API development and custom
              integrations. With our combined knowledge of the entire Microsoft
              Office Suite and hands-on JavaScript development expertise, we can
              design solutions that save time, reduce errors, and make Microsoft
              Word a more powerful part of your workflow.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
