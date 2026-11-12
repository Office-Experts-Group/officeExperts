// /about-us/(components)/AboutEvolution.jsx
import React from "react";
import Link from "next/link";

// Shared scroll-reveal wrapper used across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/aboutEvolution.module.scss";

// Three stages of the work we do, oldest to newest — each card links into the service pages
const stages = [
  {
    stage: "Where we started",
    title: "Office automation",
    text: "VBA macros, Access databases, Word templates and Excel models that many businesses still rely on every day. We still build them, fix them and bring them up to date.",
    links: [
      { href: "/services/vba-macro-development", text: "VBA and macro development" },
      { href: "/services/microsoft-word", text: "Word templates and forms" },
      { href: "/services/upgrades-and-migration", text: "Upgrades and migration" },
    ],
  },
  {
    stage: "Where we are",
    title: "Connected systems",
    text: "Power Platform apps, SQL Server and Azure databases, dashboards and web portals that link Microsoft 365 to the rest of your business.",
    links: [
      { href: "/services/dashboards", text: "Dashboards and reporting" },
      { href: "/services/database-development-and-solutions", text: "Database development" },
      { href: "/services", text: "Browse all services" },
    ],
  },
  {
    stage: "Where we're heading",
    title: "AI that does the work",
    text: "Microsoft 365 Copilot rollouts and fully custom AI agents in Python and JavaScript, built on the same foundations: clean data and well-understood processes.",
    links: [
      { href: "/services/copilot", text: "Microsoft 365 Copilot consulting" },
      { href: "/case-studies", text: "AI project case studies" },
    ],
  },
];

const AboutEvolution = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>What we do</span>
          <h2 className={styles.heading}>
            From macros to AI agents.{" "}
            <span className={styles.accent}>We&rsquo;ve kept pace since 2000.</span>
          </h2>
          <p className={styles.intro}>
            The tools have changed a lot in 25 years. Our approach hasn&rsquo;t:
            understand the business first, then build something that lasts.
            Today that covers everything from a single Excel macro to an AI
            agent working across your systems.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}>
        <ul className={styles.cards}>
          {stages.map(({ stage, title, text, links }, i) => (
            <li
              key={title}
              // The newest stage (AI) is highlighted on an accent background
              className={`${styles.card} ${i === stages.length - 1 ? styles.featured : ""}`}
            >
              <span className={styles.stage}>{stage}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{text}</p>

              <ul className={styles.links}>
                {links.map(({ href, text: linkText }) => (
                  <li key={href}>
                    <Link href={href} className={styles.link}>
                      {linkText}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AboutEvolution;
