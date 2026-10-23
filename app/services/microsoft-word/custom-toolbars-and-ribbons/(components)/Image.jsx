import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegment3.module.css";
import automation from "../../../public/automation900.webp";

const StyleImage = () => {
  return (
    <section className={styles.deskImage}>
      <Image
        src={automation}
        alt="automation written on a sticky note"
        width={900}
        height={300}
      />
    </section>
  );
};

export default StyleImage;
