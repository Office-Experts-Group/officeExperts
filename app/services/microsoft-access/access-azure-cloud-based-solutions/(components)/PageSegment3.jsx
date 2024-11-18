import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import cloud from "../../../../../public/Cloud400x267.webp";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} id="existing-access">
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={cloud}
          alt="person clicking a computer mouse"
          width={400}
          height={267}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Existing Access Databases</h2>
          </div>
          <p>
            If you have an existing Microsoft Access database, we can take your
            back end database and port it to Azure. If your database doesn't
            have a back end we can split it and create a one. We then add some
            code to point your front end database to Azure. Everything will
            remain the same except your data will become accessible from any
            location by being stored in the cloud for everyone to access.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
