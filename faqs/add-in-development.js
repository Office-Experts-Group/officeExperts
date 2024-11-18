const faqs = [
  {
    question: "What's the difference between VBA and VSTO add-ins in Excel?",
    answer:
      "VBA add-ins are created in Excel with basic automation features, while VSTO add-ins are built using Visual Studio with .NET Framework for enhanced security and enterprise-level functionality.",
  },
  {
    question: "How are Excel add-ins deployed across an organization?",
    answer:
      "VBA add-ins are copied to Excel's startup folders and load automatically. Large organizations typically use login scripts for automated deployment. VSTO add-ins require installation on each PC.",
  },
  {
    question:
      "When should I consider developing an Excel add-in for my business?",
    answer:
      "Consider an Excel add-in when you need functionality available across multiple workbooks, want to automate repetitive tasks, or require custom functions accessible throughout your organization.",
  },
  {
    question: "Which type of add-in should I choose: VBA or VSTO?",
    answer:
      "Choose VBA add-ins for simpler organizational needs and easy deployment. Select VSTO add-ins when you require enhanced security, code protection, or advanced .NET features.",
  },
  {
    question:
      "What ongoing support and training options are available for Excel add-ins?",
    answer:
      "We provide remote and onsite support, customized training programs, and ongoing maintenance services. Available as hourly rate or project-based solutions across Australia.",
  },
];

export default faqs;
