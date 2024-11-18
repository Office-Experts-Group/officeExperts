import React from "react";

import styles from "../../../../styles/testimonialsSection.module.css";

import TestimonialCard from "../../../../components/TestimonialCard";

const Testimonials = ({ testimonials }) => {
  // Move the random selection function outside the component
  const getRandomTestimonials = (count = 10) => {
    const validTestimonials = testimonials.filter(
      (testimonial) => testimonial.image && testimonial.content.trim()
    );

    // Use a seeded random to make it deterministic during build
    const shuffled = [...validTestimonials].sort(() => {
      // This will give us a consistent shuffle during build time
      return 0.5 - Math.random();
    });

    return shuffled.slice(0, count);
  };

  // Pre-select testimonials at module level (build time)
  const selectedTestimonials = getRandomTestimonials(10);
  const slidesToAppend = [...selectedTestimonials.slice(0, 3)];
  const extendedTestimonials = [...selectedTestimonials, ...slidesToAppend];

  return (
    <section className={styles.testimonials}>
      <div className={styles.box}>
        <h2>Client Testimonials</h2>
      </div>
      <h3>What They Say?</h3>

      <div
        className={styles.testimonialsWrapper}
        aria-label="Testimonials carousel"
      >
        <div className={styles.testimonialsTrack}>
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index} - ${testimonial.name}`}
              className={styles.testimonialSlide}
              aria-label={`Testimonial ${
                (index % selectedTestimonials.length) + 1
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
