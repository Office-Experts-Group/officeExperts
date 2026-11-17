// /app/services/microsoft-power-platform/power-apps/(components)/PappsFaq.jsx
import Link from "next/link";

import { PappsPlusIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsFaq.module.scss";

const PAPPS_FAQS = [
  {
    question: "What is Microsoft Power Apps?",
    answer:
      "Power Apps is a Microsoft tool for building business apps that run on phones, tablets and computers, without writing a full custom application from scratch. We use it to replace paper forms, spreadsheets and email chains with simple apps that fit how your team works.",
  },
  {
    question: "Do I need extra licences to use Power Apps?",
    answer:
      "Many Microsoft 365 plans include some Power Apps use, particularly for apps that work with Microsoft 365 data. Apps that connect to other data sources can need a separate Power Apps licence. Licensing changes over time, so we check your current plan before we quote.",
  },
  {
    question: "How much does a Power Apps project cost?",
    answer:
      "It depends on how many screens, data sources and approvals the app needs. A small app that replaces one form costs far less than a multi-team system. We offer flexible pricing and give you a fixed scope after a short discovery conversation.",
  },
  {
    question: "How long does it take to build an app?",
    answer:
      "Simple apps can often be ready in a few weeks. Larger apps with several data sources, approvals or reports take longer. We confirm a realistic timeframe once we understand the process you want to improve.",
  },
  {
    question: "Can Power Apps connect to the data we already have?",
    answer:
      "Usually, yes. Power Apps can connect to a wide range of sources, including SharePoint, Excel, SQL Server and many cloud services. We confirm which connections suit your setup and whether any need a premium licence.",
  },
  {
    question: "Will the app work on phones and tablets?",
    answer:
      "Yes. We design apps for the devices your team actually uses, including phones and tablets in the field, and test them before launch. The same app can also run in a browser on a computer.",
  },
  {
    question: "Can you fix or extend an app we already have?",
    answer:
      "Yes. We can review an existing app, fix slow or broken screens, add features and tidy how it connects to your data, often without rebuilding it from the start.",
  },
  {
    question: "Do you provide support and training?",
    answer:
      "Yes. We offer ongoing support and training tailored to your team, so people feel confident using the app and you have somewhere to turn when something changes.",
  },
  {
    question: "What is the difference between Power Apps and Power Automate?",
    answer:
      "Power Apps is what your team sees and uses: the screens, forms and buttons. Power Automate runs behind the scenes, moving data and sending approvals or alerts. Many projects use both together.",
    link: {
      href: "/services/microsoft-power-platform/power-automate",
      text: "See our Power Automate service",
    },
  },
  {
    question: "Do you work with businesses outside my city?",
    answer:
      "Yes. We work remotely with businesses across Australia, using video calls and shared screens, so you do not need to be near us.",
  },
];

const PAPPS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAPPS_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const PappsFaq = () => {
  return (
    <section
      className={styles.pappsFaq}
      id="papps-faq"
      aria-labelledby="papps-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PAPPS_FAQ_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="papps-faq-heading" className={styles.heading}>
            Power Apps <span className={styles.accent}>questions answered</span>
          </h2>
          <p className={styles.lede}>
            Straight answers to what businesses ask us before they start. Cannot
            see yours? Ask us directly.
          </p>
          <Link href="#contact" className="btn">
            Talk to a Power Apps expert
          </Link>
        </div>

        <div className={styles.list}>
          {PAPPS_FAQS.map(({ question, answer, link }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.question}>{question}</span>
                <span className={styles.plus} aria-hidden="true">
                  <PappsPlusIcon />
                </span>
              </summary>
              <div className={styles.answer}>
                <p>{answer}</p>
                {link && (
                  <Link href={link.href} className={styles.inlineLink}>
                    {link.text}
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PappsFaq;
