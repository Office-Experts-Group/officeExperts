// app/word-to-pdf-conversion/(components)/WordToPdfComparison.jsx

import styles from "../../../styles/wordToPdfComparison.module.css";

const rows = [
  {
    attribute: "Fillable forms",
    free: "Not supported, or limited to basic field recognition that needs manual fixing",
    pro: "Built and reviewed by senior designers with validated fields and logical tab order",
  },
  {
    attribute: "Formatting accuracy",
    free: "Tables, columns, and fonts often shift or substitute on complex documents",
    pro: "Layout checked and corrected so the PDF matches the source exactly",
  },
  {
    attribute: "Template reliability",
    free: "Generic templates, different result each time, depending on the file and browser",
    pro: "Templates rebuilt to convert cleanly and consistently every time they're used",
  },
  {
    attribute: "Document security",
    free: "Files uploaded to a third-party server with unclear retention practices",
    pro: "Handled through an agreed, controlled process with strict data security",
  },
];

const WordToPdfComparison = () => {
  return (
    <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Decision Guide</span>
          <h2 className={styles.heading}>
            Free converter or professional service?
            <br />
            <span className={styles.accentSpan}>
              It depends what's at stake.
            </span>
          </h2>
          <p className={styles.intro}>
            Both routes will get you a PDF. The table below is where they
            actually diverge, so you can see exactly what you're trading off
            before you choose one.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thLabel}></th>
                <th className={styles.thFree}>
                  <span className={styles.thBadge}>Free converter</span>
                </th>
                <th className={styles.thPro}>
                  <span className={styles.thBadgePro}>Word Experts</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.attribute} className={styles.row}>
                  <td className={styles.tdLabel}>{row.attribute}</td>
                  <td className={styles.tdFree}>{row.free}</td>
                  <td className={styles.tdPro}>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WordToPdfComparison;
