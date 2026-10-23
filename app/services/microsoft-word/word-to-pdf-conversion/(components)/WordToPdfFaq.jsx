// app/word-to-pdf-conversion/(components)/WordToPdfFaq.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { ChevronIcon } from "../(svgs)/Icons";
import styles from "../../../styles/wordToPdfFaq.module.css";

const faqs = [
  {
    id: "what-is-fillable-pdf",
    category: "Fillable Forms",
    q: "What is a fillable PDF form and how is it different from a normal PDF?",
    a: (
      <>
        A standard PDF exported from Word is static text and images, nothing on
        the page can be interacted with. A fillable PDF form has interactive
        fields built in, text boxes, checkboxes, dropdowns, and signature
        fields, so the person receiving it can type or click directly into the
        document rather than print, complete by hand, and scan it back.
      </>
    ),
    plainText:
      "A standard PDF exported from Word is static, with nothing on the page interactive. A fillable PDF form has interactive fields built in, such as text boxes, checkboxes, dropdowns, and signature fields, allowing someone to complete it directly on screen.",
  },
  {
    id: "convert-word-to-fillable-pdf",
    category: "Fillable Forms",
    q: "Can you convert an existing Word document into a fillable PDF form?",
    a: (
      <>
        Yes. Using Adobe Acrobat Pro, we take your existing Word document and
        rebuild it as a fillable PDF form, adding the appropriate field types,
        setting up a logical tab order, and testing it before delivery. See our
        dedicated{" "}
        <Link href="/fill-in-forms" className={styles.link}>
          fill-in form service
        </Link>{" "}
        for more detail.
      </>
    ),
    plainText:
      "Yes, existing Word documents can be rebuilt as fillable PDF forms using Adobe Acrobat Pro, with appropriate field types added, a logical tab order set up, and the form tested before delivery.",
  },
  {
    id: "field-types-supported",
    category: "Fillable Forms",
    q: "What types of form fields can be added to a converted PDF?",
    a: (
      <>
        Text fields, checkboxes, radio button groups, dropdown lists, date
        fields, and signature fields can all be added. Field validation and
        required-field rules can be applied where the form needs to enforce
        specific input.
      </>
    ),
    plainText:
      "Text fields, checkboxes, radio button groups, dropdown lists, date fields, and signature fields can all be added to a converted PDF, along with field validation and required-field rules where needed.",
  },
  {
    id: "template-reliability",
    category: "Templates",
    q: "Can you make our Word template convert to PDF more reliably?",
    a: (
      <>
        Yes. If the same template keeps producing a slightly different result
        every time it's converted, the underlying Word file is usually the cause
        rather than the conversion step itself. We rebuild the template so
        tables, fonts, and layout survive the export to PDF cleanly and
        consistently, every time it's used.
      </>
    ),
    plainText:
      "Yes, Word templates that produce inconsistent results when converted to PDF can be rebuilt so tables, fonts, and layout survive the export cleanly and consistently every time the template is used.",
  },
  {
    id: "document-security",
    category: "Security",
    q: "How is confidentiality handled for sensitive documents?",
    a: (
      <>
        Documents are not uploaded to an anonymous online converter. The
        handling and storage process is agreed with you up front, which matters
        for contracts, HR records, financial documents, and anything else that
        should not pass through a server you know nothing about.
      </>
    ),
    plainText:
      "Documents are not uploaded to anonymous online converters. Handling and storage is agreed with the client up front, which is important for contracts, HR records, financial documents, and other sensitive material.",
  },
  {
    id: "why-pay-for-conversion",
    category: "Conversion",
    q: "Why would I pay for Word to PDF conversion when free tools exist?",
    a: (
      <>
        For a simple, one-off document, a free online converter is usually fine.
        It's worth paying for a professional service once you need a fillable
        form, a template that converts the same way every time, or confidential
        documents handled without uploading them to an unknown server.
      </>
    ),
    plainText:
      "For a simple, one-off document, a free online converter is usually fine. Professional conversion is worth it once a fillable form, template reliability, or confidential document handling is required.",
  },
  {
    id: "formats-supported",
    category: "Conversion",
    q: "Which file formats can be converted to PDF?",
    a: (
      <>
        We work with .doc, .docx, and .rtf source files. If your documents are
        in another format, let us know and we will advise the best approach.
      </>
    ),
    plainText:
      "Word document formats .doc, .docx, and .rtf can be converted to PDF. Other formats can be handled on request.",
  },
];

const categories = [
  "All",
  "Fillable Forms",
  "Templates",
  "Security",
  "Conversion",
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

const WordToPdfFaq = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const mid = Math.ceil(filtered.length / 2);
  const colA = filtered.slice(0, mid);
  const colB = filtered.slice(mid);

  return (
    <>
      <FaqSchema />

      <section className={styles.section}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>Common Questions</span>
              <h2 className={styles.title}>
                Everything you need to know{" "}
                <span className={styles.accentLine}>
                  before you send us a file.
                </span>
              </h2>
              <p className={styles.intro}>
                Straight answers on fillable PDF forms, reliable templates, and
                how we handle sensitive documents.
              </p>
            </div>

            <div
              className={styles.filterRow}
              role="tablist"
              aria-label="Filter FAQ by topic"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={
                    styles.filterBtn +
                    (activeCategory === cat ? " " + styles.filterBtnActive : "")
                  }
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid} role="tabpanel">
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

export default WordToPdfFaq;
