"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/servicesCard.module.scss";

export default function CardIntersectionWrapper({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList) {
            // Add/remove the CSS module class
            entry.target.classList.toggle(styles.inView, entry.isIntersecting);

            // Find child elements using the CSS module classes
            const cardImage = entry.target.querySelector(
              `.${styles.cardImage}`
            );
            const cardContent = entry.target.querySelector(
              `.${styles.cardContent}`
            );

            if (cardImage) {
              cardImage.classList.toggle(
                styles.inViewImage,
                entry.isIntersecting
              );
            }
            if (cardContent) {
              cardContent.classList.toggle(
                styles.inViewContent,
                entry.isIntersecting
              );
            }
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-33.3% 0px",
      }
    );

    const cards = wrapperRef.current?.querySelectorAll(
      `[class*="${styles.card}"]`
    );
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
