// app/fill-in-forms/(components)/FormDataJourney.jsx

import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/formDataJourney.module.css";

// Three-stage journey: the form itself, the extraction step, and where the
// data ends up. Answers "does the data from my form go anywhere" style
// long-tail questions.
const stages = [
  {
    id: "capture",
    tag: "Stage 1",
    title: "Someone fills in the form",
    body: "Staff or clients complete the content controls in Word, either on screen or via a locked template shared by email or SharePoint. Validation and drop-downs keep every answer in a consistent format from the outset.",
  },
  {
    id: "extract",
    tag: "Stage 2",
    title: "VBA reads the answers out",
    body: "A macro steps through every content control in the document, reading each answer by its tag name rather than its position, so the form can be reordered later without breaking the extraction.",
  },
  {
    id: "destination",
    tag: "Stage 3",
    title: "Data lands where you need it",
    body: "The extracted answers are written to an Excel tracking sheet, appended to an Access database, or emailed as a structured summary, ready for reporting without anyone retyping a single field.",
  },
];

// A single hand-drawn connector SVG spans the full width beneath the stage
// cards, giving the "path" a visual presence rather than relying on plain
// arrows between boxes.
const PathConnector = () => (
  <svg
    className={styles.connectorSvg}
    viewBox="0 0 1000 80"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M20 40 C 200 -10, 300 90, 500 40 S 800 -10, 980 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="1 12"
      strokeLinecap="round"
    />
    <circle cx="20" cy="40" r="5" fill="currentColor" />
    <circle cx="500" cy="40" r="5" fill="currentColor" />
    <circle cx="980" cy="40" r="5" fill="currentColor" />
  </svg>
);

const FormDataJourney = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <span className={styles.eyebrow}>Beyond the Document</span>
          <h2 className={styles.heading}>
            Does the data from a fill-in form{" "}
            <span className={styles.accent}>go anywhere?</span>
          </h2>
          <p className={styles.intro}>
            The information entered into a Word form doesn't have to stay in the
            document. Content controls can capture structured data that can be
            extracted, checked and used elsewhere in your business. Invaluable
            to businesses using other microsoft technologies.
          </p>
        </AnimateOnScroll>
      </div>

      <div className={styles.path}>
        <div className={styles.connector}>
          <PathConnector />
        </div>

        <div className={styles.stages}>
          {stages.map((stage, i) => (
            <AnimateOnScroll
              key={stage.id}
              animation="fade-up"
              duration={0.55}
              delay={i * 0.12}
            >
              <div className={`${styles.stage} ${styles.stageHigh}`}>
                <span className={styles.stageTag}>{stage.tag}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageBody}>{stage.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <p className={styles.footNote}>
        Need the data somewhere more powerful than a spreadsheet? Our{" "}
        <Link href="https://www.accessexperts.com.au">Access database</Link> and{" "}
        <Link href="https://www.powerplatformexperts.com.au">
          Power Platform
        </Link>{" "}
        specialists can connect your Word form directly to the business systems
        you already use.
      </p>
    </section>
  );
};

export default FormDataJourney;
