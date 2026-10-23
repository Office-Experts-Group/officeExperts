// /services/microsoft-word/companies-and-organisations/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import CompaniesIntro from "./(components)/CompaniesIntro";

const CompaniesSolution = dynamic(
  () => import("./(components)/CompaniesSolution"),
);
const CompaniesCreation = dynamic(
  () => import("./(components)/CompaniesCreation"),
);
const CompaniesHeadaches = dynamic(
  () => import("./(components)/CompaniesHeadaches"),
);
const CompaniesControl = dynamic(
  () => import("./(components)/CompaniesControl"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/companies-and-organisations";
import faqSchema from "../wordFaqs/companiesSchema";

import companies from "@/public/pageHeros/companies.webp";
import companiesMob from "@/public/pageHeros/mob/companiesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/companies-and-organisations";
const PAGE_TITLE = "Word Template Designers | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity.";
const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT_DESKTOP = "word document templates design";
const HERO_ALT_MOBILE = "word document templates design";

const DATE_PUBLISHED = "2018-07-16T02:09:50+10:00";
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/corporate-group-multi-entity-master-template-suite",
    linkText: "View the copy/paste macro approach",
    title: "One shared Global Common template keeping four entities on-brand",
    description:
      "A corporate group needed consistent, professional templates across four related entities without four separate builds. We built a shared Global Common template, a custom Master Template for each entity on top of it, and a custom Formatting tab with a copy/paste macro that strips foreign formatting and applies approved styling automatically.",
    image: "/case-studies/corporate-group-multi-entity-templatesLg.png",
    imageAlt:
      "Master Templates for four entities built from one Global Common template",
  },
  {
    href: "/case-studies/legal-firm-template-suite-formatting-tab",
    linkText: "Explore the legal numbering lists",
    title:
      "Locking a law firm's style guide into templates staff couldn't quietly override",
    description:
      "Staff at a legal firm were editing documents to suit their own preferences rather than following the firm's style guide. We built a full document suite around the guide, built the firm's legal numbering lists into the templates, and added our custom Formatting tab for one-click access to them while locking down formatting controls.",
    image: "/case-studies/legal-firm-template-formatting-tabLg.png",
    imageAlt:
      "Word template suite and Formatting tab built around a legal firm's style guide",
  },
  {
    href: "/case-studies/advisory-branding-template-rollout",
    linkText: "Learn more about our Formatting tab",
    title:
      "Rebuilding a full Word template suite to lock a new brand in, not just apply it",
    description:
      "While updating its branding, the client's Word templates kept breaking, with formatting corruption and staff freely overriding brand elements. We rebuilt the suite from a single Master Template with eleven sub-templates, added a custom Formatting tab that locks down font and font-size controls, and built branded Quick Parts for cover pages and other template elements.",
    image: "/case-studies/red-fox-advisory-brand-templatesLg.png",
    imageAlt: "Branded Word template suite built from a single Master Template",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: { "@id": `${SITE_URL}#website` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
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
          name: "Companies and Organisations",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Corporate Document Solutions",
      provider: { "@id": `${SITE_URL}#organization` },
      description:
        "Professional Microsoft Word template and document solutions for companies and organisations",
      serviceType: "Business Solutions",
      category: "Document Management",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Corporate organisations and businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Templates",
              description: "Custom template development for organisations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Protection",
              description: "Document controls for brand consistency",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Standardisation",
              description: "Enterprise-wide document standards",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Optimisation",
              description:
                "Business process improvement through document automation",
            },
          },
        ],
      },
    },
  ],
};

const Page = () => {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Companies and Organisations"
        desktopImage={companies}
        mobileImage={companiesMob}
        altMob={HERO_ALT_MOBILE}
        altDesk={HERO_ALT_DESKTOP}
      />
      <CompaniesIntro />
      <CompaniesSolution />
      <CompaniesCreation />
      <CompaniesHeadaches />
      <CompaniesControl />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Template projects for companies and organisations"
        links={caseStudies}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </section>
  );
};

export default Page;
