// /services/microsoft-word/word-document-template-creation/(components)/TemplateFeatures.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/templateFeatures.module.scss";

// Examples of reusable blocks, shown as chips to illustrate the "single click" insert
const quickParts = [
  "Chapter break pages",
  "Image layouts",
  "Appendix sections",
  "Pre-built tables",
  "Terms and conditions",
];

const accessibilityFeatures = [
  "Accessible styles and headings",
  "Alternative text for images",
  "Properly structured tables",
  "High-contrast colour schemes",
];

const TemplateFeatures = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="slide-left" duration={0.8}>
          <article className={styles.card}>
            <span className={styles.eyebrow}>Built-in time savers</span>
            <h2 className={styles.heading}>
              Quick Parts for{" "}
              <span className={styles.accent}>Faster Document Creation</span>
            </h2>
            <p>
              We{" "}
              <Link href="/services/microsoft-word/quick-parts">
                integrate Quick Parts
              </Link>{" "}
              and Building Blocks into your templates, providing predefined,
              reusable content blocks that make document creation effortless.
              Your team can insert elements like these with a single click:
            </p>
            <ul className={styles.chips}>
              {quickParts.map((part) => (
                <li key={part}>{part}</li>
              ))}
            </ul>
            <p>
              This approach ensures every document is consistent, professional,
              and polished, while reducing repetitive work and saving valuable
              time. We can also design easy-to-use{" "}
              <Link href="/services/microsoft-word/popup-forms">
                popup forms
              </Link>{" "}
              to guide staff through data entry, helping to minimise errors and
              maintain data accuracy, further streamlining your workflow.
            </p>
          </article>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-right" duration={0.8}>
          <article className={styles.panel}>
            <h2 className={styles.panelHeading}>
              Accessibility And{" "}
              <span className={styles.muted}>Compliance</span>
            </h2>
            <p>
              We design templates to{" "}
              <Link href="/services/microsoft-word/accessibility">
                meet accessibility standards
              </Link>
              , ensuring your documents are inclusive, professional, and easy to
              navigate. This includes:
            </p>
            <ul className={styles.checklist}>
              {accessibilityFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p>
              By incorporating these features, your team can create documents
              that are readable, compliant, and usable by everyone, reinforcing
              your organisation's commitment to quality, professionalism, and
              inclusivity.
            </p>
          </article>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TemplateFeatures;
