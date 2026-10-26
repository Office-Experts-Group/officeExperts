// /services/microsoft-word/document-automation/(components)/AutomationIntegration.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";
// Route-level illustration of a connected document system
import IconDocumentSystem from "../(svgs)/IconDocumentSystem";
import styles from "@/styles/automationIntegration.module.scss";

const documentElements = [
  "Cover pages & title pages",
  "Image layout pages",
  "Chapter & section break pages",
  "Pre-built branded tables",
  "Landscape & A3 pages",
  "Multi-column sections",
  "Appendix sections",
  "Terms & conditions sections",
  "Dynamic header & footer content",
  "Auto-populating content fields",
  "Table of contents generation",
  "Automated numbering & cross-references",
];

// Simple tick mark reused for every checklist row
const Tick = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10l4.5 4.5L16 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AutomationIntegration = () => (
  <section className={styles.wrapper}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Simple Integration</p>
          <h2 className={styles.heading}>
            Every Document Element,{" "}
            <span className={styles.accent}>Automated</span>
          </h2>
          <p className={styles.body}>
            Our Word automation solutions handle the full range of document
            components your team works with day to day. We build it once, test
            it thoroughly and roll it out across your business so every document
            is consistent and effortless to produce.
          </p>

          <ul
            className={styles.checklist}
            aria-label="Automated document elements"
          >
            {documentElements.map((item) => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.tick} aria-hidden="true">
                  <Tick />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
        <div className={styles.svgWrap}>
          <IconDocumentSystem className={styles.illustration} />
          <div className={styles.statPill}>
            <strong>Since 2000</strong>
            <span>automating Microsoft Word for Australian teams</span>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AutomationIntegration;
