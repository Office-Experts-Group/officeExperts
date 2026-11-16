// /app/services/microsoft-power-platform/power-bi-data-integration/page.js
import dynamic from "next/dynamic";

import PbdiHero from "./(components)/PbdiHero";
import PbdiIntro from "./(components)/PbdiIntro";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const PbdiBenefits = dynamic(() => import("./(components)/PbdiBenefits"));
const PbdiCustom = dynamic(() => import("./(components)/PbdiCustom"));
const PbdiEtl = dynamic(() => import("./(components)/PbdiEtl"));
const PbdiTools = dynamic(() => import("./(components)/PbdiTools"));
const PbdiFaq = dynamic(() => import("./(components)/PbdiFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/power-bi-data-integration`;
const PAGE_NAME = "Power BI Data Integration Services";
const PAGE_DESCRIPTION =
  "Expert Power BI data integration services for Australian businesses. Connect multiple data sources into unified dashboards for better insights.";

// datePublished is carried over from the old Power Platform Experts page.
// Update dateModified by hand whenever the page changes (+11:00 from the first Sunday
// of October to the first Sunday of April, otherwise +10:00). Never use new Date().
const DATE_PUBLISHED = "2025-09-25T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-16T00:00:00+11:00";

// Case studies about pulling scattered data together and making it reportable
const PBDI_CASE_STUDY_SLUGS = [
  "retail-power-bi-partner-reporting-security",
  "golf-supplier-sales-data-consolidation",
  "community-services-excel-consolidation-rebuild",
];

const pbdiCaseStudyLinks = PBDI_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((study) => ({
    href: `/case-studies/${study.slug}`,
    title: study.title,
    description: study.truncatedDescription,
    image: study.image,
    linkText: study.linkText,
  }));

const PBDI_SERVICES = [
  "Data Source Identification & Mapping",
  "ETL (Extract, Transform, Load) Configuration",
  "Custom API & Connector Setup",
  "Data Modelling & Relationships",
  "Scheduled Refresh & Automation",
  "Legacy System & Custom Integrations",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
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
      url: PAGE_URL,
      serviceType: "Business Intelligence Data Integration",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses seeking data integration solutions",
      },
      description:
        "Professional Power BI data integration services including ETL processes, data source connectivity, custom API integrations, and unified dashboard creation.",
      serviceOutput:
        "Unified Power BI dashboards with integrated data from multiple sources, automated ETL processes, and scheduled data refresh",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: PAGE_NAME,
        itemListElement: PBDI_SERVICES.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
  ],
};

const PowerBiDataIntegration = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <main>
      <PbdiHero />
      <PbdiIntro />
      <PbdiBenefits />
      <PbdiCustom />
      <PbdiEtl />
      <PbdiTools />
      <PbdiFaq />
      <RelatedLinks
        eyebrow="Case studies"
        heading="Data integration"
        headingAccent="in action"
        text="Real projects where we pulled scattered data into one place and made it ready to report on."
        links={pbdiCaseStudyLinks}
      />
      <Contact />
    </main>
  </>
);

export default PowerBiDataIntegration;
