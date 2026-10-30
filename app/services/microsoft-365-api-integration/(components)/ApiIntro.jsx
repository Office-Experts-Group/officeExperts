// app/services/microsoft-365-api-integration/(components)/ApiIntro.jsx
// Above the fold: imported normally in page.js (not next/dynamic) so it's in the first paint.

import AnimateOnScroll from "@/components/AnimateOnScroll";

// Hub diagram (custom SVG component, no image request)
import { ApiHubSvg } from "../(svgs)/ApiHubSvg";

import styles from "@/styles/apiIntro.module.scss";

// The API families covered on this page, shown as chips under the copy
const apis = [
  "Office JavaScript API",
  "Microsoft Graph",
  "Dataverse Web API",
  "Power BI REST API",
  "Microsoft 365 Copilot APIs",
  "MCP servers",
  "SQL Server & ODBC",
];

const ApiIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div>
          <p className={styles.eyebrow}>Microsoft 365 API integration</p>
          <h2 className={styles.heading}>
            Your Microsoft apps already hold the data.{" "}
            <span className={styles.accent}>We get them talking.</span>
          </h2>
          <p className={styles.text}>
            Most organisations run on Word, Excel, Outlook, Teams and
            SharePoint, with a Power App or an Access database somewhere in the
            mix. Each one does its job, but information gets retyped every time
            it moves between them. API integration connects them directly, so a
            figure entered once flows into the spreadsheet, the report, the
            email and the dashboard without anyone copying it across.
          </p>
          <p className={styles.text}>
            Office Experts Group has built Microsoft solutions for Australian
            businesses since 2000. This page brings our Word, Excel, Power
            Platform and Access integration work together in one place, and sets
            out what the Microsoft APIs can realistically do in 2026, including
            the newer AI agent and Model Context Protocol (MCP) options.
          </p>

          <ul className={styles.chips} aria-label="APIs we work with">
            {apis.map((api) => (
              <li key={api} className={styles.chip}>
                {api}
              </li>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>

      <div className={styles.visual}>
        <ApiHubSvg />
      </div>
    </div>
  </section>
);

export default ApiIntro;
