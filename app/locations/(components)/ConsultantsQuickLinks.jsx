// app/locations/(components)/ConsultantsQuickLinks.jsx
import React from "react";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/consultantsQuickLinks.module.scss";

// Arrow icon, inline SVG so it inherits the text colour via currentColor
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Plain anchor links, so the quick links work without any client-side
// JavaScript. Each href matches the id set on the matching LocationGroups
// section. sections is built in page.js from the location data.
const ConsultantsQuickLinks = ({ sections }) => (
  <section className={styles.section} id="states">
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Find your state</span>

        <h2 className={styles.headline}>
          Find a Microsoft consultant in{" "}
          <span className={styles.accent}>your state or territory.</span>
        </h2>
      </div>
    </AnimateOnScroll>

    <ul className={styles.grid}>
      {sections.map(({ id, abbr, sectionTitle, cities }) => (
        <li key={id}>
          <a href={`#${id}`} className={styles.tile}>
            <span className={styles.abbr}>{abbr}</span>
            <span className={styles.name}>{sectionTitle}</span>
            <span className={styles.cities}>{cities.join(" · ")}</span>
            <span className={styles.count}>
              {cities.length} {cities.length === 1 ? "location" : "locations"}
              <ArrowIcon />
            </span>
          </a>
        </li>
      ))}

      {/* Final tile covers anyone outside the listed areas */}
      <li>
        <a href="#contact" className={`${styles.tile} ${styles.remote}`}>
          <span className={styles.abbr}>Remote</span>
          <span className={styles.name}>Not in a listed area?</span>
          <span className={styles.cities}>
            Most projects are handled remotely, so where you are is rarely a
            barrier.
          </span>
          <span className={styles.count}>
            Get in touch
            <ArrowIcon />
          </span>
        </a>
      </li>
    </ul>
  </section>
);

export default ConsultantsQuickLinks;
