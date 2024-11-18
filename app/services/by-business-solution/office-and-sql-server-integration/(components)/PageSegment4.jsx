import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import hand from "../../../../../public/hand600x400.webp";

const PageSegment4 = () => {
  const checkItems = [
    "Create a database interface in Visual Studio or Microsoft Access to allow you to interact with your SQL Server data.",
    "Automatically generate a monthly PowerPoint presentation from your SQL Server data.",
    "Extend the functionality of an existing application that uses SQL Server as its back-end database.",
  ];
  return (
    <div
      className="animate-wrapper"
      style={{ margin: "6rem 0 ", scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>More Custom Solutions</h2>
            </div>
            <p>Our experts can also build solutions including:</p>
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
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hand}
              alt="person hand with digital people above it"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
