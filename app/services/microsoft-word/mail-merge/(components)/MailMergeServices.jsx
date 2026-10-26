// /services/microsoft-word/mail-merge/(components)/MailMergeServices.jsx
// Uses native <details>/<summary> for expand/collapse, so it works with zero client JS
// and the full content is still in the server-rendered HTML for crawlers.
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/mailMergeServices.module.scss";

// Keep names in step with the SERVICES array in page.js (used for the OfferCatalog schema)
const services = [
  {
    id: "template-creation",
    title: "Template creation",
    tag: "Design & build",
    description: (
      <>
        We build new merge templates or rebuild the ones that have become
        fragile over the years, on top of your{" "}
        <Link href="/services/microsoft-word/corporate-global-template-solution">
          corporate template
        </Link>{" "}
        so styles, logos and layout survive every merge.
      </>
    ),
    capabilities: [
      "Merge fields mapped to clean, consistently named data columns",
      "IF rules for salutations, optional paragraphs and clauses",
      "Field switches for Australian dates, currency and four-digit postcodes",
      "Letter, envelope, label and email versions from one data list",
    ],
  },
  {
    id: "data-sources",
    title: "Data source linking",
    tag: "Excel · Access · Outlook",
    description: (
      <>
        A merge is only as good as its data. We connect your template to the
        right source and tidy that source so Word reads it reliably, including{" "}
        <Link href="https://www.excelexperts.com.au/data-manipulation">
          cleaning messy Excel data
        </Link>{" "}
        before it goes anywhere near a letter.
      </>
    ),
    capabilities: [
      "Excel workbooks, named ranges and filtered tables",
      <>
        <Link href="https://www.accessexperts.com.au">Access</Link> tables and
        saved queries for targeted merges
      </>,
      "Outlook contacts and Exchange address lists",
      "SQL Server views and SharePoint lists",
      "Duplicates, blanks and inconsistent formats fixed at the source",
    ],
  },
  {
    id: "automation",
    title: "Workflow automation",
    tag: "VBA & macros",
    description: (
      <>
        Word's built-in merge stops at one long document. With{" "}
        <Link href="/services/vba-macro-development">VBA development</Link> we
        take it the rest of the way, so a full mailing runs from a single
        button.
      </>
    ),
    capabilities: [
      <>
        Split a merge into individual Word or{" "}
        <Link href="/services/microsoft-word/word-to-pdf-conversion">PDF</Link>{" "}
        files, each named from the data
      </>,
      "Save each file straight into the matching client or project folder",
      "Send individual emails, each with its own attachment",
      <>
        One-click merge buttons on a{" "}
        <Link href="/services/microsoft-word/custom-toolbars-and-ribbons">
          custom ribbon
        </Link>
      </>,
      "A log of every run: who, when and how many records",
    ],
  },
  {
    id: "training",
    title: "Staff training",
    tag: "Hands-on sessions",
    description: (
      <>
        Short, practical{" "}
        <Link href="/services/microsoft-word/training">Word training</Link>{" "}
        built around your own templates and data, in person or over Teams, so
        your team can run merges confidently without calling for help.
      </>
    ),
    capabilities: [
      "Previewing and test-running a merge before it prints or sends",
      "Filtering, sorting and excluding records",
      "Editing a template without breaking its fields",
      "Spotting the common formatting errors early",
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting and repair",
    tag: "Fixes",
    description:
      "When a merge that used to work suddenly misses records, loses its data or prints field codes, we find the cause and repair it so it stays fixed.",
    capabilities: [
      "Broken data links after files move to SharePoint or OneDrive",
      "Merges that skip records or stop partway through",
      "Field codes showing instead of results",
      "Corrupt or bloated templates rebuilt cleanly",
    ],
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 integration",
    tag: "SharePoint · Power Automate",
    description:
      "For teams working in the cloud, we move document generation off individual desktops so everyone works from the same templates and data.",
    capabilities: [
      <>
        Templates stored centrally in{" "}
        <Link href="https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development">
          SharePoint
        </Link>{" "}
        so nobody merges from an old copy
      </>,
      <>
        <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate">
          Power Automate
        </Link>{" "}
        flows that create documents when a form or list item is submitted
      </>,
      <>
        System-generated documents through{" "}
        <Link href="/microsoft-365-api-integration">
          Microsoft 365 API integration
        </Link>
      </>,
    ],
  },
];

const MailMergeServices = () => (
  <section className={styles.section} id="services">
    <div className={styles.inner}>
      {/* ── Left: sticky intro (sticky on the plain div, not the animation wrapper) ── */}
      <div className={styles.intro}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <p className={styles.eyebrow}>Our mail merge services</p>
          <h2 className={styles.heading}>
            From first template{" "}
            <span className={styles.accent}>to fully automated.</span>
          </h2>
          <p className={styles.lead}>
            Most projects combine a few of these. Open any service to see
            what's included.
          </p>
        </AnimateOnScroll>
      </div>

      {/* ── Right: expandable service list, first item open by default ── */}
      <div>
        {services.map((service, i) => (
          <details key={service.id} className={styles.item} open={i === 0}>
            <summary className={styles.summary}>
              <h3 className={styles.title}>{service.title}</h3>
              <span className={styles.tag}>{service.tag}</span>
              <span className={styles.toggle} aria-hidden="true" />
            </summary>

            <div className={styles.body}>
              <p className={styles.desc}>{service.description}</p>
              <ul className={styles.capabilities}>
                {service.capabilities.map((cap, j) => (
                  <li key={j}>{cap}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default MailMergeServices;
