export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What accessibility standards do your Word templates comply with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Word templates can comply with WCAG 2.1 guidelines and meet government accessibility requirements. We ensure all templates include proper heading structures, alternative text capabilities, reading order optimization, and accessible table formats. This makes documents usable for people relying on screen readers and other assistive technologies.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure document accessibility when converting from PDF or InDesign to Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During conversion, we rebuild documents from the ground up with accessibility in mind, rather than relying on automatic converters. This includes implementing proper heading hierarchies, adding alt text placeholders for images, ensuring correct reading order, and structuring tables for screen reader compatibility. We also validate all converted documents against accessibility checkers.",
      },
    },
    {
      "@type": "Question",
      name: "Can existing Word templates be updated to meet accessibility standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can upgrade existing templates to meet accessibility standards. This process involves restructuring document elements, implementing proper styles and formatting, adding accessibility tags, and ensuring all interactive elements are keyboard accessible. We'll also provide guidance on maintaining accessibility when creating new documents from these templates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide training on maintaining document accessibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive training for teams on maintaining document accessibility. This includes instruction on using built-in accessibility checkers, proper heading structure, alt text best practices, and creating accessible tables and lists. We can deliver training remotely or on-site, and provide ongoing support to ensure your team maintains accessibility standards.",
      },
    },
    {
      "@type": "Question",
      name: "How do your accessible templates maintain corporate branding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our accessible templates are designed to maintain your corporate branding while meeting accessibility requirements. We achieve this by creating properly structured styles that incorporate your brand colors, fonts, and design elements while ensuring sufficient color contrast, readable font sizes, and clear document structure. This ensures documents are both accessible and professionally branded.",
      },
    },
  ],
};

export default faqSchema;
