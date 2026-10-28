import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PageSegmentIntro from "./(components)/PageSegmentIntro";

// Below-the-fold components are split into separate chunks with next/dynamic.
// They are still server rendered (dynamic() keeps SSR on by default), so crawlers get the full HTML.
const MicrosoftSolutions = dynamic(
  () => import("./(components)/MicrosoftSolutions"),
);
const WebCapabilities = dynamic(() => import("./(components)/Webcapabilities"));
const HowWeWork = dynamic(() => import("./(components)/Howwework"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import onlineSolutions from "@/public/pageHeros/onlineSolutions.webp";
import onlineSolutionsMob from "@/public/pageHeros/mob/onlineSolutionsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/online-solutions",
      url: "https://www.officeexperts.com.au/services/online-solutions",
      name: "Microsoft Online Solutions | Power Pages, SharePoint & Custom Web Apps",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-22T00:00:00+00:00",
      description:
        "Custom online solutions using Microsoft 365, SharePoint, Power Platform and modern Web Development Frameworks to streamline your business.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/online-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/online-solutions",
          ],
        },
      ],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/online-solutions#breadcrumb",
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
          name: "Online Solutions",
          item: "https://www.officeexperts.com.au/services/online-solutions",
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
        title={"Custom Online Solutions"}
        desktopImage={onlineSolutions}
        mobileImage={onlineSolutionsMob}
        altDesk={"computer with microsoft technologies"}
        altMob={"computer with microsoft technologies"}
      />
      <PageSegmentIntro />
      <MicrosoftSolutions />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Online solutions we've delivered"
        links={[
          {
            href: "/case-studies/custom-quoting-tool",
            linkText: "See the online calculator",
            title:
              "Replacing manual quote requests with an instant online tax depreciation calculator",
            description:
              "The client helps property investors understand what they can claim in tax depreciation, but anyone wanting an estimate had to contact the office and wait for a manually prepared quote. We built a custom React calculator, embedded into the client's WordPress site as a plugin, that lets a property investor enter their details and receive an instant, branded estimate by email, with the same result sent to the client's team. Admin-editable components let the client's own staff update depreciation rates and building price index data.",
            image: "/case-studies/custom-quoting-tool.png",
            imageAlt:
              "Online tax depreciation calculator embedded in a WordPress website",
          },
          {
            href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
            linkText: "See the Next.js rebuild",
            title:
              "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
            description:
              "The client's WordPress website had no way to reach its crew booking data, which sat in an Access 2000 database that only worked inside a virtual machine. We rewrote the website in Next.js with a direct connection to an Azure SQL Server database, migrated the existing website assets across and built a crew portal so crew members can access relevant information online. The new site loads 10x faster, and a website management portal built into the Access front end lets staff manage site content from the system they already use.",
            image: "/case-studies/film-crew-booking-system-rebuildLg.png",
            imageAlt:
              "Next.js website and crew portal connected to a booking database for a freelance film and screen crew agency",
          },
        ]}
      />
      <WebCapabilities />
      <HowWeWork />
      <Contact />
    </>
  );
};

export default Page;
