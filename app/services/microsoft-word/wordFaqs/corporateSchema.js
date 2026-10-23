export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can custom templates help maintain brand consistency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom templates ensure that all documents follow preset branding guidelines, such as fonts, colors, and layouts. This consistency helps reinforce a professional brand image across all corporate communications.",
      },
    },
    {
      "@type": "Question",
      name: "What features can be included in a corporate document template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corporate document templates can include features such as headers/footers, styles, protection, tables, columns, content controls, VBA, quick parts, bookmarks, fields, and a table of contents, all of which help create a controlled, brand-consistent document.",
      },
    },
    {
      "@type": "Question",
      name: "Can we restrict users from making certain changes in templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, templates can be protected to limit user access to certain formatting and editing options. This prevents unapproved changes and ensures that documents remain consistent with corporate branding.",
      },
    },
    {
      "@type": "Question",
      name: "Why is it important to control document formatting across an organisation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Controlling document formatting prevents inconsistent styles and helps maintain a uniform, professional appearance, which reflects positively on the brand and reduces the need for reformatting or corrections.",
      },
    },
    {
      "@type": "Question",
      name: "What should we do if our current documents have inconsistent formatting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can help you standardize your documents by designing custom templates that enforce your brand's formatting rules, ensuring future documents are consistent and easier to manage.",
      },
    },
  ],
};

export default faqSchema;
