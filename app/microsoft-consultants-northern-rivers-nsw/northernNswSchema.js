// app/microsoft-consultants-northern-nsw/northernNswSchema.js
// Structured data for the Northern NSW hub, kept out of page.js so the page stays readable.
// Organization and ProfessionalService come from the shared generators. There is no
// LocalBusiness node because no street address has been confirmed for this region.
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import { faqs } from "./northernNswData";

export const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-northern-nsw";

const SITE_URL = "https://www.officeexperts.com.au";
const DESCRIPTION =
  "Home to our head office. We’ve helped Northern Rivers businesses and clients nationwide get more from Microsoft for over 25 years.";

// Parts of the region named on the page, used for areaServed
const areasServed = [
  "Tweed Heads",
  "Byron Bay",
  "Lismore",
  "Ballina",
  "Casino",
  "Grafton",
  "Coffs Harbour",
  "Armidale",
].map((name) => ({
  "@type": "City",
  name,
  containedInPlace: { "@type": "State", name: "New South Wales" },
}));

// Builds the FAQPage node from the same array the FAQ component renders
const buildFaqSchema = () => ({
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Northern Rivers",
      regionCode: "NSW",
      nearbyAreas: [], // optional
    }),
    generateWebSiteSchema(
      SITE_URL,
      "Office Experts",
      "Australia-wide Microsoft consulting, development and AI experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Northern NSW | Office Experts Group",
      description: DESCRIPTION,
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#organization` },
      datePublished: "2026-10-20T00:00:00+11:00",
      dateModified: "2026-10-20T00:00:00+11:00",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
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
          name: "Locations",
          item: `${SITE_URL}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Northern NSW",
          item: PAGE_URL,
        },
      ],
    },
    {
      // The service as it applies to this region
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft consulting and development in Northern NSW",
      serviceType: "Microsoft Office, Power Platform and AI consulting",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: areasServed,
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Remote, with on-site visits by arrangement",
        availableLanguage: "English",
      },
    },
    buildFaqSchema(),
  ],
};

export default schema;
