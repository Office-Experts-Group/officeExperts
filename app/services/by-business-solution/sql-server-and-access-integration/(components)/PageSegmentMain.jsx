import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import sql from "../../../../../public/sql.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={sql}
            alt="SQL Server and Microsoft Access database integration"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Reliable, Scalable Data Infrastructure</p>
            <h2>Bring Enterprise Performance to Your Access Database</h2>
            <p>
              Moving your Access data to a Microsoft SQL Server backend allows
              you to keep your existing forms, reports, and interface intact.
              You retain the simplicity and flexibility of Access on the front
              end, while SQL Server provides the power, speed, and security of
              an enterprise-grade database engine.
            </p>
            <p>
              At Office Experts Group, we've helped hundreds of Australian
              organisations upgrade their Access databases to SQL Server,
              delivering faster performance, stronger data protection, and
              improved reliability without disrupting daily operations.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
