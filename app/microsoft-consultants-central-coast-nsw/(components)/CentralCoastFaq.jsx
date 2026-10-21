// app/microsoft-consultants-central-coast-nsw/(components)/CentralCoastFaq.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/centralCoastFaq.module.scss";

const proof = [
  { value: "25+", label: "years in Microsoft consulting" },
  { value: "25+", label: "specialist consultants" },
  { value: "100%", label: "Australian owned" },
];

// Native <details>: content stays in the HTML for crawlers, no client JS needed
const faqs = [
  {
    id: "local",
    q: "Do you have consultants on the Central Coast?",
    a: "Our consultants are spread across Australia, and nearly all projects are delivered remotely, so you get the right specialist for the job rather than simply the closest one. If a workshop, training session or handover would work better in person, we can arrange that for the Central Coast.",
  },
  {
    id: "hybrid",
    q: "Can you support teams split between the Coast and Sydney or Newcastle?",
    a: "Yes. Hybrid is normal for a lot of our clients. We design around Microsoft 365 and the cloud, so everyone works from the same files, forms and dashboards whether they are on the Coast, on site or in a city office.",
  },
  {
    id: "replace",
    q: "We run on Excel or Access. Do we need to replace them?",
    a: "Often not. Many businesses are better served by repairing and connecting the tools they already have, then moving pieces to Power Platform or SQL Server when it makes sense. We will tell you plainly if a replacement is not needed.",
  },
  {
    id: "ai",
    q: "What can an AI agent actually do for a small business?",
    a: "Typical starting points are sorting a shared inbox, answering staff questions from your own policies and procedures, drafting routine reports, and passing enquiries to the right person. We start with one well-defined job, build it inside Microsoft 365, and expand once it has proven itself.",
  },
  {
    id: "start",
    q: "How does a project start?",
    a: "With a free assessment. You tell us what is slowing the business down, we ask a few questions about how the work really flows, and then give you an honest view of the options, the effort involved and the likely cost before anything is built.",
  },
  {
    id: "handover",
    q: "Will our team be able to maintain what you build?",
    a: "That is the aim. We document our work and avoid unnecessary dependencies, so your team, or another developer, can support it afterwards. If you would rather not, we are also happy to provide ongoing support.",
  },
];

const CentralCoastFaq = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Good to Know</p>
        <h2 className={styles.heading}>
          Questions Central Coast businesses{" "}
          <span className={styles.headingAccent}>ask us.</span>
        </h2>
      </div>
    </AnimateOnScroll>

    <div className={styles.layout}>
      {/* ── Proof card (plain element so it can stick) ── */}
      <aside className={styles.proof}>
        <p className={styles.proofTitle}>Why Coast businesses work with us</p>

        <ul className={styles.proofList}>
          {proof.map((p) => (
            <li key={p.label} className={styles.proofItem}>
              <span className={styles.proofValue}>{p.value}</span>
              <span className={styles.proofLabel}>{p.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.proofText}>
          One team across Excel, Word, Access, Power Platform, Microsoft 365 and
          AI. You explain the problem once, and we pick the tools that solve it.
        </p>

        <Link href="/client-testimonials" className={styles.proofLink}>
          Read client testimonials
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 7h8M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </aside>

      {/* ── FAQ ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
        <div className={styles.faq}>
          {faqs.map((faq, i) => (
            <details key={faq.id} className={styles.item} open={i === 0}>
              <summary className={styles.question}>{faq.q}</summary>
              <p className={styles.answer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CentralCoastFaq;
