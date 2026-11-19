// /app/services/microsoft-excel/(components)/ExcelTestimonials.jsx
// Excel client testimonials. Server component: a native scroll-snap rail of
// the shared TestimonialCard, so there is no marquee JavaScript and no
// duplicated slides. Filters the shared testimonials list to Excel work.

import Link from "next/link";

import styles from "@/styles/excelTestimonials.module.scss";

import TestimonialCard from "@/components/TestimonialCard";
import { filterAndSortTestimonials } from "@/utils/filterTestimonials";

import { ArrowIcon } from "../(svgs)/ExcelIcons";

const MAX_TESTIMONIALS = 10;

const ExcelTestimonials = ({ testimonials = [] }) => {
  // Excel testimonials that have an image and some text, newest first
  const selected = filterAndSortTestimonials(testimonials, "excel")
    .filter((item) => item.image && item.content?.trim())
    .slice(0, MAX_TESTIMONIALS);

  if (!selected.length) return null;

  return (
    <section
      id="excel-testimonials"
      className={styles.excelTestimonials}
      aria-labelledby="excel-testimonials-heading"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>Client testimonials</span>
            <h2 id="excel-testimonials-heading" className={styles.heading}>
              What our Excel clients{" "}
              <span className={styles.accent}>say about us</span>
            </h2>
          </header>
          <Link href="/client-testimonials" className={styles.allLink}>
            Read all our testimonials <ArrowIcon />
          </Link>
        </div>

        {/* Keyboard users can focus the rail and scroll it with the arrow keys */}
        <div
          className={styles.rail}
          role="region"
          aria-label="Excel client testimonials"
          tabIndex={0}
        >
          <ul className={styles.track}>
            {selected.map((testimonial, index) => (
              <li key={`${testimonial.name}-${index}`} className={styles.slide}>
                <TestimonialCard {...testimonial} index={index} />
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.hint}>Scroll for more</p>
      </div>
    </section>
  );
};

export default ExcelTestimonials;
