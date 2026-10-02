// app/services/ai-agent-development/page.js
import dynamic from "next/dynamic";

// Above the fold: import directly
import ServiceHero from "../../../components/ServiceHero";
import AiAgentsHero from "./(components)/AiAgentsHero";

// Below the fold: code-split with next/dynamic (still server-rendered)
const AiAgentsProblem = dynamic(() => import("./(components)/AiAgentsProblem"));
const AiAgentsUseCases = dynamic(
  () => import("./(components)/AiAgentsUseCases"),
);
const AiAgentsComparison = dynamic(
  () => import("./(components)/AiAgentsComparison"),
);
const AiAgentsCapabilities = dynamic(
  () => import("./(components)/AiAgentsCapabilities"),
);
const AiAgentsGovernance = dynamic(
  () => import("./(components)/AiAgentsGovernance"),
);
const AiAgentsProcess = dynamic(() => import("./(components)/AiAgentsProcess"));
const FAQSection = dynamic(() => import("../../../components/FAQSection"));
const Contact = dynamic(() => import("../../../components/Contact"));

// FAQ content (also used to build the FAQPage schema below)
import faqs from "../../../faqs/ai-agent-development";

// Placeholder hero images so the page compiles. Swap for the real artwork.
import heroImage from "../../../public/placeholder.webp";
import heroImageMob from "../../../public/placeholder.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/ai-agent-development`;

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      SITE_URL,
      "Office Experts",
      "Australia-wide Microsoft Office Development and Consulting Experts",
    ),

    // WebPage
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Custom AI Agent Development Australia | Office Experts",
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#organization` },
      datePublished: "2026-10-02T00:00:00+10:00",
      dateModified: "2026-10-02T00:00:00+10:00",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
    },

    // Service
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI Agent Development",
      serviceType: "AI Agent Development",
      description:
        "Custom AI agents built in Microsoft 365 (Copilot Studio, Power Platform, Azure) or fully custom code in Python and JavaScript, for document review, customer service, market monitoring, compliance and research.",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      url: PAGE_URL,
    },

    // BreadcrumbList: Home › Services › AI Agent Development
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
          name: "AI Agent Development",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// FAQPage built from the same array the FAQ section renders
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

// ── Page component ─────────────────────────────────────────
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

      {/* ServiceHero owns the page <h1> */}
      <ServiceHero
        title="AI Agent Development"
        desktopImage={heroImage}
        mobileImage={heroImageMob}
        altDesk="Custom AI agents working across Microsoft 365"
        altMob="Custom AI agents working across Microsoft 365"
      />
      <AiAgentsHero />
      <AiAgentsProblem />
      <AiAgentsUseCases />
      <AiAgentsComparison />
      <AiAgentsCapabilities />
      <AiAgentsGovernance />
      <AiAgentsProcess />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
