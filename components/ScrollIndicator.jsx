// components/ScrollIndicator.jsx
"use client";
import { useState, useEffect } from "react";
import styles from "../styles/scrollIndicator.module.scss";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(200); // Vibrate for 200ms
    }

    // Scroll to about 60% of viewport height
    window.scrollTo({
      top: Math.floor(window.innerHeight * 0.65),
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className={styles.scrollIndicator}
      onClick={handleClick}
      aria-label="Scroll to see more content"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </button>
  );
}
