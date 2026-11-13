// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/page.js
import dynamic from "next/dynamic";

import SpcdHero from "./(components)/SpcdHero";
import SpcdIntro from "./(components)/SpcdIntro";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const SpcdPlatform = dynamic(() => import("./(components)/SpcdPlatform"));
const SpcdServices = dynamic(() => import("./(components)/SpcdServices"));
const SpcdCopilot = dynamic(() => import("./(components)/SpcdCopilot"));
const SpcdMigration = dynamic(() => import("./(components)/SpcdMigration"));
const SpcdProcess = dynamic(() => import("./(components)/SpcdProcess"));
const SpcdWhyUs = dynamic(() => import("./(components)/SpcdWhyUs"));
const SpcdFaq = dynamic(() => import("./(components)/SpcdFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// ── Constants ──
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/sharepoint-consulting-and-development`;
const PAGE_NAME = "SharePoint Consulting & Development Services";
const PAGE_DESCRIPTION =
  "Australian SharePoint consultants for new builds, migration off SharePoint 2016 and 2019, intranets, custom development and Copilot readiness. Free assessment.";
const DATE_PUBLISHED = "2025-05-04T00:00:00+00:00"; // kept from the PPE page
const DATE_MODIFIED = "2026-11-13T09:00:00+11:00"; // update by hand on deploy day (AEDT)

// ── Case studies (RelatedLinks) ──
const SPCD_CASE_STUDY_SLUGS = [
  "professional-services-sharepoint-foundation-workshops",
  "building-consultants-inspection-crm",
  "manufacturing-project-setup-automation",
];

const spcdCaseStudyLinks = SPCD_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

// ── Offers: one per service line in SpcdServices ──
const SPCD_OFFERS = [
  {
    name: "SharePoint migration",
    description:
      "Migration from SharePoint 2013, 2016 or 2019, file shares, Google Drive or Dropbox to SharePoint Online, plus tenant-to-tenant moves.",
  },
  {
    name: "New SharePoint implementation",
    description:
      "Hub, communication and team site architecture, permissions and governance, document libraries with metadata, and Teams integration.",
  },
  {
    name: "SharePoint intranet design",
    description:
      "Branded intranets with news, staff directories, hub navigation, embedded Power BI dashboards and Viva Connections in Teams.",
  },
  {
    name: "Custom SharePoint development",
    description:
      "SPFx web parts and extensions, InfoPath form replacement, embedded Power Apps, AI document processing and system integrations.",
  },
  {
    name: "SharePoint governance and Copilot readiness",
    description:
      "Sharing policies, site lifecycle, permissions auditing, SharePoint Admin Agent configuration, Copilot readiness assessments and managed support.",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Microsoft Power Platform",
          item: `${SITE_URL}/services/microsoft-power-platform`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SharePoint Consulting & Development",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      serviceType: "SharePoint consulting and development",
      description:
        "SharePoint implementation, migration to SharePoint Online, intranet design, custom development, governance and Microsoft 365 Copilot readiness for Australian organisations.",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses and organisations using or moving to Microsoft 365",
      },
      serviceOutput:
        "A structured, governed SharePoint Online environment with migrated content, rebuilt workflows and an intranet ready for Copilot",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SharePoint services",
        itemListElement: SPCD_OFFERS.map(({ name, description }) => ({
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <SpcdHero />
      <SpcdIntro />
      <SpcdPlatform />
      <SpcdServices />
      <SpcdCopilot />
      <SpcdMigration />
      <SpcdProcess />
      <SpcdWhyUs />
      <SpcdFaq />
      <RelatedLinks
        eyebrow="Case studies"
        heading="SharePoint projects"
        headingAccent="in practice"
        links={spcdCaseStudyLinks}
      />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Page;
