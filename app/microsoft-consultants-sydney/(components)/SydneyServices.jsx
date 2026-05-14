// app/microsoft-consultants-sydney/(components)/SydneyServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/sydneyServices.module.css";
import WordSVG from "../(svgs)/WordSVG";

const services = [
  {
    id: "power-platform",
    title: "Power Platform",
    tag: "Automation & Intelligence",
    description:
      "Power BI for real-time business intelligence and visual data representations, Power Automate for eliminating repetitive handoffs, and Power Apps for replacing spreadsheet-based processes with proper applications. This is where we see businesses achieving their biggest operational improvements with automation and integrations into the rest of the Microsoft ecosystem.",
    href: "https://www.powerplatformexperts.com.au",
    linkText: "Power Platform Integrations",
    featured: true,
  },
  {
    id: "excel",
    title: "Microsoft Excel",
    tag: "Data & Reporting",
    description:
      "Sydney's finance and insurance sectors generate enormous volumes of spreadsheet-driven reporting. We build automated Excel solutions, VBA macros, dashboards and data models that eliminate the manual work and reduce the risk of overloaded spreadsheets and manual input errors.",
    href: "https://www.excelexperts.com.au",
    linkText: "Excel Development",
  },
  {
    id: "word",
    title: "Microsoft Word",
    tag: "Document Solutions",
    description:
      "Law firms in the CBD, government agencies in Macquarie Street and corporate compliance teams across the city all need document systems that produce consistent, accurate output at volume. We design templates, automate generation and build the workflows with custom ribbons and add-ins.",
    href: "https://www.wordexperts.com.au",
    linkText: "Word Designers",
  },
  {
    id: "access",
    title: "Microsoft Access",
    tag: "Database Development",
    description:
      "Legacy Access databases still run core processes in many organisations. We audit, repair and optimise existing databases. When the time is right, we migrate them to SQL Server, Azure or a modern platform without interrupting existing workflows.",
    href: "https://www.accessexperts.com.au",
    linkText: "Access Databases",
  },
  {
    id: "office-365",
    title: "Microsoft 365",
    tag: "Cloud & Productivity",
    description:
      "Most organisations are paying for Microsoft 365 capabilities they are not using. We assess the current environment, identify what can be automated or simplified, and implement changes that reduce manual labour and open up a world of automation through Copilot Ai, Power Automate and Sharepoint.",
    href: "https://www.officeexperts.com.au/services/microsoft-office-365",
    linkText: "Microsoft 365 Applications",
  },
  {
    id: "custom",
    title: "Custom Solutions",
    tag: "Integration & Build",
    description:
      "When your Microsoft environment needs to connect with third-party systems, or a standard tool does not quite fit the requirement, we build the bridge. Custom add-ins, API integrations, AI-powered automations and bespoke applications built on or even inside the Microsoft stack.",
    href: "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
    linkText: "Custom Solutions",
  },
];

const SydneyServices = () => {
  const featuredService = services.find((s) => s.featured);
  const gridServices = services.filter((s) => !s.featured);

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Services</p>
          <h2 className={styles.heading}>
            What we deliver{" "}
            <span className={styles.headingAccent}>for Our Clients.</span>
          </h2>
          <p className={styles.subtitle}>
            We cover the full Microsoft ecosystem. One team, one relationship,
            and solutions designed to work together rather than in isolation.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Featured service — full width ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <article className={styles.featured}>
          <div className={styles.featuredInner}>
            <div className={styles.featuredContent}>
              <span className={styles.featuredTag}>{featuredService.tag}</span>
              <h3 className={styles.featuredTitle}>{featuredService.title}</h3>
              <p className={styles.featuredDesc}>
                {featuredService.description}
              </p>
              <Link href={featuredService.href} className={styles.featuredLink}>
                {featuredService.linkText}
                <svg
                  width="14"
                  height="14"
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
            </div>

            {/* Decorative stat block */}
            <div className={styles.featuredStat} aria-hidden="true">
              <span className={styles.featuredStatNum}>01</span>
              <span className={styles.featuredStatLabel}>
                Most requested service
              </span>
            </div>
          </div>
        </article>
      </AnimateOnScroll>

      {/* ── Remaining services — asymmetric grid ── */}
      <div className={styles.grid}>
        {gridServices.map((service, i) => (
          <AnimateOnScroll
            key={service.id}
            animation="fade-up"
            duration={0.5}
            delay={i * 0.06}
          >
            <article className={styles.card}>
              {/* Left accent bar */}
              <div className={styles.cardBar} aria-hidden="true" />

              <div className={styles.cardInner}>
                <div className={styles.cardHead}>
                  <span className={styles.cardIndex} aria-hidden="true">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className={styles.cardTag}>{service.tag}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>

                {i === 1 && <WordSVG />}

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
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default SydneyServices;
