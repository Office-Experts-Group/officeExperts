// Keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with page.js
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/brand-template";
const PAGE_TITLE = "Microsoft Word Brand Template Services | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Microsoft Word brand template services. Custom document templates that ensure consistent branding and a professional appearance.";

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
    // Core service keywords
    "Microsoft Word Brand Templates",
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

  // Twitter Card
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
