// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyMethodComparison.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartyMethodComparison.module.scss
import styles from "@/styles/thirdPartyMethodComparison.module.scss";
// Row data kept separate from the markup. Method names match the cards in
// ThirdPartyMethods so visitors can connect the two sections.
const rows = [
  {
    method: "REST APIs and webhooks",
    bestFor:
      "Cloud products such as Xero, Salesforce and most modern software. Suits changes that need to flow between systems as they happen.",
    watchFor:
      "Rate limits, API version changes and expired sign-in tokens. Each has to be handled so a sync doesn't quietly stop.",
    security:
      "Usually OAuth 2.0 sign-in, with only the permissions the job needs, on a dedicated connection that can be revoked.",
  },
  {
    method: "ODBC and direct database links",
    bestFor:
      "SQL Server, MySQL, Oracle and older desktop products that expose data through a driver. Good for reporting and data entry from Excel or Access.",
    watchFor:
      "The driver must be installed on each computer, and the 32-bit or 64-bit versions of Office and the driver have to match. The database must also be reachable on your network.",
    security:
      "A dedicated database account, read-only where possible, so permissions are controlled in the database itself.",
  },
  {
    method: "Microsoft Graph API",
    bestFor:
      "Teams, SharePoint, OneDrive and Outlook data, and automation inside Microsoft 365.",
    watchFor:
      "Permissions often need administrator consent, and Microsoft throttles very heavy request volumes.",
    security:
      "An app registration in Entra ID, using delegated permissions (acting as the signed-in person) or application permissions (acting as the app) as appropriate.",
  },
  {
    method: "Office.js add-ins",
    bestFor:
      "Task panes and ribbon buttons that work across Windows, Mac, web and mobile, including the new Outlook.",
    watchFor:
      "The add-in's web app needs hosting, and some deep desktop features are easier to build in VBA.",
    security:
      "Can be deployed centrally by your IT team through the Microsoft 365 admin centre, with sign-in handled by Entra ID where needed.",
  },
  {
    method: "Power Automate and connectors",
    bestFor:
      "Flows triggered by an event or a schedule, such as a new email, a new record or a daily check.",
    watchFor:
      "Some connectors need premium licences, and flows have run and throttling limits at high volumes.",
    security:
      "Connection credentials are managed in the platform, and data loss prevention policies can limit which apps are allowed to connect.",
  },
  {
    method: "VBA macros",
    bestFor:
      "Excel, Word and Access desktop tasks, including calling a web API from inside a workbook.",
    watchFor:
      "Desktop only. VBA doesn't run in Office for the web or the new Outlook, and has some differences on Mac.",
    security:
      "Macro security settings and digitally signed code, so only trusted macros are allowed to run.",
  },
];

const ThirdPartyMethodComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Choosing a method</p>
            <h2>
              Which connection{" "}
              <span className={styles.accent}>suits your system?</span>
            </h2>
            <p>
              A quick guide to how the six methods compare. We confirm the right
              one before any building starts, and many projects combine two.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Focusable so keyboard users can scroll the table sideways on small screens */}
        <div
          className={styles.tableWrap}
          role="region"
          aria-label="Integration methods compared"
          tabIndex={0}
        >
          <table className={styles.table}>
            <caption>
              Integration methods compared by suitability, common limitations
              and security approach.
            </caption>
            <thead>
              <tr>
                <th scope="col">Method</th>
                <th scope="col">Best for</th>
                <th scope="col">Watch for</th>
                <th scope="col">Security approach</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.method}>
                  <th scope="row">{row.method}</th>
                  <td>{row.bestFor}</td>
                  <td>{row.watchFor}</td>
                  <td>{row.security}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>
          Not sure which applies to your product? Our{" "}
          <Link href="/services/business-analysis">business analysis</Link>{" "}
          works that out before any code is written.
        </p>
      </div>
    </section>
  );
};

export default ThirdPartyMethodComparison;
