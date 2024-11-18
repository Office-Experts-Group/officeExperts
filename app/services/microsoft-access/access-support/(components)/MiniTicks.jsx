import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentCenter.module.css";

import success from "../../../../../public/success400x267.webp";

const MiniTicks = () => {
  const benefits = [
    "Task Specific Training",
    "Time and Cost Effective",
    "Onsite or Remote Access",
    "Group or Individual sessions",
    'We produce "How To" videos',
    "Highly experienced trainers",
  ];

  return (
    <section
      className={styles.pageSegment}
      style={{
        gridTemplateColumns: "1fr 40%",
        gap: "0rem",
        marginBottom: "4rem",
      }}
    >
      <div className={styles.pageSegmentCenter}>
        <div className={styles.underline}>
          <h2>Access Help and Support</h2>
        </div>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit}
              animation="slide-left"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
                <div className={styles.tick}>✓</div>
                <p>{benefit}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
        <Image
          src={success}
          alt="person pointing at a computer screen"
          width={400}
          height={267}
          style={{ marginLeft: "-4rem" }}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default MiniTicks;
