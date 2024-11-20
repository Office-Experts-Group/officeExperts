"use client";
import React, { useEffect, useState } from "react";

import ContactLocation from "./ContactLocation";
import QuoteLocation from "./QuoteLocation";

import styles from "../styles/contact.module.css";

const Contact = ({ isQuote, location }) => {
  const [activeForm, setActiveForm] = useState("contact");

  const handleFormSwitch = (formType) => {
    setActiveForm(formType);
  };

  useEffect(() => {
    if (isQuote) {
      setActiveForm("quote");
    }
  }, []);

  return (
    <section
      className={styles.contact}
      id="contact"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className={styles.sidebar}>
        <div className={styles.optionsWrapper}>
          <div
            className={`${styles.option} ${styles.contactOption} ${
              activeForm === "contact" ? styles.active : ""
            } ${activeForm === "quote" ? styles.bottom : ""}`}
            onClick={() => handleFormSwitch("contact")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleFormSwitch("contact");
            }}
          >
            <h2>Contact Us</h2>
            <div className={styles.description}>
              <p>
                Get in touch with our team in {location} for general inquiries
                and support. We&apos;re here to help with any questions you
                might have about our services.
              </p>
            </div>
          </div>

          <div
            className={`${styles.option} ${styles.quoteOption} ${
              activeForm === "quote" ? styles.active : ""
            } ${activeForm === "contact" ? styles.bottom : ""}`}
            onClick={() => handleFormSwitch("quote")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleFormSwitch("quote");
            }}
          >
            <h2>Request a Quote</h2>
            <div className={styles.description}>
              <p>
                Need pricing for a specific project? Fill out our quote form and
                we&apos;ll provide you with a detailed estimate tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div
          className={`${styles.formWrapper} ${
            activeForm === "contact" ? styles.visible : ""
          }`}
        >
          <ContactLocation location={location} />
        </div>
        <div
          className={`${styles.formWrapper} ${
            activeForm === "quote" ? styles.visible : ""
          }`}
        >
          <QuoteLocation location={location} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
