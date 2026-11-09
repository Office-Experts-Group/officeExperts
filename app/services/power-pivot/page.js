// app/services/power-pivot/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static imports: above the fold
import PowerPivotHero from "./(components)/PowerPivotHero";
import PowerPivotIntro from "./(components)/PowerPivotIntro";

// Dynamic imports: below the fold
const PowerPivotCapabilities = dynamic(
  () => import("./(components)/PowerPivotCapabilities"),
);
const PowerPivotSigns = dynamic(() => import("./(components)/PowerPivotSigns"));
const PowerPivotDax = dynamic(() => import("./(components)/PowerPivotDax"));
const PowerPivotServices = dynamic(
  () => import("./(components)/PowerPivotServices"),
);
const PowerPivotPair = dynamic(() => import("./(components)/PowerPivotPair"));
const PowerPivotCaseStudy = dynamic(
  () => import("./(components)/PowerPivotCaseStudy"),
);
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

// FAQ copy and its matching FAQPage schema
import faqs from "@/faqs/pivot";
import faqSchema from "@/faqs/pivotSchema";

const PAGE_URL = "https://www.officeexperts.com.au/services/power-pivot";
const PAGE_TITLE = "Power Pivot Consulting and Data Modelling Services";
const PAGE_DESCRIPTION =
  "Power Pivot consultants for Australian businesses. We build data models, DAX measures and fast, dashboard-ready reports in Excel and Power BI.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2025-04-10T00:00:00+10:00";
const DATE_MODIFIED = "2026-11-09T00:00:00+11:00";

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
          name: "Power Pivot",
          item: PAGE_URL,
        },
      ],
    },
    // ── Service ──────────────────────────────
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Power Pivot Consulting",
      serviceType: "Power Pivot data modelling and consulting",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Power Pivot Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Power Pivot Data Modelling and Relationships",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "DAX Formulas and Business Logic",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Power Query and Power Pivot Integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Power Pivot Performance Optimisation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dashboard-Ready Excel and Power BI Reporting",
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

      <main>
        <PowerPivotHero />
        <PowerPivotIntro />
        <PowerPivotCapabilities />
        <PowerPivotSigns />
        <PowerPivotDax />
        <PowerPivotServices />
        <PowerPivotPair />
        <PowerPivotCaseStudy />
        <div style={{ marginTop: "6rem" }}>
          <FAQSection faqs={faqs} />
        </div>
        <Contact />
      </main>
    </>
  );
};

export default Page;
