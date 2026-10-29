// /services/microsoft-word/government-departments/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import GovDeptIntro from "./(components)/GovDeptIntro";

import faqs from "../wordFaqs/government-departments";
import faqSchema from "../wordFaqs/govSchema";

import government from "@/public/pageHeros/government.webp";
import governmentMob from "@/public/pageHeros/mob/governmentMob.webp";

const Contact = dynamic(() => import("@/components/Contact"));
const GovDeptCompliance = dynamic(
  () => import("./(components)/GovDeptCompliance"),
);
const GovDeptTemplateSystem = dynamic(
  () => import("./(components)/GovDeptTemplateSystem"),
);
const GovDeptCapabilities = dynamic(
  () => import("./(components)/GovDeptCapabilities"),
);
const GovDeptProcess = dynamic(() => import("./(components)/GovDeptProcess"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));

// PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION must match layout.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/government-departments";
const PAGE_TITLE = "Government Department Word Document Solutions";
const PAGE_DESCRIPTION =
  "Specialised Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Canberra Parliament house with word documents";

const DATE_PUBLISHED = "2018-07-16T02:07:45+10:00";
const DATE_MODIFIED = "2026-10-24T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/government-department-enterprise-office-template-suite",
    linkText: "Explore the template suite",
    title:
      "A custom Word ribbon that stops corporate templates breaking under everyday use",
    description:
      "After a major brand refresh, a state government department needed its Office environment modernised. We redesigned 17 enterprise Word templates, built a custom Formatting Control Tab that enforces approved styles, tables and numbering, and added controlled copy-and-paste with a one-click Styles Clean Up tool. The same project delivered a PowerPoint framework with 10 precinct-specific themes.",
    image: "/case-studies/government-enterprise-office-templatesLg.webp",
    imageAlt:
      "Custom Word ribbon and enterprise templates for a state government department",
  },
  {
    href: "/case-studies/government-workplace-safety-interactive-word-forms",
    linkText: "See our guided Word forms",
    title:
      "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
    description:
      "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
    image: "/case-studies/government-workplace-safety-interactive-formsLg.webp",
    imageAlt:
      "Guided, protected Word forms for a government workplace safety authority",
  },
  {
    href: "/case-studies/government-health-department-editable-pdf-forms",
    linkText: "View the editable PDF forms",
    title:
      "Turning brand templates into editable PDF forms staff can fill in and maintain",
    description:
      "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
    image: "/case-studies/government-health-editable-pdf-formsLg.webp",
    imageAlt:
      "Editable PDF forms built on a state government health department master template",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
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
          name: "Microsoft Word",
          item: `${SITE_URL}/services/microsoft-word`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Government Departments",
          item: PAGE_URL,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Government Departments"
        desktopImage={government}
        mobileImage={governmentMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <GovDeptIntro />
      <GovDeptCompliance />
      <GovDeptTemplateSystem />
      <GovDeptCapabilities />
      <GovDeptProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Projects we've delivered for government departments"
        links={caseStudies}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
