// IntersectionTrigger.jsx
"use client";
import { useEffect, useRef } from "react";

export default function IntersectionTrigger({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    console.log("IntersectionTrigger mounted");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Intersection detected:", entry.isIntersecting);

          // Find all interactive elements within the target
          const elements = entry.target.querySelectorAll(
            'a, button, [role="button"]'
          );
          const target = entry.target;

          if (entry.isIntersecting) {
            console.log("Element in view:", target);

            // Simulate focus and hover on the element itself
            const hover = new MouseEvent("mouseenter", {
              view: window,
              bubbles: true,
              cancelable: true,
            });
            target.dispatchEvent(hover);
            target.focus();

            // Also trigger on child interactive elements
            elements.forEach((element) => {
              element.dispatchEvent(hover);
              element.focus();
            });
          } else {
            console.log("Element out of view:", target);

            // Remove hover/focus when out of view
            const unhover = new MouseEvent("mouseleave", {
              view: window,
              bubbles: true,
              cancelable: true,
            });
            target.dispatchEvent(unhover);
            target.blur();

            elements.forEach((element) => {
              element.dispatchEvent(unhover);
              element.blur();
            });
          }
        });
      },
      {
        threshold: [0, 0.3, 1], // Multiple thresholds for better tracking
        rootMargin: "0px",
      }
    );

    // Observe all cards directly
    // const targets = wrapperRef.current?.querySelectorAll("");
    // console.log("Found targets:", targets?.length);

    // if (targets?.length) {
    //   targets.forEach((target) => {
    //     console.log("Observing target:", target);
    //     observer.observe(target);
    //   });
    // } else {
    //   console.warn("No targets found to observe");
    // }

    return () => {
      console.log("Cleaning up observer");
      observer.disconnect();
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
