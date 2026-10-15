// app/services/by-business-solution/3rd-party-application-or-office-integration/page.js
import dynamic from "next/dynamic";

// Shared components (unchanged)
import ServiceHero from "../../../../components/ServiceHero";
import ThirdPartyIntro from "./(components)/ThirdPartyIntro";

const ExpertsAwait = dynamic(
  () => import("../../../../components/ExpertsAwait"),
);
const Contact = dynamic(() => import("../../../../components/Contact"));
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);
const ThirdPartyPlatforms = dynamic(
  () => import("./(components)/ThirdPartyPlatforms"),
);
const ThirdPartyMethods = dynamic(
  () => import("./(components)/ThirdPartyMethods"),
);
const ThirdPartyMethodComparison = dynamic(
  () => import("./(components)/ThirdPartyMethodComparison"),
);
const ThirdPartyWorkedExample = dynamic(
  () => import("./(components)/ThirdPartyWorkedExample"),
);
const ThirdPartyCaseStudies = dynamic(
  () => import("./(components)/ThirdPartyCaseStudies"),
);
const ThirdPartyAiIntegration = dynamic(
  () => import("./(components)/ThirdPartyAiIntegration"),
);
const ThirdPartySecurity = dynamic(
  () => import("./(components)/ThirdPartySecurity"),
);
const ThirdPartyProcess = dynamic(
  () => import("./(components)/ThirdPartyProcess"),
);
const ThirdPartyFaq = dynamic(() => import("./(components)/ThirdPartyFaq"));

// FAQ data is also used below to generate FAQPage schema
import { thirdPartyFaqs } from "../../../../faqs/thirdPartyFaqs";

import thirdParty from "../../../../public/pageHeros/thirdParty.webp";
import thirdPartyMob from "../../../../public/pageHeros/mob/thirdPartyMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const pageUrl =
  "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration";

const description =
  "Connect 3rd party apps like Xero, MYOB, Salesforce and others to your Microsoft suite. 25+ Software consultants working since 2000.";

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
      "@id": pageUrl,
      url: pageUrl,
      name: "3rd Party App Integration | Microsoft Solutions",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-14T00:00:00+00:00",
      description,
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [pageUrl] }],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "3rd Party App Integration",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: thirdPartyFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
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
        title="3rd Party App Integration"
        desktopImage={thirdParty}
        mobileImage={thirdPartyMob}
        altDesk={"Microsoft Integrations design"}
        altMob={"Microsoft Integrations design"}
      />
      <ThirdPartyIntro />
      <ThirdPartyPlatforms />
      <ThirdPartyMethods />
      <ThirdPartyMethodComparison />
      <ThirdPartyWorkedExample />
      <ThirdPartyCaseStudies />
      <ThirdPartyAiIntegration />
      <ThirdPartySecurity />
      <ThirdPartyProcess />
      <ThirdPartyFaq />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
