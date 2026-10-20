// app/microsoft-consultants-adelaide/(components)/AdelaideServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import { serviceIcons } from "../(svgs)/ServiceIcons";

import styles from "@/styles/adelaideServices.module.scss";

// NOTE: product hrefs point at the sister domains for now (same as the other city hubs).
// Repoint each one in its migration wave.
const services = [
  {
    id: "excel",
    title: "Excel Development",
    tag: "Data & Reporting",
    description:
      "Budgets, rosters, costing models and month-end packs often live in one workbook that only one person dares to touch. We make them dependable: VBA that does the repetitive work, Power Query that pulls the data in cleanly, and dashboards that update themselves.",
    chips: ["VBA & macros", "Power Query", "Dashboards", "Data models"],
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "power-platform",
    title: "Power Platform",
    tag: "Apps, Flows & Insight",
    description:
      "Power Apps for forms and checklists that suit a phone or tablet (including offline capture for sites with patchy coverage), Power Automate for approvals and hand-offs, and Power BI for reporting leaders actually read.",
    chips: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Experts",
  },
  {
    id: "ai-agents",
    title: "AI & Custom Agent Building",
    tag: "AI & Automation",
    feature: true,
    description:
      "Practical agents built inside Microsoft 365 and Copilot Studio: triage a shared inbox, answer staff questions from your own policies and procedures, draft routine reports, or route enquiries to the right person. Each one is scoped to a single job first, with clear boundaries around your data.",
    chips: ["Copilot Studio", "Inbox triage", "Document Q&A", "Process agents"],
    href: "/services/ai-agent-development",
    linkText: "AI Agent Development",
  },
  {
    id: "word",
    title: "Word Automation",
    tag: "Documents",
    description:
      "Tenders, contracts, reports and board papers built from controlled templates with content controls and smart fields, so the 40th document looks like the first and nobody is copying old files to start a new one.",
    chips: ["Templates", "Content controls", "Document generation"],
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    title: "Access & Databases",
    tag: "Data Systems",
    description:
      "Longstanding Access databases are common and often still doing a good job. We repair, speed up and secure them, then move to SQL Server or a cloud platform in stages if and when it makes sense.",
    chips: ["Repair & tune", "SQL Server", "Staged migration"],
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "powerpoint",
    title: "PowerPoint",
    tag: "Presentations",
    description:
      "On-brand templates, decks assembled straight from your reporting data, and rescue jobs for presentations that break every time someone opens them on another computer.",
    chips: ["Templates", "Auto-built decks"],
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint Specialists",
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 & Copilot",
    tag: "Cloud & Collaboration",
    description:
      "SharePoint, Teams, OneDrive, Outlook and Copilot configured so files are findable, permissions make sense and the head office and regional sites work from the same place.",
    chips: ["SharePoint", "Teams", "Copilot", "Governance"],
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Solutions",
  },
  {
    id: "custom",
    title: "Custom Software & Integration",
    tag: "Build & Connect",
    description:
      "When packaged software does not fit, we build what does: portals, Office add-ins, API integrations and line-of-business tools on .NET, SQL Server and Azure, connected to the systems you already run.",
    chips: [".NET", "Azure", "APIs", "Add-ins"],
    // Flattened URL (was /services/by-business-solution/custom-office-solutions): see hand-off notes
    href: "/services/custom-office-solutions",
    linkText: "Custom Solutions",
  },
];

const Arrow = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 7h8M7 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AdelaideServices = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>What we build</p>
        <h2 className={styles.heading}>
          Eight disciplines.{" "}
          <span className={styles.headingAccent}>One team to call.</span>
        </h2>
        <p className={styles.headerNote}>
          Most Adelaide projects touch more than one of these. You explain the
          problem once and we choose the right mix.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Card stack: plain elements so position: sticky works ── */}
    <div className={styles.stack}>
      {services.map((service, i) => (
        <article
          key={service.id}
          className={`${styles.card} ${service.feature ? styles.feature : ""}`}
          style={{ "--i": i }}
        >
          <span className={styles.icon} aria-hidden="true">
            {React.createElement(serviceIcons[service.id])}
          </span>

          <div className={styles.main}>
            <p className={styles.tag}>{service.tag}</p>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.desc}>{service.description}</p>
          </div>

          <div className={styles.side}>
            <ul className={styles.chips}>
              {service.chips.map((chip) => (
                <li key={chip} className={styles.chip}>
                  {chip}
                </li>
              ))}
            </ul>
            <Link href={service.href} className={styles.link}>
              {service.linkText}
              <Arrow />
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default AdelaideServices;
