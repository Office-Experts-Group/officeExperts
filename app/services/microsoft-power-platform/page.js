// /app/services/microsoft-power-platform/page.js
import React from "react";
import dynamic from "next/dynamic";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

// Hero and the section after it are static. Everything below the fold is dynamic.
import PphHero from "./(powerComponents)/PphHero";
import PphIntro from "./(powerComponents)/PphIntro";

const PphTools = dynamic(() => import("./(powerComponents)/PphTools"));
const PphNeeds = dynamic(() => import("./(powerComponents)/PphNeeds"));
const PphTestimonials = dynamic(
  () => import("./(powerComponents)/PphTestimonials"),
);
const PphEngage = dynamic(() => import("./(powerComponents)/PphEngage"));
const PphTeam = dynamic(() => import("./(powerComponents)/PphTeam"));
const PphFaq = dynamic(() => import("./(powerComponents)/PphFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform`;
const PAGE_NAME = "Microsoft Power Platform";
const PAGE_TITLE = "Power Platform Consultants | Office Experts";
const PAGE_DESCRIPTION =
  "Microsoft Power Platform consultants across Australia. We design, build and support Power Apps, Power BI, Power Automate and Power Pages, remote or onsite.";
const PAGE_KEYWORDS = ["power platform consultants"];
const SITE_NAME = "Office Experts";
const TWITTER_HANDLE = "@OfficeExpertsG1";
const OG_IMAGE = "/logo.png"; // confirm it exists in OE /public

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    images: [
      { url: OG_IMAGE, width: 1200, height: 620, alt: `${SITE_NAME} logo` },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// ── Schema ──────────────────────────────────────────────────────────────────
// datePublished kept from the Power Platform Experts homepage. Update
// dateModified by hand when the page changes (+11:00 AEDT from the first Sunday
// of October to the first Sunday of April, otherwise +10:00).
const DATE_PUBLISHED = "2024-10-27T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-16T00:00:00+11:00";

const PPH_OFFERS = [
  {
    name: "Microsoft Power Apps development",
    url: `${PAGE_URL}/power-apps`,
  },
  {
    name: "Microsoft Power BI consulting",
    url: `${PAGE_URL}/power-bi`,
  },
  {
    name: "Microsoft Power Automate workflows",
    url: `${PAGE_URL}/power-automate`,
  },
  {
    name: "Microsoft Power Pages development",
    url: `${PAGE_URL}/power-pages`,
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
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      // The hub sits at the third level, so the trail has three items
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
        { "@type": "ListItem", position: 3, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Power Platform consulting services",
      serviceType: "Power Platform consulting, design and development",
      url: PAGE_URL,
      description:
        "Design, development, training and ongoing support for Microsoft Power Apps, Power BI, Power Automate and Power Pages solutions.",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses, government departments and organisations",
      },
      serviceOutput:
        "Custom business apps, automated workflows, reports and dashboards, and customer portals built on the Microsoft Power Platform",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Power Platform services",
        itemListElement: PPH_OFFERS.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            url: offer.url,
          },
        })),
      },
    },
  ],
};

// ── Case studies (built from caseStudies.js, not copied by hand) ────────────
const PPH_CASE_STUDY_SLUGS = [
  "building-consultants-inspection-crm",
  "retail-power-bi-partner-reporting-security",
  "manufacturing-project-setup-automation",
];

const pphCaseStudyLinks = PPH_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
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
    <PphHero />
    <PphIntro />
    <PphNeeds />
    <PphTools />
    <PphEngage />
    <PphTestimonials />
    <RelatedLinks
      eyebrow="Case studies"
      heading="Power Platform work"
      headingAccent="in the real world"
      text="A few of the Power Apps, Power BI and Power Automate projects we have delivered for Australian and international clients."
      links={pphCaseStudyLinks}
    />
    <PphTeam />
    <PphFaq />
    <Contact />
  </>
);

export default Page;
