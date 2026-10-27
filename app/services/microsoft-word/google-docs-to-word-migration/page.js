// /services/microsoft-word/google-docs-to-word-migration/page.js

import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import GoogleMigrationIntro from "./(components)/GoogleMigrationIntro";

const GoogleMigrationWhyWord = dynamic(
  () => import("./(components)/GoogleMigrationWhyWord"),
);
const GoogleMigrationFormatting = dynamic(
  () => import("./(components)/GoogleMigrationFormatting"),
);
const GoogleMigrationSolution = dynamic(
  () => import("./(components)/GoogleMigrationSolution"),
);
const GoogleMigrationProcess = dynamic(
  () => import("./(components)/GoogleMigrationProcess"),
);
const GoogleMigrationCta = dynamic(
  () => import("./(components)/GoogleMigrationCta"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import migration from "@/public/pageHeros/migration.webp";
import migrationMob from "@/public/pageHeros/mob/migrationMob.webp";

// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/google-docs-to-word-migration";
const PAGE_TITLE = "Google Docs to Word Migration Services";
const PAGE_DESCRIPTION =
  "Migrate Google Docs to Microsoft Word with formatting intact. Nation-wide team of Word designers with over 25+ years of experience. Free initial consultation.";
const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT = "Migrating birds in a flock";

const DATE_PUBLISHED = "2025-08-15T02:07:45+10:00";
const DATE_MODIFIED = "2026-10-24T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/government-health-master-template-document-transfer",
    linkText: "See the document transfer",
    title:
      "Moving a state health department's entire document set into a new Master Template",
    image: "/case-studies/government-health-master-template-transferLg.png",
    description:
      "We built a rebranded Master Template for a state health department and transferred its entire existing document set into the new format without corrupting any content.",
  },
  {
    href: "/case-studies/legal-firm-word-training-workshop",
    linkText: "See the Word training workshop",
    title: "Training a legal firm's team on Word using their own documents",
    image: "/case-studies/legal-firm-word-training-workshopLg.png",
    description:
      "We delivered a live 90-minute Teams session built around the firm's own documents for around 29 staff, so the new tools made sense from the first day.",
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
          name: "Google Docs to Word Migration",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Google Docs to Word Migration",
      serviceType: "Google Docs to Microsoft Word migration",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
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
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <GoogleMigrationIntro />
      <GoogleMigrationWhyWord />
      <GoogleMigrationFormatting />
      <GoogleMigrationSolution />
      <GoogleMigrationProcess />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Template and document projects we've delivered"
        links={caseStudies}
      />
      <GoogleMigrationCta />
      <Contact />
    </>
  );
};

export default Page;
