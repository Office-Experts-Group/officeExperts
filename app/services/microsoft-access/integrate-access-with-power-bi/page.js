// /app/services/microsoft-access/integrate-access-with-power-bi/page.js
import dynamic from "next/dynamic";

import ApbiHero from "./(components)/ApbiHero";
import ApbiIntro from "./(components)/ApbiIntro";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const ApbiStrain = dynamic(() => import("./(components)/ApbiStrain"));
const ApbiRoutes = dynamic(() => import("./(components)/ApbiRoutes"));
const ApbiBenefits = dynamic(() => import("./(components)/ApbiBenefits"));
const ApbiUseCases = dynamic(() => import("./(components)/ApbiUseCases"));
const ApbiProcess = dynamic(() => import("./(components)/ApbiProcess"));
const ApbiFaq = dynamic(() => import("./(components)/ApbiFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-access/integrate-access-with-power-bi`;
const PAGE_NAME = "Integrate Access with Power BI";
const PAGE_TITLE = "Integrate Microsoft Access with Power BI | Office Experts";
const PAGE_DESCRIPTION =
  "Integrate Microsoft Access with Power BI to turn your data into interactive dashboards with scheduled refresh and easy sharing. Australia-wide Access experts.";

// Keep the original publish date. Update dateModified by hand (+11:00 AEDT from
// the first Sunday of October to the first Sunday of April, otherwise +10:00).
const DATE_PUBLISHED = "2025-10-20T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-20T00:00:00+11:00";

const APBI_OFFERS = [
  {
    name: "Access to Power BI connection and refresh",
    description:
      "Connecting Access databases to Power BI, including drivers, gateway set-up and scheduled refresh.",
  },
  {
    name: "Power BI data modelling for Access data",
    description:
      "Relating and tidying Access tables and building the measures that dashboards need.",
  },
  {
    name: "Interactive Power BI dashboard design",
    description:
      "Dashboards built around the questions managers ask, with drill-down and filtering.",
  },
  {
    name: "Access back-end upgrade to SQL Server for reporting",
    description:
      "Moving Access tables to SQL Server so larger databases can feed Power BI reliably.",
  },
  {
    name: "Power BI sharing and handover",
    description:
      "Publishing, permissions, sharing through Microsoft Teams or an intranet, and training for your team.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}#website` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Access",
          item: `${SITE_URL}/services/microsoft-access`,
        },
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: PAGE_NAME,
      serviceType: "Microsoft Access and Power BI integration",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Organisations that run Microsoft Access databases",
      },
      serviceOutput:
        "Interactive Power BI dashboards and scheduled reporting built on Microsoft Access data",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Access and Power BI integration services",
        itemListElement: APBI_OFFERS.map(({ name, description }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
  ],
};

// Pick by slug so the copy always matches caseStudies.js.
const APBI_CASE_STUDY_SLUGS = [
  "retail-power-bi-partner-reporting-security",
  "automated-proposal-generation-in-microsoft",
  "film-crew-booking-system-access-nextjs-rebuild",
];
const apbiCaseStudyLinks = APBI_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ApbiHero />
      <ApbiIntro />
      <ApbiStrain />
      <ApbiRoutes />
      <ApbiBenefits />
      <ApbiUseCases />
      <RelatedLinks
        theme="dark"
        eyebrow="Case studies"
        heading="Access and Power BI projects"
        headingAccent="we’ve delivered"
        text="Examples of Access databases, SQL Server back ends and Power BI reporting built for Australian organisations."
        links={apbiCaseStudyLinks}
      />
      <ApbiProcess />
      <ApbiFaq />

      <Contact />
    </>
  );
};

export default Page;
