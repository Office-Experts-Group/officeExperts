// app/services/microsoft-dot-net/layout.js
const PAGE_URL = "https://www.officeexperts.com.au/services/microsoft-dot-net";
const PAGE_TITLE = "Microsoft .NET Development Services Australia | Office Experts";
const PAGE_DESCRIPTION =
  "C#, VB.NET and ASP.NET Core developers across Australia. We build, support and migrate .NET apps, including .NET Framework to .NET 10 upgrades and VSTO add-ins.";

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
    ".NET developers",
    ".NET development services",
    "C# developers Australia",
    "VB.NET developers",
    "ASP.NET Core development",
    ".NET Framework migration",
    "upgrade to .NET 10",
    ".NET 8 end of support",
    "VSTO add-in development",
    "Blazor development",
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
