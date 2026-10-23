export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a controlled document template environment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A controlled document template environment limits user access to certain formatting options, ensuring that all documents adhere to preset branding guidelines such as fonts, colors, and styles. This helps maintain a consistent corporate identity across all documents.",
      },
    },
    {
      "@type": "Question",
      name: "How can a corporate template solution protect brand integrity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corporate template solutions control access to branding elements like fonts and colors, preventing unauthorized changes. This ensures that each document created reflects the company's identity accurately, keeping all communications on brand.",
      },
    },
    {
      "@type": "Question",
      name: "Can document templates be customised to our specific branding guidelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, corporate document templates can be tailored to include your specific branding guidelines, such as approved colors, fonts, and styles. This customization helps ensure every document produced remains consistent with your brand identity.",
      },
    },
    {
      "@type": "Question",
      name: "How do these templates handle pasted content from external sources?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our templates are designed to handle pasted content by applying your corporate-approved styles to the inserted text. This means that any external formatting is overridden to maintain brand consistency and prevent style corruption.",
      },
    },
    {
      "@type": "Question",
      name: "Can we create sub-templates within the main corporate template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with our master template, users can create sub-templates that follow the same controlled environment and branding guidelines. This allows for flexibility in document creation while still ensuring all sub-documents remain on brand.",
      },
    },
  ],
};

export default faqSchema;
