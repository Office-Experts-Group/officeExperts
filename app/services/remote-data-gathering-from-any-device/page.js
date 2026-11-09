// app/services/remote-data-gathering-from-any-device/page.js
import React from "react";
import dynamic from "next/dynamic";

import Introduction from "./(components)/Introduction";

const Contact = dynamic(() => import("@/components/Contact"));
const RDGCapabilities = dynamic(() => import("./(components)/RDGCapabilities"));
const RDGUseCases = dynamic(() => import("./(components)/RDGUseCases"));
const RDGHowItWorks = dynamic(() => import("./(components)/RDGHowItWorks"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));

const RELATED_CASE_STUDIES = [
  {
    href: "/case-studies/building-consultants-inspection-crm",
    title:
      "Turning manual enquiry handling into an automated quote-to-email pipeline",
    description:
      "Building inspection enquiries were logged and quoted by hand. A Power Apps and SharePoint intake now feeds Power Automate, which manages each enquiry through to a quote ready to email.",
    image: "/case-studies/gm-building-consultants-inspection-crmLg.png",
    imageAlt: "",
    linkText: "Explore our enquiry-to-quote automation",
  },
  {
    href: "/case-studies/sporting-goods-agentic-ai-customer-service",
    title:
      "Resolving customer service tickets end to end in 3 hours instead of 48",
    description:
      "Standardised Power Apps intake forms give every ticket a consistent structure, then Power Automate and AI agents resolve two-thirds of them with no human intervention.",
    image: "/case-studies/sporting-goods-agentic-customer-serviceLg.png",
    imageAlt: "",
    linkText: "Explore our agentic AI customer service",
  },
  {
    href: "/case-studies/healthcare-patient-form-followup-automation",
    title: "Removing manual form chasing for around 1,000 active patients",
    description:
      "Scheduled Power Automate flows run against a Microsoft Fabric data warehouse to remind, escalate and close off outstanding forms without staff checking status.",
    image: "/case-studies/healthcare-form-followupLg.webp",
    imageAlt: "",
    linkText: "Explore our patient form follow-up flows",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/remote-data-gathering-from-any-device",
      url: "https://www.officeexperts.com.au/services/remote-data-gathering-from-any-device",
      name: "Remote Data Gathering from Any Device | Office Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-19T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/remote-data-gathering-from-any-device#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/remote-data-gathering-from-any-device",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/remote-data-gathering-from-any-device#breadcrumb",
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
          name: "Remote Data Gathering from Any Device",
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
      <Introduction />
      <RDGCapabilities />
      <RDGUseCases />
      <RDGHowItWorks />

      <RelatedLinks
        theme="dark"
        eyebrow="Case studies"
        heading="Forms and data capture,"
        headingAccent="in action"
        text="See how we use Power Apps, Power Automate and Microsoft Fabric to move data from the point of capture into the systems that act on it."
        links={RELATED_CASE_STUDIES}
      />
      <Contact />
    </>
  );
};

export default Page;
