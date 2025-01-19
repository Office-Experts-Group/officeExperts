import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/promo.module.css";

import computer from "../../../../../public/icons/computer.webp";
import promo from "../../../../../public/promo.webp";

const Promo = () => {
  return (
    <section
      className={`${styles.promo} ${styles.noMargin}`}
      style={{ justifyContent: "space-between" }}
    >
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={`${styles.text} ${styles.textML}`}>
            <h2>Share Your Documents Online!</h2>
            <Link href={"/services/microsoft-office-365"}>- Office 365</Link>
            <Link href={"/services/by-business-solution/online-solutions"}>
              - Microsoft SharePoint
            </Link>
            <Link href={"/services/by-business-solution/online-solutions"}>
              - Google Docs
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}>
        <div className={styles.img}>
          <div className={styles.barLarge}></div>
          <Image
            src={promo}
            alt="person at a computer"
            width={260}
            height={120}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Promo;
