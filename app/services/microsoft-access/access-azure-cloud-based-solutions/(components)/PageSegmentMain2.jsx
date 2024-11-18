import Image from "next/image";
import React from "react";

import styles from "../../../../../styles/pageSegment2.module.css";

import lady from "../../../../../public/service-img-1.webp";

const PageSegmentMain2 = () => {
  return (
    <section className={styles.pageSegment}>
      <Image
        src={lady}
        alt="lady in an office environment"
        width={770}
        height={424}
      />

      <div className={styles.contents}>
        <h3>Contents</h3>
        <a href="#existing-access">
          <div className={styles.contentLink}>
            <p>Existing Access Databases</p>
          </div>
        </a>
        <a href="#web-apps">
          <div className={styles.contentLink}>
            <p>Web Apps Linked to Databases</p>
          </div>
        </a>
        <a href="#is-access-azure">
          <div className={styles.contentLink}>
            <p>Is Access/Azure for You?</p>
          </div>
        </a>
        <a href="#alternatives">
          <div className={styles.contentLink}>
            <p>Alternatives to Access/Azure</p>
          </div>
        </a>
        <a href="#requirements">
          <div className={styles.contentLink}>
            <p>Access/Azure Requirements</p>
          </div>
        </a>
        <a href="#low-cost">
          <div className={styles.contentLink}>
            <p>Low Cost Solution</p>
          </div>
        </a>
        <a href="#experts">
          <div className={styles.contentLink}>
            <p>Microsoft Database Solution Experts</p>
          </div>
        </a>
      </div>

      <div className={styles.info}>
        <h2>Database Analysis, Design and Development</h2>
        <p>
          With Microsoft Azure we can host your data in the cloud with
          Microsoft. Your data can then be accessed from our custom built Access
          databases which can access data from any location, allowing us to
          create cloud based solutions for Microsoft Access.
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
