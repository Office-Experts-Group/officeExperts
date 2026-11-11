// app/services/microsoft-dot-net/page.js
import React from "react";
import dynamic from "next/dynamic";

import DotNetIntro from "./(components)/DotNetIntro";

const DotNetServices = dynamic(() => import("./(components)/DotNetServices"));
const DotNetSupport = dynamic(() => import("./(components)/DotNetSupport"));
const DotNetMigration = dynamic(() => import("./(components)/DotNetMigration"));
const DotNetOffice = dynamic(() => import("./(components)/DotNetOffice"));
const DotNetAi = dynamic(() => import("./(components)/DotNetAi"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL = "https://www.officeexperts.com.au/services/microsoft-dot-net";
const PAGE_TITLE =
  "Microsoft .NET Development Services Australia | Office Experts";
const PAGE_DESCRIPTION =
  "C#, VB.NET and ASP.NET Core developers across Australia. We build, support and migrate .NET apps, including .NET Framework to .NET 10 upgrades and VSTO add-ins.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-26T00:00:00+10:00";
const DATE_MODIFIED = "2026-11-11T00:00:00+11:00";

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
          name: "Microsoft .NET",
          item: PAGE_URL,
        },
      ],
    },
    // ── Service, with one offer per section of the page ──
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft .NET Development",
      serviceType: "Custom software development",
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
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Businesses and government organisations",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: ".NET Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom .NET application development",
              description:
                "Desktop, web and API development in C# and VB.NET using Windows Forms, WPF, ASP.NET Core and Blazor.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: ".NET troubleshooting, maintenance and support",
              description:
                "Diagnosis and repair of existing .NET applications, ongoing patching, documentation and developer training.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: ".NET Framework to .NET 10 migration",
              description:
                "Upgrades from .NET Framework, .NET Core, .NET 8 and .NET 9 to .NET 10, including Web Forms, WCF and Entity Framework replacement.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VSTO and Office add-in development",
              description:
                "VSTO add-ins for Word, Excel and Outlook, and Office web add-ins for the new Outlook for Windows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI integration for .NET applications",
              description:
                "AI features and agents added to existing C# applications using Microsoft.Extensions.AI and Microsoft Agent Framework.",
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
        <DotNetIntro />
        <DotNetServices />
        <DotNetSupport />
        <DotNetMigration />
        <DotNetOffice />
        <DotNetAi />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Legacy systems we've modernised"
          headingAccent="and moved to the cloud"
          links={[
            {
              href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
              linkText: "See how the assistant moved into Azure",
              title:
                "Turning call notes and a rate card into a first-pass proposal inside the real Word template",
              description:
                "Reps were drafting proposals by hand, copying fee tables and consultant details from older documents. We built a conversational AI assistant that drafts each proposal straight into the real Word template from a live rate card. Once it was proven, we moved the whole tool onto Azure SQL, Azure App Service and Entra ID single sign-on, retiring the external vendor and office-based hosting it had started on.",
              image: "/case-studies/internal-ai-proposal-assistant.png",
              imageAlt:
                "AI proposal assistant drafting a proposal into a Word template",
            },
            {
              href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
              linkText: "See the Access 2000 to Azure migration",
              title:
                "Migrating a VM-locked Access 2000 database to Azure with a 10x faster website",
              description:
                "A crew booking business ran entirely on an Access 2000 database that would only work inside a virtual machine, cut off from its website. We moved the data to Azure SQL Server, rebuilt the front end and automated crew diaries, availability lists and end-of-day processing. The new website connects to the same database and loads ten times faster.",
              image: "/case-studies/film-crew-booking-system-rebuildLg.png",
              imageAlt:
                "Crew booking system rebuilt on Azure SQL Server with a new website",
            },
            {
              href: "/case-studies/automated-proposal-generation-in-microsoft",
              linkText: "See the database-driven document generator",
              title:
                "Replacing 50-page proposals built by hand with a database-driven document generator",
              description:
                "A window installer pieced together every proposal, quote and contract from paper records and Excel, often running past 50 pages. We built a database that generates the full Word document from the sections staff select, with quote tables, data and images included, then moved its back end to SQL Server as the workload grew.",
              image: "/case-studies/windowline-proposals-databaseLg.png",
              imageAlt:
                "Database generating a multi-page proposal document in Word",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
