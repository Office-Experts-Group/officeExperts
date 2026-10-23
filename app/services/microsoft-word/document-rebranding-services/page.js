import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const PageSegmentDropdowns = dynamic(
  () => import("./(components)/PageSegmentDropdowns"),
);
const Contact = dynamic(() => import("../../components/Contact"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import rebrand from "../../public/pageHeros/rebrand.webp";
import rebrandingMob from "../../public/pageHeros/mob/rebrandingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
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
      "@id": "https://www.wordexperts.com.au/document-rebranding-services",
      url: "https://www.wordexperts.com.au/document-rebranding-services",
      name: "Document Rebranding Services | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2025-04-30T15:51:37+00:00",
      dateModified: "2025-10-28T00:00:00+00:00",
      description:
        "Our Microsoft Word designers create custom templates with brand-consistent formatting and professional rebranding services.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/document-rebranding-services#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/document-rebranding-services",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/document-rebranding-services#breadcrumb",
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
          item: "https://www.wordexperts.com.au/document-rebranding-services",
        },
      ],
    },
  ],
};
const page = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Document Rebranding Services"
        desktopImage={rebrand}
        mobileImage={rebrandingMob}
        altDesk={"Rebuild and Rebrand"}
        altMob={"alarm clock with time to rebranding"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <PageSegment5 />
      <PageSegmentDropdowns />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Document rebranding projects we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/advisory-branding-template-rollout",
            linkText: "View the template suite rebuild",
            title:
              "Rebuilding a full Word template suite to lock a new brand in, not just apply it",
            description:
              "While updating its branding, the client's Word templates kept breaking, with formatting corruption and staff freely overriding brand elements. We rebuilt the suite from a single Master Template with eleven sub-templates, added a custom Formatting tab that locks down font and font-size controls, and built branded Quick Parts for cover pages and other template elements.",
            image:
              "https://www.officeexperts.com.au/case-studies/red-fox-advisory-brand-templatesLg.png",
            imageAlt:
              "Branded Word template suite built from a single Master Template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-health-master-template-document-transfer",
            linkText: "See the document transfer process",
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
            linkText: "Read about the full template rebuild",
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
      <Contact />
    </main>
  );
};

export default page;
