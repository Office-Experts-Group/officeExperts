// app/case-study-submission/page.js
import React from "react";

import CaseStudyForm from "./CaseStudyForm";

import styles from "../../styles/caseStudySubmission.module.css";

// This page itself has no client-side logic, so it stays a server
// component. Only the form below needs "use client" for state and
// submit handling.
const Page = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Team Submission</span>
          <h1 className={styles.heading}>Submit a Case Study</h1>
          <p className={styles.intro}>
            Worked on a project recently? Fill in the details below and
            it&rsquo;ll land in our inbox. Dot points are fine, we&rsquo;ll
            polish the wording before it goes on the website.
          </p>
        </div>

        <CaseStudyForm />
      </section>
    </main>
  );
};

export default Page;
