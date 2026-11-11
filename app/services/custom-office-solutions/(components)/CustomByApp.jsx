// app/services/custom-office-solutions/(components)/CustomByApp.jsx
// What we customise in each Office app. Unordered cards (not numbered) because
// the apps aren't a sequence. Each card links to the page that covers that app in depth.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customByApp.module.scss)
import styles from "@/styles/customByApp.module.scss";
// Original app glyphs (not Microsoft product icons)
import {
  DocumentIcon,
  GridIcon,
  DatabaseIcon,
  MailIcon,
  SlideIcon,
  FlowIcon,
} from "../(svgs)/AppIcons";

const apps = [
  {
    Icon: DocumentIcon,
    name: "Word",
    summary: "Templates, forms and documents that protect your brand.",
    items: [
      "Branded templates with locked styles",
      "Fill-in forms built with content controls",
      "Quick Parts and building block libraries",
      "Custom ribbon tabs and document assembly",
    ],
    href: "/services/microsoft-word",
    linkText: "Microsoft Word solutions",
  },
  {
    Icon: GridIcon,
    name: "Excel",
    summary: "Workbooks that calculate, report and update themselves.",
    items: [
      "Automated reports and dashboards",
      "Costing, quoting and pricing models",
      "User forms that guide data entry",
      "Power Query, Python in Excel and VBA",
    ],
    href: "https://www.excelexperts.com.au",
    linkText: "Excel development",
  },
  {
    Icon: DatabaseIcon,
    name: "Access",
    summary: "Databases for the information your business runs on.",
    items: [
      "Custom forms, queries and reports",
      "Split databases shared by a team",
      "SQL Server and Azure back ends",
      "Upgrades from older Access versions",
    ],
    href: "/services/database-development-and-solutions",
    linkText: "Database development",
  },
  {
    Icon: MailIcon,
    name: "Outlook",
    summary: "Email that files, routes and drafts itself.",
    items: [
      "Shared templates and automated filing",
      "Personalised mail merge from Excel or Access",
      "Web add-ins that work in the new Outlook",
      "AI agents that triage and draft replies",
    ],
    href: "/services/ai-agent-development",
    linkText: "AI agent development",
  },
  {
    Icon: SlideIcon,
    name: "PowerPoint",
    summary: "Presentations that stay on-brand, whoever builds them.",
    items: [
      "Slide masters and custom layouts",
      "Branded slide, icon and image libraries",
      "Decks generated from Excel data",
      "Charts that update from source files",
    ],
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint presentations",
  },
  {
    Icon: FlowIcon,
    name: "Power Platform",
    summary: "Apps and workflows that reach across Microsoft 365.",
    items: [
      "Power Apps for forms and approvals",
      "Power Automate workflows",
      "Power BI reports and dashboards",
      "SharePoint lists and Teams integration",
    ],
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform consulting",
  },
];

// Small right chevron for the card links, coloured through currentColor
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomByApp = () => {
  return (
    <section
      className={styles.section}
      id="office-apps"
      aria-labelledby="office-apps-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>What we customise</span>
          <h2 id="office-apps-heading" className={styles.heading}>
            One team for every app{" "}
            <span className={styles.accent}>in the Office suite</span>
          </h2>
          <p>
            Most of our projects touch more than one app. A quote is priced in
            Excel, becomes a branded Word proposal, is emailed from Outlook and
            logged in a database. Because our team covers the whole suite, every
            piece is built to work with the next one.
          </p>
        </header>

        <div className={styles.grid}>
          {apps.map(({ Icon, name, summary, items, href, linkText }) => (
            <article key={name} className={styles.card}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.summary}>{summary}</p>
              <ul className={styles.items}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={href} className={styles.cardLink}>
                {linkText}
                <ChevronRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomByApp;
