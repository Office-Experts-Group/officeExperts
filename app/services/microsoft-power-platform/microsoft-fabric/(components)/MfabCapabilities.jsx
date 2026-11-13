// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabCapabilities.jsx
// Standout section: hub layout. OneLake sits in the middle and the six
// workloads sit around it, three each side, joined by spoke lines.

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/mfabCapabilities.module.scss";
import {
  MfabHubSpokes,
  MfabHubSvg,
  MfabCapabilityArt,
} from "../(svgs)/MfabCapabilityArt";

const MFAB_WORKLOADS = [
  {
    art: "factory",
    title: "Data Factory",
    description: "Data integration and ETL",
    detail:
      "Connect to hundreds of data sources and orchestrate data movement with visual, low-code pipelines and dataflows. Transform and prepare data at scale without writing complex code.",
  },
  {
    art: "engineering",
    title: "Data Engineering",
    description: "Big data processing",
    detail:
      "Process large datasets with Apache Spark notebooks and lakehouses. Build transformation workflows that cope with enterprise-scale data volumes.",
  },
  {
    art: "warehouse",
    title: "Data Warehouse",
    description: "Enterprise data warehousing",
    detail:
      "Create SQL data warehouses built for analytics, with storage and compute that scale separately and the T-SQL your team already knows.",
  },
  {
    art: "science",
    title: "Data Science",
    description: "Machine learning and AI",
    detail:
      "Build, train and deploy machine learning models inside Fabric using familiar Python tools, without managing separate infrastructure.",
  },
  {
    art: "realtime",
    title: "Real-Time Intelligence",
    description: "Streaming data processing",
    detail:
      "Analyse streaming data such as sensor readings, logs and clicks as it arrives. Build live dashboards and alerts that respond to events as they happen.",
  },
  {
    art: "powerbi",
    title: "Power BI",
    description: "Business intelligence and reporting",
    detail:
      "Create interactive reports and dashboards that read directly from every Fabric workload, then share them securely across your organisation.",
    href: "/services/microsoft-power-platform/microsoft-power-bi",
  },
];

const MfabCapabilities = () => {
  return (
    <section
      className={styles.mfabCapabilities}
      id="mfab-capabilities"
      aria-labelledby="mfab-capabilities-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Six workloads, one lake</p>
            <h2 id="mfab-capabilities-heading" className={styles.heading}>
              Comprehensive Fabric{" "}
              <span className={styles.accent}>Capabilities</span>
            </h2>
            <p className={styles.text}>
              Microsoft Fabric brings six core workloads together on one
              platform, all sharing OneLake. Each one handles a different part
              of your analytics, and because they all read the same data, you
              don’t manage separate tools, build fragile integrations or worry
              about data compatibility between systems. Microsoft keeps adding
              to the platform, with newer additions such as Fabric Databases.
            </p>
          </header>
        </AnimateOnScroll>

        <div className={styles.hubLayout}>
          <div className={styles.hub}>
            <MfabHubSpokes className={styles.spokes} />
            <div className={styles.hubCircle}>
              <MfabHubSvg />
            </div>
          </div>

          {MFAB_WORKLOADS.map(({ art, title, description, detail, href }) => (
            <article key={title} className={styles.slot}>
              <div className={styles.card}>
                <span className={styles.art}>
                  <MfabCapabilityArt type={art} />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>
                    {href ? <Link href={href}>{title}</Link> : title}
                  </h3>
                  <p className={styles.cardDescription}>{description}</p>
                  <p className={styles.cardDetail}>{detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MfabCapabilities;
