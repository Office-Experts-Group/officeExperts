// /app/services/servicesData.js
// Single source of truth for the /services hub: every heading, description and link lives here.
// Office Experts links are root-relative paths (so next/link can be used).
// Links to the other group sites are full URLs, built with the small helpers below.
// If content is ever moved into officeexperts.com.au, only the href values in this file need to change.

const SITES = {
  word: "https://www.wordexperts.com.au",
  excel: "https://www.excelexperts.com.au",
  access: "https://www.accessexperts.com.au",
  powerPlatform: "https://www.powerplatformexperts.com.au",
};

const word = (path = "") => `${SITES.word}${path}`;
const excel = (path = "") => `${SITES.excel}${path}`;
const access = (path = "") => `${SITES.access}${path}`;
const powerPlatform = (path = "") => `${SITES.powerPlatform}${path}`;

/* ---------- Page level ---------- */

export const pageMeta = {
  title: "Microsoft Office, Power Platform and AI Services",
  description:
    "Word, Excel, Access, PowerPoint, Power Platform, Microsoft 365 and AI agent development from Australia's Microsoft Office specialists since 2000.",
  path: "/services",
  siteUrl: "https://www.officeexperts.com.au",
};

// Sticky in-page navigation. The id must match the id on each section.
export const navItems = [
  { id: "ai-and-automation", label: "AI and automation" },
  { id: "power-platform", label: "Power Platform" },
  { id: "excel", label: "Excel" },
  { id: "word", label: "Word" },
  { id: "access-and-databases", label: "Access and databases" },
  { id: "powerpoint", label: "PowerPoint" },
  { id: "custom-development", label: "Custom development" },
  { id: "microsoft-365", label: "Microsoft 365 and support" },
];

/* ---------- Introduction and overview ---------- */

export const groupIntro = {
  eyebrow: "Office Experts",
  title: "Microsoft Consulting and Custom Software Solutions",
  titleAccent: "for Your Business",
  paragraphs: [
    "Whether it is a spreadsheet that keeps breaking, a document process that eats hours, or a system that no longer talks to the rest of your business, we design, build and repair the Microsoft solutions your team relies on every day.",
    "Our consultants work across Excel, Word, Access, PowerPoint, Microsoft 365 and the Power Platform, with custom code and AI where it is the better fit. We recommend the simplest solution that solves the problem, then deliver and support it remotely or on-site across Australia.",
  ],
  listTitle: "What we do",
  list: [
    {
      name: "Custom Development & Integrations",
      href: "/services/microsoft-office-365/app-and-custom-development",
    },
    {
      name: "Process Automation",
      href: "/services/microsoft-office-365/business-process-automation",
    },
    {
      name: "Upgrades & Migrations",
      href: "/services/microsoft-office/upgrades-and-migration",
    },
    {
      name: "Business Analysis",
      href: "/services/business-analysis",
    },
    {
      name: "Training & Support",
      href: "/microsoft-support-and-training-australia",
    },
  ],
  ctaLabel: "Get a free consultation",
  ctaHref: "#contact",
  factsTitle: "National reach. Local presence.",
  facts: [
    {
      figure: "2000",
      label: "Started in a small office in Northern New South Wales",
    },
    {
      figure: "25+",
      label: "Consultants in nearly every major city in Australia",
    },
    { figure: "AU and NZ", label: "Support and solutions delivered remotely" },
    {
      figure: "On-site",
      label: "Available when required for training and development",
    },
  ],
  overviewTitle: "What we do",
  overview: [
    {
      target: "ai-and-automation",
      icon: "ai",
      label: "AI and automation",
      text: "Custom AI agents, Copilot and automated workflows.",
    },
    {
      target: "power-platform",
      icon: "power",
      label: "Power Platform",
      text: "Apps, flows, reports and portals on the Microsoft Power Platform.",
    },
    {
      target: "excel",
      icon: "excel",
      label: "Excel",
      text: "Spreadsheets, formulas, VBA and reporting.",
    },
    {
      target: "word",
      icon: "word",
      label: "Word",
      text: "Templates, forms, rebranding and document automation.",
    },
    {
      target: "access-and-databases",
      icon: "access",
      label: "Access and databases",
      text: "Access, SQL Server and cloud databases.",
    },
    {
      target: "powerpoint",
      icon: "powerpoint",
      label: "PowerPoint",
      text: "Presentation templates, redesign and automation.",
    },
    {
      target: "custom-development",
      icon: "custom",
      label: "Custom development",
      text: "Web apps, add-ins, integrations and mobile apps.",
    },
    {
      target: "microsoft-365",
      icon: "m365",
      label: "Microsoft 365 and support",
      text: "Microsoft 365, ongoing support and training.",
    },
  ],
};

/* ---------- AI and automation ---------- */

export const ai = {
  title: "AI and automation",
  eyebrow: "Intelligent solutions",
  intro:
    "We build AI into the way your business already works, from custom agents written in Python and JavaScript to Copilot and Power Platform solutions that live inside your Microsoft 365 tenant.",
  featured: {
    name: "AI agent development",
    href: "/services/ai-agent-development",
    description:
      "Custom agents that read, decide and act across your documents, inboxes and systems. Built by our own programmers, and not tied to running inside your Microsoft tenant.",
  },
  items: [
    {
      name: "AI email triage",
      href: "/services/ai-email-triage",
      description:
        "Sort, summarise and route incoming email automatically, using Copilot, Power Automate or a custom agent.",
    },
    {
      name: "Microsoft Copilot",
      href: "/services/microsoft-office-365/copilot",
      description:
        "Set up Copilot properly and make it genuinely useful across Word, Excel, Outlook and Teams.",
      also: {
        name: "Copilot and AI templates",
        href: word("/copilot-and-ai-templates"),
      },
    },
    {
      name: "AI integrations",
      href: powerPlatform("/services/microsoft-power-platform/ai-integrations"),
      description: "Add AI to your Power Apps and Power Automate solutions.",
    },
    {
      name: "Business process automation",
      href: "/services/microsoft-office-365/business-process-automation",
      description:
        "Replace repetitive manual steps with workflows that run on their own.",
      also: {
        name: "Power Automate",
        href: powerPlatform(
          "/services/microsoft-power-platform/microsoft-power-automate",
        ),
      },
    },
    {
      name: "Microsoft 365 API integration",
      href: "/microsoft-365-api-integration",
      description:
        "Connect Microsoft 365 data and documents to your other systems.",
      also: {
        name: "Word API integrations",
        href: word("/microsoft-word-api-integrations"),
      },
    },
  ],
};

/* ---------- Power Platform ---------- */

export const powerPlatformSection = {
  title: "Power Platform and data",
  eyebrow: "Power Platform",
  intro:
    "Apps, automation, reporting and websites on the Microsoft Power Platform, plus the data work underneath them. Delivered by our dedicated Power Platform team.",
  tiles: [
    {
      name: "Power Apps",
      href: powerPlatform(
        "/services/microsoft-power-platform/microsoft-power-apps",
      ),
      description: "Business apps for the way your team really works.",
      support: {
        name: "Power Apps support",
        href: powerPlatform("/power-apps-support"),
      },
    },
    {
      name: "Power Automate",
      href: powerPlatform(
        "/services/microsoft-power-platform/microsoft-power-automate",
      ),
      description:
        "Flows that move data and approvals without anyone chasing them.",
      support: {
        name: "Power Automate support",
        href: powerPlatform("/power-automate-support"),
      },
    },
    {
      name: "Power BI",
      href: powerPlatform(
        "/services/microsoft-power-platform/microsoft-power-bi",
      ),
      description: "Reports and dashboards your people will actually open.",
      support: {
        name: "Power BI support",
        href: powerPlatform("/power-bi-support"),
      },
    },
    {
      name: "Power Pages",
      href: powerPlatform(
        "/services/microsoft-power-platform/microsoft-power-pages",
      ),
      description: "Secure portals for customers, partners and suppliers.",
      support: {
        name: "Power Pages support",
        href: powerPlatform("/power-pages-support"),
      },
    },
  ],
  moreTitle: "Data, integration and support",
  more: [
    {
      name: "Power Platform overview",
      href: powerPlatform("/services/microsoft-power-platform"),
    },
    {
      name: "Power Platform assessment",
      href: powerPlatform("/power-platform-assessment"),
    },
    {
      name: "Power Platform support",
      href: powerPlatform("/power-platform-support"),
    },
    { name: "Microsoft Fabric", href: powerPlatform("/microsoft-fabric") },
    {
      name: "SharePoint consulting and development",
      href: powerPlatform("/sharepoint-consulting-and-development"),
    },
    {
      name: "Power BI data integration",
      href: powerPlatform("/power-bi-data-integration"),
    },
    {
      name: "Excel to Power BI migration",
      href: powerPlatform("/excel-to-power-bi-migration"),
    },
    { name: "Power Query", href: "/services/power-query" },
    { name: "Power Pivot", href: "/services/power-pivot" },
    { name: "Dashboards", href: "/services/by-business-solution/dashboards" },
  ],
};

/* ---------- Excel ---------- */

export const excelSection = {
  title: "Excel development and support",
  eyebrow: "Spreadsheets",
  intro:
    "From a single smart formula to a full reporting system, our Excel specialists build spreadsheets that are fast, accurate and hard to break.",
  site: { name: "Visit Excel Experts", href: excel() },
  items: [
    {
      name: "Custom design and development",
      href: excel("/custom-design-and-development"),
      description:
        "Workbooks designed around your process, not the other way round.",
    },
    {
      name: "Formulas and custom functions",
      href: excel("/excel-formulas-and-custom-formulas"),
      description:
        "Complex calculations made reliable, plus functions Excel does not have.",
    },
    {
      name: "VBA and macro development",
      href: excel("/vba-macro-development"),
      description: "Automate repetitive work and build tools inside Excel.",
    },
    {
      name: "Pivot tables, charts and reporting",
      href: excel("/pivot-tables-charts-and-reporting-solutions"),
      description: "Reporting that updates itself and reads clearly.",
    },
    {
      name: "Data manipulation",
      href: excel("/data-manipulation"),
      description: "Clean, combine and reshape messy data.",
    },
    {
      name: "Add-in development",
      href: excel("/add-in-development"),
      description: "Packaged tools your whole team can install.",
    },
    {
      name: "Excel support",
      href: excel("/excel-support"),
      description: "Help when a workbook is broken or behaving badly.",
    },
    {
      name: "Upgrades and migration",
      href: excel("/upgrades-and-migration"),
      description: "Move legacy spreadsheets to current versions safely.",
    },
  ],
};

/* ---------- Word ---------- */

export const wordSection = {
  title: "Word and document templates",
  eyebrow: "Documents",
  intro:
    "Documents that look right every time. Our Word specialists build templates, forms and automation that keep your brand consistent and your people productive.",
  site: { name: "Visit Word Experts", href: word() },
  groups: [
    {
      title: "Templates and branding",
      items: [
        {
          name: "Word template creation",
          description:
            "Custom templates built on proper styles, so every document comes out consistent.",
          href: word("/word-document-template-creation"),
        },
        {
          name: "Template conversions",
          description:
            "Turn existing documents and designs into clean, reliable Word templates.",
          href: word("/word-template-conversions"),
        },
        {
          name: "Brand templates",
          description:
            "Templates that keep your fonts, colours and layouts on-brand.",
          href: word("/brand-template"),
        },
        {
          name: "Corporate global templates",
          description:
            "One master template system shared across every team and location.",
          href: word("/corporate-global-template-solution"),
        },
        {
          name: "Corporate identity",
          description:
            "Apply your corporate identity across every Word document you produce.",
          href: word("/corporate-identity"),
        },
        {
          name: "Document rebranding",
          description:
            "Update existing documents to a new brand without breaking the content.",
          href: word("/document-rebranding-services"),
        },
      ],
    },
    {
      title: "Forms and automation",
      items: [
        {
          name: "Custom toolbars and ribbons",
          description:
            "Custom ribbon tabs that put your team's tools one click away.",
          href: word("/custom-toolbars-and-ribbons"),
        },
        {
          name: "Quick Parts",
          description:
            "Reusable blocks of approved text and layouts you can insert in seconds.",
          href: word("/quick-parts"),
        },
        {
          name: "Fill-in forms",
          description:
            "Structured forms with dropdowns, checkboxes and locked sections.",
          href: word("/fill-in-forms"),
        },
        {
          name: "Popup forms",
          description:
            "Guided forms that build a finished document from a few answers.",
          href: word("/popup-forms"),
        },
        {
          name: "Mail merge",
          description:
            "Personalised letters, emails and labels generated from your data.",
          href: word("/mail-merge"),
        },
        {
          name: "Remove repetition",
          description:
            "Cut repetitive formatting and typing with automation inside Word.",
          href: word("/remove-repetition-and-increase-productivity"),
        },
      ],
    },
    {
      title: "Conversion, access and training",
      items: [
        {
          name: "Word to PDF conversion",
          description:
            "Reliable PDF output, including accessible and editable PDF forms.",
          href: word("/word-to-pdf-conversion"),
        },
        {
          name: "Accessibility",
          description:
            "Documents built to meet accessibility standards for every reader.",
          href: word("/accessibility"),
        },
        {
          name: "Word training",
          description:
            "Practical training built around your own documents and templates.",
          href: word("/training"),
        },
        {
          name: "Video portal",
          description: "Short how-to videos your team can watch any time.",
          href: word("/video-portal"),
        },
        {
          name: "Google Docs to Word migration",
          description:
            "Move content from Google Docs into properly structured Word documents.",
          href: word("/google-docs-to-word-migration"),
        },
        {
          name: "Upgrades and migration",
          description:
            "Smooth upgrades and migrations for your Word templates and macros.",
          href: word("/upgrades-and-migration"),
        },
      ],
    },
  ],
};

/* ---------- Access and databases ---------- */

export const accessSection = {
  title: "Access, SQL Server and databases",
  eyebrow: "Databases",
  intro:
    "Whether your Access database needs rescuing, upgrading or replacing, our database team will tell you plainly what makes sense, then deliver it.",
  site: { name: "Visit Access Experts", href: access() },
  columns: { service: "Service", helps: "Where it helps" },
  rows: [
    {
      name: "Access support",
      href: access("/access-support"),
      helps: "Ongoing help when a database misbehaves.",
    },
    {
      name: "Optimisation and repair",
      href: access("/access-database-optimisation-and-repair"),
      helps: "Slow, corrupt or overgrown databases.",
    },
    {
      name: "SQL Server backend",
      href: access("/sql-server-backend-business-solutions"),
      helps: "More users, more data and stronger security.",
    },
    {
      name: "Azure cloud solutions",
      href: access("/access-azure-cloud-based-solutions"),
      helps: "Reaching your database from anywhere.",
    },
    {
      name: "Access online",
      href: access("/access-online"),
      helps: "Sharing an Access system through the browser.",
    },
    {
      name: "Upgrades and migration",
      href: access("/upgrades-and-migration"),
      helps: "Moving an old database to a current platform.",
    },
    {
      name: "3rd party product integration",
      href: access("/3rd-party-product-integration"),
      helps: "Connecting Access to the other tools you use.",
    },
    {
      name: "Access with Power BI",
      href: access("/integrate-access-with-power-bi"),
      helps: "Modern reporting on your existing data.",
    },
    {
      name: "Database development",
      href: "/services/by-business-solution/database-development-and-solutions",
      helps: "Building a new database on the right platform.",
    },
    {
      name: "Is Access right for you?",
      href: access("/is-access-right-for-your-company"),
      helps: "A straight answer before you invest.",
    },
  ],
};

/* ---------- PowerPoint and Publisher ---------- */

export const powerPointSection = {
  title: "PowerPoint and Publisher",
  eyebrow: "Presentations",
  intro:
    "Presentations that look professional and are easy for your whole team to update, from custom templates to fully automated decks.",
  slides: [
    {
      name: "Custom templates and presentations",
      href: "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
      description: "On-brand from the first slide.",
    },
    {
      name: "Presentation redesign",
      href: "/services/microsoft-powerpoint/existing-presentation-redesign",
      description: "Give an existing deck a clean, consistent look.",
    },
    {
      name: "Automate with VBA",
      href: "/services/microsoft-powerpoint/automate-presentations-with-vba",
      description: "Generate decks from your data.",
    },
    {
      name: "Training and assistance",
      href: "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
      description: "Confident users, better presentations.",
    },
    {
      name: "PowerPoint overview",
      href: "/services/microsoft-powerpoint",
      description: "Everything we do in PowerPoint.",
    },
  ],
  extra: {
    name: "Microsoft Publisher",
    href: "/services/microsoft-publisher",
    description: "Publisher help and migration.",
  },
};

/* ---------- Custom development ---------- */

export const customDevSection = {
  title: "Custom development and integration",
  eyebrow: "Software",
  intro:
    "When off-the-shelf will not do, our programmers build the system. We turn business processes into web apps, portals, add-ins and mobile apps.",
  stack: [
    "JavaScript",
    "PHP",
    ".NET",
    "VBA",
    "Python",
    "React Native",
    "and more",
  ],
  lines: [
    {
      name: "Business analysis",
      href: "/services/business-analysis",
      description: "Requirements first, so the right thing gets built.",
    },
    {
      name: "App and custom development",
      href: "/services/microsoft-office-365/app-and-custom-development",
      description: "Web apps, portals and mobile apps.",
    },
    {
      name: "Custom Office solutions",
      href: "/services/by-business-solution/custom-office-solutions",
      description: "Tailored tools inside the Office apps you use.",
    },
    {
      name: ".NET development",
      href: "/services/microsoft-dot-net",
      description: "Robust business applications.",
    },
    {
      name: "Online solutions",
      href: "/services/by-business-solution/online-solutions",
      description: "Bring your process to the web.",
    },
    {
      name: "Add-in creation",
      href: "/services/by-business-solution/add-in-creation",
      description: "Extend Office with your own tools.",
    },
    {
      name: "3rd party and Office integration",
      href: "/services/by-business-solution/3rd-party-application-or-office-integration",
      description: "Make your systems talk to each other.",
    },
    {
      name: "VBA and macro development",
      href: "/services/by-business-solution/vba-macro-development",
      description: "Automation inside Office.",
    },
    {
      name: "VBScript",
      href: "/services/microsoft-vbscript",
      description: "Scripting and maintenance of existing code.",
    },
    {
      name: "ActiveX and VBScript migration",
      href: "/services/activex-vbscript-migration",
      description: "Retire legacy technology safely.",
    },
    {
      name: "Cloud solutions with Azure",
      href: "/services/by-business-solution/cloud-based-solutions-with-azure",
      description: "Hosting and data in the cloud.",
    },
    {
      name: "Remote data gathering",
      href: "/services/microsoft-office-365/remote-data-gathering-from-any-device",
      description: "Collect data from any device.",
    },
  ],
};

/* ---------- Microsoft 365, support and training ---------- */

export const microsoft365Section = {
  title: "Microsoft 365, support and training",
  eyebrow: "Everyday Microsoft",
  intro:
    "Get the most from the Microsoft tools you already pay for, and have specialists on hand when something goes wrong.",
  pillars: [
    {
      title: "Microsoft 365 and cloud",
      icon: "cloud",
      items: [
        {
          name: "Microsoft Office services",
          href: "/services/microsoft-office",
        },
        {
          name: "Office upgrades and migration",
          href: "/services/microsoft-office/upgrades-and-migration",
        },
        { name: "Microsoft 365", href: "/services/microsoft-office-365" },
        {
          name: "Cloud backup with OneDrive",
          href: "/services/microsoft-office-365/cloud-backup-with-onedrive",
        },
      ],
    },
    {
      title: "Support",
      icon: "support",
      items: [
        { name: "Excel support", href: excel("/excel-support") },
        { name: "Access support", href: access("/access-support") },
        {
          name: "Power Platform support",
          href: powerPlatform("/power-platform-support"),
        },
      ],
    },
    {
      title: "Training",
      icon: "training",
      items: [
        { name: "Word training", href: word("/training") },
        {
          name: "PowerPoint training",
          href: "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
        },
      ],
    },
  ],
};

/* ---------- Proof, specialist sites, audiences, FAQ ---------- */

// Figures taken from published case studies. Only the hub is linked, not each study.
export const caseStudyCallout = {
  title: "Results our clients have seen",
  eyebrow: "Proven results",
  linkLabel: "See all case studies",
  href: "/case-studies",
  stats: [
    {
      figure: "6–7 days to 90 minutes",
      caption: "Investor application review, using an AI agentic workflow",
      image: "/case-studies/kula.png",
    },
    {
      figure: "48 hours down to just 3",
      caption: "Customer service ticket resolution, with chained AI agents",
      image: "/case-studies/sporting-goods-agentic-customer-serviceLg.png",
    },
    {
      figure: "2 weeks to 12 minutes",
      caption: "Competitor change response, with AI competitive intelligence",
      image: "/case-studies/life-insurance-competitive-intelligenceLg.png",
    },
    {
      figure: "30 minutes to under 1",
      caption: "Project folder setup, automated with Power Automate",
      image: "/case-studies/manufacturing-project-setupLg.webp",
    },
  ],
};

export const specialistSites = {
  title: "Our specialist sites",
  eyebrow: "The group",
  intro:
    "Deeper detail on each area, from the teams who do the work every day.",
  sites: [
    {
      name: "officeexperts.com.au",
      href: null,
      tagline: "The full Microsoft Office and AI offering",
    },
    {
      name: "wordexperts.com.au",
      href: word(),
      tagline: "Templates, forms, rebranding and Word automation",
    },
    {
      name: "excelexperts.com.au",
      href: excel(),
      tagline: "Spreadsheets, VBA, reporting and add-ins",
    },
    {
      name: "accessexperts.com.au",
      href: access(),
      tagline: "Access databases, SQL Server and cloud migration",
    },
    {
      name: "powerplatformexperts.com.au",
      href: powerPlatform(),
      tagline: "Power Apps, Power Automate, Power BI and Power Pages",
    },
  ],
};

export const audiences = {
  title: "Who we work with",
  eyebrow: "Our clients",
  items: [
    {
      name: "Government departments",
      href: word("/government-departments"),
      description:
        "Enterprise template suites, accessible documents and controlled forms.",
    },
    {
      name: "Companies and organisations",
      href: word("/companies-and-organisations"),
      description:
        "Brand-consistent documents and smarter processes for teams of every size.",
    },
  ],
};

export const faqs = {
  title: "Common questions",
  eyebrow: "FAQ",
  items: [
    {
      question: "Which of your teams should I contact?",
      answer:
        "You do not need to choose. Tell us what you are trying to achieve through the contact form or a quote request and we will bring in the right specialists from across the group.",
    },
    {
      question: "Do you work with clients outside my city?",
      answer:
        "Yes. Our programmers are located across the country and we work with clients throughout Australia.",
    },
    {
      question: "Can you fix or extend something someone else built?",
      answer:
        "Yes. We can review an existing spreadsheet, database, template or app, fix what is wrong and extend it.",
    },
    {
      question: "Should I use Copilot, Power Automate or a custom AI agent?",
      answer:
        "It depends on your data, your processes and your budget. Copilot suits everyday productivity, Power Automate suits workflows inside Microsoft 365, and custom agents suit work that needs to reach across other systems. We will recommend the simplest option that does the job.",
    },
    {
      question: "How do quotes work?",
      answer:
        "Use the request a quote page to describe what you need. We will come back to you with the next steps and an estimate.",
    },
    {
      question: "How long have you been doing this?",
      answer:
        "Office Experts Group was established in 2000, and our team of 25 plus programmers works across the full Microsoft suite.",
    },
  ],
};
