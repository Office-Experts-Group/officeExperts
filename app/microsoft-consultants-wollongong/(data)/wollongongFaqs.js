// app/microsoft-consultants-wollongong/(data)/wollongongFaqs.js

// One source for the FAQ section (WollongongWhy.jsx) and the FAQPage schema (page.js).
// Answers are plain text so the schema matches the visible copy exactly.
// The optional link renders as a text link under the answer and is not part of the schema.
export const faqs = [
  {
    id: "onsite",
    question: "Do you work on site in Wollongong, or only remotely?",
    answer:
      "Most projects are delivered remotely, which is usually quicker and cheaper for you. When a workshop, training session or handover works better in the room, we can arrange a visit by agreement.",
  },
  {
    id: "sydney",
    question: "Our business also works with Sydney. Does that change anything?",
    answer:
      "Not at all, we build tools that behave the same wherever people sign in: the same files, permissions and reports no matter where you are.",
  },
  {
    id: "takeover",
    question:
      "Can you take over a spreadsheet or database that the person who built it has left?",
    answer:
      "Yes, it is one of the most common jobs we are given. We start by documenting what the file actually does, then repair it, simplify it and protect it. Whether it is an Excel workbook, an Access database or a tangle of linked files, the aim is that no single person is the only one who understands it.",
    link: {
      href: "/services/upgrades-and-migration",
      text: "Upgrades and migration",
    },
  },
  {
    id: "licences",
    question: "We already pay for Microsoft 365. Do we need anything else?",
    answer:
      "Often you already own most of what you need. Many Microsoft 365 plans include basic Power Apps, Power Automate and SharePoint capability, so we check what your licences cover before recommending anything new. If Copilot is on your list, we also look at your file permissions first, so it only surfaces what each person should see.",
    link: {
      href: "/services/copilot",
      text: "Microsoft 365 Copilot consulting",
    },
  },
  {
    id: "ai",
    question: "Is AI worth it for a small Illawarra business, or is it hype?",
    answer:
      "Start with one repeatable job. Sorting an enquiries inbox, answering the same policy questions or reading incoming forms are good first candidates. We scope an agent to that single task, keep your data inside clear boundaries and keep a person approving anything that goes out. Our programmers also build agents in Python and JavaScript that do not need to run inside your Microsoft tenant.",
    link: {
      href: "/services/ai-agent-development",
      text: "AI agent development",
    },
  },
  {
    id: "cost",
    question: "How do we start, and what does it cost?",
    answer:
      "With a free assessment meeting, followed by a written proposal that sets out the options, the effort and the likely cost before anything is built. Jobs range from an afternoon's repair to a staged system build, so there is no standard price list. Small releases mean you see progress early and can change direction.",
    link: {
      href: "/contact-us",
      text: "Request a quote",
    },
  },
  {
    id: "training",
    question: "Can you train our team as well as build for us?",
    answer:
      "Yes. We can run live workshops over Teams or on site, built around your own files rather than generic examples, and we can leave documentation behind so new staff can pick the work up. Ongoing support is available afterwards if you want it.",
    link: {
      href: "/microsoft-support-and-training-australia",
      text: "Microsoft support and training",
    },
  },
];
