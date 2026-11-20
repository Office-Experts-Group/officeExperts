// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiHero.jsx
import ApbiHeroSvg from "../(svgs)/ApbiHeroSvg";
import { ArrowIcon, ShieldIcon } from "../(svgs)/ApbiIcons";

import styles from "@/styles/apbiHero.module.scss";

const ApbiHero = () => (
  <section
    id="apbi-hero"
    className={styles.apbiHero}
    aria-labelledby="apbi-hero-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <h1 id="apbi-hero-heading" className={styles.heading}>
          Integrate Access with <span className={styles.accent}>Power BI</span>
        </h1>
        <p className={styles.lede}>
          Your Access database already holds the numbers that run the business.
          We connect it to Power BI so those numbers become dashboards your team
          can open, filter and share, without exporting to Excel first.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn">
            Talk to an Access expert
          </a>
          <a href="#apbi-routes" className={styles.link}>
            See how it connects <ArrowIcon />
          </a>
        </div>

        <p className={styles.trust}>
          <ShieldIcon />
          <span>
            Australia-wide Access and Power BI consultants. Your Access database
            stays where it is and keeps working while we build alongside it.
          </span>
        </p>
      </div>

      <div className={styles.art}>
        <ApbiHeroSvg flowClass={styles.flow} liveClass={styles.live} />
      </div>
    </div>
  </section>
);

export default ApbiHero;
