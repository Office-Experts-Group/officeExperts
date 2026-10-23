import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import design from "../../../public/designer.webp";

const Segment4 = () => {
  const checkItems = [
    {
      strong: "Polished proposals",
      text: "that impress from the first page",
    },
    {
      strong: "Comprehensive reports",
      text: "with clean, navigable layouts",
    },
    {
      strong: "Refined letterheads",
      text: "and memos that showcase your brand",
    },
    {
      strong: "Structured agendas",
      text: "and meeting minutes for clear communication",
    },
  ];

  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "0 0 1rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>What We Can Create for You</h2>
            </div>
            <p>
              We design <strong>high-quality, professionally tailored</strong>{" "}
              templates for every business need, including:
            </p>
          </div>

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
          <div className={styles.content} style={{ marginTop: "1rem" }}>
            <p>
              We can also develop complete{" "}
              <strong>cohesive template suites</strong>, ensuring every document
              your organisation produces reflects the same{" "}
              <strong>precision, style, and professionalism</strong>. As part of
              our service, we can seamlessly{" "}
              <strong>transfer your existing documents</strong> into your new
              templates, giving your entire library a{" "}
              <strong>fresh, consistent, and brand-perfect finish</strong>.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={design}
              alt="digital design compilation"
              width={495}
              height={330}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4;
