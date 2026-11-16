// /app/services/microsoft-power-platform/microsoft-power-bi/(components)/PbsvHero.jsx
import styles from "@/styles/pbsvHero.module.scss";
import PbsvHeroSvg from "../(svgs)/PbsvHeroSvg";
import { PbsvArrowIcon, PbsvCheckIcon } from "../(svgs)/PbsvIcons";

const PBSV_HERO_TRUST = [
  "Fixed quotes or hourly rates",
  "Consultants across Australia",
  "Training and ongoing support",
];

const PbsvHero = () => {
  return (
    <section
      id="pbsv-hero"
      className={styles.pbsvHero}
      aria-labelledby="pbsv-hero-heading"
    >
      <div className={styles.band} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="pbsv-hero-heading" className={styles.heading}>
            Microsoft Power BI <span className={styles.accent}>Services</span>
          </h1>
          <p className={styles.lede}>
            Power BI turns the numbers sitting in your spreadsheets, databases
            and business systems into reports people actually use. Our Power BI
            consultants design the dashboards, tidy up the data behind them and
            train your team, so you can answer a question in seconds instead of
            rebuilding a report every month.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>
              Talk to a Power BI consultant
            </a>
            <a href="#pbsv-services" className={styles.arrowLink}>
              See what we build <PbsvArrowIcon />
            </a>
          </div>
          <ul className={styles.trust}>
            {PBSV_HERO_TRUST.map((item) => (
              <li key={item}>
                <PbsvCheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.art}>
          <PbsvHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  );
};

export default PbsvHero;
