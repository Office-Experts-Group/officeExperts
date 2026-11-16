// app/services/microsoft-365-api-integration/(components)/ApiIntro.jsx

// Hub diagram (custom SVG component, no image request)
import Link from "next/link";
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
  <>
    <div className={styles.lightHero}></div>
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.eyebrow}>Microsoft 365 API integration</h1>
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

          <Link href="#contact" className="btn">
            Get a free assessment
          </Link>

          <ul className={styles.chips} aria-label="APIs we work with">
            {apis.map((api) => (
              <li key={api} className={styles.chip}>
                {api}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <ApiHubSvg />
        </div>
      </div>
    </section>
  </>
);

export default ApiIntro;
