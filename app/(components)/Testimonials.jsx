import React from "react";
import Link from "next/link";

import styles from "../../styles/testimonialsSection.module.css";

import TestimonialCard from "../../components/TestimonialCard";

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
      <h3>What they say?</h3>

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
              tabIndex={index}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <Link href={"/client-testimonials"} className={`btn ${styles.btn}`}>
        Read all our testimonials
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="2"
          viewBox="0 0 1024 1024"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
        </svg>
      </Link>
    </section>
  );
};

export default Testimonials;
