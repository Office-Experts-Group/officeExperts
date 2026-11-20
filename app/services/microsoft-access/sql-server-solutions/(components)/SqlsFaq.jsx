// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsFaq.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/sqlsFaq.module.scss";
import { SqlsPlusIcon } from "../(svgs)/SqlsIcons";

const SQLS_FAQS = [
  {
    q: "Do I have to replace my Access database to use SQL Server?",
    a: "No. In most projects Access stays as the front end, with your forms, reports, queries and code, and only the tables move to SQL Server. Your team keeps the screens they already know.",
  },
  {
    q: "Will my existing forms, reports and VBA still work?",
    a: "Usually, with some adjusting. Linked tables let Access treat SQL Server tables much like local ones, but some queries, code and data types need changes. We test and fix these as part of the migration.",
  },
  {
    q: "Will SQL Server make my database faster?",
    a: "Often, particularly with many users, large tables or staff working remotely, because the server does the work and sends back only the results. How much faster depends on how your database is designed, so we measure before and after rather than promise a number.",
  },
  {
    q: "What about the 2 GB Access limit?",
    a: "An Access database file is capped at 2 GB. Once the tables live in SQL Server, that cap no longer applies to your data. SQL Server editions have their own size limits, which we check against your needs.",
    links: [
      {
        label: "Read about the 2 GB Access limit",
        href: "/services/microsoft-access/blog/2gb-access-database-limit",
      },
    ],
  },
  {
    q: "Do I need to buy SQL Server licences?",
    a: "It depends on the edition, the number of users and where the server is hosted. Free and paid editions exist, and Azure SQL is billed as a service. We recommend an option for your situation, but please confirm licensing with Microsoft or your reseller.",
  },
  {
    q: "Can SQL Server run on our own server or in the cloud?",
    a: "Either. We can set it up on a server in your office or in Azure, and help you choose between them.",
    links: [
      {
        label: "Cloud solutions with Azure",
        href: "/services/cloud-based-solutions-with-azure",
      },
    ],
  },
  {
    q: "Can you move Excel data into SQL Server too?",
    a: "Yes. If spreadsheets have turned into a database, we can load the data into SQL Server and build a front end on top of it. For reporting straight from Excel data, see our Excel to Power BI migration page.",
    links: [
      {
        label: "Excel to Power BI migration",
        href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
      },
    ],
  },
  {
    q: "Can Power BI and Excel read from SQL Server?",
    a: "Yes. Both can connect to SQL Server, so reports can draw on one shared source instead of separate copies of the data.",
    links: [
      {
        label: "Power BI data integration",
        href: "/services/microsoft-power-platform/power-bi-data-integration",
      },
    ],
  },
  {
    q: "How long does a migration take?",
    a: "A small database can move in days, while larger systems with a lot of code take longer. We scope it after a review so you have a clear plan before any work starts.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SQLS_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const SqlsFaq = () => (
  <section
    id="sqls-faq"
    className={styles.sqlsFaq}
    aria-labelledby="sqls-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className={styles.inner}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Questions we hear</span>
        <h2 id="sqls-faq-heading" className={styles.title}>
          SQL Server backend{" "}
          <span className={styles.accent}>questions answered</span>
        </h2>
        <p>
          Straight answers about moving an Access database to SQL Server. If
          yours is not here, ask us.
        </p>
        <a href="#contact" className={styles.cta}>
          Ask a question
        </a>
      </div>

      <div className={styles.list}>
        {SQLS_FAQS.map(({ q, a, links }, index) => (
          <details key={q} className={styles.item} open={index === 0}>
            <summary className={styles.summary}>
              <span>{q}</span>
              <span className={styles.toggle} aria-hidden="true">
                <SqlsPlusIcon />
              </span>
            </summary>
            <div className={styles.answer}>
              <p>{a}</p>
              {links && (
                <p className={styles.related}>
                  {links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link key={link.href} href={link.href}>
                        {link.label}
                      </Link>
                    ) : (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ),
                  )}
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default SqlsFaq;
