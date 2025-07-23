import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import migrate from "../../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  const checkItems = [
    "Create an Excel Dashboard that extracts data automatically from SQL Server and sets up your pivot charts and tables in your workbook for a periodic report.",
    "Automatically generate Word documents for your customers using the data in your existing SQL Server database(s).",
  ];
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Connect your data, streamline workflows...</p>
            <h2>Empower Your Business with Custom Online Solutions</h2>
            <p>
              Do you need your spreadsheets online or connected to a database?
            </p>
            <p>
              Online solutions are moving at a fast pace. With so many options,
              it is hard to even know what the options are, let alone which
              option is best.
            </p>
            <p>
              We work with many online solutions including SharePoint, <Link href={"/services/microsoft-office-365"}>Office
              365</Link>, <Link href="/services/microsoft-dot-net">ASP.NET</Link>, <Link href={"/services/by-business-solution/cloud-based-solutions-with-azure"}>Azure</Link> and Google Docs.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
