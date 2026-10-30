// /services/vba-macro-development/(components)/VbaCapabilities.jsx
// Server component. A bento grid: three illustrated tiles, then five text tiles.
// The grid spans are set by tile position in vbaCapabilities.module.scss.
import Link from "next/link";

import { VbaFormsSvg } from "../(svgs)/VbaFormsSvg";
import { VbaRibbonSvg } from "../(svgs)/VbaRibbonSvg";
import { VbaDataFlowSvg } from "../(svgs)/VbaDataFlowSvg";
import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaCapabilities.module.scss";

// `Art` is an optional illustration; `emphasis` fills the tile with the accent colour
const tiles = [
  {
    id: "forms",
    Art: VbaFormsSvg,
    title: "Custom forms and user interfaces",
    text: "Data-entry forms that check answers as people type, offer drop-downs and conditional fields, and write straight into your workbook, document or database.",
    href: "/services/microsoft-word/popup-forms",
    linkText: "See popup forms for Word",
  },
  {
    id: "ribbons",
    Art: VbaRibbonSvg,
    title: "Custom ribbons and toolbars",
    text: "Put your most-used functions one click away on a tab of your own. Fewer errors, less training and more consistent results across the team.",
    href: "/services/microsoft-word/custom-toolbars-and-ribbons",
    linkText: "Custom toolbars and ribbons",
  },
  {
    id: "data",
    Art: VbaDataFlowSvg,
    title: "External data connections",
    text: "Live links from your workbooks to SQL databases, Access, SharePoint, Dataverse, text files and third-party applications, so the numbers are always current.",
    href: "/services/sql-server-and-access-integration",
    linkText: "SQL Server and Access integration",
  },
  {
    id: "automation",
    emphasis: true,
    title: "Task automation",
    text: "Hours of data entry, formatting and file handling become a one-click process. What used to take an afternoon takes seconds, and it is done the same way every time.",
    href: "/services/business-process-automation",
    linkText: "Business process automation",
  },
  {
    id: "web",
    title: "Web scraping and API integration",
    text: "Pull data from websites, REST APIs and online services straight into Office, so critical information arrives in your spreadsheet without anyone copying and pasting.",
    href: "/services/3rd-party-application-or-office-integration",
    linkText: "3rd party app integration",
  },
  {
    id: "validation",
    title: "Data validation",
    text: "Multi-level checks that stop mistakes at the point of entry and keep data consistent across workbooks, documents and databases.",
  },
  {
    id: "reporting",
    title: "Automated reporting",
    text: "Charts, pivot tables and formatted reports generated on demand or on a schedule, ready to present or send.",
    href: "/services/dashboards",
    linkText: "Dashboards and reporting",
  },
  {
    id: "processing",
    title: "Data processing",
    text: "Clean, sort, filter, merge and transform large datasets to your rules, including custom algorithms for the awkward jobs.",
    href: "https://www.excelexperts.com.au/data-manipulation",
    linkText: "Data manipulation services",
  },
];

const VbaCapabilities = () => (
  <section className={styles.section} id="capabilities">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>What VBA can do</span>
        <h2 className={styles.heading}>
          Automation built into Office,{" "}
          <span className={styles.accent}>shaped around your process.</span>
        </h2>
        <p className={styles.lede}>
          All Office products come with a macro recorder that captures a series
          of steps so you can repeat them. The recorder writes the VBA for you,
          but it is only the tip of the iceberg. These are the things we build
          once the recorder runs out of road.
        </p>
      </header>

      <ul className={styles.grid}>
        {tiles.map(({ id, Art, emphasis, title, text, href, linkText }) => (
          <li
            key={id}
            className={`${styles.tile} ${emphasis ? styles.emphasis : ""}`}
          >
            {Art && (
              <div className={styles.art} aria-hidden="true">
                <Art />
              </div>
            )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            {href && (
              <Link href={href} className={styles.link}>
                {linkText}
                <VbaArrowSvg />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default VbaCapabilities;
