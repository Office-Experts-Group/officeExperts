// app/services/word/templates/(components)/CopilotIntegration.jsx
// AI ready solutions

import Link from "next/link";

import { CopilotTemplateSVG } from "../(svgs)/CopilotTemplateSVG";

import styles from "@/styles/copilotIntegration.module.scss";

const capabilities = [
  {
    name: "Understand your document structure",
    // Outline tree: heading levels nested beneath a parent
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="27" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13 9h16M9 11v16h5M9 18h5M20 18h9M20 27h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Generate content in the right places",
    // Page with a dashed placeholder zone and a Copilot sparkle inside it
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="4"
          width="22"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11 10h10M11 27h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="11"
          y="14"
          width="14"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <path
          d="M18 15.5c.4 2 1.1 2.7 3 3-1.9.4-2.6 1.1-3 3-.4-1.9-1.1-2.6-3-3 1.9-.3 2.6-1 3-3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Keep your formatting consistent",
    // Format painter: the Word tool for applying the same formatting everywhere
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="5"
          width="20"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="15"
          y="20"
          width="4"
          height="11"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M26 9h3v7H17v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Stay perfectly aligned with your brand",
    // Shield with tick: brand-safe output
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18 4l11 4v8c0 7-4.7 12.5-11 15-6.3-2.5-11-8-11-15V8l11-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13 18l3.5 3.5L23 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const CopilotIntegration = () => {
  return (
    <section className={styles.section} id="copilot">
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Integrating <span className={styles.accent}>Word</span> with{" "}
            <span className={styles.accent}>AI</span>
          </h2>

          <p className={styles.subheading}>What makes a template AI-ready?</p>
          <p className={styles.lead}>
            Be it Copilot, ChatGPT, Claude or any other LLM, their performance
            is far superior and less error-prone when your Word template is
            built on the right foundations. A few behind-the-scenes elements
            make all the difference, from clean file architecture to structured
            styles and brand-safe formatting.
          </p>

          <p className={styles.lead}>
            No need to worry about the technical details, our team can build
            simple solutions for existing documents right through to custom Ai
            Agents that continually monitor and grow with your business
          </p>

          <div>
            <p className={styles.listIntro}>
              Our templates are engineered so Copilot can:
            </p>
            <ul className={styles.capabilities}>
              {capabilities.map((item) => (
                <li key={item.name} className={styles.capability}>
                  <span className={styles.capabilityIcon}>{item.svg}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.lead}>
            <strong>The result?</strong> Documents that behave beautifully,
            whether a person or Copilot is creating the content.
          </p>

          {/* ── CTA ── */}
          <div className={styles.ctaRow}>
            <p className={styles.ctaText}>
              If you want templates that are genuinely Copilot-ready, we build
              them for you.
            </p>
            <Link
              href="/services/microsoft-word/ai-ready-word-templates"
              className={`btn ${styles.ctaBtn}`}
            >
              Ai-ready templates
            </Link>
          </div>
        </div>

        {/* ── Right: illustration ── */}
        <div className={styles.visual}>
          <CopilotTemplateSVG />
        </div>
      </div>
    </section>
  );
};

export default CopilotIntegration;
