// components/FormatTab.jsx
import React from "react";
import Image from "next/image";

import styles from "@/styles/formatTab.module.scss";

import formatTab from "@/public/formatTab.webp";
import formatTab2 from "@/public/formatTab2.webp"; // rename to match your import
import formatTab3 from "@/public/formatTab3.webp"; // rename to match your import

const slides = [
  {
    src: formatTab,
    alt: "Custom formatting tab in Word",
    caption:
      "Built to fit your workflows. Select the features you need, or ask us about creating new functionality for your team.",
  },
  {
    src: formatTab2,
    alt: "Build tab in Word",
    caption:
      "Build Tab – Contains all of the specialised functions used to create or modify your template.",
  },
  {
    src: formatTab3,
    alt: "Apply tab in Word",
    caption:
      "Apply Tab – Apply lists, styles, and cleanup tools to your template.",
  },
];

// Renders one slide. `isClone` marks the duplicate first slide at the end of
// the track, which only exists to make the loop seamless, so it's hidden from
// screen readers to avoid the first slide being announced twice.
const Slide = ({ src, alt, caption, isClone = false }) => (
  <div className={styles.slide} aria-hidden={isClone || undefined}>
    <Image src={src} alt={isClone ? "" : alt} />
    <p>{caption}</p>
  </div>
);

const FormatTab = () => {
  return (
    <section className={styles.formatTab}>
      <div className={styles.content}>
        <h2>
          Our Custom <span className={styles.accent}>Formatting Tabs</span>
        </h2>
        <p>
          Our dedicated Formatting Tabs are built directly into the Word ribbon,
          providing a user-friendly interface that brings powerful formatting
          and automation tools into one central location. Combined with a strong
          Template foundation, a custom Formatting Tab creates a controlled,
          brand‑safe environment where documents behave consistently regardless
          of the user’s Word experience.
        </p>
        <p>
          From complex reports to everyday documents, the tab simplifies tasks
          and supports consistent, professional results without requiring
          expert-level Word knowledge. The Formatting Tab manages how text,
          lists, tables, and styles are applied, ensuring pasted content
          automatically matches your corporate formatting. It also provides
          helpful automation tools like adding landscape pages, updating fields,
          and other commonly used actions.
        </p>
      </div>

      {/* .img is the visible window; the slides move inside it */}
      <div className={styles.img}>
        {slides.map((slide) => (
          <Slide key={slide.alt} {...slide} />
        ))}
        {/* Clone of the first slide, so the end of the loop is invisible */}
        <Slide {...slides[0]} isClone />
      </div>
    </section>
  );
};

export default FormatTab;
