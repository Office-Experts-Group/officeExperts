"use client";
// app/(components)/WordHeroStory.jsx
// Animated illustration for the Microsoft Word hero. A Word window shows the
// life of one quote template:
//   act 1: copied, re-copied and re-typed until it is off-brand and broken
//   act 2: Word Experts builds a master template, brand styles, a fill-in form
//          and Quick Parts around it
//   act 3: one click on the custom ribbon makes each new on-brand quote, and the
//          whole team sends the same standard
// All timing and positions come from utils/wordHeroScene.js (sceneAt). The server
// renders the opening frame; useStoryPlayer animates it on the client.
// Decorative: aria-hidden, the frame copy beside it carries the meaning.

// Colours, type and caption styling; positions and opacity come from the scene
import styles from "@/styles/wordHeroStory.module.scss";
// Shared animation player (loop, pause, tab jumps, reduced motion)
import { openingProps, useStoryPlayer } from "./useStoryPlayer";
// Ribbon and Quick Parts icons, and the green tick badge
import { TickBadge, WordGlyph } from "../(svgs)/WordHeroGlyphs";
import {
  ACTS,
  BADGES,
  BLOCKS,
  BODY,
  CAPTIONS,
  CUSTOM_TAB,
  FIELD_X,
  FIELDS,
  FILENAMES,
  INITIAL_T,
  LIST,
  MINIS,
  PAGE,
  PANELS,
  QUICK_PART_Y,
  QUICK_PARTS,
  REDUCED_MOTION_T,
  RIBBON_BUTTONS,
  RUNS,
  SENT_Y,
  STYLE_ROWS,
  TABS,
  TOASTS,
  VIEW,
  WINDOW,
  sceneAt,
  textWidth,
} from "../utils/wordHeroScene";

// Opening frame, shared by the server render and hydration so they match
const FIRST = sceneAt(INITIAL_T);
const at = (key) => openingProps(FIRST, key);

// Short red squiggle (spelling error), starting at x, y
const squiggle = (x, y, width) =>
  `M${x} ${y}` +
  Array.from(
    { length: Math.floor(width / 4) },
    (_, i) => `l2 ${i % 2 ? -2 : 2}l2 0`,
  ).join("");

// A page in miniature: used for the act 1 copies and the act 3 sent thumbnail
const MiniPage = ({ tone }) => (
  <>
    <rect
      x="-42"
      y="-54"
      width="84"
      height="108"
      rx="4"
      className={styles.paper}
    />
    <rect
      x="-34"
      y="-46"
      width="28"
      height="8"
      rx="2"
      className={styles[tone]}
    />
    {[60, 52, 58, 40, 50].map((width, i) => (
      <rect
        key={i}
        x="-34"
        y={-28 + i * 8}
        width={width}
        height="3"
        rx="1.5"
        className={styles.miniLine}
      />
    ))}
  </>
);

// Rounded panel with a title, used for all four side panels
const Panel = ({ id, title, bind, children }) => {
  const panel = PANELS[id];
  return (
    <g ref={bind(`panel.${id}`)} {...at(`panel.${id}`)}>
      <rect
        x={panel.x}
        y={panel.y}
        width={panel.w}
        height={panel.h}
        rx="16"
        className={styles.panel}
      />
      <text x={panel.x + 14} y={panel.y + 26} className={styles.panelTitle}>
        {title}
      </text>
      {children}
    </g>
  );
};

const WordHeroStory = () => {
  const { wrapRef, bind } = useStoryPlayer({
    sceneAt,
    acts: ACTS,
    initialT: INITIAL_T,
    reducedMotionT: REDUCED_MOTION_T,
  });

  return (
    <div ref={wrapRef} className={styles.story} aria-hidden="true">
      {/* Caption bar: HTML rather than SVG text so it stays readable on phones */}
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
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        className={styles.stage}
        focusable="false"
      >
        <defs>
          <pattern
            id="wh-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1.1" className={styles.dot} />
          </pattern>
          <radialGradient id="wh-fade-fill">
            <stop offset="0.3" className={styles.stopWhite} />
            <stop offset="1" className={styles.stopWhite} stopOpacity="0" />
          </radialGradient>
          <mask id="wh-fade">
            <rect width={VIEW.w} height={VIEW.h} fill="url(#wh-fade-fill)" />
          </mask>
          <radialGradient id="wh-alert">
            <stop offset="0" className={styles.stopError} stopOpacity="0.32" />
            <stop offset="1" className={styles.stopError} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wh-calm">
            <stop offset="0" className={styles.stopAccent} stopOpacity="0.45" />
            <stop offset="1" className={styles.stopAccent} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="wh-sweep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className={styles.stopBright} stopOpacity="0" />
            <stop offset="1" className={styles.stopBright} stopOpacity="0.3" />
          </linearGradient>
          <clipPath id="wh-window">
            <rect
              x={WINDOW.x}
              y={WINDOW.y}
              width={WINDOW.w}
              height={WINDOW.h}
              rx="16"
            />
          </clipPath>
        </defs>

        {/* ── Backdrop ── */}
        <rect
          width={VIEW.w}
          height={VIEW.h}
          fill="url(#wh-dots)"
          mask="url(#wh-fade)"
        />
        <ellipse
          ref={bind("fx.alert")}
          cx="360"
          cy="280"
          rx="380"
          ry="300"
          fill="url(#wh-alert)"
          {...at("fx.alert")}
        />
        <ellipse
          ref={bind("fx.calm")}
          cx="360"
          cy="280"
          rx="360"
          ry="300"
          fill="url(#wh-calm)"
          {...at("fx.calm")}
        />

        {/* ── Act 1: everyone's own copy (behind the window) ── */}
        {MINIS.map((mini, i) => (
          <g key={mini.file} ref={bind(`mini.${i}`)} {...at(`mini.${i}`)}>
            <MiniPage tone={mini.tone} />
            <text
              y="72"
              textAnchor="middle"
              className={`${styles.miniFile} ${styles.minor}`}
            >
              {mini.file}
            </text>
          </g>
        ))}

        {/* ── Word window ── */}
        <g ref={bind("window")} {...at("window")}>
          <g clipPath="url(#wh-window)">
            <rect
              x={WINDOW.x}
              y={WINDOW.y}
              width={WINDOW.w}
              height={WINDOW.h}
              className={styles.canvas}
            />
            <rect
              x={WINDOW.x}
              y={WINDOW.y}
              width={WINDOW.w}
              height="32"
              className={styles.titleBar}
            />
            <rect
              x={WINDOW.x}
              y={WINDOW.y + 32}
              width={WINDOW.w}
              height="58"
              className={styles.ribbon}
            />

            {[178, 192, 206].map((cx) => (
              <circle
                key={cx}
                cx={cx}
                cy="42"
                r="4.5"
                className={styles.chromeDot}
              />
            ))}
            <text
              ref={bind("file.messy")}
              x="360"
              y="46"
              textAnchor="middle"
              className={styles.fileName}
              {...at("file.messy")}
            >
              {FILENAMES.messy}
            </text>
            <text
              ref={bind("file.master")}
              x="360"
              y="46"
              textAnchor="middle"
              className={styles.fileName}
              {...at("file.master")}
            >
              {FILENAMES.master}
            </text>

            {/* Tabs, with the custom brand tab added in act 2 */}
            {TABS.map((tab) => (
              <text
                key={tab.label}
                x={tab.x}
                y="73"
                className={`${styles.tab} ${styles.minor}`}
              >
                {tab.label}
              </text>
            ))}
            <rect
              ref={bind("tab.home.line")}
              x="210"
              y="78"
              width="30"
              height="2"
              rx="1"
              className={styles.tabLine}
              {...at("tab.home.line")}
            />
            <text
              ref={bind("tab.custom")}
              x={CUSTOM_TAB.x}
              y="73"
              className={`${styles.tabCustom} ${styles.minor}`}
              {...at("tab.custom")}
            >
              {CUSTOM_TAB.label}
            </text>
            <rect
              ref={bind("tab.custom.line")}
              x={CUSTOM_TAB.x}
              y="78"
              width="58"
              height="2"
              rx="1"
              className={styles.tabLine}
              {...at("tab.custom.line")}
            />

            {/* Stock Home ribbon, swapped for the custom ribbon */}
            <g ref={bind("ribbon.stock")} {...at("ribbon.stock")}>
              {Array.from({ length: 8 }, (_, i) => (
                <rect
                  key={i}
                  x={172 + i * 46}
                  y="88"
                  width="36"
                  height="20"
                  rx="4"
                  className={styles.stockButton}
                />
              ))}
            </g>
            <g ref={bind("ribbon.custom")} {...at("ribbon.custom")}>
              {RIBBON_BUTTONS.map((button, i) => (
                <g key={button.id}>
                  <rect
                    x={button.x}
                    y="84"
                    width="58"
                    height="30"
                    rx="6"
                    className={styles.ribbonButton}
                  />
                  {i === 0 && (
                    <rect
                      ref={bind("ribbon.press")}
                      x={button.x}
                      y="84"
                      width="58"
                      height="30"
                      rx="6"
                      className={styles.ribbonPress}
                      {...at("ribbon.press")}
                    />
                  )}
                  <g transform={`translate(${button.x + 29} 95) scale(0.7)`}>
                    <WordGlyph id={button.id} />
                  </g>
                  <text
                    x={button.x + 29}
                    y="110"
                    textAnchor="middle"
                    className={`${styles.buttonLabel} ${styles.minor}`}
                  >
                    {button.label}
                  </text>
                </g>
              ))}
            </g>

            {/* ── The page ── */}
            <rect
              x={PAGE.x}
              y={PAGE.y}
              width={PAGE.w}
              height={PAGE.h}
              className={styles.paper}
            />

            {/* Logo: old copy vs brand identity */}
            <g ref={bind("logo.old")} {...at("logo.old")}>
              <rect
                x="214"
                y="146"
                width="22"
                height="22"
                rx="2"
                className={styles.grey}
              />
              <text x="242" y="162" className={styles.oldLogo}>
                your brand
              </text>
            </g>
            <g ref={bind("logo.brand")} {...at("logo.brand")}>
              <rect
                x="214"
                y="146"
                width="22"
                height="22"
                rx="6"
                className={styles.brandMark}
              />
              <path
                d="M225 151l6 6-6 6-6-6z"
                className={styles.brandMarkInner}
              />
              <text x="243" y="161" className={styles.brandLogo}>
                YOUR BRAND
              </text>
            </g>
            <rect
              ref={bind("page.rule")}
              x="214"
              y="180"
              height="2"
              className={styles.brandRule}
              {...at("page.rule")}
            />

            {/* Title: wrong font vs Title style */}
            <text
              ref={bind("title.old")}
              x="214"
              y="214"
              className={styles.titleOld}
              {...at("title.old")}
            >
              Quotation
            </text>
            <text
              ref={bind("title.brand")}
              x="214"
              y="212"
              className={styles.titleBrand}
              {...at("title.brand")}
            >
              Quotation
            </text>

            {/* Fill-in fields */}
            {FIELDS.map((field, i) => (
              <g key={field.label}>
                <text x="214" y={field.y} className={styles.fieldLabel}>
                  {field.label}
                </text>
                <rect
                  ref={bind(`field.${i}.control`)}
                  x={FIELD_X - 4}
                  y={field.y - 11}
                  height="15"
                  rx="3"
                  className={styles.control}
                  {...at(`field.${i}.control`)}
                />
                <rect
                  ref={bind(`field.${i}.highlight`)}
                  x={FIELD_X - 4}
                  y={field.y - 11}
                  height="15"
                  rx="2"
                  className={styles.highlight}
                  {...at(`field.${i}.highlight`)}
                />
                <rect
                  ref={bind(`field.${i}.flash`)}
                  x={FIELD_X - 4}
                  y={field.y - 11}
                  height="15"
                  rx="3"
                  className={styles.flash}
                  {...at(`field.${i}.flash`)}
                />
                <text
                  ref={bind(`field.${i}.placeholder`)}
                  x={FIELD_X}
                  y={field.y}
                  className={styles.placeholder}
                  {...at(`field.${i}.placeholder`)}
                >
                  {field.placeholder}
                </text>
                <text
                  ref={bind(`field.${i}.value`)}
                  x={FIELD_X}
                  y={field.y}
                  className={styles.fieldValue}
                >
                  {FIRST[`field.${i}.value`].text}
                </text>
                <path
                  ref={bind(`field.${i}.typo`)}
                  d={squiggle(
                    FIELD_X,
                    field.y + 3,
                    textWidth("Harbor Logistcs") - 12,
                  )}
                  className={styles.squiggle}
                  {...at(`field.${i}.typo`)}
                />
              </g>
            ))}

            {/* Body text */}
            {BODY.map((line, i) => (
              <rect
                key={line.y}
                ref={bind(`body.${i}`)}
                width={line.w}
                rx="2"
                className={styles.textLine}
                {...at(`body.${i}`)}
              />
            ))}
            <path
              ref={bind("body.squiggle")}
              d={squiggle(300, 318, 80)}
              className={styles.squiggle}
              {...at("body.squiggle")}
            />

            {/* Numbered list */}
            {LIST.map((item, i) => (
              <g key={item.y} ref={bind(`list.${i}`)} {...at(`list.${i}`)}>
                <text
                  ref={bind(`list.${i}.num`)}
                  x="214"
                  y={item.y}
                  className={styles.listNumber}
                >
                  {FIRST[`list.${i}.num`].text}
                </text>
                <rect
                  x="232"
                  y={item.y - 6}
                  width={item.w}
                  height="5"
                  rx="2"
                  className={styles.textLine}
                />
              </g>
            ))}

            {/* Act 1: terms pasted from an old quote, in the wrong font */}
            <g ref={bind("paste.old")} {...at("paste.old")}>
              <text x="214" y="414" className={styles.pasteHead}>
                Terms (copied from last quote)
              </text>
              <rect
                x="214"
                y="422"
                width="250"
                height="6"
                rx="2"
                className={styles.pasteLine}
              />
              <rect
                x="220"
                y="434"
                width="200"
                height="6"
                rx="2"
                className={styles.pasteLine}
              />
            </g>

            {/* Act 3: badges on the finished document */}
            {BADGES.map((badge, i) => (
              <g key={badge.label} transform={`translate(${badge.x} 206)`}>
                <g ref={bind(`badge.${i}`)} {...at(`badge.${i}`)}>
                  <rect
                    x={-badge.w / 2}
                    y="-10"
                    width={badge.w}
                    height="20"
                    rx="10"
                    className={styles.badge}
                  />
                  <g transform={`translate(${-badge.w / 2 + 11} 0)`}>
                    <TickBadge r={5.5} />
                  </g>
                  <text
                    x={-badge.w / 2 + 21}
                    y="3.5"
                    className={styles.badgeText}
                  >
                    {badge.label}
                  </text>
                </g>
              </g>
            ))}

            {/* Act 2 style sweep down the page */}
            <g ref={bind("fx.sweep")} {...at("fx.sweep")}>
              <rect
                x={PAGE.x}
                y="-40"
                width={PAGE.w}
                height="40"
                fill="url(#wh-sweep)"
              />
              <path
                d={`M${PAGE.x} 0H${PAGE.x + PAGE.w}`}
                className={styles.sweepLine}
              />
            </g>
          </g>
          <rect
            x={WINDOW.x}
            y={WINDOW.y}
            width={WINDOW.w}
            height={WINDOW.h}
            rx="16"
            className={styles.windowEdge}
          />
          {/* Quick Parts: outside the window clip so they are visible flying in from the gallery */}
          {BLOCKS.map((block) => (
            <g
              key={block.id}
              ref={bind(`block.${block.id}`)}
              {...at(`block.${block.id}`)}
            >
              <rect
                x="-152"
                y="-22"
                width="304"
                height="42"
                rx="4"
                className={styles.blockBack}
              />
              {block.id === "terms" ? (
                <>
                  <text x="-144" y="-6" className={styles.blockHead}>
                    Payment terms
                  </text>
                  <rect
                    x="-144"
                    y="2"
                    width="270"
                    height="4"
                    rx="2"
                    className={styles.textLine}
                  />
                  <rect
                    x="-144"
                    y="10"
                    width="200"
                    height="4"
                    rx="2"
                    className={styles.textLine}
                  />
                </>
              ) : (
                <>
                  <text x="-144" y="-6" className={styles.blockHead}>
                    Accepted by
                  </text>
                  <text x="10" y="-6" className={styles.blockHead}>
                    Date
                  </text>
                  <path
                    d="M-144 12H-24M10 12H130"
                    className={styles.signLine}
                  />
                </>
              )}
            </g>
          ))}
        </g>

        {/* ── Act 1 problems ── */}
        {TOASTS.map((toast, i) => (
          <g key={toast.text} ref={bind(`toast.${i}`)} {...at(`toast.${i}`)}>
            <rect
              x={-toast.width / 2}
              y="-13"
              width={toast.width}
              height="26"
              rx="13"
              className={styles.toast}
            />
            <text y="4.5" textAnchor="middle" className={styles.toastText}>
              {toast.text}
            </text>
          </g>
        ))}

        {/* ── Side panels ── */}
        <Panel id="brand" title="Brand identity" bind={bind}>
          <rect
            x="24"
            y="82"
            width="22"
            height="22"
            rx="6"
            className={styles.brandMark}
          />
          <path d="M35 87l6 6-6 6-6-6z" className={styles.brandMarkInner} />
          <text x="54" y="97" className={styles.panelBrand}>
            YOUR BRAND
          </text>
          {["swatchAccent", "swatchInk", "swatchBright"].map((swatch, i) => (
            <circle
              key={swatch}
              cx={33 + i * 24}
              cy="130"
              r="9"
              className={styles[swatch]}
            />
          ))}
          <text x="104" y="136" className={styles.specimen}>
            Aa
          </text>
          <path d="M24 152H126" className={styles.divider} />
          {STYLE_ROWS.map((row, i) => (
            <g key={row.name}>
              <text x="24" y={176 + i * 26} className={styles.panelText}>
                {row.name}
              </text>
              <g
                ref={bind(`style.${i}`)}
                transform={`translate(122 ${172 + i * 26})`}
                {...at(`style.${i}`)}
              >
                <TickBadge />
              </g>
            </g>
          ))}
        </Panel>

        <Panel id="form" title="Fill-in form" bind={bind}>
          {FIELDS.map((field, i) => (
            <g key={field.label}>
              <text x="594" y={88 + i * 52} className={styles.formLabel}>
                {field.label}
              </text>
              <rect
                x="594"
                y={94 + i * 52}
                width="102"
                height="24"
                rx="6"
                className={styles.input}
              />
              <text
                ref={bind(`form.${i}`)}
                x="600"
                y={110 + i * 52}
                className={styles.formValue}
              >
                {FIRST[`form.${i}`].text}
              </text>
            </g>
          ))}
          <rect
            x="646"
            y="234"
            width="50"
            height="20"
            rx="6"
            className={styles.formButton}
          />
          <rect
            ref={bind("form.insert")}
            x="646"
            y="234"
            width="50"
            height="20"
            rx="6"
            className={styles.formButtonPress}
            {...at("form.insert")}
          />
          <text
            x="671"
            y="248"
            textAnchor="middle"
            className={styles.formButtonText}
          >
            Insert
          </text>
        </Panel>

        <Panel id="parts" title="Quick Parts" bind={bind}>
          {QUICK_PARTS.map((part, i) => (
            <g key={part}>
              <rect
                x="588"
                y={QUICK_PART_Y(i) - 12}
                width="114"
                height="24"
                rx="6"
                className={styles.partRow}
              />
              <rect
                ref={bind(`part.${i}`)}
                x="588"
                y={QUICK_PART_Y(i) - 12}
                width="114"
                height="24"
                rx="6"
                className={styles.partOn}
                {...at(`part.${i}`)}
              />
              <g transform={`translate(600 ${QUICK_PART_Y(i)})`}>
                <WordGlyph id="part" />
              </g>
              <text
                x="612"
                y={QUICK_PART_Y(i) + 4}
                className={styles.panelText}
              >
                {part}
              </text>
            </g>
          ))}
        </Panel>

        <Panel id="sent" title="Sent today" bind={bind}>
          {RUNS.map((run, k) => (
            <g key={run.ref} ref={bind(`sent.${k}`)} {...at(`sent.${k}`)}>
              <circle cx="32" cy={SENT_Y(k)} r="10" className={styles.avatar} />
              <text
                x="32"
                y={SENT_Y(k) + 4}
                textAnchor="middle"
                className={styles.avatarText}
              >
                {run.author}
              </text>
              <text x="48" y={SENT_Y(k) - 2} className={styles.sentRef}>
                {run.ref}
              </text>
              <text
                x="48"
                y={SENT_Y(k) + 11}
                className={`${styles.sentClient} ${styles.minor}`}
              >
                {run.client}
              </text>
              <g transform={`translate(126 ${SENT_Y(k)})`}>
                <TickBadge r={6} />
              </g>
            </g>
          ))}
        </Panel>

        {/* Act 3: the finished quote shrinking into Sent today */}
        <g ref={bind("thumb")} {...at("thumb")}>
          <MiniPage tone="brandMark" />
        </g>
      </svg>
    </div>
  );
};

export default WordHeroStory;
