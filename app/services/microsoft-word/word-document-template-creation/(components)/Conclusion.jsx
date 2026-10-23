import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";
import Link from "next/link";

const Conclusion = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "3rem 0" }}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.content}>
            <p style={{ fontWeight: "700", textAlign: "center" }}>
              With Word Experts template solutions with
              <Link href={"/custom-toolbars-and-ribbons"}>
                {" "}
                custom Word ribbon
              </Link>
              , you're not just getting a template, you're gaining a long-term
              solution for consistent branding, efficient workflows, and
              polished communication. Every document your team creates will be
              visually striking, professionally formatted, and effortless to
              use, giving your organisation a cohesive, high-quality presence
              across all its documentation.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Conclusion;
