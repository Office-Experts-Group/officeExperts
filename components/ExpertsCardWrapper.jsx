"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/expertsAwait.module.css";

export default function ExpertsCardWrapper({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Delay the observer setup slightly to ensure DOM is ready
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const card = entry.target;
            if (card.hasAttribute("data-card")) {
              card.classList.toggle(styles.cardInView, entry.isIntersecting);

              if (entry.isIntersecting) {
                card.setAttribute("data-intersecting", "true");
              } else {
                card.removeAttribute("data-intersecting");
              }
            }
          });
        },
        {
          threshold: [0.5],
          rootMargin: "-33.3% 0px",
        }
      );

      const cards = wrapperRef.current?.querySelectorAll("[data-card]");

      if (cards && cards.length > 0) {
        cards.forEach((card) => {
          observer.observe(card);
        });
      } else {
        // Try finding cards without the wrapper context
        const allCards = document.querySelectorAll("[data-card]");
      }

      return () => {
        observer.disconnect();
      };
    }, 100);
  }, []);

  // Add a className to help identify the wrapper
  return (
    <div ref={wrapperRef} className={styles.cardWrapper || "card-wrapper"}>
      {children}
    </div>
  );
}
