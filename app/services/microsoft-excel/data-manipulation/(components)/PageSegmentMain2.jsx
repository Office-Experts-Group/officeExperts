import React from "react";
import Image from "next/image";

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
        <h3>Services</h3>
        <div
          className={styles.contentLink}
          style={{
            padding: ".5rem 1rem",
            borderBottom: "1px solid #dbdbdb",
            marginBottom: ".5rem",
          }}
        >
          <p>Data import/export, parsing and processing</p>
        </div>
        <div
          className={styles.contentLink}
          style={{
            padding: ".5rem 1rem",
            borderBottom: "1px solid #dbdbdb",
            marginBottom: ".5rem",
          }}
        >
          <p>Data formatting automation</p>
        </div>
        <div
          className={styles.contentLink}
          style={{
            padding: ".5rem 1rem",
            borderBottom: "1px solid #dbdbdb",
            marginBottom: ".5rem",
          }}
        >
          <p>
            Automated data manipulation solutions using VBA and Visual Studio
          </p>
        </div>
        <div
          className={styles.contentLink}
          style={{
            padding: ".5rem 1rem",
            borderBottom: "1px solid #dbdbdb",
            marginBottom: ".5rem",
          }}
        >
          <p>
            Automated data manipulation solutions using Excel and VBA. Complete
            repetitive day to day tasks in seconds.
          </p>
        </div>
        <div
          className={styles.contentLink}
          style={{
            padding: ".5rem 1rem",
            borderBottom: "1px solid #dbdbdb",
            marginBottom: ".5rem",
          }}
        >
          <p>Bulk data conversions. Batch jobs.</p>
        </div>
        <div
          className={styles.contentLink}
          style={{
            padding: ".5rem 1rem",
            borderBottom: "1px solid #dbdbdb",
            marginBottom: ".5rem",
          }}
        >
          <p>CSV, XML, SQL, JSON and more</p>
        </div>
      </div>

      <div className={styles.info}>
        <h2>Effortless Data Automation and Processing</h2>
        <p>
          Our team specializes in streamlining complex data workflows,
          transforming manual tasks into automated solutions that save you time
          and reduce errors. From importing and exporting large datasets to
          automating formatting and conversions, we harness the power of VBA,
          Excel, and Visual Studio to make data manipulation seamless and
          efficient. Whether it&aspos;s batch processing or handling diverse
          file formats like CSV, XML, and JSON, we ensure your data operations
          are fast and reliable
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
