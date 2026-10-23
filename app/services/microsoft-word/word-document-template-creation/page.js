import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Segment4 = dynamic(() => import("./(components)/Segment4"));
const Segment5 = dynamic(() => import("./(components)/Segment5"));
const Segment6 = dynamic(() => import("./(components)/Segment6"));
const Segment7 = dynamic(() => import("./(components)/Segment7"));
const Segment8 = dynamic(() => import("./(components)/Segment8"));
const Conclusion = dynamic(() => import("./(components)/Conclusion"));
const Image = dynamic(() => import("./(components)/Image"));
const TemplateCards = dynamic(() => import("../../components/TemplateCards"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import startup from "../../public/pageHeros/startup.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import page1 from "../../public/books/environment/page1.webp";
import page2 from "../../public/books/environment/page2.webp";
import page3 from "../../public/books/environment/page3.webp";
import page4 from "../../public/books/environment/page4.webp";
import page5 from "../../public/books/environment/page5.webp";
import page6 from "../../public/books/environment/page6.webp";
import page7 from "../../public/books/environment/page7.webp";
import page8 from "../../public/books/environment/page8.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/word-document-template-creation",
      url: "https://www.wordexperts.com.au/word-document-template-creation",
      name: "Word Document Template Creation",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-01-13T14:26:07+00:00",
      dateModified: "2026-03-02T00:00:00+00:00",
      description:
        "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-document-template-creation#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.wordexperts.com.au/word-document-template-creation",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.wordexperts.com.au/word-document-template-creation#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Word Document/Template Creation",
          item: "https://www.wordexperts.com.au/word-document-template-creation",
        },
      ],
    },
  ],
};

const Page = () => {
  const images = [page1, page2, page3, page4, page5, page6, page7, page8];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Word Document Template Creation"
        desktopImage={startup}
        mobileImage={graph}
        altDesk={"Word template"}
        altMob={"graphs"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <section style={{ display: "flex", margin: "0 auto" }}>
        <Image />
      </section>
      <PageSegment5 />
      <Segment4 />
      <TemplateCards images={images} cardWidth={340} />
      <Segment5 />
      <Segment6 />
      <Segment7 />
      <ExpertsAwait />
      <Segment8 />
      <Conclusion />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Word template builds we've delivered"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/committee-report-master-template-pdf-merge",
            linkText: "See the weekend turnaround",
            title:
              "Turning a multi-author committee report into one polished PDF over a weekend",
            description:
              "A local executive committee needed reports from several authors with limited Word experience combined into a single submission against an urgent deadline. We built a Master Template, transferred each author's content into it after hours and over the weekend, then merged the result with several supporting PDFs into one clean PDF.",
            image:
              "https://www.officeexperts.com.au/case-studies/committee-report-master-template-pdf-mergeLg.png",
            imageAlt:
              "Master Template and merged PDF for a multi-author committee report",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/water-education-program-word-powerpoint-templates",
            linkText: "See the lesson templates",
            title:
              "Turning an InDesign lesson design into Word and PowerPoint templates educators can use",
            description:
              "The client's water education program had a lesson design built in InDesign, but curriculum writers across Western Australia needed to build lessons in Word and PowerPoint. We translated the design into working Word and PowerPoint templates, including Quick Parts for the Word layouts and a PowerPoint Slide Master system with precise placeholders, locked-down brand elements and purpose-built layouts for activities, diagrams and assessment pages.",
            image:
              "https://www.officeexperts.com.au/case-studies/water-education-program-templatesLg.png",
            imageAlt:
              "Word and PowerPoint lesson templates for a water education program",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
