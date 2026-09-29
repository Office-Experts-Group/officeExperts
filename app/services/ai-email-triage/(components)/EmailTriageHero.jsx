// app/services/ai-email-triage/(components)/EmailTriageHero.jsx

// Compiled CSS module (source: styles/emailTriageHero.module.scss)
import styles from "../../../../styles/emailTriageHero.module.css";

// Standalone illustration: shared inbox → AI → sorted action lanes
import { InboxTriageSvg } from "../(svgs)/InboxTriageSvg";

const trustPoints = [
  "Microsoft specialists since 2000",
  "Australia-wide",
  "Remote or onsite support",
];

// ── Component ─────────────────────────────────────────────────────────────────
// Server component. Sits directly under the shared ServiceHero, which carries
// the page's <h1>, so this section opens with an <h2>.
const EmailTriageHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>AI email automation</span>

          <h2 className={styles.heading}>
            Let AI read the inbox,{" "}
            <span className={styles.accent}>so your team doesn't have to</span>
          </h2>

          <p className={styles.lead}>
            Stop reading every email to find the ones that matter. We build AI
            email triage that reads, sorts, prioritises and routes your incoming
            mail automatically, using the Microsoft 365 tools you already own or
            fully custom AI agents coded around your process.
          </p>

          {/* In-page anchor and tel: link, so plain <a> rather than next/link.
              tel: clicks are picked up by the existing GTM phone-click trigger. */}
          <div className={styles.actions}>
            <a href="#contact" className={`btn ${styles.primary}`}>
              Get a free consultation
            </a>
            <a href="tel:1300102810" className={styles.secondary}>
              Call 1300 102 810
            </a>
          </div>

          <ul className={styles.trust}>
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {/* ── Right: illustration (flow animation lives in the SCSS module) ── */}
        <div className={styles.visual}>
          <InboxTriageSvg />
        </div>
      </div>
    </section>
  );
};

export default EmailTriageHero;
