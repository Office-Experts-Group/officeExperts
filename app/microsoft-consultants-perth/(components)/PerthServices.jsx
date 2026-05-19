// app/microsoft-consultants-perth/(components)/PerthServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/perthServices.module.css";

const services = [
  {
    id: "excel",
    index: "01",
    title: "Excel Development",
    category: "Data & Reporting",
    description:
      "Resources and construction firms in WA generate enormous volumes of operational data. We build Excel solutions with automation, VBA, Power Query and dashboards that turn raw site and production data into something your management team can actually use. No more manually consolidating weekly reports from 12 different spreadsheets.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "power-platform",
    index: "02",
    title: "Power Platform Solutions",
    category: "Automation & Intelligence",
    description:
      "Power Apps, Power Automate and Power BI give Perth businesses a powerful toolkit that slots right into their existing Microsoft 365 setup. We build automated approval workflows, mobile-ready data collection apps for field teams, and live Power BI dashboards that pull from your existing systems. Particularly useful for organisations managing remote sites or FIFO operations.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform",
  },
  {
    id: "word",
    index: "03",
    title: "Microsoft Word Automation",
    category: "Document Solutions",
    description:
      "Government contractors, engineering firms and professional services businesses in Perth produce a tonne of documents, tenders, reports, contracts, proposals. We build Word systems with standardised templates, dynamic fields and automated formatting that make high-volume document production consistent and fast, without your team spending hours on layout.",
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    index: "04",
    title: "Access Database Consulting",
    category: "Database Development",
    description:
      "A lot of WA businesses particularly in government and engineering still run critical operations on Access databases built years ago. When those systems start showing cracks, we repair, optimise and modernise them. When it&rsquo;s time to migrate to SQL Server or a cloud platform, we manage the transition carefully so nothing breaks in the process.",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "office-365",
    index: "05",
    title: "Microsoft 365 Optimisation",
    category: "Cloud & Productivity",
    description:
      "Most Perth organisations have Microsoft 365 but only scratch the surface of what it offers. We help teams collaborate better across multiple sites, set up SharePoint intranet structures that people actually use, and automate the repetitive tasks that eat up admin time. Especially useful for businesses managing hybrid or distributed teams across WA.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Solutions",
  },
  {
    id: "custom",
    index: "06",
    title: "Custom Microsoft Development",
    category: "Integration & Build",
    description:
      "Some operational challenges don&rsquo;t fit a standard product. We build custom solutions that connect your Microsoft environment with your other business systems — from ERP integrations to bespoke web portals and niche industry applications. Our team works across a broad range of languages and frameworks to find the right fit for your requirements.",
    href: "/services/by-business-solution/custom-office-solutions",
    linkText: "Custom Solutions",
  },
];

const PerthServices = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 className={styles.heading}>
          What we deliver in Perth.{" "}
          <span className={styles.headingMuted}>Across the full stack.</span>
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

export default PerthServices;
