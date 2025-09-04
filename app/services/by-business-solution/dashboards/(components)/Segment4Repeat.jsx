import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import dashboards from "../../../../../public/dashboards.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0 ", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Comprehensive Dashboard Solutions
            </h2>
            <p>
              Modern businesses generate data from dozens of different systems,
              your CRM tracks customer interactions, your accounting software
              monitors financial performance, your project management tools
              measure productivity, and your Microsoft 365 environment captures
              collaboration patterns. The challenge isn't collecting this data;
              it's turning it into actionable insights that drive better
              business decisions.
            </p>
            <p>
              Our dashboard solutions bring all these disparate data sources
              together into unified, interactive visualisations that tell the
              story of your business.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={dashboards}
              alt="dashboards on a computer screen"
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
