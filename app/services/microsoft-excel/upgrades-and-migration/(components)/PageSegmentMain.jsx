import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegment.module.scss";

import dreadLady from "../../../../../public/dreadLady.webp";
import semi from "../../../../../public/shapes/semi600x600.webp";

const PageSegmentMain = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "6rem 10vw", margin: "0" }}
      id="upgrades"
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
          <p>Upgrade and boost performance</p>
          <h2>Seamless Excel Upgrades and Migration Solutions</h2>
          <p>
            Are you experiencing the cold reality or unsettling concerns that
            your Excel workbooks won't function correctly with your upgraded
            version of Microsoft Excel?
          </p>
          <p>
            Do you have slow or unworkable applications that your business has
            outgrown or that were designed poorly or with the wrong product?
          </p>
          <p>
            Do you want to migrate your workbooks or applications to a new
            database or to a cloud based solution?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
