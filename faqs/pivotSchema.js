export const pivotSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the difference between PowerPivot and regular Excel PivotTables?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PowerPivot extends Excel's capabilities by handling millions of rows of data, creating relationships between multiple tables from different sources, and enabling complex calculations through DAX formulas. It provides enterprise-level analytics while maintaining the familiar Excel interface.",
        },
      },
      {
        "@type": "Question",
        name: "Do we need to move to Power BI if we're using PowerPivot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, it's not necessary. PowerPivot works effectively within Excel for advanced analytics, while Power BI offers more visualisation options and sharing capabilities. Many organisations use PowerPivot successfully without Power BI, though some eventually adopt both for complementary purposes.",
        },
      },
      {
        "@type": "Question",
        name: "How much training will our team need to use PowerPivot effectively?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Excel-proficient users typically require 1-2 days of training for basic PowerPivot usage. More advanced modelling and DAX formula development may require additional training. Our consulting engagements include customised training sessions tailored to your team's specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "Can PowerPivot connect to our existing databases and systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PowerPivot connects to virtually any business system or database including SQL Server, Oracle, Access, SAP, Salesforce, and many others. Our consultants specialize in creating reliable connections to even the most complex or legacy data sources.",
        },
      },
      {
        "@type": "Question",
        name: "Is PowerPivot suitable for small businesses or just for large enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PowerPivot is valuable for organisations of all sizes. Small businesses benefit from its ability to consolidate data from multiple sources and create professional reports without expensive BI tools. Large enterprises appreciate its ability to handle massive datasets and integrate with their existing Microsoft environment.",
        },
      },
    ],
  };
  
  export default pivotSchema;