// app/microsoft-consultants-northern-nsw/(components)/NorthernNswFaq.jsx
import React from "react";

import { faqs } from "../northernNswData";

import styles from "@/styles/northernNswFaq.module.scss";

// FAQ built on native <details> elements, so every answer is in the server HTML
// and it works without client JavaScript. The matching FAQPage schema is built
// from the same array in northernNswSchema.js.
const NorthernNswFaq = () => (
  <section className={styles.section} aria-labelledby="northern-nsw-faq">
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Local questions</p>
        <h2 id="northern-nsw-faq" className={styles.heading}>
          Questions from Northern NSW{" "}
          <span className={styles.headingAccent}>businesses.</span>
        </h2>
      </header>

      <div className={styles.list}>
        {faqs.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default NorthernNswFaq;
