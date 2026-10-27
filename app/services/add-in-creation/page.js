import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

// Below-the-fold components are split into separate chunks with next/dynamic.
// They are still server rendered (dynamic() keeps SSR on by default), so crawlers get the full HTML.
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment7 = dynamic(() => import("./(components)/PageSegment7"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const Contact = dynamic(() => import("@/components/Contact"));

import deskGraph from "@/public/pageHeros/deskGraph.webp";
import seatMob from "@/public/pageHeros/mob/seatMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts",
      "Australia-wide Microsoft Office Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/add-in-creation",
      url: "https://www.officeexperts.com.au/services/add-in-creation",
      name: "Add-in Creation | Microsoft Office Expert Australia",
      description:
        "Create custom Office add-ins that work across Word, PowerPoint, Outlook & more. Our experts build cross-application solutions for your Microsoft ecosystem.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-21T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/add-in-creation#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/services/add-in-creation"],
        },
      ],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/add-in-creation#breadcrumb",
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
          name: "Add-in Creation",
          item: "https://www.officeexperts.com.au/services/add-in-creation",
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
        title="Add-in Creation"
        desktopImage={deskGraph}
        mobileImage={seatMob}
        altDesk={"Desk with graphs"}
        altMob={"empty office chair"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment7 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
