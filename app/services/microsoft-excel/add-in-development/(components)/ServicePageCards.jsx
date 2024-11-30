import React from "react";
import Image from "next/image";
import styles from "../../../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../../../public/icons/ideaBlue.webp";

// Import main images
import created from "../../../../../public/hand300x200.webp";
import vsto from "../../../../../public/programmer300x200.webp";
import whichIsBest from "../../../../../public/dashboard300x180.webp";
import build from "../../../../../public/training300x200.webp";

const ServicePageCards = () => {
  return (
    <section className={styles.servicePageCards}>
      <div className={styles.card}>
        <a href="#created">
          <div className={styles.content}>
            <p>Add-Ins</p>
            <h2>Created in Excel</h2>
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
              src={created}
              alt="Old version illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#vsto">
          <div className={styles.content}>
            <p>Add-Ins</p>
            <h2>Created in VSTO</h2>
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
              src={vsto}
              alt="Access issues illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#which-is-best">
          <div className={styles.content}>
            <p>Add-Ins</p>
            <h2>Which Is Best for You?</h2>
            <Image
              src={migrateIcon}
              alt="Expert help icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={whichIsBest}
              alt="Expert help illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#build">
          <div className={styles.content}>
            <p>Add-Ins</p>
            <h2>We Can Build Yours!</h2>
            <Image
              src={expertsIcon}
              alt="Migration icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={build}
              alt="Migration illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
