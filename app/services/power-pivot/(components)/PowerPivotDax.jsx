// app/services/power-pivot/(components)/PowerPivotDax.jsx
// Shows what a DAX measure looks like using three typical sales measures.
// Server component. Syntax colouring is done with spans, so no highlighting package is needed.

// Compiled CSS module (source: styles/powerPivotDax.module.scss)
import styles from "@/styles/powerPivotDax.module.scss";

// Three measures from a typical sales model. Each `code` block is JSX so function names can be coloured.
// Literal quotes are wrapped in {"..."} to keep the DAX exactly as it would be typed.
const measures = [
  {
    note: "The base measure. Every other calculation builds on it.",
    code: (
      <>
        <span className={styles.name}>Total Sales</span> ={"\n"}
        {"  "}
        <span className={styles.fn}>SUM</span>({"Sales[Amount]"})
      </>
    ),
  },
  {
    note: "Year to date, restarting each year. Pass a year-end date to match the 30 June financial year.",
    code: (
      <>
        <span className={styles.name}>Sales YTD</span> ={"\n"}
        {"  "}
        <span className={styles.fn}>TOTALYTD</span>([Total Sales],{" "}
        {"'Calendar'[Date]"})
      </>
    ),
  },
  {
    note: "Compares each period with the same period last year, whatever the slicers are set to.",
    code: (
      <>
        <span className={styles.name}>Sales vs Last Year</span> ={"\n"}
        {"  "}[Total Sales] -{"\n"}
        {"  "}
        <span className={styles.fn}>CALCULATE</span>([Total Sales],{"\n"}
        {"    "}
        <span className={styles.fn}>SAMEPERIODLASTYEAR</span>(
        {"'Calendar'[Date]"}))
      </>
    ),
  },
];

const PowerPivotDax = () => {
  return (
    <section className={styles.section} id="dax">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>See DAX in action</span>
          <h2 className={styles.heading}>
            Define a measure once,{" "}
            <span className={styles.accent}>use it everywhere.</span>
          </h2>
          <div className={styles.body}>
            <p>
              A DAX measure is a reusable calculation that responds to whatever
              a person is looking at. Filter by state, product or month and the
              same measure recalculates, with no new formulas to write or
              check.
            </p>
            <p>
              These three come from a typical sales model. They work in any
              pivot table or chart, in Excel or Power BI, and they are the
              building blocks of far more complex KPIs.
            </p>
          </div>
        </div>

        <div className={styles.window}>
          <span className={styles.windowLabel}>Measures</span>
          {measures.map(({ note, code }) => (
            <div key={note} className={styles.measure}>
              <pre className={styles.pre}>
                <code>{code}</code>
              </pre>
              <p className={styles.note}>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerPivotDax;
