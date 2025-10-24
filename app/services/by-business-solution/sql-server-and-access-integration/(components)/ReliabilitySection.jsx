import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/expertsAwait.module.css";

import bg from "../../../../../public/service-bg.webp";

import databaseIcon from "../../../../../public/icons/computerBlue.webp";
import backupIcon from "../../../../../public/icons/supportBlue.webp";
import recoveryIcon from "../../../../../public/icons/ideaBlue.webp";
import shieldIcon from "../../../../../public/icons/chartBlue.webp";

const ReliabilitySection = () => {
  return (
    <section className={styles.expertsAwait} style={{ marginTop: "8rem" }}>
      <Image
        className={styles.bgImg}
        src={bg}
        alt="background shape"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <AnimateOnScroll animation="slide-left" delay={0.1} duration={1.2}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.bar}>
              <p></p>
            </div>
            <h2>Eliminate Crashes and Corruption</h2>
          </div>
          <div className={`${styles.text} ${styles.marginText}`}>
            <p style={{ marginTop: "-3rem" }}>
              SQL Server provides enterprise-grade reliability that eliminates
              the database corruption and crashes that plague Access databases.
              Your data remains secure, accurate, and accessible — even during
              unexpected power loss or network failures.
            </p>
            <div className={styles.link}>
              <Link href="/contact-us" className={`${styles.btn} btn`}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
        <div className={styles.points}>
          <div className={styles.point}>
            <Image
              src={databaseIcon}
              alt="Transaction safety icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              <strong>Transaction-safe operations (ACID compliance)</strong>{" "}
              ensure your data remains accurate even during power loss or
              network failure.
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={backupIcon}
              alt="Backup icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              <strong>Automatic backups and recovery tools</strong> protect
              against data loss.
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={recoveryIcon}
              alt="Recovery icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              <strong>Transaction logging</strong> makes it possible to roll
              back errors or recover data from specific points in time.
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={shieldIcon}
              alt="Protection icon"
              width={30}
              height={30}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              <strong>No more "Database has been corrupted" messages</strong> or
              downtime due to bloated Access files.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default ReliabilitySection;
