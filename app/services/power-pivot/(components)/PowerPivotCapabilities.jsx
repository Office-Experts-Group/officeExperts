// app/services/power-pivot/(components)/PowerPivotCapabilities.jsx
// "What is Power Pivot?": the four things it lets a team do, as unordered cards with custom icons.
// Server component. The id is an anchor for internal links.

// Compiled CSS module (source: styles/powerPivotCapabilities.module.scss)
import styles from "@/styles/powerPivotCapabilities.module.scss";
// Original line icons stored with the route
import {
  RowsIcon,
  RelationshipsIcon,
  DaxIcon,
  ReportIcon,
} from "../(svgs)/CapabilityIcons";

// The four capabilities, in the order they build on each other
const capabilities = [
  {
    icon: <RowsIcon />,
    title: "Millions of rows, high performance",
    text: "The Data Model compresses your data in memory, so reports stay quick on volumes that would stall an ordinary worksheet.",
  },
  {
    icon: <RelationshipsIcon />,
    title: "Relationships across multiple tables",
    text: "Link sales, customers, products and dates once, then analyse them together without chains of lookup formulas.",
  },
  {
    icon: <DaxIcon />,
    title: "Powerful DAX calculations",
    text: "Data Analysis Expressions (DAX) handle year-to-date totals, margins and ratios, written once and reused in every report.",
  },
  {
    icon: <ReportIcon />,
    title: "Dynamic pivot tables and dashboards",
    text: "Pivot tables, charts and slicers all read from the same model, so they refresh together and always agree.",
  },
];

const PowerPivotCapabilities = () => {
  return (
    <section className={styles.section} id="what-is-power-pivot">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>What is Power Pivot?</span>
          <h2 className={styles.heading}>
            The data modelling engine{" "}
            <span className={styles.accent}>inside Excel.</span>
          </h2>
          <p>
            Power Pivot is Microsoft&apos;s in-memory data modelling engine. It
            is built into Excel as the Data Model, and the same technology
            powers Power BI.
          </p>
        </header>

        <div className={styles.grid}>
          {capabilities.map(({ icon, title, text }) => (
            <article key={title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {icon}
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{text}</p>
            </article>
          ))}
        </div>

        <p className={styles.closing}>
          Whether you&apos;re working with finance, operations, sales or any
          other department, Power Pivot transforms how your team interacts with
          data, turning spreadsheets into smart, scalable reporting systems.
        </p>
      </div>
    </section>
  );
};

export default PowerPivotCapabilities;
