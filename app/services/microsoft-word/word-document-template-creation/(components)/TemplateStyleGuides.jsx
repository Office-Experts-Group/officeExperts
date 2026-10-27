// /services/microsoft-word/word-document-template-creation/(components)/TemplateStyleGuides.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// Standalone illustration of a design being rebuilt as a Word template
import { DesignToWordSvg } from "../(svgs)/DesignToWordSvg";

import styles from "@/styles/templateStyleGuides.module.scss";

const TemplateStyleGuides = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Style guides: heading left, copy right ── */}
        <div className={styles.guides}>
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className={styles.header}>
              <span className={styles.eyebrow}>Brand compliance</span>
              <h2 className={styles.heading}>
                Designs That Match{" "}
                <span className={styles.accent}>Your Style Guides</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
            <div className={styles.copy}>
              <p>
                Your brand guidelines form the foundation of every template we
                create. We ensure every element — from colours and fonts to
                heading hierarchy and spacing — strictly follows your standards,
                while enhancing them with our expert best practices for layout,
                formatting, and usability. The result is a collection of
                templates that is on brand, visually polished, and effortlessly
                user-friendly.
              </p>
              <p>
                Whether starting from scratch or updating existing materials, we
                can convert PDFs, legacy documents, or other designs into
                robust, professional Word templates. The outcome is a seamless,
                cohesive, and fully brand-compliant library of documents that
                elevates{" "}
                <Link href="/services/microsoft-word/corporate-identity">
                  your organisation's identity
                </Link>
                .
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── InDesign conversion: copy left, illustration right ── */}
        <article className={styles.conversion}>
          <AnimateOnScroll animation="slide-left" duration={0.8}>
            <div className={styles.copy}>
              <h2 className={styles.subheading}>
                InDesign to MS Word Conversion
              </h2>
              <p>
                We specialise in converting Adobe InDesign layouts into fully
                functional, polished Microsoft Word templates. While designers
                can create visually stunning layouts, they often lack the
                expertise to make them practical, user-friendly, and ready for
                everyday use in Word. We bridge that gap, turning beautiful
                designs into templates that are fully branded and easy for your
                team to work with.
              </p>
              <p>
                <strong>
                  The result is a library of templates that is visually
                  striking, highly usable, and workflow-ready.
                </strong>
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.visual}>
            <DesignToWordSvg />
          </div>
        </article>
      </div>
    </section>
  );
};

export default TemplateStyleGuides;
