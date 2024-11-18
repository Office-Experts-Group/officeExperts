import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/expertsAwait.module.css";

import bg from "../../../../../public/service-bg.webp";
import stuckIcon from "../../../../../public/icons/computerRed.png";
import issuesIcon from "../../../../../public/icons/support.png";

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
            <h2>Need Access Issues Resolved?</h2>
          </div>
          <div className={styles.text}>
            <p>
              Are you suffering from Access databases that are slow, crashing or
              just not delivering what you need from them? Giving consideration
              to your requirements and current database, our experts can help in
              many ways.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
        <div className={styles.points}>
          <div className={styles.point}>
            <Image
              src={issuesIcon}
              alt="Access issues icon"
              width={60}
              height={60}
              className={styles.icon}
            />
            <p>
              If your database has been designed poorly then our experts might
              be able to fix the major issues, increase the speed, resolve
              errors or rewrite/upgrade your database.
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
            <p>
              If your database is slow our experts could migrate the backend of
              your database to SQL Server to speed up the database.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default BlackSegment;
