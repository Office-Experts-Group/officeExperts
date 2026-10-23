// app/fill-in-forms/(components)/PageSegmentMain.jsx

import React from "react";

import { StreamlinedEntrySVG } from "../(svgs)/StreamlinedEntrySVG";

import styles from "../../../styles/fillFormMain.module.css";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      {/* Content now leads on the left */}
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Intuitive Form Solutions </p>
          <h2>
            Streamlined Data Entry with{" "}
            <span className={styles.accent}>Custom Fill-In Forms</span>
          </h2>
          <p>
            Our team of Word design experts can deliver your document templates
            with fill in forms to take your data entry to the next level when it
            comes to simplicity, usability and intuitive design.
          </p>
          <p>
            Instead of a template where every copy is filled in a little
            differently, locked content controls keep the layout, formatting and
            field order identical no matter who&rsquo;s completing it, so the
            data coming back is consistent every time.
          </p>
        </div>
      </div>

      <div className={styles.svgWrapper}>
        <StreamlinedEntrySVG />
      </div>
    </section>
  );
};

export default PageSegmentMain;
