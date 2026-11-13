// /app/services/microsoft-power-platform/excel-to-power-bi-migration/page.js

import dynamic from "next/dynamic";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

// Above the fold
import EpbmHero from "./(components)/EpbmHero";
import EpbmIntro from "./(components)/EpbmIntro";

// Below the fold
const EpbmServices = dynamic(() => import("./(components)/EpbmServices"));
const EpbmComparison = dynamic(() => import("./(components)/EpbmComparison"));
const EpbmBenefits = dynamic(() => import("./(components)/EpbmBenefits"));
const EpbmApproach = dynamic(() => import("./(components)/EpbmApproach"));
const EpbmFaq = dynamic(() => import("./(components)/EpbmFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// ── Page constants (keep in sync with layout.js) ────────────────────────────
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/excel-to-power-bi-migration`;
const PAGE_NAME = "Excel to Power BI Migration Services";
const PAGE_DESCRIPTION =
  "Move your Excel reporting into Power BI with Microsoft-certified consultants. Live dashboards, automatic refreshes and one shared version of your data.";
const PARENT_URL = `${SITE_URL}/services/microsoft-power-platform`;
const PARENT_NAME = "Microsoft Power Platform";
// Original PPE publish date kept. Update DATE_MODIFIED when this goes live.
const DATE_PUBLISHED = "2025-09-29T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-12T00:00:00+11:00";

// Same five titles as the EpbmServices cards
const EPBM_OFFERED_SERVICES = [
  "Data assessment and planning",
  "Data transformation and modelling",
  "Report and dashboard development",
  "Training and handover",
  "Ongoing support and optimisation",
];

// ── Case studies (pulled from caseStudies.js by slug) ───────────────────────
const EPBM_CASE_STUDY_SLUGS = [
  "community-services-excel-consolidation-rebuild",
  "retail-power-bi-partner-reporting-security",
  "golf-supplier-sales-data-consolidation",
];

const epbmCaseStudyLinks = EPBM_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((study) => ({
    href: `/case-studies/${study.slug}`,
    title: study.title,
    description: study.truncatedDescription,
    image: study.image,
    linkText: study.linkText,
  }));

// ── Structured data (the FAQPage schema renders inside EpbmFaq) ─────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_NAME,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      inLanguage: "en-AU",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: PARENT_NAME,
          item: PARENT_URL,
        },
        { "@type": "ListItem", position: 3, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      url: PAGE_URL,
      serviceType: "Business intelligence migration and consulting",
      category: "Microsoft Power BI",
      description:
        "Excel to Power BI migration for Australian businesses, covering data assessment, transformation and modelling, dashboard development, training and ongoing support.",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses moving their reporting from Excel to Power BI",
      },
      serviceOutput:
        "Interactive Power BI dashboards that replace static Excel reports, with automatic data refreshes and secure shared access",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: PAGE_NAME,
        itemListElement: EPBM_OFFERED_SERVICES.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            provider: { "@id": `${SITE_URL}#organization` },
          },
        })),
      },
    },
  ],
};

const ExcelToPowerBiMigration = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <EpbmHero />
        <EpbmIntro />
        <EpbmServices />
        <EpbmComparison />
        <EpbmBenefits />
        <EpbmApproach />
        <EpbmFaq />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Spreadsheet and Power BI"
          headingAccent="projects"
          text="A few of the reporting problems we’ve solved for Australian businesses, from oversized workbooks to secure, shared Power BI reports."
          links={epbmCaseStudyLinks}
        />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default ExcelToPowerBiMigration;
