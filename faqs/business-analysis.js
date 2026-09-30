// faqs/business-analysis.js

// FAQ content for /services/business-analysis.
// Consumed by the shared FAQSection component and by businessAnalysisSchema.js,
// so the visible FAQs and the FAQPage structured data can never drift apart.
const faqs = [
  {
    question: "What does a business analysis engagement involve?",
    answer:
      "We map how work currently flows through your business, capture your requirements and constraints, and recommend a solution architecture with a staged roadmap. You receive documentation you own, whether or not we go on to build the solution.",
  },
  {
    question: "Why do I need business analysis when AI tools can build software?",
    answer:
      "AI tools are excellent at building what you ask for. They can't tell you whether you're asking for the right thing, how it should connect to your other systems, or what happens with the exceptions your team handles every day. Analysis makes sure the fast build is the right build.",
  },
  {
    question: "How long does it take?",
    answer:
      "It depends on scope. A single workflow in one department can be analysed in days; a cross-department review takes longer. We'll agree the scope and timeframe before we start, and the roadmap is staged so you see results early.",
  },
  {
    question: "Do you only recommend Microsoft products?",
    answer:
      "No. Microsoft 365, Power Platform and Azure are often the best fit because most of our clients already pay for them, but we also build custom solutions in Python, JavaScript, .NET and other languages, and custom AI agents that don't need to run inside your Microsoft tenant. We recommend what fits.",
  },
  {
    question: "Can our internal team build from your specification?",
    answer:
      "Yes. Many clients use our documentation to guide their own developers or AI-assisted development. We can also review the build as it progresses or take on the more complex components.",
  },
  {
    question: "How do you approach AI in the solution design?",
    answer:
      "We identify where AI genuinely adds value (reading documents, triaging requests, drafting content, scoring risk) and where a simpler rule-based automation is more reliable. Every AI component is designed with clear data access boundaries, human checkpoints where needed, and traceable outputs.",
  },
  {
    question: "We already have Copilot. Isn't that enough?",
    answer:
      "Copilot is powerful when your data is well structured and your processes are clear. Analysis often reveals that the biggest gains come from fixing the underlying workflow first, then applying Copilot or a custom agent to it. Our Copilot services page covers how we roll it out.",
  },
  {
    question: "Do you work with businesses outside Australia?",
    answer:
      "Yes. We're Australian-based and work with clients across Australia and overseas, including the UK.",
  },
];

export default faqs;
