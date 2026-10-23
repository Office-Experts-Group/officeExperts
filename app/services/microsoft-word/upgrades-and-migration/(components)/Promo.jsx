import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/promo.module.css";

import computer from "../../../public/icons/computer.webp";

const Promo = ({ h2, p }) => {
  return (
    <section className={styles.promo} id="experts">
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={`${styles.text} ${styles.leftMargin}`}>
            <h2>Word Experts Can Help!</h2>
            <p style={{ marginBottom: "1rem" }}>
              Our Microsoft Word specialists ensure smooth version upgrades and
              seamless migrations to Microsoft 365. We fix formatting issues,
              repair broken macros, update legacy templates, and maintain
              document integrity throughout the transition.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Promo;
