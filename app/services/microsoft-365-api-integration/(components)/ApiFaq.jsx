// app/services/microsoft-365-api-integration/(components)/ApiFaq.jsx
// FAQ using native <details>/<summary>: opens and closes with no client
// JavaScript, and every answer is in the server-rendered HTML for crawlers.

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// Shared with page.js, which builds the FAQPage schema from the same array
import { apiFaqs } from "./apiFaqData";

import styles from "@/styles/apiFaq.module.scss";

const ApiFaq = () => (
  <section className={styles.section} id="faq">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header>
          <p className={styles.eyebrow}>Questions</p>
          <h2 className={styles.heading}>
            Microsoft 365 integration,{" "}
            <span className={styles.accent}>answered.</span>
          </h2>
          <p className={styles.lede}>
            Still unsure which approach suits you? Our{" "}
            <Link href="/faq">general FAQ</Link> covers how we work, or ask us
            directly below.
          </p>
        </header>
      </AnimateOnScroll>

      <div className={styles.list}>
        {apiFaqs.map((faq) => (
          <details key={faq.question} className={styles.item}>
            <summary className={styles.question}>
              {faq.question}
              {/* Plus sign drawn in CSS; it rotates into a cross when open */}
              <span className={styles.toggle} aria-hidden="true" />
            </summary>
            <p className={styles.answer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default ApiFaq;
