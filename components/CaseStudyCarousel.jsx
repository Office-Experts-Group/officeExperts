// components/CaseStudyCarousel.jsx

import RelatedLinks from "./RelatedLinks";

import { caseStudies } from "../app/case-studies/caseStudies";
import { cardCopy } from "../app/case-studies/caseStudyCardCopy";

import styles from "@/styles/caseStudyCarousel.module.scss";

const DEFAULT_BASE_URL = "https://www.officeexperts.com.au";
const DEFAULT_SECONDS_PER_CARD = 10;

// Puts the case studies for one site first. The original order is kept inside
// each group, and every case study is still included.
const sortBySite = (studies, site) => {
  if (!site) return studies;
  return [
    ...studies.filter((study) => study.site === site),
    ...studies.filter((study) => study.site !== site),
  ];
};

const CaseStudyCarousel = ({
  site,
  theme = "dark",
  eyebrow = "Case Studies",
  heading = "Case studies from our",
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

  const text =
    "Browse recent work from our consultants across the Microsoft suite. Each project started with a real business problem, whether a manual process, a tangled spreadsheet or an ageing database, and ended with a solution that saves time and holds up day to day.";

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
        headingAccent={"client work"}
        text={text}
        links={links}
      />
    </div>
  );
};

export default CaseStudyCarousel;
