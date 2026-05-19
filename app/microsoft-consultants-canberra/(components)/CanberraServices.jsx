// app/microsoft-consultants-canberra/(components)/CanberraServices.jsx
"use client";
// This component uses client-side state for the accordion interaction.
// The rest of the page is SSR; this section is the only client island.

import React, { useState } from "react";
import Link from "next/link";

// Import compiled CSS module
import styles from "../../../styles/canberraServices.module.css";

// Services with Canberra-specific descriptions referencing government and ACT context
const services = [
  {
    id: "excel",
    index: "01",
    title: "Microsoft Excel",
    category: "Data & Reporting",
    description:
      "Federal departments and growing businesses generate enormous volumes of data that flow through Excel. We build the automation, VBA macros, pivot dashboards and custom reporting workbooks that make that data manageable.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Experts",
  },
  {
    id: "word",
    index: "02",
    title: "Microsoft Word",
    category: "Document Solutions",
    description:
      "Official correspondence, policy documents, ministerial briefs, tender responses, Canberra produces more structured written output per capita than anywhere else in Australia. We build the Word templates, styles, content controls and automation that enforce correct formatting at scale.",
    href: "https://www.wordexperts.com.au",
    linkText: "Word Experts",
  },
  {
    id: "access",
    index: "03",
    title: "Microsoft Access",
    category: "Database Development",
    description:
      "Canberra has more mission-critical Access databases than most cities want to admit. Many were built 10 or 15 years ago by someone who has since moved on, and they are holding together operational processes that can't afford to break. We audit, repair, optimise and help migrate them to SQL Server or Azure.",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Experts",
  },
  {
    id: "power-platform",
    index: "04",
    title: "Power Platform",
    category: "Automation & Intelligence",
    description:
      "Power Automate workflows that replace the email chains and manual handoffs between teams. Power BI dashboards connected to departmental data sources for real-time reporting. Power Apps that give field staff or internal teams a proper interface instead of a shared spreadsheet. This is where the most significant efficiency gains are available to Canberra organisations right now.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Experts",
  },
  {
    id: "office-365",
    index: "05",
    title: "Microsoft 365",
    category: "Cloud & Managed Services",
    description:
      "Most Canberra organisations are already paying for Microsoft 365 capabilities they are not using. We look at your workflows, identify what can be automated or simplified through your existing subscription, and implement it. We also handle 365 migrations, SharePoint configuration and Teams governance.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Consulting",
  },
  {
    id: "custom",
    index: "06",
    title: "Custom Development",
    category: "Integration & Build",
    description:
      "When standard Microsoft tools need to connect to industry specific applications we make it happen. Add-ins, COM objects, API connectors and bespoke applications built within the Microsoft stack. Everything is documented and designed to be supportable by your own team going forward.",
    href: "/services/by-business-solution/custom-office-solutions",
    linkText: "Custom Office Solutions",
  },
];

const ChevronIcon = ({ open }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.28s ease",
      flexShrink: 0,
    }}
  >
    <path
      d="M4 6.5l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
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

const CanberraServices = () => {
  // Track which service accordion panel is open; null = all closed
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>Services</p>
          <h2 className={styles.heading}>
            What we deliver{" "}
            <span className={styles.headingMuted}>in our Capital.</span>
          </h2>
        </div>
      </div>

      {/* ── Accordion list ── */}
      <div className={styles.list} role="list">
        {services.map((service) => {
          const isOpen = openId === service.id;
          return (
            <div
              key={service.id}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              role="listitem"
            >
              {/* Trigger row */}
              <button
                className={styles.trigger}
                onClick={() => toggle(service.id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${service.id}`}
              >
                <span className={styles.triggerIndex} aria-hidden="true">
                  {service.index}
                </span>
                <span className={styles.triggerMeta}>
                  <span className={styles.triggerCategory}>
                    {service.category}
                  </span>
                  <span className={styles.triggerTitle}>{service.title}</span>
                </span>
                <span
                  className={`${styles.triggerChevron} ${isOpen ? styles.triggerChevronOpen : ""}`}
                >
                  <ChevronIcon open={isOpen} />
                </span>
              </button>

              {/* Expandable panel */}
              <div
                id={`panel-${service.id}`}
                className={styles.panel}
                role="region"
                aria-hidden={!isOpen}
                style={{ display: isOpen ? "block" : "none" }}
              >
                <p className={styles.panelBody}>{service.description}</p>
                <Link href={service.href} className={styles.panelLink}>
                  {service.linkText}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CanberraServices;
