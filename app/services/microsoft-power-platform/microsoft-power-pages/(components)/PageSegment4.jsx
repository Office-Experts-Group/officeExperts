import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "Data connectivity and shaping",
    "Cross-device accessibility",
    "Robust security and governance",
  ];

  return (
    <div
      className="animate-wrapper"
      id="streamlined-data-accessibility"
      style={{ scrollMarginTop: "150px" }}
    >
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0 0 0", scrollMarginTop: "150px" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Streamlined Data Accessibility with Power Pages
            </h2>
            <p>
              Power Pages facilitates data connectivity from various data
              sources and the ability to utilise Power Query for data
              manipulation/shaping. Accessible from any device, Power Pages
              promote collaborative and mobile working. With robust role-based
              security protocols and data governance features, your data remains
              protected.
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
              width={450}
              height={294}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
