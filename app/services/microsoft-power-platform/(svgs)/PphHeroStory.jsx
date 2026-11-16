"use client";
// /app/services/microsoft-power-platform/(svgs)/PphHeroStory.jsx
// Animated Power Platform hero illustration. One site job travels through the
// platform, one act per hero frame (timings and positions in pphHeroScene.js):
//   1. Paper, a broken spreadsheet and an email chain fold into a phone app. The job
//      is typed in, photographed and saved as a new row in a Dataverse table.
//   2. The row starts a flow: AI reads the photo, a manager approves, a work order is
//      built from the template and the on-call tech replies.
//   3. The report fills in and ticks up with the new job, someone asks it a question,
//      and the customer sees the booking on a portal. Everything lights up together.
//
// Playback comes from the shared useStoryPlayer (HeroContext from HeroRotator):
// server render at PPH_INITIAL_T, then a requestAnimationFrame loop writes only the
// attributes that change. Decorative (aria-hidden); the frame copy carries the meaning.
// Drawn straight onto the hero background, no enclosing panel.
//
// Colours (hard-coded hex → globals.scss token):
//   #111820 $dark-bg      #18232e $dark-surface   #1a2a3a $dark-mid
//   #046999 $accent       #6fc3e8 $accent-on-dark #034e72 $accent-dark
//   #0eaa0e $success      #c0392b $replace-x      #ffffff $white (alpha via *Opacity)
//   #f8f8f8 $offWhite     #0b2433 $ink            #e3e8ec $line
//   #d4d6d9 $line-strong  #a0a2a6 $grayText       #777a7e $darkGrayText
//   #e8f4fa $accent-light #fdf6f5 $before-bg

// Shared player: rAF loop, crossfades and reduced-motion stills
import { openingProps, useStoryPlayer } from "@/components/useStoryPlayer";
// Caption bar and stage sizing only; every colour in the drawing is set inline
import styles from "@/styles/pphHeroStory.module.scss";
import {
  PPH_ACTS,
  PPH_BAR,
  PPH_BARS,
  PPH_BUSIEST,
  PPH_CAPTIONS,
  PPH_DASH,
  PPH_DOC_LINES,
  PPH_INITIAL_T,
  PPH_LAST_WEEK,
  PPH_LINKS,
  PPH_NEW_ROW,
  PPH_PHONE,
  PPH_PORTAL,
  PPH_PORTAL_STEP_GAP,
  PPH_PORTAL_STEP_Y,
  PPH_PORTAL_STEPS,
  PPH_REDUCED_MOTION_T,
  PPH_ROW_H,
  PPH_ROW_Y,
  PPH_ROWS,
  PPH_STEP_H,
  PPH_STEP_ICON_X,
  PPH_STEP_RING_X,
  PPH_STEP_W,
  PPH_STEP_X,
  PPH_STEPS,
  PPH_TABLE,
  PPH_VIEW,
  sceneAt,
} from "./pphHeroScene";

const C = {
  bg: "#111820",
  surface: "#18232e",
  mid: "#1a2a3a",
  accent: "#046999",
  bright: "#6fc3e8",
  accentDark: "#034e72",
  success: "#0eaa0e",
  error: "#c0392b",
  white: "#ffffff",
  paper: "#f8f8f8",
  ink: "#0b2433",
  line: "#e3e8ec",
  lineStrong: "#d4d6d9",
  gray: "#a0a2a6",
  grayDark: "#777a7e",
  accentLight: "#e8f4fa",
  beforeBg: "#fdf6f5",
};

// Opening frame, shared by the server render and hydration so they match
const FIRST = sceneAt(PPH_INITIAL_T);
const at = (key) => openingProps(FIRST, key);

const STATUS = {
  done: { label: "Done", fill: C.success, text: C.success },
  booked: { label: "Booked", fill: C.bright, text: C.bright },
  new: { label: "New", fill: C.white, text: C.white },
  approved: { label: "Approved", fill: C.success, text: C.success },
};

// ── Small parts ─────────────────────────────────────────────────────────────

const Tick = ({ x, y, size = 1, color = C.white }) => (
  <path
    d={`M${x - 4.5 * size} ${y}l${3 * size} ${3 * size} ${6 * size} -${6.5 * size}`}
    fill="none"
    stroke={color}
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const Warn = ({ bind, id }) => (
  <g ref={bind(`chaos.${id}.warn`)} {...at(`chaos.${id}.warn`)}>
    <circle r="12" fill={C.error} />
    <text
      y="5.5"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill={C.white}
    >
      !
    </text>
  </g>
);

const StatusPill = ({ x, y, status }) => {
  const s = STATUS[status];
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="74"
        height="22"
        rx="11"
        fill={s.fill}
        fillOpacity={status === "new" ? 0.12 : 0.16}
      />
      <text
        x={x + 37}
        y={y + 16}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={s.text}
        fillOpacity={status === "new" ? 0.9 : 1}
      >
        {s.label}
      </text>
    </g>
  );
};

// The job photo: a leaking valve. Drawn in a 136 × 52 box.
const PipePhoto = () => (
  <g>
    <rect width="136" height="52" rx="6" fill={C.mid} />
    <path
      d="M0 34H136M44 0V14M92 0V14"
      stroke={C.white}
      strokeOpacity="0.06"
      strokeWidth="1"
    />
    <rect y="15" width="136" height="12" fill={C.gray} />
    <rect y="16.5" width="136" height="2.5" fill={C.lineStrong} />
    <rect x="58" y="11" width="18" height="20" rx="3" fill={C.grayDark} />
    <circle
      cx="67"
      cy="8"
      r="6"
      fill="none"
      stroke={C.error}
      strokeWidth="2.6"
    />
    <path d="M67 2V14M61 8H73" stroke={C.error} strokeWidth="1.8" />
    <path
      d="M78 30c0 0-3.2 4.2-3.2 6.2a3.2 3.2 0 006.4 0C81.2 34.2 78 30 78 30z"
      fill={C.bright}
    />
    <path
      d="M84 38.5c0 0-2.6 3.4-2.6 5a2.6 2.6 0 005.2 0C86.6 41.9 84 38.5 84 38.5z"
      fill={C.bright}
    />
    <ellipse
      cx="86"
      cy="48.5"
      rx="20"
      ry="2.8"
      fill={C.bright}
      fillOpacity="0.5"
    />
  </g>
);

// Step icons, drawn around (0, 0) inside a 32 × 32 tile
const StepIcon = ({ kind, color }) => {
  const line = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (kind === "ai")
    return (
      <g>
        <path
          d="M-2 -9l2.4 6.6L7 0l-6.6 2.4L-2 9l-2.4-6.6L-11 0l6.6-2.4z"
          fill={color}
        />
        <path
          d="M8 -9l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"
          fill={color}
        />
      </g>
    );
  if (kind === "approve")
    return (
      <g {...line}>
        <circle cx="-3" cy="-4" r="4" />
        <path d="M-10 9c0-4 3-7 7-7s5 2 6 3" />
        <path d="M3 5l3 3 5-6" />
      </g>
    );
  if (kind === "doc")
    return (
      <g {...line}>
        <path d="M-7 -10h9l5 5v15h-14z" />
        <path d="M2 -10v5h5M-4 0h7M-4 4.5h7" />
      </g>
    );
  return (
    <g {...line}>
      <path d="M-10 -7h20v12h-11l-5 4v-4h-4z" />
      <path d="M-5 -2h10M-5 2h6" />
    </g>
  );
};

// ── Before: the clutter ─────────────────────────────────────────────────────

const Scribble = ({ x, y, w }) => (
  <path
    d={`M${x} ${y}q${w / 8} -4 ${w / 4} 0t${w / 4} 0t${w / 4} 0t${w / 4} 0`}
    fill="none"
    stroke={C.gray}
    strokeWidth="2"
    strokeLinecap="round"
  />
);

const Chaos = ({ bind }) => (
  <g>
    {/* Paper job sheet on a clipboard */}
    <g ref={bind("chaos.paper")} {...at("chaos.paper")}>
      <rect x="-65" y="-85" width="130" height="170" rx="8" fill={C.paper} />
      <rect x="-24" y="-93" width="48" height="18" rx="5" fill={C.gray} />
      <text x="-50" y="-48" fontSize="16" fontWeight="700" fill={C.ink}>
        Job sheet
      </text>
      {[-24, 0, 24, 48].map((y, i) => (
        <g key={y}>
          <rect
            x="-50"
            y={y - 8}
            width="11"
            height="11"
            rx="2"
            fill="none"
            stroke={C.gray}
            strokeWidth="1.5"
          />
          {i === 0 && <Tick x={-44.5} y={y - 2.5} size={0.7} color={C.ink} />}
          <Scribble x={-32} y={y - 2} w={i === 2 ? 50 : 76} />
        </g>
      ))}
      <circle
        cx="34"
        cy="58"
        r="15"
        fill="none"
        stroke={C.gray}
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <circle
        cx="30"
        cy="2"
        r="13"
        fill="none"
        stroke={C.error}
        strokeWidth="2"
      />
      <text
        x="30"
        y="9"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill={C.error}
      >
        ?
      </text>
      <Warn bind={bind} id="paper" />
    </g>

    {/* Spreadsheet with broken cells */}
    <g ref={bind("chaos.sheet")} {...at("chaos.sheet")}>
      <rect x="-85" y="-56" width="170" height="112" rx="8" fill={C.paper} />
      <path d="M-85 -48a8 8 0 018-8h154a8 8 0 018 8v18h-170z" fill={C.line} />
      <text x="-72" y="-37" fontSize="14" fontWeight="700" fill={C.ink}>
        Jobs_v3_FINAL
      </text>
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => {
          const bad = (r === 1 && c === 2) || (r === 3 && c === 1);
          const x = -75 + c * 50;
          const y = -24 + r * 19;
          return (
            <g key={`${r}-${c}`}>
              <rect
                x={x}
                y={y}
                width="50"
                height="19"
                fill={bad ? C.beforeBg : C.paper}
                stroke={bad ? C.error : C.lineStrong}
                strokeWidth={bad ? 1.5 : 1}
              />
              {bad ? (
                <text
                  x={x + 25}
                  y={y + 14.5}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill={C.error}
                >
                  #REF!
                </text>
              ) : (
                <rect
                  x={x + 6}
                  y={y + 7}
                  width={14 + ((r * 3 + c * 5) % 4) * 6}
                  height="5"
                  rx="2"
                  fill={C.lineStrong}
                />
              )}
            </g>
          );
        }),
      )}
      <Warn bind={bind} id="sheet" />
    </g>

    {/* Email chain */}
    <g ref={bind("chaos.mail")} {...at("chaos.mail")}>
      <rect
        x="-70"
        y="-36"
        width="150"
        height="84"
        rx="8"
        fill={C.paper}
        opacity="0.55"
        transform="translate(-8 -8)"
      />
      <rect x="-78" y="-44" width="156" height="88" rx="8" fill={C.paper} />
      <path
        d="M-78 -36l78 44 78-44"
        fill="none"
        stroke={C.lineStrong}
        strokeWidth="1.5"
      />
      <rect x="-64" y="8" width="112" height="24" rx="6" fill={C.line} />
      <text x="-56" y="25" fontSize="14" fontWeight="700" fill={C.ink}>
        RE: RE: FW: leak
      </text>
      <Warn bind={bind} id="mail" />
    </g>

    {/* Sticky note */}
    <g ref={bind("chaos.note")} {...at("chaos.note")}>
      <rect
        x="-52"
        y="-52"
        width="104"
        height="104"
        rx="4"
        fill={C.accentLight}
      />
      <path d="M52 30v22H30z" fill={C.lineStrong} />
      <text x="-38" y="-18" fontSize="14" fontWeight="700" fill={C.ink}>
        Call Sam
      </text>
      <text x="-38" y="2" fontSize="14" fill={C.ink}>
        re approval??
      </text>
      <Scribble x={-38} y={24} w={60} />
      <Warn bind={bind} id="note" />
    </g>
  </g>
);

// ── Act 1: the phone app ────────────────────────────────────────────────────

const Phone = ({ bind }) => {
  const { x, y, w, h } = PPH_PHONE;
  const label = { fontSize: 14, fill: C.white, fillOpacity: 0.55 };
  const field = {
    x: 40,
    width: 136,
    height: 30,
    rx: 8,
    fill: C.surface,
    stroke: C.white,
    strokeOpacity: 0.14,
  };
  return (
    <g ref={bind("zone.phone")} {...at("zone.phone")}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="30"
        fill={C.surface}
        stroke={C.white}
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <rect
        x={x + 10}
        y={y + 12}
        width={w - 20}
        height={h - 24}
        rx="22"
        fill={C.bg}
      />

      <g clipPath="url(#pph-screen)">
        <g ref={bind("app.bar")} {...at("app.bar")}>
          <rect x="28" y="96" width="160" height="58" fill={C.accent} />
          <text x="42" y="140" fontSize="16" fontWeight="700" fill={C.white}>
            Site check
          </text>
          <path
            d="M164 130h14M164 135h14M164 140h14"
            stroke={C.white}
            strokeOpacity="0.8"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        <g ref={bind("app.f0")} {...at("app.f0")}>
          <text x="40" y="176" {...label}>
            Site
          </text>
          <rect y="184" {...field} />
          <text
            ref={bind("app.ph0")}
            x="50"
            y="204"
            fontSize="14"
            fill={C.white}
            fillOpacity="0.35"
            {...at("app.ph0")}
          >
            Choose a site
          </text>
          <text
            ref={bind("app.site")}
            x="50"
            y="204"
            fontSize="14"
            fill={C.white}
          >
            {FIRST["app.site"].text}
          </text>
        </g>

        <g ref={bind("app.f1")} {...at("app.f1")}>
          <text x="40" y="236" {...label}>
            Issue
          </text>
          <rect y="244" {...field} />
          <text
            ref={bind("app.ph1")}
            x="50"
            y="264"
            fontSize="14"
            fill={C.white}
            fillOpacity="0.35"
            {...at("app.ph1")}
          >
            What’s wrong?
          </text>
          <text
            ref={bind("app.issue")}
            x="50"
            y="264"
            fontSize="14"
            fill={C.white}
          >
            {FIRST["app.issue"].text}
          </text>
        </g>

        <g ref={bind("app.f2")} {...at("app.f2")}>
          <text x="40" y="296" {...label}>
            Photo
          </text>
          <g ref={bind("app.cam")} {...at("app.cam")}>
            <rect
              x="40"
              y="304"
              width="136"
              height="52"
              rx="6"
              fill="none"
              stroke={C.white}
              strokeOpacity="0.3"
              strokeDasharray="4 4"
            />
            <rect
              x="96"
              y="322"
              width="24"
              height="17"
              rx="4"
              fill="none"
              stroke={C.bright}
              strokeWidth="1.8"
            />
            <circle
              cx="108"
              cy="330.5"
              r="4.5"
              fill="none"
              stroke={C.bright}
              strokeWidth="1.8"
            />
            <path
              d="M102 322l2-3h8l2 3"
              fill="none"
              stroke={C.bright}
              strokeWidth="1.8"
            />
          </g>
          <g ref={bind("app.photo")} {...at("app.photo")}>
            <g transform="translate(40 304)">
              <PipePhoto />
            </g>
          </g>
          <rect
            ref={bind("app.flash")}
            x="40"
            y="304"
            width="136"
            height="52"
            rx="6"
            fill={C.white}
            {...at("app.flash")}
          />
        </g>

        <g ref={bind("app.f3")} {...at("app.f3")}>
          <rect
            x="40"
            y="368"
            width="60"
            height="26"
            rx="13"
            fill="none"
            stroke={C.white}
            strokeOpacity="0.22"
          />
          <text
            x="70"
            y="386"
            textAnchor="middle"
            fontSize="14"
            fill={C.white}
            fillOpacity="0.75"
          >
            Low
          </text>
          <rect
            x="108"
            y="368"
            width="68"
            height="26"
            rx="13"
            fill="none"
            stroke={C.white}
            strokeOpacity="0.22"
          />
          <text
            x="142"
            y="386"
            textAnchor="middle"
            fontSize="14"
            fill={C.white}
            fillOpacity="0.75"
          >
            High
          </text>
          <g ref={bind("app.high")} {...at("app.high")}>
            <rect
              x="108"
              y="368"
              width="68"
              height="26"
              rx="13"
              fill={C.error}
            />
            <text
              x="142"
              y="386"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={C.white}
            >
              High
            </text>
          </g>
        </g>

        <g ref={bind("app.f4")} {...at("app.f4")}>
          <rect
            x="40"
            y="408"
            width="136"
            height="36"
            rx="10"
            fill={C.accent}
          />
          <text
            ref={bind("app.submitLabel")}
            x="108"
            y="431"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill={C.white}
            {...at("app.submitLabel")}
          >
            Submit
          </text>
          <g ref={bind("app.saved")} {...at("app.saved")}>
            <rect
              x="40"
              y="408"
              width="136"
              height="36"
              rx="10"
              fill={C.success}
            />
            <Tick x={90} y={426} />
            <text x="100" y="431" fontSize="14" fontWeight="700" fill={C.white}>
              Saved
            </text>
          </g>
        </g>

        <circle
          ref={bind("app.ripple0")}
          cx="142"
          cy="381"
          fill="none"
          stroke={C.white}
          strokeWidth="2"
          {...at("app.ripple0")}
        />
        <circle
          ref={bind("app.ripple1")}
          cx="108"
          cy="426"
          fill="none"
          stroke={C.white}
          strokeWidth="2"
          {...at("app.ripple1")}
        />
        <g ref={bind("app.touch")} {...at("app.touch")}>
          <circle
            r="11"
            fill={C.white}
            fillOpacity="0.3"
            stroke={C.white}
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
        </g>
      </g>

      {/* Notch and home bar */}
      <rect x="86" y="102" width="44" height="10" rx="5" fill={C.bg} />
      <rect
        x="88"
        y="451"
        width="40"
        height="3"
        rx="1.5"
        fill={C.white}
        fillOpacity="0.35"
      />
    </g>
  );
};

// ── Centre: the Dataverse table ─────────────────────────────────────────────

const Row = ({ row, y }) => (
  <g>
    <circle cx="258" cy={y + 15} r="4" fill={row.color} />
    <text x="270" y={y + 20} fontSize="14" fill={C.white} fillOpacity="0.88">
      {row.site}
    </text>
  </g>
);

const Table = ({ bind }) => {
  const { x, y, w, h } = PPH_TABLE;
  return (
    <g ref={bind("zone.table")} {...at("zone.table")}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="18"
        fill={C.surface}
        stroke={C.white}
        strokeOpacity="0.14"
      />
      {/* Table icon: a database cylinder */}
      <g fill="none" stroke={C.bright} strokeWidth="1.8">
        <ellipse cx="263" cy="249" rx="9" ry="3.5" />
        <path d="M254 249v13c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-13M254 255.5c0 2 4 3.5 9 3.5s9-1.5 9-3.5" />
      </g>
      <text x="282" y="254" fontSize="16" fontWeight="700" fill={C.white}>
        Jobs
      </text>
      <text x="282" y="272" fontSize="14" fill={C.white} fillOpacity="0.55">
        Dataverse table
      </text>
      <text
        ref={bind("table.count")}
        x="436"
        y="254"
        textAnchor="end"
        fontSize="14"
        fontWeight="700"
        fill={C.bright}
      >
        {FIRST["table.count"].text}
      </text>
      <path d={`M${x} 286H${x + w}`} stroke={C.white} strokeOpacity="0.1" />
      <text x="254" y="308" fontSize="14" fill={C.white} fillOpacity="0.45">
        Site
      </text>
      <text
        x="436"
        y="308"
        textAnchor="end"
        fontSize="14"
        fill={C.white}
        fillOpacity="0.45"
      >
        Status
      </text>

      <g clipPath="url(#pph-rows)">
        <rect
          ref={bind("table.flash")}
          x="246"
          y={PPH_ROW_Y + 2}
          width="198"
          height="26"
          rx="8"
          fill={C.accent}
          {...at("table.flash")}
        />
        <g ref={bind("table.rows")} {...at("table.rows")}>
          {PPH_ROWS.map((row, i) => {
            const rowY = PPH_ROW_Y + i * PPH_ROW_H;
            const content = (
              <>
                <Row row={row} y={rowY} />
                <StatusPill x={362} y={rowY + 4} status={row.status} />
              </>
            );
            return i === PPH_ROWS.length - 1 ? (
              <g key={row.site} ref={bind("table.row3")} {...at("table.row3")}>
                {content}
              </g>
            ) : (
              <g key={row.site}>{content}</g>
            );
          })}
        </g>
        <g ref={bind("table.new")} {...at("table.new")}>
          <Row row={PPH_NEW_ROW} y={PPH_ROW_Y} />
          <g ref={bind("table.statusNew")} {...at("table.statusNew")}>
            <StatusPill x={362} y={PPH_ROW_Y + 4} status="new" />
          </g>
          <g ref={bind("table.statusOk")} {...at("table.statusOk")}>
            <StatusPill x={362} y={PPH_ROW_Y + 4} status="approved" />
          </g>
        </g>
      </g>
    </g>
  );
};

// ── Right top: the flow ─────────────────────────────────────────────────────

const Flow = ({ bind }) => (
  <g ref={bind("zone.flow")} {...at("zone.flow")}>
    <text
      x={PPH_STEP_X}
      y="22"
      fontSize="14"
      fontWeight="700"
      fill={C.white}
      fillOpacity="0.55"
    >
      Automated flow
    </text>
    <text
      ref={bind("flow.status")}
      x={PPH_STEP_X + PPH_STEP_W}
      y="22"
      textAnchor="end"
      fontSize="14"
      fontWeight="700"
      fill={C.success}
      {...at("flow.status")}
    >
      Ran in 8 seconds
    </text>

    {/* Connectors between steps */}
    {PPH_STEPS.slice(0, -1).map((step, k) => {
      const y1 = step.y + PPH_STEP_H;
      const y2 = PPH_STEPS[k + 1].y;
      return (
        <path
          key={step.id}
          d={`M${PPH_STEP_ICON_X} ${y1}V${y2 - 2}M${PPH_STEP_ICON_X - 4} ${y2 - 6}l4 4 4-4`}
          fill="none"
          stroke={C.white}
          strokeOpacity="0.28"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    })}

    {PPH_STEPS.map((step, k) => {
      const cy = step.y + PPH_STEP_H / 2;
      const tile = {
        x: PPH_STEP_X + 12,
        y: cy - 16,
        width: 32,
        height: 32,
        rx: 9,
      };
      const card = {
        x: PPH_STEP_X,
        y: step.y,
        width: PPH_STEP_W,
        height: PPH_STEP_H,
        rx: 14,
      };
      return (
        <g key={step.id} ref={bind(`step.${k}`)} {...at(`step.${k}`)}>
          <rect
            {...card}
            fill={C.surface}
            stroke={C.white}
            strokeOpacity="0.14"
          />
          <rect
            ref={bind(`step.${k}.glow`)}
            {...card}
            fill="none"
            stroke={C.bright}
            strokeWidth="1.6"
            {...at(`step.${k}.glow`)}
          />
          <rect {...tile} fill={C.mid} />
          <g transform={`translate(${PPH_STEP_ICON_X} ${cy})`}>
            <StepIcon kind={step.id} color={C.bright} />
          </g>
          <g ref={bind(`step.${k}.tile`)} {...at(`step.${k}.tile`)}>
            <rect {...tile} fill={C.accent} />
            <g transform={`translate(${PPH_STEP_ICON_X} ${cy})`}>
              <StepIcon kind={step.id} color={C.white} />
            </g>
          </g>
          <text
            x={PPH_STEP_X + 56}
            y={step.y + 25}
            fontSize="14"
            fontWeight="700"
            fill={C.white}
          >
            {step.title}
          </text>
          {step.done ? (
            <>
              <text
                ref={bind(`step.${k}.subA`)}
                x={PPH_STEP_X + 56}
                y={step.y + 44}
                fontSize="14"
                fill={C.white}
                fillOpacity="0.55"
                {...at(`step.${k}.subA`)}
              >
                {step.sub}
              </text>
              <text
                ref={bind(`step.${k}.subB`)}
                x={PPH_STEP_X + 56}
                y={step.y + 44}
                fontSize="14"
                fontWeight="700"
                fill={C.bright}
                {...at(`step.${k}.subB`)}
              >
                {step.done}
              </text>
            </>
          ) : (
            <text
              x={PPH_STEP_X + 56}
              y={step.y + 44}
              fontSize="14"
              fill={C.white}
              fillOpacity="0.55"
            >
              {step.sub}
            </text>
          )}
          <circle
            ref={bind(`step.${k}.pending`)}
            cx={PPH_STEP_RING_X}
            cy={cy}
            r="9"
            fill="none"
            stroke={C.white}
            strokeOpacity="0.35"
            strokeWidth="1.6"
            strokeDasharray="3 3"
            {...at(`step.${k}.pending`)}
          />
          <path
            ref={bind(`step.${k}.spin`)}
            d={`M${PPH_STEP_RING_X} ${cy - 9}A9 9 0 1 1 ${PPH_STEP_RING_X - 9} ${cy}`}
            fill="none"
            stroke={C.bright}
            strokeWidth="2.4"
            strokeLinecap="round"
            {...at(`step.${k}.spin`)}
          />
          <g ref={bind(`step.${k}.tick`)} {...at(`step.${k}.tick`)}>
            <circle cx={PPH_STEP_RING_X} cy={cy} r="10" fill={C.success} />
            <Tick x={PPH_STEP_RING_X} y={cy} size={0.85} />
          </g>
        </g>
      );
    })}

    <g ref={bind("flow.token")} {...at("flow.token")}>
      <circle r="10" fill={C.bright} fillOpacity="0.25" />
      <circle r="5" fill={C.bright} />
    </g>
  </g>
);

// ── Popouts above the table, one per flow step ──────────────────────────────

const popCard = {
  rx: 16,
  fill: C.surface,
  stroke: C.white,
  strokeOpacity: 0.16,
};
const Leader = ({ from, toY }) => (
  <path
    d={`M${from[0]} ${from[1]}C${from[0] + 22} ${from[1]} ${PPH_STEP_X - 22} ${toY} ${PPH_STEP_X} ${toY}`}
    fill="none"
    stroke={C.bright}
    strokeOpacity="0.55"
    strokeWidth="1.4"
    strokeDasharray="3 4"
  />
);
const stepCy = (k) => PPH_STEPS[k].y + PPH_STEP_H / 2;

const Popouts = ({ bind }) => (
  <g>
    {/* AI reads the photo */}
    <g ref={bind("pop.ai")} {...at("pop.ai")}>
      <Leader from={[444, 64]} toY={stepCy(0)} />
      <rect x="248" y="40" width="196" height="160" {...popCard} />
      <g clipPath="url(#pph-ai-photo)">
        <g transform="translate(260 52) scale(1.265)">
          <PipePhoto />
        </g>
        <g ref={bind("pop.ai.scan")} {...at("pop.ai.scan")}>
          <rect x="260" y="28" width="172" height="24" fill="url(#pph-scan)" />
          <path d="M260 52H432" stroke={C.bright} strokeWidth="2" />
        </g>
      </g>
      <g ref={bind("pop.ai.box")} {...at("pop.ai.box")}>
        <rect
          x="350"
          y="85"
          width="40"
          height="36"
          rx="4"
          fill="none"
          stroke={C.bright}
          strokeWidth="1.6"
          strokeDasharray="4 3"
        />
        <circle cx="266" cy="138" r="4" fill={C.bright} />
        <text x="278" y="143" fontSize="14" fontWeight="700" fill={C.white}>
          Leak at the valve
        </text>
      </g>
      {[
        { x: 260, w: 50, label: "Leak" },
        { x: 316, w: 56, label: "Valve" },
        { x: 378, w: 54, label: "Urgent", hot: true },
      ].map((tag, i) => (
        <g
          key={tag.label}
          ref={bind(`pop.ai.tag.${i}`)}
          {...at(`pop.ai.tag.${i}`)}
        >
          <rect
            x={tag.x}
            y="160"
            width={tag.w}
            height="26"
            rx="13"
            fill={tag.hot ? C.error : C.accent}
          />
          <text
            x={tag.x + tag.w / 2}
            y="178"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill={C.white}
          >
            {tag.label}
          </text>
        </g>
      ))}
    </g>

    {/* Manager approval */}
    <g ref={bind("pop.ok")} {...at("pop.ok")}>
      <Leader from={[440, 110]} toY={stepCy(1)} />
      <rect x="252" y="48" width="188" height="144" {...popCard} />
      <circle cx="278" cy="78" r="14" fill={C.accent} />
      <text
        x="278"
        y="83"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={C.white}
      >
        S
      </text>
      <text x="300" y="75" fontSize="14" fontWeight="700" fill={C.white}>
        Sam
      </text>
      <text x="300" y="93" fontSize="14" fill={C.white} fillOpacity="0.55">
        Approver
      </text>
      <text
        x="266"
        y="126"
        fontSize="14"
        fontWeight="700"
        fill={C.white}
        fillOpacity="0.9"
      >
        Approve Penrith job?
      </text>
      <g ref={bind("pop.ok.buttons")} {...at("pop.ok.buttons")}>
        <rect x="266" y="146" width="84" height="30" rx="8" fill={C.accent} />
        <rect
          ref={bind("pop.ok.press")}
          x="266"
          y="146"
          width="84"
          height="30"
          rx="8"
          fill={C.white}
          fillOpacity="0.35"
          {...at("pop.ok.press")}
        />
        <text
          x="308"
          y="166"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={C.white}
        >
          Approve
        </text>
        <rect
          x="358"
          y="146"
          width="68"
          height="30"
          rx="8"
          fill="none"
          stroke={C.white}
          strokeOpacity="0.3"
        />
        <text
          x="392"
          y="166"
          textAnchor="middle"
          fontSize="14"
          fill={C.white}
          fillOpacity="0.75"
        >
          Reject
        </text>
      </g>
      <g ref={bind("pop.ok.stamp")} {...at("pop.ok.stamp")}>
        <rect
          x="266"
          y="146"
          width="160"
          height="30"
          rx="8"
          fill={C.success}
          fillOpacity="0.16"
        />
        <circle cx="284" cy="161" r="8" fill={C.success} />
        <Tick x={284} y={161} size={0.7} />
        <text x="300" y="166" fontSize="14" fontWeight="700" fill={C.success}>
          Approved by Sam
        </text>
      </g>
      <g ref={bind("pop.ok.cursor")} {...at("pop.ok.cursor")}>
        <path
          d="M0 0v17l4.5-4 3.2 7 3-1.4-3.2-6.8 6-.5z"
          fill={C.white}
          stroke={C.bg}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>
    </g>

    {/* Work order from the template */}
    <g ref={bind("pop.doc")} {...at("pop.doc")}>
      <g ref={bind("pop.doc.leader")} {...at("pop.doc.leader")}>
        <Leader from={[386, 110]} toY={stepCy(2)} />
      </g>
      <path d="M300 52h60l20 20v84h-80z" fill={C.paper} />
      <path d="M360 52v20h20z" fill={C.lineStrong} />
      <rect x="310" y="62" width="22" height="8" rx="2" fill={C.accent} />
      <text x="310" y="90" fontSize="14" fontWeight="700" fill={C.ink}>
        WO-1048
      </text>
      {PPH_DOC_LINES.map((_, i) => (
        <rect
          key={i}
          ref={bind(`pop.doc.line.${i}`)}
          x="310"
          y={100 + i * 9}
          height="4"
          rx="2"
          fill={i === 0 ? C.accent : C.lineStrong}
          {...at(`pop.doc.line.${i}`)}
        />
      ))}
      <text
        x="340"
        y="180"
        textAnchor="middle"
        fontSize="14"
        fill={C.white}
        fillOpacity="0.7"
      >
        Work order.pdf
      </text>
    </g>

    {/* The on-call tech replies */}
    <g ref={bind("pop.chat")} {...at("pop.chat")}>
      <Leader from={[444, 112]} toY={stepCy(3)} />
      <rect x="252" y="62" width="192" height="100" {...popCard} />
      <circle cx="278" cy="92" r="14" fill={C.bright} />
      <text
        x="278"
        y="97"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={C.bg}
      >
        P
      </text>
      <text x="300" y="90" fontSize="14" fontWeight="700" fill={C.white}>
        Priya
      </text>
      <text
        x="428"
        y="90"
        textAnchor="end"
        fontSize="14"
        fill={C.white}
        fillOpacity="0.45"
      >
        now
      </text>
      <text x="300" y="108" fontSize="14" fill={C.white} fillOpacity="0.55">
        On-call tech
      </text>
      <g ref={bind("pop.chat.typing")} {...at("pop.chat.typing")}>
        <rect x="300" y="122" width="52" height="26" rx="13" fill={C.mid} />
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            ref={bind(`pop.chat.dot.${i}`)}
            cx={314 + i * 12}
            cy="135"
            r="3"
            fill={C.white}
            fillOpacity="0.7"
            {...at(`pop.chat.dot.${i}`)}
          />
        ))}
      </g>
      <g ref={bind("pop.chat.msg")} {...at("pop.chat.msg")}>
        <rect x="266" y="120" width="164" height="30" rx="12" fill={C.accent} />
        <text x="278" y="140" fontSize="14" fontWeight="700" fill={C.white}>
          On my way, Thu 10am
        </text>
      </g>
    </g>
  </g>
);

// ── Right bottom: the report ────────────────────────────────────────────────

const Report = ({ bind }) => {
  const { x, y, w, h } = PPH_DASH;
  const centre = (i) => PPH_BAR.x0 + i * PPH_BAR.step + PPH_BAR.w / 2;
  const trend = PPH_LAST_WEEK.map(
    (v, i) => `${centre(i)},${PPH_BAR.base - v * PPH_BAR.unit}`,
  ).join(" ");
  return (
    <g ref={bind("zone.dash")} {...at("zone.dash")}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="18"
        fill={C.surface}
        stroke={C.white}
        strokeOpacity="0.14"
      />
      <text x="510" y="360" fontSize="16" fontWeight="700" fill={C.white}>
        Jobs report
      </text>
      <circle
        ref={bind("dash.live")}
        cx="664"
        cy="355"
        fill="none"
        stroke={C.success}
        strokeWidth="1.5"
        {...at("dash.live")}
      />
      <circle cx="664" cy="355" r="4" fill={C.success} />
      <text
        x="726"
        y="360"
        textAnchor="end"
        fontSize="14"
        fill={C.white}
        fillOpacity="0.55"
      >
        Updated
      </text>

      <rect
        ref={bind("dash.flash")}
        x="502"
        y="374"
        width="112"
        height="54"
        rx="10"
        fill={C.accent}
        {...at("dash.flash")}
      />
      <text x="510" y="392" fontSize="14" fill={C.white} fillOpacity="0.55">
        Jobs this week
      </text>
      <text
        ref={bind("dash.jobs")}
        x="510"
        y="420"
        fontSize="24"
        fontWeight="700"
        fill={C.white}
      >
        {FIRST["dash.jobs"].text}
      </text>
      <text x="626" y="392" fontSize="14" fill={C.white} fillOpacity="0.55">
        Avg time to fix
      </text>
      <text
        ref={bind("dash.time")}
        x="626"
        y="420"
        fontSize="24"
        fontWeight="700"
        fill={C.white}
      >
        {FIRST["dash.time"].text}
      </text>

      {/* Ask a question in plain English */}
      <rect
        x="508"
        y="436"
        width="220"
        height="28"
        rx="14"
        fill={C.bg}
        stroke={C.white}
        strokeOpacity="0.14"
      />
      <g transform="translate(524 450) scale(0.62)">
        <StepIcon kind="ai" color={C.bright} />
      </g>
      <text
        ref={bind("dash.hint")}
        x="540"
        y="455"
        fontSize="14"
        fill={C.white}
        fillOpacity="0.4"
        {...at("dash.hint")}
      >
        Ask about your jobs
      </text>
      <text
        ref={bind("dash.ask")}
        x="540"
        y="455"
        fontSize="14"
        fill={C.white}
        fillOpacity="0.9"
      >
        {FIRST["dash.ask"].text}
      </text>

      {/* Bars, last week's line and day labels */}
      <path
        d={`M${PPH_BAR.x0 - 8} ${PPH_BAR.base}H${PPH_BAR.x0 + 4 * PPH_BAR.step + PPH_BAR.w + 8}`}
        stroke={C.white}
        strokeOpacity="0.18"
      />
      {PPH_BARS.map((bar, i) => (
        <g key={bar.day}>
          {/* Placeholder bar, seen while the report waits for data */}
          <rect
            x={PPH_BAR.x0 + i * PPH_BAR.step}
            y={PPH_BAR.base - PPH_LAST_WEEK[i] * PPH_BAR.unit}
            width={PPH_BAR.w}
            height={PPH_LAST_WEEK[i] * PPH_BAR.unit}
            rx="4"
            fill={C.white}
            fillOpacity="0.05"
          />
          <rect
            ref={bind(`bar.${i}`)}
            x={PPH_BAR.x0 + i * PPH_BAR.step}
            width={PPH_BAR.w}
            rx="4"
            fill={C.accent}
            {...at(`bar.${i}`)}
          />
          <text
            x={centre(i)}
            y="578"
            textAnchor="middle"
            fontSize="14"
            fill={C.white}
            fillOpacity={i === PPH_BUSIEST ? 0.9 : 0.5}
          >
            {bar.day}
          </text>
        </g>
      ))}
      <rect
        ref={bind("bar.hi")}
        x={PPH_BAR.x0 + PPH_BUSIEST * PPH_BAR.step}
        y={PPH_BAR.base - PPH_BARS[PPH_BUSIEST].v * PPH_BAR.unit}
        width={PPH_BAR.w}
        height={PPH_BARS[PPH_BUSIEST].v * PPH_BAR.unit}
        rx="4"
        fill={C.bright}
        {...at("bar.hi")}
      />
      <polyline
        ref={bind("dash.trend")}
        points={trend}
        pathLength="1"
        strokeDasharray="1 1"
        fill="none"
        stroke={C.white}
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...at("dash.trend")}
      />
    </g>
  );
};

// ── Left column, act 3: the customer portal ─────────────────────────────────

const Portal = ({ bind }) => {
  const { x, y, w, h } = PPH_PORTAL;
  const stepY = (i) => PPH_PORTAL_STEP_Y + i * PPH_PORTAL_STEP_GAP;
  return (
    <g ref={bind("zone.portal")} {...at("zone.portal")}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill={C.surface}
        stroke={C.white}
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <path d={`M${x} 150H${x + w}`} stroke={C.white} strokeOpacity="0.1" />
      {[32, 44, 56].map((cx) => (
        <circle
          key={cx}
          cx={cx}
          cy="131"
          r="3.5"
          fill={C.white}
          fillOpacity="0.3"
        />
      ))}
      <rect x="70" y="119" width="116" height="24" rx="12" fill={C.bg} />
      <path
        d="M80 129v-2a3 3 0 016 0v2M78.5 129h9v6h-9z"
        fill="none"
        stroke={C.bright}
        strokeWidth="1.3"
      />
      <text x="94" y="136" fontSize="14" fill={C.white} fillOpacity="0.7">
        yourco.com.au
      </text>

      <text x="34" y="182" fontSize="16" fontWeight="700" fill={C.white}>
        Hi Alex,
      </text>
      <text x="34" y="202" fontSize="14" fill={C.white} fillOpacity="0.55">
        Job 1048 · Penrith
      </text>

      {/* Progress track */}
      <rect
        x="42"
        y={stepY(0)}
        width="4"
        height={stepY(3) - stepY(0)}
        rx="2"
        fill={C.white}
        fillOpacity="0.12"
      />
      <rect
        ref={bind("portal.fill")}
        x="42"
        y={stepY(0)}
        width="4"
        rx="2"
        fill={C.success}
        {...at("portal.fill")}
      />
      {PPH_PORTAL_STEPS.map((step, i) => (
        <g key={step.label}>
          <circle
            cx="44"
            cy={stepY(i)}
            r="9"
            fill={C.bg}
            stroke={C.white}
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          {i < 3 && (
            <g ref={bind(`portal.step.${i}`)} {...at(`portal.step.${i}`)}>
              <circle
                cx="44"
                cy={stepY(i)}
                r="9"
                fill={i === 2 ? C.bright : C.success}
              />
              {i < 2 ? (
                <Tick x={44} y={stepY(i)} size={0.65} />
              ) : (
                <circle cx="44" cy={stepY(i)} r="3.5" fill={C.bg} />
              )}
            </g>
          )}
          <text
            x="64"
            y={stepY(i) + 5}
            fontSize="14"
            fontWeight={i === 2 ? 700 : 400}
            fill={C.white}
            fillOpacity={i === 3 ? 0.45 : 0.9}
          >
            {step.label}
          </text>
          {step.sub && (
            <text
              ref={bind("portal.sub")}
              x="64"
              y={stepY(i) + 23}
              fontSize="14"
              fontWeight="700"
              fill={C.bright}
              {...at("portal.sub")}
            >
              {step.sub}
            </text>
          )}
        </g>
      ))}
      <circle
        ref={bind("portal.ring")}
        cx="44"
        cy={stepY(2)}
        fill="none"
        stroke={C.bright}
        strokeWidth="1.6"
        {...at("portal.ring")}
      />

      <rect
        x="34"
        y="402"
        width="148"
        height="32"
        rx="9"
        fill="none"
        stroke={C.white}
        strokeOpacity="0.3"
      />
      <text
        x="108"
        y="423"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={C.white}
        fillOpacity="0.85"
      >
        Message us
      </text>
    </g>
  );
};

// ── The story ───────────────────────────────────────────────────────────────

const PphHeroStory = () => {
  const { wrapRef, bind } = useStoryPlayer({
    sceneAt,
    acts: PPH_ACTS,
    initialT: PPH_INITIAL_T,
    reducedMotionT: PPH_REDUCED_MOTION_T,
  });

  return (
    <div ref={wrapRef} className={styles.pphHeroStory} aria-hidden="true">
      {/* Caption bar: HTML rather than SVG text so it stays readable on phones */}
      <div className={styles.captions}>
        {PPH_CAPTIONS.map((caption, i) => (
          <span
            key={caption.tag}
            ref={bind(`caption.${i}`)}
            className={styles.caption}
            data-tone={caption.tone}
            {...at(`caption.${i}`)}
          >
            <span className={styles.tag}>{caption.tag}</span>
            {caption.text}
          </span>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${PPH_VIEW.w} ${PPH_VIEW.h}`}
        className={styles.stage}
        fontFamily="aptos"
        focusable="false"
      >
        <defs>
          <pattern
            id="pph-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1.1" fill={C.white} fillOpacity="0.09" />
          </pattern>
          <radialGradient id="pph-fade-fill">
            <stop offset="0.35" stopColor={C.white} />
            <stop offset="1" stopColor={C.white} stopOpacity="0" />
          </radialGradient>
          <mask id="pph-fade">
            <rect
              width={PPH_VIEW.w}
              height={PPH_VIEW.h}
              fill="url(#pph-fade-fill)"
            />
          </mask>
          <linearGradient id="pph-scan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={C.bright} stopOpacity="0" />
            <stop offset="1" stopColor={C.bright} stopOpacity="0.35" />
          </linearGradient>
          <clipPath id="pph-screen">
            <rect x="28" y="96" width="160" height="364" rx="22" />
          </clipPath>
          <clipPath id="pph-rows">
            <rect
              x={PPH_TABLE.x}
              y={PPH_ROW_Y - 2}
              width={PPH_TABLE.w}
              height={PPH_ROW_H * 4 + 2}
            />
          </clipPath>
          <clipPath id="pph-ai-photo">
            <rect x="260" y="52" width="172" height="66" rx="8" />
          </clipPath>
        </defs>

        {/* Depth: dot grid and faint rings around the table, no panel */}
        <rect
          width={PPH_VIEW.w}
          height={PPH_VIEW.h}
          fill="url(#pph-dots)"
          mask="url(#pph-fade)"
        />
        {[130, 215, 300].map((r) => (
          <circle
            key={r}
            cx={PPH_TABLE.cx}
            cy={PPH_TABLE.cy}
            r={r}
            fill="none"
            stroke={C.white}
            strokeOpacity="0.05"
          />
        ))}

        {/* Connector tracks, then the lit paths on top */}
        <g ref={bind("zone.tracks")} {...at("zone.tracks")}>
          {Object.entries(PPH_LINKS).map(([id, d]) => (
            <path
              key={id}
              d={d}
              fill="none"
              stroke={C.white}
              strokeOpacity="0.12"
              strokeWidth="2"
            />
          ))}
        </g>
        {Object.entries(PPH_LINKS).map(([id, d]) => (
          <path
            key={id}
            ref={bind(`link.${id}`)}
            d={d}
            pathLength="1"
            strokeDasharray="1 1"
            fill="none"
            stroke={C.bright}
            strokeOpacity="0.8"
            strokeWidth="2"
            {...at(`link.${id}`)}
          />
        ))}

        <Table bind={bind} />
        <Flow bind={bind} />
        <Report bind={bind} />
        <Portal bind={bind} />
        <Phone bind={bind} />
        <Popouts bind={bind} />

        {/* The saved job on its way to the table */}
        <g ref={bind("packet")} {...at("packet")}>
          <rect x="-28" y="-16" width="56" height="32" rx="7" fill={C.paper} />
          <rect x="-28" y="-16" width="8" height="32" rx="3" fill={C.success} />
          <rect
            x="-14"
            y="-8"
            width="30"
            height="4"
            rx="2"
            fill={C.ink}
            fillOpacity="0.7"
          />
          <rect
            x="-14"
            y="0"
            width="22"
            height="4"
            rx="2"
            fill={C.lineStrong}
          />
          <rect
            x="-14"
            y="7"
            width="26"
            height="4"
            rx="2"
            fill={C.lineStrong}
          />
        </g>

        {["side", "flow", "dash"].map((id) => (
          <circle
            key={id}
            ref={bind(`dot.${id}`)}
            r="4.5"
            fill={C.bright}
            {...at(`dot.${id}`)}
          />
        ))}

        <circle
          ref={bind("fx.ring")}
          cx={PPH_TABLE.cx}
          cy={PPH_TABLE.cy}
          fill="none"
          stroke={C.bright}
          strokeWidth="2"
          {...at("fx.ring")}
        />

        <Chaos bind={bind} />
      </svg>
    </div>
  );
};

export default PphHeroStory;
