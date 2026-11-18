// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/page.js

import dynamic from "next/dynamic";

import FormulasHero from "./(components)/FormulasHero";
import FormulasIntro from "./(components)/FormulasIntro";

const FormulasDark = dynamic(() => import("./(components)/FormulasDark"));
const FormulasVideo = dynamic(() => import("./(components)/FormulasVideo"));
const FormulasWhyChoose = dynamic(
  () => import("./(components)/FormulasWhyChoose"),
);
const FormulasCaseStudy = dynamic(
  () => import("./(components)/FormulasCaseStudy"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

/* ─── Constants ──────────────────────────────────────────────────────────── */
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-excel/excel-formulas-and-custom-formulas`;
const PAGE_NAME = "Excel Formulas and Custom Formulas";
const DATE_PUBLISHED = "2018-08-31T22:15:28+00:00";
// Update by hand on every content change: +11:00 (AEDT) from the first Sunday
// of October to the first Sunday of April, otherwise +10:00.
const DATE_MODIFIED = "2026-11-18T00:00:00+11:00";

// One featured case study panel, then three cards in RelatedLinks.
const FEATURED_CASE_STUDY_SLUG = "food-manufacturer-excel-costing-workbook";
const CASE_STUDY_SLUGS = [
  "community-services-excel-consolidation-rebuild",
  "golf-supplier-sales-data-consolidation",
  "private-client-cashflow-forecasting-tool",
];

const featuredCaseStudy = getCaseStudyBySlug(FEATURED_CASE_STUDY_SLUG);
const caseStudyLinks = CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((study) => ({
    href: `/case-studies/${study.slug}`,
    title: study.title,
    description: study.truncatedDescription,
    image: study.image,
    linkText: study.linkText,
  }));

/* ─── Schema ─────────────────────────────────────────────────────────────── */
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
      name: `${PAGE_NAME} | Office Experts`,
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description:
        "Get expert help with complex Excel formulas and custom formula solutions. Our specialists simplify calculations, improve workbook performance, and implement unique business logic. Remote or onsite support available across Australia.",
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Excel",
          item: `${SITE_URL}/services/microsoft-excel`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: PAGE_NAME,
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Excel Formulas and Custom Formula Development",
      description:
        "Professional Excel formula writing, troubleshooting, and custom formula development. Services include VLOOKUP/XLOOKUP, INDEX/MATCH, SUMIF/SUMPRODUCT, array formulas, and fully bespoke UDF development to extend Excel’s native functionality.",
      url: PAGE_URL,
      serviceType: "Excel Consulting",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Businesses and teams that rely on Microsoft Excel",
      },
      serviceOutput:
        "Working Excel formulas and custom functions built around your business logic",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Remote and On-site",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel formula services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Excel formula writing and troubleshooting",
              description:
                "Fixing broken formulas and replacing strange nested functions with clean, maintainable ones.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lookup and reference formulas",
              description:
                "VLOOKUP, XLOOKUP and INDEX/MATCH formulas that pull the right data from the right place.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conditional sum and SUMPRODUCT formulas",
              description:
                "SUMIF, SUMPRODUCT and related formulas for totals that follow your business rules.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Array formulas",
              description:
                "Array formulas that handle large calculations in a single, auditable place.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom formula (UDF) development",
              description:
                "Bespoke user defined functions built with VBA to extend what Excel can do natively.",
            },
          },
        ],
      },
    },
  ],
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FormulasHero />
      <FormulasIntro />
      <FormulasDark />
      <FormulasCaseStudy study={featuredCaseStudy} />
      <FormulasWhyChoose />
      <FormulasVideo />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="More formula-driven models"
        headingAccent="we have built."
        links={caseStudyLinks}
      />
      <Contact />
    </>
  );
};

export default Page;
