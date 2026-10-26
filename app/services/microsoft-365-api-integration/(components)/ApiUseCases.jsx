// app/services/microsoft-365-api-integration/(components)/ApiUseCases.jsx
// Industry use cases. Custom line icons replace the old stock photos.
// Unordered cards (not numbered) because these aren't sequential.

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import { industryIcons } from "../(svgs)/IndustryIcons";

import styles from "@/styles/apiUseCases.module.scss";

// "text" is JSX so a few cards can carry an internal link in the copy.
// "stack" names the APIs behind the example.
const useCases = [
  {
    id: "legal",
    title: "Legal and professional services",
    text: (
      <>
        Contracts and letters of advice assembled in Word with the right
        clauses already filled from the matter record, using{" "}
        <Link href="/services/microsoft-word/popup-forms">
          pop-up forms
        </Link>{" "}
        or the practice management system as the source.
      </>
    ),
    stack: "Office.js · Graph · SQL",
  },
  {
    id: "hr",
    title: "HR and people teams",
    text: "Offer letters, contracts and onboarding packs generated from employee records, with leave and onboarding requests approved in Teams and filed to SharePoint automatically.",
    stack: "Graph · Power Automate · Teams",
  },
  {
    id: "finance",
    title: "Finance and reporting",
    text: (
      <>
        Excel models fed by live data instead of exports, and Power BI figures
        flowing straight into board papers and{" "}
        <Link href="/services/dashboards">dashboards</Link>, so every report
        quotes the same number.
      </>
    ),
    stack: "Excel REST API · Power BI REST",
  },
  {
    id: "sales",
    title: "Sales and business development",
    text: "Proposals and quotes drafted in the real Word template from CRM data and a current rate card, then emailed and logged without leaving Outlook.",
    stack: "Office.js · Graph · Dataverse",
  },
  {
    id: "field",
    title: "Construction and field services",
    text: "Site reports, safety checklists and photos captured offline on a phone, synced to the right SharePoint job folder, which was itself created automatically when the job was won.",
    stack: "React Native · PWA · SharePoint",
  },
  {
    id: "health",
    title: "Health and community services",
    text: "Patient and client forms chased automatically from the data warehouse, with role-based access through Entra ID so staff only see the records they're meant to.",
    stack: "Power Automate · Fabric · Entra ID",
  },
];

const ApiUseCases = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Use cases</p>
          <h2 className={styles.heading}>
            Where integration{" "}
            <span className={styles.accent}>pays for itself first.</span>
          </h2>
          <p className={styles.lede}>
            The best first project is usually the task someone does by hand
            every day. These are the ones we&rsquo;re asked about most.
          </p>
        </header>
      </AnimateOnScroll>

      <ul className={styles.grid}>
        {useCases.map((useCase) => (
          <li key={useCase.id} className={styles.card}>
            <span className={styles.icon}>
              {React.createElement(industryIcons[useCase.id])}
            </span>
            <h3 className={styles.title}>{useCase.title}</h3>
            <p className={styles.text}>{useCase.text}</p>
            <p className={styles.stack}>{useCase.stack}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ApiUseCases;
