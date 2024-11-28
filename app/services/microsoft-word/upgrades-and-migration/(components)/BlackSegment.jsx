import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/expertsAwait.module.css";

import bg from "../../../../../public/service-bg.webp";

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
              Do you have a PDF file that has been migrated into Word, but just
              doesn't work right? PDF converters can create many issues
              including:
            </p>
            <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
              <div className={styles.points}>
                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Inappropriate add in text boxes and section breaks
                  </p>
                </div>

                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Mismanaged content, sometimes with text created as an image
                  </p>
                </div>

                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Incorrect and inconsistent styles
                  </p>
                </div>

                <div className={styles.point}>
                  <div className={styles.cross}>
                    <p>X</p>
                  </div>
                  <p style={{ textAlign: "left" }}>Many accessibility issues</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>

      {/* <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
        <div className={styles.points}>
          <div className={styles.point}>
            <div className={styles.cross}>
              <p>X</p>
            </div>
            <p>Inappropriate add in text boxes and section breaks</p>
          </div>

          <div className={styles.point}>
            <div className={styles.cross}>
              <p>X</p>
            </div>
            <p>Mismanaged content, sometimes with text created as an image</p>
          </div>

          <div className={styles.point}>
            <div className={styles.cross}>
              <p>X</p>
            </div>
            <p>Incorrect and inconsistent styles</p>
          </div>

          <div className={styles.point}>
            <div className={styles.cross}>
              <p>X</p>
            </div>
            <p>Many accessibility issues</p>
          </div>
        </div>
      </AnimateOnScroll> */}
    </section>
  );
};

export default BlackSegment;
