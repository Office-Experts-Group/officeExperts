// app/services/ai-agent-development/(components)/AiAgentsProblem.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiAgentsProblem.module.scss)
import styles from "../../../../styles/aiAgentsProblem.module.css";

// Symptoms drawn from the agent case studies. Unordered, so no numbering.
const symptoms = [
  {
    title: "One person is the bottleneck",
    body: "Every application, ticket or report waits for the one person who knows how it's done.",
  },
  {
    title: "Research starts from scratch",
    body: "Each request means searching the same sources and rebuilding the same notes.",
  },
  {
    title: "Answers depend on who replies",
    body: "The same question gets different responses, and policy quietly slips.",
  },
  {
    title: "News arrives after it matters",
    body: "A competitor's price change or a new regulation reaches the right person weeks late.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const AiAgentsProblem = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          ChatGPT can write an email.<br></br>
          <span className={styles.muted}>
            It won't do it without your input.
          </span>
        </h2>

        <div className={styles.contrast}>
          <div className={styles.side}>
            <span className={styles.label}>A chat tool</span>
            <p className={styles.statement}>
              One person, one prompt, one answer. Tomorrow, start all over
              again.
            </p>
            <p className={styles.body}>
              ChatGPT and{" "}
              <Link
                href="/services/microsoft-office-365/copilot"
                className={styles.link}
              >
                Copilot in Microsoft 365
              </Link>{" "}
              are excellent assistants, but they wait to be asked, and the
              quality depends on who's asking.
            </p>
          </div>

          <div className={styles.side}>
            <span className={`${styles.label} ${styles.labelAccent}`}>
              An AI agent
            </span>
            <p className={styles.statement}>
              The same task, done the same way, for everyone, connected to your
              data.
            </p>
            <p className={styles.body}>
              An agent is given a job rather than a prompt. It picks up the work
              as it arrives and follows your rules without being reminded.
            </p>
          </div>
        </div>

        {/* 2×2 grid; the 1px gap over a light background draws the cross rules */}
        <ul className={styles.symptoms}>
          {symptoms.map((s) => (
            <li key={s.title} className={styles.symptom}>
              <h3 className={styles.symptomTitle}>{s.title}</h3>
              <p className={styles.symptomBody}>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AiAgentsProblem;
