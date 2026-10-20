// app/microsoft-consultants-wollongong/(components)/WollongongWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// FAQ copy lives in one place, because page.js also uses it for the FAQPage schema
import { faqs } from "../(data)/wollongongFaqs";

import styles from "@/styles/wollongongWhy.module.scss";

// Three reasons to work with us. Kept short because the FAQ does most of the persuading.
const reasons = [
  {
    id: "since",
    term: "Since 2000",
    detail:
      "More than two decades of Microsoft work, from the early Access databases to Power Platform, Copilot and AI agents.",
  },
  {
    id: "team",
    term: "25+ programmers",
    detail:
      "Specialists across the whole Microsoft suite, so an Excel, Access, Word or AI question is answered by someone who does that work every day.",
  },
  {
    id: "analysis",
    term: "Requirements first",
    detail: (
      <>
        Our{" "}
        <Link href="/services/business-analysis" className={styles.link}>
          business analysis
        </Link>{" "}
        stage finds the real problem before anything is built.
      </>
    ),
  },
];

const WollongongWhy = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left: why us, kept in view while the FAQ scrolls ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.aside}>
          <p className={styles.eyebrow}>Before you get in touch</p>
          <h2 className={styles.heading}>
            Questions Illawarra teams{" "}
            <span className={styles.headingAccent}>ask us first.</span>
          </h2>

          <dl className={styles.reasons}>
            {reasons.map((r) => (
              <div key={r.id} className={styles.reason}>
                <dt className={styles.term}>{r.term}</dt>
                <dd className={styles.detail}>{r.detail}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.asideLinks}>
            <Link href="/client-testimonials" className={styles.link}>
              Read client testimonials
            </Link>
            <Link href="/case-studies" className={styles.link}>
              Browse all case studies
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right: FAQ. Native details elements, so every answer is in the server HTML ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
        <div className={styles.faq}>
          {faqs.map((faq, i) => (
            <details
              key={faq.id}
              className={styles.item}
              name="wollongong-faq"
              open={i === 0}
            >
              <summary className={styles.question}>{faq.question}</summary>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
                {faq.link && (
                  <Link href={faq.link.href} className={styles.link}>
                    {faq.link.text}
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default WollongongWhy;
