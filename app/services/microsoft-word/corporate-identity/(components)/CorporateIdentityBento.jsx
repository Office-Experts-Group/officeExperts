// /services/microsoft-word/corporate-identity/(components)/CorporateIdentityBento.jsx

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/corporateIdentityBento.module.scss";

import {
  BrandedTableSvg,
  ContentControlsSvg,
  FooterMarkingsSvg,
  HeaderLockupSvg,
  HeadingStylesSvg,
} from "../(svgs)/CorporateIdentityBentoSvgs";

// Each entry corresponds to a numbered marker drawn directly onto the
// document in BrandedDocumentSvg (used in CorporateIdentityHero) — the
// numbers must stay in sync between the two files if either is reordered.
//
// Tile sizes/positions are set in the SCSS module via :nth-child, so the
// order here is also the order of the grid.
const tiles = [
  {
    number: "1",
    tone: "toneAccent",
    title: "Header & logo lockup",
    body: "Your logo, colours and letterhead layout are built into the template itself, not re-created by hand each time. Every document leaves your business with the same header, in the same place, at the same size.",
    Illustration: HeaderLockupSvg,
  },
  {
    number: "2",
    tone: "toneLight",
    title: "Heading styles",
    body: "Titles, subheadings and body text are set using Word's Styles system rather than manual bold and font-size changes, so a report always reads the same way whether it was written by a director or a new starter.",
    Illustration: HeadingStylesSvg,
  },
  {
    number: "3",
    tone: "toneTint",
    title: "Locked content controls",
    body: "Fields such as client name, date or reference number are built as content controls. Staff fill them in through a guided prompt, and the surrounding formatting can't be accidentally overtyped or deleted.",
    Illustration: ContentControlsSvg,
  },
  {
    number: "4",
    tone: "toneAccent",
    title: "Branded tables & data blocks",
    body: "Pricing tables, schedules and summaries follow a locked column structure and colour treatment, so a quote from one department looks identical to a quote from another.",
    Illustration: BrandedTableSvg,
  },
  {
    number: "5",
    tone: "toneDark",
    wide: true,
    title: "Footer, pagination & markings",
    body: "Page numbering, confidentiality notices and version footers are automated, removing one of the most commonly forgotten yet most visible details.",
    Illustration: FooterMarkingsSvg,
  },
];

const CorporateIdentityBento = () => {
  return (
    <section className={styles.section} id="anatomy">
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Anatomy of a branded document</span>
          <h2 className={styles.heading}>
            Five places your brand is{" "}
            <span className={styles.accent}>built in.</span>
          </h2>
          <p className={styles.intro}>
            Each numbered marker on the document above maps to a tile below.
            Together they remove the manual formatting that causes off-brand
            documents in the first place.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Grid placement is applied to the direct children (.grid > *), so it
          works whether AnimateOnScroll renders a wrapper element or not. */}
      <div className={styles.grid}>
        {tiles.map(({ number, tone, wide, title, body, Illustration }, i) => (
          <AnimateOnScroll
            key={number}
            animation="fade-up"
            duration={0.5}
            delay={i * 0.08}
          >
            <article
              className={`${styles.tile} ${styles[tone]} ${
                wide ? styles.wide : ""
              }`}
            >
              <div className={styles.copy}>
                <span className={styles.badge} aria-hidden="true">
                  {number}
                </span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.body}>{body}</p>
              </div>
              <div className={styles.illustration}>
                <Illustration />
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default CorporateIdentityBento;
