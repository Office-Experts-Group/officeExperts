// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiTools.jsx
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbdiTools.module.scss";
import PbdiOrbitDiagram from "../(svgs)/PbdiOrbitArt";

const PBDI_TOOLS = [
  {
    name: "Microsoft Power BI",
    href: "/services/microsoft-power-platform/power-bi",
    text: "The foundation of your analytics and reporting environment.",
  },
  {
    name: "Azure Data Factory",
    href: "/services/cloud-based-solutions-with-azure",
    text: "Scalable data pipelines for complex integrations and enterprise-level ETL.",
  },
  {
    name: "Power Query",
    href: "/services/power-query",
    text: "Often all you need: connect, clean and combine sources without a custom build.",
  },
  {
    name: "SQL Server Integration Services (SSIS)",
    href: "/services/sql-server-and-access-integration",
    text: "Powerful ETL capabilities for on-premises and hybrid solutions.",
  },
  {
    name: "Power Automate",
    href: "/services/microsoft-power-platform/power-automate",
    text: "Workflow automation that connects Power BI with your broader business processes.",
  },
  {
    name: "SharePoint",
    href: "/services/microsoft-power-platform/sharepoint-consulting-and-development",
    text: "A common data source and collaboration platform, integrated seamlessly with Power BI.",
  },
  {
    name: "REST APIs",
    href: "/services/microsoft-365-api-integration",
    text: "Custom API integrations to connect virtually any cloud or on-premises application.",
  },
  {
    name: "Microsoft Dataverse",
    text: "Unified storage for data from across the Microsoft Power Platform.",
  },
];

const PbdiTools = () => (
  <section
    id="pbdi-tools"
    className={styles.pbdiTools}
    aria-labelledby="pbdi-tools-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Tools</p>
        <h2 id="pbdi-tools-heading" className={styles.heading}>
          Tools and platforms{" "}
          <span className={styles.accent}>we work with</span>
        </h2>
        <p className={styles.lede}>
          To deliver robust, scalable integrations we use a wide range of
          Microsoft and third-party tools. We choose the right mix for your
          goals, your IT environment and your budget.
        </p>
      </header>

      <figure className={styles.orbit}>
        <AnimateOnScroll animation="scale-up" duration={1} delay={0.1}>
          <PbdiOrbitDiagram labelClass={styles.orbitLabel} />
        </AnimateOnScroll>
      </figure>

      <dl className={styles.tools}>
        {PBDI_TOOLS.map(({ name, href, text }) => (
          <div key={name} className={styles.tool}>
            <dt className={styles.toolName}>
              {href ? <Link href={href}>{name}</Link> : name}
            </dt>
            <dd className={styles.toolText}>{text}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default PbdiTools;
