// faqs/accesibility.js

// FAQ content for the /accessibility page. The first five questions are
// unchanged from the existing page; six new questions have been added
// below to extend genuine, specific coverage rather than pad the count.
const faqs = [
  {
    question:
      "What accessibility standards do your Word templates comply with?",
    answer:
      "Our Word templates can comply with WCAG 2.1 guidelines and meet government accessibility requirements. We ensure all templates include proper heading structures, alternative text capabilities, reading order optimisation, and accessible table formats. This makes documents usable for people relying on screen readers and other assistive technologies.",
  },
  {
    question:
      "How do you ensure document accessibility when converting from PDF or InDesign to Word?",
    answer:
      "During conversion, we rebuild documents from the ground up with accessibility in mind, rather than relying on automatic converters. This includes implementing proper heading hierarchies, adding alt text placeholders for images, ensuring correct reading order, and structuring tables for screen reader compatibility. We also validate all converted documents against accessibility checkers.",
  },
  {
    question:
      "Can existing Word templates be updated to meet accessibility standards?",
    answer:
      "Yes, we can upgrade existing templates to meet accessibility standards. This process involves restructuring document elements, implementing proper styles and formatting, adding accessibility tags, and ensuring all interactive elements are keyboard accessible. We'll also provide guidance on maintaining accessibility when creating new documents from these templates.",
  },
  {
    question: "Do you provide training on maintaining document accessibility?",
    answer:
      "Yes, we offer comprehensive training for teams on maintaining document accessibility. This includes instruction on using built-in accessibility checkers, proper heading structure, alt text best practices, and creating accessible tables and lists. We can deliver training remotely or on-site, and provide ongoing support to ensure your team maintains accessibility standards.",
  },
  {
    question: "How do your accessible templates maintain corporate branding?",
    answer:
      "Our accessible templates are designed to maintain your corporate branding while meeting accessibility requirements. We achieve this by creating properly structured styles that incorporate your brand colours, fonts, and design elements while ensuring sufficient colour contrast, readable font sizes, and clear document structure. This ensures documents are both accessible and professionally branded.",
  },
  {
    question:
      "Do accessible Word documents also need to work as accessible PDFs?",
    answer:
      "Often, yes. If your Word document will be exported to PDF for publishing, we structure the source document so the tagging carries across cleanly, meeting PDF/UA requirements. We can also test the exported PDF separately, since export settings can strip or reorder tags even when the Word source is correct.",
  },
  {
    question:
      "What's the difference between an accessibility checker pass and true compliance?",
    answer:
      "Word's built-in accessibility checker catches common issues like missing alt text, but it can't detect an illogical reading order, a heading used purely for visual styling, or a table that reads correctly on screen but announces incorrectly to a screen reader. We can combine automated checks with a manual screen reader review before signing off on any document.",
  },
  {
    question:
      "Can you audit our current templates before we commit to a full project?",
    answer:
      "Yes, we offer a standalone accessibility audit that documents every issue against WCAG 2.1 and any relevant government standard, along with a recommendation on whether remediation or a rebuild is the better fit. You're free to use that report with your own team or come back to us for the remediation work.",
  },
  {
    question:
      "How do you handle accessibility for documents with complex data tables or charts?",
    answer:
      "Complex tables are broken into properly scoped header rows and columns, or split into simpler linked tables where a single sprawling table would be unreadable to assistive technology. Charts and infographics are paired with a text summary or an accessible data table, so the information isn't locked inside an image.",
  },
  {
    question:
      "Do you work with state and federal government accessibility requirements?",
    answer:
      "Yes, we've worked with government departments at state and federal level for many years and build to the accessibility requirements set out in their procurement and publishing standards. If your department has a specific style guide or compliance checklist, we'll build and validate templates against it directly.",
  },
  {
    question:
      "How long does an accessibility remediation project typically take?",
    answer:
      "It depends on how many templates are involved and how far the current structure is from compliant. A single template with isolated issues can often be corrected within days, while a full suite of master and sub-templates being rebuilt for an organisation-wide rollout is a larger project. We'll give you a realistic timeframe after the initial audit.",
  },
];

export default faqs;
