// app/services/by-business-solution/dashboards/(components)/DashboardsPlatforms.jsx
import Link from "next/link";

import styles from "@/styles/dashboardsPlatforms.module.scss";
// Column definitions: one per platform, with the page each links to
const platforms = [
  {
    name: "Power BI",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    linkText: "Power BI consulting",
  },
  {
    name: "Excel",
    href: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
    linkText: "Excel reporting solutions",
  },
  {
    name: "Custom web app",
    href: "/services/microsoft-office-365/app-and-custom-development",
    linkText: "Custom app development",
  },
];

// Row definitions: each "values" array lines up with the platforms array above.
// "tags" rows render as pills instead of a sentence.
const rows = [
  {
    label: "Best for",
    values: [
      "Organisation-wide reporting with many users and many data sources",
      "Teams that already work in Excel and want automated reports without new licences",
      "Customer or partner-facing dashboards, or reporting inside your own portal",
    ],
  },
  {
    label: "Sharing",
    values: [
      "Power BI service, Teams and SharePoint, with row-level security",
      "Workbooks shared through SharePoint or OneDrive",
      "Any browser, behind your own login and branding",
    ],
  },
  {
    label: "Data volume",
    values: [
      "Millions of rows through import, DirectQuery or Microsoft Fabric",
      "Large datasets through the Power Pivot data model rather than worksheet rows",
      "Whatever the database behind it supports, such as SQL Server or Azure SQL",
    ],
  },
  {
    label: "Licensing",
    values: [
      "Power BI Pro or Premium per user, or Fabric capacity",
      "Included with Microsoft 365",
      "No Microsoft licence for viewers, hosting costs instead",
    ],
  },
  {
    label: "Built with",
    tags: true,
    values: [
      ["Power Query", "DAX", "Fabric", "SSAS"],
      ["Power Query", "Power Pivot", "PivotCharts", "VBA"],
      ["Next.js", "React", "SQL Server", "Azure"],
    ],
  },
];

// Renders a single cell, either as a sentence or as a row of technology pills
const renderCell = (row, value) =>
  row.tags ? (
    <div className={styles.tags}>
      {value.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  ) : (
    value
  );

const DashboardsPlatforms = () => {
  return (
    <section className={styles.section} aria-labelledby="platforms-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Choosing a platform</span>
          <h2 id="platforms-heading" className={styles.heading}>
            Power BI, Excel or a{" "}
            <span className={styles.accent}>custom web dashboard?</span>
          </h2>
          <p className={styles.intro}>
            The right tool depends on who needs to see the data, how much of it
            there is and what you already pay for. We build in all three, so we
            recommend whichever fits your business rather than the one we happen
            to sell.
          </p>
        </header>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td />
                {platforms.map(({ name }) => (
                  <th key={name} scope="col" className={styles.colHead}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className={styles.rowHead}>
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={platforms[i].name} className={styles.cell}>
                      {renderCell(row, value)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className={styles.linkRow}>
                <th scope="row" className={styles.rowHead}>
                  Learn more
                </th>
                {platforms.map(({ name, href, linkText }) => (
                  <td key={name}>
                    <Link href={href} className={styles.colLink}>
                      {linkText}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.hint}>Scroll sideways to compare all three.</p>
      </div>
    </section>
  );
};

export default DashboardsPlatforms;
