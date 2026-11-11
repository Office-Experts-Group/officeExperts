// app/services/custom-office-solutions/(components)/CustomAutomation.jsx
// Automation and integration, on the dark section background.
// Expands the second half of the old PageSegment8 (programmers, automation, external data).
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customAutomation.module.scss)
import styles from "@/styles/customAutomation.module.scss";
// Decorative illustration stored with the route
import { AutomationFlowSvg } from "../(svgs)/AutomationFlowSvg";

// Common automation jobs (unordered, so no numbers)
const tasks = [
  {
    title: "Document generation",
    text: "Proposals, contracts and letters assembled in seconds from a form, a spreadsheet row or a database record.",
  },
  {
    title: "Reporting packs",
    text: "Month-end reports that pull the latest figures, format themselves and land in the right inboxes.",
  },
  {
    title: "Data entry and validation",
    text: "Forms that check values as they're entered, so mistakes are caught before they reach your records.",
  },
  {
    title: "Approvals and notifications",
    text: "Workflows that route documents to the right person in Outlook or Teams and record every decision.",
  },
];

// Systems we regularly connect Office to, shown as chips
const systems = [
  "SQL Server",
  "Azure SQL",
  "SharePoint",
  "Dataverse",
  "Xero",
  "MYOB",
  "Salesforce",
  "Microsoft Graph",
  "REST APIs",
];

const CustomAutomation = () => {
  return (
    <section
      className={styles.section}
      id="automation-and-integration"
      aria-labelledby="automation-heading"
    >
      <div className={styles.inner}>
        {/* ── Left: content and illustration ── */}
        <div className={styles.lead}>
          <span className={styles.eyebrow}>Automation and integration</span>
          <h2 id="automation-heading" className={styles.heading}>
            Less copying and pasting,{" "}
            <span className={styles.accent}>more finished work</span>
          </h2>
          <p>
            Our programmers build solutions that automate your processes and cut
            the time it takes to complete everyday business tasks. We usually
            start with the jobs nobody enjoys: rekeying data from one file to
            another, rebuilding the same report every month and chasing
            approvals by email. Much of this runs on{" "}
            <Link href="/services/vba-macro-development">
              VBA macro development
            </Link>
            , Office Scripts and Power Automate.
          </p>
          <p>
            We also link your Office documents to external data, applications
            and the rest of Microsoft 365. A Word template can pull customer
            details from your CRM, an Excel model can refresh from{" "}
            <Link href="/services/sql-server-and-access-integration">
              SQL Server
            </Link>{" "}
            and an approved quote can raise an invoice through{" "}
            <Link href="/services/3rd-party-application-or-office-integration">
              Xero and MYOB integration
            </Link>
            .
          </p>
          <div className={styles.visual}>
            <AutomationFlowSvg />
          </div>
        </div>

        {/* ── Right: common automations and connected systems ── */}
        <div className={styles.side}>
          <ul className={styles.tasks}>
            {tasks.map(({ title, text }) => (
              <li key={title} className={styles.task}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>

          <div className={styles.connects}>
            <span className={styles.connectsLabel}>We connect Office to</span>
            <ul className={styles.chips}>
              {systems.map((system) => (
                <li key={system}>{system}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAutomation;
