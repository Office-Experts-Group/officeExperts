// /services/microsoft-word/mail-merge/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: imported normally so they render in the initial HTML without a split chunk
import ServiceHero from "@/components/ServiceHero";
import MailMergeIntro from "./(components)/MailMergeIntro";

// Below the fold: code-split with next/dynamic (still server-rendered)
const MailMergeOutputs = dynamic(
  () => import("./(components)/MailMergeOutputs"),
);
const MailMergeServices = dynamic(
  () => import("./(components)/MailMergeServices"),
);
const MailMergeFixes = dynamic(() => import("./(components)/MailMergeFixes"));
const MailMergeBeyond = dynamic(() => import("./(components)/MailMergeBeyond"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// Hero images carried over from wordexperts.com.au (copy into this project's public/pageHeros)
import mailMerge from "@/public/pageHeros/merge.webp";
import mailMergeMob from "@/public/pageHeros/mob/mergeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/mail-merge";
const PAGE_TITLE = "Mail Merge Services for Word, Excel and Outlook";
const PAGE_DESCRIPTION =
  "Mail merge set-up, automation and repair. Personalised letters, invoices, labels and emails from Excel, Access or Outlook data.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Word documents being merged with a data list";

// Original publish date carried over from the wordexperts.com.au page
const DATE_PUBLISHED = "2025-11-20T00:00:00+11:00";
const DATE_MODIFIED = "2026-10-26T00:00:00+11:00";

// Individual services, listed in the OfferCatalog below. Mirrors MailMergeServices.jsx.
const SERVICES = [
  {
    name: "Mail merge template creation",
    description:
      "New or rebuilt mail merge templates on a branded Word template, with conditional fields and Australian date, currency and postcode formatting.",
  },
  {
    name: "Mail merge data source linking",
    description:
      "Connecting Word to Excel, Access, Outlook, SQL Server or SharePoint data, and cleaning that data so it merges reliably.",
  },
  {
    name: "Mail merge workflow automation",
    description:
      "VBA automation that splits merges into individually named Word or PDF files, files them into folders and emails each with its own attachment.",
  },
  {
    name: "Mail merge staff training",
    description:
      "Practical training on running, filtering and maintaining mail merges using your own templates and data, in person or over Teams.",
  },
  {
    name: "Mail merge troubleshooting and repair",
    description:
      "Diagnosing and repairing merges that skip records, lose their data source, show field codes or produce incorrectly formatted results.",
  },
  {
    name: "Microsoft 365 mail merge integration",
    description:
      "Centralising templates in SharePoint and generating documents through Power Automate and Microsoft 365 APIs.",
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
      about: {
        "@id": `${PAGE_URL}#service`,
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
          name: "Mail Merge",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Mail Merge Services",
      serviceType: "Mail merge set-up, automation and repair",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      // Check this @id matches the one generateOrganizationSchema() outputs
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses, not-for-profits and government agencies",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mail merge services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
          },
        })),
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
        <ServiceHero
          title="Mail Merge Services"
          desktopImage={mailMerge}
          mobileImage={mailMergeMob}
          altDesk={HERO_ALT}
          altMob={HERO_ALT}
        />
        <MailMergeIntro />
        <MailMergeOutputs />
        <MailMergeServices />
        <MailMergeFixes />
        <MailMergeBeyond />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Automated document generation projects we completed"
          links={[
            {
              href: "/case-studies/financial-planning-word-document-builder",
              linkText: "See the document builder",
              title:
                "Building financial planning reports from a pop-up form and a library of ready-made headings",
              description:
                "A financial planning client's reports combine free text with a large library of headings and content in three tiers. We built a Word document builder with a pop-up form for choosing only the items needed, automatic parent headings, custom Heading 3 items that format themselves, and a background library the Administrator maintains and rolls out to staff templates.",
              image:
                "/case-studies/financial-planning-word-document-builder-libraryLg.webp",
              imageAlt:
                "Word document builder with a pop-up form and heading library for financial planning reports",
            },
            {
              href: "/case-studies/automated-proposal-generation-in-microsoft",
              linkText: "See the proposal generator",
              title:
                "Replacing 50-page proposals built by hand with a database-driven document generator",
              description:
                "A window and door installer was assembling proposals, quotes and contracts, often 50 pages or more, by hand from paper records and Excel. We designed an Access database, later migrated to SQL Server, where staff select the sections they need and the full Word document is generated with project and client details, quote tables, data and images.",
              image: "/case-studies/windowline-proposals-databaseLg.png",
              imageAlt:
                "Access database generating long Word proposals and contracts",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
