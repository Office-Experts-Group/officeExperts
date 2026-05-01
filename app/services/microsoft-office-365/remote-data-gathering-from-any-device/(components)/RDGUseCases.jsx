// services/microsoft-office-365/remote-data-gathering-from-any-device/RDGUseCases.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/rdgUseCases.module.css";

// ─────────────────────────────────────────────
// Use-case data
// ─────────────────────────────────────────────
const useCases = [
  {
    id: "inspections",
    industry: "Construction",
    heading: "Field inspection reports",
    body: "Site supervisors complete structured inspection checklists on their phone. Photos attach directly to the record, GPS stamps the location, and a PDF report lands in the project manager's inbox within seconds of submission.",
    href: "/services/microsoft-office-365/business-process-automation",
  },
  {
    id: "inventory",
    industry: "Retail & Warehousing",
    heading: "Remote stock counts",
    body: "Warehouse staff scan barcodes or enter quantities via a Power Apps form. Counts write immediately to Dynamics 365 or your ERP and flag variances for review before the count session closes.",
    href: "https://www.powerplatformexperts.com.au/services/power-apps",
  },
  {
    id: "timesheets",
    industry: "Professional Services",
    heading: "Multi-site timesheet collection",
    body: "Staff across multiple offices or job sites submit timesheets through a single branded form. Approval flows route to the right manager, payroll exports generate automatically, and the data never touches a spreadsheet.",
    href: "/services/microsoft-office-365/business-process-automation",
  },
  {
    id: "deliveries",
    industry: "Logistics",
    heading: "Subcontractor delivery dockets",
    body: "Drivers capture proof of delivery, recipient signature, and condition notes on a mobile form. Records are timestamped, geotagged, and available to your operations team in real time without any phone calls.",
    href: "https://www.powerplatformexperts.com.au/services/power-automate",
  },
  {
    id: "signoff",
    industry: "Field Services",
    heading: "Customer sign-off and job completion",
    body: "Technicians collect digital customer sign-off at the point of job completion. The signature, completion notes, and any attached photos sync to SharePoint and trigger the billing workflow automatically.",
    href: "/services/microsoft-office-365/business-process-automation",
  },
  {
    id: "assets",
    industry: "Facilities Management",
    heading: "Asset condition monitoring",
    body: "Maintenance staff log asset readings, fault codes, and service notes against a live asset register. Condition alerts trigger automatically when thresholds are breached, routing work orders through Power Automate.",
    href: "https://www.powerplatformexperts.com.au/services/power-apps",
  },
];

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const RDGUseCases = () => (
  <section
    className={styles.section}
    id="use-cases"
    style={{ scrollMarginTop: "150px" }}
  >
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Use cases</span>
          <h2 className={styles.title}>
            Real workflows.{" "}
            <span className={styles.accent}>Real industries.</span>
          </h2>
          <p className={styles.subtitle}>
            Remote data collection is not limited to one sector. These are the
            workflows we build most often for Australian businesses.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Grid ── */}
      <div className={styles.grid}>
        {useCases.map((uc, i) => (
          <AnimateOnScroll
            key={uc.id}
            animation="fade-up"
            duration={0.55}
            delay={i * 0.07}
          >
            <Link href={uc.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.industry}>{uc.industry}</span>
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.cardHeading}>{uc.heading}</h3>
              <p className={styles.cardBody}>{uc.body}</p>
              {/* Bottom accent line — grows on hover via CSS */}
              <div className={styles.accentLine} aria-hidden="true" />
            </Link>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ── Bottom CTA strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
        <div className={styles.ctaStrip}>
          <p className={styles.ctaCopy}>
            Not seeing your industry? Every remote data workflow is different.
            <Link href="#contact" className={styles.ctaLink}>
              Tell us about yours.
            </Link>
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RDGUseCases;
