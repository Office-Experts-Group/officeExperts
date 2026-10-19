// app/services/by-business-solution/database-development-and-solutions/(components)/WebDatabases.jsx
// Web and mobile databases. Each engine is drawn as an "entity" card styled like a table in a
// schema diagram, on a dotted canvas background. Replaces the old ASP.NET and Azure web segments.
import Link from "next/link";

// Compiled CSS module (source: styles/webDatabases.module.scss)
import styles from "../../../../../styles/webDatabases.module.scss";
import { WebStackSvg } from "../(svgs)/WebStackSvg";

const engines = [
  {
    name: "PostgreSQL",
    model: "Relational",
    hosting: "Any cloud or server",
    text: "Open source and dependable. Our default for web apps that need strong relationships, reporting and room to grow.",
  },
  {
    name: "Supabase",
    model: "Relational (PostgreSQL)",
    hosting: "Managed cloud",
    text: "Hosted PostgreSQL with sign-in, file storage, row-level security and real-time updates built in, without a proprietary data format.",
  },
  {
    name: "Azure SQL",
    model: "Relational (SQL Server)",
    hosting: "Microsoft Azure",
    text: "The natural fit when the business already runs on Microsoft 365, and staff sign in with their existing Microsoft accounts.",
  },
  {
    name: "Firebase",
    model: "Document (Firestore)",
    hosting: "Google Cloud",
    text: "Real-time data, authentication and hosting in one platform. Strong for mobile apps and screens that update live.",
  },
  {
    name: "MongoDB",
    model: "Document",
    hosting: "Atlas or self-hosted",
    text: "Flexible records for data that doesn't fit neat rows, such as product catalogues, logs or form submissions that vary.",
  },
  {
    name: "MySQL",
    model: "Relational",
    hosting: "Most web hosts",
    text: "Widely supported and common behind WordPress sites and CRM portals that need to share data with other systems.",
  },
];

const WebDatabases = () => {
  return (
    <section className={styles.section} id="web-databases">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Web and mobile databases</span>
            <h2 className={styles.heading}>
              Databases for the browser,{" "}
              <span className={styles.accent}>the phone and beyond</span>
            </h2>
            <p>
              Not every database belongs on a Windows desktop. When customers,
              contractors or field staff need to sign in from any device, the
              data sits behind a secure web or mobile app instead.
            </p>
            <p>
              We build these front ends in Next.js and React, with React Native
              for mobile, through our{" "}
              <Link
                href="/services/microsoft-office-365/app-and-custom-development"
                className={styles.link}
              >
                app and custom development
              </Link>{" "}
              team. The database underneath is chosen for the job, inside or
              outside the Microsoft ecosystem, and existing data can be brought
              across from Access, Excel or SQL Server. For browser-based portals
              and customer logins, see our{" "}
              <Link
                href="/services/by-business-solution/online-solutions"
                className={styles.link}
              >
                online solutions
              </Link>
              .
            </p>
          </div>

          <div className={styles.visual}>
            <WebStackSvg />
          </div>
        </div>

        {/* Engine cards on a dotted "schema canvas" */}
        <ul className={styles.canvas}>
          {engines.map((engine) => (
            <li key={engine.name} className={styles.entity}>
              <h3 className={styles.entityName}>{engine.name}</h3>
              <dl className={styles.fields}>
                <div>
                  <dt>model</dt>
                  <dd>{engine.model}</dd>
                </div>
                <div>
                  <dt>hosting</dt>
                  <dd>{engine.hosting}</dd>
                </div>
              </dl>
              <p className={styles.entityText}>{engine.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WebDatabases;
