// /services/microsoft-word/document-rebranding-services/(components)/RebrandingIntro.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/rebrandingIntro.module.scss";

// Before and after illustration, kept as a standalone SVG component
import { BrandSwapSvg } from "../(svgs)/RebrandingIntroSvg";

const RebrandingIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Time for a change?</p>
        <h1 className={styles.heading}>
          Give Your Documents a{" "}
          <span className={styles.accent}>Fresh, On-Brand Look</span>
        </h1>
        <p className={styles.lead}>
          When your company updates its brand, whether that&apos;s a new logo, a
          change in colour palette or a complete visual overhaul, your documents
          need to keep up.
        </p>
        <p className={styles.body}>
          At Office Experts, we specialise in document rebranding that goes
          beyond design. We implement your new brand and create the new template
          files your team uses every day.
        </p>

        <Link href="#contact" className={`${styles.cta} btn`}>
          Request a rebranding quote
        </Link>
      </div>

      <div className={styles.visual}>
        <BrandSwapSvg />
      </div>
    </div>
  </section>
);

export default RebrandingIntro;
