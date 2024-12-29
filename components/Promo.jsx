import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";

import AnimateOnScroll from "./AnimateOnScroll";

import styles from "../styles/promo.module.css";

import computer from "../public/icons/computer.webp";

const Promo = ({ h2, p, link, linkText, isLocation }) => {
  return (
    <div
      className={`${styles.container}`}
      style={isLocation ? { flexDirection: "column", gap: "1rem" } : {}}
    >
      <section
        className={`${styles.promo} ${
          isLocation ? styles.promoWithLocation : ""
        }`}
      >
        <AnimateOnScroll animation="scale-up" duration={1}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <Image
                src={computer}
                alt="computer icon"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text}>
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
      {link && (
        <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}>
          <div className={styles.link}>
            <Link href={link}>{linkText} Home</Link>
          </div>
        </AnimateOnScroll>
      )}
    </div>
  );
};

// Define PropTypes
Promo.propTypes = {
  h2: PropTypes.string,
  p: PropTypes.string,
};

export default Promo;
