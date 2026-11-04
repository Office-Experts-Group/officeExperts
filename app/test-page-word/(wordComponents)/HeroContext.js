"use client";
// app/(components)/HeroContext.js
// Shares the hero's state from HeroRotator with the illustration (HeroStory),
// which HomeHero passes in as the `visual` prop.
//   active:   which frame is showing (0, 1 or 2)
//   mode:     "auto" (slideshow running), "manual" (visitor picked a tab) or "paused"
//   onScreen: false while the hero is scrolled out of view
//   restart:  goes up on every tab click so the chosen act replays

import { createContext } from "react";

export const HeroContext = createContext({
  active: 0,
  mode: "auto",
  onScreen: true,
  restart: 0,
});
