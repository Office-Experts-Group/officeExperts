// /app/services/microsoft-power-platform/microsoft-power-bi/page.js
import dynamic from "next/dynamic";

import PbsvHero from "./(components)/PbsvHero";
import PbsvIntro from "./(components)/PbsvIntro";

const PbsvAnatomy = dynamic(() => import("./(components)/PbsvAnatomy"));
const PbsvServices = dynamic(() => import("./(components)/PbsvServices"));
const PbsvFreshness = dynamic(() => import("./(components)/PbsvFreshness"));
const PbsvProcess = dynamic(() => import("./(components)/PbsvProcess"));
const PbsvNationwide = dynamic(() => import("./(components)/PbsvNationwide"));
const PbsvFaq = dynamic(() => import("./(components)/PbsvFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/microsoft-power-bi`;
const PAGE_NAME = "Microsoft Power BI Services";
const PAGE_TITLE = "Microsoft Power BI Services | Office Experts";
const PAGE_DESCRIPTION =
  "Power BI consultants across Australia. Custom dashboards, data modelling and training, with fixed quotes or hourly rates and support after launch.";

// datePublished carried over from the Power Platform Experts page.
// dateModified is set by hand (AEDT, +11:00, from the first Sunday of October).
const DATE_PUBLISHED = "2024-10-27T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-16T09:00:00+11:00";

const PBSV_CASE_STUDY_SLUGS = [
  "retail-power-bi-partner-reporting-security",
  "retail-analytics-automated-review-deck-generator",
  "financial-services-ai-risk-compliance-automation",
];
const pbsvCaseStudyLinks = PBSV_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

// One Offer per service tile on the page (no prices, so no priceSpecification).
const PBSV_OFFERS = [
  [
    "Custom Power BI dashboard development",
    "Dashboards and reports designed around the decisions your team makes.",
  ],
  [
    "Data modelling and integration",
    "Connecting, cleaning and modelling data from spreadsheets, databases and business systems for Power BI.",
  ],
  [
    "Real-time analytics implementation",
    "Choosing and setting up scheduled, live and streaming refresh so reports stay as current as the business needs.",
  ],
  [
    "Secure sharing and row-level security",
    "Sharing Power BI reports with colleagues, clients and partners with each person limited to their own data.",
  ],
  [
    "Power BI report reviews and tuning",
    "Reviewing existing Power BI reports for design, usability and performance, then fixing what gets in the way.",
  ],
  [
    "Power BI training and ongoing support",
    "Workshops for your team and ongoing help as your reporting questions change.",
  ],
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
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
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
          name: "Microsoft Power Platform",
          item: `${SITE_URL}/services/microsoft-power-platform`,
        },
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      serviceType: "Power BI consulting, dashboard development and training",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Australian businesses and organisations",
      },
      serviceOutput:
        "Power BI dashboards, data models, secured report sharing and trained report users",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Power BI services",
        itemListElement: PBSV_OFFERS.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
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
      <PbsvHero />
      <PbsvIntro />
      <PbsvAnatomy />
      <PbsvServices />
      <PbsvFreshness />
      <PbsvProcess />
      <PbsvNationwide />
      <PbsvFaq />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Power BI projects"
        headingAccent="in practice"
        links={pbsvCaseStudyLinks}
      />
      <Contact />
    </>
  );
};

export default Page;
