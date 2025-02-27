import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import success from "../../../../../public/success400x267.webp";

const Segment4Repeat = () => {
  const benefits = [
    {
      text: "Templates",
      link: "/services/microsoft-word/word-document-template-creation",
    },
    {
      text: "Corporate styles",
      link: "/services/microsoft-word/corporate-global-template-solution",
    },
    {
      text: "Help and training",
      isText: true,
    },
    {
      text: "Corporate identity",
      link: "/services/microsoft-word/corporate-identity",
    },
    {
      text: "Custom coding",
      link: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development",
    },
    {
      text: "Flexible pricing",
      isText: true,
    },
    {
      text: "Accessibility",
      link: "/services/microsoft-word/accessibility",
    },
    {
      text: "Online documents",
      link: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
    },
    {
      text: "Offsite or onsite",
      isText: true,
    },
  ];

  const renderBenefitContent = (benefit) => {
    if (benefit.isText) {
      return <p>{benefit.text}</p>;
    }
    return (
      <Link href={benefit.link} className={styles.benefitLink}>
        {benefit.text}
      </Link>
    );
  };

  return (
    <div
      className="animate-wrapper"
      id="word-assistance"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment}>
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

        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              We do it all<em> ...and we do it right!</em>
            </h2>
            <p>
              Our expert designers excel when it comes to your document needs.
            </p>
          </div>

          <div className={styles.pointsGrid}>
            {benefits.map((benefit, index) => (
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
                {renderBenefitContent(benefit)}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
