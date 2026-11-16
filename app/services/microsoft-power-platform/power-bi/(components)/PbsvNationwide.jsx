// /app/services/microsoft-power-platform/microsoft-power-bi/(components)/PbsvNationwide.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/pbsvNationwide.module.scss";
import {
  PbsvFixedQuoteArt,
  PbsvHourlyArt,
  PbsvTrainingSupportArt,
} from "../(svgs)/PbsvEngageArt";
import { PbsvCheckIcon } from "../(svgs)/PbsvIcons";

const PBSV_PROMISES = [
  "Nationwide custom solutions",
  "Flexible pricing options",
  "End-to-end project guidance",
  "Ongoing support and training",
];

const PBSV_WAYS = [
  {
    id: "fixed",
    tile: "accentTile",
    Art: PbsvFixedQuoteArt,
    title: "Fixed quote",
    text: "Best when the scope is clear. You know the price before we start, and we agree what “done” looks like up front.",
    points: [
      "Agreed scope and price in writing",
      "Clear hand-over and sign-off",
      "No surprises on the invoice",
    ],
  },
  {
    id: "hourly",
    tile: "darkTile",
    Art: PbsvHourlyArt,
    title: "Hourly rate",
    text: "Best for work that evolves: new reports, tweaks and fixes as your questions change. You only pay for the time used.",
  },
  {
    id: "support",
    tile: "tintTile",
    Art: PbsvTrainingSupportArt,
    title: "Training and ongoing support",
    text: "Workshops so your team can explore and build their own reports, then help on hand when something breaks or a new question comes up.",
  },
];

const PbsvNationwide = () => {
  return (
    <section
      id="pbsv-nationwide"
      className={styles.pbsvNationwide}
      aria-labelledby="pbsv-nationwide-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Why Office Experts</p>
            <h2 id="pbsv-nationwide-heading" className={styles.heading}>
              Nationwide Power BI solutions{" "}
              <span className={styles.accent}>tailored to you</span>
            </h2>
            <p className={styles.lede}>
              Our team of experts across Australia creates customised Power BI
              solutions and guides your project from inception to completion.
              Choose the way of working that suits your budget and your
              timeline, then connect with a consultant to explore how we can
              tailor Power BI to your needs.
            </p>
            <ul className={styles.promises}>
              {PBSV_PROMISES.map((item) => (
                <li key={item}>
                  <PbsvCheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className={styles.cta}>
              Start with a conversation
            </a>
          </div>
        </AnimateOnScroll>

        <ul className={styles.ways}>
          {PBSV_WAYS.map(({ id, tile, Art, title, text, points }) => (
            <li
              key={id}
              className={`${styles.way} ${styles[tile]} ${styles[id]}`}
            >
              <div className={styles.wayArt}>
                <Art />
              </div>
              <div>
                <h3 className={styles.wayTitle}>{title}</h3>
                <p className={styles.wayText}>{text}</p>
                {points && (
                  <ul className={styles.wayPoints}>
                    {points.map((point) => (
                      <li key={point}>
                        <PbsvCheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PbsvNationwide;
