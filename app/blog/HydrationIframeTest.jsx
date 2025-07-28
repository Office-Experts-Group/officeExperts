"use client";
import React, { useEffect, useState, useRef } from "react";

const HydrationIframeTest = () => {
  const [isClient, setIsClient] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const [manuallyAdded, setManuallyAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    setRenderCount((prev) => prev + 1);
    console.log(
      "🔍 HydrationIframeTest useEffect ran, render count:",
      renderCount + 1
    );
  }, []);

  const addIframeManually = () => {
    if (containerRef.current) {
      // Remove existing manual iframe
      const existing = containerRef.current.querySelector(".manual-iframe");
      if (existing) existing.remove();

      // Add new iframe directly to DOM
      const iframe = document.createElement("iframe");
      iframe.className = "manual-iframe";
      iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
      iframe.width = "560";
      iframe.height = "315";
      iframe.style.border = "3px solid purple";
      iframe.style.display = "block";
      iframe.title = "Manually added YouTube video";

      containerRef.current.appendChild(iframe);
      setManuallyAdded(true);
      console.log("🔍 Manually added iframe to DOM");
    }
  };

  const logAllIframes = () => {
    const allIframes = document.querySelectorAll("iframe");
    console.log("🔍 All iframes on page:", allIframes.length);

    allIframes.forEach((iframe, index) => {
      const rect = iframe.getBoundingClientRect();
      const isVisible = rect.width > 0 && rect.height > 0;

      console.log(`iframe ${index + 1}:`, {
        src: iframe.src,
        visible: isVisible,
        inViewport: rect.top >= 0 && rect.bottom <= window.innerHeight,
        rect: rect,
        display: window.getComputedStyle(iframe).display,
        parentElement: iframe.parentElement.tagName,
        parentClasses: iframe.parentElement.className,
      });
    });
  };

  const checkForDuplicates = () => {
    const iframes = document.querySelectorAll('iframe[src*="youtube"]');
    const srcMap = new Map();

    iframes.forEach((iframe, index) => {
      const src = iframe.src;
      if (srcMap.has(src)) {
        srcMap.get(src).push(index);
      } else {
        srcMap.set(src, [index]);
      }
    });

    console.log(
      "🔍 YouTube iframe duplicates:",
      Array.from(srcMap.entries()).filter(
        ([src, indices]) => indices.length > 1
      )
    );
  };

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "20px 0",
        backgroundColor: "#f0f8ff",
      }}
    >
      <h3>Hydration & Rendering Test</h3>

      <div style={{ marginBottom: "15px" }}>
        <p>
          <strong>Client State:</strong>{" "}
          {isClient ? "Hydrated" : "Server/Pre-hydration"}
        </p>
        <p>
          <strong>Render Count:</strong> {renderCount}
        </p>
        <p>
          <strong>Manual iframe Added:</strong> {manuallyAdded ? "Yes" : "No"}
        </p>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={logAllIframes}
          style={{ marginRight: "10px", padding: "8px" }}
        >
          Log All iframes
        </button>
        <button
          onClick={checkForDuplicates}
          style={{ marginRight: "10px", padding: "8px" }}
        >
          Check Duplicates
        </button>
        <button onClick={addIframeManually} style={{ padding: "8px" }}>
          Add iframe Manually
        </button>
      </div>

      {/* Server-side iframe (should not work if SSR issue) */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Server-side iframe (renders on server):</h4>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          width="560"
          height="315"
          style={{ border: "2px solid red", display: "block" }}
          title="Server-side YouTube video"
          allowFullScreen
        />
      </div>

      {/* Client-side iframe (only renders after hydration) */}
      {isClient && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Client-side iframe (renders after hydration):</h4>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            width="560"
            height="315"
            style={{ border: "2px solid green", display: "block" }}
            title="Client-side YouTube video"
            allowFullScreen
          />
        </div>
      )}

      {/* Container for manual DOM manipulation */}
      <div ref={containerRef} style={{ marginBottom: "20px" }}>
        <h4>Manual DOM Container:</h4>
        <p>Use "Add iframe Manually" button above</p>
      </div>

      {/* Different iframe approaches */}
      <div>
        <h4>Different Rendering Approaches:</h4>

        {/* Standard JSX */}
        <div style={{ marginBottom: "10px" }}>
          <strong>Standard JSX:</strong>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            width="280"
            height="157"
            style={{ border: "1px solid orange", display: "block" }}
            title="Standard JSX iframe"
          />
        </div>

        {/* Conditional rendering */}
        {typeof window !== "undefined" && (
          <div style={{ marginBottom: "10px" }}>
            <strong>Window Check:</strong>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="280"
              height="157"
              style={{ border: "1px solid pink", display: "block" }}
              title="Window check iframe"
            />
          </div>
        )}

        {/* Using dangerouslySetInnerHTML */}
        <div style={{ marginBottom: "10px" }}>
          <strong>DangerouslySetInnerHTML:</strong>
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="280" height="157" style="border: 1px solid purple; display: block;" title="DangerouslySetInnerHTML iframe"></iframe>`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HydrationIframeTest;
