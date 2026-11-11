// app/microsoft-support-and-training-australia/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static imports: above the fold
import LocationsHero from "./(components)/LocationsHero";
import LocationsGrid from "./(components)/LocationsGrid";

// Dynamic imports: below the fold, split into their own chunks
const LocationsWhy = dynamic(() => import("./(components)/LocationsWhy"));
const LocationsClosing = dynamic(
  () => import("./(components)/LocationsClosing"),
);
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-support-and-training-australia";
const PAGE_TITLE = "Microsoft Support and Training Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Microsoft support and training services across Australia. Our local experts provide customised training, technical support and troubleshooting.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2025-03-14T00:00:00+11:00";
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
          name: "Microsoft Support and Training Australia",
          item: PAGE_URL,
        },
      ],
    },
    // ── Service: nationwide support and training, with the cities served ──
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Support and Training Australia",
      serviceType: "Microsoft support and training",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
        telephone: "1300102810",
        email: "consult@officeexperts.com.au",
      },
      areaServed: [
        { "@type": "Country", name: "Australia" },
        "Sydney",
        "Melbourne",
        "Adelaide",
        "Brisbane",
        "Canberra",
        "Central Coast, NSW",
        "Darwin",
        "Gold Coast",
        "Northern Rivers, NSW",
        "Perth",
        "Richmond",
        "Wollongong",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Support and Training Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Technical Support and Troubleshooting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Customised Microsoft Training",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Microsoft Solution Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "On-site and Remote Microsoft Support",
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

      <main>
        <LocationsHero />
        <LocationsGrid />
        <LocationsWhy />
        <LocationsClosing />
        <Contact />
      </main>
    </>
  );
};

export default Page;
