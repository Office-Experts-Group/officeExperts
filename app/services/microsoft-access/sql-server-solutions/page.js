// /app/services/microsoft-access/sql-server-solutions/page.js
import React from "react";
import dynamic from "next/dynamic";

import SqlsHero from "./(components)/SqlsHero";
import SqlsIntro from "./(components)/SqlsIntro";

import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SqlsSigns = dynamic(() => import("./(components)/SqlsSigns"));
const SqlsBenefits = dynamic(() => import("./(components)/SqlsBenefits"));
const SqlsMigration = dynamic(() => import("./(components)/SqlsMigration"));
const SqlsApproach = dynamic(() => import("./(components)/SqlsApproach"));
const SqlsCaseStudy = dynamic(() => import("./(components)/SqlsCaseStudy"));
const SqlsFaq = dynamic(() => import("./(components)/SqlsFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-access/sql-server-solutions`;
const PAGE_NAME = "SQL Server Solutions for Access Databases";
const PAGE_DESCRIPTION =
  "Move your Access database to a SQL Server backend for faster multi-user performance, stronger security and reliable backups. Australia-wide migration experts.";

const SQLS_OFFERS = [
  {
    name: "Access to SQL Server migration",
    description:
      "Moving the tables and data of an Access database into SQL Server while keeping the Access forms, reports and code.",
  },
  {
    name: "SQL Server backend design",
    description:
      "Designing tables, keys, relationships and indexes for a SQL Server backend.",
  },
  {
    name: "Access front end relinking and tuning",
    description:
      "Relinking an Access front end to SQL Server and reworking slow queries and forms.",
  },
  {
    name: "SQL Server security and backup setup",
    description:
      "Setting up access control, backups and recovery arrangements for a SQL Server database.",
  },
  {
    name: "Excel to SQL Server data moves",
    description:
      "Loading spreadsheet data into SQL Server and building a front end on top of it.",
  },
  {
    name: "SQL Server support and training",
    description:
      "Ongoing support and training for teams running Access on a SQL Server backend.",
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
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: "2025-10-23T00:00:00+00:00",
      dateModified: "2026-11-20T00:00:00+11:00",
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
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "SQL Server backend solutions for Access databases",
      serviceType: "SQL Server backend migration",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: [
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Businesses running Microsoft Access or Excel databases that have outgrown a shared file",
      },
      serviceOutput:
        "An Access front end connected to a SQL Server backend, with the data migrated and checked",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SQL Server solutions",
        itemListElement: SQLS_OFFERS.map(({ name, description }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
  ],
};

const SQLS_CASE_STUDY_SLUGS = [
  "film-crew-booking-system-access-nextjs-rebuild",
  "research-organisation-access-kanban-planner",
  "community-services-excel-consolidation-rebuild",
];

const sqlsCaseStudyLinks = SQLS_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <SqlsHero />
    <SqlsIntro />
    <SqlsSigns />
    <SqlsBenefits />
    <SqlsMigration />
    <SqlsApproach />
    <SqlsCaseStudy />
    <SqlsFaq />
    <RelatedLinks
      theme="dark"
      eyebrow="Case studies"
      heading="Databases we have"
      headingAccent="moved and modernised"
      text="Real projects where an Access or spreadsheet database outgrew its file and needed a stronger foundation."
      links={sqlsCaseStudyLinks}
    />
    <Contact />
  </>
);

export default Page;
