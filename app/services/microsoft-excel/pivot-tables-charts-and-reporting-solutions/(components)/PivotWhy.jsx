// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(components)/PivotWhy.jsx
import React from "react";
import Link from "next/link";

import { PivotArrowIcon } from "../(svgs)/PivotIcons";
import styles from "@/styles/pivotWhy.module.scss";

const PIVOT_CREDENTIALS = [
  {
    num: "25+",
    label: "Senior Developers",
    body: "Our nationwide team consists of experts across the entire Microsoft ecosystem, which allows us to deliver fully integrated solutions.",
    tile: "accentTile",
  },
  {
    num: "AU",
    label: "Australia-wide",
    body: "We have consultants across the country, though the vast majority of our projects are delivered entirely remotely. We also provide on-site support.",
    tile: "darkTile",
  },
  {
    num: "∞",
    label: "No lock-in",
    body: "Quote-based or hourly. Every project is documented and handed over so your team can maintain it independently.",
    tile: "midTile",
  },
  {
    num: "100%",
    label: "Tailored builds",
    body: "We don’t just sell templates. Every solution is built around your data, your workflow and the people who need to work with it.",
    tile: "accentTile",
  },
];

const PivotWhy = () => (
  <section
    className={styles.pivotWhy}
    id="pvt-why"
    aria-labelledby="pvt-why-heading"
  >
    <div className={styles.inner}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>Why Office Experts</span>
        <h2 id="pvt-why-heading" className={styles.heading}>
          Australia’s Excel specialists
          <span className={styles.accent}> since 2000.</span>
        </h2>
        <p className={styles.body}>
          A part of the Office Experts Group, we have a nationwide team of over
          25 senior developers, consultants and designers. We have grown to
          become the country’s leading Microsoft specialists by consistently
          delivering comprehensive software solutions for thousands of happy
          clients.
        </p>
        <div className={styles.links}>
          <Link href="/about-us" className={styles.link}>
            About Us <PivotArrowIcon />
          </Link>
          <Link href="/client-testimonials" className={styles.link}>
            Client testimonials <PivotArrowIcon />
          </Link>
        </div>
      </div>

      <ul className={styles.grid}>
        {PIVOT_CREDENTIALS.map((c) => (
          <li key={c.label} className={`${styles.cred} ${styles[c.tile]}`}>
            <span className={styles.credNum} aria-hidden="true">
              {c.num}
            </span>
            <h3 className={styles.credLabel}>{c.label}</h3>
            <p className={styles.credBody}>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PivotWhy;
