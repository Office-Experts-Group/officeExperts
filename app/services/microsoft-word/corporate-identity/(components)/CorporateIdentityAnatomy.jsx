// app/corporate-identity/(components)/CorporateIdentityAnatomy.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/corporateIdentityAnatomy.module.css";

import { BrandedDocumentSvg } from "../(svgs)/BrandedDocumentSvg";

// Each entry corresponds to a numbered marker drawn directly onto the
// document in BrandedDocumentSvg — the numbers must stay in sync between
// the two files if either is reordered.
const zones = [
  {
    number: "1",
    title: "Header & logo lockup",
    body: "Your logo, colours and letterhead layout are built into the template itself, not re-created by hand each time. Every document leaves your business with the same header, in the same place, at the same size.",
  },
  {
    number: "2",
    title: "Heading styles",
    body: "Titles, subheadings and body text are set using Word's Styles system rather than manual bold and font-size changes, so a report always reads the same way whether it was written by a director or a new starter.",
  },
  {
    number: "3",
    title: "Locked content controls",
    body: "Fields such as client name, date or reference number are built as content controls. Staff fill them in through a guided prompt, and the surrounding formatting can't be accidentally overtyped or deleted.",
  },
  {
    number: "4",
    title: "Branded tables & data blocks",
    body: "Pricing tables, schedules and summaries follow a locked column structure and colour treatment, so a quote from one department looks identical to a quote from another.",
  },
  {
    number: "5",
    title: "Footer, pagination & markings",
    body: "Page numbering, confidentiality notices and version footers are automated, removing one of the most commonly forgotten yet most visible.",
  },
];

const CorporateIdentityAnatomy = () => {
  return (
    <section className={styles.section} id="anatomy">
      {/* ── Heading row ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Maintain Professionalism</span>
          <h2 className={styles.heading}>
            Consistent brand recognition, with{" "}
            <span className={styles.accent}>every document.</span>
          </h2>
          <p className={styles.intro}>
            A strong corporate identity extends beyond your website and
            marketing materials. We build your brand into Microsoft Word
            documents, from typography and colour schemes to logos, headings and
            page layouts, giving your team a consistent visual standard across
            the documents they create every day.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Diagram + numbered explanation, side by side ── */}
      <div className={styles.diagramRow}>
        <AnimateOnScroll animation="scale-up" duration={0.7}>
          <div className={styles.diagramWrap}>
            <BrandedDocumentSvg />
          </div>
        </AnimateOnScroll>

        <div className={styles.zoneList}>
          {zones.map((zone, i) => (
            <AnimateOnScroll
              key={zone.number}
              animation="fade-up"
              duration={0.5}
              delay={i * 0.08}
            >
              <div className={styles.zone}>
                <span className={styles.zoneNumber} aria-hidden="true">
                  {zone.number}
                </span>
                <div>
                  <h3 className={styles.zoneTitle}>{zone.title}</h3>
                  <p className={styles.zoneBody}>{zone.body}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateIdentityAnatomy;
