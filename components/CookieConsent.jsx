// /components/CookieConsent.jsx
"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/cookieConsent.module.scss";

// Tracking no longer depends on this banner. Google Tag Manager and the
// conversion hooks load from layout.js on every page. This component only
// records the visitor's choice in localStorage.
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // A choice already exists (accepted or declined): never show again
    if (localStorage.getItem("cookieConsent")) return;

    const show = () => setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        show();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(show, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h2 className={styles.title}>Cookie Consent</h2>
        <div className={styles.description}>
          <p className={styles.message}>
            We use cookies to analyze our traffic and improve your experience.
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={handleAccept} className={styles.acceptButton}>
              Accept All
            </button>
            <button onClick={handleDecline} className={styles.declineButton}>
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className={styles.closeButton}
          aria-label="Close"
        >
          <span className={styles.srOnly}>Close</span>
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
