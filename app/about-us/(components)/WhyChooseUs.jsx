import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/whyChoose.module.css";

import faqs from "../../../faqs/about-us";

import semi from "../../../public/shapes/semi600x600.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChoose}>
      <Image
        src={semi}
        alt="Semi Circle"
        height={900}
        width={900}
        className={styles.semi}
      />
      <AnimateOnScroll animation="fade-up-right" delay={0} duration={1.5}>
        <div className={styles.content}>
          <p>Why Choose Us?</p>
          <h2>Quality Personalised Services</h2>
          <p>
            We provide high quality solutions and offer personalised customer
            service. It is our objective to exceed your expectations and be
            acknowledged as your own personal
            <Link href={"/services/microsoft-office"}>
              Microsoft Office
            </Link>, <Link href={"/services"}>Microsoft technologies</Link> and{" "}
            <Link
              href={
                "/services/by-business-solution/3rd-party-application-or-office-integration"
              }
            >
              integration
            </Link>
            experts.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-right" delay={0} duration={1.5}>
        <div className={styles.dropdowns}>
          <div className={styles.faqContainer} role="group">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={`faq-${index}`}
                className={styles.faqItem}
                name="faq-group"
              >
                <summary>
                  <p className={styles.questionText}>{question}</p>
                </summary>
                <div className={styles.faqContent}>
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default WhyChooseUs;
