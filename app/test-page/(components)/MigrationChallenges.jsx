// app/services/microsoft-office/upgrades-and-migration/(components)/MigrationChallenges.jsx
"use client";
import Link from "next/link";
import styles from "../../../styles/migrationChallenges.module.css";

const challenges = [
  {
    num: "01",
    category: "Compatibility issues",
    hook: "Systems can seem fine during testing and then fail in production, often in ways that are hard to trace.",
    items: [
      "32-bit vs 64-bit conflicts between Office versions and Windows environments",
      "VBA and macro code that breaks when deprecated libraries or APIs are removed",
      "Add-ins and integrations that stop working in newer versions of Microsoft 365",
      "Differences in how the same file behaves on desktop versus cloud-based applications",
    ],
    insight:
      "Compatibility issues are among the most common upgrade surprises, and they almost always appear after the fact.",
    link: null,
  },
  {
    num: "02",
    category: "Legacy code and architecture",
    hook: "A lot of business-critical systems were built to solve one problem at one point in time and were never designed for someone else to maintain five years later.",
    items: [
      "Complex VBA logic in Excel or Access that nobody fully understands anymore",
      "Processes that are hardcoded and nearly impossible to modify safely",
      "No documentation, and the person who built it left years ago",
      "Workarounds built on top of previous workarounds",
    ],
    insight:
      "This is what makes even small changes risky and what makes migrations significantly more complex than a first estimate suggests.",
    link: {
      href: "https://www.excelexperts.com.au/vba-macro-development",
      label: "VBA and macro services",
    },
  },
  {
    num: "03",
    category: "Performance and scalability limits",
    hook: "File-based systems have ceilings. When you hit them, performance degrades its just an unfortunate reality.",
    items: [
      "Excel files that take minutes to open or calculate, and crash unpredictably",
      "Access databases that fall over under concurrent users or growing data volumes",
      "Systems designed for one or two people now being used by fifteen",
      "Reports that time out or produce inconsistent results",
    ],
    insight:
      "The fix is usually a proper database backend like SQL Server or cloud infrastructure built with Azure. It's not more optimisation of the existing file.",
    link: {
      href: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
      label: "SQL Server migration options",
    },
  },
  {
    num: "04",
    category: "Data integrity and migration risks",
    hook: "Moving data is where things can go wrong in ways that are hard to recover from.",
    items: [
      "Inconsistent or duplicated records across multiple source files",
      "Broken relationships between tables, accumulated over years",
      "Historical data that gets lost or corrupted during a migration",
      "Encoding or formatting issues that only appear in outputs, not the source",
    ],
    insight:
      "Small data problems tend to have large downstream effects. Validation before, during, and after a migration is as important as the migration itself.",
    link: null,
  },
  {
    num: "05",
    category: "Integration breakdowns",
    hook: "An upgrade that doesn't account for system dependencies will break them.",
    items: [
      "Existing integrations failing after a version change or platform move",
      "APIs and connectors that are no longer supported",
      "Manual processes that were filling gaps between disconnected tools, now needing to be rebuilt",
      "Difficulty connecting Power Platform, Azure, and older line-of-business systems",
    ],
    insight:
      "Integration failures are often invisible until a workflow stops working. The risk is highest when nobody has documented what connects to what.",
    link: null,
  },
  {
    num: "06",
    category: "Security, access, and compliance gaps",
    hook: "Older systems were built in different times, with different expectations around data access and security.",
    items: [
      "Sensitive data accessible to anyone who can open the file",
      "No audit trail of who changed what, or when",
      "Password protection that provides little real security",
      "Compliance requirements the system simply wasn't built to meet",
    ],
    insight:
      "When these systems move into a more scrutinised environment or when the business grows, the gaps become harder to ignore.",
    link: null,
  },
];

const MigrationChallenges = () => {
  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Common challenges</p>
        <h2 className={styles.heading}>
          Upgrades and migrations are rarely as simple as they look.
        </h2>
        <p className={styles.subheading}>
          What on the surface appears to be a straightforward version update or
          platform move can expose issues that were laying dormant underneath,
          particularly in systems that have grown over years without anyone
          stepping back to review the entire architecture.
        </p>
      </div>

      {/* ── Challenge rows ── */}
      <div className={styles.rows}>
        {challenges.map((ch) => (
          <details key={ch.num} className={styles.row}>
            <summary className={styles.rowSummary}>
              <span className={styles.rowNum}>{ch.num}</span>
              <span className={styles.rowMeta}>
                <span className={styles.rowCategory}>{ch.category}</span>
                <span className={styles.rowHook}>{ch.hook}</span>
              </span>
              <span className={styles.rowChevron} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>

            <div className={styles.rowBody}>
              <ul className={styles.rowList}>
                {ch.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.rowInsight}>{ch.insight}</p>
              {ch.link && (
                <Link href={ch.link.href} className={styles.rowLink}>
                  {ch.link.label}
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
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default MigrationChallenges;
