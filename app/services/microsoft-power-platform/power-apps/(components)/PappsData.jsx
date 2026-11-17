// /app/services/microsoft-power-platform/power-apps/(components)/PappsData.jsx
import Link from "next/link";

import PappsDataSvg from "../(svgs)/PappsDataSvg";
import { PappsArrowIcon, PappsCheckIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsData.module.scss";

const PAPPS_DATA_POINTS = [
  "Seamless connection to existing data sources",
  "Facilitates data-driven decision-making",
  "Optimises operational efficiency",
];

const PAPPS_DATA_LINKS = [
  {
    href: "/services/microsoft-power-platform/power-bi",
    text: "Report on the same data with Power BI",
  },
  {
    href: "/services/sql-server-and-access-integration",
    text: "Connect SQL Server and Access",
  },
  {
    href: "https://www.accessexperts.com.au/blog/using-power-platform-with-access-database",
    text: "Using Power Platform with an Access database",
  },
];

const PappsData = () => {
  return (
    <section
      className={styles.pappsData}
      id="papps-data"
      aria-labelledby="papps-data-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.headingBlock}>
            <p className={styles.eyebrow}>Bridge the gap</p>
            <h2 id="papps-data-heading" className={styles.heading}>
              Enhanced connectivity{" "}
              <span className={styles.accent}>to existing data</span>
            </h2>
          </div>
          <div className={styles.copy}>
            <p>
              You do not have to move your information to get a better app.
              Power Apps connects to the places your data already lives, so
              staff work with current records rather than a copy.
            </p>
            <p>
              Which sources you can use depends on your Microsoft 365 plan and
              licences. We confirm that with you before we design anything.
            </p>
          </div>
        </header>

        <figure className={styles.figure}>
          <div className={styles.diagramScroll}>
            <div className={styles.diagramInner}>
              <PappsDataSvg />
            </div>
          </div>
        </figure>

        <ul className={styles.points}>
          {PAPPS_DATA_POINTS.map((point) => (
            <li key={point} className={styles.point}>
              <span className={styles.pointIcon}>
                <PappsCheckIcon />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {PAPPS_DATA_LINKS.map(({ href, text }) => (
            <Link key={href} href={href} className={styles.arrowLink}>
              {text}
              <PappsArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PappsData;
