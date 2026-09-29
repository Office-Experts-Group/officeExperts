// app/services/ai-email-triage/page.js
import dynamic from "next/dynamic";

// ServiceHero (carries the page's <h1>) and the first section are above the
// fold, so they're imported directly
import ServiceHero from "../../../components/ServiceHero";
import EmailTriageHero from "./(components)/EmailTriageHero";

// Below-the-fold components loaded dynamically. All are server components,
// so they still render on the server; this only splits the JS bundle.
const EmailTriageIntro = dynamic(
  () => import("./(components)/EmailTriageIntro"),
);
const EmailTriageApproaches = dynamic(
  () => import("./(components)/EmailTriageApproaches"),
);
const EmailTriageComparison = dynamic(
  () => import("./(components)/EmailTriageComparison"),
);
const EmailTriageUseCases = dynamic(
  () => import("./(components)/EmailTriageUseCases"),
);
const EmailTriageSuite = dynamic(
  () => import("./(components)/EmailTriageSuite"),
);
const EmailTriageSecurity = dynamic(
  () => import("./(components)/EmailTriageSecurity"),
);
const EmailTriageWhyUs = dynamic(
  () => import("./(components)/EmailTriageWhyUs"),
);

// Shared site-wide components
const ExpertsAwait = dynamic(() => import("../../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../../components/FAQSection"));
const Contact = dynamic(() => import("../../../components/Contact"));

// FAQ content: rendered by FAQSection and mapped into FAQPage schema below
import faqs from "../../../faqs/ai-email-triage";

// Temporary hero image until the final artwork is ready (used for both sizes)
import emailTriage from "../../../public/pageheros/emailTriage.webp";
import emailTriageMob from "../../../public/pageheros/mob/emailTriageMob.webp";

// Shared schema builders (organisation, professional service, website)
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/ai-email-triage`;

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      SITE_URL,
      "Office Experts Group",
      "Australia-wide Microsoft Office, Microsoft 365 and Power Platform consulting experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "AI Email Triage for Microsoft 365 | Office Experts Group",
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#organization` },
      datePublished: "2026-09-29T00:00:00+10:00",
      dateModified: "2026-09-29T00:00:00+10:00",
      description:
        "Automated AI email triage built inside Microsoft 365. We sort, prioritise and route your shared inbox with Copilot, Power Automate or custom AI agents.",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      // Mirrors the URL path so it matches what Google sees
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
          name: "AI Email Triage",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI Email Triage",
      description:
        "Design and build of AI email triage: classifying, prioritising, extracting and routing incoming email using Copilot in Outlook, Power Automate with AI Builder, or custom AI agents coded in Python and JavaScript.",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: "Email automation",
      category: "AI automation",
      areaServed: { "@type": "Country", name: "Australia" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Remote and On-site",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Email Triage Approaches",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copilot in Outlook prioritisation",
              description:
                "Licence planning, prioritisation instructions and staff training for Microsoft 365 Copilot in Outlook",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Power Automate and AI Builder shared-mailbox triage",
              description:
                "Cloud flows that classify, extract, file and route email from shared mailboxes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom-coded AI email agents",
              description:
                "Bespoke AI agents written in Python and JavaScript that triage email from any mailbox and act across any system, hosted wherever the client chooses",
            },
          },
        ],
      },
    },
  ],
};

// FAQPage built from the same array FAQSection renders
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
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
        title="AI Email Triage"
        desktopImage={emailTriage}
        mobileImage={emailTriageMob}
        altDesk="AI sorting incoming emails into priority categories"
        altMob="AI sorting incoming emails into priority categories"
      />
      <EmailTriageHero />
      <EmailTriageIntro />
      <EmailTriageApproaches />
      <EmailTriageComparison />
      <EmailTriageUseCases />
      <EmailTriageSuite />
      <EmailTriageSecurity />
      <EmailTriageWhyUs />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
