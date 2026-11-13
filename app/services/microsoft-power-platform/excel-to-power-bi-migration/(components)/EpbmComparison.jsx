// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmComparison.jsx

import Link from "next/link";

import { EpbmGridIcon, EpbmBarsIcon } from "../(svgs)/EpbmIcons";

import styles from "@/styles/epbmComparison.module.scss";

const EPBM_COMPARISON_ROWS = [
  {
    feature: "Data handling",
    excel:
      "Handles smaller datasets well, but slows down with large or complex files.",
    powerbi:
      "Built to process millions of rows from multiple sources without slowing down.",
  },
  {
    feature: "Visualisations",
    excel: "Basic charts and graphs that need to be set up by hand.",
    powerbi:
      "Interactive dashboards with drill-downs, filters and modern visuals.",
  },
  {
    feature: "Up-to-date data",
    excel:
      "Static reports that need a manual refresh or a fresh copy of the data.",
    powerbi:
      "Connects to your data sources and refreshes automatically, so the numbers stay current.",
  },
  {
    feature: "Collaboration",
    excel:
      "Shared by email or on shared drives, which leads to version control issues.",
    powerbi: "Shared securely in the cloud, so everyone sees the same version.",
  },
  {
    feature: "Automation",
    excel: "Limited to macros or manual processes.",
    powerbi: "Scheduled data refreshes, alerts and automated reporting.",
  },
  {
    feature: "Security and governance",
    excel: "File-based security with limited central control.",
    powerbi:
      "Microsoft security, role-based access and control over who sees which data.",
  },
  {
    feature: "Scalability",
    excel: "Best for individual users or small teams.",
    powerbi: "Scales across teams, departments and whole organisations.",
  },
];

// One table for every screen size. Below 767px the SCSS stacks each row and
// shows the column name from data-label, so there is no duplicate mobile markup.
const EpbmComparison = () => (
  <section
    id="epbm-comparison"
    className={styles.epbmComparison}
    aria-labelledby="epbm-comparison-heading"
  >
    <div className={styles.inner}>
      <header className={styles.head}>
        <span className={styles.eyebrow}>Side by side</span>
        <h2 id="epbm-comparison-heading" className={styles.title}>
          Excel vs Power BI:{" "}
          <span className={styles.accent}>what’s the difference?</span>
        </h2>
        <p className={styles.lede}>
          Excel isn’t going anywhere, and it shouldn’t. It’s brilliant for quick
          analysis. Power BI picks up where it starts to struggle: shared,
          always-current reporting for a whole team.
        </p>
      </header>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className={styles.srOnly}>
            How Excel and Power BI compare on seven reporting capabilities
          </caption>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">
                <span className={styles.headLabel}>
                  <EpbmGridIcon /> Excel
                </span>
              </th>
              <th scope="col" className={styles.pbiHead}>
                <span className={styles.headLabel}>
                  <EpbmBarsIcon /> Power BI
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {EPBM_COMPARISON_ROWS.map(({ feature, excel, powerbi }) => (
              <tr key={feature}>
                <th scope="row">{feature}</th>
                <td data-label="Excel" className={styles.excelCell}>
                  {excel}
                </td>
                <td data-label="Power BI" className={styles.pbiCell}>
                  {powerbi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.note}>
        Not sure which reports should move? Many teams run a hybrid setup, with
        Excel for ad-hoc analysis and Power BI for shared dashboards. If your
        workbooks need tidying first, our{" "}
        <Link href="https://www.excelexperts.com.au/upgrades-and-migration">
          Excel upgrade and migration
        </Link>{" "}
        team can help.
      </p>
    </div>
  </section>
);

export default EpbmComparison;
