// app/google-docs-to-word-migration/(components)/GoogleMigrationIntro.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/googleMigrationIntro.module.scss";

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
        <div className={styles.content}>
          <p className={styles.eyebrow}>Looking for more features?</p>
          <h1 className={styles.heading}>
            Migrate to Word to{" "}
            <span className={styles.accent}>future-proof your business</span>
          </h1>
          <p className={styles.text}>
            Is your organisation experiencing the limitations of Google Docs?
            While Google’s collaborative platform works well for basic document
            creation, many enterprises, government agencies and professional
            services firms quickly discover that it lacks the advanced
            formatting, customisation and scalability essential for complex
            business operations.
          </p>
          <p className={styles.text}>
            Word Experts specialises in comprehensive Google Docs to Word
            migration services, helping organisations unlock the full potential
            of Microsoft Word’s enterprise capabilities. Our expert team handles
            everything from document format conversion to{" "}
            <Link
              href="/services/microsoft-word/word-document-template-creation"
              className={styles.link}
            >
              custom template development
            </Link>
            , ensuring your transition is smooth, secure and tailored to your
            specific business requirements.
          </p>
        </div>

        <div className={styles.visual}>
          <DocsToWordSvg />
        </div>
      </div>

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
    </div>
  </section>
);

export default GoogleMigrationIntro;
