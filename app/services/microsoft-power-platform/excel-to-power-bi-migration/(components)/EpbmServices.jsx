// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmServices.jsx

import Link from "next/link";

import {
  EpbmAssessArt,
  EpbmTransformArt,
  EpbmDashboardArt,
  EpbmTrainingArt,
  EpbmSupportArt,
} from "../(svgs)/EpbmServiceArt";
import { EpbmArrowIcon, EpbmCheckIcon } from "../(svgs)/EpbmIcons";

import styles from "@/styles/epbmServices.module.scss";

// tile: "darkTile" ($dark-bg), "accentTile" ($accent) or "lightTile" (white).
// size sets the bento placement. Titles match the Service schema in page.js.
const EPBM_SERVICES = [
  {
    Art: EpbmAssessArt,
    tile: "darkTile",
    size: "feature",
    title: "Data assessment and planning",
    text: "We start by reviewing your current spreadsheets, where the data comes from and how your reports are built today. That shows us what’s slowing you down, where the data quality issues are, and what a sensible migration plan looks like for your team.",
    checks: [
      "Data sources and file links",
      "Formulas, macros and lookups",
      "Data quality and duplicates",
      "Who uses each report, and how",
    ],
  },
  {
    Art: EpbmTransformArt,
    tile: "lightTile",
    size: "half",
    title: "Data transformation and modelling",
    text: "Spreadsheet data is often messy and hard to manage at scale. We clean it, reshape it and connect it into one data model, so the numbers in Power BI are accurate, consistent and ready to grow with you.",
    link: {
      href: "https://www.excelexperts.com.au/data-manipulation",
      text: "Excel data clean-up",
    },
  },
  {
    Art: EpbmDashboardArt,
    tile: "accentTile",
    size: "half",
    title: "Report and dashboard development",
    text: "We design clear, interactive Power BI dashboards that replace endless spreadsheet scrolling with charts, filters and drill-downs your team and stakeholders can actually use.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-bi",
      text: "Explore our Power BI services",
    },
  },
  {
    Art: EpbmTrainingArt,
    tile: "lightTile",
    size: "narrow",
    title: "Training and handover",
    text: "A migration only works if your team feels confident using it. We provide hands-on training, documentation and a proper handover, so you own your reporting.",
    link: {
      href: "/microsoft-support-and-training-australia",
      text: "Microsoft training options",
    },
  },
  {
    Art: EpbmSupportArt,
    tile: "lightTile",
    size: "wide",
    title: "Ongoing support and optimisation",
    text: "As your business changes, so will your reports. We stay on hand for support, performance tuning and new dashboards, and can automate the manual steps around your reporting with Power Automate.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-automate",
      text: "See Power Automate",
    },
  },
];

const EpbmServices = () => (
  <section
    id="epbm-services"
    className={styles.epbmServices}
    aria-labelledby="epbm-services-heading"
  >
    <div className={styles.inner}>
      <header className={styles.head}>
        <div>
          <span className={styles.eyebrow}>How we migrate</span>
          <h2 id="epbm-services-heading" className={styles.title}>
            Our Excel to Power BI{" "}
            <span className={styles.accent}>migration services</span>
          </h2>
        </div>
        <p className={styles.lede}>
          Moving from Excel to Power BI opens the door to smarter reporting,
          better collaboration and room to grow.{" "}
          <strong>
            Our consultants work with you step by step to make the move smooth.
          </strong>
        </p>
      </header>

      <ul className={styles.bento}>
        {EPBM_SERVICES.map(({ Art, tile, size, title, text, checks, link }) => (
          <li
            key={title}
            className={`${styles.card} ${styles[tile]} ${styles[size]}`}
          >
            <div className={styles.cardArt}>
              <Art />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{text}</p>
              {checks && (
                <>
                  <h4 className={styles.checksTitle}>What we review</h4>
                  <ul className={styles.checks}>
                    {checks.map((check) => (
                      <li key={check}>
                        <EpbmCheckIcon />
                        {check}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {link && (
                <Link href={link.href} className={styles.cardLink}>
                  {link.text} <EpbmArrowIcon />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default EpbmServices;
