import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import upgrade from "../../../../../public/upgrade600x400.webp";

const PageSegment3 = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.padded}`} id="upgrade">
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={upgrade}
          alt="time to upgrade text on a clock"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            Upgrading Your Office Products
          </h2>
          <p>
            If you utilise macros in your Microsoft Office solutions, some of
            them may fail when upgrading or moving to 64 bit systems. If this is
            the case, we can review and resolve those issues for you.
          </p>
          <p>
            If your workbooks are not functioning correctly under your version
            of Excel, or your <Link href="/services/microsoft-word/word-document-template-creation">documents and templates</Link> are not functioning
            correctly under your version of Word, contact us today to clear up
            your technology issues.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
