// /app/services/(components)/AccessSection.jsx
// Access and databases: a real data table, with a dark header row like a database view.
// On small screens the table collapses to stacked rows (handled in the stylesheet).
import styles from "@/styles/accessSection.module.scss";
import ServiceLink from "./ServiceLink";
import { AccessIcon } from "../(svgs)/AccessIcon";

const rows = [
  {
    name: "Access support",
    href: "https://www.accessexperts.com.au/access-support",
    helps: "Ongoing help when a database misbehaves.",
  },
  {
    name: "Optimisation and repair",
    href: "https://www.accessexperts.com.au/access-database-optimisation-and-repair",
    helps: "Slow, corrupt or overgrown databases.",
  },
  {
    name: "SQL Server backend",
    href: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
    helps: "More users, more data and stronger security.",
  },
  {
    name: "Azure cloud solutions",
    href: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
    helps: "Reaching your database from anywhere.",
  },
  {
    name: "Access online",
    href: "https://www.accessexperts.com.au/access-online",
    helps: "Sharing an Access system through the browser.",
  },
  {
    name: "Upgrades and migration",
    href: "https://www.accessexperts.com.au/upgrades-and-migration",
    helps: "Moving an old database to a current platform.",
  },
  {
    name: "3rd party product integration",
    href: "https://www.accessexperts.com.au/3rd-party-product-integration",
    helps: "Connecting Access to the other tools you use.",
  },
  {
    name: "Access with Power BI",
    href: "https://www.accessexperts.com.au/integrate-access-with-power-bi",
    helps: "Modern reporting on your existing data.",
  },
  {
    name: "Database development",
    href: "/services/database-development-and-solutions",
    helps: "Building a new database on the right platform.",
  },
  {
    name: "Is Access right for you?",
    href: "https://www.accessexperts.com.au/is-access-right-for-your-company",
    helps: "A straight answer before you invest.",
  },
];

const AccessSection = () => (
  <section
    id="access-and-databases"
    className={styles.section}
    aria-labelledby="access-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <AccessIcon />
        </span>
        <div>
          <span className={styles.eyebrow}>Databases</span>
          <h2 id="access-heading" className={styles.heading}>
            Access, SQL Server and{" "}
            <span className={styles.accent}>databases</span>
          </h2>
          <p className={styles.intro}>
            Whether your Access database needs rescuing, upgrading or replacing,
            our database team will tell you plainly what makes sense, then
            deliver it.
          </p>
        </div>
      </header>

      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Where it helps</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row" className={styles.name}>
                <ServiceLink href={row.href} className={styles.link}>
                  {row.name}
                </ServiceLink>
              </th>
              <td className={styles.helps}>{row.helps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default AccessSection;
