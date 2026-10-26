// /services/microsoft-word/mail-merge/(components)/MailMergeIntro.jsx
import React from "react";
import Link from "next/link";

// Shared client wrapper that fades content in on scroll; the content itself is still server-rendered
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Standalone illustration: template + data list → personalised documents
import { MailMergeSVG } from "../(svgs)/MailMergeSVG";

import styles from "@/styles/mailMergeIntro.module.scss";

// Data sources we connect merges to, shown as a strip under the copy
const dataSources = [
  "Excel",
  "Access",
  "Outlook contacts",
  "SQL Server",
  "SharePoint lists",
  "CSV exports",
];

const MailMergeIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Save time, reduce errors</p>
          <h2 className={styles.heading}>
            Mail merge that does the typing{" "}
            <span className={styles.accent}>so your team doesn't.</span>
          </h2>
          <p>
            Mail merge is one of Microsoft Word's most useful and most
            underused features. It takes a single Word template, connects it to
            a list of people or records, and produces a personalised letter,
            label, invoice or email for every row in that list. Hundreds of
            documents in minutes, without anyone copying and pasting names.
          </p>
          <p>
            We set up, automate and repair mail merge for Australian
            businesses, not-for-profits and government teams. Your merge is
            built on your{" "}
            <Link href="/services/microsoft-word/word-document-template-creation">
              branded Word template
            </Link>
            , the data is tidied so it merges correctly, and the process is
            simplified so anyone on the team can run it. It's one of the
            quickest ways to{" "}
            <Link href="/services/microsoft-word/remove-repetition-and-increase-productivity">
              remove repetitive document work
            </Link>
            .
          </p>

          <div className={styles.sources}>
            <span className={styles.sourcesLabel}>Merges from</span>
            <ul className={styles.sourceList}>
              {dataSources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateOnScroll>

      <div className={styles.visual}>
        <MailMergeSVG />
      </div>
    </div>
  </section>
);

export default MailMergeIntro;
