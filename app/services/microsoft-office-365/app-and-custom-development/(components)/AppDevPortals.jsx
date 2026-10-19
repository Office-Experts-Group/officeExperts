// app/services/microsoft-office-365/app-and-custom-development/(components)/AppDevPortals.jsx

// Compiled CSS module (source: styles/appDevPortals.module.scss)
import styles from "../../../../../styles/appDevPortals.module.scss";
// A portal joined to a CMS, a CRM and shared data
import { PortalSvg } from "../(svgs)/PortalSvg";

// Client component: headline list that reveals each description on hover or click
import AppDevPortalList from "./AppDevPortalList";

const AppDevPortals = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Web portals</span>
          <h2 className={styles.heading}>
            Web portals in <span className={styles.accent}>WordPress</span>,
            SharePoint and your CRM
          </h2>
          <p className={styles.lead}>
            Not every portal needs to be built from scratch. Where WordPress,
            SharePoint or a CRM already sits at the centre of your business, we
            extend it, so your team keeps the system they know and your
            customers get a better experience.
          </p>
        </header>

        <div className={styles.body}>
          <div className={styles.visual}>
            <PortalSvg />
          </div>

          <AppDevPortalList />
        </div>
      </div>
    </section>
  );
};

export default AppDevPortals;
