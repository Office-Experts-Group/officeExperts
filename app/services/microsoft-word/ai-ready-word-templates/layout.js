// /services/microsoft-word/ai-ready-word-templates/layout.js
// This layout wraps only page.js, so canonical and openGraph.url are safe here.
// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/ai-ready-word-templates";
const PAGE_TITLE = "Copilot & AI-Ready Word Templates | Office Experts";
const PAGE_DESCRIPTION =
  "Make Copilot work properly in Word. Australian Word specialists building AI-ready templates and custom AI agents that keep your formatting and data in line.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "copilot word templates",
    "ai word templates",
    "copilot in word",
    "ai-ready templates",
    "copilot formatting problems",
    "copilot vs chatgpt for word",
    "custom ai agents document automation",
    "microsoft 365 copilot consultant australia",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
    images: [OG_IMAGE],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: PAGE_URL },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
