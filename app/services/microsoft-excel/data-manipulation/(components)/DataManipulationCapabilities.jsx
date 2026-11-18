// /app/services/microsoft-excel/data-manipulation/(components)/DataManipulationCapabilities.jsx

import Link from "next/link";
import styles from "@/styles/dataManipulationCapabilities.module.scss";
import { ArrowIcon } from "../(svgs)/DataManipulationIcons";

// Each item expands on hover or keyboard focus (CSS only) to show its description
const DMC_CAPABILITIES = [
  {
    id: "01",
    title: "Power Query & ETL pipeline development",
    tag: "No-code automation",
    desc: "Connect Excel to databases, SharePoint, APIs, and file feeds. Build pipelines that clean, reshape, and load data automatically on refresh with no manual intervention required.",
    href: "#power-query",
  },
  {
    id: "02",
    title: "VBA macro automation & rebuilds",
    tag: "Custom scripting",
    desc: "Automated imports, bulk conversions, file generation, and multi-workbook consolidation. We also rebuild legacy macros that have broken after a 64-bit migration or Microsoft 365 update.",
    href: "#vba",
  },
  {
    id: "03",
    title: "SQL database integration",
    tag: "Live data",
    desc: "Connect Excel directly to SQL Server, MySQL, PostgreSQL, or Oracle. Parameterised queries refresh on demand, with the right systems in place your reports always reflect live data.",
    href: "#sql",
  },
  {
    id: "04",
    title: "API data pulls & web connections",
    tag: "Third-party platforms",
    desc: "Pull live data from Salesforce, Xero, MYOB, HubSpot, and custom REST APIs. We handle authentication, response parsing, and scheduled refresh.",
    href: "#api",
  },
  {
    id: "05",
    title: "Bulk conversions & batch processing",
    tag: "High volume",
    desc: "Process hundreds of files overnight. Format conversions, multi-file consolidation, and batch jobs triggered manually or on a schedule.",
    href: "#batch",
  },
];

const DataManipulationCapabilities = () => (
  <section
    id="dmc-capabilities"
    className={styles.dataManipulationCapabilities}
    aria-labelledby="dmc-capabilities-heading"
  >
    <div className={styles.grid}>
      <div className={styles.leftCol}>
        <p className={styles.eyebrow}>Office Experts — Since 2000</p>

        <h2 id="dmc-capabilities-heading" className={styles.heading}>
          Stop processing data manually.{" "}
          <span className={styles.accent}>Automate it.</span>
        </h2>

        <div className={styles.body}>
          <p>
            If your team spends a lot of time fixing spreadsheets, tidying up
            imported data, or dealing with Excel processes that keep breaking,
            chances are the real issue is in your system, not your people.
          </p>
          <p>
            We create Excel automation solutions with VBA, Power Query, and SQL
            integrations that eliminate tedious manual tasks and make your data
            handling more reliable.
          </p>
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className="btn">
            Get a free assessment
          </Link>
          <Link href="#services" className={styles.secondary}>
            See all services
          </Link>
        </div>
      </div>

      <div className={styles.rightCol}>
        <p className={styles.capLabel}>What we build</p>

        <ul className={styles.capList}>
          {DMC_CAPABILITIES.map((cap) => (
            <li key={cap.id} className={styles.capItem} tabIndex={0}>
              <div className={styles.capItemInner}>
                <div className={styles.capLeft}>
                  <span className={styles.capNum}>{cap.id}</span>
                  <span className={styles.capDot} />
                </div>

                <div className={styles.capContent}>
                  <div className={styles.capHeader}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <span className={styles.capTag}>{cap.tag}</span>
                  </div>
                  <div className={styles.capDesc}>
                    <p>{cap.desc}</p>
                    <Link href={cap.href} className={styles.capLink}>
                      Learn more
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default DataManipulationCapabilities;
