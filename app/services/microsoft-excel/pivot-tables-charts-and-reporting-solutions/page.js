// /app/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions/page.js
import React from "react";
import dynamic from "next/dynamic";

import PivotHero from "./(components)/PivotHero";
import PivotIntro from "./(components)/PivotIntro";

const PivotServices = dynamic(() => import("./(components)/PivotServices"));
const PivotWhy = dynamic(() => import("./(components)/PivotWhy"));
const PivotIndustries = dynamic(() => import("./(components)/PivotIndustries"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions`;
const PAGE_NAME = "Excel Pivot Tables, Charts & Reporting Solutions";

// One Offer per service tile in PivotServices.jsx
const PIVOT_OFFERS = [
  {
    name: "Pivot Tables",
    description:
      "Custom pivot tables with calculated fields, groupings and shared pivot caches, handed over as a refreshable template.",
  },
  {
    name: "Power Query",
    description:
      "Automated data preparation that connects to files, databases, SharePoint lists and APIs, and reduces reporting to a one-click refresh.",
  },
  {
    name: "PowerPivot & Data Modelling",
    description:
      "Data Model relationships, DAX measures and KPIs for millions of rows across multiple sources.",
  },
  {
    name: "Excel Dashboards",
    description:
      "Interactive dashboards with slicers, KPI tiles and conditional indicators that refresh from your data source.",
  },
  {
    name: "VBA Reporting Automation",
    description:
      "Scheduled report generation, Outlook email distribution and one-click automation wrapped around pivot tables and Power Query.",
  },
  {
    name: "Power BI",
    description:
      "Live web and mobile dashboards, including migration from Excel to Power BI.",
  },
];

const PIVOT_CASE_STUDY_SLUGS = [
  "golf-supplier-sales-data-consolidation",
  "community-services-excel-consolidation-rebuild",
];

const pivotCaseStudyLinks = PIVOT_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

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
      name: `${PAGE_NAME} | Office Experts`,
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2026-11-18T00:00:00+11:00",
      description:
        "Custom Excel pivot tables, pivot charts, Power Query pipelines and Power BI dashboards from Office Experts. Remote and onsite support Australia-wide.",
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
          name: PAGE_NAME,
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      serviceType: "Excel reporting and data analysis",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Australian businesses",
      },
      serviceOutput:
        "Pivot tables, pivot charts, automated data pipelines and reporting dashboards",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel reporting services",
        itemListElement: PIVOT_OFFERS.map((offer) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <PivotHero />
        <PivotIntro />
        <PivotServices />
        <PivotWhy />
        <PivotIndustries />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Some recent Excel"
          headingAccent="reporting projects."
          links={pivotCaseStudyLinks}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
