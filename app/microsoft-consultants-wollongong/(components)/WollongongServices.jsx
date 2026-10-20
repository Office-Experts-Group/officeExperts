// app/microsoft-consultants-wollongong/(components)/WollongongServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/wollongongServices.module.scss";

// Bento layout: size sets how much of the grid a tile takes up
// (feature = two thirds, wide = half, band = full width, default = one third).
// NOTE: product hrefs point at the sister domains for now (same as the other city hubs).
// Repoint each one in its migration wave. The sister domains' own Wollongong pages are not
// linked on purpose, because they are being merged into this page.
const services = [
  {
    id: "ai-agents",
    size: "feature",
    tag: "AI & Automation",
    title: "AI & Custom Agents",
    description:
      "Agents written in Python and JavaScript as well as Copilot Studio, so they can run where your data already sits, with or without your Microsoft tenant. This could mean an enquiries inbox for a clinic or trade business, staff questions answered from your own procedures, or an agent that reads supplier and compliance documents and flags what changed.",
    links: [
      { href: "/services/ai-agent-development", text: "AI Agent Development" },
      { href: "/services/ai-email-triage", text: "AI email triage" },
    ],
  },
  {
    id: "excel",
    tag: "Data & Reporting",
    title: "Excel & Reporting",
    description:
      "Job costing for fabricators and engineers, billing sheets for care providers, grant and budget trackers, shutdown schedules. We make the workbook that runs the business dependable, with VBA, Power Query and reporting that updates itself.",
    links: [
      {
        href: "/services/vba-macro-development",
        text: "VBA macro development",
      },
    ],
  },
  {
    id: "power-platform",
    size: "wide",
    tag: "Apps, Flows & Insight",
    title: "Power Platform",
    description:
      "Safety walk-arounds, equipment checks, client intake and visit notes captured once on a phone or tablet, routed to the right person and reported in Power BI. Approvals stop living in inboxes, and boards and funders get numbers that did not take a week to assemble.",
    links: [{ href: "/services/dashboards", text: "Business dashboards" }],
  },
  {
    id: "documents",
    size: "wide",
    tag: "Documents & Presentations",
    title: "Word & PowerPoint",
    description:
      "Tender responses, council and grant submissions, clinical and safety documents and board packs built from controlled templates, so everything looks like it came from one organisation. Slide decks can be generated automatically from your reporting numbers.",
    links: [
      {
        href: "/services/microsoft-powerpoint",
        text: "PowerPoint Specialists",
      },
    ],
  },
  {
    id: "access",
    tag: "Data Systems",
    title: "Access & Databases",
    description:
      "Plenty of local manufacturers and community organisations still depend on an Access database someone built years ago. First we make it safe to keep running. Then, if it makes sense, we plan a staged move to SQL Server or the web.",
    links: [
      {
        href: "/services/sql-server-and-access-integration",
        text: "SQL Server integration",
      },
    ],
  },
  {
    id: "microsoft-365",
    size: "accentTile",
    tag: "Cloud & Collaboration",
    title: "Microsoft 365 & Copilot",
    description:
      "SharePoint sites people can actually find things in, Teams that match how the business works, and Copilot switched on with sensible permissions. Useful for organisations spread across several sites.",
    links: [
      {
        href: "/services/microsoft-office-365",
        text: "Microsoft 365 Solutions",
      },
      {
        href: "/services/microsoft-office-365/copilot",
        text: "Microsoft 365 Copilot",
      },
    ],
  },
  {
    id: "custom",
    tag: "Build & Connect",
    title: "Custom Software & Integration",
    description:
      "Xero, MYOB or Salesforce talking to your spreadsheets and databases, customer portals, Office add-ins and mobile apps. Our team programs in .NET, JavaScript, PHP, Python and VBA, so the tool is chosen to suit the job, not the other way round.",
    links: [
      { href: "/services/custom-office-solutions", text: "Custom Solutions" },
      {
        href: "/services/microsoft-office-365/app-and-custom-development",
        text: "App Development",
      },
    ],
  },
  {
    id: "support",
    size: "band",
    tag: "Support & Training",
    title: "Not every job is a build",
    description:
      "Ask for ongoing support on an Excel, Access, Word or Power Platform solution you already have, or a live workshop for your team over Teams or on site. We use your own files as the examples and leave documentation behind.",
    links: [
      {
        href: "/microsoft-support-and-training-australia",
        text: "Microsoft support and training",
      },
      {
        href: "/services/upgrades-and-migration",
        text: "Upgrades and migration",
      },
    ],
  },
];

// Maps a tile's size to its stylesheet class (default tile has none)
const sizeClass = {
  feature: styles.feature,
  wide: styles.wide,
  band: styles.band,
  accentTile: styles.accentTile,
};

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

const WollongongServices = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What we build</p>
          <h2 className={styles.heading}>
            Tell us the problem.{" "}
            <span className={styles.headingAccent}>
              We&rsquo;ll choose the tools.
            </span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Bento grid ──
          One animation wrapper around the whole grid, so the tiles stay direct grid
          children and their column spans work ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.grid}>
          {services.map((service) => (
            <article
              key={service.id}
              className={`${styles.tile} ${sizeClass[service.size] ?? ""}`}
            >
              <p className={styles.tag}>{service.tag}</p>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
              <div className={styles.links}>
                {service.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.text}
                    <Arrow />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default WollongongServices;
