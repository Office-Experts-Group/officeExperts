export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of services do you provide using Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Office Experts provides a variety of services using Microsoft Word. These include document formatting and designs, template creation and standardisation, automation using macros and VBA, custom formatting ribbons with custom Word functions, data integration and mail merge across different Microsoft products and user training and support.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create automation in Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Microsoft Word allows for automation using macros and VBA. This allows for the streamlining and automation of repetitive tasks and business workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How do styles work in Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Microsoft Word, styles are pre-defined formatting sets that can be used through a document. Using styles ensures a consistent and professional approach to formatting and allows for improved navigation and easy updates. Custom styles can also be used for specific business needs.",
      },
    },
  ],
};

export default faqSchema;
