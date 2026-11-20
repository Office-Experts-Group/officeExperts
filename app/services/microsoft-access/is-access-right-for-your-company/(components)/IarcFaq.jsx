// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcFaq.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/iarcFaq.module.scss";
import { IarcArrowIcon, IarcPlusIcon } from "../(svgs)/IarcIcons";

// The answer text feeds both the accordion and the FAQPage schema.
// `link` is optional and only shown on the page.
const IARC_FAQS = [
  {
    q: "Is Microsoft Access still a good choice for business?",
    a: "Yes, for the right job. Access suits teams that work from the same records every day and need forms, queries and reports without a big build. It is less suited to public websites, very large numbers of users or mobile-first apps. That is why we start by looking at your data, users and systems rather than assuming the answer.",
  },
  {
    q: "How many people can use an Access database at once?",
    a: "There is no single magic number. It depends on how the database is built, how heavy the work is and how good the network is. A well-built, split database copes comfortably with a modest team. As more people join, or some work remotely, we usually recommend keeping the Access screens and moving the data to SQL Server or Azure.",
    link: {
      href: "/services/sql-server-and-access-integration",
      text: "Access with SQL Server",
    },
  },
  {
    q: "Is there a size limit on an Access database?",
    a: "Yes. A single Access database file is capped at 2 GB, and large attachments and images use that up quickly. Linking Access to SQL Server or Azure SQL is the usual way past it, because the data is then no longer stored in the Access file.",
  },
  {
    q: "Should we use Access or Excel?",
    a: "Use Excel for calculations, analysis, charts and one-off lists. Use Access when you have lots of related records, several people entering data and a need for consistent forms and reports. Many businesses use both: Access keeps the records and Excel analyses them.",
    link: { href: "/services/microsoft-excel", text: "Excel consulting" },
  },
  {
    q: "Can Access connect to SQL Server, SharePoint, Azure or Power BI?",
    a: "Yes. Access can link to SQL Server and Azure SQL, work with SharePoint lists and feed data into Power BI reports. The right mix depends on your users, your data and your budget.",
    link: {
      href: "/services/microsoft-power-platform/power-bi",
      text: "Power BI reporting",
    },
  },
  {
    q: "Does Access work on a Mac or in a web browser?",
    a: "Access is a Windows desktop program and there is no Mac version. Mac users usually connect through a remote desktop session. If people need a browser or a phone, we would build a web app or a Power Apps front end on the same data instead.",
    link: {
      href: "/services/microsoft-power-platform/power-apps",
      text: "Power Apps",
    },
  },
  {
    q: "Is Access outdated?",
    a: "Access has been around for decades, which is part of its appeal: it is stable, widely understood and there are plenty of existing databases to look after. It is not the answer to everything, though, and we will tell you when something else suits you better.",
  },
  {
    q: "Can you fix or take over an Access database someone else built?",
    a: "Yes. We repair, speed up and extend existing databases, and we can move them to SQL Server or Azure when they outgrow the Access file.",
    link: {
      href: "/services/microsoft-access/access-database-optimisation-and-repair",
      text: "Access database repair and optimisation",
    },
  },
  {
    q: "What does an assessment involve?",
    a: "We review your data, your users and the systems involved, then explain the options in plain English. You will know whether Access fits, what it would take and what the alternatives look like. Get in touch and we will talk through scope and timing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: IARC_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const IarcFaq = () => (
  <section
    id="iarc-faq"
    className={styles.iarcFaq}
    aria-labelledby="iarc-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Straight answers</p>
        <h2 id="iarc-faq-heading" className={styles.heading}>
          Questions we hear <span className={styles.accent}>about Access</span>
        </h2>
        <p className={styles.lede}>
          Can’t see your question here? Ask us. It is usually quicker than
          searching.
        </p>
        <a href="#contact" className={styles.askLink}>
          Ask the Access experts
          <IarcArrowIcon />
        </a>
      </header>

      <div className={styles.list}>
        {IARC_FAQS.map(({ q, a, link }, i) => (
          <details key={q} className={styles.item} open={i === 0}>
            <summary className={styles.summary}>
              <span className={styles.question}>{q}</span>
              <span className={styles.plus} aria-hidden="true">
                <IarcPlusIcon />
              </span>
            </summary>
            <div className={styles.answer}>
              <p>{a}</p>
              {link && (
                <Link href={link.href} className={styles.answerLink}>
                  {link.text}
                  <IarcArrowIcon />
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default IarcFaq;
