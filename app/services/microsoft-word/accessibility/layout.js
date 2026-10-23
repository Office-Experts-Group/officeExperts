// app/services/microsoft-word/accessibility/layout.js
//
// Page-level metadata only. This layout wraps a single page (page.js), so the
// canonical and openGraph.url here can't be inherited by any other route.
// Never copy this pattern into a layout that has child routes.
//
// KEEP IN SYNC with the same three constants at the top of ./page.js.
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/accessibility";
const PAGE_TITLE = "Microsoft Word Accessibility | Office Experts";
const PAGE_DESCRIPTION =
  "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

// A nested openGraph REPLACES the parent's (no merge), so siteName, locale and
// type are repeated on purpose.
export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,

  keywords: [
    // Core accessibility
    "word accessibility solutions",
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
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
