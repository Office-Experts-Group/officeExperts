// app/services/microsoft-365/(components)/PageSegmentMain.jsx
import React from "react";

import styles from "@/styles/pageSegment.module.scss";
// Custom ecosystem illustration stored with the route (replaces the cloudOffice.webp stock photo)
import { Microsoft365Svg } from "../(svgs)/Microsoft365Svg";

const PageSegmentMain = () => {
  return (
    <>
      <div className={styles.lightHeroBlock}></div>
      <section className={styles.pageSegment}>
        <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
          <Microsoft365Svg />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <p>Our Expertise</p>
            <h1>
              Unlock the Power of
              <span className={styles.accent}> Office 365</span>
            </h1>
            <p>
              Most businesses are using a fraction of what Office 365 can do.
              Behind the familiar icons of Word, Excel and Outlook lies a
              connected ecosystem of automation, AI, custom applications,
              intelligent data pipelines, and cloud infrastructure, all included
              in your existing subscription and all waiting to be utilised.
            </p>
            <p>
              Our team of consultants and developers work across the entire
              Microsoft ecosystem. We cover initial setup or migration through
              to Copilot AI implementation, Power Platform automation,
              SharePoint intranets, Azure cloud solutions, and deep app-level
              customisation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageSegmentMain;
