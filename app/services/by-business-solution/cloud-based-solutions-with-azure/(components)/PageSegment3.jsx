import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import cloud from "../../../../../public/Cloud400x267.webp";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} id="visual-studio">
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
            <h2>Cloud Based Azure Databases using Visual Studio</h2>
          </div>
          <p>
            If you have an existing Microsoft Access In this solution, the back
            end data resides in an Azure SQL Server database hosted with
            Microsoft in the cloud. This means the GUI can run on any PC, and
            your external staff or customers can run the application without
            having to be connected directly to a server. We tend to use this
            type of solution where portability is essential, all devices are
            Windows based and Access is not a viable solution.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
