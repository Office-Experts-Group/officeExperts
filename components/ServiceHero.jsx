import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "../styles/serviceHero.module.css";
import thirdParty from "../public/pageHeros/3rdParty.webp";

const ServiceHero = ({ title }) => {
  return (
    <section className={styles.serviceHero}>
      <div className={styles.imageContainer}>
        <Image
          src={thirdParty}
          alt="A person helping somebody"
          fill={true}
          className={styles.heroImage}
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h1>{title}</h1>
    </section>
  );
};

export default ServiceHero;

ServiceHero.propTypes = {
  title: PropTypes.string.isRequired,
};
