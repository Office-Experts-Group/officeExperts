import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const FormFieldsAnatomy = dynamic(
  () => import("./(components)/FormFieldsAnatomy"),
);
const FormProtectionExplainer = dynamic(
  () => import("./(components)/FormProtectionExplainer"),
);
const FormDataJourney = dynamic(() => import("./(components)/FormDataJourney"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import faqs from "../../faqs/fill-in-forms";
import faqSchema from "../../faqs/fillFormsSchema";

import fillForm from "../../public/pageHeros/fillForm.webp";
import fillFormMob from "../../public/pageHeros/mob/fillFormMob.webp";

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
      "@id": "https://www.wordexperts.com.au/fill-in-forms",
      url: "https://www.wordexperts.com.au/fill-in-forms",
      name: "Expert Creation of Word Fill in Forms",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:30:12+00:00",
      dateModified: "2026-09-21T00:00:00+00:00",
      description:
        "Professional Microsoft Word form creation services. Custom fillable forms with data validation and protection. Improve data entry efficiency and accuracy.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/fill-in-forms#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/fill-in-forms"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/fill-in-forms#breadcrumb",
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
          name: "Fill In Forms",
          item: "https://www.wordexperts.com.au/fill-in-forms",
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
        title="Fill In Forms"
        desktopImage={fillForm}
        mobileImage={fillFormMob}
        altDesk={"Fill in forms with Microsoft Word"}
        altMob={"Fill in forms with Microsoft Word"}
      />
      <PageSegmentMain />
      <FormFieldsAnatomy />
      <FormProtectionExplainer />
      <Segment4Repeat />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Fillable form projects we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/government-health-department-editable-pdf-forms",
            linkText: "See the editable PDF forms",
            title:
              "Turning brand templates into editable PDF forms staff can fill in and maintain",
            description:
              "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-health-editable-pdf-formsLg.png",
            imageAlt:
              "Editable PDF forms built on a state government health department master template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-workplace-safety-interactive-word-forms",
            linkText: "See the guided Word forms",
            title:
              "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
            description:
              "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-workplace-safety-interactive-formsLg.webp",
            imageAlt:
              "Guided, protected Word forms for a government workplace safety authority",
          },
        ]}
      />
      <FormDataJourney />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
