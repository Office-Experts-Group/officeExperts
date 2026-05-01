// app/services/microsoft-office/upgrades-and-migration/(components)/MigrationStack.jsx

import Link from "next/link";
import styles from "../../../styles/migrationStack.module.css";

const pillars = [
  {
    index: "01",
    category: "Microsoft 365 & Business Apps",
    summary:
      "The foundation most organisations already have and the most consistently underused. We stabilise, extend, and connect what you already own.",
    items: [
      "Advanced Excel solutions with proper structure and validation",
      "Access application modernisation and stabilisation",
      "SharePoint cleanup, security, and usability improvements",
      "Teams and OneDrive collaboration improvements",
      "Legacy Office files and workflow rationalisation",
    ],
    link: {
      href: "/services/microsoft-office-365",
      label: "Office 365",
    },
  },
  {
    index: "02",
    category: "Power Platform",
    summary:
      "Where most organisations have the biggest gap between what they're using and what's available to them right now. Power Platform is the new gold standard.",
    items: [
      "Power Apps - custom business apps built around how your team works",
      "Power Automate - workflow automation for tasks that shouldn't need a person",
      "Power BI - live dashboards, not manually assembled reports",
      "Power Pages - external-facing portals for customers and partners",
    ],
    link: {
      href: "https://www.powerplatformexperts.com.au",
      label: "Power Platform services",
    },
  },
  {
    index: "03",
    category: "Data, Cloud & Infrastructure",
    summary:
      "File-based and local infrastructure has ceilings. When you hit them, performance degrades fast. We move you to platforms built for scale.",
    items: [
      "SQL Server - proper database design and migration from Access or Excel",
      "Microsoft Azure - cloud architecture that supports growth",
      "Microsoft Fabric - advanced analytics beyond standard Power BI",
      "Secure, centralised data environments with controlled access",
    ],
    link: {
      href: "/services/by-business-solution/office-and-sql-server-integration",
      label: "SQL Server integration",
    },
  },
  {
    index: "04",
    category: "Custom Development & AI",
    summary:
      "When the standard tools don't cover it, we build it. From API integrations to AI-powered automation built on the Microsoft stack.",
    items: [
      "Custom web applications designed around your specific workflows",
      "API integrations between Microsoft platforms and third-party systems",
      "AI-powered solutions using Microsoft Copilot and Ai Builder",
      "Intelligent automation that catches errors before they cause problems",
    ],
    link: {
      href: "/services/by-business-solution/online-solutions",
      label: "Custom built solutions",
    },
  },
];

const MigrationStack = () => {
  return (
    <section className={styles.section} id="stack">
      {/* ── Section header ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>What we modernise</p>
        <h2 className={styles.heading}>
          The full Microsoft stack{" "}
          <span className={styles.accent}>fixed, migrated, and built.</span>
        </h2>
        <p className={styles.subheading}>
          Business systems are rarely just one thing. A reporting problem is
          usually also a data problem. A slow database is often also an
          integration problem. The solution has to cover all of it.
        </p>
      </div>

      {/* ── Four pillars ── */}
      <div className={styles.pillars}>
        {pillars.map((pillar) => (
          <article key={pillar.index} className={styles.pillar}>
            <div className={styles.pillarTop}>
              <span className={styles.pillarIndex}>{pillar.index}</span>
              <h3 className={styles.pillarCategory}>{pillar.category}</h3>
              <p className={styles.pillarSummary}>{pillar.summary}</p>
            </div>

            <ul className={styles.pillarList}>
              {pillar.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {pillar.link && (
              <Link href={pillar.link.href} className={styles.pillarLink}>
                {pillar.link.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </article>
        ))}
      </div>

      {/* ── How it fits together ── */}
      <div className={styles.connector}>
        <div className={styles.connectorContent}>
          <p className={styles.connectorLabel}>How it fits together</p>
          <p className={styles.connectorText}>
            The real difference isn&rsquo;t in any individual tool, it&rsquo;s
            in how they connect together. We design these systems to work as a
            whole, not as a collection of separate products. Less duplication,
            better visibility, our aim is to simplify your day to day work.
          </p>
          <p className={styles.connectorSub}>
            Wherever you&rsquo;re starting with one problem file or an inherited
            legacy environment, we find the simplest solution to solve it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MigrationStack;
