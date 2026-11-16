// /app/services/microsoft-power-platform/microsoft-power-apps/(components)/PappsHero.jsx
import Link from "next/link";

import PappsHeroSvg from "../(svgs)/PappsHeroSvg";
import { PappsArrowIcon, PappsCheckIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsHero.module.scss";

const PAPPS_TRUST = [
  "Certified Microsoft partner",
  "Australia-wide, remote",
  "Built on your Microsoft 365",
];

const PappsHero = () => {
  return (
    <>
      <div className={styles.headerBlock} aria-hidden="true" />
      <section
        className={styles.pappsHero}
        id="papps-hero"
        aria-labelledby="papps-hero-heading"
      >
        <div className={styles.copy}>
          <h1 id="papps-hero-heading" className={styles.title}>
            Microsoft Power Apps{" "}
            <span className={styles.accent}>Consulting Services</span>
          </h1>
          <p className={styles.lede}>
            We build custom apps that replace the paper forms, spreadsheets and
            email chains your team keeps working around. Staff get a simple app
            on their phone, tablet or browser. You keep your existing Microsoft
            365 data and see it updated as work happens.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>
              Talk to a Power Apps expert
            </a>
            <Link href="#papps-apps" className={styles.moreLink}>
              See the apps we build
              <PappsArrowIcon />
            </Link>
          </div>

          <ul className={styles.trust}>
            {PAPPS_TRUST.map((item) => (
              <li key={item}>
                <span className={styles.trustIcon}>
                  <PappsCheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.art}>
          <PappsHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </section>
    </>
  );
};

export default PappsHero;
