// app/services/microsoft-powerpoint/(components)/PowerPointRedesign.jsx

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/powerPointRedesign.module.scss";

import { ArrowIcon } from "../(svgs)/ArrowIcon";

// Before / after ledger: situations we are commonly called in to fix
const ledger = [
  {
    id: "inconsistent",
    before: "Every deck has its own fonts, colours and logo placement.",
    after: "One template with master slides, so new slides arrive on brand.",
    via: "Master slides",
  },
  {
    id: "pasted",
    before: "Slides copied between decks drag old formatting along with them.",
    after:
      "Layouts that hold their formatting, so pasted content takes on the template's look.",
    via: "Slide layouts",
  },
  {
    id: "refresh",
    before: "A brand refresh that never reached the old presentations.",
    after:
      "Your existing presentations rebuilt in the new template, ready to reuse.",
    via: "Template conversion",
  },
  {
    id: "blank",
    before: "Everyone starts from a blank slide and builds their own layout.",
    after:
      "Ready-made layouts that make it easy to build your presentation story.",
    via: "Master slides",
  },
];

const PowerPointRedesign = () => (
  <section className={styles.section} id="redesign">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Presentation redesign</p>
          <h2 className={styles.heading}>
            Revive old presentations{" "}
            <span className={styles.accent}>without starting again.</span>
          </h2>
          <p className={styles.lead}>
            Our PowerPoint experts transform your existing presentation into a
            professional, high quality template that meets your brand
            guidelines. We create master slides, so you can easily build your
            presentation story.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.ledger}>
          <div className={styles.head} aria-hidden="true">
            <span>Where you are</span>
            <span />
            <span>Where we take you</span>
          </div>

          <ul className={styles.rows}>
            {ledger.map((row) => (
              <li key={row.id} className={styles.row}>
                <p className={styles.before}>{row.before}</p>
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
                <div className={styles.after}>
                  <p>{row.after}</p>
                  <span className={styles.via}>{row.via}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.note}>
          We also convert presentations between formats and bring older files
          across to current versions of PowerPoint.
        </p>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PowerPointRedesign;
