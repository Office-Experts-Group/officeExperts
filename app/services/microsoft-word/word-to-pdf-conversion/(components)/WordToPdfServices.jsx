// app/word-to-pdf-conversion/(components)/WordToPdfServices.jsx

import Link from "next/link";
import styles from "../../../styles/wordToPdfServices.module.css";

const services = [
  {
    id: "fillable-forms",
    heading: "Fillable & Editable PDF Forms",
    tag: "Adobe Acrobat Pro · Interactive fields",
    description:
      "Word documents rebuilt in Adobe Acrobat Pro as proper fillable PDF forms, complete with text fields, checkboxes, dropdowns, and signature fields your recipients can complete on screen rather than print and scan.",
    capabilities: [
      "Text fields, checkboxes, radio buttons, and dropdown lists added to match your form",
      "Field validation and required-field rules where needed",
      "Tab order set up so the form completes logically from top to bottom",
      "Digital signature fields for forms that need to be signed on screen",
      "Suitable for intake forms, HR paperwork, applications, and client onboarding",
    ],
  },
  {
    id: "templates",
    heading: "Templates Built to Convert Reliably",
    tag: "Repeatable process · Set up once",
    description:
      "If you convert the same type of document on a regular basis, for example weekly reports, client agreements, or onboarding packs, we design or rebuild the underlying Word template so every future export to PDF holds its formatting, with no manual checking required.",
    capabilities: [
      "A Word template engineered to survive PDF export cleanly, every time",
      "Documented process your team can run without our involvement",
      "Consistent branding and formatting across every document produced",
      "A practical alternative to fixing the same formatting issue after every conversion",
    ],
  },
  {
    id: "security",
    heading: "Secure Handling for Sensitive Documents",
    tag: "No third-party uploads",
    description:
      "Contracts, HR files, financial records, and other confidential documents are handled through an agreed, controlled process rather than an anonymous online tool with unclear data handling.",
    capabilities: [
      "No uploading to unknown third-party servers",
      "Process agreed with you up front for handling and storage",
      "Suitable for legal, government, and regulated industry documents",
    ],
  },
  {
    id: "conversion",
    heading: "Straightforward Document Conversion",
    tag: "As needed",
    description:
      "For document sets that just need a clean, one-off conversion rather than a fillable form, we convert Word files to PDF with formatting, tables, images, and fonts checked against the original before delivery.",
    capabilities: [
      "Complex tables, multi-column layouts, and embedded images handled correctly",
      "Compatible with .doc, .docx, and .rtf source files",
      "A sensible option when a form or reusable template isn't what's needed",
    ],
  },
];

const WordToPdfServices = () => {
  return (
    <section
      className={styles.section}
      id="services"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>What We Build</span>
          <h2 className={styles.heading}>
            We look after <span className={styles.accent}> your business</span>,
            not just a single document...
          </h2>
          <p className={styles.intro}>
            Word to PDF work is one small part of what we do, but it comes up
            often enough that it's worth doing properly. Whether that means a
            fillable form, a template that converts reliably, or a straight
            conversion, we start by understanding what you need to achieve, and
            the most efficient way to get there.
          </p>
          <p className={styles.intro}>
            Interested in the reverse process instead? Read our guide on{" "}
            <Link
              href="/blog/pdf-to-word-conversion"
              className={styles.inlineLink}
            >
              PDF to Word conversion
            </Link>
            , or see our dedicated{" "}
            <Link href="/fill-in-forms" className={styles.inlineLink}>
              fill-in form services
            </Link>
            .
          </p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service) => (
            <article
              key={service.id}
              className={styles.service}
              id={service.id}
            >
              <div className={styles.serviceTop}>
                <h3 className={styles.serviceHeading}>{service.heading}</h3>
                <span className={styles.serviceTag}>{service.tag}</span>
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

export default WordToPdfServices;
