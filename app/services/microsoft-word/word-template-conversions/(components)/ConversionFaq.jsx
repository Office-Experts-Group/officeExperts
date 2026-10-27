// /word-template-conversions/(components)/ConversionFaq.jsx
// Native <details> keeps this a server component: no state, no client JS,
// and the answers stay in the HTML for crawlers.
import { ChevronIcon } from "../(svgs)/Icons";
import faqs from "../../wordFaqs/wordTemplateConversions";
import styles from "@/styles/conversionFaq.module.scss";

const ConversionFaq = () => {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Common questions</span>
          <h2 className={styles.heading}>
            Everything you need to know{" "}
            <span className={styles.accentWord}>
              before you send us a file.
            </span>
          </h2>
        </header>

        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.q} className={styles.item}>
              <summary className={styles.question}>
                {faq.q}
                <ChevronIcon />
              </summary>
              <p className={styles.answer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionFaq;
