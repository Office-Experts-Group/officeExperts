// /app/services/microsoft-power-platform/microsoft-power-pages/page.js

import dynamic from "next/dynamic";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";
import PpgHero from "./(components)/PpgHero";
import PpgIntro from "./(components)/PpgIntro";

const PpgDataIntegration = dynamic(
  () => import("./(components)/PpgDataIntegration"),
);
const PpgVisualisation = dynamic(
  () => import("./(components)/PpgVisualisation"),
);
const PpgSecurity = dynamic(() => import("./(components)/PpgSecurity"));
const PpgAiCapabilities = dynamic(
  () => import("./(components)/PpgAiCapabilities"),
);
const PpgComparison = dynamic(() => import("./(components)/PpgComparison"));
const PpgHowWeWork = dynamic(() => import("./(components)/PpgHowWeWork"));
const PpgFaq = dynamic(() => import("./(components)/PpgFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/microsoft-power-pages`;
const PAGE_TITLE = "Microsoft Power Pages Services | Office Experts";
const PAGE_DESCRIPTION =
  "Build secure customer, supplier and partner portals with Microsoft Power Pages. Australian experts in Dataverse, Power BI and custom development. Get a quote.";

// datePublished is carried over from the PPE page. dateModified is set by hand.
const DATE_PUBLISHED = "2024-10-27T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-16T00:00:00+11:00";

const PPG_CASE_STUDY_SLUGS = [
  "rdao-application-ai-review-workflow",
  "retail-power-bi-partner-reporting-security",
  "building-consultants-inspection-crm",
];

const ppgCaseStudyLinks = PPG_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

const PPG_OFFERS = [
  "Power Pages portal design and build",
  "Dataverse integration and Power Automate connections",
  "Power BI and data visualisation in portals",
  "Portal security, web roles and permissions",
  "Copilot and AI features for Power Pages",
  "Power Pages support and training",
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
          name: "Microsoft Power Platform",
          item: `${SITE_URL}/services/microsoft-power-platform`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Power Pages",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Power Pages Services",
      serviceType: "Power Pages development and support",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Organisations building customer, supplier or partner portals",
      },
      serviceOutput: "A secure, data-driven Power Pages portal",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Power Pages services",
        itemListElement: PPG_OFFERS.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
  ],
};

export default function MicrosoftPowerPagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PpgHero />
      <PpgIntro />
      <PpgDataIntegration />
      <PpgVisualisation />
      <PpgSecurity />
      <PpgAiCapabilities />
      <PpgComparison />
      <PpgHowWeWork />
      <PpgFaq />
      <RelatedLinks
        theme="dark"
        eyebrow="Case studies"
        heading="Power Platform work"
        headingAccent="we have delivered"
        text="Portals, secure partner reporting and automated workflows built on the Microsoft stack."
        links={ppgCaseStudyLinks}
      />
      <Contact />
    </>
  );
}
