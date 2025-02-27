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
  const domainName = domain.split(".")[1];
  const serviceName =
    domainName.charAt(0).toUpperCase() + domainName.slice(1, -7);

  return {
    "@type": "Review",
    "@id": generateTestimonialId(domain, page, index),
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${domain}#business`,
      name: `Microsoft ${serviceName} Consulting Services`,
      provider: {
        "@type": "Organization",
        "@id": `${domain}#organization`,
      },
      description: `Professional Microsoft ${serviceName} consulting and support services`,
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      priceRange: "$$",
      offers: {
        "@type": "Offer",
        name: "Remote Consulting",
        description:
          "Australia-wide remote Microsoft Office consulting services",
        businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
      },
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
    datePublished: formatDate(new Date("2024-01-01")),
    publisher: {
      "@type": "Organization",
      "@id": `${domain}#organization`,
    },
  };
};

// Generate aggregated review schema
const generateAggregateSchema = (testimonials, domain) => {
  return {
    "@type": "AggregateRating",
    "@id": `${domain}#aggregateRating`,
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${domain}/#business`,
      name: "Office Experts Group",
      priceRange: "$$",
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      offers: {
        "@type": "Offer",
        name: "Remote Consulting",
        description:
          "Australia-wide remote Microsoft Office consulting services",
        businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
      },
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
  // Base schema
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [],
  };

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

  // Combine all schemas
  baseSchema["@graph"] = [aggregateSchema, ...testimonialSchemas];

  return baseSchema;
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
    "https://www.officeexperts.com.au/about-us",
    false
  );
};

export const getTestimonialsPageSchema = (testimonials) => {
  return generateTestimonialsSchema(
    testimonials,
    "https://www.officeexperts.com.au",
    "/client-testimonials",
    true
  );
};
