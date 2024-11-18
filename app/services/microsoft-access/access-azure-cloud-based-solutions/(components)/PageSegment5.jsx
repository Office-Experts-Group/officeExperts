import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import eyes from "../../../../../public/eyes400x263.webp";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} id="is-access-azure">
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
            <h2>Is Access/Azure for You?</h2>
          </div>
          <p>
            While we can also create database solutions without using Azure, the
            fact that your database in Azure is an{" "}
            <Link href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/">
              SQL Server database
            </Link>{" "}
            that is cloud based means that some of the previous limitations on
            Access become irrelevant. It also means we can create very cost
            effective solutions, which in the past was not possible for
            web/cloud based applications.
          </p>

          <p>
            The main issue we find with Access solutions arises with
            non-Windows-based devices. In that case, MS Access is not permitted
            to be installed or the scale of the database and users is at a very
            large level.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
