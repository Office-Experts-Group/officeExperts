// components/LocationGroups.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/locationGroups.module.css";

// Helper — only renders a <Link> when href is a non-empty string.

const ServiceLink = ({ href, label }) => {
  if (!href) return null;
  return (
    <Link href={href} className={styles.serviceLink}>
      <span>{label}</span>
      <svg viewBox="0 0 24 24" className={styles.linkIcon}>
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

const LocationGroups = ({ sectionTitle, locations }) => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <div key={index} className={styles.locationCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={location.image}
                  alt={location.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.locationImage}
                />
                <h3 className={styles.locationName}>{location.name}</h3>
              </div>

              <div className={styles.locationContent}>
                <p className={styles.locationDescription}>
                  {location.description}
                </p>

                <div className={styles.serviceLinks}>
                  <h4>Our Services in {location.name.split(",")[0]}</h4>
                  <div className={styles.linkGrid}>
                    <ServiceLink
                      href={location.serviceLinks.excel}
                      label="Excel Experts"
                    />
                    <ServiceLink
                      href={location.serviceLinks.word}
                      label="Word Experts"
                    />
                    <ServiceLink
                      href={location.serviceLinks.access}
                      label="Access Experts"
                    />
                    <ServiceLink
                      href={location.serviceLinks.powerplatform}
                      label="Power Platform Experts"
                    />
                    <ServiceLink
                      href={location.serviceLinks.office}
                      label="Office Experts"
                    />
                    <ServiceLink
                      href={location.supportLink}
                      label="Support & Training"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationGroups;
