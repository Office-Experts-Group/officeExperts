// app/copilot-and-ai-templates/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: loaded statically. Replaces ServiceHero (no stock imagery).
import ServiceHero from "../../components/ServiceHero";
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
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/copilot-and-ai-templates";
import faqSchema from "../../faqs/copilotAiTemplatesSchema";

import AiWord from "../../public/pageHeros/AiWord.webp";
import AiWordMob from "../../public/pageHeros/mob/AiWordMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const PAGE_URL = "https://www.wordexperts.com.au/copilot-and-ai-templates";

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
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Copilot & AI-Ready Word Templates | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2026-09-28T00:00:00+00:00",
      dateModified: "2026-09-28T00:00:00+00:00",
      description:
        "AI-ready Microsoft Word templates that Copilot can understand and fill, plus custom AI agents for document automation. Australian Word specialists since 2000.",
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
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Copilot & AI Templates",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI-Ready Word Templates and Custom AI Agents",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
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
        altDesk={"Ai in Word documents"}
        altMob={"Ai in Word documents"}
      />
      <AiTemplatesHero />
      <AiTemplatesReality />
      <AiTemplatesRogue />
      <AiTemplatesReady />
      <AiTemplatesComparison />
      <AiTemplatesAgents />
      <AiTemplatesProcess />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
