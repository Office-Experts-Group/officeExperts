// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmBenefits.jsx

import Link from "next/link";

import {
  EpbmRealtimeArt,
  EpbmInteractiveArt,
  EpbmScaleArt,
  EpbmSharedArt,
  EpbmSecurityArt,
  EpbmDecisionArt,
} from "../(svgs)/EpbmBenefitArt";

import styles from "@/styles/epbmBenefits.module.scss";

const EPBM_BENEFITS = [
  {
    Art: EpbmInteractiveArt,
    title: "Interactive dashboards",
    text: "Click into a chart, filter by region or drill down to the detail. Trends, opportunities and risks are easier to spot at a glance.",
  },
  {
    Art: EpbmScaleArt,
    title: "Room to grow beyond Excel",
    text: "Excel struggles with very large files and lots of users. Power BI is built to handle millions of rows without slowing you down.",
  },
  {
    Art: EpbmSharedArt,
    title: "One shared version",
    text: "No more emailing spreadsheets back and forth. Everyone opens the same dashboard in the cloud, which means fewer errors and less double handling.",
  },
  {
    Art: EpbmSecurityArt,
    title: "Stronger security",
    text: "Built on Microsoft security, with control over who can open each report and which rows of data each person sees.",
  },
];

const EpbmBenefits = () => (
  <section
    id="epbm-benefits"
    className={styles.epbmBenefits}
    aria-labelledby="epbm-benefits-heading"
  >
    <div className={styles.inner}>
      <header className={styles.head}>
        <span className={styles.eyebrow}>Why make the switch</span>
        <h2 id="epbm-benefits-heading" className={styles.title}>
          Benefits of migrating from{" "}
          <span className={styles.accent}>Excel to Power BI</span>
        </h2>
        <p className={styles.lede}>
          Moving from Excel to Power BI can be a{" "}
          <strong>
            game-changer for the way your business works with data.
          </strong>{" "}
          Here’s what you gain when you make the switch.
        </p>
      </header>

      <ul className={styles.grid}>
        {/* Wide feature card */}
        <li className={`${styles.card} ${styles.realtime}`}>
          <div>
            <h3 className={styles.cardTitle}>Real-time insights</h3>
            <p className={styles.cardText}>
              Excel reports are often out of date the moment they’re sent. Power
              BI connects straight to your data sources and refreshes
              automatically, so your dashboards always show the latest numbers.
            </p>
          </div>
          <div className={styles.realtimeArt}>
            <EpbmRealtimeArt />
          </div>
        </li>

        {EPBM_BENEFITS.map(({ Art, title, text }) => (
          <li key={title} className={styles.card}>
            <div className={styles.cardArt}>
              <Art />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
          </li>
        ))}

        {/* Full-width accent tile, doubles as the mid-page CTA */}
        <li className={`${styles.card} ${styles.decision}`}>
          <div className={styles.decisionArt}>
            <EpbmDecisionArt />
          </div>
          <div className={styles.decisionCopy}>
            <h3 className={styles.cardTitle}>Smarter decision-making</h3>
            <p className={styles.cardText}>
              Give decision-makers timely, accurate and easy-to-read insights,
              so the conversation is about what to do next, not whether the
              numbers are right.
            </p>
          </div>
          <Link href="#contact" className="btn">
            Plan your migration
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default EpbmBenefits;
