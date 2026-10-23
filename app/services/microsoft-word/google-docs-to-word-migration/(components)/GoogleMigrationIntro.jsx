// app/google-docs-to-word-migration/(components)/GoogleMigrationIntro.jsx
import React from "react";
import Link from "next/link";

// Shared site component: fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Styles for this component (styles/googleMigrationIntro.module.scss)
import styles from "@/styles/googleMigrationIntro.module.scss";

// Decorative illustration: a basic page becoming a fully structured Word document
import { DocsToWordSvg } from "../(svgs)/DocsToWordSvg";

// Common reasons an organisation outgrows Google Docs
const signs = [
  {
    title: "Long documents slow down",
    text: "Reports, tenders and policy manuals past 100 pages become sluggish to open, scroll and edit.",
  },
  {
    title: "Brand rules keep slipping",
    text: "Without locked styles and templates, every author formats headings, fonts and numbering their own way.",
  },
  {
    title: "Layouts outgrow the page",
    text: "Landscape sections, columns, complex tables and precise image placement are awkward or out of reach.",
  },
  {
    title: "Compliance needs more control",
    text: "Regulated teams need document protection, audit trails and approval paths that go beyond what Google Docs offers.",
  },
];

const GoogleMigrationIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Looking for more features?</p>
            <h2 className={styles.heading}>
              Migrate to Word to{" "}
              <span className={styles.accent}>future-proof your business</span>
            </h2>
            <p className={styles.text}>
              Is your organisation experiencing the limitations of Google Docs?
              While Google’s collaborative platform works well for basic
              document creation, many enterprises, government agencies and
              professional services firms quickly discover that it lacks the
              advanced formatting, customisation and scalability essential for
              complex business operations.
            </p>
            <p className={styles.text}>
              Word Experts specialises in comprehensive Google Docs to Word
              migration services, helping organisations unlock the full
              potential of Microsoft Word’s enterprise capabilities. Our expert
              team handles everything from document format conversion to{" "}
              <Link
                href="/word-document-template-creation"
                className={styles.link}
              >
                custom template development
              </Link>
              , ensuring your transition is smooth, secure and tailored to your
              specific business requirements.
            </p>
            <p className={styles.text}>
              Migration is more than moving files. A document that looks right
              in Google Docs can fall apart when it is simply opened in Word:
              styles collapse, numbering restarts and tables shift. We rebuild
              the structure underneath through{" "}
              <Link href="/word-template-conversions" className={styles.link}>
                professional template conversion
              </Link>
              , so your content arrives clean and your brand rules arrive with
              it.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={0.6} delay={0.1}>
          <div className={styles.visual}>
            <DocsToWordSvg />
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.signsWrap}>
          <p className={styles.signsLabel}>Signs it’s time to move</p>
          <ul className={styles.signs}>
            {signs.map((s) => (
              <li key={s.title} className={styles.sign}>
                <h3 className={styles.signTitle}>{s.title}</h3>
                <p className={styles.signText}>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoogleMigrationIntro;
