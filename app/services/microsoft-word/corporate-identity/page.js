// /services/microsoft-word/corporate-identity/page.js
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
const CorporateIdentityAnatomy = dynamic(
  () => import("./(components)/CorporateIdentityAnatomy"),
);
const CorporateIdentityDrift = dynamic(
  () => import("./(components)/CorporateIdentityDrift"),
);
const CorporateIdentityComparison = dynamic(
  () => import("./(components)/CorporateIdentityComparison"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/corporate-identity";
import faqSchema from "../wordFaqs/corporateSchema";

import identity from "@/public/pageHeros/identity.webp";
import identityMob from "@/public/pageHeros/mob/identityMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity";
const PAGE_TITLE = "Word Document Corporate Identity";
const PAGE_DESCRIPTION =
  "Professional corporate identity protection by expert Microsoft Word designers. Ensure brand consistency and document compliance across your organisation.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Design palette for documents";
// Original publish instant (2018-07-15T15:51:37+00:00) expressed in AEST
const DATE_PUBLISHED = "2018-07-16T01:51:37+10:00";
// Set by hand when real content changes (never new Date())
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/sporting-organisation-multi-brand-word-template",
    linkText: "View the Master Template approach",
    title:
      "One Word Master Template and a colour theme for every discipline's brand",
    description:
      "A national sporting organisation runs several disciplines under one parent brand, each with its own colours. We built a single Word Master Template with a suite of discipline colour themes, so sub-templates pick up the right brand colours across covers, styles, numbering and tables. We also added more than 30 brand colours beyond Word's standard colour theme and trained the client's team to manage the templates.",
    image: "/case-studies/theme-swap-sample.webp",
    imageAlt:
      "Word colour themes for each discipline of a national sporting organisation",
  },
  {
    href: "/case-studies/advisory-branding-template-rollout",
    linkText: "Explore the Formatting tab",
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
          name: "Corporate Identity",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Corporate Identity Protection",
      provider: {
        "@id": `${SITE_URL}#organization`,
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
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <CorporateIdentityAnatomy />
      <CorporateIdentityDrift />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Template solutions we've delivered"
        links={caseStudies}
      />
      <CorporateIdentityComparison />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
