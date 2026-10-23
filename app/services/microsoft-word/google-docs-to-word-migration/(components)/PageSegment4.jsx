import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import migration from "../../../public/migration.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "Document Format Conversion - with 100% formatting preservation",
    "Custom Template Development - tailored to your brand and workflows",
    "User Training & Change Management - to ensure smooth adoption",
    "Ongoing Support - with 24/7 enterprise assistance",
    "Integration Services - connecting Word with your existing business ecosystems",
  ];

  // Function to wrap the first part (before the dash) in strong tags
  const formatText = (text) => {
    const dashIndex = text.indexOf(" - ");
    if (dashIndex !== -1) {
      const strongPart = text.substring(0, dashIndex);
      const regularPart = text.substring(dashIndex);
      return (
        <>
          <strong>{strongPart}</strong>
          {regularPart}
        </>
      );
    }
    return text;
  };

  return (
    <div
      className="animate-wrapper"
      id="no-more-headaches"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Our Complete Migration Solution
            </h2>
            <p>
              Whether you're a law firm needing advanced redlining capabilities,
              a healthcare organisation requiring HIPAA-compliant templates, or
              a government agency demanding classified document handling, Word
              Experts delivers migration solutions that transform how your team
              creates, collaborates, and manages documents.
            </p>
          </div>

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
                <p>{formatText(text)}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={migration}
              alt="globe with figurines walking around it"
              width={400}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
