"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import styles from "../styles/cookieConsent.module.css";

// Google Analytics ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-PPD9KDBZCN";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if consent already exists
    const consentChoice = localStorage.getItem("cookieConsent");
    if (consentChoice === "accepted") {
      setShowAnalytics(true);
      return;
    }

    // Add scroll listener for better UX
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Show consent after slight delay if no choice made and no scroll yet
    const timer = setTimeout(() => {
      if (!localStorage.getItem("cookieConsent") && !hasScrolled) {
        setIsVisible(true);
      }
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [hasScrolled]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowAnalytics(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <>
      {showAnalytics && (
        <>
          {/* Google Analytics script - gtag.js */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {isClient && isVisible && (
        <div className={styles.container}>
          <div className={styles.alert}>
            <h2 className={styles.title}>Cookie Consent</h2>
            <div className={styles.description}>
              <p className={styles.message}>
                We use cookies to analyze our traffic and improve your
                experience.
              </p>
              <div className={styles.buttonGroup}>
                <button onClick={handleAccept} className={styles.acceptButton}>
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className={styles.declineButton}
                >
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
      )}
    </>
  );
};

export default CookieConsent;
