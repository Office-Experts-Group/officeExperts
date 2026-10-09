// components/CaseStudyCarousel.jsx

import RelatedLinks from "./RelatedLinks";

import { caseStudies } from "../app/case-studies/caseStudies";
import { cardCopy } from "../app/case-studies/caseStudyCardCopy";

import styles from "../styles/caseStudyCarousel.module.css";

// Case study pages and images live on this domain, so every other Office
// Experts Group site links to it. On officeexperts.com.au itself pass
// baseUrl="" to keep links and images on the same domain.
// Sites on a different domain need this domain added to images.remotePatterns
// in next.config.js.
const DEFAULT_BASE_URL = "https://www.officeexperts.com.au";

// How long the slide takes per card. The total is set from the number of
// cards, so adding case studies never speeds the carousel up.
const DEFAULT_SECONDS_PER_CARD = 5;

// Puts the case studies for one site first. The original order is kept inside
// each group, and every case study is still included.
const sortBySite = (studies, site) => {
  if (!site) return studies;
  return [
    ...studies.filter((study) => study.site === site),
    ...studies.filter((study) => study.site !== site),
  ];
};

/**
 * A right-to-left carousel of every case study, built on RelatedLinks.
 * Server component: no client JavaScript, so every link is in the initial HTML.
 * The sliding is done entirely in CSS (see caseStudyCarousel.module.scss).
 *
 * Props:
 * - site: "office" | "word" | "excel" | "powerplatform" | "access".
 *   Case studies with this site value are shown first (optional)
 * - theme: "dark" or "light", passed to RelatedLinks (default "light")
 * - eyebrow, heading, text: passed to RelatedLinks
 * - studies: array of case studies (default: the caseStudies array)
 * - baseUrl: domain used for the case study links and images
 * - limit: show only the first N case studies after ordering (optional)
 * - secondsPerCard: slide speed (default 5)
 * - getLinkText: function(study) returning the button text (optional)
 *
 * Card text, in order of preference:
 * - description: study.truncatedDescription, then cardCopy[slug], then study.summary
 * - button text: getLinkText, then study.linkText, then cardCopy[slug], then
 *   "Read the {industry} case study"
 * - image alt: study.imageAlt, then study.title
 */
const CaseStudyCarousel = ({
  site,
  theme = "dark",
  eyebrow = "Case Studies",
  heading = "Case studies from our client work",
  text,
  studies = caseStudies,
  baseUrl = DEFAULT_BASE_URL,
  limit,
  secondsPerCard = DEFAULT_SECONDS_PER_CARD,
  getLinkText,
}) => {
  const ordered = sortBySite(studies, site);
  const list = limit ? ordered.slice(0, limit) : ordered;

  // Nothing to show, so render nothing
  if (!list.length) return null;

  const links = list.map((study) => {
    const copy = cardCopy[study.slug] ?? {};

    return {
      href: `${baseUrl}/case-studies/${study.slug}`,
      linkText:
        getLinkText?.(study) ??
        study.linkText ??
        copy.linkText ??
        `Read the ${study.industry} case study`,
      title: study.title,
      description:
        study.truncatedDescription ??
        copy.truncatedDescription ??
        study.summary,
      image: study.image ? `${baseUrl}${study.image}` : undefined,
      imageAlt: study.imageAlt || study.title,
    };
  });

  return (
    <div
      className={styles.carousel}
      style={{ "--carousel-duration": `${links.length * secondsPerCard}s` }}
    >
      <RelatedLinks
        theme={theme}
        eyebrow={eyebrow}
        heading={heading}
        text={text}
        links={links}
      />
    </div>
  );
};

export default CaseStudyCarousel;
