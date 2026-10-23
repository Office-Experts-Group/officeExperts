import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const PageSegment8 = dynamic(() => import("./(components)/PageSegment8"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contents = dynamic(() => import("./(components)/Contents"));

import faqs from "../../faqs/companies-and-organisations";
import faqSchema from "../../faqs/companiesSchema";

import report from "../../public/pageHeros/report.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

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
      "@id": "https://www.wordexperts.com.au/companies-and-organisations",
      url: "https://www.wordexperts.com.au/companies-and-organisations",
      name: "Companies and Organisations | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:09:50+00:00",
      dateModified: "2025-03-12T00:00:00+00:00",
      description:
        "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity and improve efficiency.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/companies-and-organisations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/companies-and-organisations",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/companies-and-organisations#breadcrumb",
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
          name: "Companies and Organisations",
          item: "https://www.wordexperts.com.au/companies-and-organisations",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.wordexperts.com.au/companies-and-organisations#service",
      name: "Corporate Document Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
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
      <Contents />
      <ServiceHero
        title="Companies and Organisations"
        desktopImage={report}
        mobileImage={glassesMob}
        altMob={"glasses on a desk with a graph"}
        altDesk={"meeting with person looking at a computer"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment8 />
      <BlackSegment />
      <PageSegment4 />
      <div style={{ marginBottom: "6rem" }}>
        <PageSegment5 />
      </div>
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Template projects for companies and organisations"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "View the copy/paste macro approach",
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
            href: "https://www.officeexperts.com.au/case-studies/legal-firm-template-suite-formatting-tab",
            linkText: "Explore the legal numbering lists",
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
            href: "https://www.officeexperts.com.au/case-studies/advisory-branding-template-rollout",
            linkText: "Learn more about our Formatting tab",
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
      <FAQSection faqs={faqs} />
      <Contact />
    </section>
  );
};

export default Page;
