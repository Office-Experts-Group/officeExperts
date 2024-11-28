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
    <section className={`${styles.pageSegmentReverse} ${styles.noImg}`}>
      <div className={styles.pageSegmentCenter}>
        <h2>We're Here To Support You!</h2>
        <div className={styles.points}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit.text}
              animation="slide-right"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
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
