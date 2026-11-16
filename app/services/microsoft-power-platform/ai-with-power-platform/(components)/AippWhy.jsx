// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippWhy.jsx
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/aippWhy.module.scss";

const AIPP_STATS = [
  { value: "25+", label: "years in business", tileClass: "accentTile" },
  {
    value: "All",
    label: "Microsoft products covered",
    tileClass: "lightTile",
  },
  { value: "100%", label: "Australian owned", tileClass: "darkTile" },
  {
    value: "AU-wide",
    label: "remote and on-site delivery",
    tileClass: "lightTile",
  },
];

const AippWhy = () => {
  return (
    <section
      id="aipp-why"
      className={styles.aippWhy}
      aria-labelledby="aipp-why-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.65}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Why Office Experts Group</span>
            <h2 id="aipp-why-heading" className={styles.heading}>
              AI built by people who already know{" "}
              <span className={styles.accent}>your Microsoft environment.</span>
            </h2>
            <p className={styles.body}>
              We’re not a new AI agency bolting large language models onto
              unfamiliar systems. Office Experts Group has been building on the
              Microsoft stack since 2000: Excel, Access, SharePoint and SQL
              Server, and for the past several years Power Platform and
              Microsoft 365 Copilot. AI is the newest layer on a stack we
              already understand deeply, which means less time spent figuring
              out your environment and more time building something that
              complements it.
            </p>
            <Link href="/about-us" className={styles.aboutLink}>
              More about Office Experts Group
            </Link>
          </div>
        </AnimateOnScroll>

        <ul className={styles.stats}>
          {AIPP_STATS.map(({ value, label, tileClass }) => (
            <li key={label} className={`${styles.stat} ${styles[tileClass]}`}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AippWhy;
