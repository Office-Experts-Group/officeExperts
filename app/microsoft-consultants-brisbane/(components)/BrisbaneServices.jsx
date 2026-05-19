// app/microsoft-consultants-brisbane/(components)/BrisbaneServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/brisbaneServices.module.css";

const services = [
  {
    id: "excel",
    index: "01",
    title: "Excel Development",
    category: "Data & Reporting",
    description:
      "Excel is everywhere because it\u2019s flexible and familiar. But after a while, those important spreadsheets turn into monsters. We build structured Excel setups with automation, dashboards, VBA and live reporting that make them dependable and cut down manual work.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Programmers",
  },
  {
    id: "power-platform",
    index: "02",
    title: "Power Platform Solutions",
    category: "Automation & Intelligence",
    description:
      "With Power Apps, Power Automate and Power BI, we set up automated workflows and easy-to-read dashboards. Power Platform can become the heart of your business, pulling data from a huge variety of sources into one system your team can access from anywhere.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform",
  },
  {
    id: "word",
    index: "03",
    title: "Microsoft Word Automation",
    category: "Document Solutions",
    description:
      "Pumping out documents eats up time and money, but it\u2019s an inherent part of almost every business. We build Word systems that standardise templates, automate formatting and make document generation faster and less error-prone. Custom ribbons, dynamic fields and branded templates for high-volume needs.",
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    index: "04",
    title: "Access Database Consulting",
    category: "Database Development",
    description:
      "Plenty of organisations still lean on old Access databases. Some work fine, some get shaky as things scale up. We help repair, optimise and modernise Access setups with minimal disruption. When it\u2019s time to move to something more modern, we handle staged migrations to new platforms.",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Developers",
  },
  {
    id: "office-365",
    index: "05",
    title: "Microsoft 365 Optimisation",
    category: "Cloud & Productivity",
    description:
      "Most companies barely scratch the surface of what Microsoft 365 can do. We get them collaborating better, automating workflows and structuring information across Teams, SharePoint and the cloud. For businesses juggling multiple locations or hybrid teams, this cuts down a ton of admin headaches.",
    href: "/services/microsoft-office-365",
    linkText: "Microsoft 365 Solutions",
  },
  {
    id: "custom",
    index: "06",
    title: "Custom Microsoft Development",
    category: "Integration & Build",
    description:
      "Not every operational challenge fits an existing platform. In this case, we create custom solutions that connect your existing systems, this could be anything from web portals to niche industry applications. Our team works with a huge array of programming languages and frameworks to find the best fit for your needs.",
    href: "/services/by-business-solution/custom-office-solutions",
    linkText: "Custom Solutions",
  },
];

const BrisbaneServices = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 className={styles.heading}>
          What we actually do.{" "}
          <span className={styles.headingMuted}>The secret sauce.</span>
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

export default BrisbaneServices;
