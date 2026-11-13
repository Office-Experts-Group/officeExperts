// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabFaq.jsx
// Native <details> accordion (no client JS). The FAQPage schema is built from
// the same array the accordion shows.

import styles from "@/styles/mfabFaq.module.scss";
import { MfabPlusIcon } from "../(svgs)/MfabIcons";

const MFAB_FAQS = [
  {
    question: "What is Microsoft Fabric used for?",
    answer:
      "Fabric is used to bring an organisation’s data together and turn it into reports, forecasts and alerts. A typical project combines data from finance, sales, operations and spreadsheets in OneLake, then builds Power BI reports, live dashboards or machine learning models on top.",
  },
  {
    question: "Do we have to replace Power BI to use Fabric?",
    answer:
      "No. Power BI is part of Microsoft Fabric. Your existing reports and semantic models keep working, and Fabric adds the tools to prepare and store the data behind them. Many organisations start by moving the data that feeds their busiest reports.",
  },
  {
    question: "How is Microsoft Fabric licensed?",
    answer:
      "Fabric is mainly licensed by capacity, which you can pay for as you go or reserve for a lower rate. Depending on the capacity size, people who view reports may also need Power BI licences. Microsoft changes pricing and licensing from time to time, so we size capacity and check current licensing as part of every assessment.",
  },
  {
    question: "Can you migrate us from Azure Synapse Analytics or SQL Server?",
    answer:
      "Yes. We plan migrations from Azure Synapse Analytics, SQL Server, on-premises data warehouses and spreadsheet-based reporting. We move things across in stages and run old and new side by side until the figures match, so your reporting keeps running throughout.",
  },
  {
    question: "Can Fabric use data that stays where it is?",
    answer:
      "Often, yes. OneLake shortcuts can point to data held in other storage, such as Azure Data Lake Storage or Amazon S3, without copying it, and mirroring can keep a copy of some databases in sync. On-premises sources can connect through a data gateway. We confirm what works for your systems during the assessment.",
  },
  {
    question: "Where is our data stored, and is it secure?",
    answer:
      "Fabric data is stored in the region of your Microsoft tenant or capacity, which for most Australian organisations can be an Australian data centre region. Access is controlled through Microsoft Entra ID, with workspace roles, item permissions and row-level security on top. We set all of this up as part of every implementation.",
  },
  {
    question: "How long does a Fabric implementation take?",
    answer:
      "It depends on how many data sources you have and how much reporting already exists. A focused first phase, such as moving one department’s reporting onto Fabric, often takes a few weeks. Larger platforms are delivered in stages, and the assessment gives you a realistic timeline before any build starts.",
  },
  {
    question: "Do we need our own data engineers?",
    answer:
      "Not to get started. We can build and run the platform for you, train your team to take it over, or work alongside your own developers. Many clients keep us on for support once they’re up and running.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MFAB_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const MfabFaq = () => {
  return (
    <section
      className={styles.mfabFaq}
      id="mfab-faq"
      aria-labelledby="mfab-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 id="mfab-faq-heading" className={styles.heading}>
            Microsoft Fabric{" "}
            <span className={styles.accent}>questions, answered</span>
          </h2>
        </header>

        <div className={styles.list}>
          {MFAB_FAQS.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.question}>
                <span>{question}</span>
                <span className={styles.icon}>
                  <MfabPlusIcon />
                </span>
              </summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>

        <div className={styles.strip}>
          <svg
            className={styles.stripArt}
            viewBox="0 0 64 64"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="64" height="64" rx="16" fill="#e8f4fa" />
            <rect x="10" y="14" width="30" height="22" rx="6" fill="#046999" />
            <path d="M16 36v8l8-8" fill="#046999" />
            <path
              d="M17 23h16M17 29h10"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <rect x="28" y="30" width="26" height="20" rx="6" fill="#111820" />
            <path d="M48 50v7l-7-7" fill="#111820" />
            <circle cx="35" cy="40" r="2" fill="#6fc3e8" />
            <circle cx="41" cy="40" r="2" fill="#6fc3e8" />
            <circle cx="47" cy="40" r="2" fill="#6fc3e8" />
          </svg>
          <p className={styles.stripText}>
            Got a question about your own data and systems?
          </p>
          <a href="#contact" className={styles.stripCta}>
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default MfabFaq;
