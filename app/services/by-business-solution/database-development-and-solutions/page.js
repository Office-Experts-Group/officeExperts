import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import PageSegment3 from "./(components)/PageSegment3";
import PageSegment4New from "./(components)/PageSegment4New";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import PageSegment7 from "./(components)/PageSegment7";
import Contact from "../../../../components/Contact";
import CTAFull from "../../../(components)/CTAFull";
import Segment4Repeat from "./(components)/Segment4Repeat";
import Segment4Again from "./(components)/Segment4Again";
import Segment7Repeat from "./(components)/Segment7Repeat";
import Contents from "./(components)/Contents";
import RelatedLinks from "../../../../components/RelatedLinks";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import graphTableMob from "../../../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts",
      "Australia-wide Microsoft Office Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
      url: "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
      name: "Database Development and Solutions | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-05-29T00:00:00+00:00",
      description:
        "Custom Microsoft database solutions built by certified experts. We design, develop and support Access databases, SQL Server solutions, and cloud database systems tailored to your business needs.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.officeexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Services By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Database Development and Solutions",
        },
      ],
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
      <Contents />
      <ServiceHero
        title="Microsoft Database Development and Solutions"
        desktopImage={longDesk}
        mobileImage={graphTableMob}
        altDesk={"long desk in office"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain2 />
      <PageSegment3 />
      <PageSegment4New />
      <PageSegment5 />
      <ExpertsAwait />
      <PageSegment4 />
      <PageSegment7 />
      <Segment4Repeat />
      <CTAFull />
      <Segment4Again />
      <Segment7Repeat />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Database projects we've delivered"
        links={[
          {
            href: "/case-studies/windowline-proposals-database",
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
      <Contact />
    </>
  );
};

export default Page;
