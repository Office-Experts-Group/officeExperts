import Image from "next/image";
import React from "react";

import integration from "../../../public/integration.webp";

import styles from "../../../styles/intro.module.css";

const DeskImage = () => {
  return (
    <section
      className={styles.deskImage}
      style={{ marginBottom: "-6rem", paddingTop: "3rem" }}
    >
      <Image src={integration} alt="Integration" width={1200} height={300} />
    </section>
  );
};

export default DeskImage;
