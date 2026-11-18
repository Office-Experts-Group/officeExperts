// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/(components)/PivotHero.jsx
import React from "react";
import Link from "next/link";

import PivotHeroSvg from "../(svgs)/PivotHeroSvg";
import { PivotArrowIcon, PivotCheckIcon } from "../(svgs)/PivotIcons";
import styles from "@/styles/pivotHero.module.scss";

const PIVOT_HERO_TRUST = [
  "25+ senior developers",
  "Documented handover",
  "Free assessment",
];

const PivotHero = () => (
  <section
    className={styles.pivotHero}
    id="pvt-hero"
    aria-labelledby="pvt-hero-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="pvt-hero-heading" className={styles.heading}>
          Excel Pivot Tables, Charts &amp; Custom{" "}
          <span className={styles.accent}>Reporting Solutions</span>
        </h1>
        <p className={styles.lead}>
          We turn messy spreadsheets and scattered files into pivot tables,
          charts and dashboards that refresh in one click. Built around your
          data by Australia’s Excel specialists, remotely or onsite.
        </p>

        <div className={styles.actions}>
          <Link href="#contact" className="btn">
            Get a free assessment
          </Link>
          <Link href="#services" className={styles.link}>
            See what we build <PivotArrowIcon />
          </Link>
        </div>

        <ul className={styles.trust} aria-label="Why clients choose us">
          {PIVOT_HERO_TRUST.map((item) => (
            <li key={item} className={styles.trustItem}>
              <PivotCheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.visual}>
        <PivotHeroSvg flowClass={styles.flow} liveClass={styles.live} />
      </div>
    </div>
  </section>
);

export default PivotHero;
