// components/RelatedLinks.jsx

import { useId } from "react";
// Link handles both internal routes and absolute cross-site URLs
import Link from "next/link";
// Image resizes the 700 x 450 case study images down to the displayed size
import Image from "next/image";
// Compiled CSS module, built from styles/relatedLinks.module.scss
import styles from "../styles/relatedLinks.module.css";

// Intrinsic size of the source case study images. Next.js uses these for the
// aspect ratio only; the displayed size is set in the stylesheet.
const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 225;

// Used when a link doesn't supply its own linkText
const DEFAULT_LINK_TEXT = "Read the case study";

/**
 * A grid of link cards with an optional eyebrow, heading and intro text.
 * Server component: no client JavaScript, so every link is in the initial HTML.
 *
 * Props:
 * - theme: "dark" (default) or "light"
 * - eyebrow: small label above the heading (optional)
 * - heading: section heading (optional)
 * - text: intro paragraph under the heading (optional)
 * - links: array of { href, title, description, image, imageAlt, linkText }
 *   description, image, imageAlt and linkText are optional.
 *   linkText is the button's anchor text, so make it descriptive and vary it.
 *   imageAlt defaults to "" because the title above the image already names it.
 *   On other domains, image must be an absolute URL (see next.config.js).
 */
const RelatedLinks = ({
  theme = "dark",
  eyebrow,
  heading,
  text,
  links = [],
}) => {
  // Links the heading to the section for screen readers
  const headingId = useId();

  // Nothing to show, so render nothing rather than an empty section
  if (!links.length) return null;

  // Any value other than "light" falls back to the dark theme
  const themeClass = theme === "light" ? styles.light : styles.dark;

  return (
    <section
      className={`${styles.section} ${themeClass}`}
      aria-labelledby={heading ? headingId : undefined}
    >
      <div className={styles.inner}>
        {(eyebrow || heading || text) && (
          <header className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {heading && (
              <h2 id={headingId} className={styles.heading}>
                {heading}
              </h2>
            )}
            {text && <p className={styles.text}>{text}</p>}
          </header>
        )}

        <ul className={styles.grid}>
          {links.map(
            ({
              href,
              title,
              description,
              image,
              imageAlt = "",
              linkText = DEFAULT_LINK_TEXT,
            }) => (
              <li key={href}>
                <article className={styles.card}>
                  {/* Invisible link covering the whole card, so the title and
                      image are clickable. It is hidden from screen readers and
                      the tab order because the button below is the real link. */}
                  <Link
                    href={href}
                    className={styles.overlay}
                    aria-hidden="true"
                    tabIndex={-1}
                  />

                  <h3 className={styles.title}>{title}</h3>

                  {image && (
                    <div className={styles.thumb}>
                      <Image
                        src={image}
                        alt={imageAlt}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        className={styles.image}
                      />
                    </div>
                  )}

                  {description && (
                    <p className={styles.description}>{description}</p>
                  )}

                  {/* "btn" is the global button class and supplies the look, so
                      it is left untouched. styles.cardLink only places it. The
                      aria-label adds the title so screen reader users can tell
                      the buttons apart; it starts with the visible text. */}
                  <Link
                    href={href}
                    className={`btn ${styles.cardLink}`}
                    aria-label={`${linkText}: ${title}`}
                  >
                    {linkText}
                  </Link>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default RelatedLinks;
