// app/case-studies/page.js

import { caseStudies, siteMeta } from "./caseStudies";
import CaseStudyRow from "./(components)/CaseStudyRow";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";

import styles from "../../styles/caseStudies.module.css";

import caseStudiesPic from "../../public/pageHeros/caseStudies.webp";
import caseStudiesPicMob from "../../public/pageHeros/mob/caseStudiesMob.webp";

import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

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
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Australia-wide Microsoft Office, Excel, Access and Power Platform consulting experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/case-studies",
      url: "https://www.officeexperts.com.au/case-studies",
      name: "Case Studies | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      description:
        "Real case studies from Australian businesses we've helped with Microsoft Office, Excel, Access, and Power Platform solutions.",
      inLanguage: "en-AU",
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

// Next 15's searchParams is async, same as `params` already is on the
// [slug] route — has to be awaited before you can read `site` off it.
const CaseStudiesPage = async ({ searchParams }) => {
  const { site } = await searchParams;

  // Unknown/missing site falls straight back to the original, unordered
  // list — this only ever reorders, it never filters anything out.
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
      <ServiceHero
        title="Case Studies"
        desktopImage={caseStudiesPic}
        mobileImage={caseStudiesPicMob}
        altDesk={"Microsoft Logos"}
        altMob={"Microsoft Logos"}
      />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Case Studies</span>
          <h2 className={styles.heroTitle}>
            Real problems. Real businesses.{" "}
            <span className={styles.accent}>Real fixes.</span>
          </h2>
          <p className={styles.heroSubtitle}>
            No hypotheticals here. Below is a small selection of the Microsoft
            365 problems we&rsquo;ve actually walked into, what we built to fix
            them, and the numbers that came out the other side.
          </p>
        </div>
      </section>

      <section className={styles.section}>
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
    </>
  );
};

export default CaseStudiesPage;
