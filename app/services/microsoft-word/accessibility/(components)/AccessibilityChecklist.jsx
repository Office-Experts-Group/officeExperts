// app/accessibility/(components)/AccessibilityChecklist.jsx

import TaggedStructureSVG from "../(svgs)/TaggedStructureSVG";
import styles from "../../../styles/accessibilityChecklist.module.css";

// Each of these is an independent document element we check and remediate —
// not a process, so rendered as a checklist rather than numbered steps.
// Each description now ends with its own lead-in specific to that element,
// so the dot points read as a continuation of that sentence rather than
// disjointed fragments — deliberately varied rather than a repeated phrase.
const elements = [
  {
    id: "headings",
    heading: "Heading Structure",
    tag: "H1–H6 · Navigation",
    description:
      "Headings are tagged in their correct hierarchy rather than just styled to look bold or bigger. This lets screen reader users jump between sections using their navigation shortcuts, we do this by ensuring...",
    capabilities: [
      "Always just one single, correctly tagged H1 per document",
      "No skipped heading levels (H2 straight to H4)",
      "Consistent heading styles applied via the template, not with manual formatting",
    ],
  },
  {
    id: "alt-text",
    heading: "Alternative Text",
    tag: "Images · Charts · Icons",
    description:
      "Every image, chart, and icon must have meaningful alternative text, or be correctly marked as decorative so it's skipped completely, avoiding confusion for screen reader users. In practice, this means we implement...",
    capabilities: [
      "Descriptive alt text written for meaningful images and charts",
      "Decorative graphics tagged to be ignored by screen readers",
      "Complex charts paired with a text summary or data table",
    ],
  },
  {
    id: "tables",
    heading: "Accessible Tables",
    tag: "Header rows · Scope",
    description:
      "Tables are built with proper header rows and column scope, so a screen reader can announce which header a given cell belongs to, rather than reading a wall of confusing, seemingly unrelated numbers. Compliant and accessible tables we create have...",
    capabilities: [
      "Header rows tagged and repeated across page breaks",
      "Row and column scope set for complex or merged tables",
      "Simple layouts used in place of nested or merged-cell tables where possible",
    ],
  },
  {
    id: "reading-order",
    heading: "Reading Order",
    tag: "Text boxes · Columns",
    description:
      "Text boxes, columns, and floating objects are checked against the document's underlying reading order, which can silently break when content is dragged into place visually. Our checks cover...",
    capabilities: [
      "Reading order validated with the built-in accessibility checker",
      "Text boxes replaced with in-line structured content where practical",
      "Multi-column layouts tagged to read top-to-bottom, then across",
    ],
  },
  {
    id: "forms",
    heading: "Forms & Interactive Fields",
    tag: "Labels · Tab order",
    description:
      "Form fields, content controls, and fillable sections carry clear labels and a logical tab order, so users navigating by keyboard or screen reader can complete a document without assistance. That involves us making sure...",
    capabilities: [
      "Every field given a descriptive, programmatically linked label",
      "Tab order matching the visual layout of the form",
      "Instructions provided in text rather than colour or placement alone",
    ],
  },
];

const AccessibilityChecklist = () => {
  return (
    <section className={styles.section} id="checklist">
      <div className={styles.inner}>
        {/* Left: sticky intro + tagged structure illustration */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Check</span>
          <h2 className={styles.heading}>Five issues we often find.</h2>
          <p className={styles.intro}>
            Most inaccessible Word documents we work on hide their underlying
            issues without thorough testing by a professional. We work through
            each of the following elements methodically on every template we
            build or remediate.
          </p>
          <div className={styles.svgWrap}>
            <TaggedStructureSVG />
          </div>
        </div>

        {/* Right: element list */}
        <div className={styles.elementsList}>
          {elements.map((el) => (
            <article key={el.id} className={styles.element} id={el.id}>
              <div className={styles.elementTop}>
                <h3 className={styles.elementHeading}>{el.heading}</h3>
                <span className={styles.elementTag}>{el.tag}</span>
              </div>
              <p className={styles.elementDescription}>{el.description}</p>
              <ul className={styles.capabilities}>
                {el.capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessibilityChecklist;
