// app/copilot-and-ai-templates/layout.js

const TITLE = "Copilot & AI-Ready Word Templates | Word Experts";
const DESCRIPTION =
  "Make Copilot work properly in Word. Australian Word specialists building AI-ready templates and custom AI agents that keep your formatting and data in line.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.wordexperts.com.au/copilot-and-ai-templates",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/copilot-and-ai-templates",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
