// app/copilot-and-ai-templates/(components)/AiTemplatesReality.jsx

// next/image serves static-imported SVGs as-is (no optimisation pass), fine for SSR
import Image from "next/image";

// Compiled CSS module (source: styles/aiTemplatesReality.module.scss)
import styles from "../../../styles/aiTemplatesReality.module.css";

// Decorative illustration: the four failures below drawn on one Word page
import AiTemplatesRealitySvg from "../(svgs)/AiTemplatesRealitySvg";

// Not a sequence, so rendered as an unordered list rather than numbered steps
const realities = [
  {
    title: "It ignores your template",
    body: "Ask Copilot to fill a branded template and it can skip headers and footers, break tables, or dump text at the bottom of the page instead of filling the blanks.",
  },
  {
    title: "It says “done” when it isn't",
    body: "Microsoft's own support answers acknowledge that Copilot can report a formatting change as complete when nothing has changed, particularly in long documents or where styles aren't set up properly.",
  },
  {
    title: "It answers in the chat pane",
    body: "The content you asked for often appears in the sidebar rather than the document, so someone still has to paste it in and fix the formatting by hand.",
  },
  {
    title: "It sounds right when it's wrong",
    body: "Every large language model can invent facts, figures and references. Australian courts have now dealt with more than twenty matters involving AI-generated false citations.",
  },
];

const AiTemplatesReality = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              AI in Word isn't the magic button it's sold as{" "}
              <span className={styles.accent}>(yet...)</span>
            </h2>
            <p className={styles.lead}>
              Copilot, ChatGPT for Word and Claude for Word are improving every
              month. Microsoft alone has shipped model switching, agentic
              editing and tracked-change support in 2026. But in real business
              documents, the gap between the demo and the day-to-day is still
              wide. These are the complaints we hear most from Australian
              organisations.
            </p>
          </div>

          <AiTemplatesRealitySvg />
        </header>

        <ul className={styles.list}>
          {realities.map((item) => (
            <li key={item.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AiTemplatesReality;
