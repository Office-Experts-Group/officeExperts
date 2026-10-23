import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentDropdowns.module.css";

import eyes from "../../../public/eyes600x394.webp";
import Link from "next/link";

const RebrandingServices = () => {
  const serviceDetails = [
    {
      title: "Template Rebranding & Redesign",
      content: (
        <ul>
          <li>
            Rebuilding Microsoft{" "}
            <Link href={"/word-template-conversions"}>
              Word templates with new brand
            </Link>
          </li>
          <li>
            Creating new layouts for reports, letters, tenders, and manuals
          </li>
          <li>Header/footer updates across all documents</li>
        </ul>
      ),
    },
    {
      title: "Bulk Template Conversion",
      content: (
        <ul>
          <li>Clean formatting and layout updates</li>
          <li>Ensuring brand consistency across departments</li>
        </ul>
      ),
    },
    {
      title: "Advanced Word Functionality (Optional)",
      content: (
        <ul>
          <li>Custom style sets and themes</li>
          <li>Content controls and placeholders</li>
          <li>Automated document components</li>
          <li>
            Custom Formatting and Automation Tab/Ribbon to ensure users stay on
            brand
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className={styles.upgradeSection}>
      <div className={styles.content}>
        <h2>What's Included in Our Rebranding Services?</h2>
        <p style={{ fontWeight: "700", marginBottom: "1rem" }}>
          We handle everything from visual design to document implementation:
        </p>

        <div className={styles.faqContainer} style={{ maxWidth: "90%" }}>
          {serviceDetails.map((service, index) => (
            <details
              key={index}
              className={styles.faqItem}
              open={index === 0 ? true : undefined}
            >
              <summary>
                <span className={styles.questionText}>
                  <span>{service.title}</span>
                </span>
              </summary>
              <div
                className={styles.content}
                style={{ marginLeft: "2rem", color: "#777a7e" }}
              >
                {service.content}
              </div>
            </details>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
        <div
          className={styles.imgSection}
          style={{ height: "100%", display: "flex" }}
        >
          <Image
            src={eyes}
            alt="digital design of ladies eyes"
            width={600}
            height={394}
            className={`${styles.mainImg}`}
            style={{ margin: "0 auto" }}
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default RebrandingServices;
