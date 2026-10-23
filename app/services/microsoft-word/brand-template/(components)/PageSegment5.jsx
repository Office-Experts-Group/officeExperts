import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import blankTemplate from "../../../public/blankTemplate600x400.webp";

const BrandTemplateTargets = () => {
  const checkItems = [
    "Companies launching a new brand identity",
    "Businesses seeking to standardise document formats",
    "Organisations looking to improve professional presentation",
    "Teams that need user-friendly documentation tools",
    "Companies merging with consistent document styles",
  ];

  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "8rem 10vw" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={blankTemplate}
          alt="blank template on a desk"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem" }}>Who Needs Brand Templates?</h2>
          </div>
          <p>
            Organisations produce a large volume of documents every day,
            including reports, proposals, letters, and internal communications.
            Without well-structured templates, these documents can quickly vary
            in style, formatting, and branding, creating an inconsistent
            experience for both staff and clients.{" "}
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

export default BrandTemplateTargets;
