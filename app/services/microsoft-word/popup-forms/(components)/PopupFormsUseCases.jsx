// app/popup-forms/(components)/PopupFormsUseCases.jsx

import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/popupFormsUseCases.module.css";

const scenarios = [
  {
    id: "client-onboarding",
    scenario: "Client Onboarding & Intake",
    challenge:
      "New client paperwork is filled in by hand or typed from scratch each time, with names, addresses and account details retyped across several different documents for the one engagement.",
    capability:
      "A single popup form captures client details once and populates every document the engagement requires, from the engagement letter to the internal file note, keeping every record identical.",
    tag: "Onboarding",
    href: "/companies-and-organisations",
  },
  {
    id: "compliance",
    scenario: "Contracts & Compliance Documents",
    challenge:
      "Legal and compliance templates carry serious risk if a clause reference, date, or figure is entered incorrectly, yet they're often still completed manually under time pressure.",
    capability:
      "Validation rules and mandatory fields make sure a compliance document can't be finalised until every required detail has been entered correctly, reducing risk and rework.",
    tag: "Risk reduction",
    href: "/blog/word-templates-for-legal-firms",
  },
  {
    id: "government-forms",
    scenario: "Government & Public Sector Reporting",
    challenge:
      "Government departments often work with strict formatting and accessibility standards, but standard templates rely on staff remembering every rule every time a document is created.",
    capability:
      "We build popup forms that enforce departmental formatting and accessibility requirements automatically, so compliant documents come out the same way every time, regardless of who's entering the data.",
    tag: "Public sector",
    href: "/government-departments",
  },
  {
    id: "branded-comms",
    scenario: "Branded Client Communications",
    challenge:
      "Letters, proposals and reports sent to clients need to look identical no matter who in the business produced them, but manual formatting drifts the moment more than one person is involved.",
    capability:
      "Form-driven documents pull from a locked brand template, so every letter, proposal or report keeps consistent fonts, spacing and logo placement without staff needing design skills.",
    tag: "Brand consistency",
    href: "/brand-template",
  },
  {
    id: "hr-forms",
    scenario: "HR & Internal Staff Forms",
    challenge:
      "Internal HR paperwork, leave forms, incident reports, onboarding checklists, is filled in inconsistently, making it hard to track, file, or report on later.",
    capability:
      "Structured popup forms with required fields and dropdown answers make internal paperwork consistent and searchable, and can write directly into a tracking spreadsheet or database at the same time.",
    tag: "Internal process",
    href: "/services/by-business-solution/custom-office-solutions",
  },
  {
    id: "repeating-data",
    scenario: "Documents with Repeating Data",
    challenge:
      "Some documents, quotes, schedules, itemised reports, need the same block of fields repeated multiple times, which is tedious and error-prone to lay out manually in Word.",
    capability:
      "We build forms that let users add as many repeating entries as needed, with each one correctly inserted into a table or repeating section in the finished document.",
    tag: "Repeating fields",
    href: "/blog/fields-and-repeating-data-in-word",
  },
];

// ── Small arrow icon ──────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 7h8M7 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────
const PopupFormsUseCases = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <span className={styles.eyebrow}>Where Popup Forms Fit</span>
        <h2 className={styles.heading}>
          Built around{" "}
          <span className={styles.accent}>how your documents are used.</span>
        </h2>
      </div>
      <div className={styles.headerRight}>
        <p className={styles.headerBody}>
          Popup forms aren't a one-size-fits-all tool. The right structure
          depends on what the document is for, who's filling it in, and what
          happens to the data afterwards. Here are some of the most common
          scenarios we build for.
        </p>
      </div>
    </div>

    {/* ── Scenario grid ── */}
    <div className={styles.grid}>
      {scenarios.map((s, i) => (
        <AnimateOnScroll key={s.id} animation="fade-up" duration={0.5} delay={i * 0.07}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>{s.tag}</span>
              <h3 className={styles.cardScenario}>{s.scenario}</h3>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.block}>
              <span className={styles.blockLabel}>
                <span className={styles.labelDot} aria-hidden="true" />
                A common challenge
              </span>
              <p className={styles.blockText}>{s.challenge}</p>
            </div>

            <div className={`${styles.block} ${styles.blockSolution}`}>
              <span className={styles.blockLabel}>
                <span className={`${styles.labelDot} ${styles.labelDotAccent}`} aria-hidden="true" />
                How we can help
              </span>
              <p className={styles.blockText}>{s.capability}</p>
            </div>

            <Link href={s.href} className={styles.cardLink}>
              Read more
              <ArrowRight />
            </Link>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default PopupFormsUseCases;
