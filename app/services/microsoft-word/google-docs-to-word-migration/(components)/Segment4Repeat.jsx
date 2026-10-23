import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import form from "../../../public/form600x400.webp";

const Segment4Repeat = () => {
  const checkItems = [
    {
      strong: "Advanced Document Control –",
      text: "Microsoft Word provides sophisticated layout controls, master document capabilities, and professional publishing features that maintain document integrity across large, complex files",
    },
    {
      strong: "Enterprise Customisation –",
      text: (
        <>
          Our programmers{" "}
          <Link href={"./custom-toolbars-and-ribbons"}>
            create custom ribbons, toolbars,
          </Link>{" "}
          and{" "}
          <Link href={"./corporate-global-template-solution"}>
            custom automated templates
          </Link>{" "}
          that streamline your team's workflow. From legal document automation
          to government compliance templates
        </>
      ),
    },
    {
      strong: "Scalability for Large Documents –",
      text: "While Google Docs struggles with documents over 100 pages and shows performance issues with multiple simultaneous users, Microsoft Word handles enterprise-scale documents with ease",
    },
    {
      strong: "Security & Compliance –",
      text: "For government organisations and regulated industries, Word provides advanced security features, detailed audit trails, and compliance tools that meet the strictest requirements",
    },
  ];

  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>Why Organisations Choose Word Over Google Docs</h2>
            </div>
            <p>
              <strong>
                Microsoft Word remains the enterprise standard for professional
                document creation —
              </strong>{" "}
              offering advanced capabilities that Google Docs simply cannot
              match. Here's why organisations choose Word:
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
              By choosing Microsoft Word with our custom enterprise solutions,
              organisations gain the document control, security, and scalability
              needed for professional operations while maintaining the
              flexibility to customise workflows for their specific industry
              requirements.
            </p>
          </div>
        </AnimateOnScroll>

        {/* <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image src={form} alt="form on a desk" width={450} height={300} />
          </div>
        </AnimateOnScroll> */}
      </div>
    </div>
  );
};

export default Segment4Repeat;
