// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippProblem.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";

import {
  AippDisconnectedArt,
  AippSecurityArt,
  AippExpertiseArt,
} from "../(svgs)/AippProblemArt";
import { AippArrowIcon } from "../(svgs)/AippIcons";

import styles from "@/styles/aippProblem.module.scss";

const AIPP_PAIN_POINTS = [
  {
    id: "disconnected",
    tileClass: "darkTile",
    heading: "Disconnected pilots",
    body: "A proof of concept that impressed one team and never went any further, because it doesn’t talk to core business systems. The agent doesn’t know what to look for or where to find it.",
    Art: AippDisconnectedArt,
    symptoms: [
      "Works in a demo, stalls in real life",
      "Needs data copied in by hand",
      "No one owns it after the pilot",
      "No clear business case to scale it",
      "IT hasn’t been involved from the start",
      "Staff go back to the old way of working",
    ],
  },
  {
    id: "security",
    tileClass: "lightTile",
    heading: "Security uncertainty",
    body: "Leadership wants AI adoption, but IT and compliance haven’t signed off on where the data actually goes. Third-party apps have unclear data permissions and no one has a clear answer.",
    Art: AippSecurityArt,
  },
  {
    id: "expertise",
    tileClass: "accentTile",
    heading: "No internal expertise",
    body: "Copilot is licensed and available, but no one has the time or skills to configure, govern or extend it properly. Permissions aren’t set, and answers can be wrong while still sounding confident.",
    Art: AippExpertiseArt,
  },
];

const AippProblem = () => {
  return (
    <section
      id="aipp-problem"
      className={styles.aippProblem}
      aria-labelledby="aipp-problem-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.65}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>The gap we keep seeing</span>
            <h2 id="aipp-problem-heading" className={styles.heading}>
              Every business wants “AI.”{" "}
              <span className={styles.accent}>
                Few know what that means for their systems.
              </span>
            </h2>
            <p className={styles.body}>
              Most businesses feel stuck with two bad options: a generic AI tool
              that doesn’t understand their data, or an expensive custom build
              that takes a year and never quite integrates with Microsoft 365.
              An AI agent that can’t see your SharePoint library or respect your
              Dataverse permissions isn’t integrated. It’s a glorified,
              expensive chatbot.
            </p>
          </header>
        </AnimateOnScroll>

        <div className={styles.bento}>
          {AIPP_PAIN_POINTS.map(
            ({ id, tileClass, heading, body, Art, symptoms }) => (
              <article
                key={id}
                className={`${styles.tile} ${styles[tileClass]} ${styles[`tile_${id}`]}`}
              >
                <div className={styles.art}>
                  <Art />
                </div>
                <h3 className={styles.tileHeading}>{heading}</h3>
                <p className={styles.tileBody}>{body}</p>
                {symptoms && (
                  <ul className={styles.symptoms}>
                    {symptoms.map((s) => (
                      <li key={s}>
                        <AippArrowIcon size={13} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default AippProblem;
