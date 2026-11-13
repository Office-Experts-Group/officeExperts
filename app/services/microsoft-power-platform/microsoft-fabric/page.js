// /app/services/microsoft-power-platform/microsoft-fabric/page.js

import dynamic from "next/dynamic";

import MfabHero from "./(components)/MfabHero";
import MfabIntro from "./(components)/MfabIntro";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const MfabSilos = dynamic(() => import("./(components)/MfabSilos"));
const MfabCapabilities = dynamic(
  () => import("./(components)/MfabCapabilities"),
);
const MfabUseCases = dynamic(() => import("./(components)/MfabUseCases"));
const MfabFitCheck = dynamic(() => import("./(components)/MfabFitCheck"));
const MfabServices = dynamic(() => import("./(components)/MfabServices"));
const MfabFaq = dynamic(() => import("./(components)/MfabFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/microsoft-fabric`;
const PAGE_NAME = "Microsoft Fabric Development & Support";
const PAGE_DESCRIPTION =
  "Microsoft Fabric consultants in Australia. We plan, build and support OneLake, data pipelines, warehouses and Power BI so all your data lives in one place.";
const DATE_PUBLISHED = "2025-10-09T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-13T09:00:00+11:00";

// One Offer per service tile in MfabServices
const MFAB_OFFERS = [
  {
    name: "Fabric assessment and planning",
    description:
      "Current state review, licensing and capacity sizing, return on investment and a phased roadmap.",
  },
  {
    name: "Fabric implementation",
    description:
      "OneLake design, workspace and capacity setup, security, governance and deployment pipelines.",
  },
  {
    name: "Custom Fabric development",
    description:
      "Data pipelines, lakehouses, warehouses, semantic models, real-time dashboards and custom integrations.",
  },
  {
    name: "Migration to Microsoft Fabric",
    description:
      "Moves from Azure Synapse Analytics, SQL Server, on-premises data warehouses and spreadsheets into Fabric.",
  },
  {
    name: "Fabric training and support",
    description:
      "User and administrator training, best practice documentation and ongoing support.",
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
          name: "Microsoft Power Platform",
          item: `${SITE_URL}/services/microsoft-power-platform`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Fabric",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Fabric consulting, implementation and support",
      serviceType: "Microsoft Fabric consulting",
      description:
        "Microsoft Fabric consulting for Australian organisations: assessment, implementation, custom development, migration from existing data platforms, training and ongoing support.",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Organisations bringing data from several systems together for analytics and reporting",
      },
      serviceOutput: {
        "@type": "Thing",
        name: "A governed Microsoft Fabric environment with OneLake, data pipelines and Power BI reporting",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Fabric services",
        itemListElement: MFAB_OFFERS.map((offer) => ({
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

const MFAB_CASE_STUDY_SLUGS = [
  "healthcare-patient-form-followup-automation",
  "retail-power-bi-partner-reporting-security",
  "community-services-excel-consolidation-rebuild",
];

const mfabCaseStudyLinks = MFAB_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <MfabHero />
        <MfabIntro />
        <MfabSilos />
        <MfabCapabilities />
        <MfabUseCases />
        <MfabFitCheck />
        <MfabServices />
        <MfabFaq />
        <RelatedLinks
          eyebrow="Case studies"
          heading="Data and reporting projects"
          headingAccent="we’ve delivered"
          text="Real work on Microsoft Fabric, Power BI and data consolidation for Australian organisations."
          links={mfabCaseStudyLinks}
        />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Page;
