import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/expertsAwait.module.css";

import bg from "../../../public/service-bg.webp";

const BlackSegment = () => {
  return (
    <section
      className={styles.expertsAwait}
      style={{ marginTop: "8rem" }}
      id="issues"
    >
      <Image className={styles.bgImg} src={bg} alt="shape icon" fill="true" />

      <AnimateOnScroll animation="slide-left" delay={0.1} duration={1.2}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.bar}>
              <p>Looking for help?</p>
            </div>
            <h2>Have Word Migration Issues?</h2>
          </div>
          <div className={styles.text}>
            <p>
              Migrating to a new version of Microsoft Word or transitioning to
              Microsoft 365 can introduce unexpected complications.
            </p>
            <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
              <div className={styles.points} style={{ maxWidth: "100%" }}>
                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Document formatting breaks and layout shifts after version
                    upgrades
                  </p>
                </div>

                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Macros and VBA code stop working in newer Word versions
                  </p>
                </div>

                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Templates lose functionality or display incorrectly
                  </p>
                </div>

                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Custom styles and corporate branding inconsistencies
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default BlackSegment;
