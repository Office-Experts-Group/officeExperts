// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabHero.jsx

import styles from "@/styles/mfabHero.module.scss";
import MfabHeroSvg from "../(svgs)/MfabHeroSvg";
import { MfabArrowIcon } from "../(svgs)/MfabIcons";

const MFAB_TRUST = [
  "25+ years of Microsoft work",
  "Australian consultants",
  "Fabric, Power BI and Azure under one roof",
];

const MfabHero = () => {
  return (
    <section
      className={styles.mfabHero}
      id="mfab-hero"
      aria-labelledby="mfab-hero-heading"
    >
      {/* Dark band behind the fixed header on light heroes */}
      <div className={styles.headerBlock} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="mfab-hero-heading" className={styles.heading}>
            Microsoft Fabric{" "}
            <span className={styles.accent}>Development &amp; Support</span>
          </h1>
          <p className={styles.text}>
            Microsoft Fabric puts all of your business data in one place, from
            spreadsheets and databases to live sales figures, so every report
            and forecast works from the same numbers. We plan it, set it up,
            move your data across and look after it, so your team can get on
            with using it.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>
              Talk to a Fabric consultant
            </a>
            <a href="#mfab-services" className={styles.secondary}>
              See our Fabric services <MfabArrowIcon />
            </a>
          </div>

          <ul className={styles.trust}>
            {MFAB_TRUST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <figure className={styles.visual}>
          <MfabHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </figure>
      </div>
    </section>
  );
};

export default MfabHero;
