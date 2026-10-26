// /services/microsoft-word/mail-merge/(components)/MailMergeOutputs.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/mailMergeOutputs.module.scss";

// Document types that suit mail merge. `fields` are example merge fields that change per copy,
// rendered as Word-style «Field» tokens to show what actually varies.
const outputs = [
  {
    id: "letters",
    title: "Letters and envelopes",
    description:
      "Client letters, renewal notices, donor thank-yous and tenancy notices, each addressed correctly with a salutation that reads naturally. Envelopes and window-face layouts line up with the letter so both print from the same list.",
    fields: ["Title", "Last_Name", "Address_1", "Postcode"],
  },
  {
    id: "invoices",
    title: "Invoices, statements and receipts",
    description:
      "Monthly statements, rent receipts, membership renewals and donation receipts with dollars, cents and dates formatted the Australian way, rather than the US defaults Word tends to fall back on.",
    fields: ["Account_No", "Amount_Due", "Due_Date"],
  },
  {
    id: "email",
    title: "Personalised bulk email",
    description: (
      <>
        Merge straight to Outlook so each person receives their own email from
        your mailbox instead of a mass BCC. Ideal for event reminders, account
        updates and staff notices. When the replies start arriving,{" "}
        <Link href="/services/ai-email-triage">AI email triage</Link> can sort
        them for you.
      </>
    ),
    fields: ["Email", "First_Name", "Event_Date"],
  },
  {
    id: "labels",
    title: "Labels, name badges and certificates",
    description:
      "Avery and custom label sheets, conference badges and training certificates, laid out once so every name sits inside the printable area on every sheet, including the last partly filled one.",
    fields: ["Full_Name", "Organisation", "Course"],
  },
  {
    id: "contracts",
    title: "Contracts, proposals and agreements",
    description: (
      <>
        Standard agreements where the wording stays fixed but parties, dates,
        fees and terms change. Conditional fields include or drop clauses based
        on the client type. Where staff need to answer questions first,{" "}
        <Link href="/services/microsoft-word/popup-forms">
          popup forms
        </Link>{" "}
        collect the details before the merge runs.
      </>
    ),
    fields: ["Client_Name", "Start_Date", "Fee"],
  },
  {
    id: "directories",
    title: "Directories and catalogues",
    description:
      "A directory merge places many records on one page rather than one per document: staff phone lists, member directories, product price lists and room schedules that update whenever the list does.",
    fields: ["Name", "Phone", "Category"],
  },
];

const MailMergeOutputs = () => (
  <section className={styles.section} id="common-uses">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>What you can merge</p>
        <h2 className={styles.heading}>
          If it repeats, <span className={styles.accent}>it can be merged.</span>
        </h2>
        <p className={styles.note}>
          Each document below starts life as a single template. The tokens on
          the right are examples of the fields that change from one copy to the
          next.
        </p>
      </div>
    </AnimateOnScroll>

    <ul className={styles.list}>
      {outputs.map((output) => (
        <li key={output.id} className={styles.row}>
          <h3 className={styles.title}>{output.title}</h3>
          <p className={styles.desc}>{output.description}</p>
          {/* Example merge fields, purely illustrative */}
          <ul className={styles.fields} aria-label="Example merge fields">
            {output.fields.map((field) => (
              <li key={field} className={styles.field}>
                «{field}»
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default MailMergeOutputs;
