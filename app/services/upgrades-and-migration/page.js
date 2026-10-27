// app/services/upgrades-and-migration/page.js
import React from "react";
import dynamic from "next/dynamic";

// ── Above the fold: normal imports so they render in the first HTML chunk ──
import ServiceHero from "@/components/ServiceHero";
import MigrationHero from "./(components)/MigrationHero";

// Hero images, statically imported so Next.js knows their dimensions
import upgrades from "@/public/pageHeros/upgrades.webp";
import upgradesMob from "@/public/pageHeros/mob/upgradesMob.webp";

// Shared schema builders used across every service page

// ── Below the fold: dynamic imports to split the JS bundle ──
const MigrationProblem = dynamic(
  () => import("./(components)/MigrationProblem"),
);
const MigrationStack = dynamic(() => import("./(components)/MigrationStack"));
const MigrationWord = dynamic(() => import("./(components)/MigrationWord"));
const MigrationPaths = dynamic(() => import("./(components)/MigrationPaths"));
const MigrationChallenges = dynamic(
  () => import("./(components)/MigrationChallenges"),
);
const MigrationScenarios = dynamic(
  () => import("./(components)/MigrationScenarios"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL =
  "https://www.officeexperts.com.au/services/upgrades-and-migration";
const PAGE_TITLE = "Microsoft Office Upgrades & Migration Services";

const PAGE_DESCRIPTION =
  "Office upgrades and migration across Australia. We modernise legacy Word templates, Excel workbooks and Access databases for Microsoft 365, SQL Server and Azure.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Upgrading Microsoft Office";

const DATE_PUBLISHED = "2024-10-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-10-26T00:00:00+11:00";

// ── Related case studies ──────────────────────────────────
// Related case studies, each one an upgrade or migration project
const relatedLinks = [
  {
    href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
    title: "Access 2000 database migrated to Azure SQL",
    description:
      "A VM-locked Access 2000 booking system moved to Azure SQL Server, with a new front end and a Next.js website that loads 10x faster.",
    linkText: "See the Access to Azure migration",
    image: "/case-studies/film-crew-booking-system-rebuildLg.png",
  },
  {
    href: "/case-studies/automated-proposal-generation-in-microsoft",
    title: "Proposal database upgraded from Access to SQL Server",
    description:
      "An Access database that generates 50+ page Word proposals, quotes and contracts, later migrated to a SQL Server back end as the workload grew.",
    linkText: "See the SQL Server upgrade",
    image: "/case-studies/windowline-proposals-databaseLg.png",
  },
  {
    href: "/case-studies/community-services-excel-consolidation-rebuild",
    title: "400MB linked spreadsheet rebuilt with Power Query",
    description:
      "Four location workbooks and a 400MB linked file replaced with a row-based template, with all historical data migrated into the new structure.",
    linkText: "See the Excel rebuild",
    image: "/case-studies/community-services-excelLg.png",
  },
  {
    href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
    title: "AI proposal tool migrated inside the Azure tenant",
    description:
      "An AI assistant that drafts proposals into the real Word template, moved off an external stack onto Azure SQL, App Service and Entra ID.",
    linkText: "See the Azure tenant migration",
    image: "/case-studies/internal-ai-proposal-assistant.png",
  },
  {
    href: "/case-studies/government-health-master-template-document-transfer",
    title: "Entire document set moved into a new Master Template",
    description:
      "A state health department's existing Word documents transferred into a rebranded Master Template without corrupting content.",
    linkText: "See the document transfer",
    image: "/case-studies/government-health-master-template-transferLg.png",
  },
  {
    href: "/case-studies/professional-services-sharepoint-foundation-workshops",
    title: "Shared logins moved onto a SharePoint foundation",
    description:
      "A team running email, files and calendar through one shared login moved onto a structured SharePoint site with a proper access model.",
    linkText: "See the SharePoint move",
    image: "/case-studies/professional-services-sharepoint-foundationLg.png",
  },
];

// ── Service offers ────────────────────────────────────────
// Each platform we upgrade or migrate, listed in the OfferCatalog below
const SERVICE_OFFERS = [
  {
    name: "Microsoft Word upgrades and migration",
    description:
      "Legacy .doc and .dot files converted, Word templates rebuilt, macros made 64-bit safe, and template distribution moved to SharePoint and Teams.",
  },
  {
    name: "Microsoft Excel upgrades and migration",
    description:
      "Linked and oversized workbooks rebuilt with Power Query, Power Pivot or a proper database back end.",
  },
  {
    name: "Microsoft Access to SQL Server and Azure migration",
    description:
      "Access back ends migrated to SQL Server or Azure SQL, with front ends modernised or rebuilt as web applications or Power Apps.",
  },
  {
    name: "Microsoft 365 and SharePoint migration",
    description:
      "File shares, shared logins and document libraries moved onto a structured SharePoint, OneDrive and Teams foundation.",
  },
  {
    name: "Power Platform transformation",
    description:
      "Legacy apps and manual processes replaced with Power Apps, Power Automate and Power BI.",
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
      mainEntity: { "@id": `${PAGE_URL}#service` },
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
          name: "Upgrades and Migration",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Office Upgrades and Migration",
      serviceType: "Software upgrade and data migration consulting",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Australian businesses, government departments and not-for-profits",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Upgrade and migration services",
        itemListElement: SERVICE_OFFERS.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.description,
            provider: { "@id": `${SITE_URL}#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
          },
        })),
      },
    },
    {
      // Case studies shown on the page, so search engines can tie the
      // service to real delivered work
      "@type": "ItemList",
      "@id": `${PAGE_URL}#case-studies`,
      name: "Upgrade and migration case studies",
      itemListElement: relatedLinks.map((link, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: link.title,
        url: `${SITE_URL}${link.href}`,
      })),
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
        title="Upgrades and Migration"
        desktopImage={upgrades}
        mobileImage={upgradesMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <MigrationHero />
      <MigrationProblem />
      <MigrationStack />
      <MigrationWord />
      <MigrationPaths />
      <MigrationChallenges />
      <MigrationScenarios />
      <RelatedLinks
        theme="light"
        eyebrow="Case studies"
        heading="Upgrades and migrations we've delivered"
        text="From Access 2000 databases on a locked VM to entire Word document sets moved into a new Master Template, here's what modernisation looks like in practice."
        links={relatedLinks}
      />
      <Contact />
    </>
  );
};

export default Page;
