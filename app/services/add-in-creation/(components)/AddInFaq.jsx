// /services/add-in-creation/(components)/AddInFaq.jsx
// Questions people ask before commissioning an add-in. Built on native <details> elements, so it works without client JavaScript.
// The same questions feed the FAQPage structured data rendered at the top of the component.
import React from "react";

import styles from "@/styles/addInFaq.module.scss";

const faqs = [
  {
    question: "What is an Office add-in?",
    answer:
      "An add-in is a small program that adds features to a Microsoft app, such as a ribbon button, a side panel or a new Excel function. It is installed once and then works in every document, workbook or mailbox that person opens.",
  },
  {
    question: "Which Microsoft apps can you build add-ins for?",
    answer:
      "We build add-ins for Excel, Word, PowerPoint, Outlook, Access, Project, Visio, OneNote and Publisher. We also build extensions for Microsoft Teams, SharePoint, Power BI and the Power Platform, and custom agents that connect to Microsoft 365 Copilot.",
  },
  {
    question:
      "What is the difference between a VSTO add-in and an Office web add-in?",
    answer:
      "VSTO add-ins are .NET programs that run only in desktop Office on Windows. Office web add-ins are built with HTML, CSS and JavaScript and run across Windows, Mac and the web, although support varies by app. We recommend one after learning which devices, apps and versions your staff use.",
  },
  {
    question: "Can you build an add-in for Outlook?",
    answer:
      "Yes. Classic Outlook on Windows supports COM and VSTO add-ins, but the new Outlook on Windows needs web add-ins. We build for whichever version your organisation uses, and we can move an older Outlook add-in across to a web add-in.",
  },
  {
    question: "Can you fix or rebuild an add-in we already have?",
    answer:
      "Yes. We can review an existing add-in, repair it, update it for newer versions of Office or rebuild it on a supported platform. If the source code has been lost, we document what the add-in does first, so nothing your team relies on is missed.",
  },
  {
    question: "How are add-ins rolled out across an organisation?",
    answer:
      "Web add-ins can be deployed centrally by your Microsoft 365 administrator, so they appear for the right people automatically. Desktop add-ins use an installer that your IT team can push out. We agree the approach with your IT team before we build.",
  },
  {
    question: "Can an add-in use AI?",
    answer:
      "Yes. An add-in can send content to an AI model or to one of our custom agents and show the result inside the app, for example to summarise a document or sort an inbox. We check where your data goes and what your policies allow before we build anything.",
  },
  {
    question: "How much does an add-in cost?",
    answer:
      "It depends on the platform, the amount of integration and how many people will use it. We give you a written quote after a free initial consultation, once we understand what the add-in needs to do.",
  },
];

// FAQPage structured data built from the same list
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const AddInFaq = () => {
  return (
    <section className={styles.section} aria-labelledby="add-in-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Common questions</span>
          <h2 id="add-in-faq-heading" className={styles.heading}>
            Add-in development,{" "}
            <span className={styles.accent}>answered</span>
          </h2>
        </header>

        <div>
          {faqs.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.question}>{question}</summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddInFaq;
