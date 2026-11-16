// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiHero.jsx
import styles from "@/styles/pbdiHero.module.scss";
import PbdiHeroSvg from "../(svgs)/PbdiHeroSvg";
import { PbdiArrowIcon, PbdiCheckIcon } from "../(svgs)/PbdiIcons";

const PBDI_TRUST = [
  "2500+ happy clients",
  "Australian Power BI specialists",
  "Custom connectors and API builds",
];

const PbdiHero = () => (
  <>
    <div className={styles.headerBlock} aria-hidden="true" />
    <section
      id="pbdi-hero"
      className={styles.pbdiHero}
      aria-labelledby="pbdi-hero-heading"
    >
      <div className={styles.inner}>
        <div>
          <h1 id="pbdi-hero-heading" className={styles.title}>
            Power BI Data Integration{" "}
            <span className={styles.accent}>Services</span>
          </h1>
          <p className={styles.lede}>
            Your data is spread across spreadsheets, databases, SharePoint, a
            CRM and cloud apps. We connect it all to Power BI, tidy it on the
            way in and keep it refreshed, so everyone works from the same live
            dashboards.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>
              Talk to a Power BI expert
            </a>
            <a href="#pbdi-etl" className={styles.secondary}>
              See how we connect your data <PbdiArrowIcon />
            </a>
          </div>
          <ul className={styles.trust}>
            {PBDI_TRUST.map((item) => (
              <li key={item}>
                <PbdiCheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.art}>
          <PbdiHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  </>
);

export default PbdiHero;
