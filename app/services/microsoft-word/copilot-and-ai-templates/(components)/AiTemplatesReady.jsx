// app/copilot-and-ai-templates/(components)/AiTemplatesReady.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/aiTemplatesReady.module.scss)
import styles from "../../../styles/aiTemplatesReady.module.css";

// Exploded view of the four structural layers in an AI-ready template
import { TemplateLayersSvg } from "../(svgs)/TemplateLayersSvg";

const features = [
  {
    title: "A clean, named style set",
    body: "One body style, a true heading hierarchy, defined list and table styles. No manual overrides for AI to misread.",
  },
  {
    title: "Content controls with meaningful titles",
    body: "Placeholders such as Client Name, Scope of Work or Fee Schedule tell AI exactly what belongs where, and give automation a reliable hook to fill them.",
  },
  {
    title: "Locked and editable zones",
    body: "Legal wording, disclaimers, logos and signature blocks are protected, so AI can draft around them but not over them.",
  },
  {
    title: "Plain-English guidance inside the template",
    body: "Hidden instructions a person or an AI reads before drafting: tone, length, what to include and what never to include.",
  },
  {
    title: "Approved building blocks",
    body: "Quick Parts and clause libraries that AI can pull from, instead of inventing wording from scratch.",
  },
  {
    title: "Accessibility built in",
    body: "Proper headings, alt text and table headers. What helps a screen reader also helps AI understand your document.",
  },
];

// Internal links to related Word Experts services
const relatedLinks = [
  { href: "/word-document-template-creation", label: "Word template creation" },
  { href: "/word-template-conversions", label: "Template conversions" },
  { href: "/quick-parts", label: "Quick Parts" },
  { href: "/accessibility", label: "Accessible documents" },
  {
    href: "/corporate-global-template-solution",
    label: "Corporate global templates",
  },
];

const AiTemplatesReady = () => {
  return (
    <section className={styles.section} id="ai-ready-templates">
      <div className={styles.inner}>
        {/* ── Top: intro + layers SVG ── */}
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              AI-ready Word templates that{" "}
              <span className={styles.accent}>Copilot can understand</span> and
              fill
            </h2>
            <p className={styles.lead}>
              An AI-ready template is a Word template engineered so both people
              and AI can read its structure. Every heading, table, placeholder
              and protected clause is defined in a way Copilot, ChatGPT or
              Claude can recognise, so when you ask for a proposal, report or
              letter, it fills the right places and leaves the rest alone.
            </p>
            <p className={styles.lead}>
              It's the same discipline behind accessible, well-built templates,
              applied to a new kind of user.
            </p>
          </div>

          <div className={styles.visual}>
            <TemplateLayersSvg />
          </div>
        </div>

        {/* ── Feature grid (unordered) ── */}
        <ul className={styles.grid}>
          {features.map((feature) => (
            <li key={feature.title} className={styles.feature}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureBody}>{feature.body}</p>
            </li>
          ))}
        </ul>

        {/* ── Existing templates + related services ── */}
        <div className={styles.footer}>
          <p className={styles.note}>
            Already have templates? We can audit and convert your existing
            library so it's ready for Copilot, without changing how it looks to
            your clients.
          </p>
          <nav className={styles.links} aria-label="Related template services">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AiTemplatesReady;
