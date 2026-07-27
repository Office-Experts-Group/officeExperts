// app/services/activex-vbscript-migration/(components)/MigrationFaq.jsx
"use client";

import { useState } from "react";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";
import { ChevronIcon } from "../(svgs)/ChevronIcon";
import styles from "../../../../styles/activexFaq.module.css";

const faqs = [
  {
    id: "macros-removed",
    q: "Are VBA macros being removed from Word and Excel?",
    a: (
      <>
        No. VBA macros remain fully supported. What&rsquo;s changed is that
        macros from files marked as downloaded from the internet are now
        blocked by default, and ActiveX controls and VBScript are being
        phased out separately. Your existing VBA code is not affected by
        this change on its own.
      </>
    ),
    plainText:
      "VBA macros remain fully supported in Word and Excel. Files marked as downloaded from the internet now have macros blocked by default, and ActiveX controls and VBScript are being phased out separately, but existing VBA code is not affected by this change on its own.",
  },
  {
    id: "activex-timeline",
    q: "When exactly is ActiveX being disabled?",
    a: (
      <>
        ActiveX controls were disabled by default in Office 2024 from
        October 2024, and in Microsoft 365 apps from April 2025. It can
        still be re-enabled manually through Trust Center settings or Group
        Policy, but Microsoft actively discourages this for security
        reasons and it is not a long-term fix.
      </>
    ),
    plainText:
      "ActiveX controls were disabled by default in Office 2024 from October 2024, and in Microsoft 365 apps from April 2025. It can be manually re-enabled through Trust Center settings or Group Policy, though Microsoft discourages this as a long-term approach.",
  },
  {
    id: "still-working",
    q: "My ActiveX controls still work. Why should I act now?",
    a: (
      <>
        If ActiveX has been manually re-enabled in your environment, it will
        keep working for now. But that setting weakens a genuine security
        control, and it&rsquo;s only a matter of time before a Windows or
        Office update, a new staff laptop, or a policy change breaks it
        without warning. Fixing it on your schedule is far cheaper than
        fixing it in a panic.
      </>
    ),
    plainText:
      "If ActiveX has been manually re-enabled, it continues to work for now, but this weakens a genuine security control and can break unexpectedly with a future update, new device, or policy change. Addressing it proactively is more cost effective than an emergency fix.",
  },
  {
    id: "what-replaces-activex",
    q: "What actually replaces an ActiveX control in a Word or Excel file?",
    a: (
      <>
        In most cases, native Content Controls (for Word) or standard Excel
        form controls and VBA UserForms give you the same interactivity,
        buttons, dropdowns, date pickers, without relying on a deprecated
        technology. For more complex cases, we sometimes recommend moving
        the functionality into a Power Apps or web-based solution instead.
      </>
    ),
    plainText:
      "Native Content Controls in Word, and standard Excel form controls or VBA UserForms, typically replace ActiveX interactivity such as buttons, dropdowns and date pickers. For more complex cases, moving functionality into Power Apps or a web-based solution may be recommended.",
  },
  {
    id: "vbscript-alternative",
    q: "What should I use instead of VBScript for automation and scheduled tasks?",
    a: (
      <>
        PowerShell is the direct, supported replacement for most VBScript
        automation, file processing, and Windows task scheduling. Where the
        automation touches Office data specifically, Power Automate is
        often a better long-term fit, giving you monitoring and error
        handling that a standalone script never had.
      </>
    ),
    plainText:
      "PowerShell is the direct, supported replacement for most VBScript automation, file processing, and Windows task scheduling. For automation involving Office data, Power Automate is often a better long-term fit, offering monitoring and error handling not available in a standalone script.",
  },
  {
    id: "audit-first",
    q: "Do you need to see our systems before quoting?",
    a: (
      <>
        Yes, and this protects you as much as us. We start with a
        compatibility check to identify exactly which files, forms or
        scripts rely on ActiveX or VBScript, then quote based on what we
        actually find rather than a guess.
      </>
    ),
    plainText:
      "A compatibility check is completed first to identify exactly which files, forms or scripts rely on ActiveX or VBScript, with quoting based on the findings rather than an estimate made in advance.",
  },
];

// JSON-LD FAQPage schema — plain text answers only, no JSX or links
const FaqSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.plainText,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <AnimateOnScroll
      animation="fade-up"
      duration={0.5}
      delay={index * 0.05}
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.item + (open ? " " + styles.itemOpen : "")}>
        <button
          className={styles.question}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <span className={styles.questionText}>{faq.q}</span>
          <span className={styles.chevron}>
            <ChevronIcon />
          </span>
        </button>

        <div
          id={`faq-answer-${faq.id}`}
          className={styles.answer}
          aria-hidden={!open}
        >
          <div className={styles.answerInner}>
            <p className={styles.answerText}>{faq.a}</p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const MigrationFaq = () => {
  const mid = Math.ceil(faqs.length / 2);
  const colA = faqs.slice(0, mid);
  const colB = faqs.slice(mid);

  return (
    <>
      <FaqSchema />

      <section className={styles.section} id="faq">
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>Common Questions</span>
            <h2 className={styles.title}>
              Straight answers, <span className={styles.accentText}>no jargon.</span>
            </h2>
            <p className={styles.intro}>
              What&rsquo;s actually changing, why it matters, and what to do
              about it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          <div className={styles.col}>
            {colA.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
          <div className={styles.col}>
            {colB.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i + colA.length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MigrationFaq;
