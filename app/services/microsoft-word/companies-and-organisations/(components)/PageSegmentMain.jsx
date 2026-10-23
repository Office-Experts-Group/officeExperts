import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import blueCode from "../../../public/blueCode600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={blueCode}
            alt="digital design featuring a person and code"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Expert Advice</p>
            <h2>Companies and Organisations</h2>
            <p>
              Our team of Word design experts deliver versatile templates that
              meet the needs of any company or organisation. Our{" "}
              <Link href={"/meet-the-team"}>experienced word designers</Link> will ensure
              your corporate identity is protected and can cut your costs
              through setting you up to produce your own inhouse reports.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
