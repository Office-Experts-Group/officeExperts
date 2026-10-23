// app/copilot-and-ai-templates/(components)/AiTemplatesHero.jsx

// Compiled CSS module (source: styles/aiTemplatesHero.module.scss)
import styles from "../../../styles/aiTemplatesHero.module.css";

// Standalone blueprint illustration of an AI-ready Word template
import { BlueprintDocumentSvg } from "../(svgs)/BlueprintDocumentSvg";

// ── Component ─────────────────────────────────────────────────────────────────
// Server component. Replaces the stock-image ServiceHero on this page, so the
// page's only <h1> lives here.
const AiTemplatesHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Microsoft Copilot and AI for Word
          </span>

          <h2 className={styles.heading}>
            AI-ready Word templates and{" "}
            <span className={styles.accent}>custom AI agents</span>
          </h2>

          <p className={styles.lead}>
            Copilot and other AI tools in Microsoft Word are only as good as the
            documents you give them. Point them at a template built on manual
            formatting and they'll break your branding, ignore your styles and
            tell you the job's done when it isn't.
          </p>
          <p className={styles.lead}>
            Word Experts builds AI-ready Word templates that Copilot can
            actually understand and fill accurately, every time. We can modify
            your existing templates, and even build custom AI agents that take
            repetitive document work completely off your team's plate.
            Twenty-five years of Word development, now applied to AI.
          </p>

          {/* In-page anchors, so plain <a> rather than next/link */}
          <div className={styles.actions}>
            <a href="#contact" className={`btn ${styles.primary}`}>
              Are your templates AI ready?
            </a>
            <a href="#ai-agents" className={styles.secondary}>
              See how AI agents work
            </a>
          </div>
        </div>

        {/* ── Right: blueprint SVG (fill animation lives in the SCSS module) ── */}
        <div className={styles.visual}>
          <BlueprintDocumentSvg />
        </div>
      </div>
    </section>
  );
};

export default AiTemplatesHero;
