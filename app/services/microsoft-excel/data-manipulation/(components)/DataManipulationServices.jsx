// /app/services/microsoft-excel/data-manipulation/(components)/DataManipulationServices.jsx

import DataPipelineSvg from "../(svgs)/DataPipelineSvg";
import styles from "@/styles/dataManipulationServices.module.scss";

const services = [
  {
    id: "power-query",
    heading: "Power Query & ETL Pipelines",
    tag: "No-code · Scheduled refresh",
    description:
      "Connect Excel to databases, SharePoint, APIs, and 3rd-party applications. We develop pipelines that clean, reshape, and load data automatically.",
    capabilities: [
      "Multi-source connections: SQL, SharePoint, OneDrive, REST APIs, CSV/JSON/XML",
      "Automated refresh on schedule or on demand",
      "Deduplication, format standardisation, and column reshaping",
      "Custom M language transformations for complex business logic",
    ],
  },
  {
    id: "vba",
    heading: "VBA Automation & Macro Rebuilds",
    tag: "All Excel versions · Triggered workflows",
    description:
      "For automation that needs to do more than your spreadsheet allows. We build new macros and rebuild legacy ones that may have broken completely or slowed to a crawl.",
    capabilities: [
      "Automated import and export: CSV, XML, JSON, SQL",
      "Batch processing and multi-workbook consolidation",
      "File parsing for fixed-width and non-standard formats",
      "64-bit migration and Microsoft 365 compatibility fixes",
    ],
  },
  {
    id: "sql",
    heading: "SQL Database Integration",
    tag: "Live data · No manual exports",
    description:
      "Connect Excel directly to SQL Server, MySQL, PostgreSQL, or Oracle. Queries refresh on demand and your reports always reflect what’s live in the database.",
    capabilities: [
      "Power Query and ODBC/ADO connection setup",
      "Parameterised queries built to your reporting requirements",
      "Suitable for finance, operations, and CRM/ERP reporting teams",
    ],
  },
  {
    id: "api",
    heading: "API & Web Data Connections",
    tag: "REST APIs · Third-party platforms",
    description:
      "Pull live data from Salesforce, Xero, MYOB, HubSpot, and custom internal systems directly into Excel. We handle authentication, response parsing, and error handling.",
    capabilities: [
      "Power Query web connector and VBA HTTP requests",
      "API key, OAuth, and bearer token authentication",
      "JSON and XML response parsing into structured tables",
    ],
  },
  {
    id: "batch",
    heading: "Batch Processing & Bulk Conversions",
    tag: "High volume · Overnight runs",
    description:
      "When the volume itself is the problem, we build batch automation that runs in the background on a trigger or schedule.",
    capabilities: [
      "Format conversions: CSV, XML, JSON, PDF extraction",
      "Multi-file consolidation into a single master workbook",
      "Automated quality checks and exception flagging",
    ],
  },
];

const DataManipulationServices = () => {
  return (
    <section className={styles.dataManipulationServices} id="services">
      <div className={styles.inner}>
        {/* ── Left: sticky header + pipeline illustration ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Build</span>
          <h2 className={styles.heading}>The right tool for the job.</h2>
          <p className={styles.intro}>
            Every data problem is different. The solution might be Power Query,
            VBA, a SQL connection, or a combination of technologies. That’s why
            we start by assessing your needs to then find the most efficient
            solution for your specific case.
          </p>
          <div className={styles.svgWrap}>
            <DataPipelineSvg />
          </div>
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
              <ul className={styles.capabilities}>
                {service.capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataManipulationServices;
