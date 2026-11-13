// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(components)/SpcdFaq.jsx
// Native <details> accordion (no client JS) in two columns, with its FAQPage
// schema built from the same array.
import Link from "next/link";
import { SpcdPlusIcon } from "../(svgs)/SpcdIcons";
import styles from "@/styles/spcdFaq.module.scss";

const SPCD_FAQS = [
  {
    q: "What does a free SharePoint assessment involve?",
    a: "We look at your current setup, whether that’s a file server, an older SharePoint farm or an existing Microsoft 365 tenant, and talk through what you’re trying to achieve. You come away with a clear view of what’s worth doing, in what order, and roughly what it involves. There’s no obligation to go further.",
  },
  {
    q: "Can we keep running SharePoint Server 2016 or 2019?",
    a: "It will keep running, but it no longer receives security updates. Microsoft ended extended support for both versions on 14 July 2026 and doesn’t offer a paid Extended Security Updates program for SharePoint. The supported options are moving to SharePoint Online or upgrading to SharePoint Server Subscription Edition.",
  },
  {
    q: "Should we move to SharePoint Online or stay on-premises?",
    a: "For most Australian businesses, SharePoint Online is the better fit. Microsoft looks after the servers and updates, and it’s where Microsoft focuses new features, including Copilot. Subscription Edition can suit organisations with specific data residency or integration requirements. We recommend one based on your situation, not a default.",
  },
  {
    q: "How long does a SharePoint migration take?",
    a: "It depends on how much content you have, how it’s structured, and how many workflows or customisations need rebuilding. A small file share move can take a few weeks, while a large farm with custom solutions takes longer. The assessment gives you a realistic timeline before anything is committed.",
  },
  {
    q: "Will our existing workflows and InfoPath forms move across?",
    a: "Not as they are. SharePoint Designer workflows and InfoPath forms are past Microsoft’s end of support, so rather than carry them across we rebuild them in Power Automate and Power Apps during the migration. It’s often a good chance to simplify processes that have grown complicated over the years.",
  },
  {
    q: "Do we need Microsoft 365 Copilot to benefit from this work?",
    a: "No. A well-structured, well-governed SharePoint environment makes life easier for your team whether or not you use Copilot. If a Copilot rollout is on the roadmap, the same work is what makes its answers reliable.",
  },
  {
    q: "Do you work with businesses outside the capital cities?",
    a: "Yes. We’re Australian-based and remote-first, working with businesses right across the country over Teams and email, with developers in several states.",
  },
];

const spcdFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.officeexperts.com.au/services/microsoft-power-platform/sharepoint-consulting-and-development#faq",
  mainEntity: SPCD_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const FaqItem = ({ q, a }) => (
  <details className={styles.item}>
    <summary className={styles.question}>
      <span>{q}</span>
      <SpcdPlusIcon className={styles.icon} />
    </summary>
    <p className={styles.answer}>{a}</p>
  </details>
);

const SpcdFaq = () => {
  const half = Math.ceil(SPCD_FAQS.length / 2);
  const columns = [SPCD_FAQS.slice(0, half), SPCD_FAQS.slice(half)];

  return (
    <section
      id="spcd-faq"
      className={styles.spcdFaq}
      aria-labelledby="spcd-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(spcdFaqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 id="spcd-faq-heading" className={styles.heading}>
            SharePoint questions,{" "}
            <span className={styles.accent}>answered</span>
          </h2>
          <p className={styles.sub}>
            Something we haven&rsquo;t covered?{" "}
            <Link href="#contact">Ask us directly</Link> and we&rsquo;ll give
            you a straight answer.
          </p>
        </header>

        <div className={styles.columns}>
          {columns.map((col, i) => (
            <div key={i} className={styles.column}>
              {col.map((item) => (
                <FaqItem key={item.q} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpcdFaq;
