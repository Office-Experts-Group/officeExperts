import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment7 from "./(components)/PageSegment7";
import PageSegment8 from "./(components)/PageSegment8";
import RelatedLinks from "../../../../components/RelatedLinks";

import thirdParty from "../../../../public/pageHeros/thirdParty.webp";
import thirdPartyMob from "../../../../public/pageHeros/mob/thirdPartyMob.webp";

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
        "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
      url: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
      name: "3rd Party Application | Office Integration | Office Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-09-04T00:00:00+00:00",
      description:
        "Custom Office add-ins for Word, PowerPoint, Outlook and more. Our developers create seamless solutions that work across your entire Microsoft Office ecosystem.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration#breadcrumb",
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
          name: "3rd Party Application or Office Integration",
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
        title="Third Party Application or Office Integration"
        desktopImage={thirdParty}
        mobileImage={thirdPartyMob}
        altDesk={"Microsoft Integrations design"}
        altMob={"Microsoft Integrations design"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment8 />
      <PageSegment7 />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Integration projects we've delivered"
        links={[
          {
            href: "/case-studies/custom-quoting-tool",
            linkText: "See the WordPress integration",
            title:
              "Replacing manual quote requests with an instant online tax depreciation calculator",
            description:
              "The client needed a way for prospective customers to get a tax depreciation estimate without waiting on a manually prepared quote. We built a React calculator and embedded it into the client's existing WordPress and Elementor site through a custom plugin, then connected it to the client's SMTP email provider so a branded results email goes to both the customer and the client's team the moment a form is submitted.",
            image: "/case-studies/custom-quoting-tool.png",
            imageAlt:
              "Online calculator embedded in a WordPress website and connected to email delivery",
          },
          {
            href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
            linkText: "See the Word template integration",
            title:
              "Turning call notes and a rate card into a first-pass proposal inside the real Word template",
            description:
              "The client's proposals depended on fee figures and consultant details copied from older documents. We built a conversational AI assistant that drafts directly into the client's real Word template and connected it to the current rate card and consultant list, so fee tables, payment milestones and the consultant roster reflect live figures. The tool was later moved inside the client's Microsoft and Azure tenant with Entra ID single sign-on, and direct calls to the AI provider's API were replaced with Microsoft Foundry.",
            image: "/case-studies/internal-ai-proposal-assistant.png",
            imageAlt:
              "AI proposal assistant connected to a Word template and a live rate card",
          },
        ]}
      />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
