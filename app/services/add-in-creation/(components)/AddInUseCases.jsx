// /services/add-in-creation/(components)/AddInUseCases.jsx
// Examples of what businesses ask us to build into Office, with one featured card for AI-enabled add-ins.
import React from "react";
import Link from "next/link";

import { AddInConnectSvg } from "../(svgs)/AddInConnectSvg";

import styles from "@/styles/addInUseCases.module.scss";

// The featured AI card is written directly in the JSX below because it carries links
const useCases = [
  {
    title: "Live data in Excel",
    tag: "Excel",
    text: "Pull current figures from your accounting package, CRM or database into a workbook with one click, instead of exporting and pasting.",
  },
  {
    title: "Controlled documents and decks",
    tag: "Word · PowerPoint",
    text: "Insert approved clauses, brand blocks and slide layouts, and strip out formatting that does not belong.",
  },
  {
    title: "Smarter email",
    tag: "Outlook",
    text: "A sidebar that files messages to the right client folder or CRM record, applies reply templates and flags what needs an answer.",
  },
  {
    title: "Checks before you save or send",
    tag: "All Office apps",
    text: "Validate a document, workbook or email against your rules before it leaves: missing fields, wrong formats, confidential wording.",
  },
];

const AddInUseCases = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>What add-ins do</span>
          <h2 className={styles.heading}>
            What teams ask us to{" "}
            <span className={styles.accent}>build into Office</span>
          </h2>
          <p className={styles.lead}>
            An add-in sits between your business systems and the Microsoft apps
            your staff use all day. These are the jobs we are asked to automate
            most often.
          </p>
        </header>

        <div className={styles.visual}>
          <AddInConnectSvg />
        </div>

        <ul className={styles.grid}>
          {useCases.map(({ title, tag, text }) => (
            <li key={title} className={styles.card}>
              <span className={styles.tag}>{tag}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{text}</p>
            </li>
          ))}

          <li className={`${styles.card} ${styles.featured}`}>
            <span className={styles.tag}>AI inside your apps</span>
            <h3 className={styles.cardTitle}>Add-ins that use AI</h3>
            <p className={styles.cardText}>
              An add-in can send content to an AI model, or to one of our custom{" "}
              <Link href="/services/ai-agent-development">AI agents</Link>, and
              show the result inside Word, Excel or Outlook. People can
              summarise, draft, extract or sort content without switching tools.
              The agent can run inside your Microsoft tenant if your data rules
              require it, but it does not have to. We also help teams get more
              from <Link href="/services/copilot">Microsoft Copilot</Link>{" "}
              alongside a custom add-in.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AddInUseCases;
