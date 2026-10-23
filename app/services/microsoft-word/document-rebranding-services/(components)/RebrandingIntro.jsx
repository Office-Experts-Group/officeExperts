// /services/microsoft-word/document-rebranding-services/(components)/RebrandingIntro.jsx
import React from "react";
import Link from "next/link";

// Scroll animation wrapper shared across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/rebrandingIntro.module.scss";

// Before and after illustration, kept as a standalone SVG component
import { BrandSwapSvg } from "../(svgs)/RebrandingIntroSvg";

const RebrandingIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Time for a change?</p>
          <h2 className={styles.heading}>
            Give Your Documents a{" "}
            <span className={styles.accent}>Fresh, On-Brand Look</span>
          </h2>
          <p className={styles.lead}>
            When your company updates its brand, whether that&apos;s a new logo,
            a change in colour palette or a complete visual overhaul, your
            documents need to keep up.
          </p>
          <p className={styles.body}>
            At Office Experts, we specialise in document rebranding that goes
            beyond design. We implement your new brand and create the new
            template files your team uses every day.
          </p>
          <p className={styles.body}>
            Our advanced Word Template Solution with Formatting Tab lets your
            people create corporate documents efficiently, within your branding
            guidelines. It means external formatting and limited Word knowledge
            can&apos;t corrupt your{" "}
            <Link
              href="/services/microsoft-word/corporate-identity"
              className={styles.link}
            >
              corporate styles and functionality
            </Link>
            .
          </p>
          <Link href="#contact" className={`${styles.cta} btn`}>
            Request a rebranding quote
          </Link>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={0.9} delay={0.2}>
        <div className={styles.visual}>
          <BrandSwapSvg />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RebrandingIntro;
