// /app/services/microsoft-excel/data-manipulation/(components)/DataManipulationHero.jsx

import Link from "next/link";
import styles from "@/styles/dataManipulationHero.module.scss";
import DataManipulationHeroSvg from "../(svgs)/DataManipulationHeroSvg";
import { ArrowIcon, CheckIcon } from "../(svgs)/DataManipulationIcons";

const DMH_TRUST = [
  "Fixed-scope projects or hourly rates",
  "Built against your real data",
  "Full documentation and handover",
];

const DataManipulationHero = () => (
  <section
    id="dmh-hero"
    className={styles.dataManipulationHero}
    aria-labelledby="dmh-hero-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="dmh-hero-heading" className={styles.heading}>
          Excel Data Manipulation{" "}
          <span className={styles.accent}>& Automation Services</span>
        </h1>
        <p className={styles.lede}>
          We automate the imports, exports, formatting and clean-up that eat
          into your team’s week, using Power Query, VBA and SQL connections that
          refresh on their own.
        </p>
        <div className={styles.ctaRow}>
          <Link href="#contact" className="btn">
            Get a free assessment
          </Link>
          <Link href="#services" className={styles.secondary}>
            See what we build
            <ArrowIcon />
          </Link>
        </div>
        <ul className={styles.trust} aria-label="Why choose us">
          {DMH_TRUST.map((item) => (
            <li key={item} className={styles.trustItem}>
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.art}>
        <DataManipulationHeroSvg
          flowClass={styles.flow}
          liveClass={styles.live}
        />
      </div>
    </div>
  </section>
);

export default DataManipulationHero;
