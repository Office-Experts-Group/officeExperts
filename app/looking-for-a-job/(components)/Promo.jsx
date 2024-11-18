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
            <h2>We're looking for contractors</h2>
            <p>
              All of our consultants work as independent contractors, not as
              employees.
            </p>
            <p>
              Our consultants are responsible for communicating with clients to
              scope, quote, implement and deliver projects.
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
