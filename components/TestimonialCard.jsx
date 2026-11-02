// TestimonialCard.jsx
// Testimonial card for /client-testimonials. Same design as the home page
// cards: quote mark, clamped quote, then logo (or initials) with name and company.
// The full quote is always in the HTML; CSS clamps it to 5 lines.
import React from "react";
import Image from "next/image";
import styles from "@/styles/testimonialsCard.module.scss";

// First letters of the first two words of the name, e.g. "Brenna Allmey" -> "BA"
const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

// Quotes longer than this are likely cut off by the 5 line clamp, so they get a
// "Read more" toggle. CSS cannot tell us whether the clamp actually kicked in,
// so this is a character count estimate. Lower it if a clamped quote is
// missing its toggle, raise it if short quotes show one they do not need.
const READ_MORE_LENGTH = 170;

const TestimonialCard = ({ content, name, contact, image, index }) => {
  const isAboveFold = index < 3;
  const isLong = content.length > READ_MORE_LENGTH;
  const lastSpace = content.lastIndexOf(" ", READ_MORE_LENGTH);
  const cut = lastSpace > 0 ? lastSpace : READ_MORE_LENGTH;
  const visible = isLong ? content.slice(0, cut) : content;
  const rest = isLong ? content.slice(cut) : "";

  return (
    <figure className={styles.card}>
      {/* Swap this for the quote icon the home page cards use if you have one */}
      <span className={styles.quoteMark} aria-hidden="true">
        <svg viewBox="0 0 32 24" fill="currentColor">
          <path d="M0 24V12.5C0 5.5 3.8 1.2 10.5 0l1.8 3.6C8.8 4.7 7.4 6.8 7.2 9.5H14V24Z" />
          <path
            d="M0 24V12.5C0 5.5 3.8 1.2 10.5 0l1.8 3.6C8.8 4.7 7.4 6.8 7.2 9.5H14V24Z"
            transform="translate(18 0)"
          />
        </svg>
      </span>

      <blockquote className={styles.quote}>
        <p>{content}</p>
      </blockquote>

      {/* Native details/summary, no JavaScript. The card's CSS removes the
            clamp while this is open (see .card:has(.more[open])) */}
      {content.length > READ_MORE_LENGTH && (
        <details className={styles.more}>
          <summary className={styles.toggle}>
            <span className={styles.readMore}>Read more</span>
            <span className={styles.readLess}>Show less</span>
          </summary>
        </details>
      )}

      <figcaption className={styles.caption}>
        {image?.src ? (
          <Image
            className={styles.logo}
            src={image.src}
            alt={contact ? `${contact}'s logo` : "Company logo"}
            width={image.width || 150}
            height={image.height || 150}
            priority={isAboveFold}
            loading={isAboveFold ? undefined : "lazy"}
          />
        ) : (
          <span className={styles.initials} aria-hidden="true">
            {getInitials(name)}
          </span>
        )}
        <span className={styles.person}>
          <span className={styles.name}>{name}</span>
          {contact && <span className={styles.company}>{contact}</span>}
        </span>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
