// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsLayout.jsx

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

// One small page-layout glyph per option (the name matches a key in LayoutGlyphs.js)
import { LayoutGlyph } from "../(svgs)/LayoutGlyphs";

import styles from "@/styles/toolbarsLayout.module.scss";

const layoutOptions = [
  {
    label: "Covers",
    glyph: "cover",
    text: "Branded cover pages with the title, date and document details filled in for you, so every document opens the same professional way.",
  },
  {
    label: "Image layout pages",
    glyph: "image",
    text: "Pre-built pages designed around photos, diagrams and screenshots, with consistent sizing, captions and alignment.",
  },
  {
    label: "Chapter break pages",
    glyph: "chapter",
    text: "On-brand section dividers inserted in one click and kept in step with your heading styles.",
  },
  {
    label: "Appendix sections",
    glyph: "appendix",
    text: "Appendix pages with their own headings and numbering that appear correctly in the contents list.",
  },
  {
    label: "Insert table of contents",
    glyph: "toc",
    text: "A formatted contents page added in a click, built from your headings and styled to match your brand.",
  },
  {
    label: "Terms and conditions sections",
    glyph: "terms",
    text: "Approved legal wording dropped into place with the right layout and numbering, so nobody has to retype or reword it.",
  },
  {
    label: "Document content options",
    glyph: "content",
    text: "Choose the blocks a document needs, such as summaries, disclaimers or sign-off pages, and insert them ready-formatted.",
  },
  {
    label: "Chart templates",
    glyph: "chart",
    text: "Chart styles set to your brand colours and fonts, so figures look consistent from one report to the next.",
  },
  {
    label: "Custom page layouts",
    glyph: "layout",
    text: "Bespoke designs, such as multi-column or sidebar pages, built into the template instead of faked with spaces and tabs.",
  },
];

const ToolbarsLayout = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Layout &amp; design</p>
          <h2 className={styles.heading}>
            Advanced Layout &amp;{" "}
            <span className={styles.accent}>Design Options</span>
          </h2>
          <p className={styles.text}>
            We help you go beyond standard Word formatting with advanced layout
            and styling tools that make your documents professional,
            consistent, and visually engaging.
          </p>
        </header>
      </AnimateOnScroll>

      {/* ── Option tiles ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <ul className={styles.grid}>
          {layoutOptions.map(({ label, glyph, text }) => (
            <li key={glyph} className={styles.tile}>
              <span className={styles.glyph}>
                <LayoutGlyph name={glyph} />
              </span>
              <h3 className={styles.label}>{label}</h3>
              <p className={styles.desc}>{text}</p>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ToolbarsLayout;
