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
            <h2 style={{ marginBottom: "1rem" }}>User Friendly Forms</h2>
            <p>
              Do you require an easy step by step form created for simple data
              entry for your staff or clients? By using controls and protection
              we can create user friendly data entry forms from which the data
              will always be returned in a consistent format.
            </p>
            <p>
              We can then use VBA to create a data extraction solution if
              required. Why not chat to one of our designers about your
              requirements.
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
