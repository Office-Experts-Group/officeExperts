// /app/services/microsoft-access/is-access-right-for-your-company/page.js
import React from "react";
import dynamic from "next/dynamic";

import IarcHero from "./(components)/IarcHero";
import IarcIntro from "./(components)/IarcIntro";

const IarcStrengths = dynamic(() => import("./(components)/IarcStrengths"));
const IarcGrowth = dynamic(() => import("./(components)/IarcGrowth"));
const IarcSituations = dynamic(() => import("./(components)/IarcSituations"));
const IarcStack = dynamic(() => import("./(components)/IarcStack"));
const IarcAssessment = dynamic(() => import("./(components)/IarcAssessment"));
const IarcCaseStudy = dynamic(() => import("./(components)/IarcCaseStudy"));
const IarcFaq = dynamic(() => import("./(components)/IarcFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-access/is-access-right-for-your-company`;
const PAGE_NAME = "Is Microsoft Access Right for Your Company?";
const PAGE_DESCRIPTION =
  "Not sure if Microsoft Access is right for your business? Our Australian Access experts review your data, users and systems and give you a straight answer.";

// Same four services the old Access Experts page listed, one Offer each.
const IARC_OFFERS = [
  "Database Assessment",
  "Business Requirements Analysis",
  "Solution Consulting",
  "Database Strategy Planning",
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
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-11-20T00:00:00+11:00",
      description: PAGE_DESCRIPTION,
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
          name: "Microsoft Access",
          item: `${SITE_URL}/services/microsoft-access`,
        },
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Access suitability assessment",
      serviceType: "Microsoft Access consulting",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses deciding whether Microsoft Access suits their data, users and systems",
      },
      serviceOutput:
        "A plain-English recommendation on whether Microsoft Access, Access with SQL Server or Azure, or another platform is the best fit",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access consultation services",
        itemListElement: IARC_OFFERS.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
  ],
};

// Case studies for the RelatedLinks cards (the big film crew story is a
// feature panel inside IarcCaseStudy, so it is not repeated here).
const IARC_CASE_STUDY_SLUGS = [
  "research-organisation-access-kanban-planner",
  "automated-proposal-generation-in-microsoft",
  "community-services-excel-consolidation-rebuild",
];
const iarcCaseStudyLinks = IARC_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IarcHero />
      <IarcIntro />
      <IarcStrengths />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Access and spreadsheets"
        headingAccent="in practice"
        links={iarcCaseStudyLinks}
      />
      <IarcGrowth />
      <IarcSituations />
      <IarcStack />
      <IarcAssessment />
      <IarcCaseStudy />
      <IarcFaq />
      <Contact />
    </>
  );
};

export default Page;
