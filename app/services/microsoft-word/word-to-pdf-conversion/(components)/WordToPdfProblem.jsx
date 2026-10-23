// app/word-to-pdf-conversion/(components)/WordToPdfProblem.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/wordToPdfProblem.module.css";

const painPoints = [
  {
    id: "static-only",
    number: "01",
    name: "Flat PDFs when you actually needed a form",
    description:
      "A straight Word to PDF export gives you a static document. To get an interactive, fillable PDF, a plain conversion was never going to cut it. That takes a proper conversion built in Adobe Acrobat.",
  },
  {
    id: "template-drift",
    number: "02",
    name: "The same template, a different result each time",
    description:
      "If your Word template was never built with PDF export in mind, every conversion is a bit of a gamble. Rebuilding the template properly once removes the guesswork from every conversion after it.",
  },
  {
    id: "broken-tables",
    number: "03",
    name: "Tables and columns that fall apart",
    description:
      "Multi-column layouts, merged cells, and nested tables are where most free converters fail first. Rows shift, borders vanish, and a document that looked fine in Word arrives as a complete mess in your PDF.",
  },
  {
    id: "font-substitution",
    number: "04",
    name: "Fonts swapped for a default",
    description:
      "A branded document set in your corporate typeface can come out in a generic system font instead. This can easily go undetected until a client or regulator opens the file and it looks nothing like your other materials.",
  },
  {
    id: "privacy-risk",
    number: "05",
    name: "Confidential files uploaded to unknown servers",
    description:
      "Free online converters require uploading your document to a third-party server, often with vague terms about how long the file is kept or who can access it. For contracts, HR records, or financial documents, that is a real risk, not a hypothetical one.",
  },
];

const WordToPdfProblem = () => (
  <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Recognise any of these?</p>
        <h2 className={styles.heading}>
          Where free converters{" "}
          <span className={styles.headingMuted}>let businesses down.</span>
        </h2>
        <p className={styles.intro}>
          Five ways a Word to PDF conversion quietly goes wrong, and the point
          at which each one stops being a minor annoyance and starts costing you
          time or credibility.
        </p>
      </div>
    </AnimateOnScroll>

    <div className={styles.rows} role="list">
      {painPoints.map((point, i) => (
        <AnimateOnScroll
          key={point.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.row} role="listitem">
            <div className={styles.rowLeft}>
              <span className={styles.rowNum} aria-hidden="true">
                {point.number}
              </span>
              <h3 className={styles.rowName}>{point.name}</h3>
            </div>
            <p className={styles.rowDesc}>{point.description}</p>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default WordToPdfProblem;
