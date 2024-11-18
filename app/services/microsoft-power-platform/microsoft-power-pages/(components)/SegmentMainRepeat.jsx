import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import migrate from "../../../../../public/migrate600x400.webp";

const PageSegmentMain = () => {
  const checkItems = [
    "Expert guidance for Power Pages",
    "Flexible pricing options",
    "Remote-based services for convenience",
    "Ongoing support and training",
  ];
  return (
    <section
      className={styles.pageSegment}
      style={{ margin: "6rem 10vw" }}
      id="maximise-with-expert-assistance"
    >
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migrate}
            alt="Image of a files leaving a computer"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <h2 style={{ fontSize: "2rem", marginTop: "0" }}>
              Maximise Power Pages with Expert Assistance
            </h2>
            <p>
              Power Platform Experts provide guidance to enhance your Power
              Pages journey, ensuring you make the most of this platform’s
              potential. Our services are designed to meet your budgetary
              requirements with flexible pricing, including quoted rates and
              hourly arrangements. We offer remote-based services, continuous
              support and specialised training, solidifying our commitment to
              help you realise the capabilities of Power Pages.
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
      </div>
    </section>
  );
};

export default PageSegmentMain;
