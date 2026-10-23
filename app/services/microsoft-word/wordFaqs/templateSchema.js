export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Word Template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Word template is a pre-designed document that serves as a starting point for creating new documents. Templates can be built to include preset styles and formatting, certain text can be pre-loaded and automation can be added to guide a user. Using a template for a specific document format allows for a consistent and professional approach and for a uniform aesthetic to be used for all documents.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using Templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using Word templates saves time by providing a pre-defined starting point for any new document. This ensures uniform formatting and consistency is applied and gives documents a more professional look. Templates are easy to use and allow anyone to create a well-structured document. Templates can also be customised to business needs to enhance productivity and maintain high standards in document creation.",
      },
    },
  ],
};

export default faqSchema;
