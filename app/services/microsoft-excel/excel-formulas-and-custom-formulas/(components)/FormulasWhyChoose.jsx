// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(components)/FormulasWhyChoose.jsx

import styles from "@/styles/formulasWhyChoose.module.scss";

const FORMULAS_BENEFITS = [
  {
    title: "Simplify Complex Calculations",
    body: "Replace strange combinations of nested functions with clean, purpose-built formulas that are easier to maintain and understand. Your team will spend less time deciphering logic and more time using the results.",
  },
  {
    title: "Improve Workbook Performance",
    body: "Optimise calculation efficiency for faster processing, especially with large datasets. Poorly structured formulas are a leading cause of slow, crash-prone workbooks.",
  },
  {
    title: "Implement Unique Business Logic",
    body: "Create calculations specific to your industry, compliance requirements, or proprietary methodologies. Standard Excel functions are just the tip of the iceberg.",
  },
  {
    title: "Enhance Data Validation",
    body: "Develop specialised checking mechanisms that enforce your business rules and data quality standards. Catch errors at the point of entry rather than discovering them in final reports.",
  },
  {
    title: "Increase Accuracy",
    body: "Reduce the risk of errors by consolidating complex logic into well-tested, reliable custom formulas. A few lines of code maintained in one place is far less error-prone than the same logic duplicated across dozens of cells.",
  },
];

const FormulasWhyChoose = () => {
  return (
    <section
      id="frm-approach"
      className={styles.formulasWhyChoose}
      aria-labelledby="frm-approach-heading"
    >
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Our Approach</span>
          <h2 id="frm-approach-heading" className={styles.heading}>
            Why Choose <span className={styles.accent}>Office Experts?</span>
          </h2>
          <p className={styles.intro}>
            We choose simplicity over complexity. If there is an easy way to
            accomplish a task, it is generally also the most effective.
            Sometimes however there is simply no out-of-the-box solution.
            Programming with VBA allows for specialised business logic that
            standard Excel functions just might not cover.
          </p>
          <p className={styles.closing}>
            Our experts collaborate with you to understand your specific
            requirements and develop code that integrates into your existing
            workflows.
          </p>
        </div>

        <ul className={styles.list}>
          {FORMULAS_BENEFITS.map(({ title, body }) => (
            <li key={title} className={styles.item} tabIndex={0}>
              <p className={styles.itemTitle}>{title}</p>
              <div className={styles.reveal}>
                <div className={styles.revealInner}>
                  <p className={styles.answer}>{body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FormulasWhyChoose;
