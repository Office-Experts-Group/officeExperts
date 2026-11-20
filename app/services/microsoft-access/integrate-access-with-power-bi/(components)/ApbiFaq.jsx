// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiFaq.jsx
import Link from "next/link";

import { PlusIcon } from "../(svgs)/ApbiIcons";

import styles from "@/styles/apbiFaq.module.scss";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-access/integrate-access-with-power-bi";

const APBI_FAQS = [
  {
    question: "Can Power BI connect directly to an Access database?",
    answer:
      "Yes. Power BI Desktop has an Access database connector that reads tables and queries from your .accdb or .mdb file. It loads the data in Import mode, which means a copy is stored in the report and refreshed on a schedule. The Access Database Engine on the computer must match the bitness of Power BI Desktop (both 32-bit or both 64-bit).",
  },
  {
    question: "Can the reports refresh automatically?",
    answer:
      "Usually, yes. If the Access file sits on a computer or server inside your network, the Power BI service typically reaches it through an on-premises data gateway, and that machine needs the 64-bit Access Database Engine installed. We set up the gateway and the schedule so reports update at the times you choose.",
  },
  {
    question: "Do I need to replace Access to use Power BI?",
    answer:
      "No. Access can stay as the place where people enter and edit data, while Power BI handles reporting. If the database is outgrowing Access, moving the tables to SQL Server is a sensible step, and Power BI connects to that just as easily.",
    href: "/services/sql-server-and-access-integration",
    linkText: "See SQL Server and Access integration",
  },
  {
    question: "Will connecting Power BI slow down my Access database?",
    answer:
      "A scheduled refresh reads the data in one pass, so the load is usually modest, and we can time it for outside business hours. Large or heavily used files can be slower, which is one of the cases where we would recommend moving the data to SQL Server first.",
  },
  {
    question: "How much does Power BI cost?",
    answer:
      "Power BI Desktop is free to build reports with. Sharing dashboards with other people generally needs paid licences, and the right option depends on how many people view them. Prices change, so check Microsoft’s current rates or ask us to work through the options with you.",
    href: "/blog/power-bi-licensing-costs",
    linkText: "Read our Power BI licensing guide",
  },
  {
    question: "Can we share the dashboards in Teams or on our intranet?",
    answer:
      "Yes. Reports published to the Power BI service can be added to a Microsoft Teams channel or embedded in a SharePoint page, and permissions control who sees what. Viewers will normally need the appropriate Power BI access to open them.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: APBI_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const ApbiFaq = () => (
  <section
    id="apbi-faq"
    className={styles.apbiFaq}
    aria-labelledby="apbi-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className={styles.inner}>
      <div className={styles.aside}>
        <p className={styles.eyebrow}>FAQs</p>
        <h2 id="apbi-faq-heading" className={styles.heading}>
          Access and Power BI{" "}
          <span className={styles.accent}>questions answered</span>
        </h2>
        <p className={styles.lede}>
          The questions we hear most before a project starts. Don’t see yours?
          Send it through and we will answer it directly.
        </p>
        <a href="#contact" className={styles.link}>
          Ask a question
        </a>
      </div>

      <div className={styles.list}>
        {APBI_FAQS.map(({ question, answer, href, linkText }, i) => (
          <details key={question} className={styles.item} open={i === 0}>
            <summary className={styles.summary}>
              <span className={styles.question}>{question}</span>
              <span className={styles.icon}>
                <PlusIcon />
              </span>
            </summary>
            <div className={styles.answer}>
              <p className={styles.text}>{answer}</p>
              {href && (
                <Link href={href} className={styles.inline}>
                  {linkText}
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default ApbiFaq;
