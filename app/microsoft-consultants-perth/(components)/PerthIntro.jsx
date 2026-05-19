// app/microsoft-consultants-perth/(components)/PerthIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import PerthMap from "../(svgs)/PerthMap";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/perthIntro.module.css";

const PerthIntro = () => (
  <section className={styles.section}>
    <div className={styles.split}>
      <AnimateOnScroll animation="fade-right" duration={0.65} delay={0}>
        <div className={styles.pillar}>
          <span className={styles.eyebrow}>Our Perth Team</span>

          <h2 className={styles.headline}>
            Microsoft expertise to{" "}
            <span className={styles.accentText}>solve your problems.</span>
          </h2>

          <div className={styles.content}>
            <div className={styles.rule} aria-hidden="true" />

            <p className={styles.lead}>
              Perth businesses need software solutions built around how they
              actually operate. We don't just use generic tools and cookie
              cutter solutions, our team first learns about your day to day
              operations and then develops a road map to solving pain points and
              automating tasks where possible.
            </p>

            <p className={styles.body}>
              Office Experts Group has been in the industry since 2000. Our team
              covers the full Microsoft ecosystem, Excel automation, Word
              template development, Access databases, Power Platform solutions
              and much more. This knowledge base allows us to develop fully
              integrated solutions that bring together all your operations into
              one cohesive unit.
            </p>

            <p className={styles.body}>
              Most of our work is handled remotely, with on-site consultants
              available across the Perth metro area and regional WA for
              workshops, training or hands-on system rollouts.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={0.65} delay={0.1}>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <PerthMap />
          </div>

          <Link href="#contact" className={styles.btn}>
            Get a Free Consultation
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PerthIntro;
