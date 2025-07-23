import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import cloud from "../../../../../public/Cloud400x267.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegmentCentered}
      id="vsto"
      style={{ marginBottom: "4rem" }}
    >
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
            <h2>Excel Training for All Your Needs</h2>
          </div>
          <p>
            Our Excel Training services are designed to be task specific,
            ensuring that every session addresses the unique challenges you
            face. We provide time and cost-effective solutions tailored to your
            requirements, whether you need <Link style={{ color: "#046999", fontWeight: "700" }} href="/services/microsoft-excel/excel-formulas-and-custom-formulas">help with formulas</Link>, <Link style={{ color: "#046999", fontWeight: "700" }}  href={"/services/microsoft-excel/data-manipulation"}>data analysis</Link>, or
            complex automation tasks. Our training can be conducted onsite or
            through remote access, giving you flexibility in how you learn, and
            making expert guidance readily available no matter your location.
          </p>
          <p>
            We offer both group or individual sessions, allowing for
            personalised attention or collaborative learning based on your
            preference. Our trainers are highly skilled and experienced,
            producing customised "How To" videos that serve as helpful resources
            for your ongoing learning. Rest assured, with our highly experienced
            trainers, you'll receive valuable, practical knowledge to master
            Microsoft Excel efficiently.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
