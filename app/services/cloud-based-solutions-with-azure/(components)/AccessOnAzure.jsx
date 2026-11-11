// app/services/cloud-based-solutions-with-azure/(components)/AccessOnAzure.jsx
// The Access front end + Azure SQL back end option, our most cost-effective cloud solution.
// Takes the copy from PageSegmentMain2 and the "Access/Azure Requirements" list from PageSegment6,
// updated for the current ODBC driver and the free Access Runtime.
import Link from "next/link";

// SCSS module (source: styles/accessOnAzure.module.scss)
import styles from "@/styles/accessOnAzure.module.scss";
// Custom illustration: Access form linked to Azure SQL over an encrypted ODBC connection
import { AccessLinkSvg } from "../(svgs)/AccessLinkSvg";

// What changes for the business, shown as cards on the left
const benefits = [
  {
    title: "Same forms, same reports",
    text: "We keep the screens your staff already use and tune the queries that slow down over the internet, moving the heavy ones into views and stored procedures on the server.",
  },
  {
    title: "Collect data from anywhere",
    text: "With the data in the cloud, a web form or mobile app can capture records from clients and field staff and save them straight into the same tables Access reads.",
  },
  {
    title: "Low running costs",
    text: "It costs slightly more than a traditional Access client/server setup, with a monthly hosting cost of about $35. We can host and maintain the Azure database for you, or set it up in your own subscription.",
  },
];

// What each user's device needs, shown in the panel on the right
const requirements = [
  "A Windows PC, laptop or tablet",
  "Microsoft Access, or the free Access Runtime",
  "Microsoft ODBC Driver 18 for SQL Server (free)",
  "A reliable internet connection",
  "An Azure subscription, or we host it for you",
];

const AccessOnAzure = () => {
  return (
    <section className={styles.section} id="access">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Access front end, Azure back end</span>
          <h2 className={styles.heading}>
            The most cost-effective way{" "}
            <span className={styles.accent}>to put Access in the cloud</span>
          </h2>
          <p>
            If your team already knows its Access forms and reports, there is no
            need to throw them away. We move the tables into Azure SQL Database
            and relink the Access front end, so the application looks the same
            but the data lives in the cloud. Staff can open it from home, a branch
            office or a client site without connecting directly to your server.
          </p>
        </header>

        <div className={styles.grid}>
          {/* ── Left: benefit cards and further reading ── */}
          <div className={styles.main}>
            <ul className={styles.benefits}>
              {benefits.map((item) => (
                <li key={item.title} className={styles.benefit}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>

            <p className={styles.note}>
              Is the database already struggling with size, speed or remote
              access? Our article on{" "}
              <Link href="https://www.accessexperts.com.au/blog/your-access-database-needs-a-cloud-strategy">
                why your Access database needs a cloud strategy
              </Link>{" "}
              covers the warning signs. If it is also stuck on an old version of
              Office, we handle that as part of an{" "}
              <Link href="/services/upgrades-and-migration">
                Access upgrade and migration
              </Link>
              , and our{" "}
              <Link href="/services/database-development-and-solutions#sql-server-and-azure">
                SQL Server and Azure back-end
              </Link>{" "}
              guide explains when a server on your own network is the better fit.
            </p>
          </div>

          {/* ── Right: requirements panel ── */}
          <aside className={styles.panel} aria-labelledby="access-requirements">
            <div className={styles.panelVisual}>
              <AccessLinkSvg />
            </div>
            <h3 id="access-requirements" className={styles.panelHeading}>
              What each user needs
            </h3>
            <ul className={styles.requirements}>
              {requirements.map((item) => (
                <li key={item}>
                  {/* Tick icon, decorative */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8.5l3.2 3L13 4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.panelNote}>
              Staff on Mac or iPad? See the{" "}
              <a href="#integrated-solutions">web and mobile options</a> below.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AccessOnAzure;
