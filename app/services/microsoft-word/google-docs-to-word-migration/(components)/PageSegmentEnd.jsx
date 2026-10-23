import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import docMigrate from "../../../public/document-migration.webp";

const PageSegment3 = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.padded}`} id="upgrade">
      <div className={styles.deskOnly}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={docMigrate}
            alt="Document migration digital design"
            width={450}
            height={300}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            Ready to Transform Your Document Workflow?
          </h2>
          <p style={{ maxWidth: "100%" }}>
            Don't let Google Docs' limitations hold your organisation back from
            creating truly professional, scalable documents. Every day you delay
            migration is another day your team struggles with formatting
            restrictions, performance issues, and basic features that can't
            match your enterprise requirements.
          </p>
          <p style={{ maxWidth: "100%", marginTop: "1rem" }}>
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href={"./client-testimonials"}
            >
              Our clients
            </Link>{" "}
            typically see immediate improvements in document quality,
            significant time savings through automated templates and custom
            workflows, and enhanced collaboration capabilities that scale with
            their growing needs.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
