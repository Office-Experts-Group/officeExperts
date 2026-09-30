// app/services/business-analysis/(components)/BusinessAnalysisValue.jsx
import Link from "next/link";

import styles from "../../../../styles/businessAnalysisValue.module.css";

const teams = [
  { label: "Word", href: "https://www.wordexperts.com.au" },
  { label: "Excel", href: "https://www.excelexperts.com.au" },
  { label: "Access & SQL Server", href: "https://www.accessexperts.com.au" },
  { label: "Power Platform", href: "https://www.powerplatformexperts.com.au" },
  { label: "Microsoft 365, Azure & custom development", href: "/services" },
];

const deliverables = [
  "Current-state workflow maps",
  "Requirements",
  "Recommended architecture",
  "Staged roadmap",
];

// Chooses <Link> for same-site paths and <a> for other domains
const SmartLink = ({ href, className, children }) =>
  href.startsWith("/") ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

// ── Component ─────────────────────────────────────────────────────────────────
// Unordered content laid out as an asymmetric bento grid. Each tile's span
// is set in the SCSS module (.pattern, .neutral, etc.), not by array order.
const BusinessAnalysisValue = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Why Office Experts Group</span>
          <h2 className={styles.heading}>
            Decades of experience with{" "}
            <span className={styles.accent}>real-world business systems.</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {/* ── 26 years ── */}
          <article className={`${styles.tile} ${styles.pattern}`}>
            {/* Large year sits behind the copy as a watermark */}
            <span className={styles.year} aria-hidden="true">
              2000
            </span>
            <h3 className={styles.title}>25+ years of pattern recognition</h3>
            <p className={styles.body}>
              Since 2000 we&apos;ve seen how businesses in almost every sector
              actually operate: government departments, law firms, health
              providers, manufacturers, financial services, retailers,
              not-for-profits. Most problems you&apos;re facing, we&apos;ve
              solved a version of before. That experience helps us find the
              simplest, scalable solution for your unique requirements.
            </p>
          </article>

          {/* ── Platform-neutral ── */}
          <article className={`${styles.tile} ${styles.neutral}`}>
            <h3 className={styles.title}>Platform-neutral recommendations</h3>
            <p className={styles.body}>
              We don&apos;t have one product to sell you. Sometimes the answer
              is a Word template. Sometimes it&apos;s Power Automate, a SQL
              Server back end, a custom Python agent or a Next.js portal.
              Sometimes it&apos;s changing the process and building nothing at
              all.
            </p>
          </article>

          {/* ── Specialist teams (dark tile) ── */}
          <article className={`${styles.tile} ${styles.teams}`}>
            <h3 className={styles.title}>
              Specialists across the whole Microsoft ecosystem, and beyond it
            </h3>
            <p className={styles.body}>
              Five specialist teams working in unison. When your workflow
              crosses departments, the people analysing it understand every
              system it touches.
            </p>
            <ul className={styles.chips}>
              {teams.map((team) => (
                <li key={team.label}>
                  <SmartLink href={team.href} className={styles.chip}>
                    {team.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </article>

          {/* ── AI architecture ── */}
          <article className={`${styles.tile} ${styles.ai}`}>
            <h3 className={styles.title}>
              Architecture that includes AI properly
            </h3>
            <p className={styles.body}>
              We design where AI belongs in your workflow, and where it
              doesn&apos;t. That might be{" "}
              <Link href="/services/microsoft-office-365/copilot">Copilot</Link>
              , an agent built in{" "}
              <a href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/ai-integrations">
                Power Platform
              </a>
              , or a fully custom agent in Python or JavaScript that runs
              outside your tenant entirely. Each option has different costs,
              risks and governance implications, and we&apos;ll lay them out
              plainly.
            </p>
          </article>

          {/* ── Build what we design ── */}
          <article className={`${styles.tile} ${styles.build}`}>
            <h3 className={styles.title}>We build what we design</h3>
            <p className={styles.body}>
              Analysis from people who don&apos;t deliver tends to be
              theoretical. Our consultants also work as the programmers,
              designers and developers who&apos;ll build the solution, so every
              recommendation is grounded in what&apos;s achievable on your
              licensing, in your environment and within your budget.
            </p>
          </article>

          {/* ── Blueprint you own ── */}
          <article className={`${styles.tile} ${styles.blueprint}`}>
            <div>
              <h3 className={styles.title}>A blueprint you own</h3>
              <p className={styles.body}>
                Every engagement produces documentation you keep. Use it with
                us, with your internal team, or as a precise specification for
                AI-assisted development. It&apos;s valuable either way.
              </p>
            </div>
            <ul className={styles.deliverables}>
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalysisValue;
