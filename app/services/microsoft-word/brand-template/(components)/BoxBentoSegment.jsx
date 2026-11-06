import React from "react";
import Link from "next/link";

// Fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

import {
  LaunchIcon,
  StandardiseIcon,
  PresentationIcon,
  ToolsIcon,
  MergeIcon,
} from "../(svgs)/BentoIcons";

import styles from "@/styles/boxBentoSegment.module.scss";

// Defined outside the component so the array isn't rebuilt on every render.
// `tile` maps to the grid placement class for the bento layout.
const audiences = [
  {
    tile: "tileLaunch",
    icon: LaunchIcon,
    title: "Companies launching a new brand identity",
    text: "Carry your new logo, colours and fonts into every document from day one, so your brand looks complete the moment it goes public.",
  },
  {
    tile: "tileStandardise",
    icon: StandardiseIcon,
    title: "Businesses seeking to standardise document formats",
    text: "Replace a patchwork of one-off files with a single set of approved layouts, so every proposal, report and letter follows the same structure.",
  },
  {
    tile: "tilePresentation",
    icon: PresentationIcon,
    title: "Organisations looking to improve professional presentation",
    text: "Polished covers, clean layouts and consistent typography that make every document look considered.",
  },
  {
    tile: "tileTools",
    icon: ToolsIcon,
    title: "Teams that need user-friendly documentation tools",
    text: "Built-in styles and editable placeholders let anyone create on-brand documents with confidence.",
  },
  {
    tile: "tileMerge",
    icon: MergeIcon,
    title: "Companies merging with consistent document styles",
    text: "Bring two sets of documents together under one visual identity, so clients and staff see a single, unified company.",
  },
];

const BoxBentoSegment = () => {
  return (
    <section className={styles.section} id="no-more-headaches">
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1}>
          <header className={styles.header}>
            <div>
              <p className={styles.eyebrow}>Who It&apos;s For</p>
              <h2 className={styles.heading}>
                Who Needs{" "}
                <span className={styles.accent}>Branded Templates</span>?
              </h2>
            </div>
            <p className={styles.intro}>
              Word templates help organisations ensure documents follow the same
              structure, formatting, and style across teams.
            </p>
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.grid}>
            {audiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`${styles.tile} ${styles[item.tile]} ${
                    index === 0 ? styles.tileAccent : ""
                  }`}
                >
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>

                  {/* Decorative stack of pages on the featured accent tile */}
                  {index === 0 && (
                    <div className={styles.pages} aria-hidden="true">
                      <span className={styles.pageBack} />
                      <span className={styles.pageFront} />
                    </div>
                  )}
                </article>
              );
            })}

            <div
              className={`${styles.tile} ${styles.tileAccent} ${styles.tileCta}`}
            >
              <div>
                <h3 className={styles.title}>Sound like your business?</h3>
                <p className={styles.text}>
                  Tell us about your brand and we&apos;ll show you what a
                  tailored template set could look like.
                </p>
              </div>
              <Link href="#contact" className={styles.cta}>
                Get in touch
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default BoxBentoSegment;
