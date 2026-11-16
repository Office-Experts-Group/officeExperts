// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiBenefits.jsx
import Link from "next/link";
import styles from "@/styles/pbdiBenefits.module.scss";
import PbdiBenefitArt from "../(svgs)/PbdiBenefitArt";
import { PbdiArrowIcon } from "../(svgs)/PbdiIcons";

const PBDI_BENEFITS = [
  {
    kind: "central",
    tile: "accentTile",
    title: "Centralised reporting",
    body: (
      <>
        With integrated data pipelines, Power BI can bring your systems together
        in one consistent reporting environment. Your{" "}
        <Link href="/services/dashboards">Power BI dashboards</Link> then draw
        on the same agreed numbers, refreshed on a schedule that suits how often
        your data actually changes.
      </>
    ),
  },
  {
    kind: "decisions",
    tile: "darkTile",
    title: "Data-driven decision making",
    body: "Joined-up data gives you richer insights. Compare trends across departments, track your KPIs and spot patterns you would miss while your data sits in silos.",
  },
  {
    kind: "savings",
    tile: "darkTile",
    title: "Time and cost savings",
    body: (
      <>
        Automating your data integration cuts manual effort, lowers the risk of
        errors and frees your team for higher-value work. It pairs well with{" "}
        <Link href="/services/business-process-automation">
          business process automation
        </Link>{" "}
        for the steps that follow your reports.
      </>
    ),
  },
  {
    kind: "scale",
    tile: "darkTile",
    title: "Scalability for growth",
    body: "As your business grows, so does your data. Power BI can scale with you, taking in new systems and data sources without disrupting the reporting your team already relies on.",
  },
];

const PbdiBenefits = () => (
  <section
    id="pbdi-benefits"
    className={styles.pbdiBenefits}
    aria-labelledby="pbdi-benefits-heading"
  >
    <div className={styles.inner}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>The payoff</p>
        <h2 id="pbdi-benefits-heading" className={styles.heading}>
          Why integrate your data{" "}
          <span className={styles.accent}>with Power BI?</span>
        </h2>
        <p className={styles.lede}>
          In today’s data-driven world, timely and accurate insight can make or
          break a business decision. Yet many organisations still struggle with
          data scattered across spreadsheets, CRMs, ERPs, databases and cloud
          apps.{" "}
          <strong>
            Power BI solves this by bringing all your data sources together in
            one place.
          </strong>
        </p>
        <a href="#contact" className={styles.link}>
          Talk through your data sources <PbdiArrowIcon />
        </a>
      </div>

      <ul className={styles.list}>
        {PBDI_BENEFITS.map(({ kind, tile, title, body }) => (
          <li key={kind} className={`${styles.row} ${styles[tile]}`}>
            <div className={styles.art}>
              <PbdiBenefitArt kind={kind} />
            </div>
            <div>
              <h3 className={styles.rowTitle}>{title}</h3>
              <p className={styles.rowText}>{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PbdiBenefits;
