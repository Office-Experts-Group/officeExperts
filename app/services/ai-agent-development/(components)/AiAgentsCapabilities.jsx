// app/services/ai-agent-development/(components)/AiAgentsCapabilities.jsx

// Compiled CSS module (source: styles/aiAgentsCapabilities.module.scss)
import styles from "../../../../styles/aiAgentsCapabilities.module.css";

// Annotated mock of a single agent finding. Its lettered markers (A–F) match
// the `key` on each principle below.
import { AgentFindingSvg } from "../(svgs)/AgentFindingSvg";

// Split into two lists so they can sit either side of the illustration.
// Letters are legend keys for the SVG, not a sequence.
const left = [
  {
    key: "A",
    title: "Specialist agents, each with one job",
    body: "Rather than one agent doing everything, each handles a single check. Narrow jobs are easier to test and easier to trust.",
  },
  {
    key: "B",
    title: "Grounded in your own policies",
    body: "Agents work from your policies, templates and past decisions, not the internet's idea of best practice.",
  },
  {
    key: "C",
    title: "Every finding referenced",
    body: "Each conclusion links back to the document, clause or page it came from, so a reviewer can check it in seconds.",
  },
];

const right = [
  {
    key: "D",
    title: "People approve, and the agent learns",
    body: "Nothing important goes out unchecked. Reviewer decisions feed back in, so accuracy improves with use.",
  },
  {
    key: "E",
    title: "Written in your voice",
    body: "Replies and reports follow your organisation's tone, terminology and house style.",
  },
  {
    key: "F",
    title: "Delivered where you already work",
    body: "Results land in Word, SharePoint, Teams and Power BI, not yet another login.",
    // Cross-domain link rendered inside the body copy
    link: {
      text: "AI-ready Word templates",
      href: "https://www.wordexperts.com.au/copilot-and-ai-templates",
      lead: "Pair them with ",
    },
  },
];

// Renders one principle; the marker mirrors the SVG's lettered badges
const Principle = ({ item }) => (
  <li className={styles.item}>
    <span className={styles.marker} aria-hidden="true">
      {item.key}
    </span>
    <div className={styles.text}>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemBody}>
        {item.body}
        {item.link && (
          <>
            {" "}
            {item.link.lead}
            <a href={item.link.href} className={styles.link}>
              {item.link.text}
            </a>
            .
          </>
        )}
      </p>
    </div>
  </li>
);

// ── Component ─────────────────────────────────────────────────────────────────
const AiAgentsCapabilities = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Anatomy of an agent finding</span>
          <h2 className={styles.heading}>
            Built to be trusted,{" "}
            <span className={styles.accent}>not just impressive</span>
          </h2>
        </header>

        <div className={styles.layout}>
          <ul className={styles.list}>
            {left.map((item) => (
              <Principle key={item.key} item={item} />
            ))}
          </ul>

          <div className={styles.visual}>
            <AgentFindingSvg />
          </div>

          <ul className={styles.list}>
            {right.map((item) => (
              <Principle key={item.key} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiAgentsCapabilities;
