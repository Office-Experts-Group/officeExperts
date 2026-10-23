export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes your document solutions suitable for government departments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise in creating document templates that prioritise accessibility, compliance, and consistency. Our templates adhere to government accessibility standards and provide a controlled environment for users, ensuring all documents are professional and on-brand.",
      },
    },
    {
      "@type": "Question",
      name: "Can templates be customised to meet our department's specific guidelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we work closely with each department to understand their unique requirements and customise templates to meet specific guidelines, including accessibility, corporate branding, and document structure standards.",
      },
    },
    {
      "@type": "Question",
      name: "How do your templates support accessibility requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our templates are designed to comply with accessibility standards, making documents more readable and accessible for people with disabilities. This includes features like structured formatting, appropriate font sizes, and alt-text for images, ensuring inclusivity in all your documents.",
      },
    },
    {
      "@type": "Question",
      name: "What is the benefit of using master templates in a controlled environment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Master templates provide a standardized foundation for all sub-templates, ensuring consistency in branding and formatting across documents. A controlled environment means only approved elements are used, maintaining quality and reducing formatting errors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support for template implementation and user training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide full support, from template setup to training your team on using and maintaining the templates effectively. Our goal is to ensure a smooth implementation and that your staff is confident in creating accessible and compliant documents.",
      },
    },
  ],
};

export default faqSchema;
