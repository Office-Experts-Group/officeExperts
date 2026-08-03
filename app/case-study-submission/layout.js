// app/case-study-submission/layout.js
import React from "react";

// This is an internal tool for the dev/consulting team, not a public
// marketing page, so it's kept out of search results entirely.
export const metadata = {
  title: "Submit a Case Study | Office Experts Group",
  description:
    "Internal form for the Office Experts Group team to submit real-world case studies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CaseStudySubmissionLayout({ children }) {
  return <>{children}</>;
}
