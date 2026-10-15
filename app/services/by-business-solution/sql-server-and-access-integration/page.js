// app/services/by-business-solution/sql-server-and-access-integration/page.js

import React from "react";

// next/dynamic splits each below-the-fold section into its own chunk.
// SSR stays on by default, so the content is still in the initial HTML for crawlers.
import dynamic from "next/dynamic";

// Hero is above the fold, so it is imported normally
import ServiceHero from "../../../../components/ServiceHero";
import SqlHero from "./(components)/SqlHero";

import sql from "../../../../public/pageHeros/sql.webp";
import sqlMob from "../../../../public/pageHeros/mob/sqlMob.webp";

// Shared site components
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);
const Contact = dynamic(() => import("../../../../components/Contact"));

// Page sections, in the order they appear
const SqlBenefits = dynamic(() => import("./(components)/SqlBenefits"));
const SqlSecurityProof = dynamic(
  () => import("./(components)/SqlSecurityProof"),
);
const SqlComparison = dynamic(() => import("./(components)/SqlComparison"));
const SqlOffice = dynamic(() => import("./(components)/SqlOffice"));
const SqlProcess = dynamic(() => import("./(components)/SqlProcess"));
const SqlFaq = dynamic(() => import("./(components)/SqlFaq"));

// FAQ copy shared with SqlFaq.jsx, so the schema matches what visitors see
import { sqlFaqs } from "./(data)/sqlFaqData";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/by-business-solution/sql-server-and-access-integration`;
const PAGE_TITLE =
  "SQL Server Integration for Access and Office | Office Experts";
const PAGE_DESCRIPTION =
  "Upgrade Access to a SQL Server backend, or connect Excel, Word, PowerPoint and Visual Studio to your SQL Server data. Australia-wide experts since 2000.";

// Builds one offer entry for the Service schema below
const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      SITE_URL,
      "Office Experts Group",
      "Australia-wide Microsoft Office, Microsoft 365 and Power Platform consulting experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      mainEntity: { "@id": `${PAGE_URL}/#service` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: "2026-10-14T00:00:00+00:00",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      // The "By Business Solution" level is left out because that URL is being
      // redirected to /services
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
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
          name: "SQL Server and Access Integration",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      serviceType: "SQL Server Integration for Microsoft Access and Office",
      areaServed: { "@type": "Country", name: "Australia" },
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      name: "SQL Server Integration for Access and Office",
      url: PAGE_URL,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SQL Server Integration Services",
        itemListElement: [
          offer(
            "SQL Server Migration",
            "Complete Access to SQL Server backend migration with data conversion and testing",
          ),
          offer(
            "Office and SQL Server Integration",
            "Excel dashboards, Word documents and PowerPoint presentations generated automatically from SQL Server data",
          ),
          offer(
            "Security Configuration",
            "Advanced authentication, encryption and role-based access control setup",
          ),
          offer(
            "Performance optimisation",
            "Query optimisation, indexing and server-side processing configuration",
          ),
          offer(
            "Azure SQL Integration",
            "Cloud-based SQL Server deployment for remote access and global collaboration",
          ),
          offer(
            "Training and Support",
            "Staff training, documentation and ongoing maintenance services",
          ),
        ],
      },
      description:
        "Professional SQL Server integration for Microsoft Access, Excel, Word, PowerPoint and Visual Studio, including migration, security setup, performance optimisation and ongoing support.",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: sqlFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const caseStudyLinks = [
  {
    href: "/case-studies/windowline-proposals-database",
    linkText: "See the SQL Server migration",
    title:
      "Replacing 50-page proposals built by hand with a database-driven document generator",
    description:
      "The client's proposals, quotes and contracts were assembled by hand from paper records and Excel, often running to 50 or more pages. We designed an Access database that generates the finished Word document from the sections staff select, with options to export to Excel and send emails with attachments. As the database grew, we migrated the backend from Access to SQL Server, keeping the same section-based workflow in place while giving the system a backend able to handle a larger, more concurrent workload.",
    image: "/case-studies/windowline-proposals-databaseLg.png",
    imageAlt:
      "Access front end on a SQL Server backend generating proposals and contracts in Word",
  },
  {
    href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
    linkText: "See the Access front end",
    title:
      "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
    description:
      "The client's crew booking operation ran on a native Access 2000 database that would only work inside a virtual machine. We moved the data onto Azure SQL Server and rebuilt the Access front end on the OEG Access framework, with menu-driven forms, an Excel-style Bookings form that gives a 180-day forward outlook, and automated Crew Diaries, Availability Lists, emails and End of Day processing.",
    image: "/case-studies/film-crew-booking-system-rebuildLg.png",
    imageAlt:
      "Access booking front end connected to an Azure SQL Server database for a freelance film and screen crew agency",
  },
];

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServiceHero
        title="SQL Server Integration for Access and Microsoft Office"
        desktopImage={sql}
        mobileImage={sqlMob}
        altDesk="random computer code"
        altMob="SQL digital design"
      />
      <SqlHero />
      <SqlBenefits />
      <SqlSecurityProof />
      <SqlComparison />
      <SqlOffice />
      <SqlProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Access and SQL Server projects we've delivered"
        links={caseStudyLinks}
      />
      <SqlFaq />
      <Contact />
    </>
  );
};

export default Page;
