import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/newPageSegment4.module.css";

import experts from "../../../public/experts600x400.webp";
import BookSegment from "./BookSegment";

const Segment8 = () => {
  const checkItems = [
    {
      strong: "Exactly what you want -",
      text: "templates designed in collaboration with you",
    },
    {
      strong: "Visually polished results -",
      text: "ensuring every document reflects your professionalism",
    },
    {
      strong: "Time-saving design -",
      text: "reducing repetitive work and streamlining your workflow",
    },
    {
      strong: "Reliable performance -",
      text: "consistent formatting and brand integrity across every document",
    },
  ];

  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>Why Choose Word Experts?</h2>
            </div>
            <p>
              Our templates are more than just documents, they are{" "}
              <strong>strategically designed tools</strong> that combine beauty,
              functionality, and efficiency. With Word Experts, you get:
            </p>

            <div className={styles.points}>
              {checkItems.map(({ strong, text }, index) => (
                <div
                  key={index}
                  className={styles.point}
                  style={{ marginTop: ".5rem" }}
                >
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
                  <p>
                    <strong>{strong}</strong> {text}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={styles.content}
              style={{ marginTop: "1rem", paddingBottom: "0" }}
            >
              <p>
                With our expertise, your team can focus on producing outstanding
                content while we ensure the templates are beautiful, functional,
                and effortlessly easy to use.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className={styles.deskOnly}>
          <BookSegment />
        </div>
      </div>
    </div>
  );
};

export default Segment8;
