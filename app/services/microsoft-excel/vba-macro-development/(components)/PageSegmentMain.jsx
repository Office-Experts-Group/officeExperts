import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <p>Microsoft Excel Experts</p>
          <h2>Custom Design and Coding</h2>
          <p>
            All Microsoft Office products including Excel, Access, Word,
            Outlook, PowerPoint and Office 365 come with a built-in macro
            language called VBA.
          </p>
          <p>
            Whichever Office products you are working with, our highly
            experienced VBA macro programmers are ready to advise you for all
            kinds of <Link href="/">help in excel</Link> and provide you with
            the best solution to take your business to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
