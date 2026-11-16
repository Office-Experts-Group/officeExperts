// /app/services/microsoft-power-platform/microsoft-power-pages/(components)/PpgFaq.jsx

import styles from "@/styles/ppgFaq.module.scss";
import { PlusIcon } from "../(svgs)/PpgIcons";

const PPG_FAQS = [
  {
    q: "What is Microsoft Power Pages used for?",
    a: "Power Pages is Microsoft’s low-code platform for building external-facing websites and portals on top of Dataverse. Typical uses are customer, supplier and partner portals, application and booking forms, and secure areas where outside users view or update their own records.",
  },
  {
    q: "Do I need Dataverse or Dynamics 365 to use Power Pages?",
    a: "Power Pages stores its data in Dataverse, so Dataverse is part of the picture. You don’t need Dynamics 365 to use it, but if you already run Dynamics 365 your portal can work directly with that data. We can also connect other systems through Power Automate or virtual tables.",
  },
  {
    q: "How do visitors sign in to a Power Pages site?",
    a: "Common options include Azure AD for staff and partners, Azure AD B2C for customer accounts, social providers and local accounts. Microsoft has been renaming parts of its identity products, so we confirm the current options when we scope your build.",
  },
  {
    q: "How much does Power Pages cost?",
    a: "Licensing is usually based on the number of users or page views, and Microsoft’s pricing and terms change from time to time. We help you estimate costs against your expected usage before you commit, and we recommend checking current details with Microsoft or your licensing partner.",
  },
  {
    q: "Can I show Power BI reports on a Power Pages site?",
    a: "Yes, Power BI reports can be embedded in a portal. Access and licensing for the people viewing them depend on your setup, so we check that before building. Grids, lists and custom visuals are alternatives when a full report is more than you need.",
  },
  {
    q: "Should I choose Power Pages or a custom-built website?",
    a: "Power Pages suits portals built around Microsoft data, with standard forms and role-based access, and teams who want to manage content themselves. A custom build suits highly bespoke experiences or high-traffic public sites. We build both, so we can recommend the better fit.",
  },
  {
    q: "Do you support the portal after it goes live?",
    a: "Yes. You can use hourly support for changes and fixes, or an ongoing support arrangement. We can also train your team to manage content, forms and permissions themselves.",
  },
];

const PPG_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PPG_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const PpgFaq = () => {
  return (
    <section
      className={styles.ppgFaq}
      id="ppg-faq"
      aria-labelledby="ppg-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PPG_FAQ_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>FAQs</span>
          <h2 id="ppg-faq-heading" className={styles.headline}>
            Power Pages{" "}
            <span className={styles.accent}>questions, answered</span>
          </h2>
          <p className={styles.lede}>
            Not seeing your question? Get in touch and we’ll answer it directly.
          </p>
          <a href="#contact" className={`btn ${styles.cta}`}>
            Ask us a question
          </a>
        </div>

        <div className={styles.list}>
          {PPG_FAQS.map(({ q, a }) => (
            <details key={q} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.question}>{q}</span>
                <span className={styles.plus} aria-hidden="true">
                  <PlusIcon />
                </span>
              </summary>
              <p className={styles.answer}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PpgFaq;
