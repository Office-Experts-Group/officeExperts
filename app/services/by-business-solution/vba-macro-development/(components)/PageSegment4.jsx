import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import success from "../../../../../public/success400x267.webp";

const Segment4Repeat = () => {
  return (
    <div
      className="animate-wrapper"
      id="add-ins"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "10rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content} style={{ width: "90%" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Add-ins To Extend Functionality
            </h2>
            <p>
              We can help you put an end to messy documents that break corporate
              branding.
            </p>
            <p>
              We can create add-ins for you using VBA. Add-ins can be used
              extend the functionality of all of your Office products. In the
              case of Excel, add-ins let you add global functionality to your
              workbooks by allowing your macros to be available to all workbooks
              when Excel is opened.
            </p>
            <p>
              There are several ways to achieve this and we would be more than
              happy to point your company in the right direction.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={success}
              alt="person clicking a computer mouse"
              width={400}
              height={267}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
