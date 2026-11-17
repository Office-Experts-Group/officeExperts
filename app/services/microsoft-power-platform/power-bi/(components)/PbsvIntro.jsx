// /app/services/microsoft-power-platform/power-bi/(components)/PbsvIntro.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbsvIntro.module.scss";
import {
  PbsvConsultantArt,
  PbsvCollabArt,
  PbsvLiveArt,
  PbsvDrillArt,
} from "../(svgs)/PbsvIntroArt";

const PBSV_INTRO_CARDS = [
  {
    id: "consultants",
    title: "Expert consultants in Power BI",
    text: "People who build Power BI reports every week, and who’ll tell you when a simpler option will do the job.",
    Art: PbsvConsultantArt,
  },
  {
    id: "collaboration",
    title: "Enhanced data collaboration",
    text: "One shared report instead of five spreadsheets, so finance, sales and operations look at the same numbers.",
    Art: PbsvCollabArt,
  },
  {
    id: "realtime",
    title: "Real time insights and analytics",
    text: "Figures as fresh as your data connection allows, from a refresh every morning through to live feeds.",
    Art: PbsvLiveArt,
  },
  {
    id: "drill",
    title: "Drill through and drill down into your data",
    text: "Start with the total, then click down to the region, the customer or the single invoice behind it.",
    Art: PbsvDrillArt,
  },
];

const PbsvIntro = () => {
  return (
    <section
      id="pbsv-intro"
      className={styles.pbsvIntro}
      aria-labelledby="pbsv-intro-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Expert advice</p>
            <h2 id="pbsv-intro-heading" className={styles.heading}>
              Unlock data-driven success{" "}
              <span className={styles.accent}>with Power BI</span>
            </h2>
            <p className={styles.lede}>
              Power BI is Microsoft’s business intelligence tool. In the right
              hands it turns scattered figures into reports people open every
              morning. Our trained consultants at Office Experts set it up
              properly, so your business gets up-to-date insights, analytics
              built around your own questions and better collaboration around
              the same numbers.
            </p>
            <p className={styles.lede}>
              You don’t need to be a data specialist. We explain what we’re
              building in plain English, and we leave you with reports your own
              people can read, trust and keep improving.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <ul className={styles.cards}>
            {PBSV_INTRO_CARDS.map(({ id, title, text, Art }) => (
              <li key={id} className={styles.card}>
                <div className={styles.cardArt}>
                  <Art />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PbsvIntro;
