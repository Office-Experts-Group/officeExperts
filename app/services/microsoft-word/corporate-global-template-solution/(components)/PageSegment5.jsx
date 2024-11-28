import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import template from "../../../../../public/template600x400.webp";

const PageSegment3 = () => {
  const checkItems = [
    "Control content inserted from other documents",
    "Unknown formatting will default to the ‘Normal’ style",
    "Tables will have the default table style applied for consistent branding",
    "Pasted text will look for default Word styles such as Headings and ‘Normal’, applying your correct styles to them.",
  ];

  return (
    <section
      className={`${styles.pageSegment} ${styles.padded}`}
      id="in-control"
      style={{ backgroundColor: "#f2f3f5" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={template}
          alt="person clicking a computer mouse"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>We'll Put You Back In Control!</h2>
          </div>
          <p>
            With our master templates, users can create sub templates in house
            under our controlled template environment.
          </p>

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
