// utils/testimonialSchemaGenerator.js
// Generates Review and AggregateRating schemas for testimonial sections
// Used on home, about, and dedicated testimonials pages across all 5 sites

// Generates a unique @id for each review node
const generateReviewId = (domain, page, index) =>
  `${domain}#review-${page.replace(/\//g, "-")}-${index}`;

// Generates a single Review schema node
// itemReviewed points to the site's LocalBusiness @id — no offers/provider/businessFunction
const generateReviewSchema = (
  testimonial,
  domain,
  page,
  index,
  businessName,
) => ({
  "@type": "Review",
  "@id": generateReviewId(domain, page, index),
  itemReviewed: {
    "@type": "LocalBusiness",
    "@id": `${domain}#business`,
    name: businessName,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Person",
    name: testimonial.name,
  },
  reviewBody: testimonial.content,
  // Use a real or approximate date if known; avoid all-same hardcoded dates for large sets
  datePublished: testimonial.date || "2024-01-01",
  publisher: {
    "@type": "Organization",
    "@id": `${domain}#organization`,
    name: "Office Experts Group",
  },
});

// Generates an AggregateRating schema node
// itemReviewed points to the LocalBusiness @id — clean, no nested offers
const generateAggregateRatingSchema = (testimonials, domain, businessName) => ({
  "@type": "AggregateRating",
  "@id": `${domain}#aggregateRating`,
  itemReviewed: {
    "@type": "LocalBusiness",
    "@id": `${domain}#business`,
    name: businessName,
  },
  ratingValue: "5",
  bestRating: "5",
  worstRating: "1",
  reviewCount: testimonials.length,
});

// Core generator — builds the full schema @graph for a given page
// domain: full URL e.g. "https://www.officeexperts.com.au"
// page: page path slug e.g. "/" or "about-us"
// includeAll: true for testimonials page, false for home/about (uses first 3)
const generateTestimonialsSchema = (
  testimonials,
  domain,
  page,
  businessName,
  includeAll = false,
) => {
  const subset = includeAll ? testimonials : testimonials.slice(0, 3);

  const reviewSchemas = subset.map((testimonial, index) =>
    generateReviewSchema(testimonial, domain, page, index, businessName),
  );

  const aggregateSchema = generateAggregateRatingSchema(
    testimonials,
    domain,
    businessName,
  );

  return {
    "@context": "https://schema.org",
    "@graph": [aggregateSchema, ...reviewSchemas],
  };
};

// Page-specific exports — import these directly into page.js files
// Each returns a "@graph" array to be spread into the page's master schema

export const getHomePageSchema = (testimonials) =>
  generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "/",
    "Microsoft Office Consulting Services",
    false,
  );

export const getAboutPageSchema = (testimonials) =>
  generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "about-us",
    "Microsoft Office Consulting Services",
    false,
  );

export const getTestimonialsPageSchema = (testimonials) =>
  generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "client-testimonials",
    "Microsoft Office Consulting Services",
    true,
  );

// For use on sub-sites (e.g. excelexperts.com.au)
// Pass the domain, page slug, and business name appropriate to that site
export const getSiteTestimonialsSchema = (
  testimonials,
  domain,
  page,
  businessName,
  includeAll = false,
) =>
  generateTestimonialsSchema(
    testimonials,
    domain,
    page,
    businessName,
    includeAll,
  );
