// Helper function to generate unique IDs for testimonials
const generateTestimonialId = (domain, page, index) => {
  return `${domain}#testimonial-${page}-${index}`;
};

// Helper to format date in ISO 8601
const formatDate = (date) => {
  return date.toISOString();
};

// Generate schema for a single testimonial
const generateTestimonialSchema = (testimonial, domain, page, index) => {
  return {
    "@type": "Review",
    "@id": generateTestimonialId(domain, page, index),
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
    datePublished: formatDate(new Date("2024-01-01")), // Set appropriate date
    publisher: {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
    },
  };
};

// Generate aggregated review schema
const generateAggregateSchema = (testimonials, domain) => {
  return {
    "@type": "AggregateRating",
    "@id": `${domain}/#aggregateRating`,
    itemReviewed: {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      name: "Office Experts Group",
    },
    ratingValue: "5",
    reviewCount: testimonials.length,
    bestRating: "5",
    worstRating: "1",
  };
};

// Main schema generator for testimonials pages
export const generateTestimonialsSchema = (
  testimonials,
  domain,
  page,
  includeAll = false
) => {
  // Add testimonial schemas based on page
  let testimonialsToInclude = testimonials;
  if (!includeAll) {
    // For home and about pages, only include a subset
    testimonialsToInclude = testimonials.slice(0, 3);
  }

  const testimonialSchemas = testimonialsToInclude.map((testimonial, index) =>
    generateTestimonialSchema(testimonial, domain, page, index)
  );

  // Add aggregate rating
  const aggregateSchema = generateAggregateSchema(testimonials, domain);

  // Return just the array of schemas since we're spreading into existing @graph
  return [aggregateSchema, ...testimonialSchemas];
};

// Usage example for different pages:
export const getHomePageSchema = (testimonials) => {
  return generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "/",
    false
  );
};

export const getAboutPageSchema = (testimonials) => {
  return generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "/about-us/",
    false
  );
};

export const getTestimonialsPageSchema = (testimonials) => {
  return generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "/client-testimonials/",
    true
  );
};
