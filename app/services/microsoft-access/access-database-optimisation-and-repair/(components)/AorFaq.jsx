// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorFaq.jsx
import React from "react";
import Link from "next/link";

import { ArrowIcon, PlusIcon } from "../(svgs)/AorIcons";

import styles from "@/styles/aorFaq.module.scss";

const AOR_FAQS = [
  {
    q: "Why is my Access database so slow?",
    a: "Usually it is a mix of causes: a file that has bloated over time, queries that read more data than they need, missing indexes, forms that load whole tables, and a network that makes every request travel further than it should. A short diagnosis normally shows which of these matter most for your database.",
  },
  {
    q: "What does compact and repair actually do?",
    a: "Compact and repair rebuilds the database file, clears out space left behind by deleted data and fixes some minor structural problems. It often helps with file size and stability, but it won’t fix badly designed queries, missing indexes or an overloaded network. Treat it as routine maintenance, not a cure-all.",
  },
  {
    q: "My database is corrupt or won’t open. Can it be recovered?",
    a: "Often a good part of it can. We work on a copy, never the original, and try to recover tables, queries, forms and code in stages. How much comes back depends on the type of damage and how recent your backups are, so we can’t promise a full recovery before we have looked at the file.",
  },
  {
    q: "Should we tune the database or rebuild it?",
    a: "If the structure is sound, tuning is usually quicker and cheaper. If the design makes every fix a workaround, or the database has outgrown what Access does comfortably, a staged rebuild can cost less over time. We lay out both options so you can choose with the facts in front of you.",
  },
  {
    q: "When should we move the data to SQL Server?",
    a: "Common triggers are a data file approaching the Access size limit (around 2 GB), many people using the database at once, or a need for stronger security and reporting. Keeping Access as the front end with SQL Server behind it is a popular middle path. We can tell you whether it is worth it for your situation.",
  },
  {
    q: "Is my data safe while you work on it?",
    a: "Yes. We start with a backup, do the repair and tuning work on a copy, and test before anything goes near your live database. Only then do we switch over, with a way back if something looks wrong.",
  },
  {
    q: "How long does optimisation or repair take?",
    a: "It depends on the size and condition of the database. A health check can be quick, and targeted fixes often follow within days. Large rebuilds or serious corruption take longer. We give you an estimate once we have seen the database.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AOR_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const AorFaq = () => {
  return (
    <section
      id="aor-faq"
      className={styles.aorFaq}
      aria-labelledby="aor-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Questions we get asked</p>
          <h2 id="aor-faq-heading" className={styles.heading}>
            Access database <span className={styles.accent}>repair FAQs</span>
          </h2>
          <p className={styles.text}>
            Straight answers about slow, bloated or damaged Access databases.
            Can’t see your question? Ask us.
          </p>
          <Link href="#contact" className={styles.arrowLink}>
            Talk to a database specialist <ArrowIcon />
          </Link>
        </div>

        <div className={styles.list}>
          {AOR_FAQS.map(({ q, a }) => (
            <details key={q} className={styles.item}>
              <summary className={styles.question}>
                <span>{q}</span>
                <span className={styles.toggle} aria-hidden="true">
                  <PlusIcon />
                </span>
              </summary>
              <p className={styles.answer}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AorFaq;
