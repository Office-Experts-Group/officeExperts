// /app/services/microsoft-power-platform/sharepoint-consulting-and-development/(svgs)/SpcdPlatformSvg.jsx
// Informative diagram for SpcdPlatform: one well-built SharePoint document
// library, annotated with four pins. Each pin carries the same glyph as its
// callout in the section (SPCD_FEATURE_GLYPHS), so no numbering is needed.
//
// Hex values and matching globals.scss tokens:
//   #046999 $accent          #034e72 $accent-dark     #e8f4fa $accent-light
//   #6fc3e8 $accent-on-dark  #0d1b2a $text-primary    #4a5568 $text-secondary
//   #9a9da1 $text-muted      #e3e8ec $line            #d4d6d9 $line-strong
//   #f7f8f9 $light-bg        #0b2433 $ink             #ffffff $white

import { SPCD_FEATURE_GLYPHS } from "./SpcdIcons";

const ROWS = [
  { name: "Supplier contract.docx", type: "Contract", status: "Approved" },
  {
    name: "Leave policy.docx",
    type: "Policy",
    status: "Approved",
    selected: true,
  },
  { name: "Proposal.docx", type: "Proposal", status: "Pending", editing: true },
  { name: "Site safety plan.pdf", type: "Safety", status: "Approved" },
  { name: "Board pack.pptx", type: "Board", status: "Pending" },
];

const VERSIONS = [
  { label: "Version 7.0 · Today", who: "Jess L.", current: true },
  { label: "Version 6.0 · Mon", who: "Amir K." },
  { label: "Version 5.0 · 2 Oct", who: "Jess L." },
];

const Pin = ({ x, y, glyph }) => (
  <g>
    <circle
      cx={x}
      cy={y}
      r="18"
      fill="#046999"
      stroke="#ffffff"
      strokeWidth="3"
    />
    <g transform={`translate(${x - 11} ${y - 11}) scale(0.92)`}>
      {SPCD_FEATURE_GLYPHS[glyph].map((d) => (
        <path
          key={d}
          d={d}
          stroke="#ffffff"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ))}
    </g>
  </g>
);

const Cursor = ({ x, y, name, color }) => (
  <g transform={`translate(${x} ${y})`}>
    <path
      d="M0 0l11 25 3.2-10.2L24.5 11z"
      fill={color}
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="18"
      y="-22"
      width={name.length * 9 + 18}
      height="24"
      rx="6"
      fill={color}
    />
    <text x="27" y="-5" fontSize="14" fontWeight="700" fill="#ffffff">
      {name}
    </text>
  </g>
);

const SpcdPlatformSvg = () => (
  <svg
    viewBox="0 0 760 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="spcd-platform-svg-title spcd-platform-svg-desc"
  >
    <title id="spcd-platform-svg-title">
      Anatomy of a well-built SharePoint document library
    </title>
    <desc id="spcd-platform-svg-desc">
      A document library where every file carries a type and an approval status.
      A company news banner runs across the top. One file shows its version
      history in a side panel, with who saved each version and an option to
      restore. Two people are editing the same proposal at once, and an approval
      flow moves a file from submitted to review to approved.
    </desc>

    {/* ── Window ── */}
    <rect x="20" y="20" width="720" height="460" rx="18" fill="#ffffff" />
    <path
      d="M20 38a18 18 0 0 1 18-18h684a18 18 0 0 1 18 18v24H20z"
      fill="#f7f8f9"
    />
    <path d="M20 62h720" stroke="#e3e8ec" />
    <circle cx="44" cy="41" r="5" fill="#d4d6d9" />
    <circle cx="61" cy="41" r="5" fill="#d4d6d9" />
    <circle cx="78" cy="41" r="5" fill="#d4d6d9" />
    <text x="104" y="46" fontSize="14" fontWeight="600" fill="#4a5568">
      Operations › Documents
    </text>

    {/* ── Communications banner ── */}
    <rect x="40" y="76" width="680" height="48" rx="10" fill="#034e72" />
    <g transform="translate(56 89) scale(0.92)">
      {SPCD_FEATURE_GLYPHS.comms.map((d) => (
        <path
          key={d}
          d={d}
          stroke="#6fc3e8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ))}
    </g>
    <text x="90" y="105" fontSize="14" fontWeight="600" fill="#ffffff">
      Company news: the new leave policy is now live
    </text>
    <rect
      x="614"
      y="88"
      width="72"
      height="24"
      rx="12"
      fill="#ffffff"
      fillOpacity="0.16"
    />
    <text
      x="650"
      y="105"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Read
    </text>

    {/* ── Toolbar ── */}
    <rect x="40" y="140" width="76" height="30" rx="8" fill="#046999" />
    <path
      d="M55 155h12M61 149v12"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <text x="74" y="160" fontSize="14" fontWeight="700" fill="#ffffff">
      New
    </text>
    <rect
      x="126"
      y="140"
      width="84"
      height="30"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <text
      x="168"
      y="160"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="#0d1b2a"
    >
      Upload
    </text>
    <rect
      x="404"
      y="140"
      width="106"
      height="30"
      rx="8"
      fill="#ffffff"
      stroke="#d4d6d9"
    />
    <path
      d="M418 150h16l-6 7v6l-4 2v-8z"
      stroke="#4a5568"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <text x="442" y="160" fontSize="14" fontWeight="600" fill="#0d1b2a">
      Type: All
    </text>

    {/* ── Column headers ── */}
    <text x="68" y="198" fontSize="14" fontWeight="700" fill="#9a9da1">
      Name
    </text>
    <text x="290" y="198" fontSize="14" fontWeight="700" fill="#9a9da1">
      Type
    </text>
    <text x="398" y="198" fontSize="14" fontWeight="700" fill="#9a9da1">
      Status
    </text>
    <path d="M40 208h470" stroke="#d4d6d9" />

    {/* ── Rows ── */}
    {ROWS.map((row, i) => {
      const top = 210 + i * 44;
      const mid = top + 22;
      return (
        <g key={row.name}>
          {row.selected && (
            <rect
              x="40"
              y={top + 2}
              width="470"
              height="40"
              rx="8"
              fill="#e8f4fa"
            />
          )}
          {i > 0 && !row.selected && !ROWS[i - 1].selected && (
            <path d={`M40 ${top}h470`} stroke="#e3e8ec" />
          )}
          <path
            d={`M46 ${mid - 9}h9l4 4v14h-13z`}
            fill="#ffffff"
            stroke="#046999"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <text
            x="68"
            y={mid + 5}
            fontSize="14"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {row.name}
          </text>
          <rect
            x="290"
            y={mid - 12}
            width="84"
            height="24"
            rx="12"
            fill="#e8f4fa"
          />
          <text
            x="332"
            y={mid + 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#046999"
          >
            {row.type}
          </text>
          {row.status === "Approved" ? (
            <>
              <rect
                x="398"
                y={mid - 12}
                width="96"
                height="24"
                rx="12"
                fill="#046999"
              />
              <text
                x="446"
                y={mid + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#ffffff"
              >
                Approved
              </text>
            </>
          ) : (
            <>
              <rect
                x="398"
                y={mid - 12}
                width="96"
                height="24"
                rx="12"
                fill="#ffffff"
                stroke="#046999"
                strokeWidth="1.3"
              />
              <text
                x="446"
                y={mid + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#046999"
              >
                Pending
              </text>
            </>
          )}
        </g>
      );
    })}

    {/* Co-authoring cursors on the proposal row (row 3, mid y = 320) */}
    <Cursor x={170} y={312} name="Sam" color="#046999" />
    <Cursor x={214} y={326} name="Ana" color="#0b2433" />

    {/* ── Approval flow strip ── */}
    <path d="M40 432h470" stroke="#e3e8ec" />
    <rect
      x="58"
      y="442"
      width="98"
      height="30"
      rx="15"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <text
      x="107"
      y="462"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="#4a5568"
    >
      Submitted
    </text>
    <path
      d="M164 457h22M180 451l6 6-6 6"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="194"
      y="442"
      width="84"
      height="30"
      rx="15"
      fill="#f7f8f9"
      stroke="#d4d6d9"
    />
    <text
      x="236"
      y="462"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="#4a5568"
    >
      Review
    </text>
    <path
      d="M286 457h22M302 451l6 6-6 6"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="316" y="442" width="116" height="30" rx="15" fill="#046999" />
    <path
      d="M330 457.5l3.6 3.6 6.4-7"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="388"
      y="462"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
    >
      Approved
    </text>

    {/* ── Version history pane ── */}
    <rect
      x="528"
      y="140"
      width="194"
      height="324"
      rx="12"
      fill="#f7f8f9"
      stroke="#e3e8ec"
    />
    <text x="546" y="168" fontSize="14" fontWeight="700" fill="#0d1b2a">
      Version history
    </text>
    <text x="546" y="190" fontSize="14" fill="#4a5568">
      Leave policy.docx
    </text>
    <path d="M556 222v118" stroke="#d4d6d9" strokeWidth="2" />
    {VERSIONS.map((v, i) => {
      const y = 222 + i * 56;
      return (
        <g key={v.label}>
          <circle
            cx="556"
            cy={y}
            r="7"
            fill={v.current ? "#046999" : "#ffffff"}
            stroke="#046999"
            strokeWidth="2"
          />
          <text x="572" y={y + 5} fontSize="14" fontWeight="600" fill="#0d1b2a">
            {v.label}
          </text>
          <text x="572" y={y + 26} fontSize="14" fill="#4a5568">
            {v.who}
          </text>
        </g>
      );
    })}
    <rect
      x="546"
      y="404"
      width="158"
      height="32"
      rx="8"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.3"
    />
    <text
      x="625"
      y="425"
      textAnchor="middle"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
    >
      Restore a version
    </text>

    {/* Window outline on top */}
    <rect
      x="20"
      y="20"
      width="720"
      height="460"
      rx="18"
      stroke="#d4d6d9"
      strokeWidth="1.5"
    />

    {/* ── Pins ── */}
    <Pin x={722} y={76} glyph="comms" />
    <Pin x={722} y={150} glyph="versions" />
    <Pin x={511} y={320} glyph="coauthor" />
    <Pin x={24} y={457} glyph="approvals" />
  </svg>
);

export default SpcdPlatformSvg;
