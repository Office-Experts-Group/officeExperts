// components/AhrefsAnalytics.jsx
"use client";
import Script from "next/script";

export default function AhrefsAnalytics() {
  const handleError = (e) => {
    console.error("Error loading Ahrefs analytics:", e);
  };

  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
      strategy="lazyOnload"
      onError={handleError}
    />
  );
}
