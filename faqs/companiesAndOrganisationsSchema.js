// faqs/companiesAndOrganisationsSchema.js

// FAQ content shared with the visible FAQSection on the page
import faqs from "./companies-and-organisations";

// FAQPage structured data, generated from the same array so the markup
// always matches what users can see (a Google requirement for FAQ schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.wordexperts.com.au/companies-and-organisations#faq",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default faqSchema;
