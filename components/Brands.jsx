import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/brands.module.css";

import uniting from "../public/logos/uniting.webp";
import transGrid from "../public/logos/transGrid.webp";
import traffic from "../public/logos/traffic.webp";
import link from "../public/logos/link.webp";
import windowLogo from "../public/logos/window.webp";

export default function Brands() {
  return (
    <section className={styles.brands}>
      <Link
        href="https://unitingcare.org.au"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={uniting}
          alt="Uniting Care Australia"
          width={150}
          height={48}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://www.transgrid.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={transGrid}
          alt="TransGrid - NSW Electricity Infrastructure"
          width={150}
          height={56}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://www.trafficact.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={traffic}
          alt="Traffic ACT"
          width={131}
          height={49}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://www.linkservices.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={link}
          alt="Link Strata Management"
          width={150}
          height={51}
          className={styles.brandImage}
        />
      </Link>
      <Link
        href="https://windowline.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
      >
        <Image
          src={windowLogo}
          alt="WindowLine"
          width={150}
          height={45}
          className={styles.brandImage}
        />
      </Link>
    </section>
  );
}
