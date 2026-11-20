// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiUseCases.jsx
// Native <details> rows: short to scan, with the full copy still in the HTML.
import {
  ApbiSalesArt,
  ApbiOperationsArt,
  ApbiPortalArt,
} from "../(svgs)/ApbiUseCaseArt";
import { PlusIcon } from "../(svgs)/ApbiIcons";

import styles from "@/styles/apbiUseCases.module.scss";

const APBI_USE_CASES = [
  {
    id: "sales",
    Art: ApbiSalesArt,
    tag: "Sales",
    title: "Sales performance dashboards",
    paragraphs: [
      "Sales data stored in Access is visualised in Power BI for regional and product-level analysis, helping managers track their key measures against targets instead of waiting on month-end exports.",
      "A typical build links the customers, orders and products tables to a date table, then lets a sales manager move from the national total down to a single region or product line in a couple of clicks.",
    ],
  },
  {
    id: "operations",
    Art: ApbiOperationsArt,
    tag: "Operations",
    title: "Operational efficiency",
    paragraphs: [
      "Combining Access with Excel workbooks and third-party systems, such as accounting or CRM tools reached through their APIs, gives business owners a single view of how the business is running.",
      "Instead of opening three programs and reconciling them by hand, the team looks at one page where jobs, invoices and targets sit side by side.",
    ],
  },
  {
    id: "portals",
    Art: ApbiPortalArt,
    tag: "Reporting",
    title: "Internal reporting portals",
    paragraphs: [
      "Power BI dashboards can be placed in a company intranet or a Microsoft Teams channel, so people explore their own numbers without leaving the place they already work.",
      "Access stays the data-entry system and the portal becomes the place everyone else goes to read the results. Permissions control who sees which report, so sensitive figures stay with the right people.",
    ],
  },
];

const ApbiUseCases = () => (
  <section
    id="apbi-usecases"
    className={styles.apbiUseCases}
    aria-labelledby="apbi-usecases-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <h2 id="apbi-usecases-heading" className={styles.heading}>
          Real-world use cases{" "}
          <span className={styles.accent}>in Australia</span>
        </h2>
        <p className={styles.lede}>
          Here are a few ways Australian organisations put this integration to
          work. They are typical set-ups rather than named client stories, and
          you can see real projects in the case studies further down the page.
        </p>
      </header>

      <div className={styles.rows}>
        {APBI_USE_CASES.map(({ id, Art, tag, title, paragraphs }, i) => (
          <details key={id} className={styles.row} open={i === 0}>
            <summary className={styles.summary}>
              <span className={styles.art}>
                <Art />
              </span>
              <span className={styles.head}>
                <span className={styles.tag}>{tag}</span>
                <h3 className={styles.title}>{title}</h3>
              </span>
              <span className={styles.toggle}>
                <span className={styles.more}>Read more</span>
                <span className={styles.less}>Show less</span>
                <PlusIcon />
              </span>
            </summary>
            <div className={styles.content}>
              {paragraphs.map((text) => (
                <p key={text} className={styles.text}>
                  {text}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default ApbiUseCases;
