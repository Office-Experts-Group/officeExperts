import React from "react";

import styles from "../../../../styles/quote.module.css";

const Quote = () => {
  return (
    <section>
      <blockquote className={styles.quote}>
        <p style={{ margin: "3rem auto 0 auto", lineHeight: "1.8" }}>
          "With Microsoft 365 at the centre, organisations can bring together
          “collaborative apps, Microsoft Teams, Dynamics 365, and Power
          Platform… plus security and identity” into a single environment
          accessible from anywhere. This unified approach allows users to access
          their tools, data, and workflows consistently across devices and
          locations without fragmentation."
        </p>
        <cite style={{ fontSize: "0.9rem", color: "#777" }}>
          —{" "}
          <a
            href="https://www.microsoft.com/en-us/microsoft-365/blog/2021/07/14/from-collaborative-apps-in-microsoft-teams-to-cloud-pc-heres-whats-new-in-microsoft-365-at-inspire/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft.com
          </a>
        </cite>
      </blockquote>
    </section>
  );
};

export default Quote;
