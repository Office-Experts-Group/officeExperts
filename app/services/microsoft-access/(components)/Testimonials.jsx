import React from "react";

import styles from "../../../../styles/testimonialsSection.module.css";

import TestimonialCard from "../../../../components/TestimonialCard";

const Testimonials = ({ testimonials }) => {
  const getRandomTestimonials = (count = 10) => {
    // Filter out testimonials without images or content first
    const validTestimonials = testimonials.filter(
      (testimonial) => testimonial.image && testimonial.content.trim()
    );

    // Create a shuffled copy of the filtered testimonials
    const shuffled = [...validTestimonials].sort(() => 0.5 - Math.random());

    // Return the requested number of testimonials
    return shuffled.slice(0, count);
  };

  // Get 10 random testimonials (or adjust the number as needed)
  const selectedTestimonials = getRandomTestimonials(10);

  // Calculate how many slides to append based on viewport size
  // We only need to duplicate enough slides to fill one viewport
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
              key={`testimonial-${index}`}
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
