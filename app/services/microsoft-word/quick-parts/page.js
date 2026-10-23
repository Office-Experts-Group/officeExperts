import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Promo = dynamic(() => import("../../components/Promo"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/quick-parts";
import faqSchema from "../../faqs/quickPartsSchema";

import whiteBoard from "../../public/pageHeros/whiteBoard.webp";
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
      "@id": "https://www.wordexperts.com.au/quick-parts",
      url: "https://www.wordexperts.com.au/quick-parts",
      name: "Microsoft Word Document Quick Parts Services | Quick Parts Design Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:26:38+00:00",
      dateModified: "2025-07-30T00:00:00+00:00",
      description:
        "Expert Microsoft Word Quick Parts implementation. Enhance document creation with pre-built content and automated building blocks.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/quick-parts#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/quick-parts"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/quick-parts#breadcrumb",
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
          name: "Quick Parts",
          item: "https://www.wordexperts.com.au/quick-parts",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/quick-parts#service",
      name: "Word Quick Parts Development",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word Quick Parts and Building Blocks implementation services",
      serviceType: "Document Automation",
      category: "Content Management",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Quick Parts Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Building Blocks Development",
              description:
                "Creation and organization of reusable content blocks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Quick Parts Implementation",
              description: "Setup and configuration of Quick Parts galleries",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Management",
              description:
                "Organization and maintenance of document components",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Integration",
              description: "Integration of Quick Parts with document templates",
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
      <ServiceHero
        title="Quick Parts"
        desktopImage={whiteBoard}
        mobileImage={puzzleMob}
        altDesk={"person making an office presentation on a whiteboard"}
        altMob={"people holding large jigsaw puzzle pieces together"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Quick Parts projects we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/advisory-branding-template-rollout",
            linkText: "See how the brand was locked in",
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
            href: "https://www.officeexperts.com.au/case-studies/water-education-program-word-powerpoint-templates",
            linkText: "Explore the Quick Parts and Slide Master",
            title:
              "Turning an InDesign lesson design into Word and PowerPoint templates educators can use",
            description:
              "The client's water education program had a lesson design built in InDesign, but curriculum writers across Western Australia needed to build lessons in Word and PowerPoint. We translated the design into working Word and PowerPoint templates, including Quick Parts for the Word layouts and a PowerPoint Slide Master system with precise placeholders, locked-down brand elements and purpose-built layouts for activities, diagrams and assessment pages.",
            image:
              "https://www.officeexperts.com.au/case-studies/water-education-program-templatesLg.png",
            imageAlt:
              "Word and PowerPoint lesson templates for a water education program",
          },
        ]}
      />
      <PageSegment5 />
      <Promo
        h2="Optimise Document Creation with Quick Parts"
        p="Our Quick Parts solutions allow your team to easily insert prebuilt content blocks, ensuring faster document creation, consistency, and improved productivity across the board."
      />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
