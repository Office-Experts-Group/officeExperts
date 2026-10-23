// app/corporate-identity/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
const CorporateIdentityAnatomy = dynamic(
  () => import("./(components)/CorporateIdentityAnatomy"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const CorporateIdentityDrift = dynamic(
  () => import("./(components)/CorporateIdentityDrift"),
);
const CorporateIdentityComparison = dynamic(
  () => import("./(components)/CorporateIdentityComparison"),
);
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/corporate-identity";
import faqSchema from "../../faqs/corporateSchema";

import identity from "../../public/pageHeros/identity.webp";
import identityMob from "../../public/pageHeros/mob/identityMob.webp";

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
      "@id": "https://www.wordexperts.com.au/corporate-identity",
      url: "https://www.wordexperts.com.au/corporate-identity",
      name: "Corporate Identity | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:51:37+00:00",
      dateModified: "2026-09-22T00:00:00+00:00",
      description:
        "Professional corporate identity protection expert Microsoft Word designers. Ensure brand consistency and document compliance across your organisation.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/corporate-identity#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/corporate-identity"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/corporate-identity#breadcrumb",
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
          name: "Corporate Identity",
          item: "https://www.wordexperts.com.au/corporate-identity",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/corporate-identity#service",
      name: "Corporate Identity Protection",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word template solutions for corporate identity protection and brand consistency",
      serviceType: "Corporate Document Services",
      areaServed: {
        "@type": "Country",
        name: "Australia",
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
        title="Corporate Identity"
        desktopImage={identity}
        mobileImage={identityMob}
        altDesk={"Design pallette for documents"}
        altMob={"Design pallette for documents"}
      />
      <CorporateIdentityAnatomy />
      <CorporateIdentityDrift />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Template solutions we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/sporting-organisation-multi-brand-word-template",
            linkText: "View the Master Template approach",
            title:
              "One Word Master Template and a colour theme for every discipline's brand",
            description:
              "A national sporting organisation runs several disciplines under one parent brand, each with its own colours. We built a single Word Master Template with a suite of discipline colour themes, so sub-templates pick up the right brand colours across covers, styles, numbering and tables. We also added more than 30 brand colours beyond Word's standard colour theme and trained the client's team to manage the templates.",
            image:
              "https://www.officeexperts.com.au/case-studies/theme-swap-sample.webp",
            imageAlt:
              "Word colour themes for each discipline of a national sporting organisation",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/advisory-branding-template-rollout",
            linkText: "Explore the Formatting tab",
            title:
              "Rebuilding a full Word template suite to lock a new brand in, not just apply it",
            description:
              "While updating its branding, the client's Word templates kept breaking, with formatting corruption and staff freely overriding brand elements. We rebuilt the suite from a single Master Template with eleven sub-templates, added a custom Formatting tab that locks down font and font-size controls, and built branded Quick Parts for cover pages and other template elements.",
            image:
              "https://www.officeexperts.com.au/case-studies/red-fox-advisory-brand-templatesLg.png",
            imageAlt:
              "Branded Word template suite built from a single Master Template",
          },
        ]}
      />
      <CorporateIdentityComparison />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
