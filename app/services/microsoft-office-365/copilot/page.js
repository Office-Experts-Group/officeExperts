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
        <CopilotCta />
        <Contact />
      </main>
    </>
  );
};

export default Page;
