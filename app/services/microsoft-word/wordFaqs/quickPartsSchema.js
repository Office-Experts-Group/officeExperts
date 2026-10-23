export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Quick Parts in Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quick Parts are reusable content blocks in Word that can be inserted into documents. They help streamline the process of adding frequently-used sections, ensuring consistency and saving time.",
      },
    },
    {
      "@type": "Question",
      name: "How can Quick Parts improve my document workflow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By using Quick Parts, users can insert commonly-used elements with a few clicks, which reduces repetitive work, maintains document consistency, and improves productivity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise the Quick Parts Gallery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the Quick Parts Gallery can be customised with various content blocks, such as terms, appendix sections, or prebuilt tables, tailored to your organization's needs.",
      },
    },
    {
      "@type": "Question",
      name: "What types of content can be stored in Quick Parts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can store various types of content, including text, tables, headers, footers, and even images, allowing for flexible and efficient document creation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Quick Parts for my documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact our team to discuss how Quick Parts can be integrated into your templates. We'll help you set up and organise your Quick Parts Gallery to enhance document workflows.",
      },
    },
  ],
};

export default faqSchema;
