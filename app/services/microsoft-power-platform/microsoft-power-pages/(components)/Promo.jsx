import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/promo.module.css";

import computer from "../../../../../public/icons/computer.webp";
import promo from "../../../../../public/promo.webp";

const Promo = () => {
  return (
    <section className={styles.promo} style={{ marginTop: "8rem" }}>
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={styles.text} style={{ marginLeft: "2rem" }}>
            <h2>Empower Business with Certified Expertise</h2>
            <p>
              Power Platform Experts specialise in harnessing Power Apps to
              streamline operations and drive innovation. Custom applications
              tailored to your business needs ensure enhanced efficiency and
              seamless workflows.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}>
        <div className={styles.img}>
          <div className={styles.bar}></div>
          <Image
            src={promo}
            alt="person at a computer"
            width={130}
            height={60}
          />
        </div>
      </AnimateOnScroll> */}
    </section>
  );
};

export default Promo;
