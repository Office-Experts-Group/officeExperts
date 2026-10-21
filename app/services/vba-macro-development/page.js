import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contents from "./(components)/Contents";

const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const PageSegmentCenter = dynamic(
  () => import("./(components)/PageSegmentCenter"),
);
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import longDesk from "@/public/pageHeros/longDesk.webp";
import codingMob from "@/public/pageHeros/mob/codingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

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
      "@id": "https://www.officeexperts.com.au/services/vba-macro-development",
      url: "https://www.officeexperts.com.au/services/vba-macro-development",
      name: "VBA Macro Development | Office Experts Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-21T00:00:00+00:00",
      description:
        "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/vba-macro-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/vba-macro-development",
          ],
        },
      ],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/vba-macro-development#breadcrumb",
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
          name: "VBA Macro Development",
          item: "https://www.officeexperts.com.au/services/vba-macro-development",
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
        title={"VBA Macro Development"}
        desktopImage={longDesk}
        mobileImage={codingMob}
        altDesk={"long desk in office"}
        altMob={"computer code on a screen"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegmentCenter />
      <BlackSegment />
      <PageSegment4 />
      <PageSegment5 />
      <ExpertsAwait />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Word automation and macro projects we've delivered"
        links={[
          {
            href: "/case-studies/insurance-word-quoting-report-popup-form",
            linkText: "See the pop-up form",
            title:
              "Turning slow, error-prone quoting reports into one guided pop-up form in Word",
            description:
              "The client's staff created quoting reports in Word from existing templates, hunting through each document to find and complete a large number of fields, with no way to tell afterwards whether any had been missed. We built a pop-up form that gathers every field in one place, checks that mandatory fields are complete and populates the report automatically. The drop-down lists behind it sit in a single background document that the Administrator maintains and rolls out to every template.",
            image:
              "/case-studies/insurance-word-quoting-report-popup-form.webp",
            imageAlt:
              "Pop-up form for completing quoting reports in Word for an insurance business",
          },
          {
            href: "/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "See the copy/paste macro",
            title:
              "One shared Global Common template keeping four entities on-brand without four separate rebuilds",
            description:
              "A corporate group needed consistent, professional templates across four related entities. We built a custom Master Template for each entity from a single shared Global Common template, then added a custom Formatting tab with a copy/paste macro that strips foreign formatting out of pasted content and applies the approved styling automatically.",
            image: "/case-studies/corporate-group-multi-entity-templatesLg.png",
            imageAlt:
              "Custom Word Master Templates for four entities of a corporate group",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
