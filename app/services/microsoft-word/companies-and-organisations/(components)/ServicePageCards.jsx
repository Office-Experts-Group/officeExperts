import React from "react";
import Image from "next/image";

import styles from "../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../public/icons/ideaBlue.webp";

// Import main images
import stuckImage from "../../../public/cards/calcGraph350x200.webp";
import issuesImage from "../../../public/cards/word350x200.webp";
import expertsImage from "../../../public/cards/twoComputers350x200.webp";
import migrateImage from "../../../public/cards/penGraph350x200.webp";

const ServicePageCards = () => {
  return (
    <section
      className={styles.servicePageCards}
      style={{ margin: "4rem 0 0rem 0" }}
    >
      <div className={styles.card}>
        <a href="#template-solutions">
          <div className={styles.content}>
            <p>Template</p>
            <h2>Solutions You Need</h2>
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
        <a href="#document-creation">
          <div className={styles.content}>
            <p>Streamlined</p>
            <h2>Document Creation</h2>
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
        <a href="#no-more-headaches">
          <div className={styles.content}>
            <p>Leave it to us</p>
            <h2>No More Headaches!</h2>
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
        <a href="#in-control">
          <div className={styles.content}>
            <p>We put YOU</p>
            <h2>Back In Control!</h2>
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
