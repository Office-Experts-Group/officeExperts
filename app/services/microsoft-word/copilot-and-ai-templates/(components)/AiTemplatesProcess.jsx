// app/copilot-and-ai-templates/(components)/AiTemplatesProcess.jsx

// Compiled CSS module (source: styles/aiTemplatesProcess.module.scss)
import styles from "../../../styles/aiTemplatesProcess.module.css";

// Genuinely sequential, so this is the one numbered list on the page
const steps = [
  {
    title: "AI readiness review",
    body: "We look at your templates, a sample of live documents and how your team uses (or wants to use) Copilot or other AI tools, then show you exactly where AI is likely to go wrong.",
  },
  {
    title: "Foundation build",
    body: "We rebuild or convert your templates with clean styles, content controls, protected zones and in-template guidance, keeping your look and feel intact.",
  },
  {
    title: "Test with real AI",
    body: "We run your templates through Copilot and any other tools you use, with real prompts from your team, and refine until the output is consistent.",
  },
  {
    title: "Automate",
    body: "Where a task repeats, we design a custom AI agent around it, with guardrails and approval steps built in.",
  },
  {
    title: "Train and support",
    body: "We show your people how to prompt against the new templates and support you as Microsoft and other providers keep changing the tools.",
  },
];

const AiTemplatesProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>
            How we get your documents ready for AI
          </h2>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              {/* Visual number only; the <ol> already conveys order */}
              <span className={styles.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AiTemplatesProcess;
