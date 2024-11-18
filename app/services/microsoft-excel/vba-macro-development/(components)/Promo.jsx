import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/promo.module.css";

import computer from "../../../../../public/icons/computer.webp";
import promo from "../../../../../public/promo.webp";

const Promo = () => {
  return (
    <section className={styles.promo} style={{ marginTop: "-2rem" }}>
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={styles.text} style={{ marginLeft: "2vw" }}>
            <h2>Upgrading Excel</h2>
            <p>
              If you utilise macros in your Microsoft Excel solutions, some of
              them may fail when upgrading or moving to 64 bit systems. If this
              is the case, we can review and solve these issues for you.
            </p>
            <p>
              If your workbooks are not functioning correctly under your current
              version of Excel, contact us today to clear up your technology
              issues.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}>
        <div className={styles.img}>
          <div className={styles.bar}></div>
          <Image
            src={promo}
            alt="person at a computer"
            width={130}
            height={60}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Promo;
