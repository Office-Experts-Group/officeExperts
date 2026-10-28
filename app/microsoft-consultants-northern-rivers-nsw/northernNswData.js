// app/microsoft-consultants-northern-nsw/northernNswData.js
// Copy and links for the Northern NSW hub, kept apart from the components so the content
// can be edited and the links repointed in one place.
//
// LINK NOTES
// - Specialist site links (excelexperts, wordexperts, accessexperts, powerplatformexperts) point at
//   the sister domains for now. Repoint each one in its migration wave.
// - ServiceLink treats a /path as internal and a full URL as external, so the components
//   need no changes when a link moves onto officeexperts.com.au.
// - Gold Coast and Central Coast point at their support-and-training pages until those city hubs
//   exist. Repoint to /microsoft-consultants-gold-coast and /microsoft-consultants-central-coast-nsw
//   when they launch.
// - /services/{slug} URLs assume the flattened structure from the cleanup branch
//   (by-business-solution and microsoft-office levels removed).

const EXCEL = "https://www.excelexperts.com.au";
const WORD = "/services/microsoft-word";
const ACCESS = "https://www.accessexperts.com.au";
const POWER = "https://www.powerplatformexperts.com.au";

// ── Intro: how we work in the region ────────────────────────────────────────
export const ways = [
  {
    id: "remote",
    title: "Remote first",
    text: "Most projects run by screen-share and shared files, so there is no travel cost and no waiting for a visit.",
  },
  {
    id: "onsite",
    title: "On site by arrangement",
    text: "Hands-on workshops and training around the Tweed, Byron, Lismore, Ballina and Coffs areas when meeting in person is worth it.",
  },
  {
    id: "clock",
    title: "On your clock",
    text: "Northern NSW observes daylight saving. We schedule around your working day, including for businesses that also trade in Queensland.",
  },
];

// ── Story: then and now ─────────────────────────────────────────────────────
export const milestones = [
  {
    id: "founded",
    value: "2000",
    label: "Founded with humble beginnings in Northern NSW",
  },
  {
    id: "team",
    value: "25+",
    label: "consultants and programmers across Australia today",
  },
  {
    id: "practices",
    value: "6",
    label: "specialist areas - Excel, Word, Access, Power Platform, 365 and AI",
  },
];

// ── Regions: what drives each part of Northern NSW ──────────────────────────
// "extra" is an optional sentence with one inline link.
export const regions = [
  {
    id: "tweed-byron",
    name: "Tweed & Byron coast",
    places:
      "Tweed Heads · Murwillumbah · Kingscliff · Brunswick Heads · Byron Bay · Mullumbimby · Bangalow",
    body: "Tourism, hospitality and wellness businesses sit beside a strong creative and digital scene and a hinterland full of food producers and trades. Peak-season rosters, bookings and supplier orders, repeat enquiries by the dozen, and owner-operators who are the whole back office. We build the scheduling, reporting and enquiry handling around that rhythm.",
    extra: {
      before: "Many Tweed businesses also trade in Queensland, and our ",
      link: {
        label: "Gold Coast support and training",
        href: "/microsoft-support-and-training-gold-coast",
      },
      after: " page covers the other side of the border.",
    },
    uses: ["Excel", "Power Automate", "AI agents", "Word"],
  },
  {
    id: "lismore-ballina",
    name: "Lismore, Ballina & Richmond Valley",
    places: "Lismore · Ballina · Alstonville · Casino · Evans Head · Kyogle",
    body: "Health and community services, education, agriculture and food processing, plus a large building and trades sector working through the recovery from the 2022 floods. These are paperwork-heavy operations where a controlled workflow and a reliable record matter. We build forms, registers and reporting that capture information once and keep it safe off site.",
    uses: ["SharePoint", "Power Apps", "Power BI", "Access"],
  },
  {
    id: "clarence-coffs",
    name: "Clarence Valley & Coffs Coast",
    places:
      "Grafton · Maclean · Yamba · Bellingen · Coffs Harbour · Woolgoolga",
    body: "Sugar cane, seafood, bananas and blueberries, alongside health, education and a busy visitor economy. Growers and packers track harvests, quality and dispatch in spreadsheets, then re-key the same figures for compliance, payroll and invoicing. We tidy the data model and automate the reporting.",
    uses: ["Excel", "Access", "Power BI", "Power Automate"],
  },
  {
    id: "new-england",
    name: "New England & Tablelands",
    places: "Armidale · Glen Innes · Inverell · Tenterfield · Walcha",
    body: "Beef, wool and mixed farming, a university town, regional services and councils. Long distances and variable connectivity make remote-first support a natural fit, and field apps that sync later suit stock, inspection and compliance records.",
    uses: ["Power Apps", "SharePoint", "Word", "PowerPoint"],
  },
];

// Neighbouring city hubs, linked as a row beneath the regions
export const nearby = [
  {
    label: "Microsoft consultants Brisbane",
    href: "/microsoft-consultants-brisbane",
  },
  {
    label: "Gold Coast support and training",
    href: "/microsoft-support-and-training-gold-coast",
  },
  {
    label: "Microsoft consultants Sydney",
    href: "/microsoft-consultants-sydney",
  },
  {
    label: "Central Coast support and training",
    href: "/microsoft-support-and-training-central-coast-nsw",
  },
];

// ── Platforms: one row per Microsoft platform, with deep links ──────────────
export const platforms = [
  {
    id: "excel",
    name: "Excel",
    href: EXCEL,
    text: "Job costing, harvest and production tallies, rosters, quotes and grant reporting. We make the workbook dependable with VBA, Power Query and dashboards, or move the work somewhere sturdier when it has outgrown Excel.",
    links: [
      {
        label: "Excel VBA and macros",
        href: "/services/vba-macro-development",
      },
      {
        label: "Custom Excel formulas",
        href: `${EXCEL}/excel-formulas-and-custom-formulas`,
      },
      {
        label: "Data manipulation and Power Query",
        href: `${EXCEL}/data-manipulation`,
      },
    ],
  },
  {
    id: "word",
    name: "Word",
    href: WORD,
    text: "Tenders, grant applications, safety plans, contracts and proposals built from controlled templates, so every document looks right no matter who writes it.",
    links: [
      {
        label: "Word template design",
        href: `${WORD}/word-document-template-creation`,
      },
      { label: "Mail merge", href: `${WORD}/mail-merge` },
      { label: "Fill-in forms", href: `${WORD}/fill-in-forms` },
    ],
  },
  {
    id: "access",
    name: "Access",
    href: ACCESS,
    text: "Plenty of local organisations still run on an Access database someone built years ago. We repair it, speed it up and secure it, then move to SQL Server or the cloud in stages when you are ready.",
    links: [
      {
        label: "Access upgrades and migration",
        href: `${ACCESS}/upgrades-and-migration`,
      },
      {
        label: "Access repair and optimisation",
        href: `${ACCESS}/access-database-optimisation-and-repair`,
      },
      { label: "Access support", href: `${ACCESS}/access-support` },
    ],
  },
  {
    id: "power-platform",
    name: "Power Platform",
    href: POWER,
    text: "Power Apps for inspections, stock and field records that work on a phone, Power Automate for approvals and reminders, and Power BI to see it all in one place.",
    links: [
      {
        label: "Power Apps development",
        href: `${POWER}/services/microsoft-power-platform/microsoft-power-apps`,
      },
      {
        label: "Power Automate consulting",
        href: `${POWER}/services/microsoft-power-platform/microsoft-power-automate`,
      },
      {
        label: "Power BI consulting",
        href: `${POWER}/services/microsoft-power-platform/microsoft-power-bi`,
      },
    ],
  },
  {
    id: "powerpoint",
    name: "PowerPoint",
    href: "/services/microsoft-powerpoint",
    text: "Branded templates, funding and board presentations built straight from your data, and repairs for decks that fall apart on someone else's computer.",
    links: [
      {
        label: "Automated review decks",
        href: "/case-studies/retail-analytics-automated-review-deck-generator",
      },
      {
        label: "PowerPoint automation with VBA",
        href: "/services/vba-macro-development",
      },
    ],
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365 & SharePoint",
    href: "/services/microsoft-office-365",
    text: "SharePoint, Teams, OneDrive and Outlook set up so staff share one set of files, with sensible permissions and backups that do not live in a single building.",
    links: [
      {
        label: "SharePoint consulting",
        href: `${POWER}/sharepoint-consulting-and-development`,
      },
      {
        label: "Cloud backup with OneDrive",
        href: "/services/cloud-backup-with-onedrive",
      },
      {
        label: "Business process automation",
        href: "/services/business-process-automation",
      },
    ],
  },
  {
    id: "custom",
    name: "Custom software & integration",
    href: "/services/custom-office-solutions",
    text: "When off-the-shelf software does not fit: portals, web apps, APIs and integrations with Xero, MYOB and Salesforce, built on .NET, React and Azure.",
    links: [
      {
        label: "3rd party app integration",
        href: "/services/3rd-party-application-or-office-integration",
      },
      {
        label: "App and custom development",
        href: "/services/app-and-custom-development",
      },
      {
        label: "Database development",
        href: "/services/database-development-and-solutions",
      },
    ],
  },
];

// ── AI and agents ───────────────────────────────────────────────────────────
export const aiItems = [
  {
    id: "agents",
    name: "AI agent development",
    href: "/services/ai-agent-development",
    text: "Custom-coded agents in Python and JavaScript, built to do one job well. They can run inside your Microsoft tenant or outside it, whichever suits your data.",
  },
  {
    id: "email",
    name: "AI email triage",
    href: "/services/ai-email-triage",
    text: "Sort the enquiry inbox, route each message to the right person and draft a first reply, whether it is bookings, quotes or supplier mail.",
  },
  {
    id: "copilot",
    name: "Microsoft 365 Copilot",
    href: "/services/copilot",
    text: "Rollout, data readiness and training, with honest advice on where Copilot is enough and where a custom agent is the better tool.",
  },
  {
    id: "analysis",
    name: "Business analysis",
    href: "/services/business-analysis",
    text: "Not sure what to automate? Start here. We map how the work really flows before anything is built.",
  },
];

// ── Local conditions ────────────────────────────────────────────────────────
export const resilience = [
  {
    id: "files",
    title: "Your files, off site",
    text: "Documents, workbooks and databases held in SharePoint and OneDrive, with backups that do not depend on one machine in the shop, the shed or the spare room.",
    link: {
      label: "Cloud backup with OneDrive",
      href: "/services/cloud-backup-with-onedrive",
    },
  },
  {
    id: "offline",
    title: "Data capture that works offline",
    text: "Power Apps that keep recording inspections, stock and job details when the signal drops, and catch up once you are back in range.",
    link: {
      label: "Remote data gathering from any device",
      href: "/services/remote-data-gathering-from-any-device",
    },
  },
  {
    id: "systems",
    title: "Systems that do not live in one place",
    text: "Old Access databases and Excel-based systems moved in stages to SQL Server or the cloud, so one failure does not take everything with it.",
    link: {
      label: "Access upgrades and migration",
      href: `${ACCESS}/upgrades-and-migration`,
    },
  },
];

// ── Local FAQ ───────────────────────────────────────────────────────────────
// Plain-text answers only, because the same array feeds the FAQPage schema.
// The office question deliberately makes no claim of a local office.
export const faqs = [
  {
    question: "Do you have an office in Northern NSW?",
    answer:
      "No. Most projects are delivered remotely by screen-share and shared files, with on-site visits by arrangement for workshops, training or handovers.",
  },
  {
    question: "Will poor internet or mobile reception get in the way?",
    answer:
      "Remote sessions need very little bandwidth, and we can work around patchy connections. For field work, we build Power Apps that capture data offline and sync it when you are back in range, and keep files in the cloud so nothing is stranded on one computer.",
  },
  {
    question: "We are a small business. Is it worth getting help?",
    answer:
      "Often it is the small teams that gain the most, because one person is usually doing the work of three. We start with a free assessment, agree the single biggest time-waster and quote that first, so you are not committing to a large project.",
  },
  {
    question:
      "Can you fix an old Access database or a workbook nobody understands?",
    answer:
      "Yes. We repair, speed up and secure Access databases and complex Excel workbooks, document how they work, and move them to SQL Server or the cloud in stages if and when you want to. Nothing has to be thrown away on day one.",
  },
  {
    question: "Do you build AI agents, and does our data leave Microsoft 365?",
    answer:
      "We build custom agents in Python and JavaScript, plus Copilot and Microsoft 365 solutions. An agent can run inside your Microsoft tenant or outside it, whichever suits your data, and we agree on the boundaries before anything is built.",
  },
];

// ── Related case studies ────────────────────────────────────────────────────
// These are projects from clients across Australia, chosen because the industries
// will be familiar to Northern NSW businesses. None is presented as a local client.
export const caseStudies = [
  {
    href: "/case-studies/building-consultants-inspection-crm",
    title: "Building inspection enquiries to ready-to-send quotes",
    image: "/case-studies/gm-building-consultants-inspection-crmLg.png",

    description:
      "Replaced manual enquiry handling with an automated SharePoint, Power Apps and Power Automate pipeline that generates quotes ready to email.",
    linkText: "See the inspection pipeline",
  },
  {
    href: "/case-studies/food-manufacturer-excel-costing-workbook",
    title: "One costing system for a food manufacturer",
    image: "/case-studies/food-manufacturer-excel-costing-workbookLg.png",
    description:
      "Merged a set of disconnected Excel workbooks into one automated costing system with forms, state-based margins and Admin-only data protection.",
    linkText: "See the costing workbook",
  },
  {
    href: "/case-studies/healthcare-patient-form-followup-automation",
    title: "Patient form follow-up for around 1,000 patients",
    image: "/case-studies/healthcare-form-followupLg.webp",

    description:
      "Built scheduled Power Automate flows that remind, escalate and close off patient forms automatically.",
    linkText: "Read the automation case study",
  },
];
