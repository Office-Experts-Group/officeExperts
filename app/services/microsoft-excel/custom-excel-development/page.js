// /app/services/microsoft-excel/custom-excel-development/page.js
import dynamic from "next/dynamic";

import CexdHero from "./(components)/CexdHero";
import CexdServices from "./(components)/CexdServices";

const CexdIntegrations = dynamic(
  () => import("./(components)/CexdIntegrations"),
);
const CexdCaseStudies = dynamic(() => import("./(components)/CexdCaseStudies"));
const CexdIndustries = dynamic(() => import("./(components)/CexdIndustries"));
const CexdEngage = dynamic(() => import("./(components)/CexdEngage"));
const Contact = dynamic(() => import("@/components/Contact"));

import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-excel/custom-excel-development`;
const PAGE_NAME = "Custom Excel Development";
const PAGE_TITLE = "Custom Excel Development Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Excel development for Australian businesses. Software solutions built by Excel specialists with 25+ years of experience.";

// Published date carried over from the Excel Experts page.
// Update dateModified by hand (+11:00 AEDT from the first Sunday of October
// to the first Sunday of April, otherwise +10:00).
const DATE_PUBLISHED = "2018-01-02T13:09:44+00:00";
const DATE_MODIFIED = "2026-11-18T09:00:00+11:00";

// Three Excel case studies, shown in full by CaseStudyFeature.
const CEXD_CASE_STUDY_SLUGS = [
  "food-manufacturer-excel-costing-workbook",
  "community-services-excel-consolidation-rebuild",
  "golf-supplier-sales-data-consolidation",
];
const cexdCaseStudies =
  CEXD_CASE_STUDY_SLUGS.map(getCaseStudyBySlug).filter(Boolean);

// One Offer per services row on the page.
const CEXD_OFFERS = [
  {
    name: "Custom user interface development",
    description:
      "Custom UserForms, guided workflows, validation rules and web-based interfaces that make Excel data entry faster and more consistent.",
  },
  {
    name: "VBA macro development",
    description:
      "Structured, documented VBA macros that automate report generation, data imports, formatting and file distribution.",
  },
  {
    name: "Office and third-party integrations",
    description:
      "Integrations between Excel, Microsoft Office, databases, cloud platforms and third-party applications, including SQL Server, SharePoint and REST APIs.",
  },
  {
    name: "Custom workbooks and templates",
    description:
      "New Excel workbooks built from scratch, or existing spreadsheets rebuilt, with structured layouts, validation controls and protected areas.",
  },
  {
    name: "Add-in development",
    description:
      "Custom add-ins for Excel, Word, Outlook and Microsoft 365 that provide shared tools, ribbon commands and automation across a team.",
  },
];

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
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
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
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      serviceType: "Custom Excel development",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses and organisations that rely on Excel",
      },
      serviceOutput:
        "Custom Excel workbooks, forms, macros, integrations and add-ins",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Excel development services",
        itemListElement: CEXD_OFFERS.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.description,
          },
        })),
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CexdHero />
      <CexdServices />
      <CexdIntegrations />
      <CexdCaseStudies studies={cexdCaseStudies} />
      <CexdIndustries />
      <CexdEngage />
      <Contact />
    </>
  );
};

export default Page;
