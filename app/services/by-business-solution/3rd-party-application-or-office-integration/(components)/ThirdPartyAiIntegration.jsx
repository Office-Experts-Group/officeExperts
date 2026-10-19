// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyAiIntegration.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartyAiIntegration.module.scss
import styles from "../../../../../styles/thirdPartyAiIntegration.module.scss";
// Standalone SVG: business apps -> AI agent -> human review -> Office
import aiDataFlow from "../(svgs)/aiDataFlow.svg";

const useCases = [
  {
    title: "Summarise and brief",
    text: "Turn Salesforce notes and activity into a one-page client brief in Word before every meeting.",
  },
  {
    title: "Reconcile and flag",
    text: "Check Xero or MYOB transactions against your rules, flag anything unusual and leave the decision to your team.",
  },
  {
    title: "Draft from live data",
    text: "Build proposals and reports inside your real Word template using current rates, prices and customer details.",
    href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
    linkText: "See our proposal assistant",
  },
  {
    title: "Triage and route",
    text: "Read shared inboxes, match emails to the right customer record and route or draft replies.",
    href: "/services/ai-email-triage",
    linkText: "AI email triage",
  },
];

const ThirdPartyAiIntegration = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
            <div className={styles.content}>
              <p className={styles.eyebrow}>AI and your business data</p>
              <h2>
                Put AI to work on the data already in{" "}
                <span className={styles.accent}>Xero, MYOB and Salesforce</span>
              </h2>
              <p>
                Your accounting package and CRM hold years of useful
                information. AI agents can read it, check it against your rules
                and prepare the result, so your team spends time approving work
                instead of assembling it.
              </p>
              <p>
                We build agents inside Microsoft 365 and Azure, or as custom
                Python and JavaScript agents when the job needs more room. See
                our{" "}
                <Link href="/services/ai-agent-development">
                  AI agent development
                </Link>{" "}
                service, or how{" "}
                <Link href="/services/microsoft-office-365/copilot">
                  Copilot for Microsoft 365
                </Link>{" "}
                fits alongside them.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
            <Image
              className={styles.image}
              src={aiDataFlow}
              alt="Diagram of an AI agent reading Salesforce, Xero and MYOB data, a person approving the result, and the output delivered to Word, Excel, Teams and Outlook"
              width={520}
              height={360}
            />
          </AnimateOnScroll>
        </div>

        <ul className={styles.cards}>
          {useCases.map((useCase) => (
            <li key={useCase.title} className={styles.card}>
              <h3>{useCase.title}</h3>
              <p>{useCase.text}</p>
              {useCase.href && (
                <Link href={useCase.href} className={styles.link}>
                  {useCase.linkText}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ThirdPartyAiIntegration;
