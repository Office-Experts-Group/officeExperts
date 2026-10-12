// faqs/isAccessRightForYouSchema.js

// FAQ content shared with the visible FAQSection on the page
import faqs from "./is-access-right-for-you";

// FAQPage structured data, generated from the same array so the markup
// always matches what users can see (a Google requirement for FAQ schema)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.accessexperts.com.au/is-access-right-for-you#faq",
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
