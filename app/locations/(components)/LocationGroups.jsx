import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/locationGroups.module.css";

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
                    <Link
                      href={location.serviceLinks.excel}
                      className={styles.serviceLink}
                    >
                      <span>Excel Experts</span>
                      <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <Link
                      href={location.serviceLinks.word}
                      className={styles.serviceLink}
                    >
                      <span>Word Experts</span>
                      <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <Link
                      href={location.serviceLinks.access}
                      className={styles.serviceLink}
                    >
                      <span>Access Experts</span>
                      <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <Link
                      href={location.serviceLinks.powerplatform}
                      className={styles.serviceLink}
                    >
                      <span>Power Platform Experts</span>
                      <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <Link
                      href={location.serviceLinks.office}
                      className={styles.serviceLink}
                    >
                      <span>Office Experts</span>
                      <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
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
