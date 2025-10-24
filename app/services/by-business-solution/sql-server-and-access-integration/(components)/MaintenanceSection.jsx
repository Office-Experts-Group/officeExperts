import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import management from "../../../../../public/management.webp";

const MaintenanceSection = () => {
  return (
    <section
      className={`${styles.pageSegmentCenter} ${styles.flip}`}
      style={{ padding: "3rem 10vw 6rem 10vw" }}
    >
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <Image
          src={management}
          alt="Office people working with gears on a table"
          width={450}
          height={300}
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>Simplify Management and Keep Control</h2>
          </div>
          <p>
            SQL Server transforms database administration from a time-consuming
            chore into a streamlined process. Through SQL Server Management
            Studio (SSMS), you gain centralised control over all database
            operations from a single, intuitive interface. Schedule automated
            maintenance tasks, monitor performance metrics in real-time, and
            configure performance tuning parameters without disrupting daily
            operations.
          </p>
          <p>
            Built-in auditing and version control capabilities track every data
            change, providing the accountability and compliance documentation
            vital for regulatory requirements and internal governance.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default MaintenanceSection;
