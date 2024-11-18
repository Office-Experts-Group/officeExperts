import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import template from "../../../../../public/template600x400.webp";

const PageSegment5 = () => {
  const checkItems = [
    "Data integration",
    "Setting gathering",
    "Document creation",
    "Stylisation",
    "Linking to external data sources",
  ];

  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "8rem 10vw" }}
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
            <h2>Popup Forms Are Versatile</h2>
          </div>
          <p>
            Popup forms can be used for any number of other tasks including:
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

export default PageSegment5;
