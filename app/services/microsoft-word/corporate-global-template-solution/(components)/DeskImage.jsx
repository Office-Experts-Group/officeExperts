import Image from "next/image";
import React from "react";

import branding from "../../../public/branding.webp";

import styles from "../../../styles/intro.module.css";

const DeskImage = () => {
  return (
    <section
      id="your"
      className={styles.deskImage}
      style={{
        margin: "-6rem 0 -2rem 0",
        backgroundColor: "transparent",
        zIndex: 10,
        position: "relative",
      }}
    >
      <Image src={branding} alt="branding" width={1200} height={250} />
    </section>
  );
};

export default DeskImage;
