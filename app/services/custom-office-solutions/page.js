// app/services/custom-office-solutions/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: imported normally so the H1 and intro ship in the first chunk
import CustomIntro from "./(components)/CustomIntro";

// Below the fold: split into separate chunks with next/dynamic.
// dynamic() keeps SSR on by default, so crawlers still get the full HTML.
const CustomByApp = dynamic(() => import("./(components)/CustomByApp"));
const CustomDesign = dynamic(() => import("./(components)/CustomDesign"));
const CustomAutomation = dynamic(
  () => import("./(components)/CustomAutomation"),
);
const CustomTechChooser = dynamic(
  () => import("./(components)/CustomTechChooser"),
);
const CustomFutureProof = dynamic(
  () => import("./(components)/CustomFutureProof"),
);
const CustomProcess = dynamic(() => import("./(components)/CustomProcess"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// Shared schema blocks used on every service page
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/custom-office-solutions";
const PAGE_TITLE = "Custom Microsoft Office Solutions | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Word templates, Excel workbooks, Access databases and Outlook automation, built by Australian Office developers since 2000. Call 1300 102 810.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-11-11T00:00:00+11:00";

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
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
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
          name: "Custom Office Solutions",
          item: PAGE_URL,
        },
      ],
    },
    {
      // The services offered on this page, one Offer per area covered in the components
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Custom Microsoft Office Solutions",
      serviceType: "Custom Microsoft Office development",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
        telephone: "1300102810",
        email: "consult@officeexperts.com.au",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Office Solutions",
        itemListElement: [
          "Custom Word template and form design",
          "InDesign to Word conversion",
          "PowerPoint template design",
          "Excel workbook automation",
          "Access database development",
          "Outlook automation and web add-ins",
          "Office add-in development",
          "Office integration with external data and applications",
          "Legacy macro and add-in upgrades",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
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
      <CustomIntro />
      <CustomByApp />
      <CustomDesign />
      <CustomAutomation />
      <CustomTechChooser />
      <CustomFutureProof />
      <CustomProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Custom Office solutions"
        headingAccent="we've delivered"
        links={[
          {
            href: "/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "See the Global Common template",
            title:
              "One shared Global Common template keeping four entities on-brand without four separate rebuilds",
            description:
              "A corporate group needed professional, consistent Word templates across four related entities without building and maintaining each one separately. We built a single Global Common template holding the shared styles and functionality, then a custom Master Template for each entity on top of it. A custom Formatting tab gives staff everyday tools such as custom page layouts, table insertion and style cleanup, and a copy/paste macro strips foreign formatting from pasted content and applies the approved styling.",
            image:
              "/case-studies/corporate-group-multi-entity-templatesLg.webp",
            imageAlt:
              "Custom Word Master Templates for four entities of a corporate group",
          },
          {
            href: "/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "See the costing workbook",
            title:
              "Merging an array of clunky Excel workbooks into one automated costing system",
            description:
              "The client manufactures packaged food products and costed every product through an array of disconnected, in-house Excel workbooks. We rebuilt the system as a single Excel Costing Workbook, with a forms interface for building components and products, automatic cost updates that flow up to every product that uses them, and sale prices, gross and net margins calculated by state. Locked data sheets and an Admin password protect the core costing data.",
            image:
              "/case-studies/food-manufacturer-excel-costing-workbookLg.png",
            imageAlt:
              "Excel costing workbook with forms interface for a food manufacturer",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
