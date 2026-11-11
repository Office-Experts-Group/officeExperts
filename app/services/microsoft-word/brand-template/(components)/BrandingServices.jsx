import React from "react";
import Link from "next/link";

import styles from "@/styles/brandingServices.module.scss";

import CompareContainer from "./CompareContainerCopy";

// Defined outside the component so the array isn't rebuilt on every render
const serviceDetails = [
  {
    title: "Template Design & Creation",
    items: [
      "Fully branded Microsoft Word templates",
      "Letterheads, invoices, reports, proposals & more",
      "Header/footer with logos, legal disclaimers, company info",
    ],
  },
  {
    title: "Rebranding & Style Guide Implementation",
    items: [
      "Update old templates with new templates including Covers, layouts, logos, fonts, and colours",
      "Align with your brand style guide",
      "Consistency across all document types",
    ],
  },
  {
    title: "Advanced Functionality",
    items: [
      "Built-in styles and formatting tools",
      "Content controls and editable placeholders",
      "Training materials for team rollout",
      "Custom Formatting and Automation Tab/Ribbon to ensure users stay on brand",
    ],
  },
];

// Server component: the accordion is native <details>/<summary>, and the
// progress rail is driven purely by CSS (:has + [open]), so no client JS.
const BrandingServices = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>What We Deliver</p>
        <h2 className={styles.heading}>
          Our Microsoft{" "}
          <span className={styles.accent}>Word Branding Services</span>
        </h2>
        <p className={styles.lede}>
          We create efficient branded templates to match your business identity,
          whether you&apos;re starting fresh or rebranding.
        </p>

        <div className={styles.steps}>
          {serviceDetails.map((service, i) => (
            // Shared `name` makes the group exclusive: opening one closes the rest
            <details
              key={service.title}
              name="branding-services"
              className={styles.step}
              open={i === 0}
            >
              <summary className={styles.summary}>
                {/* Rail pieces live in the summary so they stay visible when closed */}
                {i < serviceDetails.length - 1 && (
                  <span className={styles.segment} aria-hidden="true" />
                )}
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.title}>{service.title}</span>
                <span className={styles.toggleIcon} aria-hidden="true" />
              </summary>

              <ul className={styles.list}>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {/* margin-top: auto in the stylesheet pins this to the bottom of the column */}
        <div className={styles.help}>
          <p className={styles.helpText}>Need more help with your brand?</p>
          <Link
            href="/services/microsoft-word/corporate-identity"
            className={styles.helpLink}
          >
            Read about how we can shape your brand identity
          </Link>
        </div>
      </div>

      <div className={styles.visual}>
        <CompareContainer />
      </div>
    </section>
  );
};

export default BrandingServices;
