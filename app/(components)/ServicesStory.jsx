"use client";
// app/(components)/ServicesStory.jsx
// Animated home hero illustration: every platform and service we work with,
// then a discovery session that matches the client's problems to the right
// tools, then those tools built into one integrated system with every other
// platform connected round it.
//
// How it works (same engine as HeroStory, see docs/hero-animation.md):
//  - All timing and positions come from utils/servicesStoryScene.js (sceneAt).
//  - The server renders the opening frame from sceneAt(INITIAL_T), so the drawing
//    is in the first HTML response with no layout shift.
//  - useStoryPlayer runs the requestAnimationFrame loop and writes changed
//    attributes straight onto the nodes registered with bind(). No per-frame
//    React renders and no animation package.
//  - HeroRotator (via HeroContext) says which act to play and whether to run.
// Decorative: aria-hidden, the frame copy beside it carries the meaning.

// Colours and type; every position and opacity is set by the scene
import styles from "@/styles/servicesStory.module.scss";
// Shared player hook: rAF loop, pause, act jumps and reduced motion
import { useStoryPlayer } from "@/components/useStoryPlayer";
// Original platform tiles (no Microsoft artwork)
import { ServiceIcon } from "../(svgs)/ServiceStoryIcons";
import {
  ACTS,
  CAPTIONS,
  CARDS,
  CHIP_SETS,
  CHIP_Y,
  CONNECTORS,
  GROUPS,
  HUB,
  INITIAL_T,
  KPIS,
  ORBIT,
  REDUCED_MOTION_T,
  SPOKES,
  TILES,
  VIEW,
  sceneAt,
} from "@/utils/servicesStoryScene";

// Opening frame, shared by the server render and hydration so they match
const FIRST = sceneAt(INITIAL_T);

// Props for one element in the opening frame ("text" is content, not an attribute)
const at = (key) => {
  const { text, ...attrs } = FIRST[key];
  return attrs;
};

// Small white tick used on badges and the discovery footer
const Tick = ({ x = 0, y = 0 }) => (
  <path d={`M${x - 4} ${y + 0.5}l2.8 2.8 5.2-5.6`} className={styles.tick} />
);

// One platform: glow, ping ring, the icon (scaled by the scene), badge and label
const Tile = ({ tile, bind }) => {
  const key = `tile.${tile.id}`;
  return (
    <g ref={bind(key)} data-tone={tile.id} className={styles.tile} {...at(key)}>
      <circle
        ref={bind(`${key}.ping`)}
        className={styles.ping}
        {...at(`${key}.ping`)}
      />
      <g ref={bind(`${key}.icon`)} {...at(`${key}.icon`)}>
        <circle
          r="54"
          fill="url(#ss-glow)"
          ref={bind(`${key}.glow`)}
          {...at(`${key}.glow`)}
        />
        <ServiceIcon id={tile.id} />
        {/* Shown when the discovery session picks this platform */}
        {tile.card >= 0 && (
          <g ref={bind(`${key}.badge`)} {...at(`${key}.badge`)}>
            <circle r="10" className={styles.badge} />
            <Tick />
          </g>
        )}
      </g>
      <text
        ref={bind(`${key}.label`)}
        textAnchor="middle"
        className={`${styles.tileLabel} ${styles.minor}`}
        {...at(`${key}.label`)}
      >
        {tile.name}
      </text>
    </g>
  );
};

const ServicesStory = () => {
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
            id="ss-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1.1" className={styles.dot} />
          </pattern>
          <radialGradient id="ss-fade-fill">
            <stop offset="0.3" className={styles.stopWhite} />
            <stop offset="1" className={styles.stopWhite} stopOpacity="0" />
          </radialGradient>
          <mask id="ss-fade">
            <rect width={VIEW.w} height={VIEW.h} fill="url(#ss-fade-fill)" />
          </mask>
          <radialGradient id="ss-calm">
            <stop offset="0" className={styles.stopAccent} stopOpacity="0.45" />
            <stop offset="1" className={styles.stopAccent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ss-glow">
            <stop
              offset="0.35"
              className={styles.stopBright}
              stopOpacity="0.38"
            />
            <stop offset="1" className={styles.stopBright} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ss-sheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className={styles.stopWhite} stopOpacity="0.22" />
            <stop offset="0.55" className={styles.stopWhite} stopOpacity="0" />
          </linearGradient>
          {/* AI agents tile: the only gradient tile */}
          <linearGradient id="ss-ai" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" className={styles.stopAiStart} />
            <stop offset="1" className={styles.stopAiEnd} />
          </linearGradient>
        </defs>

        {/* ── Backdrop: dot grid, glow behind the grid, then behind the hub ── */}
        <rect
          width={VIEW.w}
          height={VIEW.h}
          fill="url(#ss-dots)"
          mask="url(#ss-fade)"
        />
        <ellipse
          ref={bind("fx.grid")}
          cx="430"
          cy="250"
          rx="330"
          ry="260"
          fill="url(#ss-calm)"
          {...at("fx.grid")}
        />
        <ellipse
          ref={bind("fx.hub")}
          cx={HUB.cx}
          cy={HUB.cy}
          rx="300"
          ry="240"
          fill="url(#ss-calm)"
          {...at("fx.hub")}
        />

        {/* ── Act 1: group names beside each row ── */}
        {GROUPS.map((group, r) => (
          <text
            key={group.label}
            ref={bind(`group.${r}`)}
            x="40"
            y={group.y + 4}
            className={`${styles.groupLabel} ${styles.minor}`}
            {...at(`group.${r}`)}
          >
            {group.label}
          </text>
        ))}

        {/* ── Act 1: services for the row in the spotlight ── */}
        {CHIP_SETS.map((set, k) => (
          <g
            key={set[0].label}
            ref={bind(`chips.${k}`)}
            className={styles.minor}
            {...at(`chips.${k}`)}
          >
            {set.map((chip) => (
              <g key={chip.label}>
                <rect
                  x={chip.x}
                  y={CHIP_Y - 15}
                  width={chip.w}
                  height="30"
                  rx="15"
                  className={styles.chip}
                />
                <text
                  x={chip.x + chip.w / 2}
                  y={CHIP_Y + 4.5}
                  textAnchor="middle"
                  className={styles.chipText}
                >
                  {chip.label}
                </text>
              </g>
            ))}
          </g>
        ))}

        {/* ── Act 2: heading over the shrunken grid ── */}
        <text
          ref={bind("compact.title")}
          x="145"
          y="146"
          textAnchor="middle"
          className={`${styles.groupLabel} ${styles.minor}`}
          {...at("compact.title")}
        >
          Every platform
        </text>

        {/* ── Act 2: lines from each client point to the tools that fix it ── */}
        {CONNECTORS.map((link, i) => (
          <path
            key={link.id}
            ref={bind(`conn.${i}`)}
            d={link.d}
            pathLength="1"
            strokeDasharray="1 1"
            className={styles.connector}
            {...at(`conn.${i}`)}
          />
        ))}

        {/* ── Act 3: orbit, spokes and data pulses ── */}
        <ellipse
          ref={bind("orbit")}
          cx={ORBIT.cx}
          cy={ORBIT.cy}
          rx={ORBIT.rx}
          ry={ORBIT.ry}
          pathLength="1"
          strokeDasharray="1 1"
          className={styles.orbit}
          {...at("orbit")}
        />
        {SPOKES.map((spoke) => (
          <g key={spoke.id}>
            {spoke.chosen && (
              <line
                ref={bind(`spoke.${spoke.id}.plan`)}
                x1={spoke.x1}
                y1={spoke.y1}
                x2={spoke.x2}
                y2={spoke.y2}
                className={styles.spokePlan}
                {...at(`spoke.${spoke.id}.plan`)}
              />
            )}
            <line
              ref={bind(`spoke.${spoke.id}`)}
              x1={spoke.x1}
              y1={spoke.y1}
              x2={spoke.x2}
              y2={spoke.y2}
              pathLength="1"
              strokeDasharray="1 1"
              className={styles.spoke}
              {...at(`spoke.${spoke.id}`)}
            />
            <circle
              ref={bind(`pulse.${spoke.id}`)}
              r="3.2"
              className={styles.pulse}
              {...at(`pulse.${spoke.id}`)}
            />
          </g>
        ))}

        {/* ── Act 2: the solution plan, still on paper ── */}
        <g ref={bind("hub.plan")} {...at("hub.plan")}>
          <rect
            x={HUB.x}
            y={HUB.y}
            width={HUB.w}
            height={HUB.h}
            rx="22"
            className={styles.hubPlan}
          />
          <text
            x={HUB.cx}
            y="248"
            textAnchor="middle"
            className={styles.hubEyebrow}
          >
            BUSINESS ANALYSIS
          </text>
          <text
            x={HUB.cx}
            y="274"
            textAnchor="middle"
            className={styles.hubTitle}
          >
            Your solution plan
          </text>
          <text
            x={HUB.cx}
            y="296"
            textAnchor="middle"
            className={`${styles.hubText} ${styles.minor}`}
          >
            Agreed before we build
          </text>
        </g>

        {/* ── Act 3: the integrated system ── */}
        <g ref={bind("hub")} {...at("hub")}>
          <rect
            x={HUB.x}
            y={HUB.y}
            width={HUB.w}
            height={HUB.h}
            rx="22"
            className={styles.hub}
          />
          <text x="268" y="219" className={styles.hubEyebrow}>
            OFFICE EXPERTS
          </text>
          <text x="268" y="241" className={styles.hubTitle}>
            Your connected system
          </text>
          <path d="M268 255H452" className={styles.divider} />

          {/* Build progress */}
          <g ref={bind("hub.build")} {...at("hub.build")}>
            <rect
              x="268"
              y="278"
              width="184"
              height="6"
              rx="3"
              className={styles.barTrack}
            />
            <rect
              ref={bind("hub.bar")}
              x="268"
              y="278"
              height="6"
              rx="3"
              className={styles.barFill}
              {...at("hub.bar")}
            />
            <text x="268" y="308" className={styles.hubText}>
              Building and testing
            </text>
            <text
              ref={bind("hub.pct")}
              x="452"
              y="308"
              textAnchor="end"
              className={styles.kpiValue}
            >
              {FIRST["hub.pct"].text}
            </text>
          </g>

          {/* Live figures */}
          <g ref={bind("hub.run")} {...at("hub.run")}>
            <circle
              ref={bind("hub.live")}
              cx="424"
              cy="215"
              r="3.5"
              className={styles.live}
              {...at("hub.live")}
            />
            <text x="432" y="219" className={styles.liveText}>
              LIVE
            </text>
            {KPIS.map((kpi, k) => (
              <g key={kpi.label}>
                <text x="268" y={282 + k * 26} className={styles.hubText}>
                  {kpi.label}
                </text>
                <text
                  ref={bind(`kpi.${k}`)}
                  x="452"
                  y={282 + k * 26}
                  textAnchor="end"
                  className={styles.kpiValue}
                >
                  {FIRST[`kpi.${k}`].text}
                </text>
              </g>
            ))}
          </g>
        </g>

        {/* ── Act 2: discovery session panel ── */}
        <g ref={bind("panel")} {...at("panel")}>
          <rect
            x="296"
            y="36"
            width="408"
            height="468"
            rx="22"
            className={styles.panel}
          />
          <text x="322" y="70" className={styles.hubEyebrow}>
            BUSINESS ANALYSIS
          </text>
          <text x="322" y="94" className={styles.panelTitle}>
            Discovery session
          </text>
          {CARDS.map((card, k) => (
            <g key={card.quote} ref={bind(`card.${k}`)} {...at(`card.${k}`)}>
              <rect
                x="316"
                y={card.y}
                width="368"
                height="96"
                rx="14"
                className={styles.card}
              />
              <text
                x="336"
                y={card.y + 24}
                className={`${styles.cardLabel} ${styles.minor}`}
              >
                YOU SAID
              </text>
              <text x="336" y={card.y + 46} className={styles.quote}>
                {card.quote}
              </text>
              <g ref={bind(`card.${k}.fix`)} {...at(`card.${k}.fix`)}>
                <rect
                  x="336"
                  y={card.y + 60}
                  width={card.fixW}
                  height="24"
                  rx="12"
                  className={styles.fix}
                />
                <Tick x={350} y={card.y + 72} />
                <text x="362" y={card.y + 76} className={styles.fixText}>
                  {card.fix}
                </text>
              </g>
            </g>
          ))}
          <g ref={bind("panel.done")} {...at("panel.done")}>
            <circle cx="336" cy="474" r="10" className={styles.done} />
            <Tick x={336} y={474} />
            <text x="354" y="478.5" className={styles.doneText}>
              Recommendation ready
            </text>
          </g>
        </g>

        {/* ── Platforms (above lines and panel edges) ── */}
        {TILES.map((tile) => (
          <Tile key={tile.id} tile={tile} bind={bind} />
        ))}

        {/* ── Act 3: one ring pulses out as the last platform connects ── */}
        <circle
          ref={bind("fx.ring")}
          cx={HUB.cx}
          cy={HUB.cy}
          className={styles.ring}
          {...at("fx.ring")}
        />
      </svg>
    </div>
  );
};

export default ServicesStory;
