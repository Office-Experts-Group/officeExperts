import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import desk from "../../../public/desk400x265.webp";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} style={{ marginBottom: "6rem" }}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={desk}
          alt="person clicking a computer mouse"
          width={400}
          height={265}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Other Conversions To Word</h2>
          </div>
          <p>
            Do you have documents in products such as InDesign or in other
            formats that need to be converted to a professional and easy to use
            Word Document?
          </p>

          <p>
            You may have tried to manually convert a document yourself or tried
            one of the convertors on the market, which all do a terrible job. It
            is quite complicated working out the details of Word as it is
            totally different to products such as InDesign and Illustrator.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
