import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegment.module.css";

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
          <p>Expert Consultants</p>
          <h2>Excel Support and Training</h2>
          <p>
          Whether you're struggling with complex formulas, data analysis, pivot tables, or automation tasks, our Excel experts provide tailored support through remote access, over the phone or in house. We deliver instant guidance and practical solutions that keep your business moving forward.
          </p>
          <p>
          From individual professionals to entire departments, we offer flexible support options tailored to your specific needs. Having a dedicated Excel consultant means you'll always have expert help available when deadlines approach or unexpected issues arise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
