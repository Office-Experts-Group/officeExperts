import React from "react";
import dynamic from "next/dynamic";

import BrandedTemplates from "./(components)/BrandedTemplates";

const Contact = dynamic(() => import("@/components/Contact"));
const WhyChooseTemplates = dynamic(
  () => import("./(components)/WhyChooseTemplates"),
);
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const BrandingServices = dynamic(
  () => import("./(components)/BrandingServices"),
);
const CompareContainer = dynamic(
  () => import("./(components)/CompareContainer"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const BoxBentoSegment = dynamic(() => import("./(components)/BoxBentoSegment"));

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/brand-template";
const PAGE_TITLE = "Microsoft Word Brand Template Services | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Microsoft Word brand template services. Custom document templates that ensure consistent branding and a professional appearance.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2018-07-16T02:09:50+10:00";
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/advisory-branding-template-rollout",
    linkText: "See how we locked in the brand",
    title:
      "Rebuilding a full template suite to lock a new brand in, not just apply it",
    description:
      "The client's Word templates kept breaking, and staff could freely override brand fonts and sizes. We rebuilt the suite from one Master Template into eleven sub-templates, added a custom Formatting tab that locks down font controls, and built branded Quick Parts for cover pages and other template elements.",
    image: "/case-studies/red-fox-advisory-brand-templatesLg.png",
    imageAlt: "Office Experts Brand Templates",
  },
  {
    href: "/case-studies/government-department-enterprise-office-template-suite",
    title: "17 enterprise Word templates for a state department",
    linkText: "Explore the enterprise template suite",
    description:
      "After a major brand refresh, the client needed its Office environment brought into line, with pasted content regularly breaking the corporate styles. We redesigned 17 enterprise Word templates, built a custom Formatting Control tab that enforces approved styles, and delivered a PowerPoint framework with 10 precinct-specific themes.",
    image: "/case-studies/government-enterprise-office-templatesLg.webp",
    imageAlt: "Office Experts Brand Templates",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
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
          name: "Microsoft Word",
          item: `${SITE_URL}/services/microsoft-word`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Word Brand Templates",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Word Brand Template Services",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      description:
        "Professional Microsoft Word brand template service that creates custom templates aligned with your business identity, including letterheads, reports, proposals, and more to ensure consistent branding across all your business documentation.",
      serviceType: "Document Branding",
      category: "Brand Template Design",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Businesses and Organizations",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Word Brand Template Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Design & Creation",
              description:
                "Custom template development aligned with brand identity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rebranding & Style Guide Implementation",
              description: "Brand consistency across all document templates",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Word Functionality",
              description: "Professional document automation and styling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Document Templates",
              description:
                "Letterheads, reports, proposals and presentation templates",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        price: "",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
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
      <main>
        <BrandedTemplates />
        <PageSegment4 />
        <WhyChooseTemplates />
        <CompareContainer />
        <BoxBentoSegment />
        <BrandingServices />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Some Word template projects"
          headingAccent="we've delivered"
          links={caseStudies}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
