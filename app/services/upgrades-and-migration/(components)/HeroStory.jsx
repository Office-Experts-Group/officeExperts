"use client";
// app/(components)/HeroStory.jsx
// Animated home hero illustration: a business grows from one spreadsheet into a
// tangle of disconnected tools, falls apart, and Office Experts connects it
// into one platform with live dashboards, automated workflows, documents sent
// to clients and AI agents triaging enquiries.
//
// How it works:
//  - All timing and positions come from utils/heroStoryScene.js (sceneAt).
//  - The server renders the opening frame from sceneAt(INITIAL_T), so the drawing
//    is in the first HTML response with no layout shift.
//  - On the client a requestAnimationFrame loop calls sceneAt(t) and writes only
//    the attributes that changed straight onto the SVG nodes. React does not
//    re-render per frame, and no animation package is needed.
//  - HeroRotator (via HeroContext) says which act to play and whether to run.
// Decorative: aria-hidden, the frame copy beside it carries the meaning.

import { useContext, useEffect, useRef } from "react";

// Colours and caption styling; every position and opacity is set by the scene
import styles from "@/styles/heroStory.module.scss";
// Active frame and play state from HeroRotator
import { HeroContext } from "./HeroContext";
// Neutral glyphs used until the official product icons are switched on
import { StoryGlyph } from "../(svgs)/HeroStoryGlyphs";
import {
  ACTS,
  AGENT_MESSAGES,
  BAR_BASE,
  BARS,
  CAPTIONS,
  CARD,
  CLIENT_Y,
  CLIENTS,
  DOC_HOME,
  DOC_LINES,
  HUB,
  INITIAL_T,
  LINKS,
  PANELS,
  REDUCED_MOTION_T,
  STEPS,
  TILES,
  TOASTS,
  USE_LOGOS,
  VIEW,
  WIRES,
  sceneAt,
} from "@/utils/heroStoryScene";

// Opening frame, shared by the server render and hydration so they match
const FIRST = sceneAt(INITIAL_T);

// Props for one element in the opening frame ("text" is content, not an attribute)
const at = (key) => {
  const { text, ...attrs } = FIRST[key];
  return attrs;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// strokeDashoffset → stroke-dashoffset for setAttribute
const domName = (name) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

// Writes a scene onto the registered nodes, skipping values that have not changed
const paintScene = (nodes, written, scene) => {
  for (const key in scene) {
    const node = nodes.get(key);
    if (!node) continue;
    const previous = written.get(key) ?? {};
    const attrs = scene[key];
    for (const name in attrs) {
      const value = attrs[name];
      if (previous[name] === value) continue;
      previous[name] = value;
      if (name === "text") node.textContent = value;
      else node.setAttribute(domName(name), value);
    }
    written.set(key, previous);
  }
};

// Quick fade out, jump, fade in: used when a tab click or the loop back to
// frame 1 means the story has to jump rather than flow on
const crossfade = (node, jump) => {
  if (!node?.animate) {
    jump();
    return;
  }
  const out = node.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 200,
    easing: "ease-in",
    fill: "forwards",
  });
  out.finished
    .then(() => {
      jump();
      node.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 350,
        easing: "ease-out",
      });
      out.cancel();
    })
    .catch(() => {});
};

// Product icon: the official file once USE_LOGOS is on, otherwise a neutral glyph
const TileIcon = ({ tile }) =>
  USE_LOGOS && tile.logo ? (
    <image
      href={`/logos/${tile.logo}`}
      x="-16"
      y="-16"
      width="32"
      height="32"
    />
  ) : (
    <StoryGlyph id={tile.id} />
  );

// One tool. Starts as a labelled card (act 1) and morphs into an icon tile.
const Tile = ({ tile, bind }) => {
  const key = `tile.${tile.id}`;
  return (
    <g ref={bind(key)} {...at(key)}>
      <rect
        ref={bind(`${key}.card`)}
        rx="14"
        fill="url(#hs-card)"
        className={styles.card}
        {...at(`${key}.card`)}
      />
      {tile.chaos && (
        <g ref={bind(`${key}.text`)} {...at(`${key}.text`)}>
          <text x={-CARD.w / 2 + 56} y="-3" className={styles.cardName}>
            {tile.name}
          </text>
          <text
            x={-CARD.w / 2 + 56}
            y="15"
            className={`${styles.cardFile} ${styles.minor}`}
          >
            {tile.file}
          </text>
        </g>
      )}
      <g ref={bind(`${key}.icon`)} {...at(`${key}.icon`)}>
        <TileIcon tile={tile} />
      </g>
      {tile.to.label && (
        <text
          ref={bind(`${key}.label`)}
          y={tile.to.bg / 2 + 16}
          textAnchor="middle"
          className={`${styles.tileLabel} ${styles.minor}`}
          {...at(`${key}.label`)}
        >
          {tile.name}
        </text>
      )}
      {tile.chaos && (
        <g ref={bind(`${key}.warn`)} {...at(`${key}.warn`)}>
          <circle r="10" className={styles.warnDot} />
          <text y="4.5" textAnchor="middle" className={styles.warnText}>
            !
          </text>
        </g>
      )}
    </g>
  );
};

// Shared header row for the three output panels (the icon itself is a tile)
const PanelTitle = ({ y, children }) => (
  <text x="528" y={y} className={styles.panelTitle}>
    {children}
  </text>
);

const HeroStory = () => {
  const { active, mode, onScreen, restart } = useContext(HeroContext);
  const wrapRef = useRef(null);
  const nodes = useRef(new Map());
  const written = useRef(new Map());
  const time = useRef(INITIAL_T);
  const seenRestart = useRef(restart);

  // Registers an element under its scene key so the loop can update it
  const bind = (key) => (node) => {
    if (node) nodes.current.set(key, node);
  };
  const draw = (t) => paintScene(nodes.current, written.current, sceneAt(t));

  // Line the story up with the frame being shown
  useEffect(() => {
    if (prefersReducedMotion()) {
      time.current = REDUCED_MOTION_T[active];
      draw(time.current);
      return;
    }

    const act = ACTS[active];
    const replay = restart !== seenRestart.current;
    seenRestart.current = restart;

    // Autoplay moving on to the next frame: the story is already there, keep flowing
    const flowingOn =
      time.current >= act.start - 0.75 && time.current < act.end;
    if (flowingOn && !replay) return;

    crossfade(wrapRef.current, () => {
      time.current = act.start;
      draw(act.start);
    });
  }, [active, restart]);

  // Animation loop. Runs only while the hero is on screen and not paused.
  useEffect(() => {
    if (prefersReducedMotion() || !onScreen || mode === "paused") return;

    // Never run past the end of this frame's act. In auto mode the rotator moves
    // to the next frame at that point; in manual mode the act holds on its last frame.
    const end = ACTS[active].end - 0.001;
    let frame;
    let last = performance.now();

    const step = (now) => {
      // Capped so a backgrounded tab resumes smoothly instead of jumping ahead
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Beyond this act means a jump back is mid crossfade: wait for it
      if (time.current <= end) {
        time.current = Math.min(time.current + dt, end);
        draw(time.current);
        if (mode === "manual" && time.current >= end) return;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, mode, onScreen, restart]);

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
            id="hs-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1.1" className={styles.dot} />
          </pattern>
          <radialGradient id="hs-fade-fill">
            <stop offset="0.3" className={styles.stopWhite} />
            <stop offset="1" className={styles.stopWhite} stopOpacity="0" />
          </radialGradient>
          <mask id="hs-fade">
            <rect width={VIEW.w} height={VIEW.h} fill="url(#hs-fade-fill)" />
          </mask>
          <radialGradient id="hs-alert">
            <stop offset="0" className={styles.stopError} stopOpacity="0.32" />
            <stop offset="1" className={styles.stopError} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hs-calm">
            <stop offset="0" className={styles.stopAccent} stopOpacity="0.45" />
            <stop offset="1" className={styles.stopAccent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hs-spot">
            <stop offset="0" className={styles.stopBright} stopOpacity="0.3" />
            <stop offset="1" className={styles.stopBright} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hs-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className={styles.stopMid} />
            <stop offset="1" className={styles.stopSurface} />
          </linearGradient>
          <linearGradient
            id="hs-link"
            gradientUnits="userSpaceOnUse"
            x1="96"
            y1="0"
            x2="484"
            y2="0"
          >
            <stop offset="0" className={styles.stopWhite} stopOpacity="0.2" />
            <stop offset="1" className={styles.stopBright} />
          </linearGradient>
          <linearGradient id="hs-scan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" className={styles.stopBright} stopOpacity="0" />
            <stop offset="1" className={styles.stopBright} stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {/* ── Backdrop: dot grid, red wash while it breaks, calm glow once fixed ── */}
        <rect
          width={VIEW.w}
          height={VIEW.h}
          fill="url(#hs-dots)"
          mask="url(#hs-fade)"
        />
        <ellipse
          ref={bind("fx.alert")}
          cx="360"
          cy="290"
          rx="380"
          ry="300"
          fill="url(#hs-alert)"
          {...at("fx.alert")}
        />
        <ellipse
          ref={bind("fx.calm")}
          cx="340"
          cy="282"
          rx="330"
          ry="300"
          fill="url(#hs-calm)"
          {...at("fx.calm")}
        />

        {/* ── Act 1 workarounds (behind the cards) ── */}
        {WIRES.map((wire, i) => (
          <g key={`${wire.a}-${wire.b}`}>
            <path
              ref={bind(`wire.${i}`)}
              pathLength="1"
              className={styles.wire}
              {...at(`wire.${i}`)}
            />
            <path
              ref={bind(`wire.${i}.red`)}
              pathLength="1"
              className={`${styles.wire} ${styles.wireBroken}`}
              {...at(`wire.${i}.red`)}
            />
          </g>
        ))}
        {WIRES.map(
          (wire, i) =>
            wire.tag && (
              <g
                key={wire.tag}
                ref={bind(`wire.${i}.tag`)}
                className={styles.minor}
                {...at(`wire.${i}.tag`)}
              >
                <rect
                  x="-42"
                  y="-11"
                  width="84"
                  height="22"
                  rx="11"
                  className={styles.wireTag}
                />
                <text y="4" textAnchor="middle" className={styles.wireTagText}>
                  {wire.tag}
                </text>
              </g>
            ),
        )}

        {/* ── Act 2 connectors and data pulses ── */}
        {LINKS.map((link) => (
          <path
            key={link.id}
            ref={bind(`link.${link.id}`)}
            d={link.d}
            pathLength="1"
            strokeDasharray="1 1"
            stroke="url(#hs-link)"
            className={styles.link}
            {...at(`link.${link.id}`)}
          />
        ))}
        {LINKS.map((link) =>
          [0, 1].map((k) => (
            <circle
              key={`${link.id}-${k}`}
              ref={bind(`pulse.${link.id}.${k}`)}
              r="3.2"
              className={styles.pulse}
              {...at(`pulse.${link.id}.${k}`)}
            />
          )),
        )}

        {/* ── Hub: the connected platform ── */}
        <g ref={bind("hub")} {...at("hub")}>
          <ellipse
            ref={bind("hub.glow")}
            cx={HUB.x + HUB.w / 2}
            cy={HUB.y + HUB.h / 2}
            rx="170"
            ry="250"
            fill="url(#hs-calm)"
            {...at("hub.glow")}
          />
          <rect
            x={HUB.x}
            y={HUB.y}
            width={HUB.w}
            height={HUB.h}
            rx="24"
            className={styles.hub}
          />
          <text
            x="340"
            y="118"
            textAnchor="middle"
            className={styles.hubEyebrow}
          >
            OFFICE EXPERTS
          </text>
          <text x="340" y="141" textAnchor="middle" className={styles.hubTitle}>
            Connected platform
          </text>
          <rect
            x="246"
            y="160"
            width="188"
            height="56"
            rx="14"
            className={styles.well}
          />
          <text x="302" y="184" className={styles.wellTitle}>
            One source of truth
          </text>
          <text
            x="302"
            y="202"
            className={`${styles.wellText} ${styles.minor}`}
          >
            Dataverse and SQL
          </text>

          {/* AI agent ticker */}
          <ellipse
            ref={bind("agent.glow")}
            cx="340"
            cy="428"
            rx="140"
            ry="70"
            fill="url(#hs-spot)"
            {...at("agent.glow")}
          />
          <rect
            x="246"
            y="398"
            width="188"
            height="60"
            rx="14"
            className={styles.well}
          />
          <text x="262" y="421" className={styles.wellLabel}>
            AI AGENT
          </text>
          <text
            ref={bind("agent.idle")}
            x="262"
            y="443"
            className={styles.wellTitle}
            {...at("agent.idle")}
          >
            Watching the inbox
          </text>
          {AGENT_MESSAGES.map((message, i) => (
            <text
              key={message}
              ref={bind(`agent.msg.${i}`)}
              x="262"
              y="443"
              className={styles.wellTitle}
              {...at(`agent.msg.${i}`)}
            >
              {message}
            </text>
          ))}
        </g>

        {/* ── Output panels ── */}
        {PANELS.map((panel) => (
          <g
            key={panel.id}
            ref={bind(`panel.${panel.id}`)}
            {...at(`panel.${panel.id}`)}
          >
            <ellipse
              ref={bind(`panel.${panel.id}.glow`)}
              cx={panel.x + panel.w / 2}
              cy={panel.y + panel.h / 2}
              rx={panel.w * 0.75}
              ry={panel.h * 0.85}
              fill="url(#hs-spot)"
              {...at(`panel.${panel.id}.glow`)}
            />
            <rect
              x={panel.x}
              y={panel.y}
              width={panel.w}
              height={panel.h}
              rx="18"
              className={styles.panel}
            />

            {panel.id === "dash" && (
              <>
                <PanelTitle y="57">Live dashboard</PanelTitle>
                <circle
                  ref={bind("dash.live")}
                  cx="660"
                  cy="52"
                  r="3.5"
                  className={styles.live}
                  {...at("dash.live")}
                />
                <text x="668" y="56" className={styles.liveText}>
                  LIVE
                </text>
                <text
                  x="500"
                  y="86"
                  className={`${styles.kpiLabel} ${styles.minor}`}
                >
                  Orders today
                </text>
                <text
                  ref={bind("dash.orders")}
                  x="500"
                  y="114"
                  className={styles.kpiValue}
                >
                  {FIRST["dash.orders"].text}
                </text>
                <text
                  x="604"
                  y="86"
                  className={`${styles.kpiLabel} ${styles.minor}`}
                >
                  Invoices sent
                </text>
                <text
                  ref={bind("dash.invoices")}
                  x="604"
                  y="114"
                  className={styles.kpiValue}
                >
                  {FIRST["dash.invoices"].text}
                </text>
                {BARS.map((_, i) => (
                  <rect
                    key={i}
                    ref={bind(`bar.${i}`)}
                    x={500 + i * 21 - 6.5}
                    width="13"
                    rx="2"
                    className={
                      i === BARS.length - 1 ? styles.barLast : styles.bar
                    }
                    {...at(`bar.${i}`)}
                  />
                ))}
                <path d={`M494 ${BAR_BASE}H692`} className={styles.axis} />
                <polyline
                  ref={bind("dash.trend")}
                  pathLength="1"
                  strokeDasharray="1 1"
                  className={styles.trend}
                  {...at("dash.trend")}
                />
              </>
            )}

            {panel.id === "auto" && (
              <>
                <PanelTitle y="267">Automated workflow</PanelTitle>
                {[0, 1].map((k) => (
                  <g key={k}>
                    <path
                      d={`M${STEPS[k].x + 14} 302H${STEPS[k + 1].x - 14}`}
                      className={styles.track}
                    />
                    <path
                      ref={bind(`auto.track.${k}`)}
                      d={`M${STEPS[k].x + 14} 302H${STEPS[k + 1].x - 14}`}
                      pathLength="1"
                      strokeDasharray="1 1"
                      className={styles.trackLit}
                      {...at(`auto.track.${k}`)}
                    />
                  </g>
                ))}
                {STEPS.map((step, k) => (
                  <g key={step.label}>
                    <circle
                      cx={step.x}
                      cy="302"
                      r="14"
                      className={styles.node}
                    />
                    <g ref={bind(`auto.node.${k}`)} {...at(`auto.node.${k}`)}>
                      <circle
                        cx={step.x}
                        cy="302"
                        r="14"
                        className={styles.nodeLit}
                      />
                      <path
                        d={`M${step.x - 5} 302.5l3.5 3.5 6.5-7`}
                        className={styles.tick}
                      />
                    </g>
                    <text
                      x={step.x}
                      y="334"
                      textAnchor="middle"
                      className={`${styles.nodeLabel} ${styles.minor}`}
                    >
                      {step.label}
                    </text>
                  </g>
                ))}
              </>
            )}

            {panel.id === "docs" && (
              <>
                <PanelTitle y="395">Documents to clients</PanelTitle>
                <rect
                  x={DOC_HOME[0] - 19}
                  y={DOC_HOME[1] - 25}
                  width="38"
                  height="50"
                  rx="3"
                  className={styles.ghost}
                />
                {CLIENTS.map((client, i) => (
                  <g key={client.letter}>
                    <circle
                      ref={bind(`client.${i}.ring`)}
                      cx={client.x}
                      cy={CLIENT_Y}
                      className={styles.clientRing}
                      {...at(`client.${i}.ring`)}
                    />
                    <circle
                      cx={client.x}
                      cy={CLIENT_Y}
                      r="14"
                      className={styles.client}
                    />
                    <text
                      x={client.x}
                      y={CLIENT_Y + 4.5}
                      textAnchor="middle"
                      className={styles.clientText}
                    >
                      {client.letter}
                    </text>
                    <g
                      ref={bind(`client.${i}.tick`)}
                      {...at(`client.${i}.tick`)}
                    >
                      <circle
                        cx={client.x + 11}
                        cy={CLIENT_Y - 11}
                        r="7"
                        className={styles.badge}
                      />
                      <path
                        d={`M${client.x + 8} ${CLIENT_Y - 11}l2 2 4-4.5`}
                        className={styles.tick}
                      />
                    </g>
                  </g>
                ))}
                {/* The document being generated and sent */}
                <g ref={bind("doc.fly")} {...at("doc.fly")}>
                  <path
                    d="M-19 -25h28l10 10v40h-38z"
                    className={styles.paper}
                  />
                  <path d="M9 -25v10h10z" className={styles.paperFold} />
                  <rect
                    x="-13"
                    y="-18"
                    width="14"
                    height="4"
                    rx="1"
                    className={styles.paperHead}
                  />
                  {DOC_LINES.map((_, i) => (
                    <rect
                      key={i}
                      ref={bind(`doc.line.${i}`)}
                      x="-13"
                      y={-6 + i * 8}
                      height="3"
                      rx="1.5"
                      className={styles.paperLine}
                      {...at(`doc.line.${i}`)}
                    />
                  ))}
                </g>
                <text
                  ref={bind("doc.status")}
                  x="500"
                  y="497"
                  className={`${styles.status} ${styles.minor}`}
                >
                  {FIRST["doc.status"].text}
                </text>
              </>
            )}
          </g>
        ))}

        {/* ── Tools (above panels so header icons sit on top) ── */}
        {TILES.map((tile) => (
          <Tile key={tile.id} tile={tile} bind={bind} />
        ))}

        {/* ── Act 1 error pop-ups ── */}
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

        {/* ── Act 2 analysis sweep and connection pulse ── */}
        <g ref={bind("fx.scan")} {...at("fx.scan")}>
          <rect x="-150" width="150" height={VIEW.h} fill="url(#hs-scan)" />
          <path d={`M0 0V${VIEW.h}`} className={styles.scanLine} />
        </g>
        <circle
          ref={bind("fx.ring")}
          cx={HUB.x + HUB.w / 2}
          cy={HUB.y + HUB.h / 2}
          className={styles.ring}
          {...at("fx.ring")}
        />
      </svg>
    </div>
  );
};

export default HeroStory;
