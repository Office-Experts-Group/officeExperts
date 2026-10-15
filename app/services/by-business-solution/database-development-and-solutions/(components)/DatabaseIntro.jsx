// app/services/by-business-solution/database-development-and-solutions/(components)/DatabaseIntro.jsx
// Opening section: what we build, the Access upgrade and migration callout (our most common
// database work), and an "On this page" jump list. Replaces PageSegmentMain2 and the client-side
// Contents drawer, so the whole section now renders on the server with no JavaScript.
import Link from "next/link";

// Compiled CSS module (source: styles/databaseIntro.module.scss)
import styles from "../../../../../styles/databaseIntro.module.css";

import { DatabaseLayersSvg } from "../(svgs)/DatabaseLayersSvg";

// Anchors match the id on each section further down the page
const onThisPage = [
  { href: "#access-databases", label: "Microsoft Access databases" },
  { href: "#sql-server-and-azure", label: "SQL Server and Azure back ends" },
  { href: "#web-databases", label: "Web and mobile databases" },
  { href: "#choosing-a-database", label: "Choosing the right platform" },
  { href: "#ai-and-business-data", label: "Connecting AI to your data" },
];

// Small right chevron on each jump link, coloured through currentColor so the hover state applies
const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DatabaseIntro = () => {
  return (
    <section className={styles.section} id="database-development">
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* ── Left: content ── */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              Database development since 2000
            </span>
            <h2 className={styles.heading}>
              Databases built around{" "}
              <span className={styles.accent}>how your business runs</span>
            </h2>
            <p>
              Most of the databases we work on started life as a spreadsheet, a
              shared Access file or an app someone built years ago. They hold
              the information the business runs on, and they have outgrown the
              way they were first set up.
            </p>
            <p>
              Our team of 25+ developers across Australia designs, builds,
              upgrades and supports databases on Microsoft Access, SQL Server
              and Azure, as well as modern web platforms such as PostgreSQL and
              Supabase. Every project starts with a{" "}
              <Link href="/services/business-analysis" className={styles.link}>
                business analysis session
              </Link>{" "}
              so the structure matches the way your people actually work.
            </p>

            <div className={styles.ctaRow}>
              <Link href="#contact" className="btn">
                Talk to a database developer
              </Link>
              <Link href="/case-studies" className={styles.link}>
                See our case studies
              </Link>
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className={styles.visual}>
            <DatabaseLayersSvg />
          </div>
        </div>

        <div className={styles.bottom}>
          <nav className={styles.toc} aria-label="On this page">
            <span className={styles.tocLabel}>On this page</span>
            <ol>
              {onThisPage.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <span className={styles.tocText}>{item.label}</span>
                    <ChevronRight />
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.upgrade}>
            {/* Large centred highlight, flanked by thin rules drawn in CSS */}
            <p className={styles.upgradeLabel}>Most requested!</p>
            <h3 className={styles.upgradeHeading}>
              Have an Access database that is slowing down or stuck on an old
              version?
            </h3>
            <p>
              Databases that break after an Office update, hit 32-bit and 64-bit
              conflicts or need their data moved to SQL Server or Azure make up
              a large share of our work. Our{" "}
              <Link
                href="https://www.accessexperts.com.au/upgrades-and-migration"
                className={styles.upgradeLink}
              >
                Access database upgrades and migration
              </Link>{" "}
              service keeps what works and fixes what doesn't, without starting
              from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabaseIntro;
