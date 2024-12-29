import Image from "next/image";
import React from "react";

import styles from "../../../../../styles/pageSegment2.module.css";

import man from "../../../../../public/man770x430.webp";

const PageSegmentMain2 = () => {
  return (
    <section className={styles.pageSegment} id="access">
      <Image
        src={man}
        alt="man in an office environment"
        width={770}
        height={430}
        priority
      />

      <div className={styles.contents}>
        <h3>Contents</h3>
        <a href="#access">
          <div className={styles.contentLink}>
            <p>Databases Using Access</p>
          </div>
        </a>
        <a href="#visual-studio">
          <div className={styles.contentLink}>
            <p>Databases Using Visual Studio</p>
          </div>
        </a>
        <a href="#integrated-solutions">
          <div className={styles.contentLink}>
            <p>Mobile, Web and Database Integrated Solutions</p>
          </div>
        </a>
        <a href="#sharePoint-solutions">
          <div className={styles.contentLink}>
            <p>SharePoint Solutions</p>
          </div>
        </a>
        <a href="#cloud-based-options">
          <div className={styles.contentLink}>
            <p>Cloud Based Options</p>
          </div>
        </a>
        <a href="#cloud-based-solutions">
          <div className={styles.contentLink}>
            <p>We'll Get You On The Cloud!</p>
          </div>
        </a>
      </div>

      <div className={styles.info}>
        <h2>Cloud Based Azure Databases using Access</h2>
        <p>
          We produce cloud based database solutions most cost effectively with a
          GUI built in Access to allow users to run the application without
          needing to be connected directly to a server. It is extremely cost
          effective to gather data from your clients on any device, store the
          data in the cloud and access it by your Access front end. The cost is
          slightly more than an Access Client/Server database solution, with a
          monthly hosting cost of about $35 per month.
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
