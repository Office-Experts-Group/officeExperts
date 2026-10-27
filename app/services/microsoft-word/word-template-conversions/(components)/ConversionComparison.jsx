// /word-template-conversions/(components)/ConversionComparison.jsx
import { CheckIcon } from "../(svgs)/Icons";
import styles from "@/styles/conversionComparison.module.scss";

const ROWS = [
  {
    attribute: "Adobe and InDesign sources",
    free: "Rarely supported, or flattened into images that cannot be edited",
    pro: "Rebuilt as live Word templates with styles, headings and page structure",
  },
  {
    attribute: "Formatting accuracy",
    free: "Tables, columns and fonts often shift or substitute on complex documents",
    pro: "Layout checked and corrected so the result matches the source",
  },
  {
    attribute: "Fillable forms",
    free: "Not supported, or limited to basic field recognition that needs manual fixing",
    pro: "Built and reviewed by senior designers with validated fields and logical tab order",
  },
  {
    attribute: "Template reliability",
    free: "Different result each time, depending on the file and browser",
    pro: "Templates rebuilt to convert cleanly and consistently every time",
  },
  {
    attribute: "Document security",
    free: "Files uploaded to a third-party server with unclear retention practices",
    pro: "Handled through an agreed, controlled process with strict data security",
  },
];

const ConversionComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Decision guide</span>
          <h2 className={styles.heading}>
            Free converter or professional service?{" "}
            <span className={styles.accentWord}>It depends what is at stake.</span>
          </h2>
        </header>

        {/* Wrapper allows horizontal scroll on narrow screens */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className={styles.srOnly}>Feature</span>
                </th>
                <th scope="col">Free converter</th>
                <th scope="col" className={styles.proHead}>
                  Word Experts
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.attribute}>
                  <th scope="row">{row.attribute}</th>
                  <td>{row.free}</td>
                  <td className={styles.pro}>
                    <CheckIcon />
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ConversionComparison;
