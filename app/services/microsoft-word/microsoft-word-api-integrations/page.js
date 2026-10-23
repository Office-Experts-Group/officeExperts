import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const DeskImage = dynamic(() => import("./(components)/DeskImage"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Bullets = dynamic(() => import("./(components)/Bullets"));
const UseCases = dynamic(() => import("./(components)/UseCases"));
const WhyExperts = dynamic(() => import("./(components)/WhyExperts"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import javascript from "../../public/pageHeros/javascript.webp";
import javascriptMob from "../../public/pageHeros/mob/javascriptMob.webp";

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
      "@id": "https://www.wordexperts.com.au/microsoft-word-api-integrations",
      url: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
      name: "Microsoft Word API Development & Integrations | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:09:50+00:00",
      dateModified: "2025-09-24T00:00:00+00:00",
      description:
        "Expert Microsoft Word API development and custom integrations. Connect Word with CRM, SharePoint, databases and business systems for automated document workflows.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/microsoft-word-api-integrations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/microsoft-word-api-integrations",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/microsoft-word-api-integrations#breadcrumb",
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
          name: "API Development & Integrations",
          item: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/microsoft-word-api-integrationss#service",
      name: "Microsoft Word API Development & Integration Services",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word API development and custom integration solutions for business automation",
      serviceType: "Software Development",
      category: "API Development & Integration",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Businesses requiring Word automation and API integrations",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Word API Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Word JavaScript API Development",
              description:
                "Custom Word add-ins and Office JavaScript API solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Graph Integration",
              description:
                "Connect Word with Microsoft 365 ecosystem via Graph API",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business System Integration",
              description: "Connect Word with CRM, ERP, and database systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SharePoint & OneDrive Integration",
              description:
                "Seamless document management and collaboration solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Automation",
              description:
                "Automated document generation and workflow solutions",
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
        title="Microsoft Word API Development & Custom Integrations"
        desktopImage={javascript}
        mobileImage={javascriptMob}
        altMob={"javascript code on a screen"}
        altDesk={"javascript code on a screen"}
      />

      <PageSegmentMain />
      <DeskImage />
      <Bullets />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Word automation projects we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/internal-ai-proposal-assistant-azure-migration",
            linkText: "See the proposal assistant",
            title:
              "Turning call notes and a rate card into a first-pass proposal inside the real Word template",
            description:
              "Proposal drafting relied on re-reading transcripts and copy-pasting fees and consultant details from older proposals. We built a conversational AI assistant that drafts a first-pass proposal directly into the real Word template, with live fee tables, payment milestones and a consultant roster pulled from the current rate card, then migrated it fully inside the Microsoft and Azure tenant.",
            image:
              "https://www.officeexperts.com.au/case-studies/internal-ai-proposal-assistant.png",
            imageAlt: "AI assistant drafting proposals into a Word template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/financial-planning-word-document-builder",
            linkText: "Explore the heading library",
            title:
              "Building each financial planning report from a pop-up form and a library of ready-made headings",
            description:
              "A financial planning client's reports combine free text with a large library of headings and content in three tiers. We built a Word document builder with a pop-up form for choosing only the items needed, automatic parent headings, custom Heading 3 items that format themselves, and a background library the Administrator maintains and rolls out to staff templates.",
            image:
              "https://www.officeexperts.com.au/case-studies/financial-planning-word-document-builder-libraryLg.webp",
            imageAlt:
              "Word document builder with a pop-up form and heading library for financial planning reports",
          },
        ]}
      />
      <PageSegment4 />
      <ExpertsAwait />
      <UseCases />
      <WhyExperts />
      <Contact />
    </>
  );
};

export default Page;
