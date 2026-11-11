// app/services/microsoft-publisher/(components)/PublisherHero.jsx
// Opening section, replacing the old ServiceHero. Carries the page H1, the retirement
// headline, CTAs, proof points and the .pub to Word/PowerPoint illustration.
// Server component, no client JavaScript required. Not animated, as it holds the LCP.
import Link from "next/link";

// SCSS module from the shared styles directory (styles/publisherHero.module.scss)
import styles from "@/styles/publisherHero.module.scss";
// Decorative illustration stored with the route
import { PublisherHeroSvg } from "../(svgs)/PublisherHeroSvg";

// Proof points shown beneath the CTAs
const stats = [
  { num: "2000", label: "Experts since" },
  { num: "25+", label: "Developers nationwide" },
  { num: "Oct 2026", label: "Publisher retired" },
];

const PublisherHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Microsoft Publisher has retired</span>
          <h1 className={styles.heading}>
            Microsoft Publisher migration,{" "}
            <span className={styles.accent}>without losing a page.</span>
          </h1>

          <div className={styles.body}>
            <p>
              Microsoft removed Publisher from Microsoft 365 on 1 October 2026,
              and support for the last perpetual version ended two weeks later.
              Years of newsletters, brochures, forms and flyers are still
              sitting in .pub files that most of your team can no longer open.
            </p>
            <p>
              We convert those files, archive what you need to keep, and rebuild
              the publications you still produce as branded{" "}
              <Link href="/services/microsoft-word/word-template-conversions">
                Word and PowerPoint templates
              </Link>
              , so staff keep working in apps they already have.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Book a free file review
            </Link>
            <Link href="#publisher-conversion" className={styles.ctaSecondary}>
              Compare conversion options
            </Link>
          </div>

          <ul className={styles.stats}>
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.num}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <PublisherHeroSvg />
        </div>
      </div>
    </section>
  );
};

export default PublisherHero;
