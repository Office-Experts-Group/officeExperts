// /services/microsoft-word/word-document-template-creation/(components)/TemplateWhyChoose.jsx

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

// Scroll-driven flip book of finished template pages (desktop only)
import BookSegment from "./BookSegment";

import styles from "@/styles/templateWhyChoose.module.scss";

const points = [
  {
    title: "Exactly what you want",
    text: "Templates designed in collaboration with you.",
  },
  {
    title: "Visually polished results",
    text: "Ensuring every document reflects your professionalism.",
  },
  {
    title: "Time-saving design",
    text: "Reducing repetitive work and streamlining your workflow.",
  },
  {
    title: "Reliable performance",
    text: "Consistent formatting and brand integrity across every document.",
  },
];

const TemplateWhyChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <AnimateOnScroll animation="slide-left" duration={0.8}>
            <div className={styles.intro}>
              <span className={styles.eyebrow}>Need a template solution?</span>
              <h2 className={styles.heading}>
                Why Choose{" "}
                <span className={styles.accent}>Office Experts?</span>
              </h2>
              <p>
                Office Experts is an Australian company that has been building
                Microsoft solutions since 2000. Our team of 25+ designers,
                programmers and consultants works Australia-wide, so wherever
                your business is based, the right specialist is only a call
                away.
              </p>
              <p>
                Templates are just one part of what we do. Our team covers the
                entire Microsoft suite: Word, Excel, Access, PowerPoint, Power
                Platform and Microsoft 365, plus Copilot and{" "}
                <Link href="/services/ai-agent-development">
                  custom AI agents
                </Link>
                . Your documents, spreadsheets, databases, reports and
                automations can all be designed, built and supported by one
                company instead of several.
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.details}>
            <ul className={styles.points}>
              {points.map(({ title, text }) => (
                <li key={title}>
                  <h3 className={styles.pointTitle}>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hidden below desktop width in the stylesheet */}
        <div className={styles.book}>
          <BookSegment />
        </div>
      </div>
    </section>
  );
};

export default TemplateWhyChoose;
