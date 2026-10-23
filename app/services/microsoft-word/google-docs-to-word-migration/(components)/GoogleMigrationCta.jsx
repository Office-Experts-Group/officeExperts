// app/google-docs-to-word-migration/(components)/GoogleMigrationCta.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/googleMigrationCta.module.scss";

import { DocumentFlowSvg } from "../(svgs)/DocumentFlowSvg";

const GoogleMigrationCta = () => (
  // id is the target of the hero's anchor link
  <section className={styles.section} id="upgrade">
    <div className={styles.panel}>
      <AnimateOnScroll animation="scale-up" duration={0.6}>
        <div className={styles.art}>
          <DocumentFlowSvg />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Ready to transform your{" "}
            <span className={styles.muted}>document workflow?</span>
          </h2>
          <p className={styles.text}>
            Don’t let Google Docs’ limitations hold your organisation back from
            creating truly professional, scalable documents. Every day you delay
            migration is another day your team struggles with formatting
            restrictions, performance issues and basic features that can’t match
            your enterprise requirements.
          </p>
          <p className={styles.text}>
            <Link href="/client-testimonials" className={styles.link}>
              Our clients
            </Link>{" "}
            typically see immediate improvements in document quality,
            significant time savings through automated templates and custom
            workflows, and enhanced collaboration capabilities that scale with
            their growing needs.
          </p>
          <p className={styles.text}>
            Start with a conversation. We will look at a handful of your real
            documents, tell you plainly what will convert cleanly and what
            should be rebuilt, and map out a migration that suits your team.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className="btn">
              Plan your migration
            </Link>
            <Link
              href="/blog/google-docs-vs-microsoft-word"
              className={styles.link}
            >
              Compare Google Docs and Word
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoogleMigrationCta;
