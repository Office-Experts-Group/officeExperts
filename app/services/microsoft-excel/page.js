// /app/services/microsoft-excel/page.js
// Microsoft Excel hub: the redesigned excelexperts.com.au home page.
// Hero and intro are static imports (above the fold); everything below the
// fold is dynamic().

import dynamic from "next/dynamic";

import ExcelHero from "./(excelComponents)/ExcelHero";
import ExcelIntro from "./(excelComponents)/ExcelIntro";

const ExcelSigns = dynamic(() => import("./(excelComponents)/ExcelSigns"));
const ExcelServices = dynamic(
  () => import("./(excelComponents)/ExcelServices"),
);
const ExcelFit = dynamic(() => import("./(excelComponents)/ExcelFit"));
const ExcelCaseStudy = dynamic(
  () => import("./(excelComponents)/ExcelCaseStudy"),
);
const ExcelTestimonials = dynamic(
  () => import("./(excelComponents)/ExcelTestimonials"),
);
const ExcelWhy = dynamic(() => import("./(excelComponents)/ExcelWhy"));
const ExcelFaq = dynamic(() => import("./(excelComponents)/ExcelFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import { testimonials } from "@/testimonials";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-excel`;
const PAGE_TITLE = "Excel Consultants & Programmers Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Australia's leading Excel consultants and programmers. Custom workbooks, VBA macros, formulas, Power Query and dashboards, built by senior Australian experts.";
// datePublished kept from the excelexperts.com.au home page.
// Update dateModified by hand (+11:00 AEDT first Sunday of October to first
// Sunday of April, otherwise +10:00).
const DATE_PUBLISHED = "2024-10-26T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-19T00:00:00+11:00";

// One Offer per service in ExcelServices (main tiles plus Excel-only extras)
const EXCEL_OFFERS = [
  {
    name: "Custom Excel development",
    path: "/services/microsoft-excel/custom-excel-development",
  },
  {
    name: "VBA and macro development",
    path: "/services/microsoft-excel/vba-macro-development",
  },
  {
    name: "Excel formulas and troubleshooting",
    path: "/services/microsoft-excel/excel-formulas-and-custom-formulas",
  },
  {
    name: "Excel data manipulation",
    path: "/services/microsoft-excel/data-manipulation",
  },
  {
    name: "Excel charts, pivot tables and reporting",
    path: "/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
  },
  {
    name: "Excel add-in development",
    path: "/services/microsoft-excel/add-in-development",
  },
  {
    name: "Excel upgrades and migration",
    path: "/services/microsoft-excel/upgrades-and-migration",
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
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Excel consulting and development",
      serviceType: "Excel consulting and programming",
      description:
        "Custom Excel programming, VBA and macro development, formula troubleshooting, data manipulation, dashboards and reporting for Australian businesses.",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Australian businesses and government organisations",
      },
      serviceOutput:
        "Custom Excel workbooks, VBA macros, formulas, Power Query solutions, dashboards and automated reports",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Excel services",
        itemListElement: EXCEL_OFFERS.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            url: `${SITE_URL}${offer.path}`,
          },
        })),
      },
    },
  ],
};

// Case studies for RelatedLinks, built from caseStudies.js by slug.
// The featured study (community services rebuild) lives in ExcelCaseStudy.
const EXCEL_CASE_STUDY_SLUGS = [
  "food-manufacturer-excel-costing-workbook",
  "golf-supplier-sales-data-consolidation",
  "private-client-cashflow-forecasting-tool",
];
const excelCaseStudyLinks = EXCEL_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((study) => ({
    href: `/case-studies/${study.slug}`,
    title: study.title,
    description: study.truncatedDescription,
    image: study.image,
    linkText: study.linkText,
  }));

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ExcelHero />
      <ExcelIntro />
      <ExcelSigns />
      <ExcelServices />
      <ExcelFit />
      <ExcelCaseStudy />
      <ExcelTestimonials testimonials={testimonials} />
      <ExcelWhy />
      <ExcelFaq />
      <RelatedLinks
        theme="dark"
        eyebrow="Case studies"
        heading="More Excel projects"
        headingAccent="we’ve delivered"
        text="Workbooks we’ve rebuilt, consolidated and automated for Australian businesses."
        links={excelCaseStudyLinks}
      />
      <Contact />
    </>
  );
};

export default Page;
