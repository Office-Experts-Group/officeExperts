// app/services/cloud-based-solutions-with-azure/(components)/AzureIntegratedSolutions.jsx
// Mobile, web and database integration on Azure. Replaces PageSegment4New, whose copy referred to
// ASP pages and "3 major platforms". Now grouped by layer, with the Azure services and frameworks we use.
import Link from "next/link";

// SCSS module (source: styles/azureIntegratedSolutions.module.scss)
import styles from "@/styles/azureIntegratedSolutions.module.scss";
// Custom illustration: Azure SQL hub with the apps and systems connected to it
import { AzureHubSvg } from "../(svgs)/AzureHubSvg";

// One card per layer. `link` is optional and points to the page covering that layer in depth.
const layers = [
  {
    title: "Databases",
    chips: ["Azure SQL Database", "Azure Database for MySQL", "Azure Database for PostgreSQL", "Blob Storage"],
    text: "SQL Server, MySQL or PostgreSQL, hosted and patched by Microsoft, with files and images kept in Blob Storage.",
  },
  {
    title: "Web and mobile front ends",
    chips: ["Next.js", "React", "React Native", "Power Apps"],
    text: "Customer portals, booking systems and iOS and Android apps, built on modern frameworks and the same data.",
    link: { href: "/services/app-and-custom-development", text: "Custom app development" },
  },
  {
    title: "Hosting and APIs",
    chips: ["Azure App Service", "Azure Functions", "Static Web Apps", "API Management"],
    text: "Websites and secure APIs that scale with demand, so you are not paying for a server that sits idle overnight.",
  },
  {
    title: "Your existing systems",
    chips: ["Xero", "MYOB", "Salesforce", "Microsoft 365"],
    text: "Accounting, CRM and other third-party products connected to your database, so data is only entered once.",
    link: {
      href: "/services/3rd-party-application-or-office-integration",
      text: "3rd party app integration",
    },
  },
];

const AzureIntegratedSolutions = () => {
  return (
    <section className={styles.section} id="integrated-solutions">
      <div className={styles.inner}>
        <div className={styles.top}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Web, mobile and database integration</span>
            <h2 className={styles.heading}>
              One Azure database{" "}
              <span className={styles.accent}>behind every app you use</span>
            </h2>
            <p className={styles.intro}>
              Azure lets us host the database, the website and the APIs that
              connect them in one place, with one bill and one set of security
              controls. That makes it straightforward to give customers a portal,
              field staff a mobile app and managers live reports, all working
              from the same data.
            </p>
            <p className={styles.footer}>
              Once your data is in Azure it can also feed{" "}
              <Link href="/services/dashboards">Power BI dashboards</Link> and{" "}
              <Link href="/services/database-development-and-solutions#ai-and-business-data">
                AI assistants that answer questions about your business
              </Link>
              .
            </p>
          </header>

          <div className={styles.visual}>
            <AzureHubSvg />
          </div>
        </div>

        {/* ── Layer cards ── */}
        <ul className={styles.layers}>
          {layers.map((layer) => (
            <li key={layer.title} className={styles.layer}>
              <h3>{layer.title}</h3>
              <div className={styles.chips}>
                {layer.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <p>{layer.text}</p>
              {layer.link && (
                <Link href={layer.link.href} className={styles.layerLink}>
                  {layer.link.text}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AzureIntegratedSolutions;
