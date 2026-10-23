// /services/microsoft-word/document-rebranding-services/(components)/RebrandingWho.jsx
import React from "react";
import Link from "next/link";

// Scroll animation wrapper shared across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/rebrandingWho.module.scss";

// One icon per audience, as standalone SVG components
import {
  RebrandIcon,
  MergerIcon,
  GovLegalIcon,
  SmallBusinessIcon,
  ConsultancyIcon,
} from "../(svgs)/RebrandingWhoSvgs";

// Each audience has a typical situation and what we deliver for it
const audiences = [
  {
    name: "Companies undergoing a visual rebrand",
    Icon: RebrandIcon,
    situation:
      "A new logo, palette or typeface has been approved, but every letterhead, report and proposal still carries the old look.",
    delivery:
      "We rebuild your templates on the new identity and convert the existing document library, so the change lands everywhere at once.",
  },
  {
    name: "Mergers and acquisitions needing document unification",
    Icon: MergerIcon,
    situation:
      "Two organisations, two sets of templates, and clients receiving documents that look like they came from different companies.",
    delivery:
      "One unified set of Master Templates, with existing documents transferred into it so both teams work from the same foundation.",
  },
  {
    name: "Government departments and legal firms with strict formatting standards",
    Icon: GovLegalIcon,
    situation:
      "Formatting rules are strict, documents are long, and one wrong style can undermine a submission or a contract.",
    delivery: (
      <>
        Locked-down styles, numbering and content controls that enforce the
        standard, built for{" "}
        <Link
          href="/services/microsoft-word/government-departments"
          className={styles.link}
        >
          government departments
        </Link>{" "}
        and legal firms with approval requirements in mind.
      </>
    ),
  },
  {
    name: "Small-to-medium businesses refreshing their image",
    Icon: SmallBusinessIcon,
    situation:
      "The business has outgrown its original look, but there is no in-house designer or Word expert to bring the documents up to scratch.",
    delivery:
      "A compact, polished template set sized to how your team really works, without enterprise overhead.",
  },
  {
    name: "Consultancies preparing branded templates for clients",
    Icon: ConsultancyIcon,
    situation:
      "Client-facing documents are your product, and inconsistent formatting reflects on your credibility.",
    delivery:
      "Branded proposal, report and deliverable templates that every consultant can use correctly and that hold up under repeated editing.",
  },
];

const RebrandingWho = () => (
  <section className={styles.section} aria-labelledby="rebranding-who-heading">
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.7} delay={0}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Who we help</p>
          <h2 id="rebranding-who-heading" className={styles.heading}>
            Who Is <span className={styles.accent}>This For?</span>
          </h2>
          <p className={styles.lead}>
            Our document rebranding service is ideal for all businesses large
            and small, sturggling on your own to create a meanigful brand
            position, or even have a large team trying to work together on a new
            concept?{" "}
            <Link href="meet-the-team" className={styles.link}>
              Our Word Designers
            </Link>{" "}
            have all the expertise you need to get the job done.
          </p>
        </header>
      </AnimateOnScroll>

      <ul className={styles.rows}>
        {audiences.map(({ name, Icon, situation, delivery }, index) => (
          // The li stays the direct child of the ul; the animation wrapper sits inside it
          <li key={name}>
            <AnimateOnScroll
              animation="fade-up"
              duration={0.6}
              delay={index * 0.06}
            >
              <div className={styles.row}>
                <div className={styles.audience}>
                  <span className={styles.iconTile}>
                    <Icon />
                  </span>
                  <h3 className={styles.name}>{name}</h3>
                </div>
                <div>
                  <span className={styles.cellLabel}>The situation</span>
                  <p className={styles.cellText}>{situation}</p>
                </div>
                <div className={styles.delivery}>
                  <span className={styles.cellLabel}>What we deliver</span>
                  <p className={styles.cellText}>{delivery}</p>
                </div>
              </div>
            </AnimateOnScroll>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RebrandingWho;
