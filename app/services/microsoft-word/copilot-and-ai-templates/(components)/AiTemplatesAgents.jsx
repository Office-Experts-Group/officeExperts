// app/copilot-and-ai-templates/(components)/AiTemplatesAgents.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiTemplatesAgents.module.scss)
import styles from "../../../styles/aiTemplatesAgents.module.css";

// Inputs → agent → human approval → outputs
import { AgentWorkflowSvg } from "../(svgs)/AgentWorkflowSvg";

const agents = [
  {
    title: "Formatting and brand compliance",
    body: "Checks incoming documents against your template, fixes styles, headings, numbering and fonts, and flags anything it can't resolve.",
  },
  {
    title: "Invoices and quotes",
    body: "Pulls job, client and pricing data from your systems and produces a finished, branded Word or PDF invoice ready for approval.",
  },
  {
    title: "Email triage",
    body: "Reads your shared inbox, categorises and prioritises messages, drafts replies from approved wording and routes the rest to the right person.",
  },
  {
    title: "Proposals and reports",
    body: "Assembles first drafts from your clause library, past proposals and meeting notes, straight into an AI-ready template.",
  },
  {
    title: "Contract and document review",
    body: "Compares a document against your standard terms, highlights deviations as tracked changes and summarises the risk.",
  },
  {
    title: "Conversions and rebrands at scale",
    body: "Moves hundreds of legacy documents, PDFs or Canva files into your current template, applying the correct styles as it goes.",
  },
];

const AiTemplatesAgents = () => {
  return (
    // id is the target of the hero's secondary CTA
    <section className={styles.section} id="ai-agents">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            <span className={styles.accent}>Custom AI agents</span> that do the
            document work for you
          </h2>
          <p className={styles.lead}>
            Copilot helps one person with one document. A custom AI agent
            handles the same task every time, for everyone, without being asked
            twice. We design and build agents around your templates, your rules
            and your systems, so repetitive document work happens in the
            background and your team only steps in to check and approve.
          </p>
        </header>

        <div className={styles.visual}>
          <AgentWorkflowSvg />
        </div>

        <ul className={styles.grid}>
          {agents.map((agent) => (
            <li key={agent.title} className={styles.agent}>
              <h3 className={styles.agentTitle}>{agent.title}</h3>
              <p className={styles.agentBody}>{agent.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AiTemplatesAgents;
