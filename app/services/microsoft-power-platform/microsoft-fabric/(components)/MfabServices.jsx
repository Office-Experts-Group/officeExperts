// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabServices.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/mfabServices.module.scss";
import { MfabServiceArt } from "../(svgs)/MfabServiceArt";
import { MfabDashIcon } from "../(svgs)/MfabIcons";

const MFAB_REVIEW = [
  "Data sources and how they connect",
  "Existing reports and who relies on them",
  "Security and access rules",
  "Capacity size and running costs",
];

const MfabServices = () => {
  return (
    <section
      className={styles.mfabServices}
      id="mfab-services"
      aria-labelledby="mfab-services-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="mfab-services-heading" className={styles.heading}>
            Our Microsoft Fabric <span className={styles.accent}>Services</span>
          </h2>
          <p className={styles.text}>
            With over 25 years of Microsoft expertise, we provide Microsoft
            Fabric services that take you from first plan to full deployment. We
            can build a new data platform from scratch or migrate the setup you
            already have.
          </p>
        </header>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.1}>
          <div className={styles.bento}>
            <article
              className={`${styles.tile} ${styles.darkTile} ${styles.assessment}`}
            >
              <div className={styles.assessmentCopy}>
                <h3 className={styles.tileTitle}>Assessment</h3>
                <p className={styles.tileText}>
                  Before anything is built, we review your current systems and
                  reports, estimate the capacity and licensing you’ll need, work
                  out the return on investment and plan your migration in
                  stages.
                </p>
                <p className={styles.reviewLabel}>What we review</p>
                <ul className={styles.reviewList}>
                  {MFAB_REVIEW.map((item) => (
                    <li key={item}>
                      <MfabDashIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.assessmentArt}>
                <MfabServiceArt type="assessment" />
              </div>
            </article>

            <article
              className={`${styles.tile} ${styles.lightTile} ${styles.implementation}`}
            >
              <div className={styles.tileArt}>
                <MfabServiceArt type="implementation" />
              </div>
              <h3 className={styles.tileTitle}>Implementation</h3>
              <p className={styles.tileText}>
                We configure OneLake as your one true source of data, set up
                workspaces that match your team structure, and put security,
                governance and deployment pipelines in place so changes are
                tested before they go live.
              </p>
            </article>

            <article className={`${styles.tile} ${styles.lightTile}`}>
              <div className={styles.tileArt}>
                <MfabServiceArt type="development" />
              </div>
              <h3 className={styles.tileTitle}>Custom Development</h3>
              <p className={styles.tileText}>
                Our developers build data pipelines that automate your
                workflows, ETL processes that turn raw data into useful
                insights, real-time{" "}
                <Link href="/services/dashboards">dashboards</Link> for
                immediate visibility, and integrations that connect Fabric with
                your existing systems.
              </p>
            </article>

            <article className={`${styles.tile} ${styles.accentTile}`}>
              <div className={styles.tileArt}>
                <MfabServiceArt type="migration" />
              </div>
              <h3 className={styles.tileTitle}>Migration Services</h3>
              <p className={styles.tileText}>
                Moving from Azure Synapse Analytics, SQL Server, an on-premises
                warehouse or a stack of spreadsheets? We map what you have, move
                it across in stages and run old and new side by side until the
                numbers match.
              </p>
              <a href="#contact" className={`btn ${styles.tileCta}`}>
                Plan your migration
              </a>
            </article>

            <article className={`${styles.tile} ${styles.lightTile}`}>
              <div className={styles.tileArt}>
                <MfabServiceArt type="training" />
              </div>
              <h3 className={styles.tileTitle}>Training &amp; Support</h3>
              <p className={styles.tileText}>
                We{" "}
                <Link href="/microsoft-support-and-training-australia">
                  train end users and administrators
                </Link>
                , document best practice so your team can maintain and grow the
                environment, and stay on hand for support when you need us.
              </p>
            </article>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default MfabServices;
