export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why automate Word tasks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automating Word tasks allows for users of all skill levels to create and complete documents in a user-friendly manner that aligns with business needs and processes. By simplifying complex tasks and ensuring a consistent approach is taken, workflows are streamlined and documents are created quicker and easier, allowing people to spend time on higher value activities.",
      },
    },
    {
      "@type": "Question",
      name: "What is a custom ribbon in Microsoft Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom ribbon in Microsoft Word is an additional tab in the toolbar with personalised functions and commands designed to suit your workflow and business requirements. This customisation allows users to have access to standard and custom commands and features that are required and used most frequently.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using custom functions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom functions allow development of bespoke functions in Microsoft Word that specifically align with what a user is doing within a particular document or template. This ensures that features, automation and tasks that a user needs to complete when creating/completing a document is available and present for the user at the right time.",
      },
    },
  ],
};

export default faqSchema;
