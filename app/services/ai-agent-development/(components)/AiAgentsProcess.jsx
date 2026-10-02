// app/services/ai-agent-development/(components)/AiAgentsProcess.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiAgentsProcess.module.scss)
import styles from "../../../../styles/aiAgentsProcess.module.css";

// Genuinely sequential, so this is the one numbered list on the page.
// `body` is a function so steps with inline links can return JSX.
const steps = [
  {
    title: "Discovery and business analysis",
    body: () => (
      <>
        We start with how the work happens today: who does it, what they check
        and where it goes wrong. We{" "}
        <Link href="/services/business-analysis" className={styles.link}>
          analyse your business requirements
        </Link>{" "}
        before writing any code.
      </>
    ),
  },
  {
    title: "Map the process the agent will run",
    body: () => (
      <>
        We break the task into decisions and hand-offs, then agree which steps
        the agent takes and which stay with people. It's the same mapping behind
        our{" "}
        <Link
          href="/services/microsoft-office-365/business-process-automation"
          className={styles.link}
        >
          business process automation
        </Link>{" "}
        work.
      </>
    ),
  },
  {
    title: "Choose the build approach",
    body: () =>
      "Microsoft-native, custom-coded or hybrid, based on your data, systems, licences and appetite for risk.",
  },
  {
    title: "Build and test against your real data",
    body: () =>
      "We test on your actual documents, tickets and edge cases, not tidy samples, and measure against how your team does it now.",
  },
  {
    title: "Staged rollout with human review",
    body: () =>
      "The agent suggests before it acts. Reviewers approve its work until its accuracy earns more autonomy.",
  },
  {
    title: "Monitor, refine and extend",
    body: () =>
      "We track accuracy and running costs, tune the agent as your policies change, and add the next agent once the first has proved itself.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
// Sticky heading on the left, steps on a vertical rail on the right.
const AiAgentsProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>From idea to working agent</h2>
          <p className={styles.lead}>
            An agent can only automate a process that's properly understood.
            That's why analysis comes first and autonomy comes last.
          </p>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              {/* Visual number only; the <ol> already conveys order */}
              <span className={styles.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <div className={styles.stepText}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body()}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AiAgentsProcess;
