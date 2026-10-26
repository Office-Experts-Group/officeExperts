// /services/microsoft-word/mail-merge/(components)/MailMergeBeyond.jsx
// A spectrum of approaches from built-in mail merge to AI drafting.
// Deliberately un-numbered: these are alternatives on a scale, not sequential steps.
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/mailMergeBeyond.module.scss";

const stops = [
  {
    id: "built-in",
    label: "Fixed layouts",
    title: "Built-in mail merge",
    description:
      "One record, one document, with a set layout. Letters, labels, statements and simple emails. Often all you need, and the easiest option for staff to run.",
  },
  {
    id: "automated",
    label: "High volume",
    title: "Automated merge",
    description: (
      <>
        <Link href="/services/vba-macro-development">VBA</Link> wraps the merge
        so each record becomes its own named PDF, filed in the right folder or
        emailed with its own attachment, all from one button.
      </>
    ),
  },
  {
    id: "generation",
    label: "Variable content",
    title: "Document generation",
    description: (
      <>
        Mail merge can't natively repeat a table of line items for one client
        or choose whole sections. Document generators can, driven by{" "}
        <Link href="/services/microsoft-word/popup-forms">popup forms</Link> or
        a{" "}
        <Link href="/services/database-development-and-solutions">
          database
        </Link>{" "}
        behind the scenes.
      </>
    ),
  },
  {
    id: "ai",
    label: "Written content",
    title: "AI-assisted drafting",
    description: (
      <>
        When the wording itself changes, an{" "}
        <Link href="/services/ai-agent-development">AI agent</Link> can draft
        into your real Word template from notes or records, with a person
        reviewing before anything is sent.
      </>
    ),
    highlight: true,
  },
];

const MailMergeBeyond = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Beyond mail merge</p>
        <h2 className={styles.heading}>
          When a merge isn't enough,{" "}
          <span className={styles.accent}>there's a next step.</span>
        </h2>
        <p className={styles.note}>
          Mail merge is brilliant for fixed layouts. When documents need to
          choose content, repeat tables or write themselves, we step up the
          approach rather than forcing the merge.
        </p>
      </div>
    </AnimateOnScroll>

    {/* Horizontal track on desktop, vertical below; the line is drawn by .track::before */}
    <ul className={styles.track}>
      {stops.map((stop) => (
        <li
          key={stop.id}
          className={`${styles.stop} ${stop.highlight ? styles.highlight : ""}`}
        >
          <p className={styles.label}>{stop.label}</p>
          <h3 className={styles.title}>{stop.title}</h3>
          <p className={styles.desc}>{stop.description}</p>
        </li>
      ))}
    </ul>

    <div className={styles.cta}>
      <p>
        Not sure which fits? Tell us what your documents need to do. We've been
        automating Microsoft Word since 2000, and quite often the simplest
        option is the right one.
      </p>
      <a href="#contact" className="btn">
        Talk to a Word specialist
      </a>
    </div>
  </section>
);

export default MailMergeBeyond;
