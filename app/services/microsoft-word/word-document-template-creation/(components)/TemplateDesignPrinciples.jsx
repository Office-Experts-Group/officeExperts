// /services/microsoft-word/word-document-template-creation/(components)/TemplateDesignPrinciples.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TemplateCards from "../../(wordComponents)/TemplateCards";

import styles from "@/styles/templateDesignPrinciples.module.scss";

import page1 from "@/public/books/header/page1.webp";
import page2 from "@/public/books/header/page2.webp";

const images = [page1, page2];

// Not a sequence, so these are plain columns rather than numbered steps
const principles = [
  {
    title: "Visually striking",
    text: "Clean, modern layouts that elevate your brand.",
  },
  {
    title: "Intuitively functional",
    text: "Features like automated headings and dynamic fields make document creation effortless.",
  },
  {
    title: "Robust and reliable",
    text: "Carefully structured to protect your formatting, styles, and brand identity.",
  },
];

const TemplateDesignPrinciples = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
            <div className={styles.intro}>
              <span className={styles.eyebrow}>How we design</span>
              <h2 className={styles.heading}>
                About Our <span className={styles.accent}>Designs</span>
              </h2>
              <p>
                <strong>
                  We believe a Word template should be more than a blank page
                  with a logo –
                </strong>{" "}
                it should be elegantly designed, highly functional, and built to
                last.
              </p>
              <p>
                Since 2000, we have built templates for organisations tired of
                documents drifting off brand the moment a few different people
                start editing them. Every template starts with a clear visual
                design, then gets a proper foundation underneath: named styles,
                automatic numbering and contents pages, content controls for the
                details that change, and protection against pasted-in formatting
                that would otherwise break the look.
              </p>
              <p>
                The result is a template people actually enjoy using. Your team
                opens a new document and the right formatting is already
                waiting, without needing to understand how Word's styles work.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
            <div className={styles.cards}>
              <TemplateCards images={images} />
            </div>
          </AnimateOnScroll>
        </div>

        <ul className={styles.principles}>
          {principles.map(({ title, text }) => (
            <li key={title}>
              <h3 className={styles.principleTitle}>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TemplateDesignPrinciples;
