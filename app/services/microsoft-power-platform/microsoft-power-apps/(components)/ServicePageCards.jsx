import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../../../public/icons/ideaBlue.webp";

// Import main images
import stuckImage from "../../../../../public/service-img-1350x201.webp";
import issuesImage from "../../../../../public/service-img-2350x201.webp";
import expertsImage from "../../../../../public/service-img-3350x201.webp";
import migrateImage from "../../../../../public/service-img-4350x201.webp";

const ServicePageCards = () => {
  return (
    <section
      className={styles.servicePageCards}
      style={{ margin: "4rem 0 0rem 0" }}
    >
      <div className={styles.card}>
        <a href="#microsoft-partner">
          <div className={styles.content}>
            <p>Certified</p>
            <h2>Microsoft Partner</h2>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={stuckImage}
              alt="Old version illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#existing-data">
          <div className={styles.content}>
            <p>Connect</p>
            <h2>Existing Data</h2>
            <Image
              src={issuesIcon}
              alt="Access issues icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={issuesImage}
              alt="Access issues illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#unlock">
          <div className={styles.content}>
            <p>Unlock</p>
            <h2>Mobility with Apps</h2>
            <Image
              src={expertsIcon}
              alt="Expert help icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={expertsImage}
              alt="Expert help illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#custom-solutions">
          <div className={styles.content}>
            <p>Custom</p>
            <h2>Platform Solutions</h2>
            <Image
              src={migrateIcon}
              alt="Migration icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={migrateImage}
              alt="Migration illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
