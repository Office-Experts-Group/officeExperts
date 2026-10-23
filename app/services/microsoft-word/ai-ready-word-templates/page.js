// /services/microsoft-word/ai-ready-word-templates/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: loaded statically
import ServiceHero from "@/components/ServiceHero";
import AiTemplatesHero from "./(components)/AiTemplatesHero";

// Below-the-fold components loaded dynamically (still server-rendered)
const AiTemplatesReality = dynamic(
  () => import("./(components)/AiTemplatesReality"),
);
const AiTemplatesRogue = dynamic(
  () => import("./(components)/AiTemplatesRogue"),
);
const AiTemplatesReady = dynamic(
  () => import("./(components)/AiTemplatesReady"),
);
const AiTemplatesComparison = dynamic(
  () => import("./(components)/AiTemplatesComparison"),
);
const AiTemplatesAgents = dynamic(
  () => import("./(components)/AiTemplatesAgents"),
);
const AiTemplatesProcess = dynamic(
  () => import("./(components)/AiTemplatesProcess"),
);
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/ai-ready-word-templates";
import faqSchema from "../wordFaqs/aiReadyWordTemplatesSchema";

import AiWord from "@/public/pageHeros/AiWord.webp";
import AiWordMob from "@/public/pageHeros/mob/AiWordMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/ai-ready-word-templates";
const PAGE_TITLE = "Copilot & AI-Ready Word Templates | Office Experts";
const PAGE_DESCRIPTION =
  "Make Copilot work properly in Word. Australian Word specialists building AI-ready templates and custom AI agents that keep your formatting and data in line.";
const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT = "AI in Word documents";

const DATE_PUBLISHED = "2026-09-28T10:00:00+10:00";
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

// Offers listed in the Service schema's catalogue
const offers = [
  {
    name: "AI Readiness Review",
    description:
      "Review of Word templates, live documents and AI usage to identify where Copilot and other AI tools are likely to fail",
  },
  {
    name: "AI-Ready Template Development",
    description:
      "Word templates rebuilt with clean styles, titled content controls, locked zones and in-template guidance so Copilot, ChatGPT and Claude can fill them reliably",
  },
  {
    name: "Custom AI Agent Development",
    description:
      "Custom AI agents for document automation, including formatting and brand compliance, invoices and quotes, email triage, proposals and document review",
  },
];

// ── Structured data ────────────────────────────────────────
// No WebSite node here: the site has one, on the root homepage.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
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
      // Entity links help answer engines connect the page to the Copilot cluster
      about: [
        {
          "@type": "SoftwareApplication",
          name: "Microsoft 365 Copilot",
          applicationCategory: "BusinessApplication",
          sameAs: "https://en.wikipedia.org/wiki/Microsoft_Copilot",
        },
        {
          "@type": "SoftwareApplication",
          name: "Microsoft Word",
          applicationCategory: "BusinessApplication",
          sameAs: "https://en.wikipedia.org/wiki/Microsoft_Word",
        },
      ],
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
          name: "Microsoft Word",
          item: `${SITE_URL}/services/microsoft-word`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI-Ready Word Templates",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI-Ready Word Templates and Custom AI Agents",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      description:
        "Microsoft Word template development for Copilot and other AI tools, and custom AI agent development for document automation.",
      serviceType: "AI Document Automation",
      category: "Document Automation",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI and Copilot Services",
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
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="AI Integration in Word"
        desktopImage={AiWord}
        mobileImage={AiWordMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <AiTemplatesHero />
      <AiTemplatesReality />
      <AiTemplatesRogue />
      <AiTemplatesReady />
      <AiTemplatesComparison />
      <AiTemplatesAgents />
      <AiTemplatesProcess />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
