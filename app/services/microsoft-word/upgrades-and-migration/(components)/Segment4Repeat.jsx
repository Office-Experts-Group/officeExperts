import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import hammer from "../../../public/hammer.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ marginBottom: "0rem", scrollMarginTop: "150px" }}
        id="we-can-help"
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>We Can Fix Your Word Issues!</h2>
            </div>
            <p>
              We offer complete document health assessments, identifying
              compatibility risks before they become problems. Our services
              include document testing across Word versions, bulk template
              updates for organisational consistency, custom migration scripts
              for large document libraries, and detailed documentation of
              changes made during upgrades. We also provide staff training on
              new features and workflow adjustments, ensuring your team
              maximises productivity in the upgraded environment.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hammer}
              alt="hand holding a hammer"
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
