import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegment.module.scss";

import dreadLady from "../../../../../public/dreadLady.webp";
import semi from "../../../../../public/shapes/semi600x600.webp";

const PageSegmentMain = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "8rem 10vw", margin: "0" }}
    >
      <Image
        src={semi}
        alt="shape"
        className={styles.semi}
        width={600}
        height={600}
      />
      <div className={styles.imgWrapper}>
        <Image
          src={dreadLady}
          alt="lady in an office environment"
          width={540}
          height={480}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Transform Your Data</p>
          <h2>Custom Reporting Solutions Tailored to Your Needs</h2>
          <p>
            If you need help with charting, pivot charts, pivot tables or any
            other Excel features then our experts can help. Our experts can
            create end reporting solutions using the features in Excel,
            including the use of the VBA programming language if required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
