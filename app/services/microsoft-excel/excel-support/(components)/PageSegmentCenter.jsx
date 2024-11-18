import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentCenter.module.css";

import pointing from "../../../../../public/pointing600x400.webp";

const PageSegmentCenter = () => {
  const benefits = [
    { text: "Resolve Your Issues" },
    { text: "Onsite or Remote Access" },
    { text: "Professional Guidance" },
    { text: "Highly Experienced Consultants" },
    { text: "Competitive Rates" },
    { text: "Code Reviews" },
    { text: "Troubleshoot Existing Solutions" },
    {
      text: "Upgrades and Migration",
      href: "/upgrades-and-migration",
    },
    {
      text: "Data Conversions",
      href: "/data-manipulation",
    },
    { text: "Documentation of Existing Solutions" },
  ];

  return (
    <section className={styles.pageSegmentReverse}>
      <div className={styles.pageSegmentCenter}>
        <div className={styles.underline}>
          <h2>We're Here To Support You!</h2>
        </div>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit.text}
              animation="slide-right"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
                <div className={styles.tick}>✓</div>
                {benefit.href ? (
                  <Link href={benefit.href} className={styles.benefitLink}>
                    {benefit.text}
                  </Link>
                ) : (
                  <p>{benefit.text}</p>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={pointing}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegmentCenter;
