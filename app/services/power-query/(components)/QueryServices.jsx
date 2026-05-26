// app/services/power-query/(components)/Segment4Repeat.jsx

import Link from "next/link";

import styles from "../../../../styles/queryServices.module.scss";

// ── Service definitions ───────────────────────────────────
const services = [
  {
    id: "etl-pipelines",
    heading: "ETL Pipeline Development",
    tag: "No-code · Scheduled refresh",
    description:
      "We build automated extract-transform-load pipelines that pull data from your sources, clean and reshape it, then deliver it ready for analysis.",
    capabilities: [
      "Connections to SQL Server, MySQL, PostgreSQL, Oracle, SharePoint, OneDrive",
      "REST API and web service connectors",
      "Automated refresh on a schedule or on demand",
      "Deduplication, format standardisation, and column reshaping",
      "Custom M language transformations for complex business logic",
      "Error handling and refresh failure notifications",
    ],
  },
  {
    id: "data-cleansing",
    heading: "Data Cleansing & Transformation",
    tag: "Structured output · Repeatable steps",
    description:
      "Inconsistent formatting, duplicate entries, split columns, and mismatched data types are the most common barriers to reliable reporting. We define and automate the steps that fix them.",
    capabilities: [
      "Removing duplicates and handling nulls consistently",
      "Splitting, merging, and reshaping columns",
      "Standardising date formats, currency, and text casing",
      "Unpivoting wide tables into analysis-ready structures",
      "Conditional column logic and lookup enrichment",
    ],
  },
  {
    id: "multi-source",
    heading: "Multi-Source Data Merging",
    tag: "Append · Merge · Consolidate",
    description:
      "When your data lives across multiple files, folders, or systems, We enable Power Query to merge and append them into a single table automatically.",
    capabilities: [
      "Folder-level connectors that pick up new files automatically",
      "Merge queries joining data across different sources",
      "Appending data from multiple workbooks or databases",
      "Handling schema changes and mismatched columns gracefully",
    ],
  },
  {
    id: "m-language",
    heading: "M Language & Custom Functions",
    tag: "Advanced logic · Reusable",
    description:
      "The graphical interface is fine for most situations, but complex business logic requires writing M directly. We author custom functions, parameters, and conditional logic that the UI cannot generate.",
    capabilities: [
      "Custom reusable M functions for complex transformations",
      "Dynamic parameters for date ranges, filters, and data sources",
      "Incremental refresh configuration for large datasets",
      "Query folding optimisation to push work back to the data source",
      "Performance tuning for slow or resource-heavy queries",
    ],
  },
  {
    id: "power-bi",
    heading: "Power BI Integration",
    tag: "Excel · Power BI · Power Platform",
    description:
      "Power Query is the data preparation layer for both Excel and Power BI. We build solutions that work across both, so your transformation logic is consistent no matter where the report lives.",
    capabilities: [
      "Shared transformation logic across Excel and Power BI",
      "Dataflow development for centralised, reusable query steps",
      "Integration with Power Automate for triggered refreshes",
      "Connection to Azure data sources and Microsoft Fabric",
    ],
  },
];

// ── Component ─────────────────────────────────────────────
const QueryServices = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        {/* ── Left: sticky heading ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Build</span>
          <h2 className={styles.heading}>
            Every Power Query solution, <span>custom-built for your data.</span>
          </h2>
          <p className={styles.intro}>
            Our clients come to us with a wide range of requirements that
            utilise Power Query. Be it simple connection and clean-up jobs
            through to multi-source ETL pipelines, M language custom functions,
            and{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
            >
              Power BI dataflows
            </Link>
            . The right approach for each project depends on your data and your
            reporting requirements.
          </p>
          <Link
            href="https://www.excelexperts.com.au/data-manipulation"
            className={styles.sideLink}
          >
            See our broader data manipulation services
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ── Right: service list ── */}
        <div className={styles.servicesList}>
          {services.map((service) => (
            <article
              key={service.id}
              className={styles.service}
              id={service.id}
            >
              <div className={styles.serviceTop}>
                <h3 className={styles.serviceHeading}>{service.heading}</h3>
                <span className={styles.serviceTag}>{service.tag}</span>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <details className={styles.details}>
                <summary className={styles.summary}>Capabilities</summary>
                {/* Inner wrapper enables the grid-row height transition */}
                <div className={styles.capabilitiesInner}>
                  <div>
                    <ul className={styles.capabilities}>
                      {service.capabilities.map((cap, i) => (
                        <li key={i}>{cap}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueryServices;
