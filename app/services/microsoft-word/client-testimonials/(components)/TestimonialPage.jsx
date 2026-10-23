import React from "react";

import TestimonialCard from "../../../components/TestimonialCard";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

import { filterAndSortTestimonials } from "../../../utils/filterTestimonials";

import styles from "../../../styles/testimonialPage.module.scss";

const TestimonialPage = ({ testimonials }) => {
  const validTestimonials = filterAndSortTestimonials(testimonials, "word");

  return (
    <section className={styles.testimonialPage}>
      <h2 className={styles.padded}>
        We are grateful to our clients for providing the following references
        <br></br>
        and feedback for our consultants and our services.
      </h2>
      <div className={styles.testimonialGrid}>
        {validTestimonials.map((testimonial, index) => {
          // Create a unique key using multiple properties
          const uniqueKey = `testimonial-${index}`;

          // Show first 3 testimonials without animation
          if (index < 3) {
            return (
              <div key={uniqueKey} className={styles.testimonialWrapper}>
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  contact={testimonial.contact}
                  image={testimonial.image}
                />
              </div>
            );
          }

          // Animate remaining testimonials
          return (
            <AnimateOnScroll
              key={uniqueKey}
              animation="fade-up"
              className={styles.testimonialWrapper}
            >
              <TestimonialCard
                content={testimonial.content}
                name={testimonial.name}
                contact={testimonial.contact}
                image={testimonial.image}
              />
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialPage;
