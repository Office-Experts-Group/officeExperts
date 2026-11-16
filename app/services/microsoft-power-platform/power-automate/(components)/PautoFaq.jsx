// /app/services/microsoft-power-platform/power-automate/(components)/PautoFaq.jsx
import React from "react";
import Link from "next/link";

import { PlusIcon } from "../(svgs)/PautoIcons";

import styles from "@/styles/pautoFaq.module.scss";

const PAUTO_FAQS = [
  {
    q: "What can Power Automate do for my business?",
    a: "Power Automate takes over repetitive work between the tools you already use. That includes approvals, notifications, scheduled tasks, data sync between systems and SharePoint triggers. With AI Builder it can also read documents and classify email, and with Copilot Studio it can run agents that watch your systems without a trigger.",
  },
  {
    q: "Can Power Automate read invoices and forms?",
    a: "Yes. AI Builder can extract fields from invoices, delivery dockets, compliance forms and receipts, using prebuilt or custom models, and pass the data to SharePoint, Dataverse or your ERP. Accuracy depends on your documents, so we test against real samples first, and anything the model is unsure about goes to a person for review.",
  },
  {
    q: "Do we need AI for every automation?",
    a: "No. Many of the best automations are clean, well-built flows with proper error handling and no machine learning at all. We scope your requirements honestly and only bring AI in where it is the right fit.",
  },
  {
    q: "How much does Power Automate cost?",
    a: "It depends on the connectors your flows use, how many people or processes are covered and whether AI Builder is involved. Microsoft’s licensing changes from time to time, so we confirm the current requirements with you and explain the running costs before any build starts. There should be no surprises mid-project.",
  },
  {
    q: "Can you fix or improve flows we already have?",
    a: "Yes. We can review your existing flows, fix the ones that fail or run slowly, and add new integrations on top. Sometimes a few tweaks to your current setup are all you need.",
  },
  {
    q: "Will it work with Xero, MYOB, Salesforce or our legacy systems?",
    a: "Usually, yes. Power Automate connects to Dynamics 365, Xero, MYOB, Salesforce and many other systems, and we can use custom REST APIs where there is no ready-made connector. How easy it is depends on what the other system exposes, so we check this early.",
  },
  {
    q: "When do I need a Copilot Studio agent instead of a flow?",
    a: "A flow suits a clear trigger and fixed steps. An agent is worth considering when someone currently has to keep watching a queue or inbox, volumes are high and most cases are routine. Not every process needs an agent, and we will tell you if a flow is enough.",
  },
  {
    q: "How long does a project take, and do you offer ongoing support?",
    a: "A single, well-defined flow can be quick. Projects with AI model training or several connected systems take longer, and we give you an estimate after the discovery workshop. We can provide ongoing support, model retraining and flow updates, and many clients stay with us for years.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAUTO_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const PautoFaq = () => (
  <section
    id="pauto-faq"
    className={styles.pautoFaq}
    aria-labelledby="pauto-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
      }}
    />

    <div className={styles.inner}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>FAQs</span>
        <h2 id="pauto-faq-heading" className={styles.heading}>
          Power Automate questions,{" "}
          <span className={styles.accent}>answered.</span>
        </h2>
        <p className={styles.introText}>
          Can’t see your question here? Tell us about the process and we will
          give you a straight answer.
        </p>
        <Link href="#contact" className={styles.cta}>
          Ask our team
        </Link>
      </div>

      <div className={styles.list}>
        {PAUTO_FAQS.map(({ q, a }, i) => (
          <details key={q} className={styles.item} open={i === 0}>
            <summary className={styles.question}>
              <span>{q}</span>
              <span className={styles.toggle} aria-hidden="true">
                <PlusIcon size={18} />
              </span>
            </summary>
            <p className={styles.answer}>{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default PautoFaq;
