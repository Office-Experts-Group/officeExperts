// app/services/ai-agent-development/layout.js

const PAGE_URL = "https://www.officeexperts.com.au/services/ai-agent-development";

const TITLE = "Custom AI Agent Development Australia | Office Experts";

// 143 characters. No single case study, so the description stays accurate as
// featured results change.
const DESCRIPTION =
  "Custom AI agents built by Australian developers in Microsoft 365 or custom code, for review, compliance, research and service work. Since 2000.";

const OG_TITLE = "AI agents that do the work, not just answer questions";
const OG_DESCRIPTION =
  "Custom AI agents for review, research, customer service and compliance, built around your Microsoft 365 data by Australian developers.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI agent development",
    "custom AI agents",
    "AI agent developers Australia",
    "agentic AI workflows",
    "Copilot Studio vs custom AI agents",
  ],
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
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
    description: OG_DESCRIPTION,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/services/ai-agent-development",
  },
};

export default function AiAgentDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
