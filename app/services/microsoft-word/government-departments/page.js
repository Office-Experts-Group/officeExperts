import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import GovDeptIntro from "./(components)/GovDeptIntro";

const Contact = dynamic(() => import("../../components/Contact"));
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
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/government-departments";
import faqSchema from "../../faqs/govSchema";

import government from "../../public/pageHeros/government.webp";
import governmentMob from "../../public/pageHeros/mob/governmentMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/government-departments",
      url: "https://www.wordexperts.com.au/government-departments",
      name: "Government Department Word Document Solutions | Word Government Consultants",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:07:45+00:00",
      dateModified: "2026-09-18T00:00:00+00:00",
      description:
        "Specialised Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/government-departments#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/government-departments"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/government-departments#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Government Departments",
          item: "https://www.wordexperts.com.au/government-departments",
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
        altDesk={"Canberra Parliament house with word documents"}
        altMob={"Canberra Parliament house with word documents"}
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
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/government-department-enterprise-office-template-suite",
            linkText: "Explore the template suite",
            title:
              "A custom Word ribbon that stops corporate templates breaking under everyday use",
            description:
              "After a major brand refresh, a state government department needed its Office environment modernised. We redesigned 17 enterprise Word templates, built a custom Formatting Control Tab that enforces approved styles, tables and numbering, and added controlled copy-and-paste with a one-click Styles Clean Up tool. The same project delivered a PowerPoint framework with 10 precinct-specific themes.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-enterprise-office-templatesLg.png",
            imageAlt:
              "Custom Word ribbon and enterprise templates for a state government department",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-workplace-safety-interactive-word-forms",
            linkText: "See our guided Word forms",
            title:
              "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
            description:
              "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-workplace-safety-interactive-formsLg.webp",
            imageAlt:
              "Guided, protected Word forms for a government workplace safety authority",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-health-department-editable-pdf-forms",
            linkText: "View the editable PDF forms",
            title:
              "Turning brand templates into editable PDF forms staff can fill in and maintain",
            description:
              "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-health-editable-pdf-formsLg.png",
            imageAlt:
              "Editable PDF forms built on a state government health department master template",
          },
        ]}
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
