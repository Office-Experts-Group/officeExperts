// app/services/microsoft-365-api-integration/(components)/ApiByProduct.jsx
// What each Microsoft app can do once connected. Server component: no client JS,
// every card and link is in the initial HTML.

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// Generic line icons keyed by product id, plus the shared link arrow
import { productIcons } from "../(svgs)/ProductIcons";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

import styles from "@/styles/apiByProduct.module.scss";

// NOTE: Excel and Power Platform hrefs still point at the sister domains.
// Repoint each one to its Office Experts URL in that domain's migration wave.
const products = [
  {
    id: "word",
    title: "Microsoft Word",
    tag: "Documents",
    description:
      "Word add-ins built on the Office JavaScript API read and write content controls, tables, headers and tracked changes, so proposals, contracts and reports assemble themselves from your CRM, database or a guided form. On the server side, Microsoft Graph creates, stores and converts Word files to PDF in SharePoint and OneDrive without anyone opening Word.",
    points: [
      "Document assembly from live business data",
      "Template and content control automation",
      "Generate, convert to PDF and file automatically",
    ],
    href: "/services/microsoft-word",
    linkText: "Microsoft Word solutions",
  },
  {
    id: "excel",
    title: "Microsoft Excel",
    tag: "Data & calculation",
    description:
      "Excel's calculation engine is available through the Microsoft Graph REST API, so a web app or mobile form can write rows into a workbook table, run Excel's worksheet functions and read the answer back. Inside Excel, Office.js add-ins and custom functions bring outside data into the grid and replace VBA that won't run on the web or Mac.",
    points: [
      "Read and write tables, ranges and charts in .xlsx files",
      "Use a workbook as a calculation service for other apps",
      "Custom functions and task panes that pull live data",
    ],
    href: "https://www.excelexperts.com.au/add-in-development",
    linkText: "Excel add-in development",
  },
  {
    id: "outlook",
    title: "Outlook & Teams",
    tag: "Mail & messaging",
    description:
      "Email and chat are where most requests arrive. Web-based Outlook add-ins run in the new Outlook for Windows, on the web and on Mac, which matters because new Outlook no longer loads the old COM add-ins. Graph lets your systems send mail, file attachments, book meetings and post Teams messages, and change notifications tell your app the moment something arrives.",
    points: [
      "Outlook add-ins that work in new and classic Outlook",
      "Emails and attachments filed automatically",
      "Teams alerts, approvals and adaptive cards",
    ],
    href: "/services/ai-email-triage",
    linkText: "AI email triage",
  },
  {
    id: "powerpoint",
    title: "PowerPoint",
    tag: "Presentations",
    description:
      "PowerPoint add-ins insert approved slides from a library, apply the right layouts and keep every deck on brand. Server-side scripts go further and build whole decks from Power BI or database figures, so monthly reporting packs are generated rather than pasted together slide by slide.",
    points: [
      "Slide libraries with on-brand insertion",
      "Decks built automatically from report data",
    ],
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint services",
  },
  {
    id: "sharepoint",
    title: "SharePoint & OneDrive",
    tag: "Files & lists",
    description:
      "SharePoint is the document store behind most of these integrations. Through Graph we create sites and folders, apply metadata, move files between libraries and keep lists in sync with outside systems, always respecting the access each person already has.",
    points: [
      "Automatic site and folder set-up for new jobs",
      "Metadata, lists and permissions managed from your apps",
      "Field apps that sync back to SharePoint",
    ],
    href: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development",
    linkText: "SharePoint development",
  },
  {
    id: "powerPlatform",
    title: "Power Platform",
    tag: "Apps, flows & insight",
    description:
      "Dataverse has a full Web API, and Power Automate's library of more than 1,400 connectors (plus custom connectors where none exist) links Microsoft 365 to most business systems. Power BI's REST API, including the ExecuteQueries endpoint, lets another app or a flow query a published semantic model directly, so reports, emails and decks all quote the same numbers.",
    points: [
      "Dataverse Web API and custom connectors",
      "Query Power BI semantic models from any app",
      "Power Pages portals for customers and suppliers",
    ],
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
    linkText: "Power Automate solutions",
  },
  {
    id: "access",
    title: "Access & SQL Server",
    tag: "Databases",
    description:
      "Access has no cloud API of its own, so integration starts with where the data lives. We move tables to SQL Server or Azure SQL and keep the Access forms your team knows, link to Dataverse when Power Apps need the same records, and add VBA that calls REST APIs directly. Once the data is on a server, web portals, Power BI and Power Automate can all reach it.",
    points: [
      "SQL Server and Azure SQL back ends",
      "Shared records with Power Apps through Dataverse",
      "Web front ends over the same database",
    ],
    href: "/services/sql-server-and-access-integration",
    linkText: "SQL Server and Access integration",
  },
];

// Pointer card only: the 3rd party content lives on its own page
const otherSystems = {
  id: "other",
  title: "Xero, MYOB, Salesforce and more",
  tag: "Other systems",
  description:
    "Microsoft 365 is rarely the only system a business runs. Connecting Word, Excel and Outlook to accounting packages, CRMs, payroll and industry software is a separate piece of work, with its own authentication, data mapping and error handling, so it has a dedicated page rather than a short section here.",
  points: [
    "Accounting, payroll and CRM platforms",
    "Industry and line-of-business software",
    "Custom and older systems with REST or SOAP APIs",
  ],
  href: "/services/3rd-party-application-or-office-integration",
  linkText: "3rd party app integration",
};

// Renders one product card. Kept separate so the map below stays readable.
// The optional pointer flag switches on the $accent background variant.
const ProductCard = ({ product, pointer = false }) => (
  <article
    className={pointer ? `${styles.card} ${styles.pointer}` : styles.card}
  >
    <div className={styles.cardHead}>
      <span className={styles.icon}>
        {React.createElement(productIcons[product.id])}
      </span>
      <div>
        <p className={styles.tag}>{product.tag}</p>
        <h3 className={styles.title}>{product.title}</h3>
      </div>
    </div>

    <p className={styles.desc}>{product.description}</p>

    <ul className={styles.points}>
      {product.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>

    <Link href={product.href} className={styles.link}>
      {product.linkText}
      <ArrowIcon />
    </Link>
  </article>
);

const ApiByProduct = () => (
  <section className={styles.section} id="by-application">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>By application</p>
          <h2 className={styles.heading}>
            What each Microsoft app can do{" "}
            <span className={styles.accent}>once it&rsquo;s connected.</span>
          </h2>
          <p className={styles.text}>
            Every Office application exposes a different set of APIs. These are
            the integrations we build most often for each one, and what is
            realistic with the tools Microsoft offers today.
          </p>
        </header>
      </AnimateOnScroll>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* Accent pointer card, closes the grid on an even count */}
        <ProductCard product={otherSystems} pointer />
      </div>
    </div>
  </section>
);

export default ApiByProduct;
