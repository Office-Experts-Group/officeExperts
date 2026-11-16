// /app/services/microsoft-power-platform/power-apps/page.js
import dynamic from "next/dynamic";

import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

import PappsHero from "./(components)/PappsHero";
import PappsIntro from "./(components)/PappsIntro";

const PappsSigns = dynamic(() => import("./(components)/PappsSigns"));
const PappsApps = dynamic(() => import("./(components)/PappsApps"));
const PappsData = dynamic(() => import("./(components)/PappsData"));
const PappsMobility = dynamic(() => import("./(components)/PappsMobility"));
const PappsLicences = dynamic(() => import("./(components)/PappsLicences"));
const PappsWhy = dynamic(() => import("./(components)/PappsWhy"));
const PappsFaq = dynamic(() => import("./(components)/PappsFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/power-apps`;
const PAGE_NAME = "Microsoft Power Apps Consulting Services";
const PAGE_DESCRIPTION =
  "Custom Microsoft Power Apps built for your business. Replace paper and spreadsheets with apps that work on any device. Australia-wide, remote support.";

const PAPPS_OFFERS = [
  {
    name: "Custom Power Apps development",
    description:
      "Design and build of tailored business apps that replace paper forms, spreadsheets and email processes.",
  },
  {
    name: "Power Apps improvement and repair",
    description:
      "Review, fix and extend an existing Power Apps solution without a full rebuild where possible.",
  },
  {
    name: "Power Apps data connections",
    description:
      "Connecting apps to existing data in SharePoint, Excel, SQL Server and other sources.",
  },
  {
    name: "Mobile and tablet apps",
    description:
      "Cloud-based apps for phones, tablets and computers, built for field and office teams.",
  },
  {
    name: "Power Apps licensing guidance",
    description:
      "Advice on using your existing Microsoft 365 licences and when extra licensing is needed.",
  },
  {
    name: "Power Apps support and training",
    description:
      "Ongoing support and customised training for your team across Australia.",
  },
];

const PAPPS_CASE_STUDY_SLUGS = [
  "building-consultants-inspection-crm",
  "sporting-goods-agentic-ai-customer-service",
  "life-insurance-real-time-competitive-intelligence",
];

const pappsCaseStudyLinks = PAPPS_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

const pappsSchema = {
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
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-11-16T00:00:00+11:00",
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
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      serviceType: "Microsoft Power Apps consulting and development",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Australian businesses replacing manual processes",
      },
      serviceOutput: "Custom business apps built on Microsoft Power Apps",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Power Apps services",
        itemListElement: PAPPS_OFFERS.map(({ name, description }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
  ],
};

export default function MicrosoftPowerAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pappsSchema) }}
      />
      <PappsHero />
      <PappsIntro />
      <PappsSigns />
      <PappsApps />
      <PappsData />
      <PappsMobility />
      <PappsLicences />
      <PappsWhy />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Power Apps projects"
        headingAccent="in practice"
        links={pappsCaseStudyLinks}
      />
      <PappsFaq />
      <Contact />
    </>
  );
}
