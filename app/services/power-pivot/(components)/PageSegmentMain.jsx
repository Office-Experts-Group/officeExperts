import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import query from "../../../../public/query600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={query}
            alt="Query button on a computer keyboard"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Streamline your data. Automate your workflow.</p>
            <h2>Build Advanced Data Models That Drive Business Insight</h2>
            <p>
              At Office Experts Group, our Power Pivot consultants help
              businesses turn raw data into strategic insight. By creating
              robust data models, building powerful calculations, and enabling
              self-service analytics, we ensure your team has the tools they
              need to make informed decisions — fast.
            </p>
            <p>
              With decades of experience across{" "}
              <Link href={"https://www.excelexperts.com.au/"}>Excel</Link>,{" "}
              <Link
                href={
                  "https://www.powerplatformexperts.com.au/services/microsoft-power-bi"
                }
              >
                Power BI
              </Link>
              , and the Microsoft data stack, we bring clarity and structure to
              even the most complex data environments.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
