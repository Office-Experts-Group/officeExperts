import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../public/dashboard400x240.webp";

const PageSegment3 = () => {
  const checkItems = [
    "Troubleshoot .NET solutions",
    "Development and Testing",
    "Migrate solutions to .NET",
    "Documentation of .NET solutions",
    "Analysis and Design",
    "Maintenance, Help and Training",
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
            <h2>Our Experts Are Ready!</h2>
          </div>
          <p>
            Our .NET developers are across all of your software lifecycle needs.
          </p>
          <div className={styles.pointsGrid}>
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
