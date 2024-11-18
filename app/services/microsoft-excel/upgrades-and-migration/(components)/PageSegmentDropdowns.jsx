import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentDropdowns.module.css";

import hand from "../../../../../public/hand600x400.webp";
import promo from "../../../../../public/promo.webp";

const UpgradeIssues = () => {
  const issueDetails = [
    {
      title: "32/64 bit versions of Microsoft Windows and Microsoft Office",
      content:
        "Upgrading between 32-bit and 64-bit versions can cause compatibility issues with Excel add-ins and functions. Our experts can adjust your workbooks and code to ensure seamless operation in the new environment.",
    },
    {
      title: "Macro or VBA issues with incompatible code such as Windows APIs",
      content:
        "VBA code and macros may not work correctly when migrating to newer Excel versions. We analyze and update your code, ensuring all functionalities are compatible and optimized for performance.",
    },
    {
      title: "Shapes and ActiveX buttons change size",
      content:
        "Changes in version compatibility can alter the appearance and size of shapes and controls. We can standardize and fix these elements, ensuring your workbook layout remains intact.",
    },
    {
      title: "Crashing occurring after migration",
      content:
        "Crashes often result from hidden compatibility or resource issues. Our team will debug and streamline your workbook to make it stable and reliable in the updated version of Excel.",
    },
    {
      title: "Workbooks speeds grinding to a halt and becoming unworkable",
      content:
        "Performance slowdowns are common with inefficient formulas or outdated data structures. We optimize your workbook by improving formulas, reducing calculation times, and streamlining data processes.",
    },
  ];

  return (
    <div className={styles.upgradeSection} id="upgrade-issues">
      <div className={styles.content}>
        <div className={styles.underline}>
          <h2>Excel Upgrade Issues</h2>
        </div>
        <p>
          Through decades of experience we have seen many reasons why users have
          issues upgrading to new versions of Excel.
        </p>
        <p>
          <strong>Common reasons include:</strong>
        </p>

        <div className={styles.faqContainer}>
          {issueDetails.map((issue, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>
                <span className={styles.questionText}>{issue.title}</span>
              </summary>
              <div className={styles.content}>{issue.content}</div>
            </details>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
        <div className={styles.imgSection}>
          <Image
            src={hand}
            alt="person hand with digital people above it"
            width={600}
            height={400}
            className={styles.mainImg}
          />
          <div className={styles.img}>
            <div className={styles.bar}></div>
            <Image
              src={promo}
              alt="person at a computer"
              width={130}
              height={60}
            />
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default UpgradeIssues;
