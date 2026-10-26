import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Word Video Tutorials | Word Experts Australia",
  description:
    "Watch expert video tutorials on Microsoft Word. Learn document automation, template creation, VBA programming, and advanced Word techniques from Australia's leading Word specialists.",

  robots: {
    index: false,
    follow: false,
  },

  alternates: {
    canonical: "/services/microsoft-word/video-portal",
  },
};

export default function VideoPortalLayout({ children }) {
  return <>{children}</>;
}
