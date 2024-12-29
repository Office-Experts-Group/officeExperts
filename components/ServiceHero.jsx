import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "../styles/serviceHero.module.css";

const ServiceHero = ({ title, desktopImage, mobileImage, altMob, altDesk }) => {
  return (
    <section className={styles.serviceHero}>
      <div className={styles.imageContainer}>
        {/* Desktop/Tablet Image */}
        <Image
          src={desktopImage}
          alt={altDesk}
          fill={true}
          className={`${styles.heroImage} ${styles.desktopImage}`}
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Mobile Image */}
        <Image
          src={mobileImage || desktopImage} // Fallback to desktop if no mobile
          alt={altMob}
          fill={true}
          className={`${styles.heroImage} ${styles.mobileImage}`}
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h1>{title}</h1>
    </section>
  );
};

ServiceHero.propTypes = {
  title: PropTypes.string,
  desktopImage: PropTypes.object,
  mobileImage: PropTypes.object,
  altDesk: PropTypes.string,
  altMob: PropTypes.string,
  objectPosition: PropTypes.string,
};

export default ServiceHero;
