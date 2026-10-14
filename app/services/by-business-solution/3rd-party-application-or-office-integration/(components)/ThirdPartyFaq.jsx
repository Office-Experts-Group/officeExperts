// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyFaq.jsx

import React from "react";

// Shared with page.js, which uses the same data for FAQPage schema
import { thirdPartyFaqs } from "../../../../../faqs/thirdPartyFaqs";

// Compiled CSS from styles/thirdPartyFaq.module.scss
import styles from "../../../../../styles/thirdPartyFaq.module.css";

// Native <details> keeps this server rendered and works without JavaScript.
// Answers stay in the HTML, so search engines and AI crawlers can read them.
const ThirdPartyFaq = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Common questions</p>
        <h2>
          3rd party app integration <span className={styles.accent}>FAQs</span>
        </h2>
      </div>

      <div className={styles.list}>
        {thirdPartyFaqs.map((faq) => (
          <details key={faq.question} className={styles.item}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default ThirdPartyFaq;
