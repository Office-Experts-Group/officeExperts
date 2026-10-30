// /services/vba-macro-development/(components)/VbaToolChoice.jsx
// Server component. Four tools compared side by side. The cards share row heights through CSS subgrid,
// so "Runs in", "Best for" and "Watch for" line up across the row.
import Link from "next/link";

import styles from "@/styles/vbaToolChoice.module.scss";

// `featured` fills the card with the accent colour
const tools = [
  {
    name: "VBA",
    featured: true,
    runs: "Desktop Office on your computer. It does not run in Excel for the web or the new Outlook.",
    best: "Work that crosses applications, custom forms and ribbons, event-driven automation, and anything that has to run offline or touch files on the machine. No extra licence.",
    watch:
      "Macros must be enabled and trusted, and some security policies restrict them.",
  },
  {
    name: "Office Scripts",
    runs: "Excel on the web, Windows and Mac, with an enterprise or education licence.",
    best: "Cloud automation of Excel files in SharePoint or OneDrive, especially when Power Automate triggers it.",
    watch:
      "Excel only. There are no Excel events, so scripts run only when a person or a flow starts them, and they cannot reach the machine.",
  },
  {
    name: "Python in Excel",
    runs: "Inside worksheet cells, with the calculations run in the Microsoft cloud.",
    best: "Statistics, data analysis and charting with Python libraries, using data already in the workbook.",
    watch:
      "It analyses data in cells. It does not drive the Office interface or other applications.",
  },
  {
    name: "Power Automate",
    runs: "Unattended in the cloud, across Microsoft 365 and many other services.",
    best: "Scheduled and event-driven processes where nobody is at the keyboard, including running Office Scripts.",
    watch:
      "There is no VBA connector, so a desktop macro cannot be triggered from a flow.",
  },
];

const VbaToolChoice = () => (
  <section className={styles.section} id="which-tool">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Choosing the right tool</span>
        <h2 className={styles.heading}>
          VBA, Office Scripts, Python or{" "}
          <span className={styles.accent}>Power Automate?</span>
        </h2>
        <p className={styles.lede}>
          Microsoft now offers several ways to automate Office, and VBA is still
          the right answer for a lot of jobs. It isn&apos;t the right answer
          for all of them. As part of our{" "}
          <Link href="/services/business-analysis">business analysis</Link>, we
          tell you which one fits, even when it isn&apos;t VBA.
        </p>
      </header>

      <div className={styles.cards}>
        {tools.map(({ name, featured, runs, best, watch }) => (
          <article
            key={name}
            className={`${styles.card} ${featured ? styles.featured : ""}`}
          >
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.block}>
              <span className={styles.label}>Runs in</span>
              <p>{runs}</p>
            </div>
            <div className={styles.block}>
              <span className={styles.label}>Best for</span>
              <p>{best}</p>
            </div>
            <div className={styles.block}>
              <span className={styles.label}>Watch for</span>
              <p>{watch}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.note}>
        <p className={styles.rule}>
          Most real projects use more than one: a VBA form on the desktop, a
          Power Automate flow overnight, an Office Script in between.
        </p>
        <p className={styles.small}>
          We design the mix around how your team works, and you can read more
          about{" "}
          <Link href="/services/business-process-automation">
            business process automation
          </Link>
          . Microsoft&apos;s features, names and licensing change often, so we
          check the current documentation before we recommend anything.
        </p>
      </div>
    </div>
  </section>
);

export default VbaToolChoice;
