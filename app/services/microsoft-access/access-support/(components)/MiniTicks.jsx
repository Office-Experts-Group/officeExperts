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
        <h2>Microsoft Access Training</h2>
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

      <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
        <Image
          src={success}
          alt="person pointing at a computer screen"
          width={400}
          height={267}
          className={styles.miniTickImg}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default MiniTicks;
