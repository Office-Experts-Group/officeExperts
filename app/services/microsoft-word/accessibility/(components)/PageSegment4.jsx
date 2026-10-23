// app/accessibility/(components)/PageSegment4.jsx

import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import TemplateGovernanceSVG from "../(svgs)/TemplateGovernanceSVG";
import Link from "next/link";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              We Understand Accessibility!
            </h2>
            <p>
              Word Experts have worked with many{" "}
              <Link href="/government-departments">
                Government departments,
              </Link>{" "}
              state, federal and corporate, over 25 years. We understand the
              department's needs and can tailor a solution that will assist
              hundreds of users in creating documents that not only look great
              but also adhere to the latest accessibility guidelines.
            </p>
            <p>
              With our master templates, users can create many sub templates in
              house under our controlled template environment.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.svg}>
          <TemplateGovernanceSVG />
        </div>
      </div>
    </div>
  );
};

export default Segment4Repeat;
