import React from "react";
import Link from "next/link";
import HeroIllustration from "../(svgs)/HeroIllustration";
import styles from "../../../styles/trainingHero.module.css";

const TrainingHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Australia-Wide Support</p>
          <h2 className={styles.heading}>
            Support &amp; Training
            <br />
            <span className={styles.accent}>That Actually Sticks</span>
          </h2>
          <p className={styles.sub}>
            Practical, task-specific Word training for individuals, teams, and
            entire organisations. Remote or onsite. Delivered by specialists who
            live and breathe Microsoft Word.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Get in Touch
            </a>
            <Link
              href="/contact-us/request-a-quote"
              className={styles.btnSecondary}
            >
              Request a Quote
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Australian Owned</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Senior Designers</span>
            </div>
          </div>
        </div>
        <div className={styles.illustration}>
          <HeroIllustration className={styles.illustrationSvg} />
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
