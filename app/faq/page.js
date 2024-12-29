import React from "react";

import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/general";
import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";

import faq from "../../public/pageHeros/faq.webp";
import faqMob from "../../public/pageHeros/mob/faqMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/faq/",
      url: "https://www.officeexperts.com.au/faq/",
      name: "Frequently Asked Questions | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/faq/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/faq/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/faq/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Frequently Asked Questions",
        },
      ],
    },
  ],
};

const faqSchema = [
  {
    "@type": "Question",
    name: "What skills do you have in your company?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "With a large group of experienced designers and programmers, we specialise in Microsoft technologies and a range of 3rd party accounting, CRM, and other applications. Skills include Microsoft Office design (Word, PowerPoint, Publisher), Excel, web-based solutions with ASP.NET and PHP, Office add-in development using VSTO, VBA/Macro programming for various Office applications, SQL Server development, Access database programming, 3rd party product API and ODBC integration, Office 365/SharePoint support, .NET Development in VB.NET and C#.NET, and Azure solutions.",
    },
  },
  {
    "@type": "Question",
    name: "Where are we located?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Our experts service all of Australia and New Zealand, with offices and consultants in major cities including Sydney, Melbourne, Brisbane, Canberra, Perth, Gold Coast, Central Coast of NSW, Darwin, and Northern NSW.",
    },
  },
  {
    "@type": "Question",
    name: "Do you work onsite or work remotely?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We work both onsite and remotely, with 95% of our services conducted via remote access. We use tools like Team Viewer and Skype, and are open to other reputable remote software used by our clients. Our consultants are also available for onsite work across various locations.",
    },
  },
  {
    "@type": "Question",
    name: "How do you charge?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We offer transparent pricing with no hidden costs, along with free initial client consultations. Our range of pricing options can be customized to suit your requirements and needs.",
    },
  },
  {
    "@type": "Question",
    name: "Do you service international clients?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we service clients worldwide including in New Zealand, USA, Papua New Guinea, UK, and other countries, primarily via remote access. Contact us to discuss your needs, pricing, and timelines.",
    },
  },
  {
    "@type": "Question",
    name: "Is our information kept confidential?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, all consultants sign a strict Confidentiality Agreement with us. We can also sign your CA or NDA if required. Client confidentiality and information security are our priorities.",
    },
  },
  {
    "@type": "Question",
    name: "How can we pay you for your services?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Payments can be made over the phone or by using a range of methods. Please contact us to discuss the payment methods that work best for you.",
    },
  },
  {
    "@type": "Question",
    name: "Still have questions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use our Contact Form or call us today, and one of our expert consultants will promptly get back to you.",
    },
  },
];

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title={"FAQ'S"}
        altDesk={"Question mark"}
        altMob={"Question mark"}
        desktopImage={faq}
        mobileImage={faqMob}
      />
      <div
        style={{
          margin: "6rem 10vw",
          "@media (max-width: 768px)": {
            margin: "6rem 2vw",
          },
        }}
      >
        <FAQSection faqs={faqs} />
      </div>
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
