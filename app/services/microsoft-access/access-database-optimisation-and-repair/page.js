// /app/services/microsoft-access/access-database-optimisation-and-repair/page.js
import React from "react";
import dynamic from "next/dynamic";

import AorHero from "./(components)/AorHero";
import AorIntro from "./(components)/AorIntro";

const AorCauses = dynamic(() => import("./(components)/AorCauses"));
const AorServices = dynamic(() => import("./(components)/AorServices"));
const AorCaseStudy = dynamic(() => import("./(components)/AorCaseStudy"));
const AorProcess = dynamic(() => import("./(components)/AorProcess"));
const AorEngage = dynamic(() => import("./(components)/AorEngage"));
const AorFaq = dynamic(() => import("./(components)/AorFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-access/access-database-optimisation-and-repair`;
const PAGE_NAME = "Optimising & Repairing Slow Databases";
const PAGE_TITLE = "Access Database Optimisation & Repair | Office Experts";
const PAGE_DESCRIPTION =
  "Slow, bloated or corrupted Access database? Our Australian specialists speed it up, repair corruption and recover data, starting with a clear diagnosis.";

// Same names as the service cards in AorServices.jsx
const AOR_OFFERS = [
  {
    name: "Performance Analysis & Diagnosis",
    description:
      "Testing and profiling to find what is slowing an Access database down, with a prioritised list of fixes.",
  },
  {
    name: "Database Splitting & Backend Optimisation",
    description:
      "Separating data from the interface and tidying the backend so several people can work at once.",
  },
  {
    name: "Index Optimisation & Query Tuning",
    description:
      "Adding the right indexes, removing the wrong ones and rewriting slow queries.",
  },
  {
    name: "Form & Report Performance Improvements",
    description:
      "Making forms and reports open faster by loading less data and removing unnecessary recalculation.",
  },
  {
    name: "VBA Code Optimisation",
    description:
      "Replacing slow VBA patterns such as repeated DLookup calls and nested loops with faster approaches.",
  },
  {
    name: "SQL Server Migration for Scalability",
    description:
      "Moving the Access backend to SQL Server for larger data volumes and more users.",
  },
  {
    name: "Regular Maintenance Planning",
    description:
      "Scheduled compact and repair, backups, index upkeep and growth checks.",
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
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: "2025-10-22T00:00:00+11:00",
      dateModified: "2026-11-20T09:00:00+11:00",
      description: PAGE_DESCRIPTION,
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
          name: "Microsoft Access",
          item: `${SITE_URL}/services/microsoft-access`,
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
      name: "Access Database Optimisation and Repair",
      serviceType: "Database Performance Optimisation and Repair",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Organisations that run on Microsoft Access databases",
      },
      description:
        "Performance tuning, corruption repair, query and index optimisation, database splitting, SQL Server migration and data recovery for Microsoft Access databases.",
      serviceOutput:
        "A faster, more stable Access database, with a prioritised findings report and a maintenance plan.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Access Database Optimisation and Repair Services",
        itemListElement: AOR_OFFERS.map((offer) => ({
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

// Case studies for the RelatedLinks cards. The film crew study is shown in
// full by AorCaseStudy, so it is left out here.
const AOR_CASE_STUDY_SLUGS = [
  "automated-proposal-generation-in-microsoft",
  "community-services-excel-consolidation-rebuild",
  "research-organisation-access-kanban-planner",
];

const aorCaseStudyLinks = AOR_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
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
      <AorHero />
      <AorIntro />
      <AorCauses />
      <AorServices />
      <AorCaseStudy />
      <AorProcess />
      <AorEngage />
      <AorFaq />
      <RelatedLinks
        theme="dark"
        eyebrow="More Access work"
        heading="Databases we have"
        headingAccent="rescued and rebuilt"
        text="A few of the Access and Excel projects where we replaced slow, manual or fragile set-ups with something faster and easier to look after."
        links={aorCaseStudyLinks}
      />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Page;
