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
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation once
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when even 10% is visible
        rootMargin: "50px", // Start animation slightly before element comes into view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const classes = `${styles.animate} ${styles[animation]} ${
    isVisible ? styles.visible : ""
  }`;

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
