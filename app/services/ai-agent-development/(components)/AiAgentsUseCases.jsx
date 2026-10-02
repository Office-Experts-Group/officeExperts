// app/services/ai-agent-development/(components)/AiAgentsUseCases.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiAgentsUseCases.module.scss)
import styles from "../../../../styles/aiAgentsUseCases.module.css";

// ── Featured results ──────────────────────────────────────────────────────────
// Figures match caseStudies.js. If that file's export shape allows it, these
// can later be pulled from it by slug so the numbers stay in one place.
// `afterPct` is the "after" time as a percentage of "before", used only to
// size the comparison bar. CSS enforces a minimum width so tiny values show.
const featured = [
  {
    useCase: "Document and application review",
    title: "Investment applications reviewed in an afternoon",
    body: "KYC, compliance, legal and financial agents review each application in parallel, research the applicant online and ground every finding in the investor's own policies.",
    before: "6–7 days",
    after: "~90 minutes",
    afterPct: 1.5,
    extra: "Pays for itself in around six months",
    href: "/case-studies/rdao-application-ai-review-workflow",
  },
  {
    useCase: "Customer service and ticket resolution",
    title: "Support tickets resolved in hours, not days",
    body: "A chain of classifier, resolution, validation and escalation agents works each ticket, while staff review the edge cases and train the system as they go.",
    before: "48 hours",
    after: "3 hours",
    afterPct: 6.25,
    extra: "67% of tickets resolved with no human input",
    href: "/case-studies/sporting-goods-agentic-ai-customer-service",
  },
  {
    useCase: "Competitor and market monitoring",
    title: "Competitor changes flagged before the meeting",
    body: "Monitoring agents watch competitor products and pricing, score every change and alert the right team in Teams, learning from each reviewer's decision.",
    before: "2 weeks",
    after: "12 minutes",
    afterPct: 0.1,
    extra: "87% better signal-to-noise",
    href: "/case-studies/life-insurance-real-time-competitive-intelligence",
  },
];

// ── Further agent work ────────────────────────────────────────────────────────
const more = [
  {
    title: "Risk and compliance management",
    body: "Risk-mapping agents keep a live register current and alert the team when regulations change. For one UK-regulated firm, monthly review time fell from six hours to one.",
    href: "/case-studies/financial-services-ai-risk-compliance-automation",
  },
  {
    title: "Research and report generation",
    body: "Research agents turned 10,000+ documents into a 70-page market report in four weeks, with every human edit audited.",
    href: "/case-studies/biochar-ai-go-to-market-analysis-uk",
  },
  {
    title: "Proposal and document drafting",
    body: "A conversational agent drafts proposals straight into the real Word template from call notes and a live rate card.",
    href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
  },
  {
    title: "Email triage and routing",
    body: "Agents read shared inboxes, sort and prioritise messages, draft replies and route the rest to the right person.",
    href: "/services/ai-email-triage",
  },
  {
    title: "Data-to-report automation",
    body: "Python tools query Power BI and assemble a branded ~660-slide review deck in under five minutes, ready for AI commentary.",
    href: "/case-studies/retail-analytics-automated-review-deck-generator",
  },
];

// Arrow used on every text link in this section
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────
const AiAgentsUseCases = () => {
  return (
    // id is the target of the hero's secondary CTA
    <section className={styles.section} id="results">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            AI agents for the work that's{" "}
            <span className={styles.accent}>slowing your team down</span>
          </h2>
          <p className={styles.lead}>
            Every agent below is running for a real client. The numbers come
            from their case studies, not a demo.
          </p>
        </header>

        {/* ── Featured: before/after time compression ── */}
        <ul className={styles.featured}>
          {featured.map((item) => (
            <li key={item.href} className={styles.row}>
              <div className={styles.rowText}>
                <span className={styles.useCase}>{item.useCase}</span>
                <h3 className={styles.rowTitle}>{item.title}</h3>
                <p className={styles.rowBody}>{item.body}</p>
                <Link href={item.href} className={styles.textLink}>
                  Read the case study <Arrow />
                </Link>
              </div>

              {/* Bars are decorative; the <dt>/<dd> text carries the figures */}
              <div className={styles.compare}>
                <dl className={styles.measures}>
                  <div className={styles.measure}>
                    <dt className={styles.measureLabel}>Before</dt>
                    <dd className={styles.measureValue}>
                      {item.before}
                      <span className={styles.barBefore} aria-hidden="true" />
                    </dd>
                  </div>
                  <div className={styles.measure}>
                    <dt className={styles.measureLabel}>With agents</dt>
                    <dd
                      className={`${styles.measureValue} ${styles.afterValue}`}
                    >
                      {item.after}
                      {/* --after sizes the bar from the data above */}
                      <span
                        className={styles.barAfter}
                        style={{ "--after": `${item.afterPct}%` }}
                        aria-hidden="true"
                      />
                    </dd>
                  </div>
                </dl>
                <p className={styles.extra}>{item.extra}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── More agent work: compact two-column index ── */}
        <div className={styles.more}>
          <h3 className={styles.moreHeading}>More agents we've built</h3>
          <ul className={styles.moreList}>
            {more.map((item) => (
              <li key={item.href}>
                {/* Whole entry is the link, so the hit area is generous */}
                <Link href={item.href} className={styles.moreLink}>
                  <span className={styles.moreTitle}>
                    {item.title} <Arrow />
                  </span>
                  <span className={styles.moreBody}>{item.body}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/case-studies" className={styles.textLink}>
            Browse every case study <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiAgentsUseCases;
