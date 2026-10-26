// /services/microsoft-word/document-automation/(components)/AutomationAi.jsx
// AI section: two approaches (Copilot vs custom agents) side by side, then an
// accent band explaining that both depend on an AI-ready template.
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
// Custom route-level SVG icons for each approach
import IconCopilot from "../(svgs)/IconCopilot";
import IconAgent from "../(svgs)/IconAgent";
import styles from "@/styles/automationAi.module.scss";

const approaches = [
  {
    Icon: IconCopilot,
    label: "Inside Microsoft 365",
    title: "Copilot in Word",
    description:
      "Copilot drafts, summarises and rewrites content directly inside Word, grounded in the files your staff already have access to. We configure it, write the prompts your team actually needs and train staff to turn its output into finished documents.",
    points: [
      "First drafts of reports, letters and proposals from notes",
      "Summaries of long documents and email threads",
      "Copilot Studio agents grounded in your SharePoint content",
    ],
    bestFor: "Teams already licensed for Microsoft 365 Copilot",
    link: {
      href: "/services/microsoft-office-365/copilot",
      text: "Microsoft Copilot consulting",
    },
  },
  {
    Icon: IconAgent,
    label: "Built by our programmers",
    title: "Custom AI agents",
    description:
      "When Copilot can't reach your data or follow your process, our programmers build agents in Python and JavaScript that read your systems, apply your rules and write the result straight into your Word template, ready for review.",
    points: [
      "Proposals drafted from call notes and a live rate card",
      "Reports assembled from databases, CRMs and spreadsheets",
      "No requirement to run inside your Microsoft tenant",
    ],
    bestFor: "Repeatable, high-volume documents with business rules",
    link: {
      href: "/services/ai-agent-development",
      text: "AI agent development",
    },
  },
];

// One approach card: icon, heading, description, outcomes and a link down to the service page
const ApproachCard = ({ Icon, label, title, description, points, bestFor, link }) => (
  <article className={styles.card}>
    <Icon className={styles.icon} />
    <p className={styles.label}>{label}</p>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.text}>{description}</p>
    <ul className={styles.points}>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
    <p className={styles.bestFor}>
      <strong>Best for:</strong> {bestFor}
    </p>
    <Link href={link.href} className={styles.link}>
      {link.text}
    </Link>
  </article>
);

const AutomationAi = () => (
  <section className={styles.wrapper} aria-labelledby="automation-ai-heading">
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>AI Document Automation</p>
        <h2 id="automation-ai-heading" className={styles.heading}>
          Let AI Write the First Draft.{" "}
          <span className={styles.accent}>Let Word Keep It on Brand.</span>
        </h2>
        <p className={styles.intro}>
          Macros and Building Blocks handle structure and formatting. AI now
          handles the writing: pulling details from notes, emails and business
          systems and turning them into a first draft. We use Microsoft Copilot
          or build our own custom AI agents, depending on where your data lives
          and how much control you need.
        </p>
      </header>

      <div className={styles.grid}>
        {approaches.map((approach, i) => (
          <AnimateOnScroll
            key={approach.title}
            animation="fade-up"
            duration={0.8}
            delay={0.1 * i}
          >
            <ApproachCard {...approach} />
          </AnimateOnScroll>
        ))}
      </div>

      {/* Accent band: the template is the foundation both approaches depend on */}
      <div className={styles.band}>
        <div>
          <h3 className={styles.bandTitle}>
            AI is only as good as the template it writes into
          </h3>
          <p className={styles.bandText}>
            Without proper styles, content controls and locked layouts, AI
            output arrives as unformatted text that someone still has to fix.
            We rebuild templates so generated content lands in the right place,
            in the right format, every time.
          </p>
        </div>
        <Link
          href="/services/microsoft-word/ai-ready-word-templates"
          className={styles.bandLink}
        >
          AI-ready Word templates
        </Link>
      </div>
    </div>
  </section>
);

export default AutomationAi;
