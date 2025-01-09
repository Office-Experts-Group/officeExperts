"use client";
import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/logos.module.css";

import certifiedPartner from "../public/microsoft/certifiedPartner.webp";
import certifiedProfessional from "../public/microsoft/certifiedProfessional.webp";
import solutionsAssociate from "../public/microsoft/solutionsAssociate.webp";

const Logos = () => {
  const [style, setStyle] = useState(1);
  const [key, setKey] = useState(0); // Add a key state

  const handleClick = () => {
    if (style === 7) {
      setStyle(1);
    } else {
      setStyle(style + 1);
    }
    setKey((prevKey) => prevKey + 1); // Increment key to force remount
  };

  return (
    <>
      <button className={`btn ${styles.btn}`} onClick={handleClick}>
        Change
      </button>
      <section key={key} className={styles[`logos${style}`]}>
        <Image
          src={certifiedPartner}
          alt="microsoft certified partner"
          width={200}
          height={150}
        />
        <Image
          src={certifiedProfessional}
          alt="microsoft certified professional"
          width={200}
          height={150}
        />
        <Image
          src={solutionsAssociate}
          alt="microsoft solutions associate"
          width={200}
          height={150}
        />
      </section>
    </>
  );
};

export default Logos;
