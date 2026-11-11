// /word-template-conversions/(components)/TemplateHero.jsx
// Above the fold, so this is imported normally (not dynamically) from page.js.
import Link from "next/link";

import { ArrowIcon, ConversionVisual } from "../(svgs)/Icons";
import styles from "@/styles/templateHero.module.scss";

// Source formats shown as chips under the intro
const SOURCES = ["Adobe InDesign", "Illustrator", "PDF", "Word .doc / .docx"];

const TemplateHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Australian-owned · Est. 2000</span>

          <h1 className={styles.heading}>
            Word template conversions,{" "}
            <span className={styles.accentWord}>built the way Word needs.</span>
          </h1>

          <p className={styles.lead}>
            We convert Adobe, InDesign and PDF files into fully functional,
            on-brand Microsoft Word templates, and turn Word documents into
            reliable PDFs and fillable forms. One team, one process, no
            uploading to tools you know nothing about.
          </p>

          <div className={styles.ctas}>
            <Link href="#contact" className="btn">
              Get a free quote
            </Link>
            <Link href="#services" className={styles.secondary}>
              See what we convert
              <ArrowIcon />
            </Link>
          </div>

          <ul className={styles.chips} aria-label="Source formats we convert">
            {SOURCES.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <ConversionVisual />
        </div>
      </div>
    </section>
  );
};

export default TemplateHero;
