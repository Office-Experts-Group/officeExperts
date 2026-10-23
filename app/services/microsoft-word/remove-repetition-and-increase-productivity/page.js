import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegmentImpact = dynamic(
  () => import("./(components)/PageSegmentImpact"),
);
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const Contact = dynamic(() => import("../../components/Contact"));

import repetition from "../../public/pageHeros/repetition.webp";
import repetitionMob from "../../public/pageHeros/mob/repetitionMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

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
      "@id":
        "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
      url: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
      name: "Word Document Automation Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:11:12+00:00",
      dateModified: "2026-06-17T00:00:00+00:00",
      description:
        "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity#breadcrumb",
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
          name: "Word Document Automation",
          item: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity#service",
      name: "Word Document Automation",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.",
      category: "Productivity Solutions",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Word Automation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Macro Development",
              description:
                "Custom macro development for Word document automation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Building Blocks & Quick Parts",
              description: "Pre-built reusable document element libraries",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Automation",
              description: "Automated document template solutions for teams",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Header & Footer Automation",
              description: "Dynamic header and footer content automation",
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
      <ServiceHero
        title="Word Document Automation"
        desktopImage={repetition}
        mobileImage={repetitionMob}
        altDesk={"Microsoft Word automation flow"}
        altMob={"Microsoft Word automation flow"}
      />
      <PageSegmentMain />
      <PageSegmentImpact />
      <PageSegment4 />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Projects that removed repetitive document work"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/financial-planning-word-document-builder",
            linkText: "View the report builder",
            title:
              "Building each financial planning report from a pop-up form and a library of ready-made headings",
            description:
              "A financial planning client's reports combine free text with a large library of headings and content in three tiers. We built a Word document builder with a pop-up form for choosing only the items needed, automatic parent headings, custom Heading 3 items that format themselves, and a background library the Administrator maintains and rolls out to staff templates.",
            image:
              "https://www.officeexperts.com.au/case-studies/financial-planning-word-document-builder-libraryLg.webp",
            imageAlt:
              "Word document builder with a pop-up form and heading library for financial planning reports",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/windowline-proposals-database",
            linkText: "Explore the Access to SQL Server build",
            title:
              "Replacing 50-page proposals built with a database-driven document generator",
            description:
              "A window and door installer was assembling proposals, quotes and contracts, often 50 pages or more, by hand from paper records and Excel. We designed an Access database, later migrated to SQL Server, where staff select the sections they need and the full Word document is generated with project and client details, quote tables, data and images.",
            image:
              "https://www.officeexperts.com.au/case-studies/windowline-proposals-databaseLg.png",
            imageAlt:
              "Access database generating long Word proposals and contracts",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
