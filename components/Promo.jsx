import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import AnimateOnScroll from "./AnimateOnScroll";

import styles from "../styles/promo.module.css";

import computer from "../public/icons/computer.webp";
import promo from "../public/promo.webp";

const Promo = ({ h2, p }) => {
  return (
    <section className={styles.promo}>
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={styles.text}>
            <h2>{h2}</h2>
            <p>{p}</p>
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

// Define PropTypes
Promo.propTypes = {
  h2: PropTypes.string,
  p: PropTypes.string,
};

export default Promo;
