import React from "react";

import styles from "../../styles/locationSummary.module.scss";

const LocationSummary = ({ location, service }) => {
  return (
    <div className={styles.summary}>
      <div>
        <strong>Summary:</strong>
        <h2>
          What is {service} Support in {location}?
        </h2>
      </div>

      <p>
        Our {service} expertise provides {location} businesses with professional
        consulting, development, and support services tailored to your specific
        needs. Our local team of Microsoft-certified specialists offers custom
        solutions, troubleshooting assistance, and comprehensive training to
        help your organisation leverage the full power of Microsoft
        technologies.
      </p>
    </div>
  );
};

export default LocationSummary;
