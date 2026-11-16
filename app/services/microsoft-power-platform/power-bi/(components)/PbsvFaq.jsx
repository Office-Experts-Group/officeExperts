// /app/services/microsoft-power-platform/microsoft-power-bi/(components)/PbsvFaq.jsx
import Link from "next/link";
import styles from "@/styles/pbsvFaq.module.scss";
import { PbsvArrowIcon, PbsvPlusIcon } from "../(svgs)/PbsvIcons";

// Replaces the old faqs/power-bi and faqs/biSchema files (not uploaded).
// The accordion and the FAQPage schema both read from this one array.
// Answers avoid prices, licence terms and refresh limits, which change.
const PBSV_FAQS = [
  {
    q: "What does a Power BI consultant do?",
    a: "A Power BI consultant works out which questions your business needs answered, connects and cleans the data behind them, builds the dashboards and reports, and makes sure the right people can see the right figures. At Office Experts we also train your team, so you aren’t reliant on us for every change.",
  },
  {
    q: "How much do Power BI services cost?",
    a: "It depends on how many data sources are involved, how many reports you need and how often the data has to update. We work on either a fixed quote or an hourly rate, and we’ll give you a clear scope and price once we understand what you’re after. Get in touch and we’ll talk it through.",
  },
  {
    q: "Do we need Power BI licences before we start?",
    a: "Not always. What you need depends on who will view the reports and how you plan to share them. We confirm the licensing during scoping, against Microsoft’s current terms, so there are no surprises later.",
  },
  {
    q: "Can Power BI show live data?",
    a: "Often, yes, but how fresh the numbers are depends on the data source, the type of connection and how the model is built. Some reports only need a refresh each morning. Others suit a live connection or streaming. We’ll recommend the simplest option that meets your needs.",
  },
  {
    q: "Can you work with our existing Excel files and reports?",
    a: "Yes. Most projects start with the spreadsheets and systems a business already uses. We can connect to them, tidy the data up and rebuild or improve existing reports, rather than starting from nothing.",
  },
  {
    q: "How do you keep data secure when we share reports?",
    a: "We set up access carefully and use row-level security where different people should see different data, for example partners who must only see their own figures. We test it with a real account rather than assuming the settings are right.",
  },
  {
    q: "Can you train our team to use or build Power BI reports?",
    a: "Yes. We run training for report users and for people who want to build their own reports, and we offer ongoing support after the project is finished.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PBSV_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const PbsvFaq = () => {
  return (
    <section
      id="pbsv-faq"
      className={styles.pbsvFaq}
      aria-labelledby="pbsv-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>FAQs</p>
          <h2 id="pbsv-faq-heading" className={styles.heading}>
            Power BI questions, <span className={styles.accent}>answered</span>
          </h2>
          <p className={styles.lede}>
            Not seeing your question? Ask us directly and a consultant will get
            back to you.
          </p>
          <Link href="#contact" className={styles.arrowLink}>
            Ask a consultant <PbsvArrowIcon />
          </Link>
        </div>

        <div className={styles.list}>
          {PBSV_FAQS.map(({ q, a }, index) => (
            <details key={q} className={styles.item} open={index === 0}>
              <summary className={styles.summary}>
                <span>{q}</span>
                <span className={styles.toggle}>
                  <PbsvPlusIcon />
                </span>
              </summary>
              <p className={styles.answer}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PbsvFaq;
