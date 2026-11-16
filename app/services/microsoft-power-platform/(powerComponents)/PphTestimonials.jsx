// /app/services/microsoft-power-platform/(components)/PphTestimonials.jsx
// Kept from the Power Platform Experts homepage: same selection logic, same
// TestimonialCard. The marquee wrapper is restyled to the site theme.
import Link from "next/link";

import styles from "@/styles/pphTestimonials.module.scss";

import TestimonialCard from "@/components/TestimonialCard";
import { filterAndSortTestimonials } from "@/utils/filterTestimonials";
import { testimonials } from "@/testimonials";

import { PphArrowIcon } from "../(svgs)/PphIcons";

const PphTestimonials = () => {
  const sortedTestimonials = filterAndSortTestimonials(
    testimonials,
    "powerplatform",
  );

  // Only testimonials with an image and some content, first ten
  const selectedTestimonials = sortedTestimonials
    .filter((testimonial) => testimonial.image && testimonial.content.trim())
    .slice(0, 10);

  // A few slides are repeated at the end so the marquee has something to
  // scroll into without a gap. The repeats are hidden from crawlers and
  // assistive tech so each testimonial only exists once as real content.
  const extendedTestimonials = [
    ...selectedTestimonials,
    ...selectedTestimonials.slice(0, 3),
  ];

  return (
    <section
      id="pph-testimonials"
      className={styles.pphTestimonials}
      aria-labelledby="pph-testimonials-heading"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>What they say</p>
        <h2 id="pph-testimonials-heading" className={styles.heading}>
          Client <span className={styles.accent}>testimonials</span>
        </h2>
      </div>

      <div
        className={styles.wrapper}
        aria-label="Testimonials carousel"
        tabIndex={0}
      >
        <div
          className={styles.track}
          style={{ "--pph-count": selectedTestimonials.length }}
        >
          {extendedTestimonials.map((testimonial, index) => {
            const isDuplicate = index >= selectedTestimonials.length;

            return (
              <div
                key={`testimonial-${index}`}
                className={styles.slide}
                aria-label={`Testimonial ${
                  (index % selectedTestimonials.length) + 1
                }`}
                aria-hidden={isDuplicate || undefined}
                inert={isDuplicate || undefined}
              >
                <TestimonialCard {...testimonial} index={index} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.foot}>
        <Link href="/client-testimonials" className={styles.btn}>
          Read all our testimonials <PphArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default PphTestimonials;
