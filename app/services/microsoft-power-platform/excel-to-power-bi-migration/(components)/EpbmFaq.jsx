// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmFaq.jsx

import Link from "next/link";

import { EpbmPlusIcon } from "../(svgs)/EpbmIcons";

import styles from "@/styles/epbmFaq.module.scss";

const EPBM_FAQ_PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-power-platform/excel-to-power-bi-migration";

// Plain text answers: the same strings feed the FAQPage schema below
const EPBM_FAQS = [
  {
    question: "How long does an Excel to Power BI migration take?",
    answer:
      "It depends on how many workbooks you have, how many data sources feed them and how much clean-up the data needs. A single report can often move in days, while a larger reporting suite is usually planned and delivered in stages. You get a clear timeline after the assessment.",
  },
  {
    question: "Do we have to stop using Excel?",
    answer:
      "No. Many businesses keep Excel for quick analysis and use Power BI for shared reporting. Power BI can connect to Excel workbooks stored in OneDrive or SharePoint, and Power BI data can be explored in Excel too, so the two work side by side.",
  },
  {
    question: "Will our formulas and macros come across?",
    answer:
      "Not as they are. Formulas are rebuilt as Power Query steps and DAX measures inside Power BI, which is usually faster and easier to maintain. VBA macros don’t run in Power BI, so we work out what each one does and replace it with Power BI features, or with Power Automate where that makes more sense.",
  },
  {
    question: "What licences do we need for Power BI?",
    answer:
      "Most teams need a Power BI licence for the people who build and share reports, and your sharing options depend on your Microsoft 365 plan. Microsoft changes its licensing from time to time, so we check what you already have and recommend the most cost-effective option before you buy anything.",
  },
  {
    question: "Is our data secure in Power BI?",
    answer:
      "Power BI uses your Microsoft 365 sign-in and security. You control who can open each report, and Row-Level Security can limit which rows of data each person sees, so a regional manager only sees their own region, for example.",
  },
  {
    question: "Will you train our team?",
    answer:
      "Yes. Every migration includes a handover, and we can run hands-on training both for the people who build reports and for those who just need to read dashboards.",
  },
];

const epbmFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${EPBM_FAQ_PAGE_URL}#faq`,
  mainEntity: EPBM_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

// Native <details> accordion: no client JavaScript
const EpbmFaq = () => (
  <section
    id="epbm-faq"
    className={styles.epbmFaq}
    aria-labelledby="epbm-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(epbmFaqSchema).replace(/</g, "\\u003c"),
      }}
    />
    <div className={styles.inner}>
      <div className={styles.aside}>
        <span className={styles.eyebrow}>Questions</span>
        <h2 id="epbm-faq-heading" className={styles.title}>
          Excel to Power BI <span className={styles.accent}>FAQs</span>
        </h2>
        <p>
          Can’t see your question here? Tell us about your spreadsheets and
          we’ll talk you through the options.
        </p>
        <Link href="#contact" className={styles.askBtn}>
          Ask a consultant
        </Link>
      </div>

      <div className={styles.list}>
        {EPBM_FAQS.map(({ question, answer }) => (
          <details key={question} className={styles.item}>
            <summary className={styles.question}>
              <span>{question}</span>
              <span className={styles.toggle}>
                <EpbmPlusIcon />
              </span>
            </summary>
            <p className={styles.answer}>{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default EpbmFaq;
