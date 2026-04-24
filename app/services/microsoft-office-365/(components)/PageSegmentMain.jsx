import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import office from "../../../../public/cloudOffice.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={office}
            alt="People sitting in an office environment"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Our Expertise</p>
            <h2>Unlock the Power of Office 365</h2>
            <p>
              Most businesses are using a fraction of what Office 365 can do.
              Behind the familiar icons of Word, Excel and Outlook lies a
              connected ecosystem of automation, AI, custom applications,
              intelligent data pipelines, and cloud infrastructure, all included
              in your existing subscription and all waiting to be utilised.
            </p>
            <p>
              Our team of consultants and developers work across the entire
              Microsoft ecosystem. We cover initial setup or migration through
              to Copilot AI implementation, Power Platform automation,
              SharePoint intranets, Azure cloud solutions, and deep app-level
              customisation.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
