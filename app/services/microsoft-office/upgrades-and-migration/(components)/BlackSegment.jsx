import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/expertsAwait.module.css";

import bg from "../../../../../public/service-bg.webp";
import stuckIcon from "../../../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../../../public/icons/supportBlue.webp";
import handShake from "../../../../../public/icons/handShakeBlue.webp";
import Link from "next/link";

const BlackSegment = () => {
  return (
    <section
      className={styles.expertsAwait}
      style={{ marginTop: "8rem" }}
      id="expert-help"
    >
      <Image className={styles.bgImg} src={bg} alt="shape icon" fill="true" />

      <AnimateOnScroll animation="slide-left" delay={0.1} duration={1.2}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.bar}>
              <p>Looking for help?</p>
            </div>
            <h2>Office Experts can Help!</h2>
          </div>
          <div className={`${styles.text} ${styles.marginText}`}>
            <p>
              Our experts will review your Office application, workbooks,
              databases and documents and advise your best migration and upgrade
              path!
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
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              Upgrade or fix your current solution if it was designed poorly,
              needs some smarts or needs some automation.
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              Migrate your Office solution to a custom database application! A
              multi-user database solution typically benefits from being built
              on a commercial database such as SQL Server.{" "}
              <Link
                href={
                  "/services/by-business-solution/database-development-and-solutions"
                }
              >
                Click here
              </Link>{" "}
              to learn more.
            </p>
          </div>

          <div className={styles.point}>
            <Image
              src={handShake}
              alt="Access issues icon"
              width={60}
              height={60}
              className={`${styles.icon} ${styles.hidden}`}
            />
            <p className={styles.centerText}>
              Upgrade or fix your current solution if it was designed poorly,
              needs some smarts or needs some automation.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default BlackSegment;
