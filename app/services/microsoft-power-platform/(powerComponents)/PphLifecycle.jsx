// /app/services/microsoft-power-platform/(components)/PphLifecycle.jsx
// Project stages as a horizontal track. Five columns on desktop; below 1024px
// it becomes a scroll-snap strip you swipe sideways.
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pphLifecycle.module.scss";

import {
  PphDesignArt,
  PphBuildArt,
  PphDeployArt,
  PphTrainArt,
  PphSupportArt,
} from "../(svgs)/PphLifecycleArt";

const PPH_STAGES = [
  {
    id: "design",
    title: "Design",
    text: "We learn how your team works today, then design a solution around your needs and requirements.",
    Art: PphDesignArt,
  },
  {
    id: "build",
    title: "Development",
    text: "Custom apps, workflows and reports built to the design, using the data sources you already have.",
    Art: PphBuildArt,
  },
  {
    id: "deploy",
    title: "Deployment",
    text: "Rolled out into your business, tested with real users and connected to your existing systems.",
    Art: PphDeployArt,
  },
  {
    id: "train",
    title: "Training",
    text: "Tailored training so your people are confident using, and changing, what we build.",
    Art: PphTrainArt,
  },
  {
    id: "support",
    title: "Ongoing support",
    text: "Support by quote or hourly rate, remotely or onsite, so it keeps working as your business changes.",
    Art: PphSupportArt,
  },
];

const PphLifecycle = () => (
  <section
    id="pph-lifecycle"
    className={styles.pphLifecycle}
    aria-labelledby="pph-lifecycle-heading"
  >
    <div className={styles.inner}>
      <div
        className={styles.track}
        role="group"
        aria-label="Project stages. Scroll sideways on small screens."
        tabIndex={0}
      >
        <ul className={styles.stages}>
          {PPH_STAGES.map((stage) => (
            <li key={stage.id} className={styles.stage}>
              <div className={styles.stageArt}>
                <stage.Art />
              </div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageText}>{stage.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PphLifecycle;
