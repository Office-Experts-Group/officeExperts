// app/popup-forms/(components)/PopupFormsServices.jsx

import { PopupFormsSVG } from "../(svgs)/PopupFormsSVG";
import { FormCaptureIcon } from "../(svgs)/FormCaptureIcon";
import { ValidationRulesIcon } from "../(svgs)/ValidationRulesIcon";
import { ConditionalLogicIcon } from "../(svgs)/ConditionalLogicIcon";
import { DocumentMergeIcon } from "../(svgs)/DocumentMergeIcon";
import styles from "../../../styles/popupFormsServices.module.css";

const services = [
  {
    id: "data-capture",
    heading: "Guided Data Capture",
    tag: "Custom UserForms",
    description:
      "We can design VBA UserForms that provide exactly the fields a document needs, in a logical order, with clear labels and instructions built in to simplify the process as much as possible.",
    capabilities: [
      "Text boxes, dropdown lists, date pickers and checkboxes",
      "Grouped sections for longer or multi-part forms",
      "Pre-filled defaults pulled from existing data where available",
      "Consistent layout matched to your existing brand template",
    ],
    Icon: FormCaptureIcon,
  },
  {
    id: "validation",
    heading: "Validation & Error Checking",
    tag: "Data integrity",
    description:
      "Every field can carry its own validation rule, so the form itself stops incomplete or incorrectly formatted data before it ever reaches your document.",
    capabilities: [
      "Mandatory field enforcement with clear on-screen prompts",
      "Format checks for dates, numbers, ABNs and email addresses",
      "Dropdown-only fields to eliminate free-text typos",
      "Custom business rule validation specific to your process",
    ],
    Icon: ValidationRulesIcon,
  },
  {
    id: "conditional-logic",
    heading: "Conditional Logic & Branching",
    tag: "Smart forms",
    description:
      "Not every document needs every field. We build forms that adapt as they're completed, showing, hiding, or requiring fields based on earlier answers.",
    capabilities: [
      "Show or hide sections based on a previous selection",
      "Dynamic required-field rules depending on document type",
      "Multi-page forms with progress indication",
      "Different output logic for different user roles",
    ],
    Icon: ConditionalLogicIcon,
    // Highlighted as the featured service — sits on the accent background
    featured: true,
  },
  {
    id: "document-integration",
    heading: "Document & Field Integration",
    tag: "Mail merge · Quick parts",
    description:
      "Once submitted, form data is written straight into your Word document, whether that's into bookmarks, content controls, quick parts, or a full mail merge run.",
    capabilities: [
      "Direct insertion into bookmarks and content controls",
      "Mail merge integration for batch document generation",
      "Repeating data blocks for tables and line items",
      "Formatting preserved to match your existing template",
    ],
    Icon: DocumentMergeIcon,
  },
];

const PopupFormsServices = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        {/* ── Left: sticky header + illustration ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Build</span>
          <h2 className={styles.heading}>
            Popup forms are <span className={styles.accent}>versatile.</span>
          </h2>
          <p className={styles.intro}>
            Popup forms can be used for far more than a single data-entry box.
            From guided intake through to fully validated, document-ready
            submissions, we build to the exact structure your process calls for.
          </p>
          <div className={styles.svgWrap}>
            <PopupFormsSVG />
          </div>
        </div>

        {/* ── Right: service list ── */}
        <div className={styles.servicesList}>
          {services.map((service) => (
            <article
              key={service.id}
              className={`${styles.service} ${service.featured ? styles.serviceAccent : ""}`}
              id={service.id}
            >
              <div className={styles.serviceTop}>
                <span className={styles.iconWrap}>
                  <service.Icon />
                </span>
                <div className={styles.serviceTitleGroup}>
                  <h3 className={styles.serviceHeading}>{service.heading}</h3>
                  <span className={styles.serviceTag}>{service.tag}</span>
                </div>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.capabilities}>
                {service.capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopupFormsServices;
