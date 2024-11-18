import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import template from "../../../../../public/template450x300.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Trusted Solutions for Government Document Standards
            </h2>
            <p>
              Office Experts Group have worked with many Government departments,
              both state and federal, over many years. We understand the
              department's needs and can tailor a solution that will assist
              hundreds of users in creating documents that not only look great
              but also adhere to Accessibility guidelines.
            </p>
            <p>
              With our master templates, users can create many sub templates in
              house under our controlled template environment.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={template}
              alt="person clicking a computer mouse"
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
