// /services/microsoft-word/document-rebranding-services/(components)/RebrandingWhy.jsx
import React from "react";
import Link from "next/link";

// Scroll animation wrapper shared across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/rebrandingWhy.module.scss";

// Tile icons and the phone icon, as standalone SVG components
import {
  DesignersIcon,
  UsabilityIcon,
  RolloutIcon,
  SupportIcon,
  PhoneIcon,
} from "../(svgs)/RebrandingWhySvgs";

const stats = [
  { value: "2000", label: "Established, Australian owned" },
  { value: "25+", label: "Specialist consultants across Australia" },
];

// Tile order matters: wide accent, narrow dark, narrow dark, wide accent
// gives the checkerboard layout set in the stylesheet
const reasons = [
  {
    title: "Designers and document specialists on staff",
    text: "Brand design and Microsoft Office engineering sit in the same team. What your guidelines approve is what gets built in Word, with real styles, themes and structure behind it, instead of a look that only holds until someone edits the file.",
    tags: ["Brand design", "Word engineering"],
    Icon: DesignersIcon,
    variant: "accentWide",
  },
  {
    title: "Real-world usability in Microsoft Office",
    text: "Templates are built the way Word expects, so your staff can write instead of fighting the formatting.",
    tags: ["Styles", "Content controls"],
    Icon: UsabilityIcon,
    variant: "darkNarrow",
  },
  {
    title: "Fast turnaround for rebrand rollouts",
    text: "A rebrand has a launch date. We plan the template build and bulk document conversion around it.",
    tags: ["Bulk conversion"],
    Icon: RolloutIcon,
    variant: "darkNarrow",
  },
  {
    title: "Ongoing support available",
    text: "The rollout is the start, not the end. We stay on hand for template updates, new document types, staff training and the odd question when something looks off, so your brand holds up long after launch.",
    tags: ["Updates", "Training", "Support"],
    Icon: SupportIcon,
    variant: "accentWide",
  },
];

const RebrandingWhy = () => (
  <section
    className={styles.section}
    id="document-creation"
    aria-labelledby="rebranding-why-heading"
  >
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.7} delay={0}>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.eyebrow}>Why Office Experts</p>
            <h2 id="rebranding-why-heading" className={styles.heading}>
              Why use <span className={styles.accent}>Office Experts?</span>
            </h2>
            <p className={styles.lead}>
              We combine design expertise with deep Microsoft Office knowledge.
              Established in 2000,{" "}
              <Link href="/meet-the-team" className={styles.link}>
                Our team
              </Link>{" "}
              is uniquely positioned to deliver stunning and functional
              templates that your team can actually use.
            </p>
            <Link href="tel:+61-1300-12-20-38" className={`${styles.cta} btn`}>
              <PhoneIcon />
              <span>1300 122 038</span>
            </Link>
          </div>

          <ul className={styles.stats}>
            {stats.map(({ value, label }) => (
              <li key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </header>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}>
        <div className={styles.bento}>
          {reasons.map(({ title, text, tags, Icon, variant }) => (
            <article
              key={title}
              className={`${styles.tile} ${styles[variant]}`}
            >
              <span className={styles.icon}>
                <Icon />
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
              <ul className={styles.tags}>
                {tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RebrandingWhy;
