import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import migrate from "../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
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
            <p>Custom Design and Development</p>
            <h2>Power Platform Expert Consulting Services</h2>
            <p>
              With competitive pricing and a prompt high quality service, our
              consultants excel in the Microsoft Power Platform of low-code
              tools and software. We specialise in custom business applications
              to efficiently perform daily tasks such as managing customer
              information, automating approvals and sending notifications.
            </p>
            <p>
              Office Experts have your business process and workflow needs
              covered across the spectrum of databases, automation, dashboards,
              reporting, integration and so much more.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
