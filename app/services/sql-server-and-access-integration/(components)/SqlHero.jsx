// app/services/sql-server-and-access-integration/(components)/SqlHero.jsx

// Compiled CSS module (source: styles/sqlHero.module.scss)
import styles from "@/styles/sqlHero.module.scss";
// Illustration of Office front ends sharing one SQL Server database
import { SqlFrontBackSvg } from "../(svgs)/SqlFrontBackSvg";

// ── Component ─────────────────────────────────────────────────────────────────
// Server component. Replaces the stock-image ServiceHero on this page, so the
// page's only <h1> lives here.
const SqlHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Reliable, scalable data infrastructure
          </span>

          <h1 className={styles.heading}>
            SQL Server integration for{" "}
            <span className={styles.accent}>Access and Microsoft Office</span>
          </h1>

          <p className={styles.lead}>
            Moving your Access data to a Microsoft SQL Server backend lets you
            keep your existing forms, reports and interface intact. You retain
            the simplicity and flexibility of Access on the front end, while SQL
            Server provides the power, speed and security of an enterprise-grade
            database engine.
          </p>
          <p className={styles.lead}>
            We also connect Excel, Word, PowerPoint and Visual Studio to your
            SQL Server data, so reports, documents and presentations build
            themselves. Since 2000, Office Experts Group has helped hundreds of
            Australian organisations upgrade their Access databases to SQL
            Server without disrupting daily operations.
          </p>

          {/* In-page anchors, so plain <a> rather than next/link */}
          <div className={styles.actions}>
            <a href="#contact" className={`btn ${styles.primary}`}>
              Talk to a SQL Server expert
            </a>
            <a href="#how-it-works" className={styles.secondary}>
              See how a migration works
            </a>
          </div>
        </div>

        {/* ── Right: front ends to database illustration ── */}
        <div className={styles.visual}>
          <SqlFrontBackSvg />
        </div>
      </div>
    </section>
  );
};

export default SqlHero;
