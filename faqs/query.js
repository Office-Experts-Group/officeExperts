// app/data/powerQueryFaqs.js
const faqs = [
    {
      question: "What's the difference between Power Query and Power BI?",
      answer:
        "Power Query is a data transformation tool that is built into Power BI, Excel, and other Microsoft products. While Power BI is a comprehensive business intelligence platform for creating reports and dashboards, Power Query specifically handles the data preparation and transformation aspects of the process.",
    },
    {
      question: "Do I need coding skills to use Power Query?",
      answer:
        "No. Power Query features an intuitive graphical interface that allows users to transform data without coding. However, for advanced requirements, our consultants can leverage the Power Query M formula language to create custom solutions.",
    },
    {
      question: "Can Power Query handle large datasets?",
      answer:
        "Yes. Power Query is designed to efficiently process large volumes of data through techniques like query folding, which pushes processing back to the source database when possible. Our consultants implement best practices to optimise performance even with substantial datasets.",
    },
    {
      question: "How does Power Query fit into our existing Microsoft environment?",
      answer:
        "Power Query integrates seamlessly with Excel, Power BI, Power Apps, Power Automate, and Dynamics 365, making it a versatile component in your Microsoft ecosystem. Our consultants specialise in creating cohesive solutions that leverage these integrations.",
    },
    {
      question: "What ongoing maintenance is required for Power Query solutions?",
      answer:
        "Most Power Query solutions require minimal maintenance. Since queries are designed to adapt to changing data structures automatically, they typically continue to function correctly even as source data evolves. Our team can design solutions with built-in error handling and notification systems for truly robust implementations.",
    },
  ];
  
  export default faqs;