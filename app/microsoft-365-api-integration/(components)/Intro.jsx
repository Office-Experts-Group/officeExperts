import React from "react";

import styles from "../../../styles/intro.module.css";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <p>
        "We harness the power of Microsoft Graph and Office JavaScript
        (Office.js) APIs to surface dynamic, live data and extend Microsoft 365
        beyond the desktop... From robust web portals, mobile apps, and PWAs to
        powerful team driven dashboards. Secure, and offline-capable experiences
        are integrated with SharePoint, Teams, Excel, Outlook, and more."
      </p>
    </section>
  );
};

export default Intro;
