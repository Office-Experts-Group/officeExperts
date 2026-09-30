// app/services/business-analysis/(components)/BusinessAnalysisComparison.jsx

// Compiled CSS module (source: styles/businessAnalysisComparison.module.scss)
import styles from "../../../../styles/businessAnalysisComparison.module.css";

// Column order matches the <thead>. The last column is ours, so it gets the
// .ours treatment. Kept as a real <table> because answer engines lift
// comparison tables well.
const columns = [
  "Prompt with AI tools",
  "Single-platform vendor",
  "Office Experts Group",
];
const OURS = columns.length - 1;

const rows = [
  {
    label: "Starting point",
    values: [
      "The tool you have access to",
      "The product they sell",
      "How your business actually works",
    ],
  },
  {
    label: "Who chooses the platform",
    values: [
      "Whoever builds first",
      "Decided before you call",
      "Chosen after analysis, on merit",
    ],
  },
  {
    label: "Exceptions & edge cases",
    values: [
      "Found in production",
      "Often out of scope",
      "Mapped before the build starts",
    ],
  },
  {
    label: "Security & governance",
    values: [
      "Depends on the individual",
      "Within their platform only",
      "Designed across every system",
    ],
  },
  {
    label: "Works with existing systems",
    values: [
      "Rarely by design",
      "Where their connectors allow",
      "Integration planned from the start",
    ],
  },
  {
    label: "Long-term maintenance",
    values: [
      "Tied to one person",
      "Tied to the vendor",
      "Documented, owned by you",
    ],
  },
  {
    label: "Speed to first result",
    values: [
      "Very fast",
      "Moderate",
      "Fast, with a staged roadmap that delivers early",
    ],
  },
];

// Returns the extra class for our column, or undefined for the others
const oursClass = (index) => (index === OURS ? styles.ours : undefined);

const BusinessAnalysisComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Comparison</span>
          <h2 className={styles.heading}>
            Three ways to get a solution{" "}
            <span className={styles.accent}>built in 2026</span>
          </h2>
          <p className={styles.lead}>
            Every route gets something built. The difference is what it&apos;s
            built on, and who&apos;s left holding it afterwards.
          </p>
        </header>

        {/* tabIndex lets keyboard users scroll the table on narrow screens */}
        <div
          className={styles.tableWrap}
          tabIndex={0}
          role="region"
          aria-label="Comparison of three ways to get a business solution built"
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <td />
                {columns.map((col, i) => (
                  <th key={col} scope="col" className={oursClass(i)}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td key={`${row.label}-${i}`} className={oursClass(i)}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalysisComparison;
