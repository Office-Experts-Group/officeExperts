// app/services/database-development-and-solutions/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import DatabaseIntro from "./(components)/DatabaseIntro";

const AccessDatabases = dynamic(() => import("./(components)/AccessDatabases"));
const SqlServerAzure = dynamic(() => import("./(components)/SqlServerAzure"));
const WebDatabases = dynamic(() => import("./(components)/WebDatabases"));
const DatabaseChooser = dynamic(() => import("./(components)/DatabaseChooser"));
const AiBusinessData = dynamic(() => import("./(components)/AiBusinessData"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "@/faqs/database-development-and-solutions";
import faqSchema from "@/faqs/databaseDevelopmentSchema";

import databases from "@/public/pageHeros/databases.webp";
import databasesMob from "@/public/pageHeros/mob/databasesMob.webp";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/database-development-and-solutions`;

// Builds one Offer entry for the OfferCatalog, keeps the catalogue below readable
const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Service",
    name,
    description,
  },
});

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // WebPage
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Database Development and Solutions | Office Experts Australia",
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-22T00:00:00+11:00",
      description:
        "Custom database development since 2000. We build, upgrade and migrate Access, SQL Server, Azure and web databases, and connect AI to your business data.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#service`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },

    // Service
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Database Development and Solutions",
      url: PAGE_URL,
      description:
        "Design, development, upgrade, migration and support of Microsoft Access, SQL Server, Azure SQL and web databases, plus AI assistants connected to business data.",
      serviceType: "Database Development",
      category: "Custom Software Development",
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Database Development Services",
        itemListElement: [
          offer(
            "Microsoft Access Database Development",
            "Custom Access databases with forms, reports, VBA automation and Office integration",
          ),
          offer(
            "Access Database Upgrades and Migration",
            "Upgrading older Access databases, fixing 32-bit and 64-bit issues and migrating back ends to SQL Server or Azure",
          ),
          offer(
            "SQL Server and Azure SQL Back Ends",
            "Moving Access data to on-premises SQL Server or Azure SQL Database for more users, remote access and larger data",
          ),
          offer(
            "Web and Mobile Database Development",
            "Web portals and mobile apps built on PostgreSQL, Supabase, Azure SQL, MySQL, Firebase and MongoDB",
          ),
          offer(
            "SharePoint and Dataverse Solutions",
            "Business data in SharePoint lists and Dataverse with Power Apps front ends",
          ),
          offer(
            "AI Connected to Business Data",
            "Retrieval-augmented generation, private knowledge bases and plain-English querying of SQL databases with governed access",
          ),
          offer(
            "Database Support and Repair",
            "Ongoing support, performance tuning and repair of existing databases",
          ),
        ],
      },
    },

    // BreadcrumbList (by-business-solution is omitted because it 301 redirects to /services)
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
          name: "Database Development and Solutions",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <>
      {/* Structured data scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        title="Database Development and Solutions"
        desktopImage={databases}
        mobileImage={databasesMob}
        altDesk={"Databases solutions"}
        altMob={"Databases solutions"}
      />
      <DatabaseIntro />
      <AccessDatabases />
      <SqlServerAzure />
      <WebDatabases />
      <DatabaseChooser />
      <AiBusinessData />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="A few database solutions from"
        headingAccent={"past projects"}
        links={[
          {
            href: "/case-studies/automated-proposal-generation-in-microsoft",
            linkText: "See the document generator",
            title:
              "Replacing 50-page proposals built by hand with a database-driven document generator",
            description:
              "The client installs windows and doors across commercial and residential properties, and every proposal, quote and contract was pieced together by hand from paper records and Excel, often running to 50 or more pages. We designed an Access database that lets staff select the sections they need and generates the full Word document automatically, with project and client details, quote tables, data and images. As the database grew, we migrated the backend from Access to SQL Server.",
            image: "/case-studies/windowline-proposals-databaseLg.png",
            imageAlt:
              "Access database generating proposals and contracts in Word for a window installation business",
          },
          {
            href: "/case-studies/research-organisation-access-kanban-planner",
            linkText: "See the Kanban planner",
            title:
              "Bringing a Kanban task planner inside the Access database the client already used",
            description:
              "The client was using Microsoft Planner for its tasks and asked whether something similar could be built inside its existing Access database. We built a Kanban planner form with four status columns, drag and drop task management, a right-click menu, due date highlighting and a details form for each task, so the planner no longer sits outside the database.",
            image: "/case-studies/research-kanban-planner-boardLg.webp",
            imageAlt:
              "Kanban task planner built inside a Microsoft Access database",
          },
          {
            href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
            linkText: "See the Azure migration",
            title:
              "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
            description:
              "The client's crew booking operation ran on a native Access 2000 database that would only work inside a virtual machine. We migrated the data to Azure SQL Server, rebuilt the front end on the OEG Access framework with an Excel-style Bookings form giving a 180-day forward outlook, and automated Crew Diaries, Availability Lists, emails and End of Day processing. The website was then rewritten in Next.js with a direct database connection and loads 10x faster.",
            image: "/case-studies/film-crew-booking-system-rebuildLg.png",
            imageAlt:
              "Access booking system and Next.js website for a freelance film and screen crew agency",
          },
        ]}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
