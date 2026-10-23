export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does automation in Microsoft Word templates work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automation in Word templates allows users to quickly add commonly used elements with a single click, reducing repetitive tasks and ensuring document consistency.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using automated templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automated templates streamline document creation, reduce errors, maintain brand consistency, and allow your team to focus on more important tasks, saving time and increasing productivity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise which elements are automated in my templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can customise automation to include any elements that are frequently used in your documents, such as headers, footers, tables, and cover pages, tailored to your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Will automation affect the flexibility of my document templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, automation adds convenience without sacrificing flexibility. Users can still manually adjust templates as needed, but automation makes frequently used actions more accessible.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with automated document templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact our team to discuss your specific needs. We'll help you set up automated solutions that simplify document creation and improve efficiency across your business.",
      },
    },
  ],
};

export default faqSchema;
