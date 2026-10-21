// faqs/databaseDevelopmentSchema.js
// FAQPage structured data for the database development page, generated from the same
// array FAQSection renders so the markup can never drift from the visible answers.
import faqs from "./database-development-and-solutions";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/database-development-and-solutions";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default faqSchema;
