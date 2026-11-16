// /app/services/microsoft-power-platform/microsoft-power-pages/(components)/PpgIntro.jsx

import styles from "@/styles/ppgIntro.module.scss";
import {
  PpgPortalArt,
  PpgFormArt,
  PpgDashboardArt,
  PpgRolesArt,
} from "../(svgs)/PpgCapabilityArt";

const PPG_CAPABILITIES = [
  {
    id: "portals",
    title: "External portals",
    Art: PpgPortalArt,
    detail:
      "Customer self-service, partner login areas, job applications, event registrations. Virtually anywhere external users need controlled access to your data.",
  },
  {
    id: "forms",
    title: "Data-connected forms",
    Art: PpgFormArt,
    detail:
      "Forms that write directly to Dataverse tables, start Power Automate flows and update records without a developer touching the backend.",
  },
  {
    id: "powerbi",
    title: "Embedded Power BI",
    Art: PpgDashboardArt,
    detail:
      "Show dashboards to signed-in users on your site, with each person limited to the data their role allows.",
  },
  {
    id: "roles",
    title: "Role-based access",
    Art: PpgRolesArt,
    detail:
      "Table permissions, column permissions and web roles control exactly what each user can see and do, right down to individual records.",
  },
];

const PpgIntro = () => {
  return (
    <section
      className={styles.ppgIntro}
      id="ppg-intro"
      aria-labelledby="ppg-intro-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Office Experts</span>
          <h2 id="ppg-intro-heading" className={styles.headline}>
            Power Pages built{" "}
            <span className={styles.accent}>for your business...</span>
          </h2>
          <p className={styles.lead}>
            Power Pages sits inside the Microsoft Power Platform, so it connects
            natively to Dataverse, Power BI, Power Automate and Azure AD. If
            your business already runs on Microsoft 365, a Power Pages portal is
            a simple way to put your internal data in front of external users,
            without custom middleware or a complex integration layer.
          </p>
          <p className={styles.lead}>
            Australian businesses use our Power Pages portals for everything
            from customer self-service to supplier management. We have seen what
            works and what does not, so speak with one of our consultants to
            find the best fit for you.
          </p>
        </header>

        <p className={styles.stripLabel}>What Power Pages does best</p>
        <ul className={styles.strip}>
          {PPG_CAPABILITIES.map(({ id, title, Art, detail }) => (
            <li key={id} className={styles.cap}>
              <span className={styles.capArt}>
                <Art />
              </span>
              <h3 className={styles.capTitle}>{title}</h3>
              <p className={styles.capDetail}>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PpgIntro;
