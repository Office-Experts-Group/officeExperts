// /components/InternalLinks.jsx
import React, { useId } from "react";
import Link from "next/link";

// Import compiled CSS module (not the .scss source)
import styles from "@/styles/internalLinks.module.scss";

/**
 * Internal linking block, placed at the bottom of a page just above the footer.
 * Server component (no client JS) so the links are in the initial HTML for crawlers.
 *
 * Props:
 *  - heading: string, section heading
 *  - text:    string, short supporting copy
 *  - links:   [{ text: "Anchor text", href: "/internal/path" }]
 *  - eyebrow: string (optional), small label above the heading
 */
const InternalLinks = ({
  heading,
  text,
  links = [],
  eyebrow = "Keep exploring",
}) => {
  // Unique id so the nav is labelled by its own heading (accessibility)
  const headingId = useId();

  // Nothing to link to, so render nothing rather than an empty section
  if (!links.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id={headingId} className={styles.heading}>
            {heading}
          </h2>
          {text && <p className={styles.text}>{text}</p>}
        </div>

        <nav aria-labelledby={headingId}>
          <ul className={styles.links}>
            {links.map(({ text: anchorText, href }) => (
              <li key={href} className={styles.item}>
                <Link href={href} className={styles.link}>
                  {anchorText}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default InternalLinks;

/* Usage (in any page.js, directly above the footer):
 *
 * import InternalLinks from "@/components/InternalLinks";
 *
 * <InternalLinks
 *   heading="Explore more Microsoft Word services"
 *   text="Looking for something similar? These pages cover related Word solutions."
 *   links={[
 *     { text: "Word Template Design", href: "/services/microsoft-word/templates" },
 *     { text: "Word Training", href: "/services/microsoft-word/training" },
 *   ]}
 * />
 */
