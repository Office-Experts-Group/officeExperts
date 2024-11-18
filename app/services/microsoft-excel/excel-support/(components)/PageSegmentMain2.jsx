import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../../../../../styles/pageSegment2.module.scss";

import lady from "../../../../../public/service-img-1.webp";

const PageSegmentMain2 = () => {
  return (
    <section className={styles.pageSegment} style={{ margin: "4rem 0 2rem 0" }}>
      <Image
        src={lady}
        alt="lady in an office environment"
        width={770}
        height={424}
      />

      <div className={styles.contents}>
        <h3>Quick Links</h3>
        <Link href="https://www.officeexperts.com.au/services/by-business-solution/dashboards">
          <div className={styles.contentLink}>
            <p>Reporting Solutions</p>
          </div>
        </Link>
        <Link href="https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration">
          <div className={styles.contentLink}>
            <p>Integration with Office products</p>
          </div>
        </Link>
        <Link href="/vba-macro-development">
          <div className={styles.contentLink}>
            <p>VBA Macro Development</p>
          </div>
        </Link>
        <Link href="https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration">
          <div className={styles.contentLink}>
            <p>Integration with 3rd Party Apps</p>
          </div>
        </Link>
        <Link href="/data-manipulation">
          <div className={styles.contentLink}>
            <p>Data Manipulation/Conversion</p>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.contentLink}>
            <p>Custom Ribbons and Toolbars</p>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.contentLink}>
            <p>Custom Workbooks and Templates</p>
          </div>
        </Link>
        <Link href="/add-in-development">
          <div className={styles.contentLink}>
            <p>Add-in Development</p>
          </div>
        </Link>
      </div>

      <div className={styles.info}>
        <h2>Custom Design and Development</h2>
        <p>
          Our team brings a wealth of experience in creating tailored Microsoft
          Excel solutions to streamline and enhance your workflow. We leverage
          the full potential of Excel to meet your specific needs, whether
          through automated reporting, dynamic dashboards, or custom
          functionality that saves your business time and resources.
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
