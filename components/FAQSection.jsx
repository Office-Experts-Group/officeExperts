// /components/FAQSection.jsx
// FAQ built on native <details> and <summary>, so it works server-side and needs no client JavaScript.
// Adding the name="faq-group" attribute to every <details> lets the browser keep only one item open at a time.
import styles from "@/styles/faqSection.module.scss";

const FAQSection = ({ title = "Frequently Asked Questions", faqs = [] }) => {
  if (!Array.isArray(faqs) || !faqs.length) {
    console.error("FAQs must be a non-empty array of objects");
    return null;
  }

  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{title}</h2>
        </header>

        <div className={styles.list}>
          {faqs.map(({ question, answer }, index) => (
            <details
              key={`faq-${index}`}
              className={styles.item}
              name="faq-group"
            >
              <summary className={styles.question}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.questionText}>{question}</span>
              </summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
