// /app/services/microsoft-power-platform/power-pages/(components)/PpgAiCapabilities.jsx

import Link from "next/link";
import styles from "@/styles/ppgAiCapabilities.module.scss";
import { PpgDesignArt, PpgFormsAiArt, PpgBotArt } from "../(svgs)/PpgAiArt";
import { ArrowIcon } from "../(svgs)/PpgIcons";

const PPG_AI_FEATURES = [
  {
    id: "design",
    label: "Copilot in the design studio",
    body: "Describe a page or section in plain language and Copilot drafts a layout. It is useful for getting a starting point, but you will still need to refine it.",
    honest: "Good for scaffolding. Not a replacement for design decisions.",
    Art: PpgDesignArt,
    dark: false,
  },
  {
    id: "forms",
    label: "AI-generated forms",
    body: "Describe the data you want to collect and Copilot generates a form connected to a Dataverse table. It saves time on routine portal builds.",
    honest:
      "Works well for standard field types. Complex validation still needs manual configuration.",
    Art: PpgFormsAiArt,
    dark: true,
  },
  {
    id: "chatbot",
    label: "Chatbot integration",
    body: "Power Pages sites can embed Copilot Studio bots for on-site chat and FAQ handling, and those bots can be grounded on your own data.",
    honest:
      "Powerful when the bot is well scoped. A poorly configured bot creates support work, not savings.",
    Art: PpgBotArt,
    dark: false,
  },
];

const PpgAiCapabilities = () => {
  return (
    <section
      className={styles.ppgAi}
      id="ppg-ai"
      aria-labelledby="ppg-ai-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Copilot features</span>
          <h2 id="ppg-ai-heading" className={styles.headline}>
            AI in Power Pages -{" "}
            <span className={styles.accent}>
              what&rsquo;s real, what&rsquo;s useful
            </span>
          </h2>
          <p className={styles.intro}>
            Microsoft has added Copilot features to Power Pages in recent
            releases. The ones below are genuinely useful in practice. Which of
            them you can use can vary by region and licence, so we help you work
            out which capabilities are worth using in your situation.
          </p>
        </header>

        <ul className={styles.list} aria-label="Copilot feature breakdown">
          {PPG_AI_FEATURES.map(({ id, label, body, honest, Art, dark }) => (
            <li
              key={id}
              className={`${styles.row} ${dark ? styles.darkRow : styles.lightRow}`}
            >
              <span className={styles.art}>
                <Art />
              </span>
              <div className={styles.text}>
                <h3 className={styles.rowTitle}>{label}</h3>
                <p className={styles.rowBody}>{body}</p>
              </div>
              <div className={styles.honest}>
                <span className={styles.honestTag}>Honest take</span>
                <p className={styles.honestText}>{honest}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.after}>
          Want a chatbot or AI agent that goes further than a portal feature?
          See our{" "}
          <Link href="/services/copilot" className={styles.inlineLink}>
            Copilot services
          </Link>{" "}
          and{" "}
          <Link
            href="/services/ai-agent-development"
            className={styles.inlineLink}
          >
            AI agent development
          </Link>
          .
        </p>
        <Link href="#contact" className={styles.arrowLink}>
          Ask which AI features suit your portal
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default PpgAiCapabilities;
