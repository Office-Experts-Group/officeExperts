// app/services/power-pivot/(components)/PowerPivotServices.jsx
// "How our Power Pivot consultants can help": five services as cards plus a contact card.
// Server component. The id "how-we-help" is the target of the hero's secondary link.
import Link from "next/link";

// Compiled CSS module (source: styles/powerPivotServices.module.scss)
import styles from "@/styles/powerPivotServices.module.scss";
// Original line icons stored with the route
import {
  ModelIcon,
  CodeIcon,
  QueryIcon,
  SpeedIcon,
  ChartIcon,
} from "../(svgs)/ServiceIcons";

// The five services. Each body is JSX so it can carry inline links.
const services = [
  {
    icon: <ModelIcon />,
    title: "Data modelling and relationships",
    body: (
      <>
        We design clean, efficient data models that connect multiple data
        sources and eliminate redundancy. With properly structured
        relationships, your team can slice and analyse data in meaningful ways.
      </>
    ),
  },
  {
    icon: <CodeIcon />,
    title: "DAX formulas and business logic",
    body: (
      <>
        Our consultants write optimised DAX that captures your business rules,
        from simple metrics to complex KPIs. We make sure calculations are not
        only accurate, but fast and scalable.
      </>
    ),
  },
  {
    icon: <QueryIcon />,
    title: "Integration with Power Query",
    body: (
      <>
        Already using <Link href="/services/power-query">Power Query</Link>? We
        help you take the next step by feeding transformed data directly into
        Power Pivot models, giving you a seamless end-to-end data solution.
      </>
    ),
  },
  {
    icon: <SpeedIcon />,
    title: "Performance optimisation",
    body: (
      <>
        Slow reports and bloated workbooks are common with poorly built models.
        We apply proven best practices to improve performance, reduce file size
        and deliver responsive reporting.
      </>
    ),
  },
  {
    icon: <ChartIcon />,
    title: "Dashboard-ready reporting",
    body: (
      <>
        From{" "}
        <Link href="https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions">
          Excel pivot tables
        </Link>{" "}
        to{" "}
        <Link href="/services/dashboards">Power BI dashboards</Link>, we design
        reports that are easy to explore, share and understand. No more manual
        updates or disconnected spreadsheets.
      </>
    ),
  },
];

const PowerPivotServices = () => {
  return (
    <section className={styles.section} id="how-we-help">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we help</span>
          <h2 className={styles.heading}>
            How our Power Pivot consultants{" "}
            <span className={styles.accent}>can help.</span>
          </h2>
          <p>
            We specialise in Microsoft tools, so your Power Pivot setup will
            integrate seamlessly with Excel, Power BI, Power Query and Power
            Automate. Every project starts with a{" "}
            <Link href="/services/business-analysis">business analysis</Link>{" "}
            conversation, so the model answers the questions your team actually
            asks. From planning to deployment, we work closely with you to
            deliver practical, sustainable solutions.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map(({ icon, title, body }) => (
            <article key={title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{body}</p>
            </article>
          ))}

          {/* Sixth grid cell: contact card */}
          <aside className={`${styles.card} ${styles.contactCard}`}>
            <h3 className={styles.contactTitle}>
              Talk to a Power Pivot consultant
            </h3>
            <div className={styles.contactActions}>
              <Link href="#contact" className="btn">
                Book a free consultation
              </Link>
              <a href="tel:1300102810" className={styles.phone}>
                Or call 1300 102 810
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PowerPivotServices;
