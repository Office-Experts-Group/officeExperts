// app/services/business-analysis/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../components/ServiceHero";
import BusinessAnalysisHero from "./(components)/BusinessAnalysisHero";

// Below-the-fold page sections
const BusinessAnalysisProblem = dynamic(
  () => import("./(components)/BusinessAnalysisProblem"),
);
const BusinessAnalysisValue = dynamic(
  () => import("./(components)/BusinessAnalysisValue"),
);
const BusinessAnalysisAreas = dynamic(
  () => import("./(components)/BusinessAnalysisAreas"),
);
const BusinessAnalysisProcess = dynamic(
  () => import("./(components)/BusinessAnalysisProcess"),
);
const BusinessAnalysisComparison = dynamic(
  () => import("./(components)/BusinessAnalysisComparison"),
);
const BusinessAnalysisProof = dynamic(
  () => import("./(components)/BusinessAnalysisProof"),
);

// Shared site components
const FAQSection = dynamic(() => import("../../../components/FAQSection"));
const Contact = dynamic(() => import("../../../components/Contact"));

// FAQ content and matching FAQPage schema (schema is generated from the content)
import faqs from "../../../faqs/business-analysis";
import faqSchema from "../../../faqs/businessAnalysisSchema";

import ba from "../../../public/pageHeros/business-analysis.webp";
import baMob from "../../../public/pageHeros/mob/business-analysisMob.webp";

// Shared schema builders used across the group's sites
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/business-analysis`;

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      SITE_URL,
      "Office Experts Group",
      "Your Microsoft Technology Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Business Analysis & Solution Design | Office Experts Group",
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: "2026-09-30T00:00:00+00:00",
      dateModified: "2026-09-30T00:00:00+00:00",
      description:
        "Australian business analysis and solution design since 2000. We map your workflows before anything is built: Microsoft 365, Power Platform, code and AI.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
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
          name: "Business Analysis",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Business Analysis & Solution Design",
      description:
        "Business analysis and solution design across Microsoft 365, Power Platform, Azure and custom development: current-state workflow mapping, requirements and constraints, solution architecture including AI, and a staged roadmap.",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      serviceType: "Business Analysis",
      category: "Business Consulting",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Analysis Deliverables",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Current-State Workflow Mapping",
              description:
                "Mapping how information moves between people, systems and departments, including workarounds and exceptions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Requirements & Constraints Analysis",
              description:
                "Capturing what the solution must do and the licensing, security, compliance, integration and budget constraints on it",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Solution Architecture",
              description:
                "Platform-neutral options with cost of ownership and a clear recommendation, including where AI fits and how it is governed",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Staged Roadmap",
              description:
                "A delivery plan broken into stages that each deliver value early, with defined scope and outcomes",
            },
          },
        ],
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
        title={`Business Analysis & Solution Design`}
        desktopImage={ba}
        mobileImage={baMob}
        altDesk="Business Analysis & Solution Design"
        altMob="Business Analysis & Solution Design"
      />
      <BusinessAnalysisHero />
      <BusinessAnalysisProblem />
      <BusinessAnalysisValue />
      <BusinessAnalysisAreas />
      <BusinessAnalysisProcess />
      <BusinessAnalysisComparison />
      <BusinessAnalysisProof />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
