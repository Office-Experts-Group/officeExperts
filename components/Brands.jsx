import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/brands.module.css";

import dulux from "../public/logos/Dulux-Group.webp";
import bekeart from "../public/logos/bekaert_150x36-150x36.webp";
import QueenslandRail from "../public/logos/Queensland-Rail.webp";
import hyundai from "../public/logos/hyundai-construction-equipment-australia-140x35.webp";
import southGippslandWater from "../public/logos/south-gippsland-water__150x63-150x63.webp";

export default function Brands() {
  return (
    <section className={styles.brands}>
      <Link
        href="https://www.dulux.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={dulux}
          alt="Dulux group logo"
          width={150}
          height={38}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://www.bekaert.com/en/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={bekeart}
          alt="bekaert logo"
          width={150}
          height={36}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="http://www.queenslandrail.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={QueenslandRail}
          alt="Queensland Rail logo"
          width={150}
          height={23}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://www.hyundai.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={hyundai}
          alt="Hyundai logo"
          width={150}
          height={51}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://www.sgwater.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={southGippslandWater}
          alt="southGippslandWater logo"
          width={150}
          height={63}
          className={styles.brandImage}
        />
      </Link>
    </section>
  );
}
