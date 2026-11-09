// app/services/3rd-party-application-or-office-integration/page.js
import dynamic from "next/dynamic";

import ThirdPartyIntro from "./(components)/ThirdPartyIntro";

const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const Contact = dynamic(() => import("@/components/Contact"));
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
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
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
import { thirdPartyFaqs } from "@/faqs/thirdPartyFaqs";

const RELATED_CASE_STUDIES = [
  {
    href: "/case-studies/manufacturing-project-setup-automation",
    title:
      "Turning a new project email into a fully built job folder in seconds",
    description:
      "A Power Automate flow reads the project details from a notification email and builds the job folders across three SharePoint sites.",
    image: "/case-studies/manufacturing-project-setupLg.webp",
    linkText: "See our automated project folder setup",
  },
  {
    href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
    title:
      "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
    description:
      "An Azure SQL Server back end shared by the Access system and a Next.js website through a direct database connection.",
    image: "/case-studies/film-crew-booking-system-rebuildLg.png",
    linkText: "See our Access to Azure migration",
  },
  {
    href: "/case-studies/healthcare-patient-form-followup-automation",
    title: "Removing manual form chasing for around 1,000 active patients",
    description:
      "Two scheduled Power Automate flows reading the client's Microsoft Fabric data warehouse. Streamlining patient follow-up and escalation.",
    image: "/case-studies/healthcare-form-followupLg.webp",
    linkText: "Explore our patient form follow-up flows",
  },
];

const pageUrl =
  "https://www.officeexperts.com.au/services/3rd-party-application-or-office-integration";

const description =
  "Connect 3rd party apps like Xero, MYOB, Salesforce and others to your Microsoft suite. 25+ Software consultants working since 2000.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "3rd Party App Integration | Microsoft Solutions",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-21T00:00:00+00:00",
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
      <ThirdPartyIntro />
      <ThirdPartyPlatforms />
      <ThirdPartyMethods />
      <ThirdPartyMethodComparison />
      <ThirdPartyWorkedExample />
      <ThirdPartyAiIntegration />
      <ThirdPartySecurity />
      <ThirdPartyProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Recent projects"
        heading="Connected systems we have"
        headingAccent={"already created"}
        links={RELATED_CASE_STUDIES}
      />
      <ThirdPartyFaq />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
