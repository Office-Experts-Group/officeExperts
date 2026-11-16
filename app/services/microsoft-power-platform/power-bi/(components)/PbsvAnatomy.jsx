// /app/services/microsoft-power-platform/microsoft-power-bi/(components)/PbsvAnatomy.jsx
import styles from "@/styles/pbsvAnatomy.module.scss";
import PbsvAnatomySvg from "../(svgs)/PbsvAnatomySvg";

const PBSV_ANATOMY_NOTES = [
  {
    term: "Slicers",
    text: "Filters sit on the page, so people narrow a report to a date range, region or product without asking anyone.",
  },
  {
    term: "KPI cards",
    text: "The few numbers that matter, front and centre, with enough context to tell whether they’re good or bad.",
  },
  {
    term: "Cross-filtering",
    text: "Click a bar and the rest of the page follows, so patterns show up without building a new report.",
  },
  {
    term: "Trend line",
    text: "Direction over time, so a dip or a spike is obvious before it turns into a surprise.",
  },
  {
    term: "Drill down",
    text: "Move from year to quarter to month inside the same chart, one click at a time.",
  },
  {
    term: "Drill through",
    text: "Right-click any figure and jump to a detail page for that customer, product or site.",
  },
  {
    term: "Row-level security",
    text: "Each person sees only the rows they’re meant to see. We test this with a real account before anyone external gets access.",
  },
  {
    term: "Scheduled refresh",
    text: "Data refreshes on a schedule that suits the business, so nobody is working from last month’s export.",
  },
];

const PbsvAnatomy = () => {
  return (
    <section
      id="pbsv-anatomy"
      className={styles.pbsvAnatomy}
      aria-labelledby="pbsv-anatomy-heading"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Anatomy of a report</p>
        <h2 id="pbsv-anatomy-heading" className={styles.heading}>
          Transform data into{" "}
          <span className={styles.accent}>actionable insights</span>
        </h2>
        <p className={styles.lede}>
          Power BI turns complex data into user-friendly dashboards and reports
          that help people decide quickly. Whether you’re analysing sales
          trends, tracking inventory or studying customer behaviour, these are
          the parts we design, build and test.
        </p>
      </header>

      <figure className={styles.figure}>
        <div className={styles.diagramScroll}>
          <div className={styles.diagramInner}>
            <PbsvAnatomySvg />
          </div>
        </div>
      </figure>

      <ul className={styles.notes}>
        {PBSV_ANATOMY_NOTES.map(({ term, text }) => (
          <li key={term} className={styles.note}>
            <h3 className={styles.noteTerm}>{term}</h3>
            <p className={styles.noteText}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PbsvAnatomy;
