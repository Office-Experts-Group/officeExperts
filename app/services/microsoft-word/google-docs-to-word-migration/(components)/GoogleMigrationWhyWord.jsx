// app/google-docs-to-word-migration/(components)/GoogleMigrationWhyWord.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/googleMigrationWhyWord.module.scss";

import { PageLayoutSvg } from "../(svgs)/PageLayoutSvg";
import { CustomRibbonSvg } from "../(svgs)/CustomRibbonSvg";
import { ScaleSvg } from "../(svgs)/ScaleSvg";
import { ShieldSvg } from "../(svgs)/ShieldSvg";

// tone: "brand" (accent backdrop) or "dark" (dark backdrop)
// size: "wide" or "narrow" (7 or 5 of 12 grid columns on desktop)
const cards = [
  {
    id: "control",
    label: "Document control",
    title: "Advanced document control",
    tone: "brand",
    size: "wide",
    Art: PageLayoutSvg,
    body: "Microsoft Word provides sophisticated layout controls, master document capabilities and professional publishing features that maintain document integrity across large, complex files. Margins, columns, headers and numbering are driven by styles and sections instead of manual fixes, so page 300 behaves exactly like page 3.",
    facts: [
      {
        term: "Section control",
        detail:
          "Different headers, footers, orientations and page numbering within a single file.",
      },
      {
        term: "Style-driven layout",
        detail:
          "Change a style once and every heading, caption and table updates throughout the document.",
      },
      {
        term: "Live cross-references",
        detail:
          "Tables of contents, figure captions and references that refresh with one click.",
      },
    ],
  },
  {
    id: "customisation",
    label: "Customisation",
    title: "Enterprise customisation",
    tone: "dark",
    size: "narrow",
    Art: CustomRibbonSvg,
    body: (
      <>
        Our programmers{" "}
        <Link href="/custom-toolbars-and-ribbons" className={styles.link}>
          create custom ribbons and toolbars
        </Link>{" "}
        and{" "}
        <Link
          href="/corporate-global-template-solution"
          className={styles.link}
        >
          custom automated templates
        </Link>{" "}
        that streamline your team’s workflow, from legal document automation to
        government compliance templates.
      </>
    ),
    facts: [
      {
        term: "Custom ribbon tabs",
        detail:
          "One-click buttons for your approved styles, clauses and processes.",
      },
      {
        term: "Automated templates",
        detail: (
          <>
            Fields, content controls and{" "}
            <Link href="/quick-parts" className={styles.link}>
              Quick Parts
            </Link>{" "}
            fill in repeat content for you.
          </>
        ),
      },
      {
        term: "Document automation",
        detail: (
          <>
            Generate contracts and reports from your data, or connect through{" "}
            <Link
              href="/microsoft-word-api-integrations"
              className={styles.link}
            >
              Word API integrations
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: "scale",
    label: "Scalability",
    title: "Scalability for large documents",
    tone: "dark",
    size: "narrow",
    Art: ScaleSvg,
    body: "While Google Docs struggles with documents over 100 pages and shows performance issues with multiple simultaneous users, Microsoft Word handles enterprise-scale documents with ease. The desktop application does the heavy lifting, so long documents stay responsive.",
    facts: [
      {
        term: "Long-form ready",
        detail:
          "Tables of contents, indexes and tables of authorities across hundreds of pages.",
      },
      {
        term: "Reliable co-authoring",
        detail:
          "Several authors at once, with tracked changes, comments and version history.",
      },
      {
        term: "Desktop-grade speed",
        detail:
          "Full performance in the desktop app, without relying on browser memory.",
      },
    ],
  },
  {
    id: "security",
    label: "Security and compliance",
    title: "Security and compliance",
    tone: "brand",
    size: "wide",
    Art: ShieldSvg,
    body: (
      <>
        For{" "}
        <Link href="/government-departments" className={styles.link}>
          government departments
        </Link>{" "}
        and regulated industries, Word provides advanced security features,
        detailed audit trails and compliance tools that meet the strictest
        requirements, with the controls applied inside the document itself.
      </>
    ),
    facts: [
      {
        term: "Sensitivity labels",
        detail:
          "Microsoft Purview labels and protective markings applied directly in the document.",
      },
      {
        term: "Document protection",
        detail:
          "Restrict editing to forms, comments or tracked changes, with password or permission-based control.",
      },
      {
        term: "Audit and retention",
        detail:
          "Version history and tracked changes, backed by SharePoint retention policies, give you a defensible record.",
      },
    ],
  },
];

const GoogleMigrationWhyWord = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Word</p>
          <h2 className={styles.heading}>
            Why organisations choose{" "}
            <span className={styles.accent}>Word over Google Docs</span>
          </h2>
          <p className={styles.lead}>
            <strong>
              Microsoft Word remains the enterprise standard for professional
              document creation
            </strong>
            , offering advanced capabilities that Google Docs simply cannot
            match. Here is what that looks like in practice.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.bento}>
          {cards.map(({ id, label, title, tone, size, Art, body, facts }) => (
            <article
              key={id}
              className={`${styles.card} ${styles[tone]} ${styles[size]}`}
            >
              <div className={styles.art}>
                <Art />
              </div>
              <p className={styles.label}>{label}</p>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.body}>{body}</p>

              <dl className={styles.facts}>
                {facts.map((f) => (
                  <div key={f.term} className={styles.fact}>
                    <dt className={styles.term}>{f.term}</dt>
                    <dd className={styles.detail}>{f.detail}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <p className={styles.closing}>
          By choosing Microsoft Word with our custom enterprise solutions,
          organisations gain the document control, security and scalability
          needed for professional operations, while keeping the flexibility to
          customise workflows for their specific industry requirements.
        </p>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoogleMigrationWhyWord;
