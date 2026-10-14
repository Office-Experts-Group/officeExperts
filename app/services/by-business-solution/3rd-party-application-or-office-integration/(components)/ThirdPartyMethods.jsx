// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyMethods.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartyMethods.module.scss
import styles from "../../../../../styles/thirdPartyMethods.module.css";

// These are alternatives, not a sequence, so they are shown as an unnumbered index.
const methods = [
  {
    title: "REST APIs and webhooks",
    text: "The modern standard for Xero, Salesforce, MYOB and most cloud products. Changes in one system can trigger updates in another as they happen.",
    href: "/services/microsoft-office-365/app-and-custom-development",
    linkText: "Custom app development",
  },
  {
    title: "ODBC and direct database links",
    text: "A dependable option for SQL Server, MySQL, Oracle and older desktop products that expose their data through a driver.",
    href: "/services/by-business-solution/sql-server-and-access-integration",
    linkText: "Office and SQL Server integration",
  },
  {
    title: "Microsoft Graph API",
    text: "One connection to Teams, SharePoint, OneDrive and Outlook, so business data can sync with Microsoft 365 in real time.",
    href: "/microsoft-365-api-integration",
    linkText: "Microsoft 365 API integration",
  },
  {
    title: "Office.js add-ins",
    text: "Cloud-based task panes and ribbon buttons that work across Windows, Mac, web and mobile. They are also the way forward for Outlook, as VBA isn't supported in the new Outlook.",
    href: "/services/by-business-solution/add-in-creation",
    linkText: "Add-in creation",
  },
  {
    title: "Power Automate and connectors",
    text: "Low-code flows that move data between your apps and Microsoft 365 on a schedule or when something happens, using your existing licences where possible.",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
    linkText: "Power Automate services",
  },
  {
    title: "VBA macros",
    text: "Still the fastest route for many Excel, Word and Access desktop tasks, including calling a web API from inside a workbook.",
    href: "/services/by-business-solution/vba-macro-development",
    linkText: "VBA macro development",
  },
];

const ThirdPartyMethods = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <h2>
              The right connection for each system, not a{" "}
              <span className={styles.accent}>one-size-fits-all</span> tool
            </h2>
            <p>
              We choose the method that suits your product, your security
              requirements and how your team works. Often a solution uses more
              than one.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className={styles.list}>
          {methods.map((method) => (
            <li key={method.title} className={styles.item}>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
              <Link href={method.href} className={styles.link}>
                {method.linkText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ThirdPartyMethods;
