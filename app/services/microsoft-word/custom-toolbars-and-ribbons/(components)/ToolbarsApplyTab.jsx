// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsApplyTab.jsx
import Image from "next/image";

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/toolbarsApplyTab.module.scss";

// Screenshot of the custom Apply tab. Static imports give Next.js the image size,
// so the layout does not shift while it loads.
import applyTab from "@/public/formatTab3.webp";

// The four groups on the tab, in the same left-to-right order as the screenshot.
// Group names match the captions under the ribbon in the image.
const groups = [
  {
    name: "Lists for Paragraphs",
    text: "Apply bullets and numbered lists from your approved list styles, and pick a list back up after a break in the text.",
  },
  {
    name: "Lists for Tables",
    text: "Separate list controls for table cells, including the option to continue numbering from one table to the next.",
  },
  {
    name: "Clean Ups",
    text: "Clear formatting, repair multilevel lists, reset table numbering and tidy up styles in a single click.",
  },
  {
    name: "Styles",
    text: "The approved style gallery, with numbered headings built in, so staff choose from your styles rather than inventing their own.",
  },
];

const ToolbarsApplyTab = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Inside the ribbon</p>
          <h2 className={styles.heading}>
            A closer look at the <span className={styles.accent}>Apply tab</span>
          </h2>
          <p className={styles.text}>
            Every button on a custom tab is there for a reason. Here is what
            each group does for the people using your templates every day.
          </p>
        </header>
      </AnimateOnScroll>

      {/* ── Screenshot: scrolls sideways on narrow screens so the buttons stay readable ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.shot}>
          <Image
            src={applyTab}
            alt="The custom Apply tab in Word, showing list, clean up and style controls"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className={styles.image}
          />
        </div>
      </AnimateOnScroll>

      {/* ── What each group does ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
        <ul className={styles.groups}>
          {groups.map(({ name, text }) => (
            <li key={name} className={styles.group}>
              <h3 className={styles.groupName}>{name}</h3>
              <p className={styles.groupText}>{text}</p>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ToolbarsApplyTab;
