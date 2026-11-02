// app/test-page/(components)/HomeTestimonials.jsx
// Testimonials section. Server component: it reads every testimonial from
// testimonials.js, drops empty ones and hands the list to TestimonialShuffle,
// which shows six at a time and swaps one card every few seconds.
// The first six are server rendered, so they are in the page HTML.

import Link from "next/link";

import styles from "@/styles/homeTestimonials.module.scss";

import { testimonials } from "@/testimonials";

// Client component: the reshuffling grid
import TestimonialShuffle from "./TestimonialShuffle";
import { ArrowIcon } from "../(svgs)/HomeIcons";

const HomeTestimonials = () => {
  // Keep only entries with a quote, and show those with a logo first so the
  // opening grid (the server rendered one) looks its best
  const valid = testimonials.filter((item) => item.content?.trim());
  const items = [
    ...valid.filter((item) => item.image),
    ...valid.filter((item) => !item.image),
  ];

  return (
    <section
      className={styles.section}
      aria-labelledby="home-testimonials-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <span className={styles.eyebrow}>Client testimonials</span>
            <h2 id="home-testimonials-heading" className={styles.heading}>
              Don't just take{" "}
              <span className={styles.accent}>our word for it</span>
            </h2>
          </div>

          <div className={styles.summary}>
            <p className={styles.summaryText}>
              Just some of our client testimonials, from local businesses to
              government departments.{" "}
              <Link href="/client-testimonials" className={styles.link}>
                Read them all <ArrowIcon />
              </Link>
            </p>
          </div>
        </header>

        <TestimonialShuffle items={items} />
      </div>
    </section>
  );
};

export default HomeTestimonials;
