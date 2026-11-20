// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiBenefits.jsx
import {
  ApbiInteractiveArt,
  ApbiSharingArt,
  ApbiRefreshArt,
  ApbiCrossDataArt,
  ApbiInsightArt,
} from "../(svgs)/ApbiBenefitArt";
import { ArrowIcon } from "../(svgs)/ApbiIcons";

import styles from "@/styles/apbiBenefits.module.scss";

const APBI_BENEFITS = [
  {
    id: "interactive",
    Art: ApbiInteractiveArt,
    title: "Interactive dashboards",
    text: "Your Access tables and queries turn into live-feeling visual reports that people can click into. Pick a region, a month or a customer and every chart on the page responds, so the follow-up question gets answered on the spot instead of in next week’s export.",
  },
  {
    id: "sharing",
    Art: ApbiSharingArt,
    title: "Centralised sharing",
    text: "Publish dashboards to the Power BI service or add them to a Microsoft Teams channel, so people open one link instead of waiting for a file. Permissions decide who sees what, and licensing depends on how widely you share, which we cover with you up front.",
  },
  {
    id: "refresh",
    Art: ApbiRefreshArt,
    title: "Automated refresh",
    text: "Updates can be scheduled straight from your Access source, so reports are current each morning without anyone re-exporting. Refresh runs at the times you choose rather than continuously, and we set up the connection so it keeps working.",
  },
  {
    id: "crossdata",
    Art: ApbiCrossDataArt,
    title: "Cross-data analysis",
    text: "Combine Access with Excel, SQL Server, SharePoint or online services through their APIs, and see the complete picture on one page. It is often the first time a business sees its sales, projects and finances side by side.",
  },
  {
    id: "insight",
    Art: ApbiInsightArt,
    title: "Modern visuals and AI-driven insights",
    text: "Spot trends and outliers in a few clicks. Power BI’s built-in analytics can flag an unusual movement and help explain what drove it, though the results are only as good as the data behind them, which is why we tidy that first.",
  },
];

const ApbiBenefits = () => (
  <section
    id="apbi-benefits"
    className={styles.apbiBenefits}
    aria-labelledby="apbi-benefits-heading"
  >
    <div className={styles.inner}>
      <div className={styles.aside}>
        <p className={styles.eyebrow}>What Power BI brings</p>
        <h2 id="apbi-benefits-heading" className={styles.heading}>
          What Power BI brings{" "}
          <span className={styles.accent}>to your Access data</span>
        </h2>
        <p className={styles.lede}>
          Integrating Power BI with Access opens up possibilities that Access on
          its own can’t offer. In practice, five things change for the people
          who use your data.
        </p>
        <a href="#contact" className={styles.link}>
          Talk to us about your database <ArrowIcon />
        </a>
      </div>

      <div className={styles.stream}>
        {APBI_BENEFITS.map(({ id, Art, title, text }) => (
          <article key={id} className={styles.item}>
            <div className={styles.art}>
              <Art />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ApbiBenefits;
