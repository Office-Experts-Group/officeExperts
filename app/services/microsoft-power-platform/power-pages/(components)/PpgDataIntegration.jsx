// /app/services/microsoft-power-platform/power-pages/(components)/PpgDataIntegration.jsx

import Link from "next/link";
import styles from "@/styles/ppgDataIntegration.module.scss";
import {
  PpgDirectArt,
  PpgVirtualArt,
  PpgAutomateArt,
  PpgPermissionsArt,
} from "../(svgs)/PpgDataArt";
import { ArrowIcon } from "../(svgs)/PpgIcons";

const PPG_DATA_SETUP = [
  "Table permissions for each web role",
  "Filtering, so users only see their own records",
  "Sign-in and authentication",
];

const PpgDataIntegration = () => {
  return (
    <section
      className={styles.ppgData}
      id="ppg-data"
      aria-labelledby="ppg-data-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Data integration</span>
            <h2 id="ppg-data-heading" className={styles.headline}>
              Your data, your website...{" "}
              <span className={styles.accent}>In Your Hands</span>
            </h2>
          </header>

          <div className={styles.prose}>
            <p>
              The most common reason clients come to us is that they have data
              sitting in Dataverse (or Dynamics&nbsp;365) and want external
              users such as customers, suppliers or contractors to view and work
              with it through a website.
            </p>
            <p>
              Power Pages handles this without custom APIs or middleware. We
              configure the connection through Dataverse table permissions, and
              the platform takes care of the rest: authentication, filtering by
              user, and enforcing what each role can read or write.
            </p>
            <p>
              You can also bring in data from other systems using virtual tables
              or{" "}
              <Link href="/services/microsoft-power-platform/power-automate">
                Power Automate integrations
              </Link>
              .
            </p>
            <Link href="#contact" className={`btn ${styles.cta}`}>
              Talk to us about your data
            </Link>
          </div>
        </div>

        <ul className={styles.bento}>
          <li
            className={`${styles.tile} ${styles.accentTile} ${styles.tileDirect}`}
          >
            <div className={styles.art}>
              <PpgDirectArt />
            </div>
            <h3 className={styles.tileTitle}>Direct Dataverse integration</h3>
            <p className={styles.tileSub}>No API layer needed</p>
            <p className={styles.tileBody}>
              Your portal reads and writes the same Dataverse tables your
              internal apps use. There is no separate database to keep in sync
              and no custom API to build and maintain.
            </p>
            <div className={styles.setup}>
              <p className={styles.setupLabel}>What we set up</p>
              <ul className={styles.setupList}>
                {PPG_DATA_SETUP.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </li>

          <li
            className={`${styles.tile} ${styles.darkTile} ${styles.tileVirtual}`}
          >
            <div className={styles.artWide}>
              <PpgVirtualArt />
            </div>
            <h3 className={styles.tileTitle}>Virtual tables</h3>
            <p className={styles.tileSub}>For external data sources</p>
            <p className={styles.tileBody}>
              Need to show data that lives outside Dataverse? Virtual tables let
              the portal read it as if it were a native table, without copying
              it across first. Whether a source suits a virtual table depends on
              how it connects, so we check that early.
            </p>
          </li>

          <li
            className={`${styles.tile} ${styles.lightTile} ${styles.tileAutomate}`}
          >
            <div className={styles.art}>
              <PpgAutomateArt />
            </div>
            <h3 className={styles.tileTitle}>Power Automate triggers</h3>
            <p className={styles.tileSub}>On every form submission</p>
            <p className={styles.tileBody}>
              Each submission can start a flow: send an email, create a record,
              ask for an approval or update another system.
            </p>
          </li>

          <li
            className={`${styles.tile} ${styles.midTile} ${styles.tilePermissions}`}
          >
            <div className={styles.art}>
              <PpgPermissionsArt />
            </div>
            <h3 className={styles.tileTitle}>Read / write permissions</h3>
            <p className={styles.tileSub}>Scoped by user role</p>
            <p className={styles.tileBody}>
              A supplier might read their orders and write delivery
              confirmations. A customer might only read. You decide, role by
              role.
            </p>
          </li>
        </ul>

        <p className={styles.after}>
          <Link href="#ppg-security" className={styles.arrowLink}>
            See how access is controlled
            <ArrowIcon />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PpgDataIntegration;
