import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "Available with Office 365",
    "Robust built-in security",
    "Data protection and efficiency",
    "Standard license provides vast range of options",
  ];

  return (
    <div
      className="animate-wrapper"
      id="microsoft-partner"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Utilise Existing Office 365 Licenses for Power Apps
            </h2>
            <p>
              Power Apps standard licenses are already included with your
              existing Office 365 subscription, allowing for custom applications
              to be potentially developed without any additional licensing. With
              robust built-in security measures, Power Apps ensures your data
              remains protected, allowing you to focus on optimising processes
              and driving innovation.
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
                <p>{text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={eyes}
              alt="person clicking a computer mouse"
              width={600}
              height={394}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
