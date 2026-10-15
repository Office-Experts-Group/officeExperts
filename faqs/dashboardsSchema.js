// faqs/dashboardsSchema.js
// Builds FAQPage structured data from the same questions rendered on the page.

// FAQ content shared with the FAQSection component
import faqs from "./dashboards";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
