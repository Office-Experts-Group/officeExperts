import React from "react";
import Image from "next/image";

import styles from "../styles/logos.module.css";

import certifiedPartner from "../public/microsoft/certifiedPartner.webp";
import certifiedProfessional from "../public/microsoft/certifiedProfessional.webp";
import solutionsAssociate from "../public/microsoft/solutionsAssociate.webp";

const Logos = () => {
  return (
    <section className={styles.logos}>
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
  );
};

export default Logos;
