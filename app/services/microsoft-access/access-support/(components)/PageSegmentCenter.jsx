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
    <section className={`${styles.pageSegmentReverse} ${styles.noMargin}`}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={pointing}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.pageSegmentCenter}>
        <h2>Access Help and Support</h2>
        <div className={styles.points}>
          {benefits.map((text, index) => (
            <AnimateOnScroll
              key={text}
              animation="slide-left"
              delay={index * 0.1}
            >
              <div key={index} className={styles.point}>
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
                <p>{text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageSegmentCenter;
