// app/services/custom-office-solutions/(components)/CustomIntro.jsx
// Opening section and the page's H1. Replaces ServiceHero and the old PageSegmentMain.
// The empty lightHero block sits behind the transparent site header so the H1 clears it.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customIntro.module.scss)
import styles from "@/styles/customIntro.module.scss";
// Decorative illustration stored with the route
import { OfficeHubSvg } from "../(svgs)/OfficeHubSvg";

// How we work, shown as a fact row under the intro
const facts = [
  {
    term: "Since 2000",
    detail: "Microsoft Office consulting and development",
  },
  {
    term: "25+ developers",
    detail: "Designers and programmers across Australia",
  },
  {
    term: "Quote or hourly",
    detail: "Fixed-price projects or time-based work",
  },
  {
    term: "Remote or onsite",
    detail: "Whichever suits your team and your systems",
  },
];

// Small right chevron for the text link, coloured through currentColor
const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CustomIntro = () => {
  return (
    <>
      <div className={styles.lightHero} aria-hidden="true"></div>
      <section className={styles.section} id="custom-office-solutions">
        <div className={styles.inner}>
          <div className={styles.top}>
            {/* ── Left: content ── */}
            <div className={styles.content}>
              <span className={styles.eyebrow}>
                Custom Microsoft Office development
              </span>
              <h1 className={styles.heading}>
                Custom Office solutions{" "}
                <span className={styles.accent}>
                  built around your business
                </span>
              </h1>
              <p>
                Our designers and programmers can customise the entire Microsoft
                Office suite, from branded Word templates and fill-in forms to
                automated Excel workbooks, Access databases and Outlook
                workflows that connect to the systems you already use. Every
                project starts with a{" "}
                <Link href="/services/business-analysis">
                  business analysis session
                </Link>{" "}
                so we build what your team needs, not what a generic template
                suggests.
              </p>
              <p>
                Our reputation is built on the{" "}
                <Link href="/client-testimonials">success of our clients</Link>{" "}
                and more than 25 years in the industry.
              </p>

              <div className={styles.ctaRow}>
                <Link href="#contact" className="btn">
                  Talk to an Office expert
                </Link>
                <Link href="/case-studies" className={styles.textLink}>
                  See our case studies
                  <ChevronRight />
                </Link>
              </div>
            </div>

            {/* ── Right: illustration ── */}
            <div className={styles.visual}>
              <OfficeHubSvg />
            </div>
          </div>

          {/* ── Fact row ── */}
          <dl className={styles.facts}>
            {facts.map(({ term, detail }) => (
              <div key={term} className={styles.fact}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};

export default CustomIntro;
