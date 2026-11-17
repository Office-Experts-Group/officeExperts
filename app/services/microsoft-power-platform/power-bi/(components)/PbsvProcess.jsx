// /app/services/microsoft-power-platform/power-bi/(components)/PbsvProcess.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbsvProcess.module.scss";
import {
  PbsvScopeArt,
  PbsvConnectModelArt,
  PbsvDesignArt,
  PbsvSecureArt,
  PbsvSupportArt,
} from "../(svgs)/PbsvProcessArt";

const PBSV_STAGES = [
  {
    id: "scope",
    Art: PbsvScopeArt,
    title: "Scope the questions",
    text: "A short workshop to agree what you need to know, who will use the reports and where the data lives.",
  },
  {
    id: "model",
    Art: PbsvConnectModelArt,
    title: "Connect and model the data",
    text: "We connect your sources, clean the data and build a model that’s quick to query and easy to extend.",
  },
  {
    id: "design",
    Art: PbsvDesignArt,
    title: "Design the reports",
    text: "Sketches first, then working dashboards on real data, reviewed with the people who’ll use them.",
  },
  {
    id: "secure",
    Art: PbsvSecureArt,
    title: "Test and secure",
    text: "We check figures against your source, set up access and row-level security, and test with a real account.",
  },
  {
    id: "support",
    Art: PbsvSupportArt,
    title: "Train and support",
    text: "Hand-over training for your team, then ongoing support as your questions change.",
  },
];

const PbsvProcess = () => {
  return (
    <section
      id="pbsv-process"
      className={styles.pbsvProcess}
      aria-labelledby="pbsv-process-heading"
    >
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>How we work</p>
          <h2 id="pbsv-process-heading" className={styles.heading}>
            How a Power BI project{" "}
            <span className={styles.accent}>runs with us</span>
          </h2>
          <p className={styles.lede}>
            End-to-end project guidance, from the first conversation to
            hand-over, with a consultant you can reach at every stage.
          </p>
        </header>
      </AnimateOnScroll>

      <ol className={styles.track}>
        {PBSV_STAGES.map(({ id, Art, title, text }) => (
          <li key={id} className={styles.stage}>
            <div className={styles.stageArt}>
              <Art />
            </div>
            <h3 className={styles.stageTitle}>{title}</h3>
            <p className={styles.stageText}>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default PbsvProcess;
