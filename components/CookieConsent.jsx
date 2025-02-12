"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/cookieConsent.module.css";

const GA_ID = "G-JE7MYMKBCR";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if consent already exists
    const consentChoice = localStorage.getItem("cookieConsent");
    if (consentChoice === "accepted") {
      initializeAnalytics();
      return;
    }

    // Add scroll listener
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const initializeAnalytics = () => {
    if (typeof window === "undefined") return;

    try {
      // Initialize gtag
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_ID);

      // Add noscript iframe
      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${GA_ID}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    } catch (error) {
      console.error("Failed to initialize analytics:", error);
    }
  };

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", "accepted");
      initializeAnalytics();
      setIsVisible(false);
    }
  };

  const handleDecline = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", "declined");
      setIsVisible(false);
    }
  };

  // Don't render anything on server
  if (!isClient || !isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h2 className={styles.title}>Cookie Consent</h2>
        <div className={styles.description}>
          <p className={styles.message}>
            We use cookies to analyze our traffic and improve your experience.
            This includes Google Analytics and Google Tag Manager.
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
