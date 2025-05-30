// utils/schemaGenerators.js
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": "https://www.officeexperts.com.au#business",
  name: "Microsoft Office Consulting Services",
  url: "https://www.officeexperts.com.au",
  description: "Professional Microsoft Office consulting and support services",
  priceRange: "$$",
  offers: [
    {
      "@type": "Offer",
      name: "Remote Consulting",
      description: "Australia-wide remote Microsoft Office consulting services",
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      name: "On-site Consulting",
      description:
        "In-house Microsoft Office consulting services available in major metropolitan areas",
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
  ],
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
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  provider: {
    "@type": "Organization",
    "@id": "https://www.officeexperts.com.au#organization",
  },
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
});

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.officeexperts.com.au#organization",
  name: "Office Experts Group",
  url: "https://www.officeexperts.com.au",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  // Enhanced contact point information
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      availableLanguage: ["en", "en-AU"],
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
  // Remote service availability
  makesOffer: [
    // Excel Experts (excelexperts.com.au)
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Excel Dashboard Creation",
        description:
          "Creation of interactive and appealing Excel dashboards to provide real-time insights in your business.",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Financial Modeling and Forecasting",
        description:
          "Creation of tools for financial models and forecasting using Excel for planning and strategy.",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Power Pivot & Power Query",
        description:
          "Development of advanced data modelling, analytics, transformations and reporting using Power Pivot & Power Query.",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Add-in Development",
        description:
          "Custom Excel add-in development for enhanced spreadsheet functionality",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Data Manipulation",
        description:
          "Professional data cleaning, transformation, and analysis services",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pivot Tables & Reporting",
        description:
          "Advanced pivot table creation and custom reporting solutions",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Excel Support and Troubleshooting",
        description:
          "Ongoing technical support and troubleshooting for your Excel solutions",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Development",
        description: "Tailored Excel solution design and implementation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Formula Development",
        description: "Complex Excel formula creation and optimisation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Upgrades & Migration",
        description: "Excel version upgrades and workbook migration services",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "VBA Macro Development",
        description: "Custom VBA macro programming for Excel automation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    // Access Experts (accessexperts.com.au)
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Azure Cloud Integration",
        description: "Access database integration with Azure cloud services",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Online Access Solutions",
        description: "Web-enabled Microsoft Access application development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Third-party Integration",
        description: "Integration of Access with external systems and API's",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Technical Support",
        description: "Comprehensive Access database support and maintenance",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Database Migration",
        description: "Access database upgrades and data migration services",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Solutions",
        description: "Bespoke Access database design and development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    // Word Experts (wordexperts.com.au)
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Template Creation",
        description: "Professional Word document template development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Template Conversion",
        description: "Legacy template modernisation and conversion services",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Accessibility Solutions",
        description: "WCAG compliance and accessibility implementation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom UI Development",
        description: "Customised toolbar and ribbon interface development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Training Services",
        description: "Specialised Microsoft Word training programs",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Form Development",
        description: "Interactive form creation and automation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Government Solutions",
        description:
          "Specialised documentation solutions for government departments",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    // Power Platform Experts (powerplatformexperts.com.au)
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Power BI Solutions",
        description: "Custom dashboard development and data visualisation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Power Apps Development",
        description: "Custom business application development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Power Automate",
        description: "Workflow automation and business process optimization",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Power Pages",
        description: "External-facing website development and portals",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    // Office Experts (officeexperts.com.au)
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Office 365 Migration",
        description: "Complete Office 365 migration and implementation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Development",
        description: "Tailored Microsoft Office solution development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Process Automation",
        description: "Office-wide business process automation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud Solutions",
        description: "OneDrive and SharePoint implementation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Exchange Setup",
        description: "Exchange Online configuration and management",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Remote Solutions",
        description: "Cross-device data access and management",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Managed Services",
        description: "Comprehensive Office 365 support and maintenance",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Excel Support",
        description: "Advanced Excel development and support",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Access Solutions",
        description: "Database development and maintenance",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Word Services",
        description: "Document automation and template development",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "PowerPoint Services",
        description: "Presentation design and automation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Power Platform Integration",
        description: "Business intelligence and process automation",
      },
      businessFunction: "http://purl.org/goodrelations/v1#ProvideService",
    },
  ],
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-AU",
    "@id": "/logo.png",
    url: "/logo.png",
    contentUrl: "/logo.png",
    width: 1200,
    height: 630,
    caption: "Office Experts Group",
  },
  image: {
    "@id": "/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});
