// app/case-studies/[slug]/page.js

import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

import CaseStudyDetail from "./(components)/CaseStudyDetail";
import { caseStudies, getCaseStudyBySlug, siteMeta } from "../caseStudies";

const Contact = dynamic(() => import("../../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

const buildSchema = (study) => {
  const url = `${SITE_URL}/case-studies/${study.slug}`;
  const brand = siteMeta[study.site];

  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateProfessionalServiceSchema(),
      generateWebSiteSchema(
        SITE_URL,
        "Office Experts Group",
        "Australia-wide Microsoft Office, Excel, Word, Access and Power Platform Experts",
      ),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${study.title} | Case Study | Office Experts Group`,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${SITE_URL}#organization` },
        description: study.summary,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-AU",
        potentialAction: [{ "@type": "ReadAction", target: [url] }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: `${SITE_URL}/case-studies`,
          },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.title,
        description: study.summary,
        about: study.industry,
        publisher: brand
          ? { "@type": "Organization", name: brand.name, url: brand.domain }
          : undefined,
        mainEntityOfPage: { "@id": url },
      },
    ],
  };
};

const Page = async ({ params }) => {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  // Unknown slug — render the standard 404 rather than an empty template
  if (!study) {
    notFound();
  }

  const schema = buildSchema(study);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CaseStudyDetail study={study} />

      <Contact />
    </>
  );
};

export default Page;
