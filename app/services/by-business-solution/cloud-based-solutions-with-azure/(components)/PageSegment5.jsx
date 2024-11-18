import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import eyes from "../../../../../public/eyes400x263.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="sharePoint-solutions"
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
            <h2>SharePoint Solutions</h2>
          </div>
          <p>
            SharePoint goes beyond data capture and document storage. It can
            also automate and improve the business processes surrounding data
            capture. For example, for company documents, it can capture context
            and versions. We can help you utilise SharePoint to improve your
            company's productivity, efficiency and effectiveness.
          </p>

          <p>
            SharePoint is one of many benefits offered as part of the Office 365
            suite. We can help move your business to the Microsoft cloud for a
            truly mobile office. The solution cost depends on your requirements.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
