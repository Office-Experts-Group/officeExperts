// /services/microsoft-word/document-rebranding-services/(components)/RebrandingIncluded.jsx
import React from "react";
import Link from "next/link";

// Scroll animation wrapper shared across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/rebrandingIncluded.module.scss";

// Accordion icons and the custom ribbon illustration, as standalone SVG components
import {
  TemplateIcon,
  BulkIcon,
  RibbonIcon,
  ChevronIcon,
  RibbonPanelSvg,
} from "../(svgs)/RebrandingIncludedSvgs";

// Accordion content. Each capability has a short title and a one or two sentence explanation.
const services = [
  {
    title: "Template Rebranding & Redesign",
    summary: "Rebuild your templates on the new brand",
    Icon: TemplateIcon,
    capabilities: [
      {
        title: "Rebuilding Word templates with your new brand",
        text: (
          <>
            Existing templates are rebuilt from the ground up on proper styles,
            so the new identity is built in, not painted on. See how we{" "}
            <Link
              href="/services/microsoft-word/word-template-conversions"
              className={styles.link}
            >
              convert Word templates to a new brand
            </Link>
            .
          </>
        ),
      },
      {
        title: "New layouts for reports, letters, tenders and manuals",
        text: "Page layouts designed around the documents you actually produce, with the structure each one needs.",
      },
      {
        title: "Header and footer updates",
        text: "Logos, addresses, page numbering and legal lines updated consistently across every document type.",
      },
    ],
  },
  {
    title: "Bulk Template Conversion",
    summary: "Move existing documents across cleanly",
    Icon: BulkIcon,
    capabilities: [
      {
        title: "Clean formatting and layout updates",
        text: "Existing documents are cleaned up and moved into the new templates without corrupting their content, so nobody has to retype anything.",
      },
      {
        title: "Brand consistency across departments",
        text: "Every team works from the same templates, so a document looks the same no matter who wrote it.",
      },
    ],
  },
  {
    title: "Advanced Word Functionality (Optional)",
    summary: "Keep every user on brand",
    Icon: RibbonIcon,
    capabilities: [
      {
        title: "Custom style sets and themes",
        text: "Your fonts and colours load as Word's own style sets and themes, ready to use from the ribbon.",
      },
      {
        title: "Content controls and placeholders",
        text: "Guided fields for names, dates and repeating details, so staff fill in rather than format.",
      },
      {
        title: "Automated document components",
        text: (
          <>
            <Link
              href="/services/microsoft-word/quick-parts"
              className={styles.link}
            >
              Quick Parts
            </Link>{" "}
            for cover pages, disclaimers and other repeating elements, inserted
            in one click and always on brand.
          </>
        ),
      },
      {
        title: "Custom Formatting and Automation tab",
        text: (
          <>
            A{" "}
            <Link
              href="/services/microsoft-word/custom-toolbars-and-ribbons"
              className={styles.link}
            >
              custom ribbon tab
            </Link>{" "}
            keeps users on brand by offering the controls they need and locking
            away the ones that cause damage.
          </>
        ),
      },
    ],
  },
];

const RebrandingIncluded = () => (
  <section className={styles.section} aria-labelledby="rebranding-included-heading">
    <div className={styles.inner}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>What you get</p>
            <h2 id="rebranding-included-heading" className={styles.heading}>
              What&apos;s Included in Our{" "}
              <span className={styles.accent}>Rebranding Services?</span>
            </h2>
            <p className={styles.lead}>
              We handle everything from visual design to document
              implementation:
            </p>
          </header>
        </AnimateOnScroll>

        {/* Native details elements: keyboard accessible, server rendered and no client JavaScript */}
        <div className={styles.list}>
          {services.map(({ title, summary, Icon, capabilities }, index) => (
            <details
              key={title}
              className={styles.item}
              open={index === 0}
            >
              <summary className={styles.summary}>
                <span className={styles.itemIcon}>
                  <Icon />
                </span>
                <span className={styles.itemHead}>
                  <span className={styles.itemTitle}>{title}</span>
                  <span className={styles.itemSub}>{summary}</span>
                </span>
                <span className={styles.chevron}>
                  <ChevronIcon />
                </span>
              </summary>
              <ul className={styles.caps}>
                {capabilities.map((cap) => (
                  <li key={cap.title} className={styles.cap}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <p className={styles.capText}>{cap.text}</p>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="scale-up" duration={0.9} delay={0.2}>
        <aside className={styles.panel}>
          <div className={styles.panelArt}>
            <RibbonPanelSvg />
          </div>
          <h3 className={styles.panelTitle}>A Formatting tab built for your brand</h3>
          <p className={styles.panelText}>
            Staff get your approved styles and Quick Parts up front, and the
            font controls that break the brand are locked away.
          </p>
        </aside>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RebrandingIncluded;
