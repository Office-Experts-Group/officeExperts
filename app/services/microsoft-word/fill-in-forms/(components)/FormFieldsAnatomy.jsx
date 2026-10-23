// app/fill-in-forms/(components)/FormFieldsAnatomy.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { FormFieldsMockSVG } from "../(svgs)/FormFieldsMockSVG";
import styles from "../../../styles/formFieldsAnatomy.module.css";

// Each control type expands into a detail panel when its row is toggled
// open. Using <details>/<summary> keeps the interactivity working without
// client-side JavaScript, so the whole page can stay server-rendered.
const controls = [
  {
    id: "text",
    label: "Plain Text",
    fieldPreview: "Jane Smith",
    answer:
      "A single line of typed text with no line breaks, ideal for names, reference numbers or short answers. It can be set to reject anything but numbers or dates, so a staff member cannot accidentally type letters into a field meant for an invoice number.",
  },
  {
    id: "richtext",
    label: "Rich Text",
    fieldPreview: "Multi-line notes…",
    answer:
      "Behaves like plain text but allows formatting, line breaks and even pasted content including bullet points. Useful for comment boxes, case notes or anywhere the person filling in the form needs more than one line to explain themselves.",
  },
  {
    id: "dropdown",
    label: "Drop-Down List",
    fieldPreview: "Select department ▾",
    answer:
      "Restricts the answer to a fixed list that is defined in advance, such as department names or approval statuses. This is one of the simplest ways to stop inconsistent spelling or formatting creeping into a form that several people fill in.",
  },
  {
    id: "date",
    label: "Date Picker",
    fieldPreview: "12/03/2026",
    answer:
      "Opens a small calendar so that the date is always entered in the same format, rather than a mix of 12/3, 12-03-26 and March 12th appearing across different copies of the same form.",
  },
  {
    id: "check",
    label: "Check Box",
    fieldPreview: "☑ I agree",
    answer:
      "A simple on/off toggle for yes/no answers, consent statements or optional extras. Check boxes can also be linked so that ticking one automatically shows or hides another section of the form.",
  },
  {
    id: "picture",
    label: "Picture",
    fieldPreview: "Insert logo",
    answer:
      "Lets the person filling in the form insert an image, such as a signature, a site photo for an inspection report, or a company logo, directly into a locked placeholder without disturbing the surrounding layout.",
  },
];

const FormFieldsAnatomy = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <span className={styles.eyebrow}>What Goes Into a Form</span>
          <h2 className={styles.heading}>
            What types of fields can I actually add to a{" "}
            <span className={styles.accent}>Word form?</span>
          </h2>
          <p className={styles.intro}>
            Every fill-in form is built from a small set of content controls.
            Open a row on the right to see what each one does and when they are
            used.
          </p>
        </AnimateOnScroll>
      </div>

      <div className={styles.layout}>
        <div className={styles.mockColumn}>
          <div className={styles.mockForm}>
            <FormFieldsMockSVG />
          </div>
        </div>

        {/* Field type rows — a plain stacked list, each expandable */}
        <div className={styles.rows}>
          {controls.map((control, i) => (
            <AnimateOnScroll
              key={control.id}
              animation="fade-up"
              duration={0.5}
              delay={0.05 * i}
            >
              <details className={styles.row}>
                <summary className={styles.rowSummary}>
                  <span className={styles.rowDot} aria-hidden="true" />
                  <span className={styles.rowLabel}>{control.label}</span>
                  <span className={styles.rowPreview}>
                    {control.fieldPreview}
                  </span>
                  <span className={styles.chevron} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className={styles.rowAnswer}>{control.answer}</p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormFieldsAnatomy;
