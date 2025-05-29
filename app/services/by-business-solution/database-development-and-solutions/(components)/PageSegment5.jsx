import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import eyes from "../../../../../public/eyes400x263.webp";

const PageSegment3 = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.reversed}`}
      id="SQL-Server"
      style={{ marginBottom: "4rem" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={eyes}
          alt="person clicking a computer mouse"
          width={400}
          height={267}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Access with SQL Server Back-End (Azure or Local)</h2>
          </div>
          <p>
            With a lot of data, over 15 concurrent users or a need to extend
            access to your data, you'll need an SQL Server database which can be
            installed on your local network or <Link href={"/services/by-business-solution/cloud-based-solutions-with-azure"}>in the cloud using Azure.</Link> Azure
            ensures your data is safe, secure, and accessible from anywhere with
            internet.
          </p>
          <p>
            With an Access GUI you'll have powerful forms, querying and
            reporting features. A central database allows for multiple front
            ends such as a rich forms based Access GUI for your staff, and a web
            based interface and/or mobile app for your customers, suppliers and
            contractors.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
