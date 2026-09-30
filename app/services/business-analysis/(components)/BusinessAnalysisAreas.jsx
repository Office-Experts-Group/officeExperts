// app/services/business-analysis/(components)/BusinessAnalysisAreas.jsx

// Next.js client-side navigation for internal routes
import Link from "next/link";

// Compiled CSS module (source: styles/businessAnalysisAreas.module.scss)
import styles from "../../../../styles/businessAnalysisAreas.module.css";

// Six business areas around one hub ("one joined-up picture")
import { WorkflowHubSvg } from "../(svgs)/WorkflowHubSvg";

// Unordered, grouped by business area. Each links to the service that
// delivers it, which may live on another site in the group.
const areas = [
  {
    name: "Documents & reporting",
    body: "Proposal generation, board and committee reports, brand compliance, templates across multiple entities, document assembly from data.",
    links: [
      {
        label: "Corporate template solutions",
        href: "https://www.wordexperts.com.au/corporate-global-template-solution",
      },
      {
        label: "Mail merge",
        href: "https://www.wordexperts.com.au/mail-merge",
      },
      {
        label: "Copilot and AI templates",
        href: "https://www.wordexperts.com.au/copilot-and-ai-templates",
      },
    ],
  },
  {
    name: "Finance, data & analytics",
    body: "Costing models, forecasting, consolidating data from multiple sites or suppliers, moving reporting out of fragile spreadsheets.",
    links: [
      {
        label: "Excel custom development",
        href: "https://www.excelexperts.com.au/custom-design-and-development",
      },
      {
        label: "Excel to Power BI migration",
        href: "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
      },
      {
        label: "Microsoft Fabric",
        href: "https://www.powerplatformexperts.com.au/microsoft-fabric",
      },
    ],
  },
  {
    name: "Operations & line-of-business systems",
    body: "Bookings, job management, CRM, inspections, quoting, compliance registers: the systems your business actually runs on.",
    links: [
      {
        label: "Database development",
        href: "/services/by-business-solution/database-development-and-solutions",
      },
      {
        label: "SQL Server back ends",
        href: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
      },
      {
        label: "Power Apps",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      },
    ],
  },
  {
    name: "Workflow & approvals",
    body: "Handoffs between people and teams, approval chains, onboarding, project setup, follow-ups and escalations.",
    links: [
      {
        label: "Business process automation",
        href: "/services/microsoft-office-365/business-process-automation",
      },
      {
        label: "Power Automate",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      },
      {
        label: "SharePoint",
        href: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development",
      },
    ],
  },
  {
    name: "Customer service & communications",
    body: "Enquiry handling, ticket triage, email routing, client portals and self-service.",
    links: [
      { label: "AI email triage", href: "/services/ai-email-triage" },
      {
        label: "Power Pages",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
      },
      {
        label: "Online solutions",
        href: "/services/by-business-solution/online-solutions",
      },
    ],
  },
  {
    name: "Integration & legacy systems",
    body: "Connecting Microsoft 365 to your accounting, CRM or industry software, and modernising systems that have outgrown their platform.",
    links: [
      {
        label: "Microsoft 365 API integration",
        href: "/microsoft-365-api-integration",
      },
      {
        label: "Azure cloud solutions",
        href: "/services/by-business-solution/cloud-based-solutions-with-azure",
      },
      {
        label: "Access upgrades and migration",
        href: "https://www.accessexperts.com.au/upgrades-and-migration",
      },
      { label: ".NET development", href: "/services/microsoft-dot-net" },
    ],
  },
];

// Renders one service link: <Link> for this site, <a> for the other four
const renderServiceLink = ({ label, href }) => (
  <li key={href}>
    {href.startsWith("/") ? (
      <Link href={href} className={styles.link}>
        {label}
      </Link>
    ) : (
      <a href={href} className={styles.link}>
        {label}
      </a>
    )}
  </li>
);

const BusinessAnalysisAreas = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <header className={styles.intro}>
            <span className={styles.eyebrow}>What we analyse</span>
            <h2 className={styles.heading}>
              Unsure how to tackle an issue?{" "}
              <span className={styles.accent}>
                We know the options available to solve it
              </span>
            </h2>
            <p className={styles.lead}>
              We don't just hyper-focus on one pain point, we try to understand
              the processes, information and people involved, then consider the
              different ways the problem could be solved. Our experience across
              a broad range of Microsoft technologies and business solutions
              means we can weigh up those options and identify an approach that
              is practical, scalable and appropriate for your business.
            </p>
          </header>
          <div className={styles.visual}>
            <WorkflowHubSvg />
          </div>
        </div>

        <ul className={styles.rows}>
          {areas.map((area) => (
            <li key={area.name} className={styles.row}>
              <h3 className={styles.name}>{area.name}</h3>
              <p className={styles.body}>{area.body}</p>
              <ul className={styles.links} aria-label={`${area.name} services`}>
                {area.links.map(renderServiceLink)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BusinessAnalysisAreas;
