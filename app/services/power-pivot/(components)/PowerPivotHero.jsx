// app/services/power-pivot/(components)/PowerPivotHero.jsx
// Page hero: positioning, CTAs, proof points and the star-schema illustration.
// Replaces ServiceHero on this page. Server component, no client JavaScript required.
import Link from "next/link";

// Compiled CSS module from the shared styles directory (source: styles/powerPivotHero.module.scss)
import styles from "@/styles/powerPivotHero.module.scss";
// Decorative illustration stored with the route
import { ModelHeroSvg } from "../(svgs)/ModelHeroSvg";

const PowerPivotHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Power Pivot consultants</span>
          <h1 className={styles.heading}>
            Power Pivot consulting for{" "}
            <span className={styles.accent}>Australian businesses.</span>
          </h1>
          <p className={styles.lede}>
            We build the data models, DAX calculations and reports behind fast,
            reliable reporting in Excel and Power BI, so your team spends less
            time wrangling spreadsheets and more time acting on the numbers.
          </p>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Book a free consultation
            </Link>
            <Link href="#how-we-help" className={styles.ctaSecondary}>
              See how we can help
            </Link>
          </div>

          <ul className={styles.facts}>
            <li>
              <strong>2500+</strong>
              <span>Projects Completed</span>
            </li>
            <li>
              <strong>25+</strong>
              <span>Developers & Consultants</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>Australia Owned</span>
            </li>
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <ModelHeroSvg />
        </div>
      </div>
    </section>
  );
};

export default PowerPivotHero;
