// app/copilot-and-ai-templates/(components)/AiTemplatesRogue.jsx

// Compiled CSS module (source: styles/aiTemplatesRogue.module.scss)
import styles from "../../../styles/aiTemplatesRogue.module.css";

// Same document as the hero blueprint, drawn broken on the dark palette
import { RogueDocumentSvg } from "../(svgs)/RogueDocumentSvg";

const risks = [
  {
    title: "Messy styles in, messy output out",
    body: "Manual formatting and duplicate styles leave AI with no structure to follow, so its edits look random.",
  },
  {
    title: "No guardrails on protected content",
    body: "Without content controls, AI can rewrite terms, disclaimers and signatures as freely as body copy.",
  },
  {
    title: "Oversharing becomes instant",
    body: "Copilot respects existing Microsoft 365 permissions, which means every old “anyone with the link” file is suddenly one question away.",
  },
  {
    title: "Wrong source, right format",
    body: "An AI that can't tell current from superseded content will happily build a beautiful document on outdated information.",
  },
];

const AiTemplatesRogue = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: SVG (hidden on smaller screens) ── */}
        <div className={styles.visual}>
          <RogueDocumentSvg />
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Without a solid foundation,{" "}
            <span className={styles.accent}>AI goes rogue</span>
          </h2>
          <p className={styles.lead}>
            AI doesn't see your document the way you do. It can't tell that bold
            16-point text is meant to be a heading if it's styled as Normal. It
            can't tell locked legal wording from free text, or your approved
            clause library from a draft saved to SharePoint in 2019. So it
            guesses, and a confident guess repeated across hundreds of documents
            is how a brand, a contract or a compliance record quietly drifts off
            course.
          </p>

          <ul className={styles.list}>
            {risks.map((risk) => (
              <li key={risk.title} className={styles.item}>
                <h3 className={styles.itemTitle}>{risk.title}</h3>
                <p className={styles.itemBody}>{risk.body}</p>
              </li>
            ))}
          </ul>

          <p className={styles.closing}>
            The fix isn't a better prompt. It's a better document.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiTemplatesRogue;
