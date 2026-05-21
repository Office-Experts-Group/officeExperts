// app/microsoft-consultants-cairns/(components)/CairnsServices.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/cairnsServices.module.css";

const services = [
  {
    id: "excel",
    title: "Microsoft Excel",
    category: "Data & Reporting",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Experts",
    description:
      "Custom workbooks, VBA automation, pivot reporting and dashboards built for the way your team actually works. We replace fragile, manual spreadsheets with structured Excel solutions that scale as your business grows.",
    features: [
      "VBA & macro development",
      "Dashboard design",
      "Data modelling",
      "Add-in development",
    ],
  },
  {
    id: "word",
    title: "Microsoft Word",
    category: "Document Solutions",
    href: "https://www.wordexperts.com.au",
    linkText: "Word Experts",
    description:
      "Consistent, professionally structured documents at scale. We build templates, corporate styles and document automation that eliminate formatting errors and reduce the time your team spends on document production.",
    features: [
      "Template development",
      "Style systems",
      "Mail merge automation",
      "Content controls",
    ],
  },
  {
    id: "access",
    title: "Microsoft Access",
    category: "Database Development",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Experts",
    description:
      "Many organisations are running business-critical Access databases that have outgrown their original design. We audit, repair and optimise existing databases, and migrate them to SQL Server or Azure when the time is right.",
    features: [
      "Database audits",
      "Performance tuning",
      "SQL Server migration",
      "Custom front-ends",
    ],
  },
  {
    id: "power-platform",
    title: "Power Platform",
    category: "Automation & Intelligence",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Experts",
    description:
      "Power BI dashboards connected to your live data, Power Automate workflows that cut manual handoffs, and Power Apps that turn spreadsheet-based processes into proper applications your whole team can use.",
    features: [
      "Power BI dashboards",
      "Power Automate flows",
      "Power Apps",
      "Dataverse solutions",
    ],
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365",
    category: "Cloud & Productivity",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 services",
    description:
      "Most businesses are paying for Microsoft 365 features they have never switched on. We assess what you have, identify the quickest wins, and implement the changes that reduce repetitive work and improve how your team collaborates.",
    features: [
      "SharePoint setup",
      "Teams configuration",
      "Copilot integration",
      "Licence optimisation",
    ],
  },
  {
    id: "custom",
    title: "Custom Development",
    category: "Integration & Build",
    href: "/services/by-business-solution/custom-office-solutions",
    linkText: "Custom solutions",
    description:
      "When standard Microsoft tools need to connect with the rest of your environment, we build the integration. Third-party connectors, custom add-ins and AI-assisted workflows designed to work within — not around — the Microsoft stack.",
    features: [
      "Third-party integrations",
      "Custom add-ins",
      "AI solutions",
      "API connections",
    ],
  },
];

const CairnsServices = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>What we do</p>
        <h2 className={styles.heading}>
          The complete Microsoft toolkit{" "}
          <span className={styles.headingAccent}>all under one roof.</span>
        </h2>
        <p className={styles.subheading}>
          We are not a generalist IT firm that dabbles in Microsoft. Every
          consultant we deploy is a specialist in one or more of the platforms
          below, backed by our national team with 25+ years of projects under
          our belt.
        </p>
      </div>
    </AnimateOnScroll>

    <div className={styles.grid}>
      {services.map((service, i) => (
        <AnimateOnScroll
          key={service.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardCategory}>{service.category}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>

            {/* Feature tags */}
            <ul
              className={styles.features}
              aria-label={`${service.title} capabilities`}
            >
              {service.features.map((f) => (
                <li key={f} className={styles.feature}>
                  {f}
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link href={service.href} className={styles.cardLink}>
              {service.linkText}
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
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

export default CairnsServices;
