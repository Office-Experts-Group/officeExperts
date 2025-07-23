import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/promo.module.scss";

import computer from "../../../../public/icons/computer.webp";

const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promoLink}>
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
            <div className={`${styles.text} ${styles.textML}`}>
              <h2>Power Pivot and Power Query: A Powerful Pair</h2>
              <p>Power Pivot works best when combined with Power Query. Power Query handles the cleaning and shaping of your raw data, while Power Pivot enables powerful modeling and analysis.</p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className={styles.linkBtn}>
          <Link href="/services/power-query" className={styles.link}>
            Learn more about our Power Query consulting services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promo;