// app/services/upgrades-and-migration/(components)/MigrationHero.jsx

import Link from "next/link";
import styles from "@/styles/migrationHero.module.scss";
import MigrationStory from "./MigrationStory";

const MigrationHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* ── Left: headline block ── */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Upgrades &amp; Migration</p>

          <h1 className={styles.heading}>
            Modernise Your <span className={styles.accent}>Microsoft</span>
            <br />
            Ecosystem
          </h1>

          <p className={styles.lead}>
            We help organisations move on from legacy Office files, ageing
            databases, and disconnected tools, designing and implementing a
            Microsoft environment that works for your business.
          </p>

          <p className={styles.body}>
            From bloated Excel workbooks and struggling Access databases to
            processes scattered across five systems, we map where you are, where
            you need to be, and how to get there without breaking what&rsquo;s
            already running.
          </p>

          <div className={styles.ctas}>
            <Link
              href="/contact-us/request-a-quote"
              className={styles.ctaPrimary}
            >
              Get a free assessment
            </Link>
            <Link href="#contact" className={styles.ctaSecondary}>
              Talk to an expert
            </Link>
          </div>
        </div>
        <MigrationStory />
      </div>
    </section>
  );
};

export default MigrationHero;
