// /app/services/microsoft-power-platform/microsoft-power-bi/(components)/PbsvFreshness.jsx
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbsvFreshness.module.scss";
import {
  PbsvScheduleArt,
  PbsvConnectArt,
  PbsvStreamArt,
} from "../(svgs)/PbsvFreshArt";
import { PbsvArrowIcon } from "../(svgs)/PbsvIcons";

// How fresh the numbers are depends on the connection and the set-up, so the
// wording here is deliberately hedged.
const PBSV_FRESH_ROWS = [
  {
    id: "scheduled",
    Art: PbsvScheduleArt,
    name: "Scheduled refresh",
    how: "Power BI keeps a copy of your data and updates it on a schedule you choose.",
    bestFor: "Sales, finance and operations reports checked daily or hourly.",
    know: "Quick to use and a good default. Figures are as fresh as the last refresh, and how often it can run depends on your licence and set-up.",
  },
  {
    id: "live",
    Art: PbsvConnectArt,
    name: "Live connection or DirectQuery",
    how: "Reports ask the source system each time someone opens or filters a page.",
    bestFor: "Large data sets, or numbers that must match the source system.",
    know: "Fresher figures, but speed depends on the source system and on how the model is built, so we test it before you rely on it.",
  },
  {
    id: "streaming",
    Art: PbsvStreamArt,
    name: "Streaming tiles",
    how: "Events are pushed to a live tile as they happen.",
    bestFor: "Sensors, call volumes or site activity on a wall display.",
    know: "Suits a small set of live measures rather than full analysis. We check it fits before building anything.",
  },
];

const PBSV_FRESH_SOURCES = [
  { label: "Excel and CSV files" },
  { label: "SQL Server and other databases" },
  { label: "SharePoint lists and libraries" },
  { label: "Dataverse and Dynamics" },
  {
    label: "Access databases",
    href: "https://www.accessexperts.com.au/integrate-access-with-power-bi",
  },
];

const PbsvFreshness = () => {
  return (
    <section
      id="pbsv-freshness"
      className={styles.pbsvFreshness}
      aria-labelledby="pbsv-freshness-heading"
    >
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Fresh data, joined up</p>
          <h2 id="pbsv-freshness-heading" className={styles.heading}>
            Real-time insights{" "}
            <span className={styles.accent}>and seamless integration</span>
          </h2>
          <p className={styles.lede}>
            Access up-to-date data so you can make informed decisions when
            things change quickly. “Real time” means different things to
            different teams, though, and it’s rarely free. So we match how often
            your data updates to how quickly the business actually needs to act
            on it.
          </p>
        </header>
      </AnimateOnScroll>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Ways to keep Power BI reports up to date
          </caption>
          <thead>
            <tr>
              <th scope="col">How it connects</th>
              <th scope="col">Best for</th>
              <th scope="col">What to know</th>
            </tr>
          </thead>
          <tbody>
            {PBSV_FRESH_ROWS.map(({ id, Art, name, how, bestFor, know }) => (
              <tr key={id}>
                <th scope="row" className={styles.rowHead}>
                  <span className={styles.rowArt}>
                    <Art />
                  </span>
                  <span>
                    <span className={styles.rowName}>{name}</span>
                    <span className={styles.rowHow}>{how}</span>
                  </span>
                </th>
                <td data-label="Best for">{bestFor}</td>
                <td data-label="What to know">{know}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.sources}>
        <div className={styles.sourcesCopy}>
          <h3 className={styles.sourcesTitle}>
            Seamless data integration, with the data you already have
          </h3>
          <p className={styles.sourcesText}>
            Power BI can pull diverse data sources into one model, which is how
            hidden links between sales, stock and customers start to show up. We
            connect it to what you already run, and move spreadsheets across
            carefully if that’s where your reporting lives today.
          </p>
          <Link
            href="/services/microsoft-power-platform/excel-to-power-bi-migration"
            className={styles.arrowLink}
          >
            Moving off Excel? See Excel to Power BI migration <PbsvArrowIcon />
          </Link>
        </div>
        <ul className={styles.chips}>
          {PBSV_FRESH_SOURCES.map(({ label, href }) => (
            <li key={label}>
              {href ? (
                <a href={href} className={styles.chip}>
                  {label}
                </a>
              ) : (
                <span className={styles.chip}>{label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PbsvFreshness;
