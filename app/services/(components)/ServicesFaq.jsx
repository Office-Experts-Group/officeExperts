// /app/services/(components)/ServicesFaq.jsx
// FAQ built on native <details> elements, so it works without client JavaScript.
import styles from "@/styles/servicesFaq.module.scss";

const ServicesFaq = ({ data }) => {
  const { eyebrow, title, items } = data;

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="faq-heading" className={styles.heading}>
            {title}
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
};

export default ServicesFaq;
