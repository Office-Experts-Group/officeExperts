// /app/services/microsoft-excel/data-manipulation/(components)/DataManipulationComparison.jsx

import styles from "@/styles/dataManipulationComparison.module.scss";

const rows = [
  {
    attribute: "Best for",
    pq: "Regular data refreshes, ETL pipelines, and multi-source merging",
    vba: "Custom logic, UI interaction, file generation, and triggered workflows",
  },
  {
    attribute: "Coding required",
    pq: "No - M language is optional for advanced transformations",
    vba: "Yes - VBA scripting required",
  },
  {
    attribute: "Refresh model",
    pq: "Scheduled or one-click refresh",
    vba: "Triggered by macro run (button, event, or schedule via Task Scheduler)",
  },
  {
    attribute: "Excel version",
    pq: "Excel 2016+ or Microsoft 365",
    vba: "All versions of Excel",
  },
  {
    attribute: "Ideal user",
    pq: "Analysts who need clean, live data in their workbooks",
    vba: "Operations teams who need automation to do more than transform data",
  },
];

const DataManipulationComparison = () => {
  return (
    <section className={styles.dataManipulationComparison}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Decision Guide</span>
          <h2 className={styles.heading}>
            Power Query vs VBA...
            <br /> Which Is Right for
            <span className={styles.accentSpan}> Your Project?</span>
          </h2>
          <p className={styles.intro}>
            Both tools have their place, but each solves different types of
            problems. The choice depends on what your process needs to do, how
            often it runs, and which version of Excel you’re on.
          </p>
        </div>

        {/* Comparison table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thLabel}></th>
                <th className={styles.thPQ}>
                  <span className={styles.thBadge}>Power Query</span>
                </th>
                <th className={styles.thVBA}>
                  <span className={styles.thBadge}>VBA</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.attribute} className={styles.row}>
                  <td className={styles.tdLabel}>{row.attribute}</td>
                  <td className={styles.tdPQ}>{row.pq}</td>
                  <td className={styles.tdVBA}>{row.vba}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataManipulationComparison;
