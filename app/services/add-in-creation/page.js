// /services/add-in-creation/page.js
import React from "react";
import dynamic from "next/dynamic";

import AddInHero from "./(components)/AddInHero";

// Below-the-fold components are split into separate chunks with next/dynamic.
// They are still server rendered (dynamic() keeps SSR on by default), so crawlers get the full HTML.
const AddInPlatforms = dynamic(() => import("./(components)/AddInPlatforms"));
const AddInTechnologies = dynamic(
  () => import("./(components)/AddInTechnologies"),
);
const AddInUseCases = dynamic(() => import("./(components)/AddInUseCases"));
const AddInMigration = dynamic(() => import("./(components)/AddInMigration"));
const AddInProcess = dynamic(() => import("./(components)/AddInProcess"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const AddInFaq = dynamic(() => import("./(components)/AddInFaq"));
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL = "https://www.officeexperts.com.au/services/add-in-creation";
const PAGE_TITLE = "Office Add-in Development & Integration Services";
const PAGE_DESCRIPTION =
  "Custom add-ins for Excel, Word, PowerPoint, Outlook, Access, Teams, SharePoint and Power BI. Office web, VSTO and COM add-ins by Australian Microsoft experts.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-11-09T00:00:00+11:00";

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
          name: "Add-in Creation",
          item: PAGE_URL,
        },
      ],
    },
    {
      // Describes the service offered on this page, with one offer per kind of add-in
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Office Add-in Development",
      description: PAGE_DESCRIPTION,
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      serviceType: "Add-in development",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Add-in development services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office web add-ins",
              description:
                "Cross-platform add-ins for Excel, Word, PowerPoint, Outlook, OneNote and Project built with Office.js.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VSTO and COM add-ins",
              description:
                "Windows desktop add-ins for Excel, Word, PowerPoint, Outlook, Access, Project, Visio and Publisher.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Excel custom functions and XLL add-ins",
              description:
                "New worksheet functions and high-performance calculation add-ins for Excel.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Teams, SharePoint and Power BI extensions",
              description:
                "Teams apps, SharePoint Framework web parts and Power BI custom visuals.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Power Platform connectors and code components",
              description:
                "Custom connectors and code components that extend Power Apps and Power Automate.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-enabled add-ins and agents",
              description:
                "Add-ins and custom agents that bring AI into Word, Excel, Outlook and Microsoft 365.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Add-in repair, upgrade and migration",
              description:
                "Reviewing, repairing and rebuilding existing add-ins on a supported platform.",
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
      <AddInHero />
      <AddInPlatforms />
      <AddInTechnologies />
      <AddInUseCases />
      <AddInMigration />
      <AddInProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Related work"
        heading="Custom Office tools"
        headingAccent="in action"
        links={[
          {
            href: "/case-studies/government-department-enterprise-office-template-suite",
            title:
              "A custom Word ribbon that stops corporate templates breaking",
            description:
              "A custom Formatting Control tab keeps a state transport department's documents on-brand for staff who are not Word experts.",
            image:
              "/case-studies/government-enterprise-office-templatesLg.webp",
            linkText: "See our custom Word ribbon and templates",
          },
          {
            href: "/case-studies/financial-planning-word-document-builder",
            title: "A pop-up form and heading library built inside Word",
            description:
              "Staff start each financial planning report from a guided form, with the right headings and formatting applied automatically.",
            image:
              "/case-studies/financial-planning-word-document-builder-libraryLg.webp",
            linkText: "See our Word document builder",
          },
          {
            href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
            title: "An AI assistant that drafts proposals inside Word",
            description:
              "A conversational assistant turns call notes and a live rate card into a first-pass proposal in the real Word template.",
            image: "/case-studies/internal-ai-proposal-assistant.png",
            linkText: "See how our AI proposal assistant works",
          },
        ]}
      />
      <AddInFaq />
      <Contact />
    </>
  );
};

export default Page;
