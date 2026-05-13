// microsoft-consultants-melbourne/(components)/MelbourneServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module
import styles from "../../../styles/melbourneServices.module.css";

const services = [
  {
    id: "excel",
    index: "01",
    title: "Microsoft Excel",
    category: "Data & Reporting",
    description:
      "Spreadsheets doing jobs they were never built for are one of the most common problems we see in Melbourne businesses. We replace brittle manual workbooks with various solutions, custom automation, VBA, pivot reporting, dashboards and add-ins built to last.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "word",
    index: "02",
    title: "Microsoft Word",
    category: "Document Solutions",
    description:
      "Legal firms, government departments and professional services organisations rely on consistent, correctly structured documents at volume. We build the templates, styles and automation that make that possible without depending on individuals getting it right every time.",
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    index: "03",
    title: "Microsoft Access",
    category: "Database Development",
    description:
      "Many Melbourne organisations are still running business-critical Access databases that nobody fully understands. We audit, repair, optimise and when necessary migrate them to SQL Server, Azure or a modern application platform without disrupting daily operations.",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "power-platform",
    index: "04",
    title: "Power Platform",
    category: "Automation & Intelligence",
    description:
      "Power BI dashboards connected to your live data, Power Automate workflows that eliminate the manual handoffs your team carries every day, and Power Apps that replace spreadsheet-based processes with proper applications. This is where the most meaningful operational gains are found.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform",
  },
  {
    id: "office-365",
    index: "05",
    title: "Microsoft 365",
    category: "Cloud & Managed Services",
    description:
      "Most organisations are paying for capabilities inside their Microsoft 365 subscription that they are not using. We help look at your business needs and find what we can automate and simplify in order to cut down on repetitive tasks and remove error prone manual processes.",
    href: "https://www.officeexperts.com.au/services/microsoft-office-365",
    linkText: "Microsoft 365 Integrations",
  },
  {
    id: "custom",
    index: "06",
    title: "Custom Development",
    category: "Integration & Build",
    description:
      "When off-the-shelf Microsoft tools need to connect to the rest of your environment, we build the bridge. Third-party integrations, custom add-ins and Ai solutions. We build custom applications that work within the Microsoft stack to solve your particular pain points.",
    href: "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
    linkText: "Custom Office solutions",
  },
];

const MelbourneServices = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 className={styles.heading}>
          The full Microsoft stack.{" "}
          <span className={styles.headingMuted}>Not just one product.</span>
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

            {/* Single link */}
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

export default MelbourneServices;
