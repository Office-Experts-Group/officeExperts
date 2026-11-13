// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmHero.jsx

import Link from "next/link";

import EpbmHeroSvg from "../(svgs)/EpbmHeroSvg";
import { EpbmArrowIcon, EpbmCheckIcon } from "../(svgs)/EpbmIcons";

import styles from "@/styles/epbmHero.module.scss";

const EPBM_HERO_TRUST = [
  "Microsoft-certified consultants",
  "Excel and Power BI under one roof",
  "Helping Australian businesses since 2000",
];

const EpbmHero = () => (
  <section className={styles.epbmHero} aria-labelledby="epbm-hero-heading">
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="epbm-hero-heading" className={styles.title}>
          Excel to Power BI <span className={styles.accent}>Migration</span>
        </h1>
        <p className={styles.lede}>
          Your spreadsheets got the business this far. When reports start to
          outgrow them, we move them into Power BI, so your team opens one live
          dashboard instead of emailing files around and wondering which version
          is right.
        </p>

        <div className={styles.actions}>
          {/* The page wraps <Contact /> in a div with id="contact" */}
          <Link href="#contact" className="btn">
            Talk to a Power BI consultant
          </Link>
          <Link href="#epbm-services" className={styles.secondaryLink}>
            See how we migrate <EpbmArrowIcon />
          </Link>
        </div>

        <ul className={styles.trust}>
          {EPBM_HERO_TRUST.map((item) => (
            <li key={item}>
              <EpbmCheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.art}>
        <EpbmHeroSvg flowClass={styles.flow} liveClass={styles.live} />
      </div>
    </div>
  </section>
);

export default EpbmHero;
