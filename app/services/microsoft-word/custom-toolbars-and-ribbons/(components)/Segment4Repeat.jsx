import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import designer from "../../../public/designer.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Custom Document Components for Tailored Solutions
            </h2>
            <p>
              Our custom components streamline the entire document lifecycle,
              from drafting and editing through to approval and publishing.
              Automated features such as pre-populated templates, standardised
              headers and footers, and context-sensitive toolbars mean your
              staff can create polished, professional documents..
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={designer}
              alt="digital design written in style"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
