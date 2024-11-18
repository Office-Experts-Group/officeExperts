"use client";
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import styles from "../styles/animate.module.css";

const AnimateOnScroll = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef(null);
  const lastScrollY = useRef(0);
  const wasAboveViewport = useRef(false);
  const wasBelowViewport = useRef(false);

  useEffect(() => {
    // Initialize scroll position
    setScrollY(window?.scrollY || 0);
    lastScrollY.current = window?.scrollY || 0;

    const handleScroll = () => {
      if (!elementRef.current || typeof window === "undefined") return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.9;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Update scroll tracking
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;

      // Check viewport position
      if (rect.bottom < 0) {
        wasAboveViewport.current = true;
        wasBelowViewport.current = false;
        setIsVisible(false);
      }

      if (rect.top > windowHeight) {
        wasBelowViewport.current = true;
        wasAboveViewport.current = false;
        setIsVisible(false);
      }

      if (rect.top <= triggerPoint && rect.bottom >= 0) {
        if (
          isScrollingDown &&
          (wasBelowViewport.current ||
            (!wasAboveViewport.current && !isVisible))
        ) {
          setIsVisible(true);
          wasBelowViewport.current = false;
        }

        if (!isScrollingDown && wasAboveViewport.current) {
          setIsVisible(true);
          wasAboveViewport.current = false;
        }
      }
    };

    // Safe window check
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isVisible]);

  const baseClass = styles.animate;
  const animationClass = styles[animation];
  const visibilityClass = isVisible ? styles.visible : "";
  const classes = `${baseClass} ${animationClass} ${visibilityClass}`;

  return (
    <div
      ref={elementRef}
      className={classes}
      style={{
        "--animation-delay": `${delay}s`,
        "--animation-duration": `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale-up",
    "fade",
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default AnimateOnScroll;
