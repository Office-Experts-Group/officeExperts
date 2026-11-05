// utils/schemaGenerators.js
// Generates reusable Organization, LocalBusiness, and WebSite schemas for Office Experts Group
// Used across all 5 sites: officeexperts, excelexperts, wordexperts, accessexperts, powerplatformexperts

// Shared service area used by both Organization and ProfessionalService schemas
const SERVICE_AREAS = [
  { "@type": "Country", name: "Australia" },
  { "@type": "AdministrativeArea", name: "New South Wales" },
  { "@type": "AdministrativeArea", name: "Victoria" },
  { "@type": "AdministrativeArea", name: "Queensland" },
  { "@type": "AdministrativeArea", name: "Western Australia" },
  { "@type": "AdministrativeArea", name: "South Australia" },
  { "@type": "AdministrativeArea", name: "Tasmania" },
  { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
  { "@type": "AdministrativeArea", name: "Northern Territory" },
];

// Physical/operational locations for the business
const LOCATIONS = [
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Sydney",
      postalCode: "2000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Grafton",
      postalCode: "2460",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Newcastle",
      postalCode: "2300",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Wollongong",
      postalCode: "2500",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
      postalCode: "3000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Richmond",
      postalCode: "3121",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Geelong",
      postalCode: "3220",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Brisbane",
      postalCode: "4000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Gold Coast",
      postalCode: "4217",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "WA",
      addressLocality: "Perth",
      postalCode: "6000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "SA",
      addressLocality: "Adelaide",
      postalCode: "5000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NT",
      addressLocality: "Darwin",
      postalCode: "0800",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "ACT",
      addressLocality: "Canberra",
      postalCode: "2600",
    },
  },
];

const CATALOG_SITE_URL = "https://www.officeexperts.com.au";

// Single source of truth for every service Office Experts Group offers.
// Add or remove a name here and every page that outputs the business schema updates.
// Items marked "new" were not in the original list, so prune any you don't offer.
const SERVICE_CATEGORIES = [
  {
    category: "Excel",
    serviceType: "Excel Consulting",
    services: [
      "Excel Dashboard Creation",
      "Financial Modelling and Forecasting",
      "Power Pivot & Power Query",
      "VBA Macro Development",
      "Formula Development",
      "Data Manipulation",
      "Pivot Tables & Reporting",
      "Excel Support and Troubleshooting",
      "Excel Upgrades & Migration",
      "Excel Add-in Development", // new
      "Custom Excel Tools and Calculators", // new
    ],
  },
  {
    category: "Access and Databases",
    serviceType: "Access Consulting",
    services: [
      "Access Database Development",
      "Azure Cloud Integration",
      "Database Migration",
      "Third-party Integration",
      "Access Technical Support",
      "SQL Server Database Development", // new
    ],
  },
  {
    category: "Word",
    serviceType: "Word Consulting",
    services: [
      "Word Template Creation",
      "Template Conversion",
      "Accessibility Solutions",
      "Custom UI Development",
      "Form Development",
      "Government Documentation Solutions",
      "Word Document Automation", // new
      "Word Troubleshooting and Document Repair", // new
    ],
  },
  {
    category: "PowerPoint",
    serviceType: "PowerPoint Consulting",
    services: [
      "PowerPoint Template Creation", // new
      "PowerPoint Automation", // new
    ],
  },
  {
    category: "Power Platform",
    serviceType: "Power Platform Consulting",
    services: [
      "Power BI Solutions",
      "Power Apps Development",
      "Power Automate",
      "Power Pages",
    ],
  },
  {
    category: "Microsoft 365",
    serviceType: "Microsoft Office Consulting",
    services: [
      "Office 365 Migration",
      "Process Automation",
      "SharePoint & OneDrive Solutions",
    ],
  },
  {
    category: "AI and Automation",
    serviceType: "AI Consulting",
    services: [
      "AI Agent Development", // new
      "Microsoft Copilot Implementation", // new
      "AI Process Automation", // new
    ],
  },
  {
    category: "Custom Software",
    serviceType: "Software Development",
    services: [
      "Web App Development", // new
      "Custom Software Development", // new
    ],
  },
  {
    category: "Consulting and Support",
    serviceType: "Microsoft Office Consulting",
    services: [
      "Business Analysis", // new
      "Managed Services",
      "Remote Consulting (Australia-wide)",
      "On-site Consulting",
      "Microsoft Office Training and Support", // new
    ],
  },
];

// Builds the full catalogue. Nested catalogues (one per category) hold the offers.
// The @id lets any page reference the catalogue instead of repeating it
export const generateOfferCatalogSchema = (siteUrl = CATALOG_SITE_URL) => ({
  "@type": "OfferCatalog",
  "@id": `${siteUrl}#services`,
  name: "Microsoft consulting and development services",
  itemListElement: SERVICE_CATEGORIES.map(
    ({ category, serviceType, services }) => ({
      "@type": "OfferCatalog",
      name: `${category} services`,
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, serviceType },
      })),
    }),
  ),
});

// ProfessionalService schema — valid properties only
// Note: areaServed and location are valid on LocalBusiness (ProfessionalService extends this)
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": "https://www.officeexperts.com.au#business",
  name: "Microsoft Office Consulting Services",
  url: "https://www.officeexperts.com.au",
  description:
    "Professional Microsoft Office consulting and support services across Australia",
  priceRange: "$$",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  areaServed: SERVICE_AREAS,
  location: LOCATIONS,
  hasOfferCatalog: generateOfferCatalogSchema(),
});

// Organization schema — clean, no invalid nested properties
export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.officeexperts.com.au#organization",
  name: "Office Experts Group",
  url: "https://www.officeexperts.com.au",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  foundingDate: "2000",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      availableLanguage: "en-AU",
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.officeexperts.com.au/logo.png",
    url: "https://www.officeexperts.com.au/logo.png",
    contentUrl: "https://www.officeexperts.com.au/logo.png",
    width: 1200,
    height: 630,
    caption: "Office Experts Group",
  },
  image: {
    "@id": "https://www.officeexperts.com.au/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});

// WebSite schema — parameterised so it works across all 5 sites
// domain:      full origin URL e.g. "https://www.excelexperts.com.au"
// name:        site brand name e.g. "Excel Experts"
// description: short site tagline for the description field
export const generateWebSiteSchema = (domain, name, description) => ({
  "@type": "WebSite",
  "@id": `${domain}#website`,
  url: domain,
  name,
  description,
  publisher: {
    // References the Organization node in the same @graph — no need to repeat org data
    "@id": `${domain}#organization`,
  },
  inLanguage: "en-AU",
});

const REGION_NAMES = {
  NSW: "New South Wales",
  VIC: "Victoria",
  QLD: "Queensland",
  WA: "Western Australia",
  SA: "South Australia",
  TAS: "Tasmania",
  ACT: "Australian Capital Territory",
  NT: "Northern Territory",
};

// City-scoped ProfessionalService + LocalBusiness for location pages.
// Replaces generateProfessionalServiceSchema() on those pages.
export const generateLocalBusinessSchema = ({
  pageUrl,
  city,
  regionCode,
  nearbyAreas = [],
}) => {
  const regionName = REGION_NAMES[regionCode];
  if (!regionName) {
    throw new Error(
      `generateLocalBusinessSchema: unknown regionCode "${regionCode}"`,
    );
  }

  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${pageUrl}#localbusiness`,
    name: `Office Experts Group ${city}`,
    url: pageUrl,
    description: `Microsoft Office consulting and development services for ${city} businesses`,
    telephone: "1300 102 810",
    email: "consult@officeexperts.com.au",
    image: "https://www.officeexperts.com.au/logo.png",
    priceRange: "$$",
    // Service-area business: locality only, no street address
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: regionCode,
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "City", name: city },
      ...nearbyAreas.map((name) => ({ "@type": "Place", name })),
      { "@type": "State", name: regionName },
    ],
    parentOrganization: {
      "@id": "https://www.officeexperts.com.au#organization",
    },
    knowsAbout: [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Microsoft Access",
      "Power Platform",
      "Microsoft 365",
      "SharePoint",
      "AI Agents",
      "VBA Development",
      "Custom Office Solutions",
    ],
  };
};

import { testimonials } from "../testimonials";

const DEFAULT_SITE_URL = "https://www.officeexperts.com.au";
const DEFAULT_BUSINESS_NAME = "Office Experts Group";

// Testimonials don't store a star rating, so every review is treated as 5/5
const RATING = { best: 5, worst: 1, value: 5 };

// Splits "Zoran Lozevski, CEO" or "Dr Janet Congues PhD - Evaluation Coordinator"
// into a clean name plus an optional job title
const parseAuthor = (rawName = "") => {
  const [name, ...roleParts] = rawName.trim().split(/\s+-\s+|,\s+/);
  const jobTitle = roleParts.join(", ");
  return { name, ...(jobTitle && { jobTitle }) };
};

// The `contact` field is a mix of websites and company names (or blank).
// Websites become an Organization url, plain text becomes the name.
// LinkedIn links are personal profiles, not employers, so they are skipped.
const parseEmployer = (contact = "") => {
  const value = contact.trim();
  if (!value || /linkedin\./i.test(value)) return null;

  const looksLikeDomain = !/\s/.test(value) && /\.\w{2,}/.test(value);
  if (!looksLikeDomain) return { "@type": "Organization", name: value };

  try {
    const { origin } = new URL(
      /^https?:\/\//i.test(value) ? value : `https://${value}`,
    );
    return { "@type": "Organization", url: origin };
  } catch {
    return null; // malformed domain, leave the employer out
  }
};

// One Review node. Nested inside the business node, so itemReviewed is implied
const generateReviewNode = (testimonial, reviewId) => {
  const employer = parseEmployer(testimonial.contact);

  return {
    "@type": "Review",
    "@id": reviewId,
    reviewRating: {
      "@type": "Rating",
      ratingValue: RATING.value,
      bestRating: RATING.best,
      worstRating: RATING.worst,
    },
    author: {
      "@type": "Person",
      ...parseAuthor(testimonial.name),
      ...(employer && { worksFor: employer }),
    },
    reviewBody: testimonial.content.trim(),
    inLanguage: "en-AU",
  };
};

/**
 * Builds ONE graph node that carries the aggregateRating and reviews.
 * It shares its @id with the main business node, so JSON-LD merges them
 * into a single entity (no orphaned AggregateRating nodes).
 *
 * @param {object}  options
 * @param {string}  options.siteUrl       Site origin, no trailing slash
 * @param {string}  options.businessName  Name of the business being reviewed
 * @param {string}  options.entityId      Must match the @id of your main Organization /
 *                                        ProfessionalService node
 * @param {string}  options.entityType    Schema type of that node
 * @param {number}  options.limit         Reviews to output (default: all). The
 *                                        aggregate always counts every testimonial
 * @returns {object} node to spread into a page's "@graph"
 */
export const generateTestimonialSchema = ({
  siteUrl = DEFAULT_SITE_URL,
  businessName = DEFAULT_BUSINESS_NAME,
  entityId = `${siteUrl}#organization`,
  entityType = "Organization",
  limit = testimonials.length,
} = {}) => {
  // Index comes from the full list so review @ids stay stable on every page
  const reviews = testimonials
    .slice(0, limit)
    .map((testimonial, index) =>
      generateReviewNode(testimonial, `${siteUrl}#review-${index + 1}`),
    );

  return {
    "@type": entityType,
    "@id": entityId,
    name: businessName,
    url: siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value,
      bestRating: RATING.best,
      worstRating: RATING.worst,
      reviewCount: testimonials.length,
    },
    review: reviews,
  };
};

// Usage in a page.js schema:
//   "@graph": [
//     generateOrganizationSchema(),
//     generateProfessionalServiceSchema(),
//     generateTestimonialSchema({ limit: 3 }),   // home / about
//     generateTestimonialSchema(),               // dedicated testimonials page
//     ...
//   ]
