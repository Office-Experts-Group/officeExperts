// faqs/appAndCustomDevelopmentSchema.js
import faqs from "./app-and-custom-development";

// FAQPage structured data built from the same array the page displays
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
