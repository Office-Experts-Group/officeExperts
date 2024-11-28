import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "Nationwide custom solutions",
    "Flexible pricing options",
    "End-to-end project guidance",
    "Ongoing support and training",
  ];

  return (
    <div className="animate-wrapper">
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Nationwide Power BI Solutions Tailored to You
            </h2>
            <p>
              Our team of experts across Australia create customised Power BI
              solutions, guiding your project from inception to completion.
              Flexible pricing, including options of fixed quotes or hourly
              rates ensures dedicated support and personalised training,
              fostering ongoing success. Connect with our consultants today to
              explore how we can tailor Power BI solutions to your unique needs.
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
