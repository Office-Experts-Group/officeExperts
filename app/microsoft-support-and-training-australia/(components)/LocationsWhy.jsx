// app/microsoft-support-and-training-australia/(components)/LocationsWhy.jsx
import React from "react";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/locationsWhy.module.scss";

// The four reasons, rendered as unordered cards (not a sequence, so no numbers)
const reasons = [
  {
    title: "Australia-wide coverage",
    text: "With consultants in major cities and regional areas, we provide comprehensive support across Australia, combining local expertise with nationwide resources.",
  },
  {
    title: "Customised solutions",
    text: "We design tailored support packages and training programs that address your specific business challenges and goals, ensuring maximum ROI on your entire Microsoft Suite.",
  },
  {
    title: "Flexible delivery options",
    text: "From on-site support visits to remote troubleshooting and virtual training sessions, we adapt our service delivery to suit your schedule and preferences.",
  },
  {
    title: "Certified Microsoft experts",
    text: "Our team of certified Microsoft professionals combines technical expertise with practical business experience to solve complex challenges and optimise your technology ecosystem.",
  },
];

const LocationsWhy = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
      <span className={styles.eyebrow}>Why choose us</span>

      <h2 className={styles.headline}>
        Microsoft support and training{" "}
        <span className={styles.accent}>that fits your business.</span>
      </h2>
    </AnimateOnScroll>

    <div className={styles.grid}>
      {reasons.map((reason, index) => (
        <AnimateOnScroll
          key={reason.title}
          animation="fade-up"
          duration={0.6}
          delay={(index % 2) * 0.1}
        >
          <div className={styles.reason}>
            <h3 className={styles.title}>{reason.title}</h3>
            <p className={styles.text}>{reason.text}</p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default LocationsWhy;
