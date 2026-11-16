// /app/services/microsoft-power-platform/microsoft-power-apps/(components)/PappsLicences.jsx
import Link from "next/link";

import { PappsCheckIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsLicences.module.scss";

const PAPPS_LICENCE_ROWS = [
  {
    data: "SharePoint, Excel, Outlook, Teams and other Microsoft 365 services",
    means: "Often covered by the licences you already hold",
    we: "Confirm against your plan, then build",
  },
  {
    data: "SQL Server, Dataverse or other premium data sources",
    means: "Premium licences are usually needed for the people using the app",
    we: "Cost the licences into the quote up front",
  },
  {
    data: "A mix of both",
    means: "Depends on which parts of the app touch which data",
    we: "Design the app to keep licence costs down where we can",
  },
];

const PAPPS_LICENCE_POINTS = [
  "Available with Office 365",
  "Robust built-in security",
  "Data protection and efficiency",
  "A standard licence covers a vast range of options",
];

const PappsLicences = () => {
  return (
    <section
      className={styles.pappsLicences}
      id="papps-licences"
      aria-labelledby="papps-licences-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="papps-licences-heading" className={styles.heading}>
            Use your existing Office 365 licences{" "}
            <span className={styles.accent}>for Power Apps</span>
          </h2>
          <div className={styles.copy}>
            <p>
              Many Microsoft 365 and Office 365 plans already include Power Apps
              for apps built on Microsoft 365 data, so a custom app may not need
              any extra licensing. Whether yours does depends on your plan and
              on the data the app connects to.
            </p>
            <p>
              We check this before we quote, so there are no licensing surprises
              after launch. See our{" "}
              <Link href="/services/microsoft-office-365">
                Microsoft 365 services
              </Link>{" "}
              for the wider picture.
            </p>
          </div>
        </header>

        <table className={styles.table}>
          <caption className={styles.srOnly}>
            Likely licensing path for different kinds of Power Apps
          </caption>
          <thead>
            <tr>
              <th scope="col">Where the app’s data lives</th>
              <th scope="col">What that usually means</th>
              <th scope="col">What we do</th>
            </tr>
          </thead>
          <tbody>
            {PAPPS_LICENCE_ROWS.map(({ data, means, we }) => (
              <tr key={data}>
                <th scope="row" data-label="Where the app’s data lives">
                  {data}
                </th>
                <td data-label="What that usually means">{means}</td>
                <td data-label="What we do">{we}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.note}>
          Microsoft changes its licensing from time to time, so treat this table
          as a guide and not a quote.
        </p>

        <ul className={styles.points}>
          {PAPPS_LICENCE_POINTS.map((point) => (
            <li key={point} className={styles.point}>
              <span className={styles.pointIcon}>
                <PappsCheckIcon />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PappsLicences;
