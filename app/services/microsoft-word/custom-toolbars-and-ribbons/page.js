import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const BulletPoints = dynamic(() => import("./(components)/BulletPoints"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import faqs from "../../faqs/automation";
import faqSchema from "../../faqs/customToolbarsSchema";

import puzzle from "../../public/pageHeros/puzzle.webp";
import puzzleMob from "../../public/pageHeros/mob/puzzleMob.webp";

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
      "@id": "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
      url: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
      name: "Advanced Customer Toolbars / Ribbons | Custom Toolbar Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:04:37+00:00",
      dateModified: "2025-09-09T00:00:00+00:00",
      description:
        "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars tailored to your business needs.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/custom-toolbars-and-ribbons#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/custom-toolbars-and-ribbons#breadcrumb",
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
          name: "Custom Toolbars and Ribbons",
          item: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Custom Toolbars and Ribbons"
        desktopImage={puzzle}
        mobileImage={puzzleMob}
        altDesk={"people holding large puzzle pieces"}
        altMob={"people holding large puzzle pieces"}
      />
      <PageSegmentMain />
      <div style={{ marginBottom: "6rem" }}>
        <Segment4Repeat />
      </div>
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Word ribbon projects we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/legal-firm-template-suite-formatting-tab",
            linkText: "See the style guide templates",
            title:
              "Locking a law firm's style guide into templates staff couldn't quietly override",
            description:
              "Staff at a legal firm were editing documents to suit their own preferences rather than following the firm's style guide. We built a full document suite around the guide, built the firm's legal numbering lists into the templates, and added our custom Formatting tab for one-click access to them while locking down formatting controls.",
            image:
              "https://www.officeexperts.com.au/case-studies/legal-firm-template-formatting-tabLg.png",
            imageAlt:
              "Word template suite and Formatting tab built around a legal firm's style guide",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-department-enterprise-office-template-suite",
            linkText: "See the custom Word ribbon",
            title:
              "A custom Word ribbon that stops corporate templates breaking under everyday use",
            description:
              "After a major brand refresh, a state government department needed its Office environment modernised. We redesigned 17 enterprise Word templates, built a custom Formatting Control Tab that enforces approved styles, tables and numbering, and added controlled copy-and-paste with a one-click Styles Clean Up tool. The same project delivered a PowerPoint framework with 10 precinct-specific themes.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-enterprise-office-templatesLg.png",
            imageAlt:
              "Custom Word ribbon and enterprise templates for a state government department",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "Explore the four-entity suite",
            title:
              "One shared Global Common template keeping four entities on-brand",
            description:
              "A corporate group needed consistent, professional templates across four related entities without four separate builds. We built a shared Global Common template, a custom Master Template for each entity on top of it, and a custom Formatting tab with a copy/paste macro that strips foreign formatting and applies approved styling automatically.",
            image:
              "https://www.officeexperts.com.au/case-studies/corporate-group-multi-entity-templatesLg.png",
            imageAlt:
              "Master Templates for four entities built from one Global Common template",
          },
        ]}
      />
      <BulletPoints />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
