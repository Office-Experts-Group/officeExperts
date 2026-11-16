// /app/services/microsoft-power-platform/ai-with-power-platform/page.js
import dynamic from "next/dynamic";

import AippHero from "./(components)/AippHero";
import AippProblem from "./(components)/AippProblem";

const AippLayers = dynamic(() => import("./(components)/AippLayers"));
const AippScenarios = dynamic(() => import("./(components)/AippScenarios"));
const AippRoute = dynamic(() => import("./(components)/AippRoute"));
const AippProcess = dynamic(() => import("./(components)/AippProcess"));
const AippWhy = dynamic(() => import("./(components)/AippWhy"));
const AippFaq = dynamic(() => import("./(components)/AippFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/ai-with-power-platform`;
const PAGE_NAME = "AI with Power Platform";
const PAGE_DESCRIPTION =
  "AI inside Power Apps, Power Automate and Copilot Studio, using your own SharePoint and Dataverse data and permissions. Australian owned. Free consultation.";

// Dates: datePublished is kept from the old PPE page. dateModified is set by
// hand (+11:00 AEDT from the first Sunday of October to the first Sunday of
// April, otherwise +10:00). Update it whenever the page content changes.
const DATE_PUBLISHED = "2026-07-28T09:00:00+10:00";
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00";

const AIPP_CASE_STUDY_SLUGS = [
  "sporting-goods-agentic-ai-customer-service",
  "financial-services-ai-risk-compliance-automation",
  "life-insurance-real-time-competitive-intelligence",
];

const aippCaseStudyLinks = AIPP_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

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
          name: "Microsoft Power Platform",
          item: `${SITE_URL}/services/microsoft-power-platform`,
        },
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI integrations inside Power Platform",
      serviceType: "Artificial intelligence integration",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses using Microsoft 365, including finance, legal, health and government organisations",
      },
      serviceOutput:
        "AI agents, AI-assisted workflows and governed AI data solutions running inside the client’s own Microsoft 365 or Azure tenant",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI with Power Platform services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copilot Studio agents",
              description:
                "Agents that answer staff questions from your own SharePoint and Dataverse data, respecting existing permissions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI steps in Power Automate and Power Apps",
              description:
                "Workflows that read documents, emails and forms, extract the details, make routine decisions and write the result to your systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Governed AI on Dataverse and Azure",
              description:
                "AI solutions designed so data stays inside your tenant, with row-level security and audit logging built in.",
            },
          },
        ],
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
      <AippHero />
      <AippProblem />
      <AippLayers />
      <AippScenarios />
      <AippRoute />
      <AippProcess />
      <AippWhy />
      <AippFaq />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="AI-powered workflow"
        headingAccent="projects"
        links={aippCaseStudyLinks}
      />
      <Contact />
    </>
  );
};

export default Page;
