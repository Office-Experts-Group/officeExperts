// app/microsoft-consultants-richmond/(components)/RichmondServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/richmondServices.module.scss";

// NOTE: product hrefs point at the sister domains for now (same as the other city hubs).
// Repoint each one in its migration wave.
const services = [
  {
    id: "excel",
    index: "01",
    title: "Excel Development",
    category: "Data & Reporting",
    description:
      "Excel quietly runs a huge part of most businesses: the roster, the stock sheet, the month-end pack. When those files get fragile we rebuild them as structured workbooks with VBA, Power Query and live dashboards, so the numbers are right the first time and nobody dreads opening the file.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "word",
    index: "02",
    title: "Word Automation",
    category: "Document Solutions",
    description:
      "Proposals, contracts, client reports and brand-controlled templates all take longer than they should. We build Word templates with dynamic fields, custom ribbons and one-click document generation, so every document goes out consistent, on-brand and correct.",
    href: "/services/microsoft-word",
    linkText: "Word Designers",
  },
  {
    id: "powerpoint",
    index: "03",
    title: "PowerPoint Solutions",
    category: "Presentations & Branding",
    description:
      "Pitch decks, board packs and event presentations need to look right every single time. We build locked-down brand templates, generate data-driven slides straight from Excel, and repair older decks that fall apart whenever someone edits them.",
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint Specialists",
  },
  {
    id: "access",
    index: "04",
    title: "Access & Database Development",
    category: "Database Development",
    description:
      "Plenty of Melbourne businesses still run on an Access database that somebody built years ago. We repair, speed up and extend them, or move the data across to SQL Server or the cloud in stages, without stopping the business while we do it.",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "power-platform",
    index: "05",
    title: "Power Platform",
    category: "Automation & Insight",
    description:
      "Power Apps for the forms and tools your team actually needs, Power Automate for the approvals and hand-offs that currently live in email, and Power BI to show how it is all going. Together they pull scattered data into one place the whole business can use from any device.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Experts",
  },
  {
    id: "microsoft-365",
    index: "06",
    title: "Microsoft 365 & Copilot",
    category: "Cloud & Collaboration",
    description:
      "SharePoint, Teams, Outlook and OneDrive tend to be set up once and never revisited. We tidy the structure, build the workflows and introduce Copilot sensibly, so hybrid teams stop losing files and chasing approvals.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Solutions",
  },
  {
    id: "ai-agents",
    index: "07",
    title: "AI & Custom Agent Building",
    category: "AI & Automation",
    description:
      "We design and build AI agents that work inside the Microsoft tools you already own: triaging shared inboxes, answering staff questions from your own documents, drafting routine reports and routing work to the right person. Each agent is tuned to your process, with sensible guard rails around your data.",
    href: "/services/ai-agent-development",
    linkText: "AI Agent Development",
  },
  {
    id: "custom",
    index: "08",
    title: "Custom Software & Integration",
    category: "Build & Connect",
    description:
      "When off-the-shelf software doesn’t fit, we build what does: web portals, Office add-ins, API integrations and line-of-business applications on .NET, SQL Server and Azure, wired into the systems you already run.",
    // Flattened URL (was /services/by-business-solution/custom-office-solutions) — see hand-off notes
    href: "/services/custom-office-solutions",
    linkText: "Custom Solutions",
  },
];

const RichmondServices = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 className={styles.heading}>
          The whole Microsoft stack,{" "}
          <span className={styles.headingMuted}>
            and the AI that sits on top.
          </span>
        </h2>
      </div>
    </AnimateOnScroll>

    {/* ── Service list ── */}
    <div className={styles.list}>
      {services.map((service) => (
        <AnimateOnScroll
          key={service.id}
          animation="fade-up"
          duration={0.55}
          delay={0.05}
        >
          <article className={styles.item}>
            {/* Ghost index number */}
            <div className={styles.itemIndex} aria-hidden="true">
              {service.index}
            </div>

            {/* Title + category */}
            <div className={styles.itemLeft}>
              <span className={styles.itemCategory}>{service.category}</span>
              <h3 className={styles.itemTitle}>{service.title}</h3>
            </div>

            {/* Description */}
            <p className={styles.itemDesc}>{service.description}</p>

            {/* Link */}
            <Link href={service.href} className={styles.itemLink}>
              {service.linkText}
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
            </Link>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default RichmondServices;
