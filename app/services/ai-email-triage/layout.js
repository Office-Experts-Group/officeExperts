// app/services/ai-email-triage/layout.js

// Route metadata. Title and description come straight from the SEO brief;
// the Open Graph title uses the longer, click-focused variant.
const TITLE = "AI Email Triage for Microsoft 365 | Office Experts Group";
const OG_TITLE =
  "AI Email Triage – Let AI Sort Your Inbox, Inside Microsoft 365";
const DESCRIPTION =
  "Automated AI email triage built inside Microsoft 365. We sort, prioritise and route your shared inbox with Copilot, Power Automate or custom AI agents.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["ai email triage"],
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/services/ai-email-triage",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/services/ai-email-triage",
  },
};

export default function AiEmailTriageLayout({ children }) {
  return <main>{children}</main>;
}
