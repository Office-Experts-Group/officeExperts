import React from "react";

import styles from "../../../../../styles/quote.module.css";

const Quote = () => {
  return (
    <section>
      <blockquote className={styles.quote}>
        <p style={{ margin: "0 0 0.5rem 0", lineHeight: "1.8" }}>
          "From wider data-security research (not SQL-specific): Organisations
          that implement encryption at rest/transit face 58% fewer data breaches
          compared to those that don't."
        </p>
        <cite style={{ fontSize: "0.9rem", color: "#777" }}>
          —{" "}
          <a
            href="https://moldstud.com/articles/p-a-deep-dive-into-sql-database-security-essential-strategies-for-protecting-your-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moldstud: Deep Dive into SQL Database Security
          </a>
        </cite>
      </blockquote>
    </section>
  );
};

export default Quote;
