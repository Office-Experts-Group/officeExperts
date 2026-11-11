// app/case-studies/page.js
import { cookies } from "next/headers";
import { caseStudies, getLatestDateModified, siteMeta } from "./caseStudies";
import CaseStudyRow from "./(components)/CaseStudyRow";
import NetworkSolution from "./(components)/NetworkSolution";

import Contact from "@/components/Contact";

import styles from "@/styles/caseStudies.module.scss";

// The ?site= param only ever changes the ORDER case studies render in, never
// which ones appear — so this stays one page as far as Google's concerned.
// Canonicalising to the bare URL makes that explicit, rather than leaving
// Google to guess whether /case-studies?site=excel is a separate page.
export const metadata = {
  alternates: { canonical: "/case-studies" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/case-studies",
      url: "https://www.officeexperts.com.au/case-studies",
      name: "Microsoft Office Case Studies | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      description:
        "Real case studies from Australian businesses we've helped with Microsoft Office, Excel, Access, Word and Power Platform solutions.",
      inLanguage: "en-AU",
      datePublished: "2026-09-03T00:00:00+00:00",
      dateModified: getLatestDateModified(),
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/case-studies#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/case-studies#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: "https://www.officeexperts.com.au/case-studies",
        },
      ],
    },
  ],
};

const stats = [
  { value: "25", suffix: "+", label: "Years in business" },
  { value: "2,500", suffix: "+", label: "Projects delivered" },
];

// searchParams and cookies() are both async and must be awaited.
const CaseStudiesPage = async ({ searchParams }) => {
  const { site: siteParam } = await searchParams;
  const cookieSite = (await cookies()).get("oe-site")?.value;

  // An explicit ?site= always wins; otherwise use the section the visitor was
  // last browsing. Unknown values fall through to the default order below.
  const site = siteMeta[siteParam] ? siteParam : cookieSite;

  // Only reorders, never filters, so the canonical stays the bare URL.
  const orderedCaseStudies = siteMeta[site]
    ? [
        ...caseStudies.filter((study) => study.site === site),
        ...caseStudies.filter((study) => study.site !== site),
      ]
    : caseStudies;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Case Studies</span>
            <h1 className={styles.heroTitle}>
              Real problems. Real businesses.{" "}
              <span className={styles.accent}>Real fixes.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              In 25 years we&rsquo;ve delivered more than 2,500 Microsoft 365
              projects for Australian businesses, from rescuing a single
              overloaded spreadsheet to replacing whole paper-based processes
              with Access databases and Power Platform apps.
            </p>
            <p className={styles.heroSubtitle}>
              Here are a select few. No hypotheticals, just the problems we
              actually walked into, what we built to fix them, and the numbers
              that came out the other side.
            </p>

            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>
                    {stat.value}
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>

            <a href="#case-studies" className={styles.jumpLink}>
              Browse the case studies
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className={styles.heroVisual}>
            <NetworkSolution />
          </div>
        </div>
      </section>

      <section id="case-studies" className={styles.section}>
        <div className={styles.rows}>
          {orderedCaseStudies.map((study, index) => (
            <CaseStudyRow
              key={study.slug}
              study={study}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
};

export default CaseStudiesPage;
