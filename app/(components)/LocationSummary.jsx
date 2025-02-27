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
        Our {service} support provides local businesses with expert technical
        assistance, troubleshooting and ongoing maintenance for Microsoft's
        cloud-based productivity suite. Our {location}-based team offers
        responsive support, migration services, and user training to help your
        business maximise its {service} investment and solve problems quickly.
      </p>
    </div>
  );
};

export default LocationSummary;
