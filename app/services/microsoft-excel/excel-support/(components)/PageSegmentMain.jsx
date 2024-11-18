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
          <p>Excel Expert Consultants</p>
          <h2>Help and Training</h2>
          <p>
            Are you struggling with some of the features in Excel? Do you need
            some guidance from time to time?
          </p>
          <p>
            Via remote access (Skype, Team Viewer or your preferred app) and the
            phone, we can offer you instant support and advice. Whether you are
            an individual or have a team of people, our team of experts are
            ready to talk through your requirements and help work through your
            issues. You'll appreciate having your own dedicated consultant
            available for support when you need them most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
