// app/services/3rd-party-application-or-office-integration/(components)/ThirdPartyPlatforms.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartyPlatforms.module.scss
import styles from "@/styles/thirdPartyPlatforms.module.scss";
// Content lives in data so the markup below stays simple.
// Product names are written out in full as people search for them by name.
const groups = [
  {
    heading: "Accounting and finance",
    items: [
      {
        name: "Xero integration",
        text: "Pull invoices, bills, bank transactions and reports from Xero into Excel for budgets, cashflow and board packs, or post validated invoices and journals back into Xero.",
        href: "https://www.powerplatformexperts.com.au/blog/xero-to-power-bi",
        linkText: "Xero to Power BI",
      },
      {
        name: "MYOB integration",
        text: "Connect MYOB to Excel, Word or Access through its API or ODBC, depending on your MYOB product. Automate job costing, supplier reports and month-end packs.",
        href: "/services/sql-server-and-access-integration",
        linkText: "How we use ODBC and SQL",
      },
      {
        name: "Pronto and other ERPs",
        text: "Extract Pronto ERP data for reporting in Excel and Power BI, and load clean data back in, without relying on manual exports.",
        href: "https://www.powerplatformexperts.com.au/power-bi-data-integration",
        linkText: "Power BI data integration",
      },
    ],
  },
  {
    heading: "CRM and sales",
    items: [
      {
        name: "Salesforce integration",
        text: "Sync leads, accounts and opportunities with Excel, generate quotes and proposals in Word straight from a Salesforce record, and keep pipeline reports current.",
        href: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
        linkText: "Word API integrations",
      },
      {
        name: "Microsoft Dynamics 365",
        text: "Link Dynamics data to Office and Microsoft 365 so sales, service and finance teams work from the same figures.",
        href: "/microsoft-365-api-integration",
        linkText: "Microsoft 365 API integration",
      },
      {
        name: "Zoho CRM",
        text: "Move contacts and deals between Zoho and Excel or Outlook, and automate the follow-up documents your team writes by hand today.",
      },
    ],
  },
  {
    heading: "Marketing and databases",
    items: [
      {
        name: "Mailchimp",
        text: "Bring audience and campaign results into Excel for reporting, and send clean, validated contact lists back to Mailchimp.",
      },
      {
        name: "SQL Server and Azure SQL",
        text: "Connect Office to SQL Server or Azure SQL for live reporting and data entry, with Access as a front end when it suits.",
        href: "/services/sql-server-and-access-integration",
        linkText: "SQL Server and Access integration",
      },
      {
        name: "MySQL, Oracle and any API",
        text: "If your product has an API, an ODBC driver or a database we can reach, we can usually link it to Office or build a custom app around it.",
        href: "/services/microsoft-office-365/app-and-custom-development",
        linkText: "Custom app development",
      },
    ],
  },
];

const ThirdPartyPlatforms = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Platforms we integrate</p>
            <h2>
              Integrations for the products Australian businesses{" "}
              <span className={styles.accent}>actually use</span>
            </h2>
            <p>
              If your product is API or ODBC enabled, we can read from it, write
              to it, or both. Here are the platforms we are asked about most
              often.
            </p>
          </div>
        </AnimateOnScroll>

        {groups.map((group) => (
          <div key={group.heading} className={styles.group}>
            <h3 className={styles.groupHeading}>{group.heading}</h3>
            <ul className={styles.cards}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.card}>
                  <h4>{item.name}</h4>
                  <p>{item.text}</p>
                  {/* Only some cards have a relevant internal page to link to */}
                  {item.href && (
                    <Link href={item.href} className={styles.link}>
                      {item.linkText}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdPartyPlatforms;
