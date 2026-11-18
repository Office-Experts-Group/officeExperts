// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(components)/FormulasIntro.jsx

import Link from "next/link";

import styles from "@/styles/formulasIntro.module.scss";
import { ArrowIcon } from "../(svgs)/FormulasIcons";

/* Most asked questions, each pointing at a related service. Plain copy, so a
   visitor on a technical page can jump to the right place. */
const FORMULAS_QUESTIONS = [
  {
    question: "Why is my workbook slow, or crashing?",
    answer:
      "Heavy formula use is a common cause. We review how the formulas are built, simplify or replace the worst offenders, and tell you if a different approach would suit better.",
    href: "/services/upgrades-and-migration",
    linkText: "Upgrades and migration",
  },
  {
    question: "Can a macro do what my formulas can’t?",
    answer:
      "Often, yes. A short VBA macro can handle repetitive or conditional work that would take a maze of formulas, and it keeps the workbook easier to maintain.",
    href: "/services/vba-macro-development",
    linkText: "VBA and macro development",
  },
  {
    question: "Our data is messy before the formulas even start.",
    answer:
      "Cleaning and combining the data first means the formulas on top can stay short and simple. We do this with tools like Power Query rather than piling on more formulas.",
    href: "/services/microsoft-excel/data-manipulation",
    linkText: "Excel data manipulation",
  },
  {
    question: "Can we turn our calculations into a dashboard?",
    answer:
      "Yes. We can take the results your formulas already produce and present them as clear, easy to read dashboards your team can use without digging through sheets.",
    href: "/services/dashboards",
    linkText: "Dashboard development",
  },
  {
    question: "Is it time to move this from Excel to Power BI?",
    answer:
      "If a workbook is straining under the size of the data or the way it is shared, Power BI may suit better. We will tell you honestly when Excel is still the right tool.",
    href: "/services/microsoft-power-platform/excel-to-power-bi-migration",
    linkText: "Excel to Power BI migration",
  },
  {
    question: "Can you train our team to keep it going?",
    answer:
      "We can walk your people through how the formulas work, so changes do not need to come back to us. Support and training is available across Australia.",
    href: "/microsoft-support-and-training-australia",
    linkText: "Support and training",
  },
];

const FormulasIntro = () => {
  return (
    <section
      id="frm-intro"
      className={styles.formulasIntro}
      aria-labelledby="frm-intro-heading"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Custom Solutions</span>
          <h2 id="frm-intro-heading" className={styles.heading}>
            Excel Formulas{" "}
            <span className={styles.accent}>with Expert Results.</span>
          </h2>
          <p>
            Having trouble sorting out a formula or do you need a custom formula
            developed to extend Excel’s functionality?
          </p>
          <p>
            Sometimes getting a formula to work properly or even understanding
            what may be required can be a difficult task. Some requirements may
            be complex enough that a custom formula may be the best solution.
          </p>
        </div>

        <div className={styles.questions}>
          <h3 className={styles.questionsTitle}>
            Questions we get asked the most
          </h3>
          <ul className={styles.list}>
            {FORMULAS_QUESTIONS.map(({ question, answer, href, linkText }) => (
              <li key={href} className={styles.item} tabIndex={0}>
                <p className={styles.question}>{question}</p>
                <div className={styles.reveal}>
                  <div className={styles.revealInner}>
                    <p className={styles.answer}>{answer}</p>
                    <Link href={href} className={styles.link}>
                      {linkText}
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FormulasIntro;
