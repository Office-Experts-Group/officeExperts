import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import cloudSolution from "../../../../../public/cloudSolution600x400.webp";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper" style={{ marginBottom: "2rem" }}>
      <div className={styles.pageSegment} id="web-apps">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Adobe to Word Conversions</h2>
            </div>
            <p>
              Are you a graphic artist struggling to create Word templates that
              are identical to your brilliant Adobe layouts?
            </p>
            <p>Do your Word templates look great but not function well?</p>
            <p>
              We create Word templates that will match your Adobe layouts
              perfectly and will have all of the correct functionality to keep
              your clients happy.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <div className="image-wrapper">
            <Image
              src={cloudSolution}
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

export default PageSegment4;
