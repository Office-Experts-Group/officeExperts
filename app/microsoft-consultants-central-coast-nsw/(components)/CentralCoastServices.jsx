// app/microsoft-consultants-central-coast-nsw/(components)/CentralCoastServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/centralCoastServices.module.scss";

// `area` maps to a grid-area in the stylesheet (bento layout).
// NOTE: product hrefs point at the sister domains for now (same as the other city hubs).
// Repoint each one in its migration wave.
const services = [
  {
    id: "excel",
    area: "excel",
    index: "01",
    title: "Excel Development",
    tag: "Data & Reporting",
    description:
      "The quote sheet, the job tracker, the stock list, the month-end pack: for plenty of owner-run businesses Excel is the system. We rebuild the fragile ones into structured workbooks with VBA, Power Query and live dashboards, so the numbers hold up as the business grows.",
    chips: ["VBA & macros", "Power Query", "Dashboards", "Data models"],
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "power-platform",
    area: "power",
    index: "02",
    title: "Power Platform",
    tag: "Apps, Flows & Insight",
    description:
      "Power Apps for job sheets and site checklists that work on a phone, Power Automate for approvals and notifications that no longer depend on someone remembering, and Power BI to show how it is all tracking. A strong fit for teams who are rarely all in one place.",
    chips: ["Power Apps", "Power Automate", "Power BI"],
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Experts",
  },
  {
    id: "ai-agents",
    area: "ai",
    index: "03",
    title: "AI & Custom Agent Building",
    tag: "AI & Automation",
    description:
      "Practical AI, not a science project. We build agents inside Microsoft 365 that triage the shared inbox, answer staff questions from your own documents, draft routine reports and pass enquiries to the right person. Each one is tuned to your process, with clear guard rails around your data.",
    chips: ["Copilot Studio", "Inbox triage", "Document Q&A", "Process agents"],
    href: "/services/ai-agent-development",
    linkText: "AI Agent Development",
  },
  {
    id: "word",
    area: "word",
    index: "04",
    title: "Word Automation",
    tag: "Documents",
    description:
      "Quotes, contracts, care plans and compliance reports. We build Word templates with content controls, smart fields and one-click generation, so documents come out consistent and on-brand no matter who is typing.",
    chips: ["Templates", "Content controls", "Automation"],
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    area: "access",
    index: "05",
    title: "Access & Databases",
    tag: "Data Systems",
    description:
      "If the business still runs on an Access database somebody built years ago, you are in good company. We steady it and speed it up, then move to SQL Server or the cloud in stages when you are ready.",
    chips: ["Repair & tune", "SQL Server", "Staged migration"],
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "powerpoint",
    area: "ppt",
    index: "06",
    title: "PowerPoint",
    tag: "Presentations",
    description:
      "Brand-safe templates, reporting decks built straight from your data, and tidy-ups of presentations that fall apart whenever someone edits them.",
    chips: ["Templates", "Auto-built decks"],
    href: "/services/microsoft-powerpoint",
    linkText: "PowerPoint Specialists",
  },
  {
    id: "microsoft-365",
    area: "m365",
    index: "07",
    title: "Microsoft 365 & Copilot",
    tag: "Cloud & Collaboration",
    description:
      "Teams, SharePoint, OneDrive, Outlook and Copilot, set up so people can actually find things and approvals keep moving. Especially useful for hybrid teams split between home, site and a city office.",
    chips: ["SharePoint", "Teams", "Copilot"],
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Solutions",
  },
  {
    id: "custom",
    area: "custom",
    index: "08",
    title: "Custom Software & Integration",
    tag: "Build & Connect",
    description:
      "When off-the-shelf software does not fit, we build what does: web portals, Office add-ins, API integrations and line-of-business applications on .NET, SQL Server and Azure, wired into the systems you already use.",
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

const CentralCoastServices = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>Services</p>
          <h2 className={styles.heading}>
            Start with the thing{" "}
            <span className={styles.headingAccent}>that&rsquo;s slowing you down.</span>
          </h2>
        </div>
        <p className={styles.headerNote}>
          We cover every Microsoft platform, plus the AI that connects them.
          Pick the one that hurts most and we will take it from there.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Bento grid ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
      <div className={styles.grid}>
        {services.map((service) => (
          <article
            key={service.id}
            className={`${styles.tile} ${styles[service.area]}`}
          >
            <div className={styles.tileTop}>
              <span className={styles.tileIndex} aria-hidden="true">
                {service.index}
              </span>
              <span className={styles.tileTag}>{service.tag}</span>
            </div>

            <h3 className={styles.tileTitle}>{service.title}</h3>
            <p className={styles.tileDesc}>{service.description}</p>

            <div className={styles.tileFoot}>
              <ul className={styles.chips}>
                {service.chips.map((chip) => (
                  <li key={chip} className={styles.chip}>
                    {chip}
                  </li>
                ))}
              </ul>
              <Link href={service.href} className={styles.tileLink}>
                {service.linkText}
                <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </AnimateOnScroll>
  </section>
);

export default CentralCoastServices;
