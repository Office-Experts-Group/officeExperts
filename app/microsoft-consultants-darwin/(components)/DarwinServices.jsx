// app/microsoft-consultants-darwin/(components)/DarwinServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/darwinServices.module.scss";

// CSS-only tabs: radio inputs + :checked, so every panel stays in the server HTML.
// NOTE: product hrefs point at the sister domains for now (same as the other city hubs).
// Repoint each one in its migration wave.
const services = [
  {
    id: "excel",
    short: "Excel",
    title: "Excel Development",
    tag: "Data & Reporting",
    description:
      "Tender pricing, job costing, fleet and asset lists, wet-season production tracking: much of the Territory's day-to-day numbers sit in Excel. We make those workbooks dependable, with VBA to automate the repeat work, Power Query to pull data in cleanly and dashboards that update themselves.",
    points: ["VBA & macros", "Power Query", "Dashboards", "Data models"],
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "power-platform",
    short: "Power Platform",
    title: "Power Platform",
    tag: "Apps, Flows & Insight",
    description:
      "Power Apps for site inspections, safety checklists and field reports that work on a phone or tablet and can capture data offline, then sync when the connection returns. Power Automate for approvals and notifications, and Power BI for reporting back to head office.",
    points: ["Power Apps", "Offline capture", "Power Automate", "Power BI"],
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Experts",
  },
  {
    id: "ai-agents",
    short: "AI & Agents",
    title: "AI & Custom Agent Building",
    tag: "AI & Automation",
    description:
      "Agents built inside Microsoft 365 and Copilot Studio that do one job well: sort and route the shared inbox, answer staff questions from your own policies and procedures, draft routine reports, or pre-fill forms from incoming enquiries. Scoped carefully, with clear boundaries around your data.",
    points: [
      "Copilot Studio",
      "Inbox triage",
      "Document Q&A",
      "Process agents",
    ],
    href: "/services/ai-agent-development",
    linkText: "AI Agent Development",
  },
  {
    id: "word",
    short: "Word",
    title: "Word Automation",
    tag: "Documents",
    description:
      "Tenders, grant applications, safety plans, contracts and reports built from controlled templates with content controls and smart fields, so the document is consistent and on-brand regardless of who writes it.",
    points: ["Templates", "Content controls", "Document generation"],
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    short: "Access",
    title: "Access & Databases",
    tag: "Data Systems",
    description:
      "Plenty of Territory organisations still run on an Access database built years ago. We stabilise it, speed it up and secure it, then move to SQL Server or a cloud platform in stages when you are ready.",
    points: ["Repair & tune", "SQL Server", "Staged migration"],
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "powerpoint",
    short: "PowerPoint",
    title: "PowerPoint",
    tag: "Presentations",
    description:
      "On-brand templates, board and funding decks assembled straight from your reporting data, and repairs for presentations that fall apart on another machine.",
    points: ["Templates", "Auto-built decks"],
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint Specialists",
  },
  {
    id: "microsoft-365",
    short: "Microsoft 365",
    title: "Microsoft 365 & Copilot",
    tag: "Cloud & Collaboration",
    description:
      "SharePoint, Teams, OneDrive, Outlook and Copilot configured so teams in town, on site and in regional offices share one set of files, with sensible permissions and backups that do not depend on a single office.",
    points: ["SharePoint", "Teams", "Copilot", "Governance"],
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Solutions",
  },
  {
    id: "custom",
    short: "Custom Software",
    title: "Custom Software & Integration",
    tag: "Build & Connect",
    description:
      "When off-the-shelf software does not fit, we build what does: portals, Office add-ins, API integrations and line-of-business tools on .NET, SQL Server and Azure, connected to the systems you already use.",
    points: [".NET", "Azure", "APIs", "Add-ins"],
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

const DarwinServices = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 className={styles.heading}>
          Pick a platform.{" "}
          <span className={styles.headingAccent}>We&rsquo;ll start there.</span>
        </h2>
      </div>
    </AnimateOnScroll>

    {/* Inputs must be siblings that come BEFORE .layout for the :checked selectors */}
    <div className={styles.tabs}>
      {services.map((s, i) => (
        <input
          key={s.id}
          type="radio"
          name="darwin-service"
          id={`darwin-tab-${s.id}`}
          className={styles.radio}
          defaultChecked={i === 0}
          aria-label={s.title}
        />
      ))}

      <div className={styles.layout}>
        <div className={styles.tabList}>
          {services.map((s, i) => (
            <label
              key={s.id}
              htmlFor={`darwin-tab-${s.id}`}
              className={styles.tab}
            >
              <span className={styles.tabNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.short}
            </label>
          ))}
        </div>

        <div className={styles.panels}>
          {services.map((s) => (
            <article key={s.id} className={styles.panel}>
              <p className={styles.tag}>{s.tag}</p>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              <ul className={styles.points}>
                {s.points.map((p) => (
                  <li key={p} className={styles.point}>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={s.href} className={styles.link}>
                {s.linkText}
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DarwinServices;
