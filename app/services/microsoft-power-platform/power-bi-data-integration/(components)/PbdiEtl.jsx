// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiEtl.jsx
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbdiEtl.module.scss";
import PbdiEtlArt from "../(svgs)/PbdiEtlArt";
import { PbdiArrowIcon } from "../(svgs)/PbdiIcons";

const PBDI_ETL_STEPS = [
  {
    kind: "extract",
    tile: "lightTile",
    title: "Extract",
    body: "Pulling data from multiple sources such as databases, cloud platforms, CRMs, ERPs, APIs and spreadsheets, without anyone copying and pasting.",
  },
  {
    kind: "transform",
    tile: "darkTile",
    title: "Transform",
    body: "Cleaning, shaping and standardising the data so it is accurate and consistent. That means removing duplicates, handling missing values and applying your own business rules before anything reaches a report.",
  },
  {
    kind: "load",
    tile: "paleTile",
    title: "Load",
    body: (
      <>
        Delivering the transformed data into Power BI so it can be modelled,
        visualised and refreshed automatically. We build the relationships
        between your tables with{" "}
        <Link href="/services/power-pivot">Power Pivot data modelling</Link> and
        set up scheduled refresh, with{" "}
        <Link href="/services/microsoft-power-platform/microsoft-power-automate">
          Power Automate
        </Link>{" "}
        handling what happens next.
      </>
    ),
  },
];

const PbdiEtl = () => (
  <section
    id="pbdi-etl"
    className={styles.pbdiEtl}
    aria-labelledby="pbdi-etl-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>How the data moves</p>
        <h2 id="pbdi-etl-heading" className={styles.heading}>
          The ETL process:{" "}
          <span className={styles.accent}>extract, transform, load</span>
        </h2>
        <p className={styles.lede}>
          ETL stands for <strong>extract, transform and load</strong>. These are
          the three steps that turn raw, scattered data into something ready to
          analyse.
        </p>
      </header>

      <AnimateOnScroll animation="fade-up" duration={1} delay={0.1}>
        <ul className={styles.steps}>
          {PBDI_ETL_STEPS.map(({ kind, tile, title, body }) => (
            <li key={kind} className={`${styles.step} ${styles[tile]}`}>
              <div className={styles.art}>
                <PbdiEtlArt kind={kind} />
              </div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepText}>{body}</p>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>

      <div className={styles.after}>
        <p className={styles.afterText}>
          We design ETL pipelines with tools like{" "}
          <Link href="/services/power-query">Power Query</Link>, dataflows and{" "}
          <Link href="/services/cloud-based-solutions-with-azure">
            Azure Data Factory
          </Link>{" "}
          so data moves smoothly from source to dashboard. Automating and
          standardising each step keeps every Power BI report consistent,
          accurate and easy to trust.
        </p>
        <div className={styles.proof}>
          <p className={styles.proofLabel}>In practice</p>
          <p className={styles.proofText}>
            Dozens of supplier files a year, pulled together with Power Query
            and Power Pivot into one automated summary.
          </p>
          <Link
            href="/case-studies/golf-supplier-sales-data-consolidation"
            className={styles.proofLink}
          >
            See our supplier sales consolidation <PbdiArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default PbdiEtl;
