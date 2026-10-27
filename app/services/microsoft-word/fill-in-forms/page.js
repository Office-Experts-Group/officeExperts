// /services/microsoft-word/fill-in-forms/page.js

import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const FormFieldsAnatomy = dynamic(
  () => import("./(components)/FormFieldsAnatomy"),
);
const FormProtectionExplainer = dynamic(
  () => import("./(components)/FormProtectionExplainer"),
);
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const FormDataJourney = dynamic(() => import("./(components)/FormDataJourney"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/fill-in-forms";
import faqSchema from "../wordFaqs/fillFormsSchema";

import fillForm from "@/public/pageHeros/fillForm.webp";
import fillFormMob from "@/public/pageHeros/mob/fillFormMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms";
const PAGE_TITLE = "Expert Creation of Word Fill in Forms | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Microsoft Word form creation services. Custom fillable forms with data validation and protection. Improve data entry efficiency and accuracy.";
const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT = "Fill in forms with Microsoft Word";

// datePublished: WE value 2018-01-13T14:30:12+00:00 converted to +10:00.
// dateModified: set by hand (content reworded for the migration).
const DATE_PUBLISHED = "2018-01-14T00:30:12+10:00";
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/government-health-department-editable-pdf-forms",
    linkText: "See the editable PDF forms",
    title:
      "Turning brand templates into editable PDF forms staff can fill in and maintain",
    description:
      "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
    image: "/case-studies/government-health-editable-pdf-formsLg.webp",
    imageAlt:
      "Editable PDF forms built on a state government health department master template",
  },
  {
    href: "/case-studies/government-workplace-safety-interactive-word-forms",
    linkText: "See the guided Word forms",
    title:
      "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
    description:
      "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
    image: "/case-studies/government-workplace-safety-interactive-formsLg.webp",
    imageAlt:
      "Guided, protected Word forms for a government workplace safety authority",
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
          name: "Fill In Forms",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Word Fill In Forms",
      serviceType: "Microsoft Word fill-in form creation",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
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
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <PageSegmentMain />
      <FormFieldsAnatomy />
      <FormProtectionExplainer />
      <Segment4Repeat />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Fillable form projects we've delivered"
        links={caseStudies}
      />
      <FormDataJourney />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
