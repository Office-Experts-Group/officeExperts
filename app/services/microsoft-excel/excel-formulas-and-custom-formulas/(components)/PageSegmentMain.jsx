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
          <p>Custom Solutions</p>
          <h2>Master Excel Formulas with Expert Solutions</h2>
          <p>
            Having trouble sorting out a formula or do you need a custom formula
            developed to extend Excel's functionality?
          </p>
          <p>
            Sometimes getting a formula to work properly or even understanding
            what may be required can be a difficult task. Some requirements may
            be complex enough that a custom formula may be the best solution.
          </p>
          <p>
            If you need help with formulas or custom formulas, or if you are not
            sure how to tackle an issue, our team of experts can help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
