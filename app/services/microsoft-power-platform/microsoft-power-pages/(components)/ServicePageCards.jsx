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
    <section className={styles.servicePageCards}>
      <div className={styles.card}>
        <a href="#enhance-your-business-productivity">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Enhance your Business Productivity</h2>
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
        <a href="#data-visualisation">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Empower Your Data Visualisations</h2>
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
        <a href="#streamlined-data-accessibility">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Streamlined Data Accessibility</h2>
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
        <a href="#maximise-with-expert-assistance">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Maximise with Expert Assistance</h2>
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
