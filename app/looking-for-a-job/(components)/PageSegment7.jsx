import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import dashboard from "../../../public/dashboard400x240.webp";

const PageSegment3 = () => {
  const checkItems = [
    "Consultants are paid based on the agreed value of jobs they complete for clients, not a salary.",
    "Once trained consultants can decide what to quote for all their jobs. They also have complete freedom to manage their own schedule and workload. They can work part time, full time, and take time off at any time.",
    "Our consultants work from home and conduct meetings with other staff and clients via remote access. While some clients may prefer or require staff to work onsite, it is totally up to you as to whether you take on such jobs.",
  ];
  return (
    <section
      className={styles.pageSegment}
      style={{ margin: "-2rem 0 6rem 0", scrollMarginTop: "150px" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={dashboard}
          alt="person clicking a computer mouse"
          width={400}
          height={267}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>How it works</h2>
          </div>
          <p>The differences from a salaried position are:</p>
          <div className={styles.points}>
            {checkItems.map((text, index) => (
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
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
