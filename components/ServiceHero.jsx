import React from "react";
import Image from "next/image";

import styles from "../styles/serviceHero.module.css";

const ServiceHero = ({
  title,
  desktopImage,
  mobileImage,
  altMob,
  altDesk,
  isMeetTeam,
}) => {
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
      <h1
        style={
          isMeetTeam ? { fontSize: "clamp(3rem, 6vw, 8vw)" } : { fontSize: "" }
        }
      >
        {title}
      </h1>
    </section>
  );
};

export default ServiceHero;
