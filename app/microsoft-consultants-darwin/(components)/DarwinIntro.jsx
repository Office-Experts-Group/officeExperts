// app/microsoft-consultants-darwin/(components)/DarwinIntro.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/darwinIntro.module.scss";

const DarwinIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left: vertical label ── */}
      <div className={styles.side} aria-hidden="true">
        <span className={styles.sideText}>Darwin &middot; Top End</span>
      </div>

      {/* ── Right: content ── */}
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <p className={styles.eyebrow}>Darwin &amp; the Northern Territory</p>
          <h2 className={styles.headline}>
            Microsoft expertise for the Top End,{" "}
            <span className={styles.accentText}>wherever you&rsquo;re working from.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.06}>
          <div className={styles.prose}>
            <p>
              Running a business in the Territory means long distances, a small
              pool of local specialists and software that has to keep working
              when the team is spread between town, site and community. That is
              the kind of setup where a well-built workbook, a mobile app or an
              AI agent earns its keep quickly.
            </p>
            <p>
              Office Experts Group has been fixing and building Microsoft
              solutions since 2000, and our consultants are spread across
              Australia. Darwin and Top End clients are matched to the right
              specialist for the job and work with them by screen-share and
              shared files, so the quality of the help does not depend on
              how close anyone is.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
          <aside className={styles.season}>
            <div className={styles.seasonText}>
              <p className={styles.seasonTitle}>Built for the build-up and the wet</p>
              <p className={styles.seasonBody}>
                Cyclone season, power outages and site closures happen. We set
                up Microsoft 365 and cloud-based files so the business keeps
                running when the office does not, and so everyone can pick up
                from the same place afterwards. Darwin also stays on standard
                time all year, so we schedule around your working hours as the
                gap to the eastern states shifts through the year.
              </p>
            </div>
            <a href="#contact" className={styles.btn}>
              Book a free assessment
            </a>
          </aside>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default DarwinIntro;
