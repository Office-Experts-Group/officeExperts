// /app/services/(components)/ServicesFaq.jsx
// FAQ built on native <details> elements, so it works without client JavaScript.
import styles from "@/styles/servicesFaq.module.scss";

const items = [
  {
    question: "Which of your teams should I contact?",
    answer:
      "You do not need to choose. Tell us what you are trying to achieve through the contact form or a quote request and we will bring in the right specialists from across the group.",
  },
  {
    question: "Do you work with clients outside my city?",
    answer:
      "Yes. Our programmers are located across the country and we work with clients throughout Australia.",
  },
  {
    question: "Can you fix or extend something someone else built?",
    answer:
      "Yes. We can review an existing spreadsheet, database, template or app, fix what is wrong and extend it.",
  },
  {
    question: "Should I use Copilot, Power Automate or a custom AI agent?",
    answer:
      "It depends on your data, your processes and your budget. Copilot suits everyday productivity, Power Automate suits workflows inside Microsoft 365, and custom agents suit work that needs to reach across other systems. We will recommend the simplest option that does the job.",
  },
  {
    question: "How do quotes work?",
    answer:
      "Use the request a quote page to describe what you need. We will come back to you with the next steps and an estimate.",
  },
  {
    question: "How long have you been doing this?",
    answer:
      "Office Experts Group was established in 2000, and our team of 25 plus programmers works across the full Microsoft suite.",
  },
];

const ServicesFaq = () => (
  <section className={styles.section} aria-labelledby="faq-heading">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>FAQ</span>
        <h2 id="faq-heading" className={styles.heading}>
          Common questions
        </h2>
      </header>

      <div className={styles.list}>
        {items.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesFaq;
