// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippHero.jsx
import Link from "next/link";

import AippHeroSvg from "../(svgs)/AippHeroSvg";
import { AippArrowIcon } from "../(svgs)/AippIcons";

import styles from "@/styles/aippHero.module.scss";

const AIPP_HERO_TRUST = [
  "Building on Microsoft since 2000",
  "100% Australian owned",
  "Built inside your own tenant",
];

const AippHero = () => {
  return (
    <section
      id="aipp-hero"
      className={styles.aippHero}
      aria-labelledby="aipp-hero-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="aipp-hero-heading" className={styles.heading}>
            AI inside <span className={styles.accent}>Power Platform</span>
          </h1>
          <p className={styles.lede}>
            We build AI integrations inside Power Apps, Power Automate and
            Copilot Studio. That means AI that can read your documents, answer
            staff questions and make routine decisions, using the data and
            permissions you already have in Microsoft 365.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className="btn">
              Request a consultation
            </Link>
            <Link href="#aipp-layers" className={styles.arrowLink}>
              See where AI fits <AippArrowIcon />
            </Link>
          </div>
          <ul className={styles.trust}>
            {AIPP_HERO_TRUST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.art}>
          <AippHeroSvg flowClass={styles.flow} liveClass={styles.live} />
        </div>
      </div>
    </section>
  );
};

export default AippHero;
