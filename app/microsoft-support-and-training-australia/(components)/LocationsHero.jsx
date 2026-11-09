// app/microsoft-support-and-training-australia/(components)/LocationsHero.jsx
import React from "react";
import Link from "next/link";

// Decorative coverage map: Head Office in Northern Rivers with lines out to each city
import { AustralasiaMapSvg } from "../(svgs)/AustralasiaMapSvg";

import styles from "@/styles/locationsHero.module.scss";

// Server component with CSS-only entrance animation, so the h1 renders
// immediately and doesn't wait on client JavaScript (keeps LCP fast)
const LocationsHero = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Our locations</span>

        <h1 className={styles.headline}>
          Professional Microsoft support and training{" "}
          <span className={styles.accent}>across Australia.</span>
        </h1>

        <p className={styles.lede}>
          With 25+ years of industry experience, our expert consultants provide
          specialised Microsoft support and training services tailored to your
          business needs. Choose your location below to discover how our local
          team can help you maximise your Microsoft technology investment.
        </p>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.btn}>
            Speak to a local expert
          </Link>

          <Link href="#locations" className={styles.link}>
            Find your location
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.map}>
        <AustralasiaMapSvg />
      </div>
    </div>
  </section>
);

export default LocationsHero;
