// app/services/microsoft-office-365/copilot/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static imports — above the fold
import ServiceHero from "../../../../components/ServiceHero";
import CopilotIntro from "./(components)/CopilotIntro";

// Dynamically imported — below the fold
const CopilotApps = dynamic(() => import("./(components)/CopilotApps"));
const CopilotValue = dynamic(() => import("./(components)/CopilotValue"));
const CopilotDelivery = dynamic(() => import("./(components)/CopilotDelivery"));
const CopilotLicensing = dynamic(
  () => import("./(components)/CopilotLicensing"),
);
const CopilotCta = dynamic(() => import("./(components)/CopilotCta"));
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);
const Contact = dynamic(() => import("../../../../components/Contact"));

// Schema generators shared across all pages
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

// Hero images
import copilotDesk from "../../../../public/pageHeros/copilot.webp";
import copilotMob from "../../../../public/pageHeros/mob/copilotMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-office-365/copilot";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),

    // ── Service ──────────────────────────────
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft 365 Copilot Consulting",
      serviceType: "Microsoft 365 Copilot Consulting",
      description:
        "Expert Microsoft 365 Copilot consulting, deployment and training for Australian businesses. We help your team get real value from Copilot without the Ai Hype.",
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: "https://www.officeexperts.com.au",
        telephone: "1300102810",
        email: "consult@officeexperts.com.au",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Copilot Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copilot Readiness Assessment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copilot Deployment and Configuration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copilot Training and Adoption",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ongoing Copilot Support and Optimisation",
            },
          },
        ],
      },
    },

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft 365 Copilot Services Australia | Office Experts",
      description:
        "Expert Microsoft 365 Copilot consulting, deployment and training for Australian businesses. We help your team get real value from Copilot without the Ai Hype.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-19T00:00:00+10:00",
      dateModified: "2026-05-19T00:00:00+10:00",
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

    // ── BreadcrumbList ───────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.officeexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Office 365",
          item: "https://www.officeexperts.com.au/services/microsoft-office-365",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft 365 Copilot",
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <ServiceHero
          title="Microsoft 365 Copilot Consulting and Deployment"
          desktopImage={copilotDesk}
          mobileImage={copilotMob}
          altDesk="Microsoft 365 Copilot integrations"
          altMob="Microsoft 365 Copilot integrations"
        />
        <CopilotIntro />
        <CopilotApps />
        <CopilotValue />
        <CopilotDelivery />
        <CopilotLicensing />
        <RelatedLinks
          theme="light"
          eyebrow="Case Studies"
          heading="Real world examples of AI projects we've built"
          links={[
            {
              href: "https://www.officeexperts.com.au/case-studies/biochar-ai-go-to-market-analysis-uk",
              linkText: "See how the research was automated",
              title:
                "Turning 10,000+ documents into a 70-page go-to-market report in 4 weeks, not 3 months",
              description:
                "The client needed a go-to-market strategy for entering the UK BioChar market, built from research scattered across government databases, competitor material, academic journals and customer sources. We built AI research agents that fed a reusable SharePoint knowledge base, auto-populated a standardised Word report template, and logged every analyst refinement through Power Apps. More than 10,000 documents became a 70-page report in 4 weeks instead of 3 months.",
              image:
                "https://www.officeexperts.com.au/case-studies/biochar-gtm-analysisLg.png",
              imageAlt:
                "AI research agents producing a go-to-market report for a sustainability company",
            },
            {
              href: "https://www.officeexperts.com.au/case-studies/life-insurance-real-time-competitive-intelligence",
              linkText: "Explore the competitor monitoring system",
              title:
                "Cutting competitor response time from two weeks to twelve minutes",
              description:
                "The client's life insurance division was consistently late to competitor pricing and product moves, with intelligence assembled by hand from fragmented sources. We built an AI-driven competitive intelligence system on the client's own Microsoft 365 tenancy that monitors competitors around the clock, scores material changes, and routes prioritised alerts into Teams and internal review workflows. Response time fell from around two weeks to roughly 12 minutes from detection to action.",
              image:
                "https://www.officeexperts.com.au/case-studies/life-insurance-competitive-intelligenceLg.png",
              imageAlt:
                "AI competitive intelligence system for a life insurance division",
            },
          ]}
        />
        <CopilotCta />
        <Contact />
      </main>
    </>
  );
};

export default Page;
