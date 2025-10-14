import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

const PageSegment8 = () => {
  return (
    <section className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
      <div className={styles.centered}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Microsoft Graph API</h2>
            </div>
            <p>
              Take your 3rd-party integrations to the next level with the
              Microsoft Graph API. Unlike traditional ODBC connections, Graph
              API provides unified access to all your Microsoft 365 services
              including Teams, SharePoint, OneDrive, and Outlook. This means you
              can create sophisticated workflows that automatically sync data
              between your business systems and Office applications in
              real-time. These solutions work seamlessly across web, desktop,
              and mobile Office applications, giving your team consistent
              functionality regardless of how they access their tools.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div className={styles.centered}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Office.js Add-in Development</h2>
            </div>
            <p>
              While VBA macros have served businesses well for years, Office.js
              add-ins represent the future of Office customisation. These{" "}
              <Link
                href={
                  "https://www.accessexperts.com.au/cloud-based-solutions-with-azure"
                }
              >
                cloud-based solutions
              </Link>{" "}
              work across all Office platforms and offer enhanced user
              interfaces with custom task panes and ribbon commands that feel
              native to the Office experience. Unlike traditional macros,
              Office.js add-ins can integrate directly with your existing
              business applications via modern APIs, and they update
              automatically without requiring manual deployment to each user's
              machine.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment8;
