// app/services/power-query/(components)/BlackSegment.jsx

import Link from "next/link";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/queryComparison.module.scss";

import bg from "../../../../public/service-bg.webp";

// ── Comparison rows ───────────────────────────────────────
const rows = [
  {
    attribute: "Best for",
    pq: "Regular data refreshes, ETL pipelines, multi-source merging",
    vba: "Custom logic, UI interaction, file generation",
  },
  {
    attribute: "Coding required",
    pq: "No - M language optional for advanced scenarios",
    vba: "Yes - VBA scripting required",
  },
  {
    attribute: "Refresh model",
    pq: "Scheduled or one-click refresh",
    vba: "Triggered by macro or user action",
  },
  {
    attribute: "Excel version",
    pq: "Excel 2016+ and Microsoft 365",
    vba: "All Excel versions",
  },
  {
    attribute: "Data source breadth",
    pq: "Databases, APIs, SharePoint, web, files, cloud services",
    vba: "Files, databases via ADO/ODBC, Windows scripting",
  },
  {
    attribute: "Maintenance",
    pq: "Low - steps are visual and self-documenting",
    vba: "Higher - code requires developer knowledge to modify",
  },
];

// ── When to use both ──────────────────────────────────────
const combined = [
  "Power Query shapes and loads the data; VBA automates what happens next",
  "Complex file generation (PDFs, formatted reports) after a data refresh",
  "User-triggered workflows that depend on clean, pre-processed data",
  "Legacy macro systems being partially modernised",
];

// ── Component ─────────────────────────────────────────────
const QueryComparison = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.bgImg}
        src={bg}
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        {/* ── Header ── */}
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Choosing the right tool</span>
            <h2 className={styles.heading}>
              Power Query or VBA?{" "}
              <span className={styles.accent}>
                It depends on what you need.
              </span>
            </h2>
            <p className={styles.intro}>
              Both tools solve data problems, but they do solve different ones.
              Understanding the differences helps you make the right decision.
              Our developers usually end up using both together.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Comparison table ── */}
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.1}>
          <div className={styles.tableWrap}>
            {/* Table header */}
            <div className={styles.tableHeader}>
              <div className={styles.attrCol} />
              <div className={styles.colHead}>
                <span className={styles.colTag}>Power Query</span>
              </div>
              <div className={styles.colHead}>
                <span className={styles.colTagAlt}>VBA / Macros</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={`${styles.row} ${i % 2 === 0 ? styles.rowAlt : ""}`}
              >
                <div className={styles.attrCol}>
                  <span className={styles.attr}>{row.attribute}</span>
                </div>
                {/* valueCols wraps the two value cells for the mobile two-col grid */}
                <div className={styles.valueCols}>
                  <div className={styles.pqCol}>
                    {/* colLabel only visible on mobile */}
                    <span className={`${styles.colLabel} ${styles.colLabelPq}`}>
                      Power Query
                    </span>
                    <p>{row.pq}</p>
                  </div>
                  <div className={styles.vbaCol}>
                    <span
                      className={`${styles.colLabel} ${styles.colLabelVba}`}
                    >
                      VBA / Macros
                    </span>
                    <p>{row.vba}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* ── When to combine ── */}
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.15}>
          <div className={styles.combined}>
            <p className={styles.combinedLabel}>When to use both</p>
            <p className={styles.combinedIntro}>
              Most complex data automation projects use both tools. Power Query
              handles the data preparation and refresh while VBA handles
              everything that needs to happen once the data is ready.
            </p>
            <ul className={styles.combinedList}>
              {combined.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Link
              href="/services/vba-macro-development"
              className={styles.combinedLink}
            >
              See our VBA and macro development services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default QueryComparison;
