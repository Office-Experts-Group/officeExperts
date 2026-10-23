export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are popup forms in Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popup forms are interactive windows in Microsoft Word that guide users through data entry, helping ensure data accuracy and saving time during document creation.",
      },
    },
    {
      "@type": "Question",
      name: "How do popup forms improve data entry and accuracy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popup forms guide users step-by-step through data input, validating each entry to minimize errors and maintain document consistency.",
      },
    },
    {
      "@type": "Question",
      name: "Can popup forms be customised for different document needs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, popup forms are highly versatile and can be tailored for various tasks, including data integration, document setup, and linking to external data sources.",
      },
    },
    {
      "@type": "Question",
      name: "What types of documents benefit most from popup forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documents that require consistent data input, data validation, or customised formatting benefit significantly from the use of popup forms, as they streamline complex entry tasks.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with popup forms for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out to our team to discuss your document needs. We'll assess your requirements and create popup forms that enhance your productivity and document quality.",
      },
    },
  ],
};

export default faqSchema;
