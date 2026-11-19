// /app/services/microsoft-excel/(components)/ExcelFaq.jsx
// Excel FAQs: sticky intro beside a native <details> accordion (no client
// JavaScript). The FAQPage schema is built from the same array the accordion
// shows, so the two can never drift apart.

import Link from "next/link";

import styles from "@/styles/excelFaq.module.scss";

import { ArrowIcon, PlusIcon } from "../(svgs)/ExcelIcons";

const EXCEL_FAQS = [
  {
    question: "Can you fix a workbook someone else built?",
    answer:
      "Yes. Most of our Excel work starts with an existing file. We review how it works, fix what’s broken and tidy up what’s fragile, so you keep what already works and lose what doesn’t.",
  },
  {
    question: "Do I need to know exactly what I want before we talk?",
    answer:
      "No. Tell us what’s frustrating your team and what the workbook needs to produce. We’ll suggest the simplest way to get there, whether that’s a quick fix or a rebuild.",
  },
  {
    question: "Should we move off Excel altogether?",
    answer:
      "Sometimes, but often not. Excel is still the best tool for many jobs. If several people need to enter data at once, or leaders need live dashboards they can open anywhere, we may suggest a database or Power BI alongside Excel rather than replacing it.",
    link: { href: "#excel-fit", text: "When to stay in Excel" },
  },
  {
    question:
      "Our macros stopped working after an Office upgrade. Can you help?",
    answer:
      "Yes. Upgrades and moves to Microsoft 365 can break older VBA. We find what changed, fix the code and test it with your real files before handing it back.",
    link: {
      href: "/services/upgrades-and-migration",
      text: "Upgrades and migration",
    },
  },
  {
    question: "Do you work outside the capital cities?",
    answer:
      "Yes. We work remotely right across Australia and come on site when it helps.",
  },
  {
    question: "Can you train our team to use Excel better?",
    answer:
      "Yes. We run practical training built around your own files, from formulas and pivot tables through to looking after a workbook we’ve built for you.",
    link: {
      href: "/microsoft-support-and-training-australia",
      text: "Support and training",
    },
  },
  {
    question: "How do you price Excel work?",
    answer:
      "We start with a free consultation to understand the job, then give you a quote before any work begins. Larger builds can be split into stages so you can see progress as you go.",
  },
];

const ExcelFaq = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: EXCEL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section
      id="excel-faq"
      className={styles.excelFaq}
      aria-labelledby="excel-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Common questions</span>
          <h2 id="excel-faq-heading" className={styles.heading}>
            Excel questions,{" "}
            <span className={styles.accent}>answered plainly</span>
          </h2>
          <p className={styles.lead}>
            The things people usually ask before they send us a spreadsheet. If
            yours isn’t here, ask us directly.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>
              Ask an Excel expert
            </a>
            <Link href="/faq" className={styles.link}>
              More answers <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className={styles.list}>
          {EXCEL_FAQS.map((faq) => (
            <details key={faq.question} className={styles.item}>
              <summary className={styles.summary}>
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  <PlusIcon />
                </span>
              </summary>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
                {faq.link && (
                  <Link href={faq.link.href} className={styles.link}>
                    {faq.link.text} <ArrowIcon />
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcelFaq;
