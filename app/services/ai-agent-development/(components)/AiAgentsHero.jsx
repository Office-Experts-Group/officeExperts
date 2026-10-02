// app/services/ai-agent-development/(components)/AiAgentsHero.jsx

// Compiled CSS module (source: styles/aiAgentsHero.module.scss)
import styles from "../../../../styles/aiAgentsHero.module.css";

// ── Component ─────────────────────────────────────────────────────────────────

const AiAgentsHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>agentic workflows</span>
            <h2 className={styles.heading}>
              Custom AI agents that{" "}
              <span className={styles.accent}>do the work</span>, not just
              answer questions
            </h2>
          </div>

          <div className={styles.body}>
            <p className={styles.lead}>
              An AI agent reads, researches, decides and acts across your
              systems, then hands the finished result to a person to approve. It
              runs the same process the same way every time, without anyone
              typing a prompt.
            </p>
            <p className={styles.lead}>
              Our team of developers have been building on Microsoft since 2000.
              We build agents inside Microsoft 365, or code them from scratch in
              Python and JavaScript when the job outgrows low-code.
            </p>
            {/* In-page anchors, so plain <a> rather than next/link */}
            <div className={styles.actions}>
              <a href="#contact" className="btn">
                Book a free consultation
              </a>
              <a href="#results" className={styles.secondary}>
                See what our agents have done
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgentsHero;
