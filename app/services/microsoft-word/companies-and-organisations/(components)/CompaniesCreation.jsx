// /services/microsoft-word/companies-and-organisations/(components)/CompaniesCreation.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// One line icon per point, drawn in currentColor so the SCSS sets the colour
import { creationIcons } from "../(svgs)/CreationIcons";

import styles from "@/styles/companiesCreation.module.scss";

// Not a sequence, so these are unordered cards rather than numbered steps
const points = [
  {
    id: "styles",
    Icon: creationIcons.styles,
    title: "Approved styles and colours",
    body: "Users will have access to approved prebuilt styles and colour palette, based on your specifications.",
  },
  {
    id: "fonts",
    Icon: creationIcons.fonts,
    title: "Fonts stay locked",
    body: "Your brand will be secure as users will not have the ability to edit fonts or font sizes from the Home tab.",
  },
  {
    id: "paste",
    Icon: creationIcons.paste,
    title: "Controlled pasting",
    body: "Pasted text is inserted under a controlled environment which ensures only your corporate fonts are permitted.",
  },
  {
    id: "documents",
    Icon: creationIcons.documents,
    title: "Protected documents",
    body: "Your documents will no longer be ruined by external formatting corrupting your styles and functionality.",
  },
];

const CompaniesCreation = () => (
  <section className={styles.section} id="document-creation">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Brand protection</p>
          <h2 className={styles.heading}>
            Streamlined and Secure{" "}
            <span className={styles.headingAccent}>Document Creation</span>
          </h2>
          <p className={styles.lead}>
            Our{" "}
            <Link href="/services/microsoft-word/corporate-global-template-solution">
              custom template solutions
            </Link>{" "}
            give users access to pre-approved styles and colours based on your
            brand&rsquo;s unique specifications. By limiting font and style
            changes, our controlled environment ensures that every document
            aligns with your corporate identity, preserving brand consistency
            while empowering users to work efficiently within set guidelines.
          </p>
          <div className={styles.ctaRow}>
            <a
              href="tel:+61-1300-12-20-38"
              className={`btn ${styles.call}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
              1300 122 038
            </a>
            <span className={styles.ctaNote}>Call a template specialist</span>
          </div>
        </div>

        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point.id} className={styles.point}>
              <span className={styles.icon} aria-hidden="true">
                <point.Icon />
              </span>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointBody}>{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CompaniesCreation;
