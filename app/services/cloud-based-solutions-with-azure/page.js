// app/services/cloud-based-solutions-with-azure/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static import — above the fold (holds the H1)
import AzureIntro from "./(components)/AzureIntro";

// Dynamically imported — below the fold. dynamic() keeps SSR on by default, so crawlers still get the full HTML.
const AccessOnAzure = dynamic(() => import("./(components)/AccessOnAzure"));
const AzureDesktopApps = dynamic(() => import("./(components)/AzureDesktopApps"));
const AzureIntegratedSolutions = dynamic(
  () => import("./(components)/AzureIntegratedSolutions"),
);
const AzureSharePoint = dynamic(() => import("./(components)/AzureSharePoint"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const AzureProcess = dynamic(() => import("./(components)/AzureProcess"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// Schema generators shared across all pages
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/cloud-based-solutions-with-azure";
const PAGE_TITLE = "Microsoft Cloud Based Solutions with Azure | Office Experts";
const PAGE_DESCRIPTION =
  "Cloud based solutions on Microsoft Azure for Australian businesses: Access with Azure SQL, .NET desktop apps, web and mobile integration and SharePoint.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-11-11T00:00:00+11:00";

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
      // "By business solution" 301 redirects to /services, so it's left out of the trail
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
          name: "Microsoft Cloud Based Solutions",
          item: PAGE_URL,
        },
      ],
    },
    {
      // One Offer per cloud option covered on the page
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Azure Cloud Solutions",
      serviceType: "Cloud computing consulting and development",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
        telephone: "1300102810",
        email: "consult@officeexperts.com.au",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Azure Cloud Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Access with an Azure SQL Database back end",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: ".NET desktop applications on Azure SQL Database",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web, mobile and database integration on Azure",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SharePoint and Microsoft 365 solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Azure hosting, migration and support",
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

      <main>
        <AzureIntro />
        <AccessOnAzure />
        <AzureDesktopApps />
        <AzureIntegratedSolutions />
        <AzureSharePoint />
        <ExpertsAwait />
        <AzureProcess />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Azure cloud projects"
          headingAccent="we've delivered"
          links={[
            {
              href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
              linkText: "See the Azure SQL migration",
              title:
                "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
              description:
                "The client's entire crew booking operation ran on a native Access 2000 database that would only work inside a virtual machine, with no way for its website to connect to it. We moved the data onto Azure SQL Server, rebuilt the Access front end on the OEG Access framework, and rewrote the WordPress website in Next.js with a direct connection to the cloud database. The new site loads 10x faster.",
              image: "/case-studies/film-crew-booking-system-rebuildLg.png",
              imageAlt:
                "Access booking system and Next.js website on Azure SQL Server for a freelance film and screen crew agency",
            },
            {
              href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
              linkText: "Explore the tenant migration",
              title:
                "Turning call notes and a rate card into a first-pass proposal inside the real Word template",
              description:
                "The client's proposal-writing process relied on reps re-reading transcripts and briefs, then copy-pasting fee figures and consultant details from the last similar proposal. We built a conversational AI assistant that drafts a first-pass proposal straight into the real Word template, with fee tables and a consultant roster pulled from the current rate card. The tool was then migrated fully inside the client's Microsoft and Azure tenant, using Azure SQL, Azure App Service, Entra ID single sign-on and Microsoft Foundry.",
              image: "/case-studies/internal-ai-proposal-assistant.png",
              imageAlt:
                "AI proposal assistant drafting into a Word template, migrated into an Azure tenant",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
