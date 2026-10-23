import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/NewServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const IFrame = dynamic(() => import("../(components)/IFrame"));
const Contact = dynamic(() => import("../../components/Contact"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contents = dynamic(() => import("./(components)/Contents"));
const BookSegment = dynamic(() => import("./(components)/BookSegment"));
const BoxSegment = dynamic(() => import("./(components)/BoxSegment"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import faqs from "../../faqs/corporate-solutions";
import faqSchema from "../../faqs/corporateSolutionsSchema";

import templates from "../../public/pageHeros/templates.webp";
import templateMob from "../../public/pageHeros/mob/templateMob.webp";

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
        "https://www.wordexperts.com.au/corporate-global-template-solution",
      url: "https://www.wordexperts.com.au/corporate-global-template-solution",
      name: "Corporate Word Solutions | Microsoft Word Corporate Integrity",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:50:26+00:00",
      dateModified: "2026-03-12T00:00:00+00:00",
      description:
        "Advanced Corporate Word Template Solutions enabling efficient creation of corporate documents, brand consistency and document integrity.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/corporate-global-template-solution#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/corporate-global-template-solution",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/corporate-global-template-solution#breadcrumb",
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
          name: "Corporate Global Template Solution",
          item: "https://www.wordexperts.com.au/corporate-global-template-solution",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/corporate-global-template-solution#service",
      name: "Corporate Global Template Solution",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Advanced Corporate Word Template Solution for enterprise-wide document control and brand consistency",
      serviceType: "Enterprise Document Management",
      category: "Corporate Solutions",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Template Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Global Template Development",
              description: "Creation of enterprise-wide document templates",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Implementation",
              description: "Deployment and integration of corporate templates",
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
      <Contents />
      <ServiceHero
        title="Corporate Global Template Solution"
        desktopImage={templates}
        mobileImage={templateMob}
        altDesk={"word templates"}
        altMob={"word templates"}
      />
      <PageSegmentMain />
      <IFrame />
      <BookSegment />
      <BlackSegment />
      <BoxSegment />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Corporate and multi-brand template projects we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "See the Global Common template",
            title:
              "One shared Global Common template keeping four entities on-brand",
            description:
              "A corporate group needed consistent, professional templates across four related entities without four separate builds. We built a shared Global Common template, a custom Master Template for each entity on top of it, and a custom Formatting tab with a copy/paste macro that strips foreign formatting and applies approved styling automatically.",
            image:
              "https://www.officeexperts.com.au/case-studies/corporate-group-multi-entity-templatesLg.png",
            imageAlt:
              "Master Templates for four entities built from one Global Common template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/sporting-organisation-multi-brand-word-template",
            linkText: "Explore the multi-brand template",
            title:
              "One Word Master Template and a colour theme for every discipline's brand",
            description:
              "A national sporting organisation runs several disciplines under one parent brand, each with its own colours. We built a single Word Master Template with a suite of discipline colour themes, so sub-templates pick up the right brand colours across covers, styles, numbering and tables. We also added more than 30 brand colours beyond Word's standard colour theme and trained the client's team to manage the templates.",
            image:
              "https://www.officeexperts.com.au/case-studies/theme-swap-sample.webp",
            imageAlt:
              "Word colour themes for each discipline of a national sporting organisation",
          },
        ]}
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
