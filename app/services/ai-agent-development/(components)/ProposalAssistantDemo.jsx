// components/ProposalAssistantDemo.jsx
import Link from "next/link";

import styles from "../../../../styles/proposalAssistantDemo.module.css";

const SITE_URL = "https://www.officeexperts.com.au";

const VIDEO = {
  src: "/videos/OE-Props-Demo.mp4",
  poster: "/case-studies/internal-ai-proposal-assistant.png",
  name: "AI proposal assistant demonstration",
  description:
    "A rep turns a job request, tone guidance and call notes into a first-pass proposal drafted straight into the real Word template, with live fee tables and consultant roster.",
  uploadDate: "2026-10-15T00:00:00+00:00",
};

const CASE_STUDY_HREF =
  "/case-studies/internal-ai-proposal-assistant-azure-migration";

// What the viewer will see in the demo, kept short so the video does the talking
const HIGHLIGHTS = [
  {
    title: "One conversation, not several drafts",
    body: "Job request, tone guidance and call notes go in. A first-pass proposal comes out.",
  },
  {
    title: "Drafted into the real Word template",
    body: "Fee tables, payment milestones and the consultant roster are pulled from the live rate card.",
  },
  {
    title: "Runs inside the Microsoft tenant",
    body: "Azure SQL, App Service, Entra ID sign-on and Claude models hosted through Microsoft Foundry.",
  },
];

/*
 * Builds schema.org VideoObject JSON-LD so search engines can index the
 * demo as a video result. Paths are made absolute as Google requires.
 */
function buildVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: VIDEO.name,
    description: VIDEO.description,
    thumbnailUrl: `${SITE_URL}${VIDEO.poster}`,
    contentUrl: `${SITE_URL}${VIDEO.src}`,
    uploadDate: VIDEO.uploadDate,
  };
}

export default function ProposalAssistantDemo() {
  return (
    <section className={styles.section} aria-labelledby="proposal-demo-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildVideoSchema()) }}
      />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>See an AI agent in action</p>
          <h2 id="proposal-demo-heading" className={styles.heading}>
            Our own proposal assistant,{" "}
            <span className={styles.accent}>recorded in daily use</span>
          </h2>
          <p className={styles.intro}>
            We built this agent for our own team before offering the same work
            to clients. Watch it turn call notes and a rate card into a proposal
            ready for review.
          </p>

          <ul className={styles.highlights}>
            {HIGHLIGHTS.map(({ title, body }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>

          <Link href={CASE_STUDY_HREF} className={styles.link}>
            Read the full case study
          </Link>
        </div>

        {/*
         * preload="metadata" fetches only duration and dimensions, so the
         * MP4 isn't downloaded until the visitor presses play.
         * playsInline stops iOS forcing fullscreen playback.
         */}
        <figure className={styles.media}>
          <video
            className={styles.video}
            src={VIDEO.src}
            poster={VIDEO.poster}
            controls
            preload="metadata"
            playsInline
            aria-label={VIDEO.name}
          />
          <figcaption className={styles.caption}>
            {VIDEO.description}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
