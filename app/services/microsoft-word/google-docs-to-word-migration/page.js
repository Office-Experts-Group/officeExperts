import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const PageSegmentEnd = dynamic(() => import("./(components)/PageSegmentEnd"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));

import migration from "../../public/pageHeros/migration.webp";
import migrationMob from "../../public/pageHeros/mob/migrationMob.webp";

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
      "@id": "https://www.wordexperts.com.au/google-docs-to-word-migration",
      url: "https://www.wordexperts.com.au/google-docs-to-word-migration",
      name: "Google Docs to Microsoft Word Migration Services",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-08-14T16:07:45+00:00",
      dateModified: "2025-08-26T16:07:45+00:00",
      description:
        "Professional Google Docs to Microsoft Word migration services. Seamless document conversion with 100% formatting preservation, custom templates, and enterprise support.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/google-docs-to-word-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/google-docs-to-word-migration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/google-docs-to-word-migration#breadcrumb",
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
          name: "Google Docs to Microsoft Word Migration Services",
          item: "https://www.wordexperts.com.au/google-docs-to-word-migration",
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
        title="Google Docs to Microsoft Word Migration"
        desktopImage={migration}
        mobileImage={migrationMob}
        altDesk={"migrating birds in flight"}
        altMob={"person walking at sunset"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment4 />
      <PageSegmentEnd />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
