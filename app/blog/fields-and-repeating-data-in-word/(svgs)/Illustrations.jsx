// /app/blog/fields-and-repeating-data-in-word/(svgs)/Illustrations.jsx
// Five small "Avoid" vs "Do this" sketches. Hex values mirror tokens:
// $accent #046999, $accent-light #e8f4fa, $text-secondary #4a5568.
// Slate (#64748b / #e2e8f0) is the muted "avoid" colour.

const ACCENT = "#046999";
const ACCENT_LIGHT = "#e8f4fa";
const SLATE = "#64748b";
const SLATE_LIGHT = "#e2e8f0";
const WHITE = "#ffffff";

const Panel = ({ id, title, desc, avoid, doThis }) => (
  <svg
    viewBox="0 0 280 180"
    role="img"
    aria-labelledby={`${id}-title ${id}-desc`}
    style={{ width: "100%", height: "auto" }}
  >
    <title id={`${id}-title`}>{title}</title>
    <desc id={`${id}-desc`}>{desc}</desc>
    <rect
      x="8"
      y="10"
      width="124"
      height="126"
      rx="12"
      fill={WHITE}
      stroke={SLATE}
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <rect
      x="148"
      y="10"
      width="124"
      height="126"
      rx="12"
      fill={ACCENT_LIGHT}
      stroke={ACCENT}
      strokeWidth="1.5"
    />
    <g transform="translate(8 10)">{avoid}</g>
    <g transform="translate(148 10)">{doThis}</g>
    <text
      x="70"
      y="162"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      textAnchor="middle"
      fill={SLATE}
    >
      AVOID
    </text>
    <text
      x="210"
      y="162"
      fontSize="14"
      fontWeight="700"
      letterSpacing="1.5"
      textAnchor="middle"
      fill={ACCENT}
    >
      DO THIS
    </text>
  </svg>
);

// 1. Retyping instead of linking
export const RetypeSketch = () => (
  <Panel
    id="frd-mist1"
    title="Retyping versus linking"
    desc="Left: three typed copies of a value that do not quite match. Right: one source linked to three identical copies."
    avoid={
      <g fill={SLATE_LIGHT} stroke={SLATE} strokeWidth="1.2">
        <rect
          x="18"
          y="24"
          width="86"
          height="18"
          rx="5"
          transform="rotate(-3 60 33)"
        />
        <rect
          x="18"
          y="54"
          width="62"
          height="18"
          rx="5"
          transform="rotate(2 49 63)"
        />
        <rect
          x="18"
          y="84"
          width="74"
          height="18"
          rx="5"
          transform="rotate(-2 55 93)"
        />
      </g>
    }
    doThis={
      <g>
        <rect x="32" y="16" width="60" height="18" rx="9" fill={ACCENT} />
        <path
          d="M62 34v12M30 46h64M30 46v12M62 46v12M94 46v12"
          stroke={ACCENT}
          strokeWidth="1.8"
          fill="none"
        />
        <rect
          x="14"
          y="62"
          width="32"
          height="18"
          rx="5"
          fill={WHITE}
          stroke={ACCENT}
        />
        <rect
          x="46"
          y="62"
          width="32"
          height="18"
          rx="5"
          fill={WHITE}
          stroke={ACCENT}
        />
        <rect
          x="78"
          y="62"
          width="32"
          height="18"
          rx="5"
          fill={WHITE}
          stroke={ACCENT}
        />
      </g>
    }
  />
);

// 2. Deleting a bookmark
export const BookmarkSketch = () => (
  <Panel
    id="frd-mist2"
    title="Deleted bookmark versus protected bookmark"
    desc="Left: a broken link between a source and a field showing an error. Right: an unbroken link between the two."
    avoid={
      <g>
        <circle
          cx="30"
          cy="50"
          r="10"
          fill={SLATE_LIGHT}
          stroke={SLATE}
          strokeWidth="1.5"
        />
        <circle
          cx="94"
          cy="50"
          r="10"
          fill={SLATE_LIGHT}
          stroke={SLATE}
          strokeWidth="1.5"
        />
        <path d="M40 50h14M70 50h14" stroke={SLATE} strokeWidth="1.8" />
        <rect
          x="26"
          y="80"
          width="72"
          height="22"
          rx="6"
          fill={SLATE_LIGHT}
          stroke={SLATE}
          strokeDasharray="4 3"
        />
        <text
          x="62"
          y="96"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fill={SLATE}
        >
          Error!
        </text>
      </g>
    }
    doThis={
      <g>
        <circle cx="30" cy="50" r="10" fill={ACCENT} />
        <circle cx="94" cy="50" r="10" fill={ACCENT} />
        <path d="M40 50h44" stroke={ACCENT} strokeWidth="2.5" />
        <rect
          x="26"
          y="80"
          width="72"
          height="22"
          rx="6"
          fill={WHITE}
          stroke={ACCENT}
        />
        <path
          d="M52 91l7 6 13-12"
          stroke={ACCENT}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    }
  />
);

// 3. Forgetting to update fields
export const UpdateSketch = () => (
  <Panel
    id="frd-mist3"
    title="Stale fields versus refreshed fields"
    desc="Left: two copies of a value that no longer match. Right: two matching copies with a refresh arrow."
    avoid={
      <g>
        <rect
          x="18"
          y="28"
          width="88"
          height="20"
          rx="5"
          fill={ACCENT}
          opacity="0.35"
        />
        <rect
          x="18"
          y="62"
          width="60"
          height="20"
          rx="5"
          fill={SLATE_LIGHT}
          stroke={SLATE}
          strokeDasharray="4 3"
        />
        <circle
          cx="62"
          cy="106"
          r="9"
          fill="none"
          stroke={SLATE}
          strokeWidth="1.5"
        />
        <path
          d="M62 100v6l4 2"
          stroke={SLATE}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    }
    doThis={
      <g>
        <rect x="18" y="26" width="88" height="20" rx="5" fill={ACCENT} />
        <rect x="18" y="56" width="88" height="20" rx="5" fill={ACCENT} />
        <path
          d="M44 100a18 18 0 0 1 32-6"
          stroke={ACCENT}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M78 86v10h-10"
          stroke={ACCENT}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    }
  />
);

// 4. Over-engineering with too much XML
export const ComplexSketch = () => (
  <Panel
    id="frd-mist4"
    title="Tangled setup versus simple setup"
    desc="Left: many nodes joined by crossing lines. Right: two nodes joined by one line."
    avoid={
      <g>
        <g stroke={SLATE} strokeWidth="1.3" fill="none">
          <path d="M26 28L98 52M26 28L60 98M98 28L26 62M98 28L72 98M26 62L98 80M60 98L98 52" />
        </g>
        <g fill={SLATE_LIGHT} stroke={SLATE} strokeWidth="1.3">
          <circle cx="26" cy="28" r="8" />
          <circle cx="98" cy="28" r="8" />
          <circle cx="26" cy="62" r="8" />
          <circle cx="98" cy="52" r="8" />
          <circle cx="98" cy="80" r="8" />
          <circle cx="60" cy="98" r="8" />
        </g>
      </g>
    }
    doThis={
      <g>
        <path d="M36 56h52" stroke={ACCENT} strokeWidth="2.5" />
        <circle cx="30" cy="56" r="12" fill={ACCENT} />
        <circle cx="94" cy="56" r="12" fill={ACCENT} />
      </g>
    }
  />
);

// 5. Unprotected template
export const LockSketch = () => (
  <Panel
    id="frd-mist5"
    title="Open template versus locked template"
    desc="Left: an open padlock on a template. Right: a closed padlock on a template."
    avoid={
      <g>
        <rect
          x="32"
          y="52"
          width="60"
          height="46"
          rx="8"
          fill={SLATE_LIGHT}
          stroke={SLATE}
          strokeWidth="1.5"
        />
        <path
          d="M44 52V38a18 18 0 0 1 34-8"
          stroke={SLATE}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="62" cy="74" r="5" fill={SLATE} />
      </g>
    }
    doThis={
      <g>
        <rect x="32" y="52" width="60" height="46" rx="8" fill={ACCENT} />
        <path
          d="M44 52V40a18 18 0 0 1 36 0v12"
          stroke={ACCENT}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="62" cy="74" r="5" fill={WHITE} />
      </g>
    }
  />
);
