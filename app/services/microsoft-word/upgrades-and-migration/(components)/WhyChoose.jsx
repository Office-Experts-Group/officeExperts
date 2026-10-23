import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className={`${styles.pageSegment} ${styles.customMargin}`}
    >
      <div
        className={styles.contentWrapper}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <h2>Why Choose Word Experts?</h2>
            <p style={{ lineHeight: "2", color: "#777a7e" }}>
              Post-upgrade document problems can disrupt your entire
              organisation. Our Word specialists provide comprehensive
              troubleshooting and repair services to restore functionality and
              maintain business continuity after version transitions.
            </p>
            <p>
              We offer complete document health assessments, identifying
              compatibility risks before they become problems. Our services
              include automated document testing across Word versions, bulk
              template updates for organisational consistency, custom migration
              scripts for large document libraries, and detailed documentation
              of changes made during upgrades.
            </p>
            <p>
              We also provide staff training on new features and workflow
              adjustments, ensuring your team maximises productivity in the
              upgraded environment.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default WhyChoose;
