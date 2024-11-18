import React from "react";

import styles from "../../../styles/goodToKnow.module.css";
import Image from "next/image";

import bg from "../../../public/service-bg.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const GoodToKnow = () => {
  return (
    <section className={styles.goodToKnow}>
      <Image src={bg} alt="background world map" className={styles.bg} fill />
      <div className={styles.triangleDiv}>
        <h2>Good To Know</h2>
      </div>
      <AnimateOnScroll animation="fade-up" delay={0} duration={1}>
        <p>
          Our Head Office is situated in northern New South Wales with
          consultants in Sydney, Melbourne, Canberra, Brisbane and Perth. We
          service the whole of Australia and New Zealand, with our clients
          ranging from multi-national corporations to small businesses.
        </p>

        <p>
          Through a combination of remote access and on-site service, we give
          our clients dedicated attention and support across the Australasia
          region. Location is not an obstacle as remote access allows us to hold
          meetings and offer quick and cost effective support.
        </p>
      </AnimateOnScroll>
    </section>
  );
};

export default GoodToKnow;
