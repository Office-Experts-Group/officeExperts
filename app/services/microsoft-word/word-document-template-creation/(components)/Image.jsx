import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegment3.module.css";
import style from "../../../public/style1200.webp";

const StyleImage = () => {
  return (
    <section className={styles.deskImage}>
      <Image
        src={style}
        alt="style written on notes"
        width={900}
        height={300}
      />
    </section>
  );
};

export default StyleImage;
