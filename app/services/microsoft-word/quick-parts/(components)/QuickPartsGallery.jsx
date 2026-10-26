// /services/microsoft-word/quick-parts/(components)/QuickPartsGallery.jsx

// Client-side scroll animation wrapper shared across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/quickPartsGallery.module.scss";

// One line icon per type of building block
import { CoverPageIcon } from "../(svgs)/CoverPageIcon";
import { SectionBreakIcon } from "../(svgs)/SectionBreakIcon";
import { TableIcon } from "../(svgs)/TableIcon";
import { ClauseIcon } from "../(svgs)/ClauseIcon";
import { SignatureIcon } from "../(svgs)/SignatureIcon";
import { ImageLayoutIcon } from "../(svgs)/ImageLayoutIcon";

const blocks = [
  {
    id: "cover-pages",
    Icon: CoverPageIcon,
    name: "Cover pages",
    description:
      "Branded covers for proposals, reports and submissions, with the title, client and date fields ready to fill in.",
  },
  {
    id: "section-breaks",
    Icon: SectionBreakIcon,
    name: "Chapter and section breaks",
    description:
      "Divider pages and section starts that carry the right headers, footers, page numbering and orientation with them.",
  },
  {
    id: "standard-clauses",
    Icon: ClauseIcon,
    name: "Standard clauses and terms",
    description:
      "Terms and conditions, disclaimers, privacy statements and legal wording, inserted exactly as approved so nobody edits an old copy.",
    // Highest-value block type, shown on the accent background
    featured: true,
  },
  {
    id: "tables",
    Icon: TableIcon,
    name: "Pre-built tables",
    description:
      "Pricing, fee schedules, risk registers and timelines, formatted with your table styles and ready for data.",
  },
  {
    id: "signature-blocks",
    Icon: SignatureIcon,
    name: "Signature and contact blocks",
    description:
      "Sign-off blocks, approval panels and office contact details, kept current in one place instead of fifty documents.",
  },
  {
    id: "layouts",
    Icon: ImageLayoutIcon,
    name: "Image layouts and appendices",
    description:
      "Image and caption pages, case study panels and appendix structures that keep complex layouts from falling apart.",
  },
];

const QuickPartsGallery = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>What goes in a gallery</p>
        <h2 className={styles.heading}>
          The content your team{" "}
          <span className={styles.accent}>keeps rebuilding.</span>
        </h2>
        <p className={styles.intro}>
          A Quick Parts gallery can hold anything from a single sentence to a
          multi-page layout. These are the building blocks we create most often.
        </p>
      </div>
    </AnimateOnScroll>

    <ul className={styles.grid}>
      {blocks.map((block) => (
        <li
          key={block.id}
          className={`${styles.card} ${block.featured ? styles.cardFeatured : ""}`}
        >
          <span className={styles.icon}>
            <block.Icon />
          </span>
          <h3 className={styles.cardName}>{block.name}</h3>
          <p className={styles.cardDesc}>{block.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default QuickPartsGallery;
