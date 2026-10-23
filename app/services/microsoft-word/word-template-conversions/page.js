import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment4Repeat = dynamic(
  () => import("./(components)/PageSegment4Repeat"),
);
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/template-conversions";

import penPoint from "../../public/pageHeros/penPoint.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

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
      "@id": "https://www.wordexperts.com.au/word-template-conversions",
      url: "https://www.wordexperts.com.au/word-template-conversions",
      name: "Word template conversions | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:25:35+00:00",
      dateModified: "2025-07-21T00:00:00+00:00",
      description:
        "Professional Word template conversions in Australia. We convert Adobe, InDesign and PDF files into fully functional, on-brand Microsoft Word templates.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-template-conversions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/word-template-conversions"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-template-conversions#breadcrumb",
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
          name: "Word Template Conversions",
          item: "https://www.wordexperts.com.au/word-template-conversions",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Word Template Conversions"
        desktopImage={penPoint}
        mobileImage={seatMob}
        altMob="Empty office environment"
        altDesk="person pointing at a computer"
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment4Repeat />
      <PageSegment5 />
      <ExpertsAwait />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Template conversion and document transfer projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/government-health-master-template-document-transfer",
            linkText: "Explore the rebranded Master Template",
            title:
              "Rebranding a Master Template, then transferring a whole document set into it",
            description:
              "During an organisation-wide branding update, a state government health department needed a new Master Template for its intranet and every existing document brought across. We built the template with a Quick Part for a repeating element, then used our in-house transfer process to move the document set into it without corrupting content, followed by manual refinement for full brand alignment.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-health-master-template-transferLg.png",
            imageAlt:
              "Rebranded Master Template and transferred documents for a state government health department",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/environmental-consultancy-word-template-rebuild",
            linkText: "Explore the structural fix",
            title:
              "Rebuilding a beautifully designed template that Word itself couldn't cope with",
            description:
              "The client's new Word templates looked exactly right, but hadn't been built the way Word needs to be built, which made them inefficient to use and prone to formatting errors. We rebuilt the entire suite on proper styles, headings and page structure, keeping the approved design intact.",
            image:
              "https://www.officeexperts.com.au/case-studies/environmental-consultancy-word-template-rebuildLg.png",
            imageAlt:
              "Word template suite rebuilt on proper styles and page structure",
          },
        ]}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
