// app/services/by-business-solution/dashboards/(components)/DashboardsDataSources.jsx
// Dark section showing the systems a dashboard can pull from, grouped by type, each group
// linking to the integration page that covers it. Server component.
import Link from "next/link";

// Compiled CSS module (source: styles/dashboardsDataSources.module.scss)
import styles from "../../../../../styles/dashboardsDataSources.module.css";

// Decorative flow diagram stored with the route
import { DataFlowSvg } from "../(svgs)/DataFlowSvg";

// Source groups: label, example systems, what it adds, and the page that covers it
const sourceGroups = [
  {
    label: "Finance and CRM",
    items: ["Xero", "MYOB", "Salesforce", "HubSpot"],
    note: "Live ledger, invoice and pipeline figures instead of monthly CSV exports.",
    link: {
      href: "/services/by-business-solution/3rd-party-application-or-office-integration",
      text: "Third-party app integration",
    },
  },
  {
    label: "Databases",
    items: ["SQL Server", "Microsoft Access", "Azure SQL", "Dataverse"],
    note: "Report straight from operational data without copying it into spreadsheets first.",
    link: {
      href: "/services/by-business-solution/sql-server-and-access-integration",
      text: "SQL Server and Access integration",
    },
  },
  {
    label: "Spreadsheets and exports",
    items: ["Excel workbooks", "Supplier CSV files", "SharePoint lists"],
    note: "Consolidate dozens of files into one model that refreshes with a single click.",
    link: {
      href: "/services/power-query",
      text: "Power Query data preparation",
    },
  },
  {
    label: "Microsoft 365",
    items: ["Teams", "SharePoint", "Outlook", "OneDrive"],
    note: "Add document activity, meeting load and collaboration data through Microsoft Graph, giving context your line-of-business systems can't.",
    link: {
      href: "/microsoft-365-api-integration",
      text: "Microsoft Graph API integration",
    },
  },
];

const DashboardsDataSources = () => {
  return (
    <section className={styles.section} aria-labelledby="sources-heading">
      <div className={styles.inner}>
        <div className={styles.visual} aria-hidden="true">
          <DataFlowSvg />
        </div>

        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Data sources</span>
            <h2 id="sources-heading" className={styles.heading}>
              One dashboard, <span className={styles.accent}>every system behind it.</span>
            </h2>
            <p className={styles.intro}>
              Collecting data is rarely the problem. Getting it out of separate
              systems, cleaning it and making the numbers agree is where most of
              the work sits. We connect each source to a single data model, so
              every page of the dashboard tells the same story.
            </p>
          </header>

          <div className={styles.groups}>
            {sourceGroups.map(({ label, items, note, link }) => (
              <div key={label} className={styles.group}>
                <h3 className={styles.groupLabel}>{label}</h3>
                <div className={styles.groupBody}>
                  <div className={styles.chips}>
                    {items.map((item) => (
                      <span key={item} className={styles.chip}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className={styles.groupNote}>{note}</p>
                  <Link href={link.href} className={styles.groupLink}>
                    {link.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.footer}>
            For one client we{" "}
            <Link href="/case-studies/golf-supplier-sales-data-consolidation">
              consolidated dozens of supplier sales files into one automated summary
            </Link>{" "}
            with year-on-year comparisons. Running an Access database? See{" "}
            <Link href="https://www.accessexperts.com.au/integrate-access-with-power-bi">
              connecting Access to Power BI
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardsDataSources;
