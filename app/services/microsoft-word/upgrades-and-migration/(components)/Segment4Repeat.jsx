import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ marginBottom: "6rem", scrollMarginTop: "150px" }}
        id="we-can-help"
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>We Can Fix Your Word Issues!</h2>
            </div>
            <p>
              Our experts often get calls from clients who have documents and
              templates that, due to older versions, have Macro issues, visual
              issues, image issues – images move around, pagination issues –
              blank pages appear, or the table formatting is no longer correct.
              A lot has changed in recent versions and our experts can help you
              repair and upgrade your older versions.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={eyes}
              alt="person clicking a computer mouse"
              width={600}
              height={394}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
