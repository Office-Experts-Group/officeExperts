import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegmentCenter}
        style={{ margin: "6rem 0", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Need An Integration Solution?
            </h2>
            <p>
              Do you have another Office application, CRM, accounting package or
              other 3rd party product that you want linked to Access?
            </p>
            <p>
              Do you want to extend a 3rd party product's functionality using
              Access?
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={eyes}
              alt="person clicking a computer mouse"
              width={457}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
