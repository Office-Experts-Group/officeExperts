// /services/microsoft-word/custom-toolbars-and-ribbons/layout.js

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons";
const PAGE_TITLE = "Custom Toolbars and Ribbons | Office Experts";
const PAGE_DESCRIPTION =
  "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars.";

const OG_IMAGE = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Office Experts logo",
};

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: ["custom word toolbars"],
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
