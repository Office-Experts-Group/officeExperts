// /app/services/microsoft-access/integrate-access-with-power-bi/(components)/ApbiProcess.jsx
import {
  ApbiReviewArt,
  ApbiTidyArt,
  ApbiModelArt,
  ApbiDesignArt,
  ApbiPublishArt,
} from "../(svgs)/ApbiProcessArt";
import { ArrowIcon } from "../(svgs)/ApbiIcons";

import styles from "@/styles/apbiProcess.module.scss";

const APBI_STEPS = [
  {
    id: "review",
    Art: ApbiReviewArt,
    title: "Review",
    text: "We look at your tables, queries and who uses them, then agree which questions the dashboards need to answer.",
  },
  {
    id: "tidy",
    Art: ApbiTidyArt,
    title: "Tidy and connect",
    text: "Duplicates, blanks and inconsistent entries get fixed, and we choose the connection route that suits your database.",
  },
  {
    id: "model",
    Art: ApbiModelArt,
    title: "Build the model",
    text: "Your tables are shaped into a clean model with relationships and measures, so every chart gives the same answer.",
  },
  {
    id: "design",
    Art: ApbiDesignArt,
    title: "Design the dashboards",
    text: "We lay out pages around the decisions your team makes, then test them with the people who will use them.",
  },
  {
    id: "publish",
    Art: ApbiPublishArt,
    title: "Publish and hand over",
    text: "Dashboards go live with scheduled refresh and permissions, and we walk your team through how it all works.",
  },
];

const ApbiProcess = () => (
  <section
    id="apbi-process"
    className={styles.apbiProcess}
    aria-labelledby="apbi-process-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>How we work</p>
        <h2 id="apbi-process-heading" className={styles.heading}>
          Our approach to{" "}
          <span className={styles.accent}>Access and Power BI integration</span>
        </h2>
        <p className={styles.lede}>
          Office Experts Group is a Microsoft-focused consultancy that builds,
          fixes and connects Access databases. We keep the process simple, and
          you can engage us for the whole job or for a single stage.
        </p>
      </header>

      <div className={styles.trackWrap}>
        <div
          className={styles.track}
          role="group"
          aria-label="Integration process, five stages"
          tabIndex={0}
        >
          {APBI_STEPS.map(({ id, Art, title, text }) => (
            <article key={id} className={styles.step}>
              <div className={styles.art}>
                <Art />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.engage}>
        <p className={styles.engageText}>
          Some clients hand us the whole project. Others want a review and a
          plan they can build themselves, or help with one tricky piece such as
          a gateway or a data model. Tell us where you are and we will suggest
          the lightest engagement that gets you there.
        </p>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaCopy}>
          <h3 className={styles.ctaTitle}>
            Need expert help with Access and Power BI integration?
          </h3>
          <p className={styles.ctaText}>
            Our consultants specialise in connecting Access databases to Power
            BI so your data finally works as hard as you do.
          </p>
        </div>
        <a href="#contact" className={styles.ctaButton}>
          Get in touch <ArrowIcon />
        </a>
      </div>
    </div>
  </section>
);

export default ApbiProcess;
