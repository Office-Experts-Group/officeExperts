"use client";
// /app/services/microsoft-excel/(svgs)/ExcelHeroStory.jsx
// Animated hero illustration for the Excel hub: a fragile linked workbook
// breaks (act 1), gets fixed with clean formulas, Power Query and a macro
// (act 2), then feeds a live dashboard and emailed reports (act 3).
//
// - Positions and timing live in excelHeroStoryScene.js (sceneAt).
// - The server renders the opening frame from sceneAt(INITIAL_T).
// - useStoryPlayer runs the loop and follows HeroRotator via HeroContext.
// Decorative: aria-hidden, the frame copy beside it carries the meaning.
//
// Colours (hard-coded hex, matching globals.scss tokens):
//   #111820 $dark-bg      #18232e $dark-surface   #1a2a3a $dark-mid
//   #046999 $accent       #6fc3e8 $accent-on-dark #e8f4fa $accent-light
//   #ffffff $white        #f7f8f9 $light-bg       #f2f3f5 $grayBGC
//   #e3e8ec $line         #d4d6d9 $line-strong    #0d1b2a $text-primary
//   #4a5568 $text-secondary  #9a9da1 $text-muted
//   #c53030 $error        #fff5f5 $error-bg       #feb2b2 $error-border

import styles from "@/styles/excelHeroStory.module.scss";
// Shared story player (same hook as the Office Experts home hero)
import { openingProps, useStoryPlayer } from "@/components/useStoryPlayer";
import {
  ACTS,
  BAR_BASE,
  BAR_W,
  BARS,
  BROKEN_SOURCE,
  CAPTIONS,
  CELLS,
  CHIPS,
  COLS,
  DASH,
  ERRORS,
  INITIAL_T,
  MACRO,
  RCPT_Y,
  RECIPIENTS,
  REDUCED_MOTION_T,
  ROWS,
  SHEET,
  SHEET_TABS,
  SOURCE_CARD,
  SOURCES,
  STEPS,
  TREND_POINTS,
  VIEW,
  WB,
  barX,
  colOf,
  rowTop,
  sceneAt,
  stepY,
  wirePath,
} from "./excelHeroStoryScene";

// Opening frame, shared by the server render and hydration so they match
const FIRST = sceneAt(INITIAL_T);
const at = (key) => openingProps(FIRST, key);

const SHEET_BOTTOM = rowTop(ROWS);

// Grid lines for the sheet, built once
const GRID_PATH = [
  ...[...COLS.map((col) => col.x), SHEET.right].map(
    (x) => `M${x} ${SHEET.head}V${SHEET_BOTTOM}`,
  ),
  `M${SHEET.x} ${SHEET.head}H${SHEET.right}`,
  ...Array.from({ length: ROWS + 1 }, (_, k) => {
    const y = rowTop(k);
    return `M${SHEET.x} ${y}H${SHEET.right}`;
  }),
].join("");

// Small tick used on lit steps, recipient badges
const Tick = ({ x, y, stroke = "#111820" }) => (
  <path
    d={`M${x - 4.5} ${y}l3 3 6-6.5`}
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const ExcelHeroStory = () => {
  const { wrapRef, bind } = useStoryPlayer({
    sceneAt,
    acts: ACTS,
    initialT: INITIAL_T,
    reducedMotionT: REDUCED_MOTION_T,
  });

  return (
    <div ref={wrapRef} className={styles.story} aria-hidden="true">
      {/* Caption bar: HTML so it stays readable on phones */}
      <div className={styles.captions}>
        {CAPTIONS.map((caption, i) => (
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
        viewBox={`0 ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
        className={styles.stage}
        focusable="false"
        fontFamily="aptos"
      >
        <defs>
          <linearGradient id="eh-scan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6fc3e8" stopOpacity="0" />
            <stop offset="1" stopColor="#6fc3e8" stopOpacity="0.35" />
          </linearGradient>
          <clipPath id="eh-sheet">
            <rect
              x={SHEET.x}
              y={SHEET.head}
              width={SHEET.right - SHEET.x}
              height={SHEET_BOTTOM - SHEET.head}
            />
          </clipPath>
        </defs>

        {/* ── Wires from the linked workbooks (behind the window) ── */}
        {SOURCES.map((src, i) => (
          <path
            key={`wire-${src.name}`}
            ref={bind(`wire.${i}`)}
            d={wirePath(src)}
            pathLength="1"
            strokeDasharray="1 1"
            fill="none"
            stroke="#6fc3e8"
            strokeWidth="2"
            {...at(`wire.${i}`)}
          />
        ))}
        <path
          ref={bind("wire.broken")}
          d={wirePath(SOURCES[BROKEN_SOURCE])}
          fill="none"
          stroke="#e05a5a"
          strokeWidth="2"
          strokeDasharray="4 5"
          {...at("wire.broken")}
        />

        {/* ── The workbook ── */}
        <g ref={bind("wb")} {...at("wb")}>
          <rect
            x={WB.x}
            y={WB.y}
            width={WB.w}
            height={WB.h}
            rx="14"
            fill="#ffffff"
          />
          <path
            d={`M${WB.x + 14} ${WB.y}h${WB.w - 28}a14 14 0 0 1 14 14v20H${WB.x}V${WB.y + 14}a14 14 0 0 1 14-14z`}
            fill="#f2f3f5"
          />
          {[42, 56, 70].map((cx) => (
            <circle key={cx} cx={cx} cy="57" r="4" fill="#d4d6d9" />
          ))}
          <text
            ref={bind("wb.name")}
            x="86"
            y="62"
            fontSize="14"
            fontWeight="600"
            fill="#0d1b2a"
          >
            {FIRST["wb.name"].text}
          </text>

          {/* File size chip: red while it balloons, blue once fixed */}
          <g ref={bind("size.bad")} {...at("size.bad")}>
            <rect
              x="362"
              y="46"
              width="90"
              height="24"
              rx="12"
              fill="#fff5f5"
              stroke="#feb2b2"
            />
            <text
              ref={bind("size.bad.text")}
              x="407"
              y="63"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#c53030"
            >
              {FIRST["size.bad.text"].text}
            </text>
          </g>
          <g ref={bind("size.good")} {...at("size.good")}>
            <rect
              x="362"
              y="46"
              width="90"
              height="24"
              rx="12"
              fill="#e8f4fa"
              stroke="#046999"
              strokeOpacity="0.28"
            />
            <text
              ref={bind("size.good.text")}
              x="407"
              y="63"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#046999"
            >
              {FIRST["size.good.text"].text}
            </text>
          </g>

          {/* Formula bar */}
          <rect
            x={SHEET.x}
            y="80"
            width={SHEET.right - SHEET.x}
            height="28"
            rx="6"
            fill="#ffffff"
            stroke="#e3e8ec"
          />
          <text x="41" y="99" fontSize="14" fontStyle="italic" fill="#9a9da1">
            fx
          </text>
          <path d="M62 84V104" stroke="#e3e8ec" />
          <text
            ref={bind("fx.text")}
            x="72"
            y="99"
            fontSize="14"
            fill="#0d1b2a"
          >
            {FIRST["fx.text"].text}
          </text>

          {/* Sheet: headings, totals band, grid */}
          <rect
            x={SHEET.x}
            y={SHEET.head}
            width={SHEET.right - SHEET.x}
            height={SHEET.top - SHEET.head}
            fill="#f2f3f5"
          />
          <rect
            x={SHEET.x}
            y={SHEET.top}
            width={COLS[0].x - SHEET.x}
            height={SHEET_BOTTOM - SHEET.top}
            fill="#f2f3f5"
          />
          <rect
            x={COLS[0].x}
            y={rowTop(ROWS - 1)}
            width={SHEET.right - COLS[0].x}
            height={SHEET.rowH}
            fill="#f7f8f9"
          />
          <path d={GRID_PATH} fill="none" stroke="#e3e8ec" />
          {COLS.map((col) => (
            <text
              key={col.key}
              x={col.x + col.w / 2}
              y="130"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill="#4a5568"
            >
              {col.key}
            </text>
          ))}
          {CELLS.map(({ text, row, col }) => {
            const isLabel = col.key === "A";
            const strong = row === 0 || row === ROWS - 1;
            return (
              <text
                key={`${col.key}${row}`}
                x={isLabel ? col.x + 8 : col.x + col.w - 8}
                y={rowTop(row) + 19}
                textAnchor={isLabel ? "start" : "end"}
                fontSize="14"
                fontWeight={strong ? "700" : "400"}
                fill={isLabel || strong ? "#0d1b2a" : "#4a5568"}
              >
                {text}
              </text>
            );
          })}

          {/* Broken cells (act 1) and their repaired values (act 2) */}
          {ERRORS.map((err, i) => {
            const col = colOf(err.col);
            const y = rowTop(err.row);
            return (
              <g key={err.text} ref={bind(`err.${i}`)} {...at(`err.${i}`)}>
                <rect
                  x={col.x + 1}
                  y={y + 1}
                  width={col.w - 2}
                  height={SHEET.rowH - 2}
                  fill="#fff5f5"
                />
                <path d={`M${col.x + 1} ${y + 1}h8l-8 8z`} fill="#c53030" />
                <text
                  x={col.x + col.w / 2}
                  y={y + 19}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#c53030"
                >
                  {err.text}
                </text>
              </g>
            );
          })}
          {ERRORS.map((err, i) => {
            const col = colOf(err.col);
            const y = rowTop(err.row);
            return (
              <g
                key={`fix-${err.text}`}
                ref={bind(`fix.${i}`)}
                {...at(`fix.${i}`)}
              >
                <rect
                  x={col.x + 1}
                  y={y + 1}
                  width={col.w - 2}
                  height={SHEET.rowH - 2}
                  fill="#e8f4fa"
                />
                <text
                  x={col.x + col.w - 8}
                  y={y + 19}
                  textAnchor="end"
                  fontSize="14"
                  fontWeight="700"
                  fill="#046999"
                >
                  {err.clean}
                </text>
              </g>
            );
          })}

          {/* Active cell on E2, grows down the column as the formula fills */}
          <rect
            ref={bind("cell.sel")}
            x={colOf("E").x + 1}
            y={rowTop(1) + 1}
            width={colOf("E").w - 2}
            rx="2"
            fill="#046999"
            fillOpacity="0.1"
            stroke="#046999"
            strokeWidth="2"
            {...at("cell.sel")}
          />

          {/* Scan line that finds and fixes the errors */}
          <g clipPath="url(#eh-sheet)">
            <g ref={bind("scan")} {...at("scan")}>
              <rect
                x="-70"
                y={SHEET.head}
                width="70"
                height={SHEET_BOTTOM - SHEET.head}
                fill="url(#eh-scan)"
              />
              <path
                d={`M0 ${SHEET.head}V${SHEET_BOTTOM}`}
                stroke="#046999"
                strokeWidth="2"
              />
            </g>
          </g>

          {/* Sheet tabs */}
          <path
            d={`M${WB.x} ${SHEET_BOTTOM}h${WB.w}v${WB.y + WB.h - SHEET_BOTTOM - 14}a14 14 0 0 1-14 14H${WB.x + 14}a14 14 0 0 1-14-14z`}
            fill="#f7f8f9"
          />
          <path
            d={`M${WB.x} ${SHEET_BOTTOM}H${WB.x + WB.w}`}
            stroke="#e3e8ec"
          />
          {SHEET_TABS.map((tab, i) => (
            <g key={tab.label}>
              {i === 0 && (
                <>
                  <rect
                    x={tab.x}
                    y={SHEET_BOTTOM}
                    width={tab.w}
                    height="30"
                    fill="#ffffff"
                  />
                  <rect
                    x={tab.x}
                    y={SHEET_BOTTOM + 28}
                    width={tab.w}
                    height="2"
                    fill="#046999"
                  />
                </>
              )}
              <text
                x={tab.x + tab.w / 2}
                y={SHEET_BOTTOM + 20}
                textAnchor="middle"
                fontSize="14"
                fontWeight={i === 0 ? "700" : "400"}
                fill={i === 0 ? "#046999" : "#4a5568"}
              >
                {tab.label}
              </text>
            </g>
          ))}

          {/* "Not responding" toast */}
          <g ref={bind("toast")} {...at("toast")}>
            <g transform="translate(126 284)">
              <rect
                width="236"
                height="36"
                rx="18"
                fill="#0d1b2a"
                stroke="#c53030"
              />
              <g transform="translate(22 18)">
                <circle
                  r="7"
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.25"
                  strokeWidth="2.5"
                />
                <g ref={bind("toast.spin")} {...at("toast.spin")}>
                  <path
                    d="M0 -7a7 7 0 0 1 7 7"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <text x="40" y="23" fontSize="14" fill="#ffffff">
                Excel (Not Responding)
              </text>
            </g>
          </g>
        </g>

        {/* ── Linked workbooks (act 1) ── */}
        {SOURCES.map((src, i) => (
          <g key={src.name} ref={bind(`src.${i}`)} {...at(`src.${i}`)}>
            <rect
              x={SOURCE_CARD.x}
              y={src.y}
              width={SOURCE_CARD.w}
              height={SOURCE_CARD.h}
              rx="12"
              fill="#18232e"
              stroke="#ffffff"
              strokeOpacity="0.12"
            />
            <rect
              x={SOURCE_CARD.x + 14}
              y={src.y + 15}
              width="24"
              height="28"
              rx="3"
              fill="#046999"
            />
            <path
              d={`M${SOURCE_CARD.x + 14} ${src.y + 24}h24M${SOURCE_CARD.x + 14} ${src.y + 33}h24M${SOURCE_CARD.x + 26} ${src.y + 15}v28`}
              stroke="#ffffff"
              strokeOpacity="0.55"
            />
            <text
              x={SOURCE_CARD.x + 50}
              y={src.y + 24}
              fontSize="14"
              fontWeight="600"
              fill="#ffffff"
            >
              {src.name}
            </text>
            <text
              x={SOURCE_CARD.x + 50}
              y={src.y + 42}
              fontSize="14"
              fill="#ffffff"
              fillOpacity="0.55"
            >
              Linked workbook
            </text>
          </g>
        ))}
        <g ref={bind("wire.badge")} {...at("wire.badge")}>
          <rect
            x={SOURCE_CARD.x}
            y="318"
            width="150"
            height="28"
            rx="14"
            fill="#c53030"
            fillOpacity="0.18"
            stroke="#e05a5a"
          />
          <text
            x={SOURCE_CARD.x + 75}
            y="337"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#ffb3b3"
          >
            1 link broken
          </text>
        </g>

        {/* ── Power Query steps (act 2) ── */}
        <g ref={bind("steps")} {...at("steps")}>
          <text
            x={SOURCE_CARD.x}
            y="102"
            fontSize="14"
            fontWeight="700"
            letterSpacing="1"
            fill="#ffffff"
            fillOpacity="0.55"
          >
            POWER QUERY STEPS
          </text>
          {STEPS.map((step, i) => {
            const y = stepY(i);
            const next = stepY(i + 1);
            return (
              <g key={step}>
                {i < STEPS.length - 1 && (
                  <>
                    <path
                      d={`M520 ${y + 11}V${next - 11}`}
                      stroke="#ffffff"
                      strokeOpacity="0.18"
                      strokeWidth="2"
                    />
                    <path
                      ref={bind(`step.${i}.line`)}
                      d={`M520 ${y + 11}V${next - 11}`}
                      pathLength="1"
                      strokeDasharray="1 1"
                      stroke="#6fc3e8"
                      strokeWidth="2"
                      {...at(`step.${i}.line`)}
                    />
                  </>
                )}
                <circle
                  cx="520"
                  cy={y}
                  r="11"
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                <g ref={bind(`step.${i}.on`)} {...at(`step.${i}.on`)}>
                  <circle cx="520" cy={y} r="11" fill="#6fc3e8" />
                  <Tick x={520} y={y + 0.5} />
                </g>
                <text
                  x="542"
                  y={y + 5}
                  fontSize="14"
                  fill="#ffffff"
                  fillOpacity="0.88"
                >
                  {step}
                </text>
              </g>
            );
          })}
        </g>

        {/* ── Macro that builds the report (act 2) ── */}
        <g ref={bind("macro")} {...at("macro")}>
          <g ref={bind("macro.btn")} {...at("macro.btn")}>
            <rect
              x={MACRO.x}
              y={MACRO.y}
              width={MACRO.w}
              height={MACRO.h}
              rx="8"
              fill="#046999"
            />
            <path
              d={`M${MACRO.x + 16} ${MACRO.y + 13}l12 7-12 7z`}
              fill="#ffffff"
            />
            <text
              x={MACRO.x + 38}
              y={MACRO.y + 25}
              fontSize="14"
              fontWeight="600"
              fill="#ffffff"
            >
              Run monthly report
            </text>
          </g>
          <rect
            x={MACRO.x}
            y={MACRO.y + 50}
            width={MACRO.w}
            height="6"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.12"
          />
          <rect
            ref={bind("macro.bar")}
            x={MACRO.x}
            y={MACRO.y + 50}
            height="6"
            rx="3"
            fill="#6fc3e8"
            {...at("macro.bar")}
          />
          <text
            ref={bind("macro.status")}
            x={MACRO.x}
            y={MACRO.y + 80}
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.75"
            {...at("macro.status")}
          >
            {FIRST["macro.status"].text}
          </text>
        </g>

        {/* ── Live dashboard (act 3) ── */}
        <g ref={bind("dash")} {...at("dash")}>
          <rect
            x={DASH.x}
            y={DASH.y}
            width={DASH.w}
            height={DASH.h}
            rx="14"
            fill="#18232e"
            stroke="#ffffff"
            strokeOpacity="0.12"
          />
          <text
            x={DASH.x + 22}
            y="72"
            fontSize="16"
            fontWeight="700"
            fill="#ffffff"
          >
            Sales dashboard
          </text>
          <circle
            ref={bind("dash.halo")}
            cx="556"
            cy="67"
            fill="#6fc3e8"
            {...at("dash.halo")}
          />
          <circle cx="556" cy="67" r="4" fill="#6fc3e8" />
          <text x="568" y="72" fontSize="14" fill="#ffffff" fillOpacity="0.65">
            Refreshed 9:02 am
          </text>

          {/* KPI tiles */}
          {[
            { key: "kpi.rev", label: "Revenue", x: 338, w: 170 },
            { key: "kpi.margin", label: "Gross margin", x: 520, w: 164 },
          ].map((kpi) => (
            <g key={kpi.key}>
              <rect
                x={kpi.x}
                y="92"
                width={kpi.w}
                height="72"
                rx="10"
                fill="#1a2a3a"
              />
              <text
                x={kpi.x + 14}
                y="118"
                fontSize="14"
                fill="#ffffff"
                fillOpacity="0.55"
              >
                {kpi.label}
              </text>
              <text
                ref={bind(kpi.key)}
                x={kpi.x + 14}
                y="148"
                fontSize="22"
                fontWeight="700"
                fill="#ffffff"
              >
                {FIRST[kpi.key].text}
              </text>
            </g>
          ))}

          {/* Slicer */}
          {CHIPS.map((chip, i) => (
            <g key={chip.label}>
              <rect
                x={chip.x}
                y="178"
                width="54"
                height="30"
                rx="15"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.25"
              />
              <text
                x={chip.x + 27}
                y="198"
                textAnchor="middle"
                fontSize="14"
                fill="#ffffff"
                fillOpacity="0.75"
              >
                {chip.label}
              </text>
              <g ref={bind(`chip.${i}.on`)} {...at(`chip.${i}.on`)}>
                <rect
                  x={chip.x}
                  y="178"
                  width="54"
                  height="30"
                  rx="15"
                  fill="#6fc3e8"
                />
                <text
                  x={chip.x + 27}
                  y="198"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#111820"
                >
                  {chip.label}
                </text>
              </g>
            </g>
          ))}

          {/* Legend */}
          <rect x="338" y="230" width="12" height="12" rx="2" fill="#046999" />
          <text x="356" y="241" fontSize="14" fill="#ffffff" fillOpacity="0.65">
            This year
          </text>
          <path
            d="M432 236h20"
            stroke="#ffffff"
            strokeOpacity="0.7"
            strokeWidth="2"
          />
          <text x="460" y="241" fontSize="14" fill="#ffffff" fillOpacity="0.65">
            Last year
          </text>

          {/* Bar chart with last year's line */}
          <path
            d={`M${DASH.x + 20} ${BAR_BASE}H${DASH.x + DASH.w - 20}`}
            stroke="#ffffff"
            strokeOpacity="0.18"
          />
          {BARS.map((bar, i) => (
            <g key={bar.label}>
              <rect
                ref={bind(`bar.${i}`)}
                x={barX(i)}
                width={BAR_W}
                rx="4"
                fill={i === BARS.length - 1 ? "#6fc3e8" : "#046999"}
                {...at(`bar.${i}`)}
              />
              <text
                x={barX(i) + BAR_W / 2}
                y="402"
                textAnchor="middle"
                fontSize="14"
                fill="#ffffff"
                fillOpacity="0.55"
              >
                {bar.label}
              </text>
            </g>
          ))}
          <polyline
            ref={bind("dash.trend")}
            points={TREND_POINTS}
            pathLength="1"
            strokeDasharray="1 1"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeLinejoin="round"
            {...at("dash.trend")}
          />
        </g>

        {/* ── Report emailed to the team (act 3) ── */}
        <g ref={bind("send")} {...at("send")}>
          {RECIPIENTS.map((person, j) => (
            <g key={person.label}>
              <circle
                cx={person.x}
                cy={RCPT_Y}
                r="22"
                fill="#1a2a3a"
                stroke="#ffffff"
                strokeOpacity="0.18"
              />
              <circle
                cx={person.x}
                cy={RCPT_Y - 6}
                r="7"
                fill="#ffffff"
                fillOpacity="0.75"
              />
              <path
                d={`M${person.x - 12} ${RCPT_Y + 14}a12 10 0 0 1 24 0z`}
                fill="#ffffff"
                fillOpacity="0.75"
              />
              <text
                x={person.x}
                y={RCPT_Y + 46}
                textAnchor="middle"
                fontSize="14"
                fill="#ffffff"
                fillOpacity="0.75"
              >
                {person.label}
              </text>
              <g ref={bind(`rcpt.${j}.tick`)} {...at(`rcpt.${j}.tick`)}>
                <circle
                  cx={person.x + 16}
                  cy={RCPT_Y - 16}
                  r="9"
                  fill="#6fc3e8"
                />
                <Tick x={person.x + 16} y={RCPT_Y - 15.5} />
              </g>
            </g>
          ))}
          <text
            x={WB.x}
            y="444"
            fontSize="14"
            fill="#ffffff"
            fillOpacity="0.55"
          >
            Emailed automatically, every Monday
          </text>
        </g>

        {/* The report on its way */}
        <g ref={bind("doc")} {...at("doc")}>
          <path d="M-15 -19h20l10 10v28h-30z" fill="#ffffff" />
          <path d="M5 -19v10h10z" fill="#d4d6d9" />
          <rect x="-10" y="-12" width="13" height="4" rx="1" fill="#046999" />
          {[20, 16, 20].map((w, i) => (
            <rect
              key={i}
              x="-10"
              y={-3 + i * 7}
              width={w}
              height="3"
              rx="1.5"
              fill="#d4d6d9"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default ExcelHeroStory;
