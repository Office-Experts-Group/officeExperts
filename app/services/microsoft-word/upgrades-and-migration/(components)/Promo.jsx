import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/promo.module.css";

import computer from "../../../../../public/icons/computer.webp";

const Promo = ({ h2, p }) => {
  return (
    <section className={styles.promo} id="experts">
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={`${styles.text} ${styles.leftMargin}`}>
            <h2>Office Experts can Help!</h2>
            <p style={{ marginBottom: "1rem" }}>
              Our experts can create beautiful documents and templates that are
              identical to your PDFs, InDesign layouts or Style Guide
              requirements. Our documents and templates will not only look
              great, they will work great and take the stress out of your
              document management.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Promo;
