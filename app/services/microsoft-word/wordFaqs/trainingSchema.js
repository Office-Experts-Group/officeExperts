export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you provide customised training for Microsoft Word for my team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Office Experts provides customised training for Microsoft Word. We work with your business to ensure the service we provide aligns with your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What sort of support services do you offer in Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide full comprehensive support for any solution we provide to our clients. We ensure we're available for follow up work or modifications to existing and past solutions so that our clients feel supported and comfortable in what we provide.",
      },
    },
  ],
};

export default faqSchema;
