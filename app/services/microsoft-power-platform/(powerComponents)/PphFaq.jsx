// /app/services/microsoft-power-platform/(components)/PphFaq.jsx
import Link from "next/link";

import styles from "@/styles/pphFaq.module.scss";

import { PphArrowIcon, PphPlusIcon } from "../(svgs)/PphIcons";

const PPH_FAQS = [
  {
    q: "What is the Microsoft Power Platform?",
    a: "The Microsoft Power Platform is a family of tools for building business solutions without starting from scratch. Power Apps builds custom apps, Power Automate automates repetitive workflows, Power BI creates reports and dashboards, and Power Pages publishes secure websites and portals. They connect to each other and to the data you already have, including Microsoft 365.",
  },
  {
    q: "What can Power Platform consultants build for my business?",
    a: "Typical projects replace spreadsheets and paper forms with apps, automate approvals and document handling, build dashboards for sales, finance or operations, and create customer or partner portals. We also add AI to existing workflows and move heavy Excel reporting into Power BI.",
  },
  {
    q: "Which Power Platform tool should we start with?",
    a: "Start with the problem, not the tool. If people are re-keying data or chasing approvals, Power Automate is often the quickest win. If you can’t see your numbers clearly, start with Power BI. If staff are working from spreadsheets and email, Power Apps is usually the place to begin. We can scope the best starting point with you.",
  },
  {
    q: "Will we need extra Microsoft licences?",
    a: "It depends on the connectors, data storage and sharing your solution uses. Some Power Platform capability is included with many Microsoft 365 plans, while premium features and Power BI sharing may need additional licences. We check your current licensing at the start of every project and flag anything extra before you commit.",
  },
  {
    q: "How much does a Power Platform project cost?",
    a: "Cost depends on scope. We can work to a fixed quote or an hourly rate, and many clients start with a small, well-defined first project. Tell us what you’re trying to fix and we’ll come back with options.",
  },
  {
    q: "Do you work with businesses outside the major cities?",
    a: "Yes. Our consultants are based in nearly every major city across Australia, and because most Power Platform work can be done remotely, we support clients anywhere in Australia and New Zealand. Onsite visits are available when you need them.",
  },
  {
    q: "Can you support or fix a solution we already have?",
    a: "Yes. We regularly take over, repair and extend apps, flows and reports that someone else built, and we offer ongoing support so your solutions keep working as your business changes.",
  },
  {
    q: "Will our team be trained to use what you build?",
    a: "Yes. We offer tailored training so your people can use, and where it makes sense maintain, the solutions we build for you.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PPH_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const PphFaq = () => (
  <section
    id="pph-faq"
    className={styles.pphFaq}
    aria-labelledby="pph-faq-heading"
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
      }}
    />

    <div className={styles.inner}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Frequently asked questions</p>
        <h2 id="pph-faq-heading" className={styles.heading}>
          Power Platform questions,{" "}
          <span className={styles.accent}>answered</span>
        </h2>
        <p className={styles.lede}>
          The things people ask us most before they get started. Can’t see your
          question? Ask us directly.
        </p>
        <a href="#contact" className={styles.arrowLink}>
          Ask an expert <PphArrowIcon />
        </a>
        <Link href="/faq" className={styles.arrowLink}>
          More answers on our FAQ page <PphArrowIcon />
        </Link>
      </div>

      <div className={styles.list}>
        {PPH_FAQS.map((item, i) => (
          <details key={item.q} className={styles.item} open={i === 0}>
            <summary className={styles.summary}>
              <span>{item.q}</span>
              <span className={styles.toggle}>
                <PphPlusIcon />
              </span>
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default PphFaq;
