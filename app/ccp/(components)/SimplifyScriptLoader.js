"use client";
import Script from "next/script";
import React, { useState } from "react";

const SimplifyScriptLoader = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  return (
    <Script
      src="https://www.simplify.com/commerce/simplify.pay.js"
      strategy="afterInteractive"
      onLoad={() => setScriptLoaded(true)}
      onError={(e) => {
        console.error("Failed to load Simplify script:", e);
        setScriptError(true);
      }}
    />
  );
};

export default SimplifyScriptLoader;
