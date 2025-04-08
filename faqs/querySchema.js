export const querySchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the difference between Power Query and Power BI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Power Query is a data transformation tool that is built into Power BI, Excel, and other Microsoft products. While Power BI is a comprehensive business intelligence platform for creating reports and dashboards, Power Query specifically handles the data preparation and transformation aspects of the process.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need coding skills to use Power Query?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Power Query features an intuitive graphical interface that allows users to transform data without coding. However, for advanced requirements, our consultants can leverage the Power Query M formula language to create custom solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Can Power Query handle large datasets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Power Query is designed to efficiently process large volumes of data through techniques like query folding, which pushes processing back to the source database when possible. Our consultants implement best practices to optimise performance even with substantial datasets.",
        },
      },
      {
        "@type": "Question",
        name: "How does Power Query fit into our existing Microsoft environment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Power Query integrates seamlessly with Excel, Power BI, Power Apps, Power Automate, and Dynamics 365, making it a versatile component in your Microsoft ecosystem. Our consultants specialise in creating cohesive solutions that leverage these integrations.",
        },
      },
      {
        "@type": "Question",
        name: "What ongoing maintenance is required for Power Query solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Power Query solutions require minimal maintenance. Since queries are designed to adapt to changing data structures automatically, they typically continue to function correctly even as source data evolves. Our team can design solutions with built-in error handling and notification systems for truly robust implementations.",
        },
      },
    ],
  };
  
  export default querySchema;