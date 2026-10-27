// /services/microsoft-word/word-document-template-creation/(components)/TemplateIntro.jsx

import Link from "next/link";

// Fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";
// Fanned showcase of finished template pages
import TemplateCards from "../../(wordComponents)/TemplateCards";

import styles from "@/styles/templateIntro.module.scss";

// Static imports give Next.js the image dimensions at build time
import page1 from "@/public/books/marketing/page1.webp";
import page2 from "@/public/books/marketing/page2.webp";
import page3 from "@/public/books/marketing/page3.webp";
import page4 from "@/public/books/marketing/page4.webp";
import page5 from "@/public/books/marketing/page5.webp";
import page6 from "@/public/books/marketing/page6.webp";
import page7 from "@/public/books/marketing/page7.webp";
import page8 from "@/public/books/marketing/page8.webp";
import page9 from "@/public/books/marketing/page9.webp";
import page10 from "@/public/books/marketing/page10.webp";
import page11 from "@/public/books/marketing/page11.webp";
import page12 from "@/public/books/marketing/page12.webp";

const images = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
];

const TemplateIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Text comes first in the HTML; the stylesheet moves the cards to the left on desktop */}
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              For a consistent and professional look
            </span>
            <h2 className={styles.heading}>
              Custom Document and{" "}
              <span className={styles.accent}>Template Solutions</span>
            </h2>
            <p>
              We create Microsoft Word templates that are striking, refined and{" "}
              <strong>practical for everyday use.</strong> Every design blends
              elegant form and function with polished layouts, branded styling,
              and user-friendly features that make document creation effortless.
            </p>
            <p>
              Our templates are robust and reliable, ensuring their formatting
              while accompanied with our{" "}
              <Link href="/services/microsoft-word/custom-toolbars-and-ribbons">
                custom ribbon solution
              </Link>
              . They save your team valuable time, reduce errors, and deliver
              consistent, professional, and visually stunning results.
            </p>
            {/* In-page anchor, so a plain <a> rather than next/link */}
            <a href="#contact" className="btn">
              Discuss your templates
            </a>
          </div>
        </AnimateOnScroll>

        <div className={styles.cards}>
          <TemplateCards images={images} />
        </div>
      </div>
    </section>
  );
};

export default TemplateIntro;
