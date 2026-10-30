// /services/vba-macro-development/(components)/VbaApps.jsx
// Server component. The tabs are pure CSS (radio inputs + sibling selectors in vbaApps.module.scss),
// so every application's content is in the HTML for crawlers and the tabs work without JavaScript.
import Link from "next/link";

import {
  VbaExcelSvg,
  VbaWordSvg,
  VbaAccessSvg,
  VbaPowerPointSvg,
  VbaOutlookSvg,
} from "../(svgs)/VbaAppSvgs";
import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaApps.module.scss";

// One entry per tab. Order matters: the stylesheet matches each radio to its label and panel by position.
const apps = [
  {
    id: "excel",
    label: "Excel",
    Icon: VbaExcelSvg,
    heading: "Excel VBA: forms, reports and data pipelines",
    text: "Excel is where most VBA starts and where it does the most work. We turn fragile, formula-heavy workbooks into tools your whole team can trust, with forms for data entry, one-click reporting and live connections to the systems your data comes from.",
    points: [
      "Data-entry forms with real-time validation",
      "Automated reports, charts and pivot tables",
      "Connections to SQL Server, SharePoint, Dataverse and web APIs",
      "Locked-down workbooks with Admin-only data sheets",
    ],
    links: [
      {
        href: "https://www.excelexperts.com.au/custom-design-and-development",
        label: "Custom Excel design and development",
      },
      {
        href: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
        label: "Formulas or macros?",
      },
    ],
  },
  {
    id: "word",
    label: "Word",
    Icon: VbaWordSvg,
    heading: "Word VBA: popup forms, ribbons and document builders",
    text: "Word macros keep documents complete and on brand, whoever is typing. We build popup forms that fill a template for your staff, custom ribbon tabs that lock formatting down, and builders that assemble long reports from a library of approved content.",
    points: [
      "Popup forms that check mandatory fields",
      "Custom Formatting tabs and clean paste macros",
      "Document builders for long, repeating reports",
      "Content controls, document protection and PDF output",
    ],
    links: [
      {
        href: "/services/microsoft-word/popup-forms",
        label: "Popup forms for Word",
      },
      {
        href: "/services/microsoft-word/custom-toolbars-and-ribbons",
        label: "Custom toolbars and ribbons",
      },
      {
        href: "/case-studies/financial-planning-word-document-builder",
        label: "Report builder case study",
      },
    ],
  },
  {
    id: "access",
    label: "Access",
    Icon: VbaAccessSvg,
    heading: "Access VBA: the logic that makes a database work",
    text: "In Access, VBA is what turns tables into a finished application: forms, navigation, validation, document generation and exports. We build and repair that code, and when the data outgrows Access we move it to SQL Server while keeping the front end your staff already know.",
    points: [
      "Forms, menus and business rules",
      "Word and Excel documents generated from records",
      "Emails with attachments sent from the database",
      "Links to SQL Server and Azure back ends",
    ],
    links: [
      {
        href: "/services/database-development-and-solutions",
        label: "Database development and solutions",
      },
      {
        href: "https://www.accessexperts.com.au/upgrades-and-migration",
        label: "Access upgrades and migration",
      },
    ],
  },
  {
    id: "powerpoint",
    label: "PowerPoint",
    Icon: VbaPowerPointSvg,
    heading: "PowerPoint VBA: presentations that build themselves",
    text: "If the same presentation is rebuilt every month or quarter, a macro should be doing it. We generate slides from Excel or database data, apply your template and branding consistently, and handle the bulk edits nobody wants to do by hand.",
    points: [
      "Slides and charts built from Excel, Access or SQL data",
      "Branding and layouts applied automatically",
      "Bulk updates across many presentations",
      "Export to PDF and distribution by email",
    ],
    links: [
      {
        href: "/services/microsoft-powerpoint",
        label: "PowerPoint templates and automation",
      },
    ],
  },
  {
    id: "outlook",
    label: "Outlook",
    Icon: VbaOutlookSvg,
    heading: "Outlook VBA: email and calendar automation",
    text: "Outlook macros can sort, file, reply to and report on email, or send personalised messages from data held in Excel or Access. One thing to plan for: VBA runs in classic Outlook and not in the new Outlook for Windows, so we design around that from the start.",
    points: [
      "Templated emails sent from Excel, Word or Access",
      "Filing, flagging and follow-up helpers",
      "Attachments from generated Word and PDF files",
      "Power Automate, Graph or web add-in options for the new Outlook",
    ],
    links: [
      {
        href: "/services/ai-email-triage",
        label: "AI email triage",
      },
      {
        href: "/services/business-process-automation",
        label: "Business process automation",
      },
    ],
  },
];

const VbaApps = () => (
  <section className={styles.section} id="apps">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>VBA by application</span>
        <h2 className={styles.heading}>
          One language,{" "}
          <span className={styles.accent}>every Office application.</span>
        </h2>
        <p className={styles.lede}>
          Pick the application your team lives in. The same VBA skills apply
          across all of them, which is why one project can start in Excel, build
          a document in Word and finish with an email in Outlook.
        </p>
      </header>

      {/* Radios come first so `:checked ~` can reach both the labels and the panels */}
      <div
        className={styles.tabs}
        role="radiogroup"
        aria-label="Choose an Office application"
      >
        {apps.map((app, i) => (
          <input
            key={app.id}
            type="radio"
            name="vba-app"
            id={`vba-app-${app.id}`}
            className={styles.radio}
            defaultChecked={i === 0}
          />
        ))}

        <div className={styles.rail}>
          {apps.map(({ id, label, Icon }) => (
            <label key={id} htmlFor={`vba-app-${id}`} className={styles.tab}>
              <Icon className={styles.tabIcon} />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <div className={styles.panels}>
          {apps.map(({ id, Icon, heading, text, points, links }) => (
            <article key={id} className={styles.panel}>
              <Icon className={styles.watermark} />
              <h3 className={styles.panelHeading}>{heading}</h3>
              <p className={styles.panelText}>{text}</p>
              <ul className={styles.points}>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {links.map(({ href, label }) => (
                  <Link key={href} href={href} className={styles.link}>
                    {label}
                    <VbaArrowSvg />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VbaApps;
