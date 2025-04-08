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
              <h2>Take It Further with Power Pivot!</h2>
              <p>Power Query and Power Pivot work hand in hand to create a complete data solution.</p>
              <p>While Power Query handles data extraction and transformation, Power Pivot takes your reporting to the next level with advanced data modeling and calculations — perfect for building dynamic, interactive dashboards and in-depth analysis.</p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className={styles.linkBtn}>
          <Link href="/services/power-pivot" className={styles.link}>
            Learn more about our Power Pivot consulting services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promo;