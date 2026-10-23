import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import apiNetwork from "../../../public/apiNetwork.webp";

const Segment4Repeat = () => {
  return (
    <div
      className="animate-wrapper"
      id="no-more-headaches"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "3rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Why API Integration Matters
            </h2>
            <p style={{ maxWidth: "100%" }}>
              Most businesses use Word daily, but few take advantage of its full
              potential. Through Word API integrations, your organisation can
              connect Word with other platforms and create smarter, more
              efficient workflows.
            </p>
            <p style={{ maxWidth: "100%", marginTop: "1rem" }}>
              Instead of manually copying and pasting data, documents can be
              automatically populated from your CRM, HR platform, or ERP system.
              Reports can be generated with real-time data, and collaboration
              becomes seamless with SharePoint, OneDrive, and Microsoft Teams.
              This kind of Office 365 automation eliminates repetitive tasks,
              improves accuracy, and allows teams to focus on higher-value work.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={apiNetwork}
              alt="design of an API network"
              width={400}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
