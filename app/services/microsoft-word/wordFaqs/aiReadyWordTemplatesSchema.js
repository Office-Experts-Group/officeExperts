// faqs/copilotAiTemplatesSchema.js
// FAQPage structured data, generated from the same array FAQSection renders,
// so visible answers and schema answers can never drift apart.
import faqs from "./ai-ready-word-templates";

const PAGE_URL = "https://www.wordexperts.com.au/ai-ready-word-templates";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  inLanguage: "en-AU",
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
