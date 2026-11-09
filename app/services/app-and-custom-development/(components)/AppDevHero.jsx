// app/services/app-and-custom-development/(components)/AppDevHero.jsx
// Hero for the app development page: positioning copy, CTAs, proof points and illustration.
// Server component, no client JavaScript required.
import Link from "next/link";

// Compiled CSS module from the shared styles directory (source: styles/appDevHero.module.scss)
import styles from "@/styles/appDevHero.module.scss";
// Decorative illustration stored with the route
import { AppDevHeroSvg } from "../(svgs)/AppDevHeroSvg";

// Proof points shown beneath the CTAs
const stats = [
  { num: "2500+", label: "Projects Completed" },
  { num: "25+", label: "Developers & Consultants" },
  { num: "100%", label: "Australia Owned" },
];

const AppDevHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Custom app development</span>
          <h1 className={styles.heading}>
            Stuck with a site, system or app that{" "}
            <span className={styles.accent}>no longer fits?</span>
          </h1>
          <p className={styles.text}>
            Most people come to us when something is already costing them time
            or customers. We start by working out why it is under-performing,
            then build the fix: a new application, a rebuilt website or a
            smarter connection between the systems you already own. Since 2000
            we have done this for Australian organisations, with developers
            across the Microsoft suite, modern web frameworks and AI.
          </p>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Book a free consultation
            </Link>
            <Link href="#how-we-can-help" className={styles.ctaSecondary}>
              See how we can help
            </Link>
          </div>

          <ul className={styles.stats}>
            {stats.map((item) => (
              <li key={item.label} className={styles.stat}>
                <span className={styles.statNum}>{item.num}</span>
                <span className={styles.statLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <AppDevHeroSvg />
        </div>
      </div>
    </section>
  );
};

export default AppDevHero;
