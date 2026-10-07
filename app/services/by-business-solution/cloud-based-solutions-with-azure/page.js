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
import Promo from "../../../../components/Promo";
import RelatedLinks from "../../../../components/RelatedLinks";

import graphic from "../../../../public/pageHeros/graphic.webp";
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
        "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure",
      url: "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure",
      name: "Microsoft Cloud Based Solutions | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-29T00:00:00+00:00",
      description:
        "We create and support a wide variety of cloud based solutions including Azure databases, SharePoint integration, and mobile solutions.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure#breadcrumb",
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
          name: "Microsoft Cloud Based Solutions",
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
      <ServiceHero
        title="Cloud Based Solutions with Office, Azure and SharePoint"
        desktopImage={graphic}
        mobileImage={graphTableMob}
        altDesk={"digital graphic"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain2 />
      <PageSegment3 />
      <PageSegment4New />
      <PageSegment5 />
      <ExpertsAwait />
      <PageSegment4 />
      <PageSegment7 />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Azure cloud projects we've delivered"
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
      <Promo
        h2="Take Your Business to the Cloud with Microsoft Azure"
        p="Leverage the power of Azure for cost-effective, secure, and scalable cloud solutions. From Access front ends to fully integrated mobile, web, and database applications, our experts will help transform your workflows and enhance accessibility."
      />
      <Contact />
    </>
  );
};

export default Page;
