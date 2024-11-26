import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/promo.module.css";

import computer from "../../../public/icons/computer.webp";
import promo from "../../../public/promo.webp";

const Promo = () => {
  return (
    <section className={styles.promo}>
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={styles.text}>
            <h2>Let's Do This!</h2>
            <p>
              Once you have decided to take advantage of our services, we will
              carefully customise those services to match your requirements,
              keeping you informed every step of the way.
            </p>
            <p>
              We realise that our success is hinged on our ability to ensure
              your success, and succeed we shall. Working with us is a win-win
              situation — with nothing to lose and everything to gain! We work
              hard to ensure it!
            </p>
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

// Define PropTypes
Promo.propTypes = {
  h2: PropTypes.string,
  p: PropTypes.string,
};

export default Promo;
