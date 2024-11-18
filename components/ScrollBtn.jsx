"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/scrollBtn.module.css";

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentScrollPos = window.scrollY;
    const scrollingDown = currentScrollPos > (window.lastScrollPosition || 0);
    window.lastScrollPosition = currentScrollPos;

    if (scrollingDown) {
      setIsVisible(currentScrollPos > 100);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);

    if (typeof window === "undefined") return;

    let timeoutId = null;
    const debouncedScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll);
    // Initial check
    handleScroll();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Don't render during SSR
  if (!isClient) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollBtn} ${isVisible ? styles.visible : ""}`}
      aria-label="Scroll to top"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z" />
      </svg>
    </button>
  );
};

export default ScrollBtn;
