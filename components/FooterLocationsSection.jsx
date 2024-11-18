import React from "react";
import Link from "next/link";

import styles from "../styles/footerLocations.module.css";

const locationsByState = {
  "New South Wales": {
    Sydney: {
      links: [
        ["Excel", "Access"],
        ["Word", "PowerPoint"],
        ["Office", "Office 365"],
      ],
      urls: [
        "/excel-and-access-experts-sydney/",
        "/word-and-powerpoint-experts-sydney/",
        "/office-and-office-365-experts-sydney/",
      ],
    },
    Wollongong: "/office-excel-access-and-word-experts-wollongong/",
    "Central Coast": "/excel-and-access-experts-central-coast-nsw/",
    "Northern Rivers":
      "/office-excel-access-and-365-experts-northern-rivers-nsw/",
  },
  Victoria: {
    Melbourne: {
      links: [
        ["Excel", "Access"],
        ["Word", "PowerPoint"],
        ["Office", "Office 365"],
      ],
      urls: [
        "/excel-and-access-experts-melbourne/",
        "/word-and-powerpoint-experts-melbourne/",
        "/office-and-office-365-experts-melbourne/",
      ],
    },
    Richmond: {
      links: [
        ["Excel", "Access"],
        ["Word", "PowerPoint"],
        ["Office", "Office 365"],
      ],
      urls: [
        "/excel-and-access-experts-richmond/",
        "/word-and-powerpoint-experts-richmond/",
        "/office-and-office-365-experts-richmond/",
      ],
    },
  },
  Queensland: {
    Brisbane: "/office-excel-access-and-365-experts-brisbane/",
    "Gold Coast": "/word-and-powerpoint-experts-gold-coast/",
  },
  "Western Australia": {
    Perth: {
      links: [
        ["Word", "PowerPoint"],
        ["Excel", "Access"],
        ["Office", "Office 365"],
      ],
      urls: [
        "/word-and-powerpoint-experts-perth/",
        "/office-excel-access-and-365-experts-perth/",
        "/office-excel-access-and-365-experts-perth/",
      ],
    },
  },
  ACT: {
    Canberra: "/word-and-powerpoint-experts-canberra/",
  },
  "Northern Territory": {
    Darwin: "/office-excel-access-and-365-experts-darwin/",
  },
};

const FooterLocationsSection = () => {
  return (
    <div className={styles.locationsSection}>
      <h3>Our Locations</h3>
      <p className={styles.remoteAccess}>Australia-wide via remote access</p>

      <div className={styles.statesGrid}>
        {Object.entries(locationsByState).map(([state, locations]) => (
          <div key={state} className={styles.stateDropdown}>
            <p className={styles.stateHeader}>{state}</p>

            {/* Cities dropdown */}
            <div className={styles.locationsDropdown}>
              {Object.entries(locations).map(([city, data]) => (
                <div key={city} className={styles.cityItem}>
                  {typeof data === "string" ? (
                    <Link href={data} className={styles.cityLink}>
                      {city}
                    </Link>
                  ) : (
                    <div className={styles.cityWithServices}>
                      <span className={styles.cityName}>{city}</span>

                      {/* Services dropdown */}
                      <div className={styles.servicesDropdown}>
                        {data.links.map((linkGroup, index) => (
                          <div key={index} className={styles.servicesList}>
                            {linkGroup.map((service) => (
                              <Link
                                key={service}
                                href={data.urls[index]}
                                className={styles.serviceLink}
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLocationsSection;
