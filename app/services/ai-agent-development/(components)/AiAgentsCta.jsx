// app/services/ai-agent-development/(components)/AiAgentsCta.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiAgentsCta.module.scss)
import styles from "../../../../styles/aiAgentsCta.module.css";

// ── Component ─────────────────────────────────────────────────────────────────
// Full-width accent band. The heading is split so the second clause carries
// the weight.
const AiAgentsCta = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <span className={styles.muted}>Tell us the task.</span> We'll tell
          you if an agent can do it.
        </h2>

        <div className={styles.actions}>
          <Link href="/contact-us/request-a-quote" className={styles.primary}>
            Request a quote
          </Link>
          {/* Phone clicks are picked up by the site-wide GTM tag */}
          <a href="tel:1300102810" className={styles.phone}>
            or call 1300 102 810
          </a>
        </div>
      </div>
    </section>
  );
};

export default AiAgentsCta;
