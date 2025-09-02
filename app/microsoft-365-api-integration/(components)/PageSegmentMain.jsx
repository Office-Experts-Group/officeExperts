import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import api from "../../../public/api.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={api}
            alt="Application Programming Interfaces text"
            width={600}
            height={500}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Go Beyond the Desktop</p>
            <h2 style={{ marginTop: "1rem" }}>
              Seamless Integration via Modern API's
            </h2>
            <p>
              In 2025, businesses demand mobility, flexibility, and speed.
              That's why we go beyond traditional desktop-bound Microsoft 365
              setups to deliver responsive portals that surface live data for
              your entire team. Our mobile apps for field workers are designed
              with offline sync to SharePoint, ensuring productivity even in
              low-connectivity environments. And with Progressive Web Apps for
              Office workflows, we create installable, cross-platform
              experiences that feel native, without the overhead of app stores.
            </p>
            <p>
              Whether you're looking to streamline operations, empower your
              mobile workforce, or modernise legacy systems, Office Experts
              delivers scalable, secure, and intelligent solutions tailored to
              your needs.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
