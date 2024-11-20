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
  const [hasInitialized, setHasInitialized] = useState(false);
  const elementRef = useRef(null);
  const lastScrollY = useRef(0);
  const wasAboveViewport = useRef(false);
  const wasBelowViewport = useRef(false);

  const checkVisibility = () => {
    if (!elementRef.current || typeof window === "undefined") return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.9;
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY.current;

    // Check if element is currently visible in viewport
    const isElementVisible = rect.top <= triggerPoint && rect.bottom >= 0;

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

    if (isElementVisible) {
      // Handle initial load and back navigation
      if (!hasInitialized) {
        setIsVisible(true);
        setHasInitialized(true);
      }
      // Handle normal scrolling animations
      else if (
        isScrollingDown &&
        (wasBelowViewport.current || (!wasAboveViewport.current && !isVisible))
      ) {
        setIsVisible(true);
        wasBelowViewport.current = false;
      } else if (!isScrollingDown && wasAboveViewport.current) {
        setIsVisible(true);
        wasAboveViewport.current = false;
      }
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    // Initial check on mount
    checkVisibility();

    // Handle scroll events
    const handleScroll = () => {
      checkVisibility();
    };

    // Handle back/forward navigation and initial load
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      // Check visibility after a short delay to handle browser restore scroll
      const timeoutId = setTimeout(checkVisibility, 100);

      // Handle browser navigation events
      window.addEventListener("popstate", checkVisibility);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("popstate", checkVisibility);
        clearTimeout(timeoutId);
      };
    }
  }, []);

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
