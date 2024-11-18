import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/faqSection.module.css";

const FAQ = ({ title = "Frequently Asked Questions", faqs = [] }) => {
  if (!Array.isArray(faqs) || !faqs.length) {
    console.error("FAQs must be a non-empty array of objects");
    return null;
  }

  return (
    <section className={styles.faqSection}>
      <h2>{title}</h2>
      <div className={styles.faqContainer} role="group">
        {faqs.map(({ question, answer }, index) => (
          <details
            key={`faq-${index}`}
            className={styles.faqItem}
            name="faq-group"
          >
            <summary>
              <span className={styles.questionNumber}>Q{index + 1}.</span>
              <p className={styles.questionText}>{question}</p>
            </summary>
            <div className={styles.content}>{answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

FAQ.propTypes = {
  title: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ).isRequired,
};

export default FAQ;
