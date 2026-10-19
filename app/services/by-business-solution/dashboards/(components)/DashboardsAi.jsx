// app/services/by-business-solution/dashboards/(components)/DashboardsAi.jsx
// AI-powered dashboards: automated creation, real-time monitoring and plain-English questions,
// followed by the monitoring loop (genuinely sequential, so numbered) and a data security note.
// Server component. The id "ai-dashboards" is the target of the link in DashboardsIntro.
import Link from "next/link";

// Compiled CSS module (source: styles/dashboardsAi.module.scss)
import styles from "../../../../../styles/dashboardsAi.module.scss";
// Decorative illustration and icon stored with the route
import { AiChatSvg } from "../(svgs)/AiChatSvg";
import { ShieldIcon } from "../(svgs)/ShieldIcon";

// The three ways AI is added to a dashboard. Each body is JSX so it can carry inline links.
const capabilities = [
  {
    tag: "Build",
    title: "Automated dashboard creation",
    body: (
      <>
        AI profiles your source data, suggests measures and relationships,
        drafts the DAX and Power Query steps and lays out first-draft report
        pages in Power BI or{" "}
        <Link href="https://www.powerplatformexperts.com.au/microsoft-fabric">
          Microsoft Fabric
        </Link>
        . Our developers then check and finish the work, which shortens the
        slowest part of any dashboard project. For recurring reports, AI writes
        the monthly commentary so the pack arrives already explained.
      </>
    ),
  },
  {
    tag: "Watch",
    title: "Real-time monitoring and alerts",
    body: (
      <>
        An AI agent watches the data as it refreshes, compares it with targets
        and history, and messages the right person in Teams or email when
        something moves, with a short explanation of what changed. We built a
        system like this that{" "}
        <Link href="/case-studies/life-insurance-real-time-competitive-intelligence">
          cuts competitor response time from two weeks to twelve minutes
        </Link>
        .
      </>
    ),
  },
  {
    tag: "Ask",
    title: "Plain-English questions",
    body: (
      <>
        Ask "why did margin drop in Queensland last month?" and get an answer
        with the figures and a chart, drawn from your own data model.{" "}
        <Link href="/services/microsoft-office-365/copilot">
          Copilot in Power BI
        </Link>{" "}
        handles this for many reports. For SQL Server, Access or
        line-of-business data, we build{" "}
        <Link href="/services/ai-agent-development">custom AI agents</Link> that
        turn questions into checked queries.
      </>
    ),
  },
];

// The monitoring loop. Order matters here, so these are numbered.
const loop = [
  {
    title: "Watch",
    text: "Data is checked on every refresh, on a schedule or as it streams in.",
  },
  {
    title: "Detect",
    text: "Thresholds and anomaly detection flag movements that fall outside normal patterns.",
  },
  {
    title: "Explain",
    text: "AI drafts a short summary of what changed and the figures behind it.",
  },
  {
    title: "Notify",
    text: "The alert goes to the person responsible in Teams or email, with a link to the dashboard.",
  },
];

const DashboardsAi = () => {
  return (
    <section
      id="ai-dashboards"
      className={styles.section}
      aria-labelledby="ai-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.lead}>
            <header className={styles.header}>
              <span className={styles.eyebrow}>AI-powered dashboards</span>
              <h2 id="ai-heading" className={styles.heading}>
                Dashboards that build, watch and{" "}
                <span className={styles.accent}>explain themselves.</span>
              </h2>
              <p className={styles.intro}>
                A traditional dashboard still relies on someone opening it and
                noticing what changed. AI closes that gap. We use Copilot when
                your licensing already covers it, and custom agents when
                automation tasks become too complex.
              </p>
            </header>
            <div className={styles.visual} aria-hidden="true">
              <AiChatSvg />
            </div>
          </div>

          <div className={styles.capabilities}>
            {capabilities.map(({ tag, title, body }) => (
              <article key={title} className={styles.capability}>
                <span className={styles.capTag}>{tag}</span>
                <h3 className={styles.capTitle}>{title}</h3>
                <p className={styles.capText}>{body}</p>
              </article>
            ))}
            <Link href="#contact" className={`btn ${styles.cta}`}>
              Talk to us about AI dashboards
            </Link>
          </div>
        </div>

        {/* ── Monitoring loop ── */}
        <div className={styles.loop}>
          <h3 className={styles.loopTitle}>How real-time monitoring works</h3>
          <ol className={styles.steps}>
            {loop.map(({ title, text }, i) => (
              <li key={title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className={styles.stepTitle}>{title}</h4>
                <p className={styles.stepText}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DashboardsAi;
