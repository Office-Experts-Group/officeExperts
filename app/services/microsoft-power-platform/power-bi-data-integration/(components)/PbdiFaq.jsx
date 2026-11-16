// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiFaq.jsx
import Link from "next/link";
import styles from "@/styles/pbdiFaq.module.scss";
import { PbdiArrowIcon, PbdiPlusIcon } from "../(svgs)/PbdiIcons";

// "answer" feeds both the accordion and the FAQPage schema, so keep it plain text.
// "more" is an optional extra link shown in the accordion only.
const PBDI_FAQS = [
  {
    question: "What is Power BI data integration?",
    answer:
      "It’s the work of connecting the places your data lives, such as spreadsheets, databases, SharePoint, a CRM and cloud apps, so Power BI can report on all of it together. We set up the connections, clean the data on the way in, build the data model and keep it refreshed, so your dashboards stay accurate without anyone copying and pasting.",
  },
  {
    question: "Which data sources can you connect to Power BI?",
    answer:
      "Most common business sources, including Excel, SQL Server, SharePoint, Salesforce and a wide range of cloud applications, using Power BI’s built-in connectors. For systems without a ready-made connector, such as older in-house software or industry-specific tools, we build custom API integrations and connectors.",
    more: {
      href: "/services/3rd-party-application-or-office-integration",
      text: "Third-party application integration",
    },
  },
  {
    question: "Can you integrate our legacy or in-house systems?",
    answer:
      "In most cases, yes. It usually comes down to whether the system can share its data through a database, an API or a regular export. We check this when we assess your sources, and we’ll tell you plainly if a system needs extra work or a different approach first.",
    more: {
      href: "https://www.accessexperts.com.au/integrate-access-with-power-bi",
      text: "Integrate Access with Power BI",
    },
  },
  {
    question: "What does ETL mean, and do I need it?",
    answer:
      "ETL stands for extract, transform, load. It’s how data is pulled from your sources, cleaned and standardised, then loaded into Power BI. If your data comes from more than one place, or isn’t clean enough to report on as it is, a properly built ETL process will almost certainly save you time and errors.",
    more: {
      href: "/services/power-query",
      text: "Power Query consultants",
    },
  },
  {
    question: "How often will my data refresh?",
    answer:
      "Reports can be set to refresh on a schedule that suits your business. The options available depend on your data sources and your Power BI licensing, so we confirm what’s possible during scoping rather than promising a figure up front.",
    more: {
      href: "/case-studies/healthcare-patient-form-followup-automation",
      text: "Example: scheduled flows running on warehouse data",
    },
  },
  {
    question: "Do we need Power BI Pro or Premium licences?",
    answer:
      "It depends on how many people view the reports, how they’re shared and how much data is involved. Licensing changes from time to time, so we review your setup and recommend the most cost-effective option before you commit to anything.",
  },
  {
    question: "Can you move our Excel reports into Power BI?",
    answer:
      "Yes. Many integration projects start with spreadsheets that have grown unwieldy. We connect the workbooks, tidy the data behind them and rebuild the reports in Power BI so they’re easier to share and refresh.",
    more: {
      href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
      text: "Excel to Power BI migration",
    },
  },
  {
    question: "Can you support the dashboards after they’re built?",
    answer:
      "Yes. We provide ongoing Power BI support, including fixes, changes, new data sources and training for your team, so your reporting keeps pace as the business changes.",
    more: {
      href: "/services/microsoft-power-platform/power-bi-support",
      text: "Power BI support",
    },
  },
  {
    question: "Do I need Microsoft Fabric to integrate my data?",
    answer:
      "Not always. Many businesses are well served by Power BI with Power Query, dataflows or a SQL database. Larger or more complex environments sometimes benefit from a data warehouse or Microsoft Fabric, where transformation happens before the data reaches Power BI. We’ll recommend the simplest setup that meets your needs.",
    more: {
      href: "/services/microsoft-power-platform/microsoft-fabric",
      text: "Microsoft Fabric Solutions",
    },
  },
  {
    question: "Can you connect Power BI to Xero, MYOB or a custom application?",
    answer:
      "Often, yes. It depends on whether the application offers a connector, a database or an API. We confirm what’s possible before we quote.",
    more: {
      href: "/services/3rd-party-application-or-office-integration",
      text: "3rd party software integration",
    },
  },
];

const PBDI_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PBDI_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const isExternal = (href) => href.startsWith("http");

const PbdiFaq = () => (
  <section
    id="pbdi-faq"
    className={styles.pbdiFaq}
    aria-labelledby="pbdi-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(PBDI_FAQ_SCHEMA).replace(/</g, "\\u003c"),
      }}
    />
    <div className={styles.inner}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Good questions</p>
        <h2 id="pbdi-faq-heading" className={styles.heading}>
          Power BI data integration{" "}
          <span className={styles.accent}>questions</span>
        </h2>
        <p className={styles.lede}>
          Not sure where to start? Here are the things we get asked most. If
          yours isn’t here, tell us what you’re trying to connect.
        </p>
        <a href="#contact" className="btn">
          Ask us about your data
        </a>
      </div>

      <div className={styles.list}>
        {PBDI_FAQS.map(({ question, answer, more }) => (
          <details key={question} className={styles.item}>
            <summary className={styles.summary}>
              <span>{question}</span>
              <PbdiPlusIcon className={styles.icon} />
            </summary>
            <div className={styles.answer}>
              <p>{answer}</p>
              {more &&
                (isExternal(more.href) ? (
                  <a href={more.href} className={styles.more}>
                    {more.text} <PbdiArrowIcon />
                  </a>
                ) : (
                  <Link href={more.href} className={styles.more}>
                    {more.text} <PbdiArrowIcon />
                  </Link>
                ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default PbdiFaq;
