import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentCenter.module.css";

import pointing from "../../../../../public/pointing600x400.webp";

const PageSegmentCenter = () => {
  const benefits = [
    "Resolve Your Issues",
    "Onsite or Remote Access",
    "Professional Guidance",
    "Highly Experienced Consultants",
    "Competitive Rates",
    "Code Reviews",
    "Troubleshoot Existing Solutions",
    "Upgrades and Migration",
    "Data Conversions",
    "Documentation of Existing Solutions",
  ];

  return (
    <section className={styles.pageSegment}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={pointing}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.pageSegmentCenter}>
        <div className={styles.underline}>
          <h2>Access Help and Support</h2>
        </div>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit}
              animation="slide-right"
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
    </section>
  );
};

export default PageSegmentCenter;
