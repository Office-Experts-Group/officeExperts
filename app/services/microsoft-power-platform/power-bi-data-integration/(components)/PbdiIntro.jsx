// /app/services/microsoft-power-platform/power-bi-data-integration/(components)/PbdiIntro.jsx
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbdiIntro.module.scss";
import PbdiSilosDiagram from "../(svgs)/PbdiSilosDiagram";

const PbdiIntro = () => (
  <section
    id="pbdi-intro"
    className={styles.pbdiIntro}
    aria-labelledby="pbdi-intro-heading"
  >
    <div className={styles.inner}>
      <div className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Expert advice</p>
          <h2 id="pbdi-intro-heading" className={styles.heading}>
            What is Power BI{" "}
            <span className={styles.accent}>data integration?</span>
          </h2>
        </div>
        <div className={styles.copy}>
          <p>
            Power BI data integration is the work of connecting the places your
            data lives, such as Excel, SQL Server, SharePoint, Salesforce and
            cloud applications, into one interactive dashboard in Microsoft
            Power BI.
          </p>
          <p>
            It turns raw data into clear, visual reports you can share across
            your organisation. At Office Experts, we design and build end-to-end
            Power BI data integration strategies, from your first connection to{" "}
            <Link href="/services/dashboards">Power BI dashboards</Link> your
            whole team trusts. If your reporting still starts in spreadsheets,
            our{" "}
            <Link href="/services/microsoft-power-platform/excel-to-power-bi-migration">
              Excel to Power BI migration
            </Link>{" "}
            is the usual first step.
          </p>
        </div>
      </div>

      <AnimateOnScroll animation="fade-up" duration={1} delay={0.1}>
        <figure className={styles.figure}>
          <div className={styles.diagramScroll}>
            <div className={styles.diagramInner}>
              <PbdiSilosDiagram />
            </div>
          </div>
          <figcaption className={styles.caption}>
            The same data, two outcomes: separate reports that disagree, or one
            connected model everyone can trust.
          </figcaption>
        </figure>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PbdiIntro;
