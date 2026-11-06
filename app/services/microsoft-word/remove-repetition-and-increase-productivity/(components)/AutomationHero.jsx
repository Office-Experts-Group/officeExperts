// /services/microsoft-word/document-automation/(components)/AutomationHero.jsx
import AutomationVisual from "../(svgs)/AutomationVisual";
import styles from "@/styles/automationHero.module.scss";

// Page hero: first section on the page, so it carries the h1 and clears the
// fixed header via heroPadding. No AnimateOnScroll here — it's above the fold.
const AutomationHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Work Smart, Not Hard</p>
          <h1 className={styles.heading}>
            Stop Repeating Tasks.{" "}
            <span className={styles.accent}>Start Automating.</span>
          </h1>
          <p className={styles.lead}>
            Every hour you or your team spends reformatting headers,
            re-inserting tables or fixing page layouts is an hour lost. Our Word
            automation specialists build custom solutions using VBA macros,
            Building Blocks and intelligent templates that handle the repetitive
            tasks eating into your productivity.
          </p>
          <p className={styles.lead}>
            Whether you need a single macro to automate a nightly report, or a
            fully templated document system rolled out across a 200-person
            organisation, we design solutions that fit into your current
            workflow.
          </p>

          <a href="#what-we-automate" className={styles.jumpLink}>
            See what we automate
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className={styles.visual}>
          <AutomationVisual />
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
