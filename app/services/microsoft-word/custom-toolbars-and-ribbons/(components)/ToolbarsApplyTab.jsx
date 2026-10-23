// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsApplyTab.jsx
import Image from "next/image";

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/toolbarsApplyTab.module.scss";

// Screenshots of the two custom tabs. Static imports give Next.js the image size,
// so the layout does not shift while they load.
import applyTab from "@/public/formatTab3.webp";
import buildTab from "@/public/formatTab2.webp";

// One entry per slide. Group names match the captions printed under each ribbon
// in the screenshots, in the same left-to-right order.
const tabs = [
  {
    id: "apply",
    name: "Apply tab",
    text: "Every button on a custom tab is there for a reason. Here is what each group does for the people using your templates every day.",
    image: applyTab,
    alt: "Office Experts custom Apply tab in Word, showing list, clean up and style controls",
    groups: [
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
    ],
  },
  {
    id: "build",
    name: "Build tab",
    text: "Our Build tab holds the specialised functions used to create or modify a template, giving the people who maintain your templates one dedicated place to work.",
    image: buildTab,
    alt: "Office Experts custom Build tab in Word, showing document, page, insert, chart and column controls",
    groups: [
      {
        name: "Document",
        text: "Update all fields refreshes cross-references, page numbers, the contents list and every other field in one click.",
      },
      {
        name: "Pages",
        text: "Add or remove landscape A4 pages, insert A3 pages and change A3 back to A4 without upsetting headers, margins or numbering.",
      },
      {
        name: "Insert",
        text: "Cover pages, preset content, image placeholders and a table of contents, ready-formatted and dropped in from one place.",
      },
      {
        name: "Charts and Columns",
        text: "Charts in your brand colours and fonts, plus text in columns, set up without fiddly manual formatting.",
      },
    ],
  },
];

// Renders one slide. `isClone` marks the duplicate Apply slide that sits at the far
// end of the track. It only exists to make the loop seamless, so it is hidden from
// screen readers and crawlers (aria-hidden and inert) to avoid the Apply tab
// content being read or indexed twice.
const Slide = ({ tab, isClone = false }) => (
  <div
    className={`${styles.slide} ${isClone ? styles.clone : ""}`}
    aria-hidden={isClone || undefined}
    inert={isClone || undefined}
  >
    <div className={styles.inner}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>Inside the ribbon</p>
        <h2 className={styles.heading}>
          A closer look at our <span className={styles.accent}>{tab.name}</span>
        </h2>
        <p className={styles.text}>{tab.text}</p>
      </header>

      {/* ── Screenshot: scrolls sideways on narrow screens so the buttons stay readable ── */}
      <div className={styles.shot}>
        <Image
          src={tab.image}
          alt={isClone ? "" : tab.alt}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className={styles.image}
          // Slides wait off-screen, so load them up front rather than lazily
          loading="eager"
        />
      </div>

      {/* ── What each group does ── */}
      <ul className={styles.groups}>
        {tab.groups.map(({ name, text }) => (
          <li key={name} className={styles.group}>
            <h3 className={styles.groupName}>{name}</h3>
            <p className={styles.groupText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ToolbarsApplyTab = () => (
  <AnimateOnScroll animation="fade-up" duration={0.6}>
    <section className={styles.section}>
      {/* The track is three slides wide and is moved sideways by CSS alone.
          row-reverse keeps the DOM order as Apply, Build, clone, while the clone
          sits visually on the left so the slides travel off to the right. */}
      <div className={styles.track}>
        <Slide tab={tabs[0]} />
        <Slide tab={tabs[1]} />
        <Slide tab={tabs[0]} isClone />
      </div>

      {/* Decorative progress bars, kept in step with the slides by the same timer */}
      <div className={styles.indicators} aria-hidden="true">
        <span className={`${styles.indicator} ${styles.indicatorApply}`}>
          {tabs[0].name}
        </span>
        <span className={`${styles.indicator} ${styles.indicatorBuild}`}>
          {tabs[1].name}
        </span>
      </div>
    </section>
  </AnimateOnScroll>
);

export default ToolbarsApplyTab;
