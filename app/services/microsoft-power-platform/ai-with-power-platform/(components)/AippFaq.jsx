// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippFaq.jsx
import Link from "next/link";

import { AippPlusIcon, AippArrowIcon } from "../(svgs)/AippIcons";

import styles from "@/styles/aippFaq.module.scss";

// `answer` is plain text and feeds both the accordion and the FAQPage schema.
// `more` is an optional extra link shown under the answer in the accordion only.
const AIPP_FAQS = [
  {
    question: "What does “AI inside Power Platform” actually mean?",
    answer:
      "It means the AI runs as part of the Microsoft tools your business already uses, such as Power Automate flows, Power Apps and Copilot Studio agents, rather than as a separate chatbot on a website. It reads and writes your own SharePoint and Dataverse data and follows the permissions you already have.",
  },
  {
    question: "How is this different from Microsoft 365 Copilot?",
    answer:
      "Microsoft 365 Copilot is an assistant that works across your Microsoft 365 apps. Our Power Platform work builds specific agents, workflows and apps for a defined job, such as reading invoices or answering questions from one policy library. The two often work well together, and we can advise on both.",
    more: {
      href: "/services/copilot",
      text: "See our Copilot services",
    },
  },
  {
    question: "Where does our data go?",
    answer:
      "We design for your data to stay inside your Microsoft tenant and to follow the permissions you already have. If a design needs a service outside your tenant, we say so up front and you decide. Your IT and compliance policies come first, and we document the data flow before any build starts.",
  },
  {
    question: "Do we need extra licences to get started?",
    answer:
      "It depends on what we build. Copilot Studio, AI Builder and Power Platform each have their own licensing and usage rules, and Microsoft changes them from time to time. We check what you already hold before recommending anything, and set out any extra costs in the proposal.",
  },
  {
    question: "Can AI get things wrong?",
    answer:
      "Yes, and it can sound confident when it does. We design for that: agents cite their sources, anything high-stakes goes to a person for approval, and we test unclear requests, missing data and permission conflicts before go-live.",
  },
  {
    question: "When would we need custom agent development instead?",
    answer:
      "If you need multi-agent systems, custom models, heavy API work or something that low-code tools can’t do comfortably, a code-first build is the better fit. Many projects start in Power Platform and move to custom development only where it’s needed.",
    more: {
      href: "/services/ai-agent-development",
      text: "See AI agent development",
    },
  },
  {
    question: "How long does a first project take?",
    answer:
      "It depends on the process, the data and how many systems are involved. A small, well-defined workflow can be far quicker than a large multi-system build. After a discovery session we give you a scoped plan with a realistic timeframe.",
  },
  {
    question: "Can you support it after it goes live?",
    answer:
      "Yes. We provide documentation and role-based training as part of every handover, and ongoing support if you’d like us to keep managing the solution.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AIPP_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const AippFaq = () => {
  return (
    <section
      id="aipp-faq"
      className={styles.aippFaq}
      aria-labelledby="aipp-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Questions</span>
          <h2 id="aipp-faq-heading" className={styles.heading}>
            AI with Power Platform,{" "}
            <span className={styles.accent}>answered.</span>
          </h2>
          <p className={styles.body}>
            The questions we hear most from teams planning their first AI
            project. Don’t see yours? Ask us.
          </p>
          <Link href="#contact" className={styles.cta}>
            Ask a question
          </Link>
        </div>

        <div className={styles.list}>
          {AIPP_FAQS.map(({ question, answer, more }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.question}>{question}</span>
                <AippPlusIcon className={styles.plus} />
              </summary>
              <div className={styles.answer}>
                <p>{answer}</p>
                {more && (
                  <Link href={more.href} className={styles.more}>
                    {more.text} <AippArrowIcon />
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

export default AippFaq;
