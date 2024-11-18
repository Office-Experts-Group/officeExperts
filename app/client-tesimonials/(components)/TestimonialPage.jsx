import React from "react";

import TestimonialCard from "../../../components/TestimonialCard";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/testimonialPage.module.scss";

const TestimonialPage = ({ testimonials }) => {
  // Filter out testimonials without valid images first
  const validTestimonials = testimonials.filter(
    (testimonial) => testimonial.image && testimonial.image !== ""
  );

  return (
    <section className={styles.testimonialPage}>
      <div className={styles.testimonialGrid}>
        {validTestimonials.map((testimonial, index) => {
          // Create a unique key using multiple properties
          const uniqueKey = `testimonial-${index}-${testimonial.name.replace(
            /\s+/g,
            ""
          )}-${testimonial.contact.replace(/[^a-zA-Z0-9]/g, "")}`;

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
