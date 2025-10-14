import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import programmer from "../../../../../public/programmer600x400.webp";

const PageSegment8 = () => {
  return (
    <>
      <section className={styles.pageSegment} style={{ marginBottom: "6rem" }}>
        <div className={styles.centered}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.content}>
              <div className={styles.underline}>
                <h2>Microsoft Graph API</h2>
              </div>
              <p>
                One of the most exciting developments in business intelligence
                is the ability to incorporate rich organisational data from
                Microsoft 365 directly into your dashboards. Microsoft Graph API
                opens up entirely new possibilities for understanding how your
                business actually operates, not just how your traditional
                business systems say it operates.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className={styles.centered}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.content}>
              <div className={styles.underline}>
                <h2>Organisational Insights Dashboard</h2>
              </div>
              <p>
                Imagine a dashboard that doesn't just show you sales figures,
                but also reveals which teams collaborate most effectively, which
                documents drive the most engagement, and which meeting patterns
                correlate with successful project outcomes. Microsoft Graph can
                pull data from Teams conversations, SharePoint document
                activity, Outlook calendar patterns, and{" "}
                <Link href="/services/microsoft-office-365/cloud-backup-with-onedrive ">
                  OneDrive file sharing
                </Link>
                to create a comprehensive picture of organisational
                productivity.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={styles.pageSegment} style={{ marginBottom: "6rem" }}>
        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <Image
            src={programmer}
            alt="person clicking a computer mouse"
            width={450}
            height={300}
          />
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2 style={{ fontSize: "2rem" }}>
                Cross-Platform Executive Dashboards
              </h2>
            </div>
            <p>
              Senior executives need dashboards that work seamlessly whether
              they're in the office, travelling, or working from home. Our
              Microsoft Graph integrations create dashboards that automatically
              adapt to how and where leaders access their information. The same
              dashboard might display detailed analytics on a desktop computer,
              key metrics on a tablet, and critical alerts on a mobile device.
            </p>
            <p>
              More importantly, these dashboards can incorporate context that
              traditional BI tools miss. For example, an executive dashboard
              might not just show that sales are down 15%, but also reveal that
              the sales team's collaboration patterns have changed, key
              documents aren't being accessed as frequently, or meeting cadences
              have shifted in ways that might explain the performance changes.
            </p>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
};

export default PageSegment8;
