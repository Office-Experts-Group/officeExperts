// app/services/by-business-solution/sql-server-and-access-integration/(components)/SqlOffice.jsx

// Link handles both internal routes and absolute cross-site URLs, so it is used for both
import Link from "next/link";

// Compiled CSS module (source: styles/sqlOffice.module.scss)
import styles from "../../../../../styles/sqlOffice.module.scss";
// Content folded in from the old Office and SQL Server Integration page.
// Each card carries descriptive, varied anchor text for its internal links.
const solutions = [
  {
    title: "Excel dashboards",
    body: "An Excel dashboard that extracts data automatically from SQL Server and sets up your pivot charts and tables for a periodic report.",
    links: [
      {
        href: "/services/by-business-solution/dashboards",
        text: "Dashboard solutions",
      },
      {
        href: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
        text: "Pivot tables, charts and reporting",
      },
    ],
  },
  {
    title: "Word documents",
    body: "Automatically generate Word documents for your customers using the data in your existing SQL Server databases.",
    links: [
      {
        href: "https://www.wordexperts.com.au/mail-merge",
        text: "Word mail merge",
      },
      {
        href: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
        text: "Word API integrations",
      },
    ],
  },
  {
    title: "PowerPoint presentations",
    body: "Automatically generate a monthly PowerPoint presentation from your SQL Server data, with no copying and pasting.",
    links: [
      {
        href: "/services/microsoft-powerpoint/automate-presentations-with-vba",
        text: "Automate presentations with VBA",
      },
      {
        href: "/services/by-business-solution/vba-macro-development",
        text: "VBA macro development",
      },
    ],
  },
  {
    title: "Visual Studio and Access interfaces",
    body: "A database interface in Visual Studio or Microsoft Access that lets your team interact with your SQL Server data.",
    links: [
      {
        href: "/services/microsoft-dot-net",
        text: "Microsoft .NET development",
      },
      {
        href: "/services/by-business-solution/database-development-and-solutions",
        text: "Database development",
      },
    ],
  },
  {
    title: "Extend an existing application",
    body: "Extend the functionality of an existing application that already uses SQL Server as its back-end database.",
    links: [
      {
        href: "/services/by-business-solution/3rd-party-application-or-office-integration",
        text: "3rd party app integration",
      },
    ],
  },
  {
    title: "Power Apps and Power Automate",
    body: "Put a Power Apps front end or a Power Automate workflow on the same SQL Server data, for access from a browser or phone.",
    links: [
      {
        href: "https://www.powerplatformexperts.com.au/blog/power-apps-with-sql-database",
        text: "Power Apps with a SQL database",
      },
      {
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
        text: "Power Apps development",
      },
    ],
  },
];

const SqlOffice = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Beyond Access</span>
          <h2 className={styles.heading}>
            Connect Excel, Word and PowerPoint to{" "}
            <span className={styles.accent}>your SQL Server data</span>
          </h2>
          <p className={styles.lead}>
            We set up custom solutions in Access, Excel, Word and Visual Studio
            that modify and extract data from SQL Server databases. For example:
          </p>
        </header>

        <ul className={styles.grid}>
          {solutions.map((solution) => (
            <li key={solution.title}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.body}>{solution.body}</p>
                <ul className={styles.links}>
                  {solution.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SqlOffice;
