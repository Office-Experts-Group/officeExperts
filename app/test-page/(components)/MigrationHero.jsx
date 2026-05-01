// app/services/microsoft-office/upgrades-and-migration/(components)/MigrationHero.jsx

import Link from "next/link";
import styles from "../../../styles/migrationHero.module.css";

const tools = [
  { label: "Microsoft 365", tier: "primary" },
  { label: "Power Apps", tier: "secondary" },
  { label: "Power Automate", tier: "secondary" },
  { label: "Power BI", tier: "secondary" },
  { label: "Microsoft Fabric", tier: "tertiary" },
  { label: "Azure", tier: "tertiary" },
  { label: "SQL Server", tier: "tertiary" },
  { label: "SharePoint", tier: "tertiary" },
  { label: "Web Apps", tier: "tertiary" },
];

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

        {/* ── Right: ecosystem tag cloud ── */}
        <div className={styles.ecosystem} aria-hidden="true">
          <p className={styles.ecosystemLabel}>Fully integrated systems</p>
          <div className={styles.tagGrid}>
            {tools.map((tool) => (
              <span
                key={tool.label}
                className={`${styles.tag} ${styles[tool.tier]}`}
              >
                {tool.label}
              </span>
            ))}
          </div>
          <div className={styles.orb} />
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
