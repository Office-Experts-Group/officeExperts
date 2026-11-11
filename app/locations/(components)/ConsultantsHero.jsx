// app/locations/(components)/ConsultantsHero.jsx
import React from "react";
import Link from "next/link";

// Custom illustration, stored as a standalone file in the route's (svgs) folder
import { ConsultantsHeroSvg } from "../(svgs)/ConsultantsHeroSvg";

import styles from "@/styles/consultantsHero.module.scss";

// Single figure in the stats row
const Stat = ({ value, label }) => (
  <li className={styles.stat}>
    <span className={styles.statValue}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </li>
);

// Server component with a CSS-only entrance animation, so the h1 renders
// straight away without waiting on client JavaScript.
// locationCount is built in page.js from the location data, so the figure
// can never drift from the cards below.
const ConsultantsHero = ({ locationCount }) => (
  <section className={styles.section}>
    {/* Dark band that sits behind the site header on light heroes */}
    <div className={styles.headerBlock} />

    <div className={styles.inner}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Our locations</span>

          <h1 className={styles.headline}>
            Microsoft consultants Australia-wide,{" "}
            <span className={styles.accent}>locally supported.</span>
          </h1>

          <p className={styles.lede}>
            Office Experts Group has been providing Microsoft consulting,
            development and training since 2000. Our team works with businesses
            across Australia, with consultants based in cities and regions
            throughout the country.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.btn}>
              Get a free consultation
            </Link>

            <Link href="#states" className={styles.link}>
              Find your state
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

        <div className={styles.illustration}>
          <ConsultantsHeroSvg />
        </div>
      </div>

      <ul className={styles.stats}>
        <Stat value="2000" label="Established" />
        <Stat value="25+" label="Consultants nationwide" />
        <Stat value={locationCount} label="Local service areas" />
        <Stat value="Remote support" label="Australia wide" />
      </ul>
    </div>
  </section>
);

export default ConsultantsHero;
