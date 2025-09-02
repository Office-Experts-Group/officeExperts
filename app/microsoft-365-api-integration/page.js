import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import Promo from "../../components/Promo";
import ExpertsAwait from "../../components/ExpertsAwait";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

import aboutUs from "../../public/pageHeros/aboutUs.webp";
import aboutUsMob from "../../public/pageHeros/mob/aboutUsMob.webp";
import Intro from "./(components)/intro";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import CheckPoints from "./(components)/CheckPoints";
import DeskImage from "./(components)/DeskImage";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/microsoft-365-api-integration",
      url: "https://www.officeexperts.com.au/microsoft-365-api-integration",
      name: "Microsoft 365 API Integration",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2025-09-01T00:00:00+00:00",
      dateModified: "2025-09-01T00:00:00+00:00",
      description:
        "Office Experts build custom portals, apps, and add-ins using Microsoft Graph and Office.js APIs—secure, mobile-ready, and tailored to your workflows",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/microsoft-365-api-integration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/microsoft-365-api-integration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/microsoft-365-api-integration#breadcrumb",
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
          name: "Web & Mobile API Integration for Microsoft 365",
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
        title={"Microsoft 365 API Integration Services"}
        desktopImage={aboutUs}
        mobileImage={aboutUsMob}
        altDesk={"Hands pointing in a circle"}
        altMob={"About Us"}
      />
      <PageSegmentMain />
      <Intro />
      <PageSegment4 />
      <CheckPoints />
      <DeskImage />
      <PageSegment5 />
      <ExpertsAwait />
      <Promo
        h2={"Let's Build Smarter Apps"}
        p={
          "Our team will design and implement custom Microsoft 365 API solutions that extend your environment—secure, scalable, and user-friendly."
        }
      />

      <Contact />
    </>
  );
};

export default Page;
