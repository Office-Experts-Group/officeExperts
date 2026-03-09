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

// Services offered — using valid schema.org Service type with serviceType string (not deprecated businessFunction URL)
const SERVICES = [
  // Excel
  { name: "Excel Dashboard Creation", serviceType: "Excel Consulting" },
  {
    name: "Financial Modelling and Forecasting",
    serviceType: "Excel Consulting",
  },
  { name: "Power Pivot & Power Query", serviceType: "Excel Consulting" },
  { name: "VBA Macro Development", serviceType: "Excel Consulting" },
  { name: "Formula Development", serviceType: "Excel Consulting" },
  { name: "Data Manipulation", serviceType: "Excel Consulting" },
  { name: "Pivot Tables & Reporting", serviceType: "Excel Consulting" },
  {
    name: "Excel Support and Troubleshooting",
    serviceType: "Excel Consulting",
  },
  { name: "Excel Upgrades & Migration", serviceType: "Excel Consulting" },
  // Access
  { name: "Access Database Development", serviceType: "Access Consulting" },
  { name: "Azure Cloud Integration", serviceType: "Access Consulting" },
  { name: "Database Migration", serviceType: "Access Consulting" },
  { name: "Third-party Integration", serviceType: "Access Consulting" },
  { name: "Access Technical Support", serviceType: "Access Consulting" },
  // Word
  { name: "Word Template Creation", serviceType: "Word Consulting" },
  { name: "Template Conversion", serviceType: "Word Consulting" },
  { name: "Accessibility Solutions", serviceType: "Word Consulting" },
  { name: "Custom UI Development", serviceType: "Word Consulting" },
  { name: "Form Development", serviceType: "Word Consulting" },
  {
    name: "Government Documentation Solutions",
    serviceType: "Word Consulting",
  },
  // Power Platform
  { name: "Power BI Solutions", serviceType: "Power Platform Consulting" },
  { name: "Power Apps Development", serviceType: "Power Platform Consulting" },
  { name: "Power Automate", serviceType: "Power Platform Consulting" },
  { name: "Power Pages", serviceType: "Power Platform Consulting" },
  // Office 365
  { name: "Office 365 Migration", serviceType: "Microsoft Office Consulting" },
  { name: "Process Automation", serviceType: "Microsoft Office Consulting" },
  {
    name: "SharePoint & OneDrive Solutions",
    serviceType: "Microsoft Office Consulting",
  },
  { name: "Managed Services", serviceType: "Microsoft Office Consulting" },
  {
    name: "Remote Consulting",
    serviceType: "Australia-wide services",
  },
  {
    name: "On-site Consulting",
    serviceType: "In-house Microsoft Office consultation",
  },
];

// Builds an Offer node — no businessFunction, no provider
// hasOfferCatalog is on Organization; individual Offer nodes just describe the service
const buildOffers = () =>
  SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      serviceType: s.serviceType,
    },
  }));

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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Microsoft Office Consulting Services",
    itemListElement: buildOffers(),
  },
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
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}?s={search_term_string}`,
      },
      // Must be a plain string — object format (PropertyValueSpecification) causes validation errors
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: "en-AU",
});
