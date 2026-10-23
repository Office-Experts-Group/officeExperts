import React from "react";
import Image from "next/image";

import styles from "@/styles/customTab.module.scss";
import customTab from "@/public/customTab.webp";

const CustomTab = () => {
  return (
    <section>
      <div className={styles.content}>
        <h2>Our Custom Formatting Tab</h2>
        <p>
          Our custom formatting tab is build directly into the Word ribbon,
          proiding. user-friendly interface that brings powerful automation and
          formatting tools into one central
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={customTab}
          alt="Old version illustration"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default CustomTab;
