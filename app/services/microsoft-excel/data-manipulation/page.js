// /app/services/microsoft-excel/data-manipulation/page.js

import dynamic from "next/dynamic";

import DataManipulationHero from "./(components)/DataManipulationHero";
import DataManipulationCapabilities from "./(components)/DataManipulationCapabilities";

const DataManipulationProblem = dynamic(
  () => import("./(components)/DataManipulationProblem"),
);
const DataManipulationServices = dynamic(
  () => import("./(components)/DataManipulationServices"),
);
const DataManipulationProcess = dynamic(
  () => import("./(components)/DataManipulationProcess"),
);
const DataManipulationComparison = dynamic(
  () => import("./(components)/DataManipulationComparison"),
);
const DataManipulationCta = dynamic(
  () => import("./(components)/DataManipulationCta"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-excel/data-manipulation`;
const PAGE_NAME = "Excel Data Manipulation & Automation Services";
const PAGE_DESCRIPTION =
  "Excel data automation specialists helping businesses simplify imports, exports, formatting and complex data manipulation using VBA. Free initial assessment";
const DATE_PUBLISHED = "2026-05-25T00:00:00+10:00";
const DATE_MODIFIED = "2026-11-18T00:00:00+11:00";

const DM_OFFERS = [
  {
    name: "Power Query & ETL Pipelines",
    description:
      "Excel connected to databases, SharePoint, APIs and third-party applications, with pipelines that clean, reshape and load data automatically.",
  },
  {
    name: "VBA Automation & Macro Rebuilds",
    description:
      "New VBA macros, and rebuilds of legacy macros that have broken or slowed down.",
  },
  {
    name: "SQL Database Integration",
    description:
      "Excel connected directly to SQL Server, MySQL, PostgreSQL or Oracle so reports reflect what is live in the database.",
  },
  {
    name: "API & Web Data Connections",
    description:
      "Live data from Salesforce, Xero, MYOB, HubSpot and custom internal systems pulled into Excel.",
  },
  {
    name: "Batch Processing & Bulk Conversions",
    description:
      "Batch automation that runs in the background on a trigger or schedule.",
  },
];

// ── Structured data ────────────────────────────────────────
const schemaData = {
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
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
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
        {
          "@type": "ListItem",
          position: 4,
          name: "Data Manipulation",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      serviceType: "Excel data automation",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Businesses that process data in Excel",
      },
      serviceOutput:
        "Automated, repeatable Excel data imports, clean-up and reporting",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel data manipulation services",
        itemListElement: DM_OFFERS.map(({ name, description }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
  ],
};

// ── Case studies (built from caseStudies.js) ───────────────
const DM_CASE_STUDY_SLUGS = [
  "community-services-excel-consolidation-rebuild",
  "golf-supplier-sales-data-consolidation",
];
const dmCaseStudyLinks = DM_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

// ── Page component ─────────────────────────────────────────
const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />

    <DataManipulationHero />
    <DataManipulationCapabilities />
    <DataManipulationProblem />
    <DataManipulationServices />
    <DataManipulationProcess />
    <RelatedLinks
      theme="light"
      eyebrow="Case Studies"
      heading="Excel data consolidation projects"
      links={dmCaseStudyLinks}
    />
    <DataManipulationComparison />
    <DataManipulationCta />
    <Contact />
  </>
);

export default Page;
