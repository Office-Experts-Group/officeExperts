// /services/microsoft-word/companies-and-organisations/(components)/CompaniesHeadaches.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { CleanUpSvg } from "../(svgs)/CleanUpSvg";

import styles from "@/styles/companiesHeadaches.module.scss";

// Problems we put an end to, each with a short explanation of the cause and our fix.
// Unordered, so a plain list rather than numbered steps
const fixes = [
  {
    title: "No more unauthorised formatting from user pasted content",
    body: "Text pasted from emails, websites and old documents brings its own fonts, sizes and colours with it. Our templates intercept the paste and apply your approved styles instead, so foreign formatting never makes it into the document.",
  },
  {
    title: "No more user manipulated colours, fonts and font sizes",
    body: "We take the font and font size controls out of the Home tab and give people your approved styles and colour palette in their place. They can still format their work, but they can't step outside the brand.",
  },
  {
    title:
      "No more unauthorised formatting being populated into the content and styles, disturbing headings and list numbering orders",
    body: "Stray formatting is the usual reason headings stop numbering correctly and lists restart halfway down a page. With clean, protected styles underneath, numbering stays in order, and multilevel or legal-style lists work with one click.",
  },
  {
    title: "No more creating tables and graphs with incorrect colour themes",
    body: "New tables pick up your default table style, and the template carries your colour theme, so tables, charts and shapes look on-brand without anyone choosing colours by hand.",
  },
];

// Small tick used as the list marker; drawn in currentColor
const Tick = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const CompaniesHeadaches = () => (
  <section className={styles.section} id="no-more-headaches">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Leave it to us</p>
          <h2 className={styles.heading}>
            No More <span className={styles.headingAccent}>Headaches!</span>
          </h2>
          <p className={styles.lead}>
            We can help you put an end to messy documents that break corporate
            branding.
          </p>
          <p className={styles.body}>
            It rarely starts with carelessness. Staff paste in content from
            emails and old reports, adjust a font to make something fit, or
            build a table from scratch because it&rsquo;s quicker than finding
            the right style. Each shortcut is small, but together they leave you
            with documents that look like they came from different companies,
            and headings that number themselves in unexpected ways.
          </p>
          <p className={styles.body}>
            A style guide that people have to remember won&rsquo;t fix that. We
            build the rules into the template itself, as part of your{" "}
            <Link href="/services/microsoft-word/brand-template">
              Word brand templates
            </Link>
            , so the correct result is also the easiest one.
          </p>
          <div className={styles.art}>
            <CleanUpSvg />
          </div>
        </div>

        {/* Wrapper keeps the list and proof box together as the second grid column */}
        <div>
          <ul className={styles.list}>
            {fixes.map((fix) => (
              <li key={fix.title} className={styles.item}>
                <span className={styles.tick} aria-hidden="true">
                  <Tick />
                </span>
                <div className={styles.itemText}>
                  <h3 className={styles.itemTitle}>{fix.title}</h3>
                  <p className={styles.itemBody}>{fix.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* ── Proof: two real projects, linked ── */}
          <aside className={styles.proof}>
            <p className={styles.proofLabel}>In practice</p>
            <p className={styles.proofText}>
              Staff at one legal firm were editing documents to suit their own
              preferences rather than following the firm&rsquo;s style guide. We{" "}
              <Link href="/case-studies/legal-firm-template-suite-formatting-tab">
                built the style guide into the templates
              </Link>{" "}
              and added a Formatting tab with one-click legal numbering, while
              locking down the controls that caused the drift. For a corporate
              group, the same discipline had to hold across{" "}
              <Link href="/case-studies/corporate-group-multi-entity-master-template-suite">
                four related entities
              </Link>{" "}
              without four separate builds.
            </p>
            <p className={styles.proofText}>
              Already have documents in the old look? Our{" "}
              <Link href="/services/microsoft-word/document-rebranding-services">
                document rebranding services
              </Link>{" "}
              bring them across to the new template.
            </p>
          </aside>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CompaniesHeadaches;
