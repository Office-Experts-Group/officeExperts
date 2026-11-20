// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiIntro.jsx
import ApbiIntroDiagram from "../(svgs)/ApbiIntroDiagram";

import styles from "@/styles/apbiIntro.module.scss";

const ApbiIntro = () => (
  <section
    id="apbi-intro"
    className={styles.apbiIntro}
    aria-labelledby="apbi-intro-heading"
  >
    <div className={styles.inner}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Unlock visual insights</p>
        <h2 id="apbi-intro-heading" className={styles.heading}>
          Combine your Access data{" "}
          <span className={styles.accent}>with Power BI</span>
        </h2>
        <p className={styles.text}>
          Australian businesses still rely on Microsoft Access for day-to-day
          operations, but as data grows, so does the need for modern reporting
          and real insight. By integrating Access with Power BI, static tables
          become dynamic dashboards that show trends, support better decisions
          and connect your existing data to Microsoft’s modern analytics.
        </p>
        <p className={styles.text}>
          Nothing about your Access application has to change. Your team keeps
          entering orders, jobs or customers in the forms they already know.
          Power BI reads a copy of that data on a schedule, tidies it, links the
          tables to each other and presents it in reports that people can open
          in a browser, in Microsoft Teams or on a phone, depending on how you
          choose to share them.
        </p>
      </div>

      <figure className={styles.figure}>
        <div className={styles.diagramScroll}>
          <div className={styles.diagramInner}>
            <ApbiIntroDiagram />
          </div>
        </div>
        <figcaption className={styles.caption}>
          From related Access tables to a tidy data model and a dashboard the
          whole team can open.
        </figcaption>
      </figure>
    </div>
  </section>
);

export default ApbiIntro;
