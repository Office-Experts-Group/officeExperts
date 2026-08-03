// app/case-studies/[slug]/layout.js
import React from "react";

import { getCaseStudyBySlug, siteMeta } from "../caseStudies";

const SITE_URL = "https://www.officeexperts.com.au";

// generateMetadata runs per-request on the server, so each case study slug
// gets its own title, description and OpenGraph data without needing a
// separate layout file per study.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  // Fall back to a sensible default if the slug doesn't match — the page
  // itself still calls notFound(), this just avoids a broken <title> in the
  // brief moment metadata is generated ahead of that check.
  if (!study) {
    return { title: "Case Study | Office Experts Group" };
  }

  const brand = siteMeta[study.site];
  const url = `${SITE_URL}/case-studies/${study.slug}`;
  const title = `${study.title} | Case Study | Office Experts Group`;

  return {
    title,
    description: study.summary,

    openGraph: {
      title,
      description: study.summary,
      url,
      siteName: "Office Experts Group",
      images: [
        {
          url: study.image || "/logo.png",
          width: 700,
          height: 450,
          alt: `${study.client} case study`,
        },
      ],
      locale: "en-AU",
      type: "article",
    },

    keywords: [study.industry, brand?.name, "case study"].filter(Boolean),

    twitter: {
      card: "summary_large_image",
      site: "@OfficeExpertsG1",
      title,
      description: study.summary,
      images: [study.image || "/logo.png"],
    },

    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default function CaseStudyLayout({ children }) {
  return <>{children}</>;
}
