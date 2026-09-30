// app/services/business-analysis/(components)/BusinessAnalysisProof.jsx

// Next.js client-side navigation for internal routes
import Link from "next/link";

// Compiled CSS module (source: styles/businessAnalysisProof.module.scss)
import styles from "../../../../styles/businessAnalysisProof.module.css";

// Every figure comes from a published case study (no invented stats)
const results = [
  {
    area: "Application review",
    before: "6–7 days",
    after: "~90 minutes",
    body: "An investor's application review process redesigned around an agentic AI workflow with fully traceable findings.",
    href: "/case-studies/rdao-application-ai-review-workflow",
  },
  {
    area: "Competitor response",
    before: "Two weeks",
    after: "Twelve minutes",
    body: "An AI competitive intelligence system on a bank's Microsoft 365 tenancy detects and scores competitor changes as they happen.",
    href: "/case-studies/life-insurance-real-time-competitive-intelligence",
  },
  {
    area: "Ticket resolution",
    before: "48 hours",
    after: "3 hours",
    body: "A chained agentic AI customer service system built on Power Automate and Power Apps.",
    href: "/case-studies/sporting-goods-agentic-ai-customer-service",
  },
  {
    area: "Compliance review",
    before: "6 hours",
    after: "1 hour a month",
    body: "An FCA-regulated firm's spreadsheet compliance process rebuilt around a live SharePoint risk register, AI risk-mapping agents and a real-time dashboard.",
    href: "/case-studies/financial-services-ai-risk-compliance-automation",
  },
  {
    area: "Research report",
    before: "3 months",
    after: "4 weeks",
    body: "AI research agents and a SharePoint knowledge base turned 10,000+ documents into a 70-page go-to-market report.",
    href: "/case-studies/biochar-ai-go-to-market-analysis-uk",
  },
  {
    area: "Project setup",
    before: "30 minutes",
    after: "Under 1 minute",
    body: "A Power Automate flow reads a new project email and builds the full SharePoint job folder structure.",
    href: "/case-studies/manufacturing-project-setup-automation",
  },
  {
    area: "Legacy system",
    before: "VM-locked Access 2000",
    after: "Azure SQL + Next.js",
    body: "A film crew booking database migrated to the cloud, with the website rebuilt for 10x faster load times.",
    href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
  },
  {
    area: "Reporting",
    before: "400MB linked workbook",
    after: "One-click refresh",
    body: "Four locations consolidated into a row-based template refreshed with Power Query.",
    href: "/case-studies/community-services-excel-consolidation-rebuild",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
// id="proof" is the target of the hero's secondary button.
// Each row is a single link so the whole line is clickable.
const BusinessAnalysisProof = () => {
  return (
    <section className={styles.section} id="proof">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Proof</span>
            <h2 className={styles.heading}>
              Good analysis shows up{" "}
              <span className={styles.muted}>in the numbers</span>
            </h2>
          </div>
          <Link href="/case-studies" className={styles.all}>
            All case studies
          </Link>
        </header>

        <ul className={styles.list}>
          {results.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className={styles.row}>
                <span className={styles.area}>{r.area}</span>

                {/* Struck-through "before" stacked above the "after";
                    the hidden words make it read naturally on screen readers */}
                <span className={styles.metric}>
                  <s className={styles.before}>
                    <span className={styles.visuallyHidden}>Was </span>
                    {r.before}
                  </s>
                  <strong className={styles.after}>
                    <span className={styles.visuallyHidden}>now </span>
                    {r.after}
                  </strong>
                </span>

                <span className={styles.body}>{r.body}</span>
                <span className={styles.cta}>Read the case study</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BusinessAnalysisProof;
