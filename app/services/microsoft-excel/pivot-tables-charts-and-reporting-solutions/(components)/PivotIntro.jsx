// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(components)/PivotIntro.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/pivotIntro.module.scss";

// Trust bar items displayed beneath the intro copy
const PIVOT_TRUST_ITEMS = [
  "Quote or hourly rate",
  "Ongoing support",
  "Remote access or onsite",
  "Tailored training",
  "Experts Australia-wide",
];

const PivotIntro = () => (
  <section
    className={styles.pivotIntro}
    id="pvt-intro"
    aria-labelledby="pvt-intro-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Excel Reporting Specialists</span>
        <h2 id="pvt-intro-heading" className={styles.heading}>
          Tired of fighting with messy spreadsheets?{" "}
          <span className={styles.accent}>Let our team handle it.</span>
        </h2>
      </header>

      <div className={styles.body}>
        <p>
          Most Australian businesses run on Excel, but as the business grows
          it’s all too easy to keep adding more and more complexity to a single
          spreadsheet. It can quickly get out of hand and soon becomes a
          nightmare to manage. Others inherit legacy workbooks, with systems in
          place designed by someone who has since left the company.
        </p>
        <p>
          Our consultants assess your data and workflow, then find the right
          solutions to meet your needs. Microsoft 365 has expanded Excel’s
          toolkit dramatically over the last few years. Now with Power Query and
          Power Platform integrations, there are more options than ever to help
          simplify your daily operations.
        </p>

        <div className={styles.ctas}>
          <Link href="#contact" className={styles.btnPrimary}>
            Get a free assessment
          </Link>
          <a href="tel:1300102810" className={styles.btnSecondary}>
            Call 1300 102 810
          </a>
        </div>
      </div>

      <ul className={styles.trustBar} aria-label="Service highlights">
        {PIVOT_TRUST_ITEMS.map((item) => (
          <li key={item} className={styles.trustItem}>
            <span className={styles.trustDot} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PivotIntro;
