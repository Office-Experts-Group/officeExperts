// app/services/power-pivot/(components)/PowerPivotPair.jsx
// Explains how Power Query and Power Pivot work together and links to the Power Query page.
// The four stages happen in a fixed order, so they are numbered. Server component.
import Link from "next/link";

// Compiled CSS module (source: styles/powerPivotPair.module.scss)
import styles from "@/styles/powerPivotPair.module.scss";

// The data journey from raw files to finished report
const stages = [
  {
    title: "Connect",
    text: "Power Query pulls in Excel files, CSVs, databases, SharePoint lists and web sources in one repeatable step.",
  },
  {
    title: "Clean and shape",
    text: "Duplicates are removed, formats fixed and tables reshaped once, so the same steps run on every refresh.",
  },
  {
    title: "Model and calculate",
    text: "Power Pivot links the tables with relationships and adds the DAX measures that hold your business rules.",
  },
  {
    title: "Report",
    text: "Pivot tables, charts and Power BI dashboards read from the finished model and update with a single refresh.",
  },
];

const PowerPivotPair = () => {
  return (
    <section className={styles.section} id="power-query">
      <div className={styles.card}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Better together</span>
          <h2 className={styles.heading}>
            Power Pivot and Power Query: a powerful pair
          </h2>
          <div className={styles.body}>
            <p>
              Power Pivot works best when combined with Power Query. Power Query
              handles the cleaning and shaping of your raw data, while Power
              Pivot enables powerful modelling and analysis.
            </p>
            <p>
              Need the refresh and distribution to run on its own? Our{" "}
              <Link href="/services/vba-macro-development">
                VBA and automation developers
              </Link>{" "}
              can take care of that final step.
            </p>
          </div>

          <Link href="/services/power-query" className={styles.link}>
            Learn more about our Power Query consulting services
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10h12M12 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <ol className={styles.stages}>
          {stages.map(({ title, text }, i) => (
            <li key={title} className={styles.stage}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stageTitle}>{title}</h3>
              <p className={styles.stageText}>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PowerPivotPair;
