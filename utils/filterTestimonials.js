// utils/filterTestimonials.js

const serviceKeywords = {
  office: ["Office Experts", "office"],
  word: [
    "word",
    "word experts",
    "document",
    "documentation",
    ".doc",
    "template",
    "paragraph",
    "Rochelle",
    "Damien",
    "Aleisha",
    "Nae",
  ],
  excel: [
    "excel",
    "excel experts",
    "spreadsheet",
    "workbook",
    ".xls",
    "macro",
    "formula",
    "VBA",
  ],
  access: [
    "access",
    "access experts",
    "database",
    "data entry",
    "queries",
    "tables",
  ],
  powerplatform: [
    "power platform",
    "power platform experts",
    "powerpoint",
    "automate",
    "powerbi",
    "power apps",
    "flow",
    "Marcello",
  ],
};

// filterTestimonials.js
export const filterAndSortTestimonials = (testimonials, service) => {
  if (!testimonials || !service) {
    console.warn("Missing testimonials or service parameter");
    return testimonials;
  }

  const keywords = serviceKeywords[service.toLowerCase()];

  if (!keywords) {
    console.warn(`No keywords found for service: ${service}`);
    return testimonials;
  }

  return testimonials.sort((a, b) => {
    const textA = (a.content + " " + a.name).toLowerCase();
    const textB = (b.content + " " + b.name).toLowerCase();

    const matchesA = keywords.reduce(
      (count, keyword) => count + (textA.includes(keyword) ? 1 : 0),
      0
    );
    const matchesB = keywords.reduce(
      (count, keyword) => count + (textB.includes(keyword) ? 1 : 0),
      0
    );

    return matchesB - matchesA;
  });
};
