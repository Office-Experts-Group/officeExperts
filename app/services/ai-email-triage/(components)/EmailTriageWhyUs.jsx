// app/services/ai-email-triage/(components)/EmailTriageWhyUs.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/emailTriageWhyUs.module.scss)
import styles from "../../../../styles/emailTriageWhyUs.module.css";

const reasons = [
  {
    title: "Microsoft specialists since 2000",
    body: "Over 25 years building automation across the entire Microsoft suite.",
  },
  {
    title: "Microsoft tools and custom code under one roof",
    body: "We recommend what fits your inbox and licences, not the product we happen to sell.",
  },
  {
    title: "Built around what you already own",
    body: "We start with your existing Microsoft licences and systems, and only add custom code where it earns its place.",
  },
  {
    title: "Australia-wide",
    body: "Consultants in every capital city, working remotely or onsite.",
  },
  {
    title: "Ongoing Support",
    body: "We can tune categories, retrain models and extend the solution as your business changes.",
  },
];

// Related AI case studies on this site (internal, so next/link)
const caseStudies = [
  {
    href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
    label: "Case study",
    title: "Internal AI proposal assistant",
  },
  {
    href: "/case-studies/life-insurance-real-time-competitive-intelligence",
    label: "Case study",
    title: "Real-time competitive intelligence for a life insurer",
  },
  {
    href: "/case-studies/rdao-application-ai-review-workflow",
    label: "Case study",
    title: "Agentic AI investment reviewer",
  },
];

const EmailTriageWhyUs = () => {
  return (
    <section className={styles.section} id="why-office-experts">
      <div className={styles.inner}>
        {/* ── Left: heading + case studies ── */}
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Why choose Office Experts Group for{" "}
            <span className={styles.accent}>AI email triage?</span>
          </h2>

          <div className={styles.cases}>
            <span className={styles.eyebrow}>
              Some AI projects we've delivered
            </span>
            {caseStudies.map((study) => (
              <Link key={study.href} href={study.href} className={styles.case}>
                <span className={styles.caseLabel}>{study.label}</span>
                <span className={styles.caseTitle}>{study.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Right: reasons ── */}
        <ul className={styles.list}>
          {reasons.map((reason) => (
            <li key={reason.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{reason.title}</h3>
              <p className={styles.itemBody}>{reason.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmailTriageWhyUs;
