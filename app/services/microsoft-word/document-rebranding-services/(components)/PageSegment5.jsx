import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import form from "../../../public/form600x400.webp";

const DocumentRebrandingTargets = () => {
  const checkItems = [
    "Companies undergoing a visual rebrand",
    "Mergers and acquisitions needing document unification",
    "Government departments and legal firms with strict formatting standards",
    "Small-to-medium businesses refreshing their image",
    "Consultancies preparing branded templates for clients"
  ];

  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "8rem 10vw" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={form}
          alt="professional document templates"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem"}}>Who Is This For?</h2>
          </div>
          <p>
            Our document rebranding service is ideal for:
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

export default DocumentRebrandingTargets;