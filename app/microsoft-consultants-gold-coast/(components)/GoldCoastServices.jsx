// app/microsoft-consultants-gold-coast/(components)/GoldCoastServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/goldCoastServices.module.scss";

// Two groups side by side: the Office apps, and the platform / automation / AI layer.
// NOTE: product hrefs point at the sister domains for now (same as the other city hubs).
// Repoint each one in its migration wave.
const groups = [
  {
    id: "office",
    label: "The Office toolbox",
    note: "Fix, tidy and automate the tools your team already lives in.",
    items: [
      {
        id: "excel",
        title: "Excel Development",
        description:
          "Quotes, rosters, property and project trackers, month-end packs. We rebuild fragile workbooks with VBA, Power Query and live dashboards so the numbers hold up as the business grows.",
        chips: ["VBA & macros", "Power Query", "Dashboards"],
        href: "https://www.excelexperts.com.au",
        linkText: "Excel Programmers",
      },
      {
        id: "word",
        title: "Word Automation",
        description:
          "Contracts, proposals, reports and letters generated from controlled templates with content controls and smart fields, so the output is consistent whoever is typing.",
        chips: ["Templates", "Content controls", "Automation"],
        href: "/services/microsoft-word",
        linkText: "Word Designers",
      },
      {
        id: "access",
        title: "Access & Databases",
        description:
          "Repair, speed up and secure the Access database the business depends on, then move to SQL Server or the cloud in stages when you are ready.",
        chips: ["Repair & tune", "SQL Server", "Staged migration"],
        href: "https://www.accessexperts.com.au",
        linkText: "Access Developers",
      },
      {
        id: "powerpoint",
        title: "PowerPoint",
        description:
          "On-brand templates, pitch and reporting decks built from your data, and rescue jobs for presentations that break whenever someone edits them.",
        chips: ["Templates", "Auto-built decks"],
        href: "/services/microsoft-powerpoint",
        linkText: "PowerPoint Specialists",
      },
    ],
  },
  {
    id: "platform",
    label: "Cloud, automation & AI",
    note: "Connect the pieces, remove the retyping, and put AI to work on the repeat jobs.",
    items: [
      {
        id: "power-platform",
        title: "Power Platform",
        description:
          "Power Apps for forms, inspections and bookings that work on a phone, Power Automate for approvals and hand-offs, and Power BI for reporting that people actually open.",
        chips: ["Power Apps", "Power Automate", "Power BI"],
        href: "https://www.powerplatformexperts.com.au",
        linkText: "Power Platform Experts",
      },
      {
        id: "ai-agents",
        title: "AI & Custom Agent Building",
        feature: true,
        description:
          "Agents built inside Microsoft 365 and Copilot Studio that triage a shared inbox, answer customer and staff questions from your own documents, draft routine reports and pass enquiries to the right person. Scoped to one job first, with clear limits on data access.",
        chips: [
          "Copilot Studio",
          "Inbox triage",
          "Document Q&A",
          "Process agents",
        ],
        href: "/services/ai-agent-development",
        linkText: "AI Agent Development",
      },
      {
        id: "microsoft-365",
        title: "Microsoft 365 & Copilot",
        description:
          "SharePoint, Teams, OneDrive, Outlook and Copilot set up so staff, contractors and agents can find what they need, wherever they are working that day.",
        chips: ["SharePoint", "Teams", "Copilot"],
        href: "/services/microsoft-office-365",
        linkText: "Microsoft 365 Solutions",
      },
      {
        id: "custom",
        title: "Custom Software & Integration",
        description:
          "Portals, Office add-ins, API integrations and line-of-business tools on .NET, SQL Server and Azure, built when packaged software does not fit.",
        chips: [".NET", "Azure", "APIs", "Add-ins"],
        // Flattened URL (was /services/by-business-solution/custom-office-solutions): see hand-off notes
        href: "/services/custom-office-solutions",
        linkText: "Custom Solutions",
      },
    ],
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

const GoldCoastServices = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 className={styles.heading}>
          Every Microsoft platform,{" "}
          <span className={styles.headingAccent}>
            plus the AI that ties them together.
          </span>
        </h2>
      </div>
    </AnimateOnScroll>

    <div className={styles.groups}>
      {groups.map((g, gi) => (
        <AnimateOnScroll
          key={g.id}
          animation="fade-up"
          duration={0.6}
          delay={gi * 0.08}
        >
          <div
            className={`${styles.group} ${g.id === "platform" ? styles.platform : ""}`}
          >
            <div className={styles.groupHead}>
              <h3 className={styles.groupTitle}>{g.label}</h3>
              <p className={styles.groupNote}>{g.note}</p>
            </div>

            <ul className={styles.list}>
              {g.items.map((item) => (
                <li
                  key={item.id}
                  className={`${styles.item} ${item.feature ? styles.feature : ""}`}
                >
                  <h4 className={styles.title}>{item.title}</h4>
                  <p className={styles.desc}>{item.description}</p>
                  <ul className={styles.chips}>
                    {item.chips.map((c) => (
                      <li key={c} className={styles.chip}>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className={styles.link}>
                    {item.linkText}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default GoldCoastServices;
