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
        style={{ margin: "8rem 0 2rem 0", scrollMarginTop: "150px" }}
        id="SharePoint-Solutions"
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>SharePoint Solutions</h2>
            <p>
              SharePoint goes beyond data capture and document storage. It can
              also automate and improve the business processes surrounding data
              capture. For example, for company documents, it can capture
              context and versions. We can help you utilise SharePoint to
              improve your company's productivity, efficiency and effectiveness.
            </p>
            <p>
              SharePoint is one of many benefits offered as part of the Office
              365 suite. We can help move your business to the Microsoft cloud
              for a truly mobile office.
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
