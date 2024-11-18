import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import template from "../../../../../public/template600x400.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="upgrade"
      style={{ padding: "8rem 10vw" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={template}
          alt="person clicking a computer mouse"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Upgrading Your Office Products</h2>
          <p>
            If you utilise macros in your Microsoft Office solutions, some of
            them may fail when upgrading or moving to 64 bit systems. If this is
            the case, we can review and resolve those issues for you.
          </p>
          <p>
            If your workbooks are not functioning correctly under your version
            of Excel, or your documents and templates are not functioning
            correctly under your version of Word, contact us today to clear up
            your technology issues.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
