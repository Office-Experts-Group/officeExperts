// app/google-docs-to-word-migration/(components)/GoogleMigrationSolution.jsx
import React from "react";
import Link from "next/link";

// Shared site component: fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Styles for this component (styles/googleMigrationSolution.module.scss)
import styles from "@/styles/googleMigrationSolution.module.scss";

// One illustration per service; each inherits its colour from the tile
import { ConvertSvg } from "../(svgs)/ConvertSvg";
import { TemplateSvg } from "../(svgs)/TemplateSvg";
import { TrainingSvg } from "../(svgs)/TrainingSvg";
import { SupportSvg } from "../(svgs)/SupportSvg";
import { IntegrationSvg } from "../(svgs)/IntegrationSvg";

// tone: "dark", "brand" (accent) or "paper" (light grey)
// The first tile spans two of the three columns on desktop
const services = [
  {
    id: "conversion",
    tone: "dark",
    wide: true,
    Art: ConvertSvg,
    tag: "With 100% formatting preservation",
    title: "Document format conversion",
    body: (
      <>
        We convert your Google Docs and Drive folders into properly built Word
        documents. Headings become real styles, lists become true multilevel
        numbering, and images, tables, comments and suggestions come across
        intact, so nothing needs reworking after the move. Large libraries are
        handled through our{" "}
        <Link
          href="/services/microsoft-word/word-template-conversions"
          className={styles.link}
        >
          template conversion service
        </Link>
        .
      </>
    ),
    includes:
      "Style and heading mapping, rebuilt numbering, comments and suggestions carried across, bulk conversion of whole libraries.",
    outcome: "Documents that open, edit and print exactly as intended.",
  },
  {
    id: "templates",
    tone: "brand",
    Art: TemplateSvg,
    tag: "Tailored to your brand and workflows",
    title: "Custom template development",
    body: (
      <>
        Master templates built on real styles, Quick Parts and content controls,
        so every new document starts on brand. See our{" "}
        <Link
          href="/services/microsoft-word/brand-template"
          className={styles.link}
        >
          brand template service
        </Link>
        .
      </>
    ),
    includes:
      "Locked brand styles, building blocks, fill-in forms, global templates deployed to every desktop.",
    outcome: "Every author starts from the same compliant page.",
  },
  {
    id: "training",
    tone: "paper",
    Art: TrainingSvg,
    tag: "To ensure smooth adoption",
    title: "User training and change management",
    body: (
      <>
        People move faster when they see how their own documents behave in Word.
        Our{" "}
        <Link
          href="/microsoft-support-and-training-australia"
          className={styles.link}
        >
          Word trainers
        </Link>{" "}
        work with your real files, not generic examples, and teach the shortcuts
        and habits that make the change stick.
      </>
    ),
    includes:
      "Live and recorded sessions, quick reference guides, super-user coaching, post-migration check-ins.",
    outcome: "A team confident in Word from the first week.",
  },
  {
    id: "support",
    tone: "brand",
    Art: SupportSvg,
    tag: "With 24/7 enterprise assistance",
    title: "Ongoing support",
    body: "Once your team is live, we stay on hand. A template tweak, a new ribbon button or a document that misbehaves the night before a deadline: our programmers across Australia look after it.",
    includes:
      "Template and ribbon updates, rapid-response fixes, version upgrades, documentation handed to your team.",
    outcome: "Help when you need it, not after a queue.",
  },
  {
    id: "integration",
    tone: "dark",
    Art: IntegrationSvg,
    tag: "Connected to your business ecosystem",
    title: "Integration services",
    body: (
      <>
        Pull data from your CRM, finance or case management system straight into
        Word, and send finished documents to SharePoint, Teams or your records
        system. Explore{" "}
        <Link
          href="/services/microsoft-word/mail-merge"
          className={styles.link}
        >
          mail merge
        </Link>
        ,{" "}
        <Link
          href="/services/microsoft-365-api-integration"
          className={styles.link}
        >
          API integrations
        </Link>{" "}
        and{" "}
        <Link
          href="/services/microsoft-word/ai-ready-word-templates"
          className={styles.link}
        >
          Copilot-ready templates
        </Link>
        .
      </>
    ),
    includes:
      "Data-driven documents, SharePoint and Teams, line-of-business APIs, AI-assisted drafting.",
    outcome: "Documents that fill themselves from the systems you already use.",
  },
];

// Who typically needs this, drawn from the original page copy
const sectors = [
  {
    label: "Law firms",
    title: "Advanced redlining",
    text: "Tracked changes, comparison and clause libraries that Google Docs suggestions can’t match.",
  },
  {
    label: "Healthcare",
    title: "Privacy-conscious templates",
    text: "Controlled templates and document protection for organisations handling sensitive patient and client records.",
  },
  {
    label: "Government",
    title: "Protected document handling",
    text: (
      <>
        Sensitivity labels and protective markings for{" "}
        <Link
          href="/services/microsoft-word/government-departments"
          className={styles.textLink}
        >
          government agencies
        </Link>{" "}
        handling classified material.
      </>
    ),
  },
];

const GoogleMigrationSolution = () => (
  // id is the target of the hero's anchor link; scroll margin clears the fixed header
  <section className={styles.section} id="no-more-headaches">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What we deliver</p>
          <h2 className={styles.heading}>
            Our complete{" "}
            <span className={styles.accent}>migration solution</span>
          </h2>
          <p className={styles.lead}>
            Whether you’re a law firm needing advanced redlining capabilities, a
            healthcare organisation requiring privacy-conscious templates, or a
            government agency demanding classified document handling, Word
            Experts delivers migration solutions that transform how your team
            creates, collaborates and manages documents.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.bento}>
          {services.map(
            ({ id, tone, wide, Art, tag, title, body, includes, outcome }) => (
              <article
                key={id}
                className={`${styles.tile} ${styles[tone]} ${wide ? styles.wide : ""}`}
              >
                <div className={styles.art}>
                  <Art />
                </div>
                <p className={styles.tag}>{tag}</p>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.body}>{body}</p>

                <div className={styles.meta}>
                  <p className={styles.metaItem}>
                    <span className={styles.metaLabel}>Includes</span>
                    {includes}
                  </p>
                  <p className={styles.metaItem}>
                    <span className={styles.metaLabel}>Outcome</span>
                    {outcome}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <ul className={styles.sectors}>
          {sectors.map((s) => (
            <li key={s.label} className={styles.sector}>
              <p className={styles.sectorLabel}>{s.label}</p>
              <h3 className={styles.sectorTitle}>{s.title}</h3>
              <p className={styles.sectorText}>{s.text}</p>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoogleMigrationSolution;
