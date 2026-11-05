// /services/microsoft-word/word-document-template-creation/(components)/BrandedTemplates.jsx

import Link from "next/link";

// Fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";
// Fanned showcase of finished template pages
import TemplateCards from "../../(wordComponents)/TemplateCards";

import styles from "@/styles/brandedTemplates.module.scss";

// Static imports give Next.js the image dimensions at build time
import page1 from "@/public/books/template/page1.webp";
import page2 from "@/public/books/template/page2.webp";
import page3 from "@/public/books/template/page3.webp";
import page4 from "@/public/books/template/page4.webp";
import page5 from "@/public/books/template/page5.webp";
import page6 from "@/public/books/template/page6.webp";
import page7 from "@/public/books/template/page7.webp";
import page8 from "@/public/books/template/page8.webp";
import page9 from "@/public/books/template/page9.webp";
import page10 from "@/public/books/template/page10.webp";
import page11 from "@/public/books/template/page11.webp";

// Defined outside the component so the array isn't rebuilt on every render
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
];

const BrandedTemplates = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        <TemplateCards images={images} />
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Professional, Consistent, On-brand...
            </p>
            <h1 className={styles.heading}>
              Microsoft Word Templates Tailored for{" "}
              <span className={styles.accent}>Your Business</span>
            </h1>
            <p className={styles.text}>
              Your brand is more than just a logo... It’s how you present
              yourself in every document. At Office Experts, we create Microsoft
              Word brand templates that align with your business identity. If
              you’re launching a new brand, updating your existing designs, or
              standardising templates across teams, we’ll ensure every document
              reflects your brand with precision and professionalism.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default BrandedTemplates;
