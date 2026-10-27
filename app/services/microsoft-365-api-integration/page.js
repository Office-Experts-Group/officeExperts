// app/services/microsoft-365-api-integration/page.js
import React from "react";
import dynamic from "next/dynamic";

// ── Above the fold: normal imports so they render in the first paint ──
import ServiceHero from "@/components/ServiceHero";
import ApiIntro from "./(components)/ApiIntro";

// ── Below the fold: next/dynamic splits each into its own chunk.
// They are still server-rendered (no ssr: false), so all content is in the HTML. ──
const ApiByProduct = dynamic(() => import("./(components)/ApiByProduct"));
const ApiAgents = dynamic(() => import("./(components)/ApiAgents"));
const ApiSurfaces = dynamic(() => import("./(components)/ApiSurfaces"));
const ApiUseCases = dynamic(() => import("./(components)/ApiUseCases"));
const ApiProcess = dynamic(() => import("./(components)/ApiProcess"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ApiFaq = dynamic(() => import("./(components)/ApiFaq"));
const Contact = dynamic(() => import("@/components/Contact"));

// Case study data (single source of truth for every case study card and page)
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

// FAQ content, shared with ApiFaq.jsx so the schema matches what's on screen
import { apiFaqs } from "./(components)/apiFaqData";

// Hero images (kept from the previous version of this page)
import api from "@/public/pageHeros/api.webp";
import apiMob from "@/public/pageHeros/mob/apiMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-365-api-integration";
const PAGE_TITLE =
  "Microsoft 365 API Integration | Word, Excel & Power Platform";
const PAGE_DESCRIPTION =
  "Custom Microsoft 365 API integrations for Word, Excel, Outlook, Power Platform and Access. Office add-ins, Graph, Dataverse and AI agents, since 2000.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Microsoft Graph API integrations";

const DATE_PUBLISHED = "2025-09-01T00:00:00+10:00";
const DATE_MODIFIED = "2026-10-24T00:00:00+11:00";

// ─────────────────────────────────────────────
// Case studies shown in RelatedLinks
// ─────────────────────────────────────────────
// Chosen because each one is an integration between Microsoft apps or APIs.
const CASE_STUDY_SLUGS = [
  "internal-ai-proposal-assistant-azure-migration",
  "life-insurance-real-time-competitive-intelligence",
  "retail-analytics-automated-review-deck-generator",
  "film-crew-booking-system-access-nextjs-rebuild",
  "healthcare-patient-form-followup-automation",
  "automated-proposal-generation-in-microsoft",
];

// Maps slugs to the { href, title, description, image, linkText } shape
// RelatedLinks expects. filter(Boolean) skips any slug that's been renamed
// or removed, so a missing case study never breaks the page.
const buildCaseStudyLinks = (slugs) =>
  slugs
    .map(getCaseStudyBySlug)
    .filter(Boolean)
    .map((study) => ({
      href: `/case-studies/${study.slug}`,
      title: study.title,
      description: study.truncatedDescription,
      image: study.image,
      linkText: study.linkText,
    }));

const caseStudyLinks = buildCaseStudyLinks(CASE_STUDY_SLUGS);

// ─────────────────────────────────────────────
// Service offers listed in the Service schema
// ─────────────────────────────────────────────
const offers = [
  {
    name: "Office add-in development",
    description:
      "Office JavaScript API add-ins for Word, Excel, PowerPoint and Outlook, deployed with the unified Microsoft 365 app manifest.",
  },
  {
    name: "Microsoft Graph integration",
    description:
      "Integrations with Outlook mail and calendars, Teams, SharePoint, OneDrive and Excel workbooks through the Microsoft Graph REST API.",
  },
  {
    name: "Word document automation",
    description:
      "Document assembly, content control automation and PDF generation from business data.",
  },
  {
    name: "Excel REST API integration",
    description:
      "Web and mobile apps that read, write and calculate with Excel workbooks stored in SharePoint or OneDrive.",
  },
  {
    name: "Power Platform and Dataverse integration",
    description:
      "Dataverse Web API, custom connectors, Power Automate flows and Power BI REST API integrations.",
  },
  {
    name: "Access and SQL Server integration",
    description:
      "Moving Access data to SQL Server, Azure SQL or Dataverse so Microsoft 365 apps and web portals can use it.",
  },
  {
    name: "AI agent and MCP integration",
    description:
      "Copilot Studio and custom AI agents connected to Microsoft 365 through MCP servers and the Microsoft 365 Copilot APIs.",
  },
  {
    name: "Web portals and mobile apps for Microsoft 365",
    description:
      "Responsive portals, Progressive Web Apps and React Native apps with offline sync to SharePoint and Dataverse.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
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
          name: "Microsoft 365 API Integration",
          item: PAGE_URL,
        },
      ],
    },

    // ── Service ──
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft 365 API Integration",
      serviceType: "Software integration",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        name: "Australian businesses and government",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft 365 API integration services",
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.description,
          },
        })),
      },
    },

    // ── FAQPage, built from the same data ApiFaq renders ──
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: apiFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
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

      <main>
        <ServiceHero
          title="Microsoft 365 API Integration"
          desktopImage={api}
          mobileImage={apiMob}
          altDesk={HERO_ALT}
          altMob={HERO_ALT}
        />
        <ApiIntro />
        <ApiByProduct />
        <ApiAgents />
        <ApiSurfaces />
        <ApiUseCases />
        <ApiProcess />
        <RelatedLinks
          theme="light"
          eyebrow="Case studies"
          heading="Microsoft integrations we've built"
          text="Real projects where Word, Excel, Power Platform, Access and AI were connected to remove manual work."
          links={caseStudyLinks}
        />
        <ApiFaq />
        <Contact />
      </main>
    </>
  );
};

export default Page;
