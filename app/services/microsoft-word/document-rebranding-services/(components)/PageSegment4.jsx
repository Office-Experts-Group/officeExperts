import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import success from "../../../public/success400x267.webp";
import Link from "next/link";

const Segment4Repeat = () => {
  const checkItems = [
    "Microsoft Word templates (letterheads, reports, proposals)",
    "PowerPoint presentations",
    "Excel spreadsheets and forms",
  ];

  return (
    <div
      className="animate-wrapper"
      id="no-more-headaches"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 3rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              What Is Document Rebranding?
            </h2>
            <p>
              Document rebranding is the process of applying your updated brand
              identity (logo, fonts, colours, layout and tone), consistently to
              all of your{" "}
              <Link href={"/corporate-global-template-solution"}>
                {" "}
                business templates{" "}
              </Link>{" "}
              and documentation.
            </p>
            <p style={{ margin: "-1rem 0 1rem 0" }}>This Includes...</p>
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
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className={styles.content} style={{ marginTop: "1.5rem" }}>
            <p>
              Whether you're simply modernising your look or undergoing a full
              corporate rebrand, we help ensure your documents reflect your new
              identity with precision and consistency.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={success}
              alt="person clicking a computer mouse"
              width={400}
              height={267}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
