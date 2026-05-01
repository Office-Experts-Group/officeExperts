// app/services/microsoft-office/upgrades-and-migration/(components)/MigrationPaths.jsx

import Link from "next/link";
import styles from "../../../styles/migrationPaths.module.css";

const paths = [
  {
    id: "upgrade",
    index: "01",
    label: "Upgrade",
    fit: "Systems that still work but need stabilising",
    description:
      "If the core of what you have is sound, an upgrade can extend its life and improve performance without significant disruption or cost. Usually the fastest path forward when the foundation is solid and the problems are specific.",
    items: [
      "32-bit vs 64-bit conflicts and Office version issues",
      "VBA or legacy code that has become unreliable",
      "Performance improvements without changing the underlying system",
      "Usability and error reduction for daily users",
    ],
    cta: null,
    intensity: "low",
  },
  {
    id: "migration",
    index: "02",
    label: "Migration",
    fit: "Systems that have outgrown where they live",
    description:
      "When your system is hitting performance limits, struggling with concurrent users, or becoming impossible to maintain, it needs to move somewhere better suited. Migration keeps what works while giving it a much stronger foundation.",
    items: [
      "Access or Excel backends moved to SQL Server",
      "Local systems transitioned to Azure cloud platforms",
      "Data restructured into secure, centralised environments",
      "Improved reliability and concurrency without a full rebuild",
    ],
    cta: null,
    intensity: "mid",
  },
  {
    id: "transformation",
    index: "03",
    label: "Transformation",
    fit: "Systems genuinely limiting your business",
    description:
      "Sometimes fixing or moving isn't enough. If the system is fundamentally holding you back in capability, reliability, or user experience then a full rebuild is the right call. This is where businesses stop working around their tools.",
    items: [
      "Legacy apps replaced with Power Apps or modern web applications",
      "Manual workflows automated with Power Automate",
      "Real-time reporting introduced through Power BI",
      "AI and advanced analytics integrated into existing processes",
    ],
    cta: null,
    intensity: "high",
  },
];

const MigrationPaths = () => {
  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Choosing your path</p>
        <h2 className={styles.heading}>
          Upgrade, migration, or transformation?
        </h2>
        <p className={styles.subheading}>
          Not every system needs to be rebuilt. The right approach depends on
          where your system is now, what risks you&rsquo;re carrying, and what
          you need it to do in the next few years.
        </p>
      </div>

      {/* ── Spectrum indicator ── */}
      <div className={styles.spectrum} aria-hidden="true">
        <span>Least change</span>
        <div className={styles.spectrumTrack}>
          <div className={styles.spectrumFill} />
        </div>
        <span>Most change</span>
      </div>

      {/* ── Three paths ── */}
      <div className={styles.paths}>
        {paths.map((path) => (
          <article
            key={path.id}
            className={`${styles.path} ${styles[path.intensity]}`}
          >
            <header className={styles.pathHeader}>
              <span className={styles.pathIndex}>{path.index}</span>
              <h3 className={styles.pathLabel}>{path.label}</h3>
              <p className={styles.pathFit}>
                <strong>Best for:</strong> {path.fit}
              </p>
            </header>

            <p className={styles.pathDesc}>{path.description}</p>

            <ul className={styles.pathList}>
              {path.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* ── Choosing the right path closer ── */}
      <div className={styles.closer}>
        <div className={styles.closerText}>
          <p className={styles.closerHeading}>
            Some projects will span all three.
          </p>
          <p>
            You might upgrade part of your system, migrate the data, and
            transform specific workflows all within the same engagement. We help
            you work out the right mix based on cost, risk, and what
            you&rsquo;re actually trying to achieve.
          </p>
          <p>
            The goal isn&rsquo;t the most ambitious solution. It&rsquo;s the
            right one for your specific use case.
          </p>
        </div>
        <Link href="#contact" className={styles.closerCta}>
          Get a free assessment
        </Link>
      </div>
    </section>
  );
};

export default MigrationPaths;
