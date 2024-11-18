import Image from "next/image";
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../components/AnimateOnScroll";

import styles from "../../styles/ctaFull.module.css";

import cta from "../../public/ctaFull.webp";

const CTAFull = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaWrapper}>
        <Image src={cta} alt="people in office" fill />
        <AnimateOnScroll animation="fade-up" delay={0.1} duration={1}>
          <h2>Trust the Experts for All Your business Needs</h2>
        </AnimateOnScroll>
        <Link href="/contact-us" className={`${styles.ctaBtn} btn`}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default CTAFull;
