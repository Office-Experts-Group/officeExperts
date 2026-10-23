// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsAutomation.jsx

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Group icons (the name matches a key in AutomationGlyphs.js) and the list tick
import { AutomationGlyph } from "../(svgs)/AutomationGlyphs";
import { TickIcon } from "../(svgs)/TickIcon";

import styles from "@/styles/toolbarsAutomation.module.scss";

// The automation features, grouped by what they do so the list is easy to scan.
// The id of each group is also the name of its icon in AutomationGlyphs.js.
const groups = [
  {
    id: "pages",
    title: "Pages and sections",
    items: [
      {
        title: "Header and footer automation",
        text: "Document titles, reference numbers, dates and confidentiality labels flow into headers and footers automatically.",
      },
      {
        title: "Insert and remove landscape pages",
        text: "Add a landscape page for a wide table or chart without upsetting page numbers, headers or margins, then switch back just as easily.",
      },
      {
        title: "Insert and remove A3 pages",
        text: "Drop in an A3 page for large drawings or schedules and return to A4 without disturbing the rest of the document.",
      },
      {
        title: "Insert and remove multiple column sections",
        text: "Switch part of a page to columns and back again, with section breaks and spacing handled for you.",
      },
    ],
  },
  {
    id: "cleanup",
    title: "Clean up",
    items: [
      {
        title: "Styles and multilevel list clean up",
        text: "One click removes stray direct formatting and repairs broken lists, returning content to your approved styles.",
      },
      {
        title: "Remove instructional text",
        text: "Strip out the guidance text and placeholders that come with a template before a document is finalised.",
      },
      {
        title: "Remove heading numbers",
        text: "Turn numbering off for headings that should not carry it, such as a preface, without breaking the numbering around it.",
      },
    ],
  },
  {
    id: "tables",
    title: "Tables and numbering",
    items: [
      {
        title: "Table lists and numbering reset",
        text: "Insert lists of tables and keep their numbering in sequence, resetting it cleanly wherever a new section begins.",
      },
      {
        title: "Insert and format tables",
        text: "Insert an approved table style, apply a sub header row and add its caption in a single step.",
      },
      {
        title: "Paragraph numbering",
        text: "Apply the correct numbered paragraph level straight from the ribbon, ideal for legal, policy and contract documents.",
      },
    ],
  },
  {
    id: "content",
    title: "Content and colour",
    items: [
      {
        title: "Additional custom colours theme",
        text: "Extra brand colours added to the theme so every palette, chart and shape draws from the approved set.",
      },
      {
        title: "Custom find and replace",
        text: "Saved find and replace routines for the corrections your team makes again and again, run in one click.",
      },
      {
        title: "Search and insert from a data source",
        text: "Look up approved content, such as clauses, client details or product information, from a spreadsheet or database and insert it into the document.",
      },
    ],
  },
];

const ToolbarsAutomation = () => (
  <section className={styles.section}>
    <div className={styles.panel}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <p className={styles.eyebrow}>Automation</p>
            <h2 className={styles.heading}>
              Automation &amp; Smart{" "}
              <span className={styles.accent}>Document Tools</span>
            </h2>
          </div>
          <p className={styles.text}>
            Save time and reduce errors with intelligent automation features
            and content management tools that streamline complex tasks.
          </p>
        </header>
      </AnimateOnScroll>

      {/* ── Feature groups ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.groups}>
          {groups.map(({ id, title, items }) => (
            <article key={id} className={styles.group}>
              <div className={styles.groupHead}>
                <span className={styles.icon}>
                  <AutomationGlyph name={id} />
                </span>
                <h3 className={styles.groupTitle}>{title}</h3>
              </div>
              <ul className={styles.list}>
                {items.map((item) => (
                  <li key={item.title} className={styles.item}>
                    <span className={styles.tick}>
                      <TickIcon />
                    </span>
                    <div className={styles.itemBody}>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.itemText}>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ToolbarsAutomation;
