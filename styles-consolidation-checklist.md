# Styles Consolidation — Working Checklist

> **Project:** Styles consolidation · **Prepared:** 2026-10-27 · **Scope:** all 342 SCSS files in the Project (340 component modules + `globals.scss` + `_apiIntegration.scss`)
> **Revised 2026-10-27 after your answers to D1–D13 and the `global.css` you attached** — decisions are now fixed in §3, the standard rules are in §3.1, and the §4 code is the revised block.
> **Goal:** one set of global tokens/mixins in `globals.scss`, used everywhere, so headings, eyebrows, spacing and buttons look the same on every page — **without breaking neighbouring components.**
> Every file was read. Counts below come from that audit (some are approximate where marked `~`); the greps in §2.3 and §14 give exact numbers on your side.

---

## At a glance

| Finding | Number |
|---|---|
| Component modules audited | **340** (+ `globals.scss`, `_apiIntegration.scss`) |
| h2 clamp/weight combinations in use (files that use `clamp()`) | **71 distinct** across 243 files — plus ~78 files with fixed-size or non-clamp h2 rules (19 files have no h2) |
| …of which the two real “standards” | `clamp(1.9rem,3.2vw,2.75rem)/800` (42 files) and `clamp(1.9rem,3vw,2.6rem)/800` (30 files) · display tier `clamp(2.2rem,4.2vw,3.5rem)/900` (17) + `2.3/4.4/3.7` (12) + `2.2/4/3.4` (10) + `2.4/4.5/3.8` (7) |
| Eyebrow recipes | `0.7rem/700/3px` (94 files) · `0.68rem/700/3px` (95) · `0.85rem/700/0.08em` (20: conversion, form-era, popupForms, quickParts) · `0.85rem/0.06em` (6: govDept + popupFormsHero) · `0.7rem/700/2.5px` (6: bpa/activex) · `0.75rem/600/0.14em` (3: automation) · ~10 one-offs or structural selectors — plus plain vs **pill** (49 pill, 7 outline-pill) and **hidden on phone** in 74 files / explicitly shown in 26 |
| Section padding models | `7rem 8rem` (93) · `8rem` (78) · `7rem 6vw` (21) · `6rem 8rem` (15) · `6rem` block-only (13) · `6rem 10vw` (8) · clamp-fluid (11) · ~35 one-offs — and **five different** tablet/landscape/phone ladders (§13.3) |
| Inner max-widths | 1200 (99) · 1280 (40) · 1300 (15) · 1400 (14) · via mixin (14) · 1100 (5) · 1180 (3) · text-measure widths 500–900 · unset (~100) |
| Border radii | 15+ values — `2rem` ×64 files, `4px` ×52, `50%` ×51, `6px` ×39, `12px` ×35, `8px` ×24, `14px` ×22, `3px` ×19, `10px` ×17, `16px` ×10, `2px`, `20px`, `18px`, `22px`, `24px`, `26px`, `0.1rem`, `0.2rem`, 999px |
| “Light blue on dark” | 7 variants: `#6fc3e8`, `#5ba4c4`, `#7ec8e3`, `#4fb3e0`, `#4fb3e8`, `color.adjust($accent,28%)`, `rgba($accent,.9)` |
| “Ink” navy | 4 variants: `#0b2433`, `#0d1b2a` (`$text-primary`), `#0f1f2b`, `color.adjust($accent,-20%)` |
| Greens / reds | 6 greens (`#0eaa0e`, `rgb(0,193,0)`, `#4caf50`, `#28a745`, `#05a605`, neon `#04f904`) · 5 reds (`#c0392b`, `rgb(202,13,13)`, `#d32f2f`, `#df1c1c`, `#ff0909`) |
| Files with NO globals import | 15 (12 widgets/legacy, 3 pages that should import — §1.7) |
| Files that redeclare a global token name with a different value | 5 (§1.5) — plus ~30 more with their own local colour palettes (`$ink`, `$sea-deep`, `$earth`, `$tpm-*`…) |
| Identical `@include phone/phoneLandscape/tablet` triples | worst: `ctaMain` (~15), `expertsAwait` (~8), `header` (8), `contact` (~15 phone+landscape pairs) |
| Probable bugs / dead code | ~45 (§11) |

**The single biggest visible inconsistency (now resolved by D1/D2):** the same “section heading” is `2.2rem`, `2.4rem`, `2.6rem`, `2.75rem`, `3rem` or `3.5rem` depending on which page you are on, at weights 700, 800 and 900 (form-era pages use *fixed* 2.2/2.4/2.6rem; AI-era pages use 2.6/2.75rem clamps; hubs use 3–3.8rem clamps).

---

## 0. How to use this file

1. Work **top to bottom**: §1 hazards → §2 baseline → §3 decisions → §4 add tokens → §8 phases → §9 page checklists.
2. **One page family per commit** (§9 tracker). Tick the file boxes while working; tick the family gate when committed.
3. Legend used throughout: 🔒 coupled to layout/header (change with care) · ✋ leave alone / tokens only · 🐞 probable bug (fix in its own commit) · ≈ small accepted visual change · **D#** = a decision in §3.
4. “Target” lines follow the **answered decisions in §3**. If you change your mind later, only the token values in §4 change — the per-file work (“use mixin X”) stays the same. That is the point of consolidating.
5. **Start at §3.1** (the one-page standard rules) and §8 Phase 1–2: add the rules to `globals.scss`, prove them on the pilot family `northernNsw*`, freeze them, and only then do the other families.

---

## 1. Read this first — things that can break the site

### 1.1 Three mixins are used but not defined
- [ ] **Open the real `globals.scss` in the repo and compare with the Project copy.** The Project copy defines only `smallPhone, phone, phoneLandscape, tablet, desktop, deskL`.
- `conversionProcess, conversionCta, conversionFaq, conversionProblem, conversionComparison, conversionBento` and `templateHero` call `container`, `belowDesktop` and/or `mobile`; none exist in the Project copy → those 7 files would fail to compile.
- Either the Project copy is stale (then **do not overwrite** the real mixins — diff first and keep their signatures) or those files are unreleased work. §4 defines all three; if the repo already has them, merge instead of duplicating (a duplicate `@mixin` of the same name in one file is a Sass error).

### 1.2 `global.css` (received) — what the modules rely on
You attached it; this is what it means for the migration:
- **Fonts are global.** `h1–h6` get `var(--font-garamond), serif`; `p, li, a, span, button, input, label, textarea, dd, td` get `var(--font-aptos), sans-serif`. Modules never need to set `font-family`; the ~8 files that do (`!important`) are redundant. `wordTemplatesBlog` uses `var(--aptos)` — **a bug** (the real name is `--font-aptos`).
- **Unstyled headings inherit** `h1 40px/500`, `h2 35px`, `h3 28px`, `h4 22px`, `h5 18px`, `h6 16px`; `h1`/`h2` have `text-wrap: balance`, `p` has `text-wrap: pretty`. Every module heading overrides the size, so the global sizes only matter for headings a module forgot to style. **`h1` is weight 500 globally** — the new mixins set 700 explicitly, but fix the global `h1` too in Phase 4 (§8) so a bare `<h1>` matches.
- **`a` is `color: inherit; text-decoration: none`**; `ul` has `margin-bottom: 20px`; `button` is reset (`background:none; border:none`) with `transition: all .3s` — buttons that set their own `transition` override it.
- **`.btn` (global class)** — accent background, white text, `0.1rem` radius, `13px 25px`, `1px` letter-spacing, `capitalize`, white wipe `::before` sliding in on hover (text + border turn accent). D8/D11 turn it into the `btn` / `btn-on-accent` **mixins** in `globals.scss` (§4.1). **Keep the global `.btn` in `global.css` until the last element using it is migrated** (§8 Phase 4) — TSX that has `className="btn"` or `` `${styles.x} btn` `` still depends on it.
- Files that depend on the global `.btn`/button rules: `businessAnalysisHero .primary`, `emailTriageHero .primary`, `sqlHero .primary`, `groupIntro .cta`, `dashboardsAi .cta`, `govDeptProcess .cta`, `migrationPaths .closerHeading` are **unstyled** in their module; `templateIntro` uses `a:not(:global(.btn))`; `popupFormsHero`, `popupFormsProcess`, `promo`, `servicesWord`, `relatedLinks`, `payment .homeButton` add `:hover{border:1px solid $accent}` to compensate for it. Each becomes `@include btn;` on its own class (§10.9) and the `btn` class/hover hack is deleted from TSX/SCSS in the same commit.
- Still **not** defined anywhere I can see: `supportTrainingHub`'s CSS variables (`--text-secondary`, `--primary-rgb`, `--bg-light`, `--text-primary`) — find them in the layout/`:root` or replace with tokens (§11).
- `global.css` uses native CSS nesting (`&::before`) — fine in modern browsers, but check your build target if you ever move rules between it and SCSS.

### 1.3 The breakpoint contract (nav switches at 1200px)
`mobileNav` is hidden at `deskL` (≥1200) and shown at desktop + tablet + phone + landscape; `header` also hides `.nav` at `desktop` (1025–1199). So the **mobile nav covers everything below 1200px**. Use the new `belowDeskL` mixin for that — **never replace it with `tablet` alone**.

Existing mixins (unchanged): `smallPhone ≤359` · `phone ≤449` · `phoneLandscape 450–766` · `tablet 767–1024` · `desktop 1025–1199` · `deskL ≥1200`. `belowDesktop` = tablet+landscape+phone = **≤1024** (they are contiguous, so one query).

### 1.4 Layout that is coupled to section padding or the header
Changing section padding / heading height in these files can shift or break something:
- 🔒 `migrationScenarios` — `.cta` band is full-bleed via `margin:0 -8rem; padding:5rem 8rem`.
- 🔒 `perthServices`, `richmondServices` — `.item::before { left/right: -8rem }`.
- 🔒 overlap hacks: `copilotIntegration` (`padding 14rem …`, `margin-top:-9rem`), `perthIntro` (`.mapContainer margin-top:-3rem`), `sydneyWhy` (map `margin-top:-9rem`), `goodToKnow` (`svg margin-top:-16rem`), `centralCoastIntro` (bottom pad 10rem), `goldCoastIntro` (11rem), `caseStudyDetail` (hero top 14rem), `sqlHero` (top padding clears the fixed header).
- 🔒 header-height coupling: `sticky top:130px` in `copilotIntro, copilotValue, howWeWork, introduction, melbourneContext, migrationProcess, migrationProblem, queryProcess, queryServices`; `top:6rem/7rem/8rem` in `formFieldsAnatomy, formBuilding, excelSection, corporateIdentityAnatomy, sqlBenefits, mailMergeServices`; `scroll-margin-top` of `4rem / 6rem / 150px / 125px` in ~24 files for the same job. **Do not unify these until the real header height is measured** (§10.12).
- 🔒 `migrationProcess` step track `::before { top: 9px }` is coupled to the dot size.

### 1.5 Files that redeclare global tokens (same name, different value)
**Same name as a global, different value (they import globals, then redeclare):** `howWeWork`, `introduction`, `webCapabilities`, `compareContainer`, `boxSegment`.
**Hand-copied token sets with no globals import:** `bpaFaq`, `bpaProcess`, `flipBook` (also `payment`, `popupFormsUseCases` own palettes).
**Parallel local palettes (different names, same job):** `microsoftSolutions` (`$ms-*`), `rebrandingIncluded/What/Why` (`$text-on-dark`), city hubs (`$stone`, `$ink`, `$sea-deep`, `$sea-mist`, `$sand`, `$mist`), `darwin*` (`$earth/$ember/$sun/$cream`), `thirdPartyMethods` (`$tpm-*`), `sqlComparison`/`sqlSecurityProof`/`templateHero`/`dashboardsDataSources`/`companiesCreation` (light blues), `migrationPaths`/`migrationStack` (palettes).

Notable collisions: local `$grayText: #777a7e` vs global `#a0a2a6`; local `$black: #1a1a1a` vs global `#1e1e1e`; local `$offWhite: #f7f8f9` vs `#f8f8f8`; local `$accent-light` vs `#e8f4fa`; `$border` `.07` vs `.08`; `$accent-border` `.28/.35` vs `.3`; `$text-on-dark rgba(.85)` vs `$white-88`.

**Sass hazard:** with `@use "./globals" as *`, a top-level `$name: …;` in a module that already has that name from globals **assigns to the globals variable for that compile** instead of defining a new local. It won’t error; it silently overrides. So (a) never add a global whose name an existing local already uses without removing the local in the same commit, and (b) when deleting a local shadow, expect a visual change and diff the compiled CSS (§2.1).

### 1.6 Sass gotchas that bit similar refactors
- **`globals.scss` must stay selector-free.** It is `@use`d by ~325 modules; any top-level rule, placeholder or `@keyframes` would be emitted into every one of them. Keyframes go inside mixins (see `kf-fade-up` in §4.1).
- **The new block needs no new `@use` lines.** (`globals.scss` already starts with `@use "sass:color"; @use "sass:map";` — leave those as the first lines; all `@use` rules must precede everything else.)
- **Put mixins that emit `@media` (`eyebrow`, `eyebrow-on-dark`, `hide-on-phone`) after the plain declarations in the rule** — e.g. `margin-bottom: 1rem; @include eyebrow;`, never the other way round. A declaration after a nested `@media` triggers Sass’s *mixed-decls* deprecation, and the output order changed between Sass versions (declarations after nested rules are emitted *later*, so they can start overriding the media block).
- **`@extend` does not cross modules cleanly** (`queryComparison` extends `.colTag`); use mixins.
- **CSS-module keyframe names are local to each file.** Moving a keyframe into a mixin removes duplicated *source*, but each file that animates still needs its own `@include`.
- **Line endings:** 259 files are CRLF, 81 are LF. Keep each file’s endings or the diff becomes whole-file noise (`git diff --stat` after every file; check `.gitattributes`/`core.autocrlf`).
- **Existing duplicate declarations in `globals.scss`:** `$accent-border` is declared twice (`.28` then `.3` → effective value `.3`) and `$text-primary/-secondary/-muted` are declared twice. Deleting the first `$accent-border` and the second `$text-*` block is a zero-change cleanup.

### 1.7 Files with no globals import (15)
`animate`, `caseStudyCarousel`, `ccp`, `codeBlock`, `flipBook`, `ms365`, `templateCards`, `payment`, `quote`, `refundPolicy`, `boringStuff`, `testimonialPage`, `popupFormsUseCases`, `bpaFaq`, `bpaProcess`. Twelve are widgets or legacy; `bpaFaq`, `bpaProcess` and `popupFormsUseCases` are **pages that should import globals** (they hand-copy tokens).

---

## 2. Baseline — do this before touching anything

### 2.1 Snapshot the compiled CSS (your safety net)
Compiled-CSS diffs are the most reliable way to prove a swap changed nothing. Run once on a clean branch (adjust `STYLES` to the folder holding `globals.scss`):

```bash
STYLES=styles
mkdir -p .css-baseline
for f in $STYLES/*.scss; do
  b=$(basename "$f" .scss)
  npx sass --no-source-map --style=expanded "$f" > ".css-baseline/$b.css" 2> ".css-baseline/$b.err" \
    || echo "FAIL $f"          # expect FAILs only for the files in §1.1 until the mixins exist
done
wc -l .css-baseline/*.css | tail -1   # keep this total — it should shrink only via dedupe
```

Per-file check after every edit (expected output: **empty** for zero-change swaps; reviewed lines only for deliberate ≈ changes):

```bash
check() {                      # usage: check adelaide   → every adelaide*.module.scss
  for f in $STYLES/$1*.module.scss; do
    b=$(basename "$f" .scss)
    echo "── $b"
    npx sass --no-source-map --style=expanded "$f" | diff -u ".css-baseline/$b.css" - | grep -E '^[+-][^+-]' || true
  done
}
```

**What a clean diff looks like now.** Your decisions change values on purpose, so a migrated file will *not* diff empty. Allowed lines (anything else → stop, §6 rule 14):
- `font-weight: 800/900 → 700` on headings and card titles
- heading `font-size` / `line-height` / `letter-spacing` → the two tiers (§3.1)
- eyebrow → `0.8rem`, `0.06rem` tracking, uppercase, `display:none` inside `@media (max-width:449px)`, colour `#046999` or `rgba(255,255,255,.749)`
- `max-width: 1280/1300/1400px → 1200px`
- `border-radius: <px/rem> → 1.5rem` (cards/panels only)
- a hand-written button rule replaced by the `btn` / `btn-on-accent` block
- `padding: … 6vw/10vw` → `10vw`
- colour literal → the token's value (e.g. `#034f72 → #034e72`)

When a deliberate change is accepted, **re-snapshot that family** so later diffs stay meaningful.

### 2.2 Screenshot matrix (for visual regressions CSS diffs can’t show)
Widths that matter: **360, 420, 600, 900, 1100, 1199, 1200, 1440** (1199 vs 1200 is the nav switch; 449/450, 766/767, 1024/1025 are the other boundaries). Disable animations or screenshots will be noisy.

```js
// shots.mjs   usage: node shots.mjs before      (dev server on :3000; run again with `after`)
import { chromium } from 'playwright';
const tag = process.argv[2];
const routes = ['/' /* ← add every route from your sitemap */];
const widths = [360, 420, 600, 900, 1100, 1199, 1200, 1440];
const browser = await chromium.launch();
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const r of routes) {
    await page.goto('http://localhost:3000' + r, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: '*{animation:none!important;transition:none!important}' });
    await page.screenshot({ path: `shots/${tag}/${w}_${r.replace(/\W+/g, '_') || 'home'}.png`, fullPage: true });
  }
  await page.close();
}
await browser.close();
```
Compare with `compare -metric AE shots/before/X.png shots/after/X.png diff.png` (ImageMagick) or any image-diff tool.

- [ ] Baseline CSS snapshot taken and committed/kept outside the working tree
- [ ] Baseline screenshots taken for every route at all 8 widths
- [x] `global.css` located and read (§1.2)

### 2.3 Inventory greps (exact numbers for your tree)
```bash
# @use styles in use
grep -rhoE '@use +"[^"]*globals[^"]*"' $STYLES | sort | uniq -c
# files that don't import globals
grep -rLE '@use +"[^"]*globals' $STYLES --include=*.scss
# raw media queries (should shrink to the documented exceptions)
grep -rhoE '@media[^{]+' $STYLES --include=*.scss | sed 's/ \+/ /g' | sort | uniq -c | sort -rn
# every h2-ish clamp
grep -rhoE 'clamp\([0-9.]+rem, *[0-9.]+vw, *[0-9.]+rem\)' $STYLES | sed 's/ //g' | sort | uniq -c | sort -rn
# eyebrow-like rules
grep -rnE 'letter-spacing: *(3px|2\.5px|2px|0\.0?[0-9]+em)' $STYLES | wc -l
# local token redeclarations of global names
grep -rnE '^\s*\$(accent|accent-light|black|grayText|offWhite|border|dark-bg|text-primary|text-secondary)\s*:' $STYLES --include=*.module.scss
# underlined sub-headings (.sub / .box with fit-content + border-bottom) — treated as eyebrows (D3)
grep -rnE -B1 -A6 '^\s*\.(sub|box)\b[^{]*\{' $STYLES --include=*.module.scss | grep -E 'fit-content|border-bottom'
# pre-heading text that must hide ≤449px (D9): kickers/taglines/labels sitting above an h2
grep -rnE '^\s*\.(eyebrow|kicker|tagline|preTitle|preHeading|overline|tag|label|intro|sub)[A-Za-z]*\s*\{' $STYLES --include=*.module.scss
# TSX still using the global .btn class
grep -rnE 'className=("|\{`)[^"`]*\bbtn\b' src app components 2>/dev/null
# class usage from TSX before deleting/renaming anything  (replace NAME)
grep -rn "styles\.NAME\b\|styles\['NAME'\]" src app components 2>/dev/null
```

---

## 3. Decisions — answered 2026-10-27

Your answers, as the rule each one becomes. Token values live in one place (§4.1) — to change a decision later, edit the value there, re-snapshot, done.

| # | Your answer | What it means in practice |
|---|---|---|
| ✅ **D1** | `clamp(2.4rem, 4.5vw, 3.8rem) / 700 / 1.1 / −0.03em` is the favourite and becomes a reusable variable | `$heading-size` + `@include heading-main`. Used for every page-opening headline and for the former “display” pages (hubs, campaign pages). In-page section headings use the smaller `$heading-size-section` (`clamp(1.9rem,3.2vw,2.75rem)`) — **my assumption (A2)**; one-line switch to use the favourite size everywhere |
| ✅ **D2** | Headings are 700 (800/900 aren’t loaded) | `$heading-weight: 700`, used by `heading-main`, `heading-section` and `card-title`. Likely **no visible change** where only 700 is loaded (800/900 already render as 700); the compiled diff will still show the weight lines |
| ✅ **D3** | Eyebrows: uppercase · `font-size` “8rem” · `letter-spacing: .06rem` · `#ffffffbf` on dark, accent on light · the `.sub` / `.box` underlined sub-headings count too | `@include eyebrow` (light) / `@include eyebrow-on-dark`. **“8rem” read as `0.8rem` (A1)**. No pill eyebrows any more. `.sub`/`.box` keep their own `width: fit-content; border-bottom` and only swap the type recipe (A8) |
| ✅ **D4** | Section padding is left alone | **No `section-pad` mixin, no padding swaps.** Each file keeps its own padding and ladder. Only the horizontal *gutter* is standardised where a file already uses vw (D12) |
| ✅ **D5** | Container 1200px in `globals.scss` | `$container: 1200px` + `@include container`. 1280 / 1300 / 1400 → 1200 (narrower — review the old 1400 heroes). Text-measure widths ≤ 900px stay local |
| ✅ **D6** | Any accent-dark; one global, no per-file names or tweaks | `$accent-dark: #034e72` replaces `#034f72 / #024d72 / #03506f / #035878 / #033a55`. Same rule for the others: `$accent-on-dark` for all 7 light-blues, `$text-primary` for the 4 navy “inks”, `$success`, `$error*`. Delete local `$ink`, `$sky`, `$accent-bright`, `$tpm-accent`… |
| ✅ **D7** | Border radius 1.5rem | `$radius: 1.5rem` on cards, panels, images and inputs. **Not** applied to circles (`50%`), pill chips (`$radius-pill`) or buttons (`.btn` keeps `0.1rem`) (A3). Tiny elements (≤ ~2.5rem tall) keep their shape |
| ✅ **D8** | The global `.btn` is right for most buttons; on an accent background flip it: white first, accent wipes in | `@include btn` (accent → white wipe) and `@include btn-on-accent` (white → accent wipe). They replace button variants A–C (§10.9). Outline buttons stay local for now (A4) |
| ✅ **D9** | Eyebrows and any pre-heading text are hidden on phone | `eyebrow` includes `display:none` at ≤449px; other pre-heading lines use `@include hide-on-phone`. Applies to the 26 files that currently show it. (Phone = ≤449px; landscape phones 450–766px still show it) |
| ✅ **D10** | Keep `darwin*` as a local theme | Type/radius/weight/eyebrow follow the standard; its earth/ember/sun palette stays local |
| ✅ **D11** | Collapse the global `btn` into `globals.scss`, no extra file | Done as **mixins** (A4), not a selector: a `.btn {}` rule in `globals.scss` would be copied into all ~340 modules and renamed by CSS modules, so it would never match. The `.btn` rule in `global.css` is removed in Phase 4, after the last user migrates |
| ✅ **D12** | `10vw` is the standard gutter; some files need different | `$gutter: 10vw`. vw-based side padding (`6vw`, `5vw`…) → `$gutter` unless the file has a reason. `8rem` / ladder paddings are D4 → untouched |
| ✅ **D13** | (You weren’t sure what this meant — here it is plainly.) *Should the ~67 oldest components (L01–L05: `pageSegment*`, blog, FAQ, testimonials, footer…) be fully restyled to the new look, or only tidied?* | **My default (A10): tidy only** — colours → tokens, radius, weights, eyebrow recipe, duplicate/dead code removed; their layouts and heading sizes stay until you decide otherwise. Say the word and they move to the full recipe |

### 3.1 The standard rules (one page — what every page family follows)

| Thing | Rule | Mixin / token |
|---|---|---|
| Main heading (hero, page opener, hub/campaign headings) | `clamp(2.4rem,4.5vw,3.8rem)` · 700 · 1.1 · −0.03em | `@include heading-main;` (`$heading-size`) |
| Section heading (h2 inside a page) | `clamp(1.9rem,3.2vw,2.75rem)` · 700 · 1.15 · −0.025em | `@include heading-section;` |
| Card / row title (h3) | 1 / 1.15 / 1.4rem · 700 | `@include card-title(sm \| md \| lg);` |
| Eyebrow / pre-heading / `.sub` / `.box` | `0.8rem` · 700 · uppercase · `.06rem` tracking · accent on light, `#ffffffbf` on dark · hidden ≤449px | `@include eyebrow;` / `@include eyebrow-on-dark;` / `@include hide-on-phone;` |
| Body | lede 1 / 1.8 · body .95 / 1.75 · small .9 / 1.7 | `lede`, `body-text`, `small-text` |
| Micro-label (not an eyebrow) | .68rem · 700 · 2px · uppercase | `@include label;` |
| Container | max-width 1200px, centred | `@include container;` |
| Gutter | 10vw | `$gutter` |
| Section padding | **leave each file’s own** | — |
| Radius | 1.5rem on cards/panels/images/inputs; `50%` circles; `$radius-pill` chips; buttons 0.1rem | `$radius`, `$radius-pill` |
| Button | accent → white wipe · on an accent background: white → accent wipe | `@include btn;` / `@include btn-on-accent;` |
| Colours | `$accent` · `$accent-dark` · `$accent-on-dark` · `$text-primary` · `$success` · `$error*` — never a hex or a local name | tokens in §4.1 |
| Breakpoints | `mobile` ≤766 · `belowDesktop` ≤1024 · `belowDeskL` ≤1199 (nav) · raw `@media` only for the documented exceptions | §1.3 |
| Heading weight | 700, always | `$heading-weight` |

**Assumptions I made — tell me if any is wrong (each is a one-line change in §4.1):**
- **A1** “8rem” eyebrow size is a typo for **0.8rem** (8rem would be 128px).
- **A2** Two heading tiers (main + section) rather than one size everywhere; the three “display” sizes (3.4 / 3.5 / 3.7rem) collapse into the main heading (≈ 0–0.3rem larger).
- **A3** 1.5rem radius is for cards/panels/images/inputs only — not circles, pills, buttons or tiny icon tiles.
- **A4** `btn` is a mixin; outline buttons (`.secondary`, `.all`, `.ctaSecondary`…) are left as they are until you say how they should look.
- **A5** Hover for `btn`: text and border take the opposite colour, exactly like today’s `.btn` (white → accent on light; accent → white on accent).
- **A6** Old 1400px heroes become 1200px (check them at 1440).
- **A7** `.sub` / `.box` are hidden on phone only when they sit directly above a heading; confirm each against the JSX.
- **A8** “Pre text” = kicker/tagline/eyebrow lines above a heading, not intro paragraphs *below* it.
- **A9** Word → Office migration needs no separate pass; the standard rules come first and the pilot is `northernNsw*` (§8 Phase 2).
- **A10** D13 default: legacy files get tidy-only.

---

## 4. Phase 1 — add the standard rules to `globals.scss`

**Additive only.** Nothing existing is edited except the two zero-change cleanups (§1.6 last bullet). The block below was compile-tested with Dart Sass 1.106 against a copy of the current `globals.scss` and against sample modules using every mixin; `globals.scss` itself still compiles to empty CSS.

### 4.1 Code to append (below the existing content; keep the existing `@use "sass:color"; @use "sass:map";` first)

```scss
// ════════════════════════════════════════════════════════════════════════════
// STANDARD RULES — append BELOW the existing content of globals.scss
//
// RULES for this file
//  • Variables and mixins ONLY. A selector or top-level @keyframes here would be
//    emitted into all ~340 modules that `@use` this file.
//  • No new @use lines are needed (nothing here calls sass:color / sass:map).
//  • Nothing here changes an existing token's value.
//  • `eyebrow` and `hide-on-phone` emit @media: in a rule, @include them AFTER
//    the plain declarations (Sass mixed-decls).
// ════════════════════════════════════════════════════════════════════════════

// ── 1. COLOUR ───────────────────────────────────────────────────────────────
$accent-on-dark: #6fc3e8; // accent text/icons on dark sections (replaces 7 variants)
$accent-dark: #034e72; // the ONE dark accent (replaces #034f72/#024d72/#03506f/#035878/#033a55)
$accent-tint: rgba(4, 105, 153, 0.08); // faint accent wash (cards, chips, dots)
$eyebrow-on-dark: #ffffffbf; // eyebrow / pre-heading text on dark backgrounds (white @ 75%)
$line: #e3e8ec; // neutral card/row line on white
$line-strong: #d4d6d9; // dotted/strong divider
$success: #0eaa0e; // ticks
$error: #c53030; // form error text
$error-bg: #fff5f5;
$error-border: #feb2b2;

// ── 2. SHAPE ────────────────────────────────────────────────────────────────
$radius: 1.5rem; // THE radius: cards, panels, images, inputs
$radius-pill: 999px; // chips and fully-round shapes (circles stay 50%)
// Buttons keep the .btn look (0.1rem) — see the btn mixins below.

$shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.07);
$shadow-panel: 0 20px 50px rgba(13, 27, 42, 0.06);

// ── 3. LAYOUT ───────────────────────────────────────────────────────────────
$container: 1200px; // the one inner width (text-measure widths ≤ 900px stay local)
$gutter: 10vw; // standard horizontal page gutter (use where a file is vw-based)
$header-offset: 130px; // sticky `top` under the fixed header (measure before changing)
$scroll-offset: 150px; // scroll-margin-top for anchored sections
// Section padding is deliberately NOT standardised (D4) — leave each file's own.

// ── 4. BREAKPOINT HELPERS (added to the six existing mixins) ────────────────
// belowDesktop == tablet + phoneLandscape + phone (contiguous, so one query)
@mixin belowDesktop {
  @media (max-width: 1024px) {
    @content;
  }
}
// belowDeskL == everything the mobile nav covers (nav hides at deskL ≥1200)
@mixin belowDeskL {
  @media (max-width: 1199px) {
    @content;
  }
}
// mobile == phoneLandscape + phone
@mixin mobile {
  @media (max-width: 766px) {
    @content;
  }
}
@mixin tabletUp {
  @media (min-width: 767px) {
    @content;
  }
}
@mixin desktopUp {
  @media (min-width: 1025px) {
    @content;
  }
}

@mixin container($max: $container) {
  max-width: $max;
  margin-inline: auto;
}

// ── 5. TYPOGRAPHY ───────────────────────────────────────────────────────────
$heading-size: clamp(2.4rem, 4.5vw, 3.8rem); // the favourite — main heading size
$heading-size-section: clamp(1.9rem, 3.2vw, 2.75rem); // smaller tier for in-page sections
$heading-weight: 700; // every heading (900 is not loaded; 800 falls back to 700)
$eyebrow-size: 0.8rem; // ASSUMPTION: the brief said "8rem" — read as 0.8rem; change here if wrong
$eyebrow-tracking: 0.06rem;

@mixin hide-on-phone {
  @include phone {
    display: none;
  }
}

// Eyebrow and any pre-heading text: uppercase, accent on light, hidden ≤449px.
// Also use it for the `.sub` / `.box` underlined sub-headings — keep their own
// border-bottom / width:fit-content locally, only swap the type recipe.
@mixin eyebrow($color: $accent) {
  font-size: $eyebrow-size;
  font-weight: 700;
  letter-spacing: $eyebrow-tracking;
  text-transform: uppercase;
  color: $color;
  @include hide-on-phone;
}
@mixin eyebrow-on-dark {
  @include eyebrow($eyebrow-on-dark);
}

// Main heading — clamp(2.4rem, 4.5vw, 3.8rem) / 700 / 1.1 / -0.03em
@mixin heading-main($color: $text-primary) {
  font-size: $heading-size;
  font-weight: $heading-weight;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: $color;
}

// Section heading — smaller tier. To use ONE size everywhere, set
// $heading-size-section: $heading-size; (one line, then re-snapshot).
@mixin heading-section($color: $text-primary) {
  font-size: $heading-size-section;
  font-weight: $heading-weight;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: $color;
}

// Card / row titles (h3): $size = sm | md | lg
@mixin card-title($size: md, $color: $text-primary) {
  @if $size == sm {
    font-size: 1rem;
  } @else if $size == lg {
    font-size: 1.4rem;
  } @else {
    font-size: 1.15rem;
  }
  font-weight: $heading-weight;
  line-height: 1.25;
  color: $color;
}

// Body copy
@mixin lede($color: $text-secondary) {
  font-size: 1rem;
  line-height: 1.8;
  color: $color;
}
@mixin body-text($color: $text-secondary) {
  font-size: 0.95rem;
  line-height: 1.75;
  color: $color;
}
@mixin small-text($color: $text-secondary) {
  font-size: 0.9rem;
  line-height: 1.7;
  color: $color;
}

// Small-caps micro label that is NOT an eyebrow (tags, stat labels…)
@mixin label($color: $text-muted) {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: $color;
}

// ── 6. BUTTONS — the old global `.btn` (wipe on hover), as mixins ───────────
// Private helper (leading "-" = not visible outside this file).
@mixin -btn-wipe($bg, $fg, $sweep) {
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
  padding: 13px 25px;
  background: $bg;
  color: $fg;
  border: 1px solid transparent;
  border-radius: 0.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: $sweep;
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: $bg;
    border-color: $bg;

    &::before {
      left: 0;
    }
  }
}

// Standard button (light or dark backgrounds): accent first, white wipes in.
@mixin btn {
  @include -btn-wipe($accent, $white, $white);
}
// For use ON an accent background: white first, accent wipes in.
@mixin btn-on-accent {
  @include -btn-wipe($white, $accent, $accent);
}

// ── 7. LINKS & UTILITIES ────────────────────────────────────────────────────
@mixin arrow-link($color: $accent) {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: $color;
  text-decoration: none;

  svg {
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
}

@mixin inline-link($color: $accent) {
  a {
    color: $color;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Keyframes live in mixins so they are emitted ONLY into files that call them
// (CSS-module keyframe names are local to each file).
@mixin kf-fade-up($name: fadeUp) {
  @keyframes #{$name} {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

> **Not in the block on purpose** (design from the best existing copy first, then add): `tick-circle`, `accordion`, `dot-texture`, `marquee`, `card-theme` (see §10).
> **Removed from the first draft:** `section-pad` (D4), the 4/8/14/22 radius scale (D7), `eyebrow-pill` (D3), `container-wide/-xl` (D5), the `btn-primary / -on-dark / -white / -outline-on-dark` family (D8) and `$accent-hover*`.
> **Check `conversion*` expectations:** the repo may already have `container`, `belowDesktop`, `mobile` — if so merge, don’t duplicate (§1.1). Note the new `container` takes `$max` only; `conversion*` may call it differently.

### 4.2 Local definitions to delete once the global exists
- [ ] `@mixin stacked` ×5 in `mailMerge*` and `@mixin belowDesktop` ×4 in `wollongong*` → global `belowDesktop`
- [ ] local `$ink` (adelaide×3, goldCoast×4, apiProcess via `api.$ink`) → `$text-primary` (D6)
- [ ] local light-blue tokens: `$sky` (companiesCreation), `$accent-on-dark` (dashboardsDataSources, `_apiIntegration`), `$accent-bright` (templateHero, sqlComparison, sqlSecurityProof), `$tpm-accent` (thirdPartyMethods) → `$accent-on-dark`
- [ ] local `$line`/`$card-line` (adelaide*, api*, goldCoast*, darwin*) → `$line` (goldCoast `#e1e5ea` → `$line`; darwin `#eadfd2` stays local — D10)
- [ ] local `$bp-*` (bpa*) → existing breakpoint mixins
- [ ] local dark accents (`#034f72`, `#024d72`, `#03506f`, `#035878`, `#033a55`) → `$accent-dark`; local `$ink` / `$stone` navy → `$text-primary` — **no new local names** (D6)

### 4.3 `_apiIntegration.scss` → compatibility shim
Keep the seven `api*` modules working untouched while the globals take over; delete the file in Phase 6. It keeps api’s own section padding (D4) and delegates everything else.

```scss
// SHIM — keeps `@use "./apiIntegration" as api;` working while api* modules are migrated.
// Delete this file (Phase 6) once nothing references `api.`.
@use "./globals" as g;

$ink: g.$text-primary;           // was #0b2433 — see decision D6
$accent-on-dark: g.$accent-on-dark;
$line: g.$line;

// Section padding is NOT standardised (D4): keep api's own ladder exactly as it was.
@mixin section-pad {
  padding: 7rem 8rem;
  @include g.tablet { padding: 5.5rem 4rem; }
  @include g.phoneLandscape { padding: 4.5rem 1.5rem; }
  @include g.phone { padding: 4rem 1.25rem; }
}
@mixin inner { @include g.container; }
@mixin eyebrow($colour: g.$accent) { margin-bottom: 1.25rem; @include g.eyebrow($colour); }
@mixin heading($colour: g.$text-primary) { @include g.heading-main($colour); }
@mixin lede($colour: g.$text-secondary) { margin-top: 1.5rem; max-width: 62ch; @include g.lede($colour); }
@mixin arrow-link($colour: g.$accent) { @include g.arrow-link($colour); }
@mixin inline-link { @include g.inline-link; }
```
Compile-tested. Visible deltas vs today: eyebrow `.68rem/3px` → `.8rem/.06rem` and hidden ≤449px; heading `2.1/4vw/3.3rem/900` → `2.4/4.5vw/3.8rem/700`; inner `1280px → 1200px`; ink `#0b2433 → #0d1b2a`. Dark api sections that pass `$accent-on-dark` to `api.eyebrow` should pass `g.$eyebrow-on-dark` instead (`#ffffffbf`) — handle per file in P13.

### 4.4 Phase 1 checklist
- [ ] `@use "sass:color"; @use "sass:map";` added as the first lines
- [ ] Duplicate `$accent-border` (`.28`) and second `$text-*` block removed (zero change)
- [ ] §4.1 block appended (check the two `grep` hits for `container`/`belowDesktop`/`mobile` against §1.1)
- [ ] `$eyebrow-size` confirmed (A1) — **0.8rem** unless you say otherwise
- [ ] **Collision grep** for every new name: `grep -rnE '^\s*\$(accent-on-dark|accent-dark|accent-tint|eyebrow-[a-z-]+|line|line-strong|success|error[a-z-]*|radius[a-z-]*|shadow-[a-z-]+|container|gutter|heading-[a-z-]+|header-offset|scroll-offset)\s*:' $STYLES` and `grep -rnE '@mixin +(belowDesktop|belowDeskL|mobile|tabletUp|desktopUp|container|eyebrow[a-z-]*|heading-[a-z]+|card-title|lede|body-text|small-text|label|btn[a-z-]*|arrow-link|inline-link|visually-hidden|hide-on-phone)' $STYLES` — resolve every hit (rename/delete the local) before continuing
- [ ] `globals.scss` itself compiles to **empty CSS** (`npx sass globals.scss | wc -c` → 0)
- [ ] Whole-site snapshot re-run → **identical** to the baseline (Phase 1 must not change any file’s CSS)
- [ ] Commit: “globals: add type/layout/button tokens and mixins (no consumers yet)”

---

## 5. Replacement table — literal → token

“Zero” = identical value, diff must be empty. “≈” = small visible change (D#).

| Find | Replace with | Seen in (examples) | Change |
|---|---|---|---|
| `#046999`, `rgba(4,105,153,x)` | `$accent`, `rgba($accent, x)` | pageSegment*, newPageSegment*, isRightWord, promo, quote, payment (~30×), compare, flipBook (local `$accent`), popupFormsUseCases (`$brand`), microsoftSolutions (`$ms-theme`) | zero |
| `rgba(4,105,153,.28/.3)` | `$accent-border` | many | zero |
| `rgba(4,105,153,.08)` | `$accent-tint` | brisbane*, activex*, perthServices, apiByProduct, melbourne*, rebranding* (~15) | zero |
| `rgba(4,105,153,.15)` | `$accent-dim` | | zero |
| hand-written solid button (hub `.btn`, `.nicheBtn`, `.ctaBtn`, scrollBtn…; `color.adjust($accent,-8%)` hover) | `@include btn;` | 22 files (variants A/B, §10.9) | ≈ D8 |
| solid button on dark with `lighten 6%` hover | `@include btn;` | migrationHero, migrationPaths, migrationProcess, activexHero | ≈ D8 |
| `#777a7e` | `$darkGrayText` | pageSegment ×5, newPageSegment ×4, pageSegmentFinal ×4, promo, testimonialsCard, flipBook, isRight/Word; local `$grayText:#777a7e` in howWeWork/introduction/webCapabilities | zero |
| `#1e1e1e` | `$black` | blog, codeBlock, pageSegmentFinal ×4 | zero |
| `#1a1a1a`, `#1a1a2e`, `#111827`, `#0f1f2b`, `#0b2433` | `$black` / `$text-primary` | boxSegment, blogPost, boringStuff, howWeWork, introduction, compareContainer, microsoftSolutions, webCapabilities, adelaide* | ≈ D6 |
| `#333` | `$body` | boringStuff, blogPost, flipBook, ms365, refundPolicy, payment | zero |
| `#fff`, `#ffffff`, `white` | `$white` | ~50 files | zero |
| `#9a9da1` | `$text-muted` | bpaIntro ×2 | zero |
| `#c8cacd`, `#d4d6d9` | `$line-strong` | bpaIntro, copilotValue | ≈ |
| `#e3e8ec`, `#e1e5ea` | `$line` | adelaide*, api*, goldCoast* | zero / ≈ |
| `rgba(255,255,255,.9/.88/.75/.65/.55/.35/.18/.12/.08)` | `$white-90/88/75/65/55/35/18/12/08` | perthWhy, richmondWhy, brisbaneWhy, adelaideWhy, centralCoast*, goldCoastWhy, sydneyServices, bpaDocProcessing, copilotCta | zero |
| other white alphas (`.5 .45 .4 .78 .8 .84 .85 .92 .72 .7 .2 .22 .15 .04`) | nearest `$white-NN` or leave | many | ≈ |
| `rgba(0,0,0,.07/.08/.1)` borders | `$border` / `$border-strong` (.11) | automationMain ×4, faqSection, contents | ≈ |
| `0 8px 32px rgba(0,0,0,.07)` | `$shadow-card-hover` | cairnsServices, hub cards | zero |
| `0 20px 50px rgba(13,27,42,.06)` | `$shadow-panel` | accessDatabases, webDatabases | zero |
| `#0eaa0e` | `$success` | pageSegment, newPageSegment(4), pageSegment3/4/Center, boxSegment | zero |
| `rgb(0,193,0)`, `#4caf50`, `#28a745`, `#05a605` | `$success` | supportPage, payment, cookieConsent (accept hover) | ≈ D6 |
| `#04f904` (neon chips) | leave, document | appDevIntro | — |
| `rgb(202,13,13)`, `#df1c1c`, `#ff0909`, `#d32f2f` | `$replace-x` | expertsAwait ×2, pageSegment4 `.cross`, boxSegment, cookieConsent, payment | ≈ D6 |
| `#c53030 / #fff5f5 / #feb2b2` | `$error / $error-bg / $error-border` | contact | zero |
| `#6fc3e8`, `#5ba4c4`, `#7ec8e3`, `#4fb3e0`, `#4fb3e8`, `$sky`, `$accent-bright` | `$accent-on-dark` | adelaideServices, companiesCreation, dashboardsDataSources, customDevSection, migration*, sqlComparison, sqlSecurityProof, thirdPartyMethods, templateHero | ≈ hue |
| `rgba($accent,.9)` / `$accent-on-dark` as eyebrow colour on dark | `@include eyebrow-on-dark` (`#ffffffbf`) | ~12 pill eyebrows on dark sections | ≈ D3 |
| `#034e72`, `#034f72`, `#024d72`, `#03506f`, `#035878`, `#033a55` | `$accent-dark` | automationImpact, compareContainer, migrationPaths, webCapabilities, rdgCapabilities, popupFormsUseCases, migrationStack, centralCoast* | ≈ D6 |
| `#007bff`, `#0066cc`, `#0056b3` | `$accent` | refundPolicy, boringStuff, brands, payment gradient | ≈ off-brand fix |
| `border-radius: 2rem / 999px` (chips) | `$radius-pill` | ~45 | zero |
| `border-radius: .1rem` on buttons | `@include btn` (keeps `0.1rem`) | wipe buttons | zero |
| `border-radius: 2…26px / .2rem` on cards, panels, images, inputs | `$radius` (1.5rem) | ~300 declarations | ≈ D7 (visible) |
| `border-radius: 50%` (circles) · radii on tiny (≤2.5rem) tiles | leave | | — |
| `max-width: 1200px; margin: 0 auto` | `@include container` | ~99 | zero |
| `max-width: 1280px/1300px/1400px/1100px/1180px` | `@include container` | hubs, form-era, heroes | ≈ D5 (narrower) |
| `top: 130px` (sticky) | `$header-offset` | 9 files (§1.4) | zero |
| `padding: 7rem 8rem; @include tablet{…}…` (any section padding ladder) | **leave** | ~280 files | — (D4) |
| `padding-inline`/`padding: Xrem 6vw` (vw gutters, form-era, govDept, legacy `10vw`) | `$gutter` (10vw) | ~35 files | ≈ D12 |
| `font-size:.7rem/.68rem/.85rem; font-weight:700; letter-spacing:3px/2.5px/.08em; text-transform:uppercase; color:$accent` (any eyebrow recipe) | `@include eyebrow;` (dark: `eyebrow-on-dark`) | ~190 files | ≈ D3 (size, tracking, hidden ≤449px) |
| `font-size:clamp(1.9rem,3.2vw,2.75rem);font-weight:800;line-height:1.15;letter-spacing:-.025em` | `@include heading-section;` | 42 files | ≈ D2 (weight only) |
| `clamp(2.2…2.4rem, 4…4.5vw, 3.4…3.8rem)/900/1.1/-.03em` (hub, campaign, hero) | `@include heading-main;` | ~60 files | ≈ D1/D2 |
| identical `@include phone{X} @include phoneLandscape{X} @include tablet{X}` | `@include belowDesktop { X }` | ctaMain, expertsAwait, header, pageSegment3, contact… | zero when bodies are byte-identical |
| `@include phone{X} @include phoneLandscape{X}` | `@include mobile { X }` | contact, isRight*, footer, intro | zero |
| `@media (max-width:760/766/767/768/770px)` | `@include mobile` (≤766) | ~28 files | ≈ ≤4px window |
| `@media (max-width:1000/1024/1025/1040px)` | `@include belowDesktop` | | ≈ |
| `@media (min-width:1200px)` / `(max-width:1200px)` | `deskL` / `belowDeskL` (≤1199) | contentsComponent, header | ≈ 1px |
| any other h2 clamp / fixed h2 (2–3.5rem at 700/800/900) | `heading-section` (or `heading-main` per the §9 Target) | ~200 files | ≈ D1/D2 |
| 5 hand-written clip/1px blocks (`.srOnly`, `.visuallyHidden`…) | `@include visually-hidden` | businessAnalysisProof, cookieConsent, corporateIdentityComparison ×2, databaseChooser | zero |

---

## 6. Safety rules (the “don’t break the other components” list)

1. **Normalise the `@use` line once, up front, in its own commit** — three forms exist (`"./globals.scss"` ~300 files, `"./globals"` ~45, bare `"globals"` ~8 — run the §2.3 grep for exact counts). Use the dominant form and touch nothing else: `sed -i -E 's#@use +"(\./)?globals(\.scss)?"#@use "./globals.scss"#' $STYLES/*.module.scss` (skip `_apiIntegration.scss`). `git diff --stat` must show exactly one changed line per file.
2. **Add before you use.** A token/mixin must exist in `globals.scss` (committed) before any file references it.
3. **Never change an existing token’s value in a migration commit.** 300+ files read those tokens. Changing a *new* standard (e.g. `$eyebrow-size`) is a `globals.scss`-only commit, followed by a snapshot diff of the families already migrated.
4. **Collision check for every new global name** (§4.4 grep) — a same-named local variable silently overrides the global (§1.5).
5. **Same selector, same specificity.** Replace declarations *inside* the existing rule with an `@include`; don’t rename, merge or hoist selectors, and don’t change nesting.
6. **Mixins that emit `@media` go last in the rule** (§1.6).
7. **Class names are an API.** Do not rename or delete a class unless the entry says so and you have grepped TSX for `styles.name`, `styles['name']` and `:global(...)` usage (§2.3).
8. **Dark sections: pass the colour explicitly.** Mixin defaults assume a light background (`$text-primary`, `$accent`). On dark sections write `@include heading-section($white-90)`, `@include eyebrow-on-dark`, and `@include btn` (works on dark) — or `btn-on-accent` only when the section background *is* `$accent`.
9. **One kind of change per commit:** (a) literal → token, (b) mixin swap, (c) dead-code removal, (d) bug fix. Because your decisions change values, a family’s mixin-swap commit **is** the visual change (D1–D9, D12): keep it to one family and list the deltas in the message. A bug fix inside a swap commit makes the diff unreadable and the revert impossible.
10. **Don’t convert px↔rem, don’t reorder properties, don’t reformat** in the same commit as a swap — it defeats the CSS diff.
11. **No `@extend`, no placeholders, no selectors, no top-level `@keyframes` in `globals.scss`.**
12. **Before unifying keyframes, diff their bodies.** `bounce` exists in `ctaMain`, `expertsAwait`, `mobileNav`, `scrollIndicator` with *different* values; `fadeUp` exists in ≥3 files; `fadeSlideUp` also in `animate.module.scss`.
13. **Preserve each file’s line endings** (§1.6).
14. **If a swap changes the compiled CSS in a way that is not on the §2.1 “allowed lines” list, stop.** Revert that file, find the difference (usually a local override, a different line-height, or a missing `margin-bottom`), and add it back *locally* after the `@include`.
15. **Don’t touch ✋ files** beyond what their entry lists (§12).
16. **Re-snapshot after each accepted visual change**, so the next diff isolates the next change.

---

## 7. Per-file procedure (copy into your commit checklist)

1. [ ] Open the file; read its entry in §9 (Target / Now / Notes).
2. [ ] `@use` line normalised (rule 1) and, if the file shadows globals (§1.5), delete the shadowing locals **one at a time** and run `check` after each.
3. [ ] **Section padding: leave it (D4).** Only change a vw-based horizontal gutter → `$gutter` (D12) when the Target line says so; 🔒 files keep theirs.
4. [ ] **Container:** `max-width:…; margin:0 auto` → `@include container;` (1200px, D5); leave text-measure widths (≤900px).
5. [ ] **Eyebrow / pre-heading / `.sub` / `.box`:** replace size/weight/tracking/uppercase/colour with `@include eyebrow;` (dark: `eyebrow-on-dark`) *after* the file’s own `margin-bottom`; delete the file’s own phone `display:none` (the mixin hides it); keep a `.sub`/`.box` border-bottom + `fit-content` local; other pre-heading lines → `@include hide-on-phone`.
6. [ ] **Headings:** `h2` → `heading-main | heading-section` per the Target line (weight becomes 700); h3/card titles → `card-title(sm|md|lg)` only when the size already matches (±0.05rem), else leave and note it.
7. [ ] **Body text:** `lede`, `body-text`, `small-text` only where size & line-height already match; don’t chase every 0.02rem.
8. [ ] **Micro-labels:** `.tag/.label/.stat…` (0.62–0.8rem, 1–3px tracking) → `label($colour)` — **one commit per family**, these are the most numerous and the least visible.
9. [ ] **Buttons/links:** local solid/wipe buttons and the unstyled `.primary/.cta` → `@include btn;` (on an `$accent` section: `btn-on-accent`), remove the `btn` class from the TSX and any `:hover{border…}` hack in the same commit; outline buttons stay (A4); links → `arrow-link` / `inline-link` (§10.8–10.9).
10. [ ] **Colours/radii:** literals → tokens per §5; cards/panels/images/inputs → `$radius`, chips → `$radius-pill`, circles and buttons untouched (D7).
11. [ ] **Raw media queries:** swap only the near-boundary ones (§5); leave `max-height`, ≥1240px and component-specific queries.
12. [ ] `check <prefix>` → every changed line is on the §2.1 allowed list. Paste the summary into the commit message and tick the matching D#.
13. [ ] Screenshot the page at the 8 widths (§2.2) and compare with `before` — focus on heading wrap, section spacing and anything 🔒.
14. [ ] `git diff --stat` shows only this file; line endings unchanged.

---

## 8. Phases & gates

### 8.1 Phases
- [x] **Phase 0 — Prep:** decisions D1–D13 answered (§3); `global.css` received (§1.2).
- [ ] **Phase 0b — Safety net** (§1.1, §2): resolve §1.1 against the real repo, CSS snapshot, screenshot baseline.
- [ ] **Phase 1 — Standard rules** (§4): append the §4.1 block to `globals.scss` (additive; snapshots identical), then the zero-change cleanups (rule 1, duplicate `$accent-border`/`$text-*`).
- [ ] **Phase 2 — Pilot and freeze:** migrate **P01 `northernNsw*`** (7 files, one template) with the §7 procedure; review diff + screenshots together; adjust token values if needed (e.g. `$eyebrow-size`, tiers) and **freeze the rules**. Nothing else starts before this.
- [ ] **Phase 3 — Family migration** (§9 in order): P02–P04 first, then the rest. Within each family: container → eyebrow → headings → labels → buttons/links → colours/radii. One family per commit.
- [ ] **Phase 4 — Global clean-up:** when `grep` shows no TSX using the `btn` class (§2.3), delete `.btn` from `global.css`; set global `h1` weight to 700; re-check unstyled headings.
- [ ] **Phase 5 — Cross-file duplicate patterns** (§10): accordion, tick, arrow-link, marquee, dot-texture, card-theme, form fields, keyframes.
- [ ] **Phase 6 — Final cleanup:** delete `_apiIntegration.scss` shim (swap `api.x` → `x`), remove leftover locals, fix bugs (§11, each its own commit), run §14.

### 8.2 Commit hygiene
- Branch per phase; commit per family (Phase 3) or per pattern (Phase 5).
- Commit message: `styles(<family>): <what>` + the compiled-diff summary (e.g. `weight 800→700; eyebrow .7→.8rem; radius →1.5rem`).
- Keep `.css-baseline` outside git (or in a separate untracked folder).

### 8.3 Family gate (tick before moving on)
- [ ] `check <prefix>` for every file in the family reviewed (only §2.1 allowed lines, or explained)
- [ ] Screenshots at 360 / 420 / 600 / 900 / 1100 / 1199 / 1200 / 1440 compared; no new wraps, overlaps or collapsed gaps
- [ ] 🔒 items verified by eye (negative margins, sticky offsets, `-8rem` pseudo-elements, header clearance)
- [ ] `grep -rn` for the family’s deleted classes in TSX returns nothing
- [ ] Line endings and `git diff --stat` sane
- [ ] Committed; re-snapshot baseline for the family

---

## 9. Page checklists — work top to bottom

Each family is one page (or one group of pages). Finish a whole family before starting the next, run the family gate (§8.3), commit, then tick the family in the tracker.

**Reading a file entry:** `Target` is the recommended replacement (per the answered decisions in §3); `Now` is what the file contains today (from the audit); `Notes` are traps, duplicates and probable bugs. 🔒 = coupled to layout/header height, handle with care · ✋ = leave alone / tokens only · 🐞 = probable bug (fix in a separate commit).

### 9.0 Family tracker

| ✔ | ID | Family | Files |
|---|----|--------|-------|
| [ ] | P01 | northernNsw* — clean reference template (migrate FIRST) | 7 |
| [ ] | P02 | Service-page singles (AI-era standard) | 12 |
| [ ] | P03 | thirdParty* — cleanest family (descendant selectors) | 10 |
| [ ] | P04 | sql* — SQL Server page | 8 |
| [ ] | P05 | aiAgents* — AI Agents page | 7 |
| [ ] | P06 | aiTemplates* — AI Templates page | 7 |
| [ ] | P07 | appDev* — App Development page | 5 |
| [ ] | P08 | businessAnalysis* — Business Analysis page | 7 |
| [ ] | P09 | dashboards* — Dashboards page | 5 |
| [ ] | P10 | access* / database* — Access & database pages | 4 |
| [ ] | P11 | emailTriage* — Email Triage page | 9 |
| [ ] | P12 | corporateIdentity* + caseStudyCallout | 4 |
| [ ] | P13 | api* — Microsoft 365 API Integration page (shared partial) | 7 |
| [ ] | P14 | migration* — Upgrades & Migration page | 8 |
| [ ] | P15 | mailMerge* — Mail Merge page | 5 |
| [ ] | P16 | automation* — Automation page (outlier scale) | 4 |
| [ ] | P17 | conversion* — Conversion page (new system; needs missing mixins) | 6 |
| [ ] | P18 | template* — Word Templates page | 8 |
| [ ] | C_adelaide | Adelaide hub | 4 |
| [ ] | C_brisbane | Brisbane hub | 4 |
| [ ] | C_cairns | Cairns hub | 5 |
| [ ] | C_canberra | Canberra hub | 4 |
| [ ] | C_centralCoast | Central Coast hub | 4 |
| [ ] | C_goldCoast | Gold Coast hub | 4 |
| [ ] | C_melbourne | Melbourne hub | 4 |
| [ ] | C_perth | Perth hub | 4 |
| [ ] | C_richmond | Richmond hub | 4 |
| [ ] | C_sydney | Sydney hub | 4 |
| [ ] | C_wollongong | Wollongong hub | 4 |
| [ ] | C_darwin | Darwin (themed) hub | 4 |
| [ ] | H01 | bpa* + activex* — BPA & ActiveX pages | 11 |
| [ ] | H02 | rdg* + webCapabilities — RDG / Web capabilities | 5 |
| [ ] | H03 | rebranding* — Rebranding page | 5 |
| [ ] | H04 | copilot* — Copilot page | 7 |
| [ ] | H05 | googleMigration* — Google → Microsoft migration page (bento) | 6 |
| [ ] | H06 | powerPoint* (Intro/Automation/Redesign/Support/Templates) | 5 |
| [ ] | H07 | query* — Query page | 4 |
| [ ] | H08 | companies* — Companies page (clamp-padding era) | 5 |
| [ ] | H09 | toolbars* — Toolbars page (clamp-padding era) | 6 |
| [ ] | H10 | Case studies | 3 |
| [ ] | H11 | Hub singles | 4 |
| [ ] | F01 | Form-era pages (form*, popupForms*, quickParts*, proposalAssistantDemo, fillFormMain) | 16 |
| [ ] | F02 | govDept* — Government departments page | 5 |
| [ ] | A01 | accessibility* — Accessibility page | 4 |
| [ ] | L01 | Legacy page segments | 16 |
| [ ] | L02 | Legacy CTAs, FAQ, contact | 7 |
| [ ] | L03 | Blog, policy & misc content | 8 |
| [ ] | L04 | Locations, team & testimonials | 21 |
| [ ] | L05 | Footer & site chrome | 15 |
| [ ] | X01 | Structural / leave-alone (✋) | 15 |
| | | **Total** | **340** |

### 9.1 Service-page families (AI-era standard) — start here

#### P01 · northernNsw* — clean reference template (migrate FIRST)  (7 files)

Seven files built from one identical template (`.inner / .header(gap 1.1rem, 46rem) / .eyebrow / .heading / .headingAccent / .lead`). Already the closest thing to the target design — the swap should produce an EMPTY compiled-CSS diff apart from the h2 clamp (3.2vw/2.75rem is already the section tier).

**Recipe**
- Use these 7 files to prove the mixins: swap, compile, diff against baseline (§2.1) — the diff must be empty or whitespace only.

**Watch**
- `northernNswAi` / `northernNswStory` are dark: pass `$white-90` / `$white-65` to the mixins rather than writing new rules.
- They `@use "./globals"` (no extension) — normalise the `@use` line first (§6 rule 1).

- [ ] `northernNswResilience.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.title 1.2/800` · body `.lead 1/1.8; .text .95/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `766 (+tablet mixin)`
  - **Notes:** AI-era CLEAN REFERENCE (northernNsw* x7 all identical template: .inner/.header(gap1.1rem,46rem)/.eyebrow/.heading/.headingAccent/.lead); border-top 3px $border-strong columns; link .9/700 underline hover
- [ ] 🔒 `northernNswAi.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$white-65 plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em $white-90` · h3 `.itemTitle 1.15/700` · body `.text 1/1.8; .itemText .92/1.65; .example .95/1.65` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `12px` · raw @media `766`
  - **Notes:** AI-era dark; .headingAccent = $white-55 (dim instead of accent); .listTitle .7/700/3px $white-55
- [ ] `northernNswFaq.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.question 1.05/700` · body `.answer .95/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `766`
  - **Notes:** FAQ #~12: <details> with ::after "+" / "\2212"; grid 1fr 1.6fr
- [ ] `northernNswIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `.headline clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.wayTitle 1.1/800` · body `.text 1/1.8; .wayText .92/1.65` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `4px` · raw @media `766`
  - **Notes:** AI-era; .waysTitle .7/700/3px $text-muted; inline .link accent/700
- [ ] 🔒 `northernNswPlatforms.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.name clamp(1.25rem,2vw,1.6rem)/800` · body `.text .95/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · raw @media `766`
  - **Notes:** AI-era; .num .85/800/.05em; .link .9/700 underline hover
- [ ] `northernNswRegions.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.name clamp(1.3rem,2vw,1.6rem)/800` · body `.body .95/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `4px,999px` · raw @media `1024`
  - **Notes:** AI-era; uses $shadow-row (good token use); .places .8/700/.04em; .use pill .75/700; .nearbyLabel .7/700/3px
- [ ] `northernNswStory.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$white-65 plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em $white-90` · h3 `.value clamp(2.25rem,4vw,3.25rem)/800/-0.03em` · body `.text 1/1.8; .label .95/1.6` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `766`
  - **Notes:** AI-era dark; .headingAccent $white-55; .link $white-90 .5px/700

- [ ] **P01 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P02 · Service-page singles (AI-era standard)  (12 files)

Single-section components that already follow the AI-era recipe (eyebrow 0.7rem/700/3px, h2 clamp(1.9rem,3.2vw,2.75rem)/800, `7rem 8rem` padding, 1200px inner).

**Recipe**
- `powerPlatformSection` and `powerPointSection` have the SAME header — they should end up with identical mixin calls.

**Watch**
- `wordSection` already uses weight 700 — the new site standard.
- `webDatabases` is a widget (dot-grid canvas, console) — tokenise type/colour only.
- Several use `scroll-margin-top: 4rem` while other families use 150px/6rem — see §10 "scroll offsets" before changing.

- [ ] `groupIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.serviceTitle 1.15 ; .itemTitle 1.1/800` · body `.text 1/1.8; .itemText .9/1.65` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `50%` · raw @media `766`
  - **Notes:** AI-era standard; .listTitle/.overviewTitle .7/700/3px $text-muted; border-top 3px $border-strong cards; .cta unstyled
- [ ] 🔒 `microsoft365Section.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.pillarTitle 1.35/800` · body `.intro 1/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `999px`
  - **Notes:** AI-era standard; header gap 1.1rem max 46rem; .pillar border-top 4px $accent; .tag pill .7/600 $accent-light
- [ ] 🔒 `customDevSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.lineTitle .95/600` · body `.intro 1/1.8; .lineText .85` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `10px,4px,50%` · raw @media `766` · literals `#ff5f57 #febc2e #28c840 (macOS dots); #5ba4c4 x2 (another light-blue; vs #6fc3e8)`
  - **Notes:** .chip monospace .8 radius 4px; terminal panel; icon 3rem
- [ ] 🔒 `excelSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.rowTitle 1.15` · body `.text 1/1.8; .rowText .92/1.6` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `3px,50%` · raw @media `766 (+tablet mixin)`
  - **Notes:** .siteLink .85/700 3px (btn variant); sticky intro top:6rem; .icon 3rem (dup customDevSection); CSS counter rows
- [ ] `powerPlatformSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain (not hidden)` · h2 `clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `tileTitle 1.25/800/-.015em` · body `intro 1/1.8` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `1200` · radius `4/999` · raw @media `766` · literals `rgba(4,105,153,.1)`
  - **Notes:** AI-era std; powerPoint*/powerPlatform page group mixes 7rem and 8rem padding and 3 h2 clamps
- [ ] `powerPointSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain (not hidden)` · h2 `clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `slideTitle 1.05/800` · body `intro 1/1.8` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `1200` · radius `6` · literals `rgba(4,105,153,.08) shadow`
  - **Notes:** same header as powerPlatformSection (could share heading mixin)
- [ ] 🔒 `wordSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark
  - **Now:** eyebrow `.7/700/3px white-65` · h2 `clamp(1.9,3.2vw,2.75rem)/700/1.15/-.025em white` · h3 `sheetTitle 1.15/800` · body `intro 1/1.8` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `1200` · literals `rgba(0,0,0,.18) shadow`
  - **Notes:** section bg $accent; heading weight 700 outlier (AI-era = 800); .accent {color:black; margin-bottom:-.8rem} odd; commented-out dead CSS in .sheetDesc; scroll-margin-top 4rem; fold corner gradient
- [ ] `servicesFaq.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `question 1.05/700` · body `answer .98/1.8` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `52rem`
  - **Notes:** AI-era; <details> accordion +/– (::after) = dup of sqlFaq
- [ ] `lockedFormatting.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `none (global h2/p)` · h2 `inherits global` · h3 `.callout 1.15/700` · body `.lead lh1.8` · pad `7rem 8rem 0 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `999px` · raw @media `1024 x2`
  - **Notes:** chip pill .9/600 $accent-light/$accent-border; .comic uses $replace-x (good); :global(.lfFloat) etc; @keyframes float/lock
- [ ] ✋ 🔒 `webDatabases.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `entityName 1/700` · body `p lh1.8; entityText .88/1.7` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `1200` · radius `12/8` · raw @media `1024,766` · literals `rgba(13,27,42,.06) shadow`
  - **Notes:** scroll-margin-top 4rem; dot-grid canvas radial-gradient 18px; monospace stack
- [ ] `aiAutomationSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$white-65` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.tileTitle 1.15rem/700; .featuredTitle clamp(1.5rem,2.4vw,2rem)/800` · body `.intro 1rem/1.8; .tileText 0.92rem/1.7` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `12px,3px,999px` · raw @media `766px`
  - **Notes:** .featuredLink 0.85rem/700 local btn
- [ ] `aiBusinessData.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.capability h3 1.15rem/700` · body `header p lh1.8; capability p 0.95rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `16px` · raw @media `1024px`
  - **Notes:** figcaption 0.82rem

- [ ] **P02 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P03 · thirdParty* — cleanest family (descendant selectors)  (10 files)

Ten files styled via `.header h2` / `.content h2` descendant selectors rather than classes. Heading, eyebrow and padding are already the section standard.

**Recipe**
- Because headings are targeted by descendant selector, `@include heading-section;` goes inside `.header h2 { … }` — no JSX change needed.

**Watch**
- `thirdPartyMethods` declares local `$tpm-*` tokens incl. `$tpm-accent: #4fb3e8` (7th accent-on-dark) and a dead `.item:hover::before` rule.
- Padding mixes `6rem 8rem` and `7rem 8rem` within the one family — leave as is (D4: section padding stays local).

- [ ] `thirdPartyIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain)
  - **Now:** eyebrow `pill .7/700/3px (phone ls 1.5px) not hidden` · h2 `.content h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em (DESCENDANT selector, no class)` · body `p 1/1.8; stat strong 1.5/800` · pad `6rem 8rem (5/4,4.5/2,4.5/1.25)` · max-w `1200`
  - **Notes:** thirdParty* (12 files) style headings via .header h2 / .content h2 descendant selectors; cleanest family
- [ ] `thirdPartyAiIntegration.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain (phone ls 1.5)` · h2 `.content h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `card h3 1.15rem` · body `p 1/1.8; card p .92/1.6` · pad `6rem 8rem (5/4,4.5/2,4.5/1.25)` · max-w `1200` · radius `12`
  - **Notes:** .note border-left 4px accent on $accent-light
- [ ] `thirdPartyCaseStudies.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain inline-block` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `card h3 1.2rem` · body `connection .95/1.7` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `1200` · radius `12`
  - **Notes:** stat strong 1.3rem/800; auto-fit grid no breakpoints
- [ ] `thirdPartyMethodComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain inline-block` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `thead th .72/700/1.5px` · body `td .92/1.65 font-family var(--font-aptos)` · pad `7rem 8rem` · max-w `1200` · radius `12`
  - **Notes:** table min-width 800 scroll wrapper
- [ ] `thirdPartyFaq.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `summary 700` · body `p .95/1.7` · pad `6rem 8rem (5/4,4.5/2,4.5/1.25)` · max-w `56rem` · radius `12`
  - **Notes:** details-as-card accordion (3rd visual style vs +/– rows)
- [ ] `thirdPartyMethods.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision)
  - **Now:** h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em $tpm-text` · h3 `h3 1.4rem/800` · body `p .95/1.7` · pad `6rem 8rem (5/4,4.5/2,4.5/1.25)` · max-w `1200` · literals `LOCAL tokens $tpm-bg #111820 (=$dark-bg), $tpm-text #eef2f6, $tpm-muted #9aa9b8, $tpm-line, $tpm-accent #4fb3e8 (7th accent-on-dark, ~#4fb3e0 sqlComparison), $tpm-hover`
  - **Notes:** DEAD RULE .item:hover::before scaleY but no ::before defined; prefers-reduced-motion block; stretched-link ::after pattern
- [ ] `thirdPartyPlatforms.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain; groupHeading .85/700/.06em` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `card h4 1.15rem` · body `p .95/1.7` · pad `6rem 8rem` · max-w `1200` · radius `12`
  - **Notes:** auto-fit cards
- [ ] `thirdPartyProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.7/700/3px plain` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `step h3 1.15rem; counter 1.4rem/800 $accent-border` · body `p .95/1.65` · pad `6rem 8rem` · max-w `1200`
  - **Notes:** CSS counter step numbers (decimal-leading-zero)
- [ ] `thirdPartySecurity.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain inline-block` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `card h3 1.15rem` · body `p .95/1.7` · pad `7rem 8rem` · max-w `1200` · radius `12`
  - **Notes:** bg $grayBGC
- [ ] `thirdPartyWorkedExample.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px white-65 inline-block` · h2 `.header h2 clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em white-88` · h3 `projectTitle 1.4rem; h4` · body `p .95/1.7` · pad `7rem 8rem` · max-w `1200` · radius `12`
  - **Notes:** stat strong 1.8rem/800; link white-90 underline offset 4px

- [ ] **P03 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P04 · sql* — SQL Server page  (8 files)

Eight files, AI-era standard. Two (`sqlComparison`, `sqlSecurityProof`) share a local `$accent-bright: #4fb3e0`.

**Recipe**
- Replace `$accent-bright` with `$accent-on-dark` (§4) in both files in the SAME commit as adding the token.

**Watch**
- `sqlServerAzure` is a console widget — leave layout alone.
- `sqlHero` top padding clears the fixed header (`8rem 7rem`, tablet `9rem …`) — keep the top value, only swap the side values/ladder if you want.

- [ ] 🔒 `sqlBenefits.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3vw,2.6rem)/800/1.15/-.025em` · h3 `rowTitle 1.5rem/800/-.02em` · body `lead 1/1.8; summary .98/1.75` · pad `7rem 8rem (6/4,5/2,5/1.25)` · max-w `1200` · radius `10` · raw @media `1024`
  - **Notes:** AI-era; sticky top 7rem; dash bullet
- [ ] `sqlComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** h2 `clamp(1.9,3vw,2.6rem)/800/1.15/-.025em` · h3 `thead th 1.05/800; tbody th .72/700/2px` · body `lead/body 1/1.8` · pad `7rem 8rem` · max-w `1200` · radius `14` · raw @media `1024` · literals `local $accent-bright #4fb3e0 (comment says not in globals)`
  - **Notes:** 6th accent-on-dark variant (#4fb3e0); CSS-drawn cross/tick via content \00D7 \2713 (another tick impl); $replace-x used
- [ ] `sqlFaq.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3vw,2.6rem)/800/1.15/-.025em` · h3 `question 1.05/700` · body `answer .95/1.8` · pad `7rem 8rem` · max-w `52rem`
  - **Notes:** +/– details accordion dup; :focus-visible outline present (few files have it)
- [ ] 🔒 `sqlHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .7/700/3px (phone ls 1.5px) NOT hidden` · h2 `clamp(2.3,4.4vw,3.4rem)/800/1.08/-.03em` · body `lead 1.05/1.8` · pad `8rem 7rem (tablet 9rem 4rem 6rem; landscape 8rem 2rem 5rem; phone 7rem 1.25rem 4rem)` · max-w `1200` · radius `2rem` · raw @media `1024`
  - **Notes:** top padding clears fixed header; .primary relies on GLOBAL .btn + border hover hack; .secondary outlined btn .88rem 3px radius
- [ ] `sqlOffice.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3vw,2.6rem)/800/1.15/-.025em` · h3 `cardTitle 1.1/800` · body `lead 1/1.8; body .92/1.75` · pad `7rem 8rem` · max-w `1200` · radius `6` · raw @media `1024,766`
  - **Notes:** links a::after ' \2192' arrow pattern
- [ ] 🔒 `sqlProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3vw,2.6rem)/800/1.15/-.025em` · h3 `stepTitle 1/700; stepNum 2.6rem/800` · body `stepBody .88/1.75` · pad `7rem 8rem` · max-w `1200` · raw @media `1024,766`
  - **Notes:** scroll-margin-top 6rem (others 4rem/150px)
- [ ] `sqlSecurityProof.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px white-65` · h2 `clamp(1.9,3vw,2.6rem)/800/1.15/-.025em $white` · body `lead 1.05/1.8` · pad `7rem 8rem` · max-w `1200` · radius `6` · raw @media `1024` · literals `local $accent-bright #4fb3e0`
  - **Notes:** stat clamp(3.5,6,5)/800; same local token as sqlComparison
- [ ] ✋ 🔒 `sqlServerAzure.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `h3 1.15/700` · body `p .95/1.8` · pad `7rem 8rem` · max-w `1200` · radius `12` · raw @media `1024`
  - **Notes:** console widget; monospace font stack; scroll-margin-top 4rem

- [ ] **P04 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P05 · aiAgents* — AI Agents page  (7 files)

Seven files. h2 is `clamp(1.9rem,3vw,2.6rem)/800` (a hair smaller than the 3.2vw standard).

**Recipe**
- ≈ 3vw/2.6rem → 3.2vw/2.75rem adds ≤2px at desktop widths; accept.

**Watch**
- `aiAgentsHero` side padding is 6rem (family standard 8rem) and has `!important` on `.actions a`.
- `aiAgentsUseCases` has no `.eyebrow` (uses `.useCase`) — decide whether it gets one.
- `aiAgentsProblem` h2 `2rem/4vw/3.2rem` is larger than its siblings — hero-like? check page.

- [ ] `aiAgentsComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container`
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.colName 1.1rem/800` · body `.lead 1rem/1.8` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px`
  - **Notes:** font var(--font-aptos); th 0.72rem/1.5px; td 0.9rem
- [ ] `aiAgentsCapabilities.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.itemTitle 1rem/700` · body `.itemBody 0.88rem/1.7` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px,766px`
- [ ] `aiAgentsGovernance.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container`
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · body `.lead 1rem/1.8` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px,766px`
  - **Notes:** .layerName 0.72rem/2px; .layerBody 0.9rem
- [ ] `aiAgentsProblem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → (no eyebrow — micro-label → `label`) · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it)
  - **Now:** eyebrow `none (.label 0.7rem/700/3px/yes/$white-55)` · h2 `clamp(2rem,4vw,3.2rem)/800/1.1/-` · body `.body 0.95rem/1.8` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1400px` · raw @media `766px`
  - **Notes:** .statement 1.35rem/700; .symptomTitle 1.05rem/700
- [ ] `aiAgentsHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(2.2rem,4.2vw,3.3rem)/800/1.08/-0.03em` · body `.lead 1rem/1.8` · pad `padding 8rem 6rem (tab 6/4/5; pl 5/2/4; ph 4.5/1.25/4)` · max-w `1200px` · radius `3px` · raw @media `1024px`
  - **Notes:** !important text-transform on .actions a; local .secondary btn 0.88rem/700; 6rem side pad differs from 8rem std
- [ ] `aiAgentsProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.stepTitle 1.1rem/700` · body `.lead 1rem/1.8; .stepBody 0.92rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `50%` · raw @media `1024px`
  - **Notes:** .stepNum 0.95rem/800 badge
- [ ] `aiAgentsUseCases.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.useCase 0.7rem/700/2px/yes/$accent (no .eyebrow)` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.rowTitle 1.4rem/800/-0.015em; .moreHeading 1.1rem/700` · body `.lead 1rem/1.8; .rowBody 0.95rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `4px` · raw @media `1024px,766px`
  - **Notes:** .textLink local arrow-link 0.88rem; .afterValue 1.6rem/800; .measureLabel 0.75rem/1px

- [ ] **P05 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P06 · aiTemplates* — AI Templates page  (7 files)

Seven files, same recipe as aiAgents*. Mostly zero-eyebrow sections.

**Watch**
- `aiTemplatesHero` declares `.secondary` twice and hand-rolls two buttons.
- `aiTemplatesRogue`/`aiTemplatesReality` use `rgba($before-border, .55/.7)` — add a token only if reused elsewhere.

- [ ] `aiTemplatesAgents.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container`
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.agentTitle 1.05rem/700` · body `.lead 1rem/1.8; .agentBody 0.9rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px,766px`
- [ ] `aiTemplatesProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.stepTitle 1rem/700` · body `.stepBody 0.88rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px,766px`
  - **Notes:** .stepNum 2.6rem/800
- [ ] `aiTemplatesComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · body `.lead/.body 1rem/1.8; table 0.88rem/1.6` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `6px` · raw @media `1024px`
  - **Notes:** thead th 0.85rem; font var(--font-aptos); .rule 1.05rem/700
- [ ] `aiTemplatesHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.7rem/700/3px (phone 1.5px)/yes/$accent` · h2 `clamp(2.3rem,4.4vw,3.4rem)/800/1.08/-0.03em` · body `.lead 1.05rem/1.8` · pad `padding 8rem 7rem (tab 9rem 4rem 6rem; pl 8/2/5; ph 7/1.25/4)` · max-w `1200px` · radius `3px,2rem` · raw @media `1024px`
  - **Notes:** local .primary/.secondary buttons 0.88rem/700; .secondary declared twice
- [ ] `aiTemplatesReady.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.featureTitle 1rem/700` · body `.lead 1rem/1.8; .featureBody 0.9rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `2rem` · raw @media `1024px,766px`
  - **Notes:** .link pill 0.85rem/600; .note 1rem/600
- [ ] `aiTemplatesReality.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container`
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.itemTitle 1.1rem/700` · body `.lead 1rem/1.8; .itemBody 0.95rem/1.75` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `766px`
  - **Notes:** rgba($before-border,.55)
- [ ] `aiTemplatesRogue.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container`
  - **Now:** h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.itemTitle 1rem/700` · body `.lead 1rem/1.8; .itemBody 0.9rem/1.7` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px`
  - **Notes:** .accent uses $darkGrayText; rgba($before-border,.7)

- [ ] **P06 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P07 · appDev* — App Development page  (5 files)

Five files. `.link` + `::after` arrow is copy #1–#4 of the same arrow-link (also `businessAnalysisAreas`).

**Recipe**
- Replace each local `.link` with `@include arrow-link;` — check whether it relies on `::after` text arrow vs svg.

**Watch**
- `appDevIntro`: `.dark, .accentTile &` selector is only half-nested (likely a bug); neon green `#04f904` chips have no token.

- [ ] `appDevIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.problemTitle 1.05rem/700; .value clamp(1.6rem,2.4vw,2.1rem)/800` · body `.text 1rem/1.8; .problemBody 0.9rem/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `6px,4px` · raw @media `1024px,766px,1025px` · literals `#04f904 x2 (neon green chips, no token)`
  - **Notes:** BUG? `.dark, .accentTile &` selector only half-nested; .link 0.88rem/700 + ::after arrow (dup x4: appDevIntro/PortalList/Process/Stack); .label 0.68rem/2px
- [ ] `appDevPortalList.module.scss`
  - **Target:** eyebrow → — (none today; don’t add without a content decision)
  - **Now:** h3 `.title 1.05rem/700` · body `.desc 0.9rem/1.75` · pad `none (list only)`
  - **Notes:** .tag 0.68rem/700/2px $darkGrayText; .link dup arrow
- [ ] `appDevPortals.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · body `.lead 1rem/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px`
- [ ] `appDevProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.stepTitle 1.05rem/700` · body `.lead 1rem/1.8; .stepBody 0.9rem/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `50%` · raw @media `1024px`
  - **Notes:** .link dup arrow
- [ ] `appDevStack.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.itemTitle 1.05rem/700` · body `.lead 1rem/1.8; .itemBody 0.9rem/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024px,766px`
  - **Notes:** .link dup arrow; .inline link style 3rd variant

- [ ] **P07 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P08 · businessAnalysis* — Business Analysis page  (7 files)

Seven files, h2 `1.9/3.2vw/2.7rem` (0.05rem off the standard).

**Watch**
- `businessAnalysisHero`: `.primary` has no padding/font (relies on a global `button`/`.btn` rule outside the Project); fixed `img width:900px`; raw `770px` vs `phone` mixin mismatch.
- `businessAnalysisComparison` is `display:none` ≤770px and has no tablet/phone padding steps.
- `businessAnalysisProof` has a local `.visuallyHidden` — replace with the mixin.

- [ ] `businessAnalysisAreas.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.7rem)/800/1.15/-0.025em` · h3 `.name 1.05rem/800` · body `.lead 1rem/1.8; .body 0.92rem/1.7` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024,766`
  - **Notes:** .link 0.88rem/700 + ::after arrow (5th copy of appDev .link)
- [ ] `businessAnalysisComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.7rem)/800/1.15/-0.025em` · body `.lead 1rem/1.8; table 0.9rem/1.55` · pad `7rem 8rem (NO tablet/phone steps; section display:none <=770px)` · max-w `1200px` · radius `8px` · raw @media `770px`
  - **Notes:** thead th 0.8rem/700/1px; table font var(--font-aptos)
- [ ] `businessAnalysisHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL (hidden <=770px)` · h2 `clamp(2.3rem,4.6vw,3.6rem)/800/1.06/-0.035em` · body `.lead 1.05rem/1.8` · pad `7rem 7rem (tab 6/4; pl 5/2; ph 4/1.25)` · max-w `1400px` · radius `3px,2rem` · raw @media `1024,770`
  - **Notes:** .primary has NO padding/font (relies on global button?); .secondary 0.88rem/700 3px; img width:900px fixed; 770 vs phone mixin mismatch
- [ ] `businessAnalysisProblem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$white-55` · h2 `clamp(1.9rem,3.2vw,2.7rem)/800/1.15/-0.025em` · h3 `.tag clamp(1.3rem,2vw,1.65rem)/800; .itemTitle 1.05/700; .closing clamp(1.15rem,1.8vw,1.4rem)/700` · body `.lead 1rem/1.8; .itemBody .93/1.7` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024,766`
  - **Notes:** dark section; .muted/.accent helper spans
- [ ] `businessAnalysisProof.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$white-55 (display:block)` · h2 `clamp(1.9rem,3.2vw,2.7rem)/800/1.15/-0.025em` · h3 `.after clamp(1.3rem,2.2vw,1.75rem)/800` · body `.body .9/1.65; .before .95` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `3px` · raw @media `1024,766`
  - **Notes:** .area 0.72/700/2px; .all outline btn .88/700 3px; .cta arrow .82/700; .visuallyHidden utility (dup candidate)
- [ ] `businessAnalysisProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.7rem)/800/1.15/-0.025em` · h3 `.stepTitle 1.08rem/800` · body `.stepBody .92/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `2rem` · raw @media `1024,766`
  - **Notes:** .stepNum 0.75rem/800 pill badge
- [ ] `businessAnalysisValue.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.7rem)/800/1.15/-0.025em` · h3 `.title 1.12rem/800/-0.01em` · body `.body .93/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `8px,2rem` · raw @media `1024,766`
  - **Notes:** .chip .8/600 pill; .year clamp(6rem,13vw,10.5rem)/800; .deliverables li .9/700; bento grid

- [ ] **P08 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P09 · dashboards* — Dashboards page  (5 files)

Five files, section standard. `dashboardsDataSources` has local `$accent-on-dark: #5ba4c4` (a 4th light blue) whose comment claims no global exists.

**Recipe**
- Use `$accent-on-dark` (#6fc3e8) — ≈ slightly lighter than #5ba4c4; confirm on the dark sources section.

**Watch**
- `dashboardsAi` `.cta` is unstyled (global button).
- `scroll-margin-top: 4rem` on `dashboardsAi` / `dashboardsDemos`.

- [ ] `dashboardsDataSources.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$white-65` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em $white-90` · h3 `.groupLabel .95/700` · body `.intro 1/1.8; .groupNote .88/1.65` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `999px pill` · raw @media `1024,766`
  - **Notes:** LOCAL $accent-on-dark #5ba4c4 (4th light-blue; comment says 'no globals token exists for it'); chip .75; .groupLink .82/700
- [ ] 🔒 `dashboardsAi.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.capTitle 1.25/800; .loopTitle 1.25/800; .stepTitle 1/800` · body `.intro 1/1.8; .capText .95/1.75; .stepText .88/1.7` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `12px,50%` · raw @media `1024,766`
  - **Notes:** .capTag .68/700/2px; .stepNum circle 1.75rem .68/800; .cta unstyled (global button)
- [ ] 🔒 `dashboardsDemos.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.videoTitle 1.15/800` · body `.videoText .92/1.7` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `8px` · raw @media `1024`
  - **Notes:** .platform .68/700/2px; 16:9 .frame
- [ ] `dashboardsIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · body `.body 1/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024`
  - **Notes:** .ctaSecondary .9/700 text link; inline `a{color:$accent;font-weight:700}`
- [ ] `dashboardsPlatforms.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.colHead 1.3rem/800/-0.01em` · body `.intro 1/1.8; .cell .95/1.65` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `12px,999px` · raw @media `766` · literals `rgba(13,27,42,.12) shadow (=$text-primary @ .12)`
  - **Notes:** .rowHead .72/800/2px; .tag pill .78/700; .colLink `\2192` arrow; font-family var(--font-aptos) on th/td

- [ ] **P09 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P10 · access* / database* — Access & database pages  (4 files)

Four files, section standard.

**Watch**
- `databaseChooser` has a local `.srOnly` (copy #5 of visually-hidden).
- `databaseIntro` `.tocLabel` is an eyebrow duplicate; toc dot+pipe list repeats `locationsIntro`.

- [ ] `accessDatabases.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.sheet h3 (no size)` · body `inherit/1.8` · pad `padding 7rem 8rem (tab 6rem 4rem; pl 5rem 2rem; ph 5rem 1.25rem)` · max-w `1200px` · radius `12px` · raw @media `1024px,766px`
  - **Notes:** shadow 0 20px 50px rgba(13,27,42,.06); font var(--font-aptos); dt/dd 0.92rem
- [ ] `accessSection.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · body `1rem/1.8` · pad `padding 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `3px,999px` · raw @media `766px`
  - **Notes:** thead th 0.7rem/3px/yes; .helps 0.92rem
- [ ] `databaseIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.upgradeLabel clamp(1.6rem,2.8vw,2.25rem)/700; .upgradeHeading 1.35` · body `.content p 1/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `12px,50%` · raw @media `1024`
  - **Notes:** .tocLabel .7/700/3px (eyebrow dup); toc dot+pipe list; .upgradeLink white underline
- [ ] 🔒 `databaseChooser.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · body `.header p lh1.8; table .9/1.55` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25); scroll-margin-top 4rem` · max-w `1200px` · radius `50%`
  - **Notes:** .srOnly (copy #5 of visually-hidden); tbody th .7/700/1.5px; font var(--font-aptos)

- [ ] **P10 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P11 · emailTriage* — Email Triage page  (9 files)

Nine files, section standard; several have NO eyebrow (`UseCases`, `InOut`, `Intro`, `Suite`) — do not add one just to be uniform without a content decision.

**Recipe**
- `emailTriageInOut` uses a SMALLER h2 (1.7/2.6vw/2.2rem) — move to the standard.

**Watch**
- `emailTriageHero` + `emailTriageSuite` both declare `@keyframes flow` + `:global(.et-flow)` — duplicate; keep ONE and verify the JSX class.
- `emailTriageHero` `.primary` unstyled except bg (global button).

- [ ] `emailTriageApproaches.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.cardTitle 1.25/800/-0.01em` · body `.lead 1/1.8; .body .9/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `6px,4px` · raw @media `1024`
  - **Notes:** .tag .68/700/1.5px; .cardLink .85/700 ` →` ::after; tick-by-border bullets (dup businessAnalysisValue)
- [ ] `emailTriageComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em $white` · h3 `.colName .98/800` · body `table .88/1.6` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `10px,6px,2px` · raw @media `900px (extra)`
  - **Notes:** .accent span colour = $grayText on dark; .scrollHint .78/600; tbody th .7/700/1.5px; .rule border-left 2px accent (dup pattern)
- [ ] `emailTriageHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL (NOT hidden; ls 1.5px on phone)` · h2 `clamp(2rem,3.6vw,3rem)/800/1.08/-0.03em` · body `.lead 1.05/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `3px,2rem` · raw @media `1024`
  - **Notes:** .primary unstyled except bg (global button); .secondary .88/700 3px (identical to businessAnalysisHero .secondary); @keyframes flow + :global(.et-flow) duplicated w/ emailTriageSuite; .trust list .8/700
- [ ] `emailTriageUseCases.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container`
  - **Now:** eyebrow `NO eyebrow` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.itemTitle 1.05/700` · body `.itemBody .9/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024,766`
  - **Notes:** simple grid list
- [ ] `emailTriageInOut.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `NO eyebrow` · h2 `clamp(1.7rem,2.6vw,2.2rem)/800/1.2/-0.025em (SMALLER variant)` · body `.lead 1/1.8` · pad `6rem 8rem (tab 5/4; pl 4/2; ph 4/1.25) + border-top` · max-w `1200px` · radius `3px` · raw @media `1024`
  - **Notes:** .cta button .88/700 3px hover opacity .9 (not translateY)
- [ ] `emailTriageIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `NO eyebrow` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.subject 1/700` · body `.definition 1.1/1.8; .text 1/1.8` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `6px,2rem` · raw @media `1024`
  - **Notes:** --tone custom property w/ #{$accent}/#{$replace-x}/#{$text-muted}; .tag pill .72/700/1px; .rule (dup)
- [ ] `emailTriageProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container`
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.stepTitle 1.05/700; .stepNum 2.6rem/800` · body `.stepBody .9/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · raw @media `1024,766`
  - **Notes:** steps 3-col grid w/ top border 2px $accent-border (dup of dashboardsAi .step, businessAnalysisProcess)
- [ ] `emailTriageWhyUs.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em` · h3 `.itemTitle 1.05/700; .caseTitle .98/700 + ` →`` · body `.itemBody .92/1.7` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `4px` · raw @media `1024`
  - **Notes:** .caseLabel .68/700/1.5px; border-left 3px accent card
- [ ] `emailTriageSuite.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `NO eyebrow` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em $white` · body `.lead 1/1.8; .item .92/1.65` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `2rem pill` · raw @media `1024`
  - **Notes:** .accent = $grayText on dark; duplicate @keyframes flow/:global(.et-flow); .link pill .85/600

- [ ] **P11 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P12 · corporateIdentity* + caseStudyCallout  (4 files)

Four files, section standard.

**Watch**
- `corporateIdentityComparison` hides the whole section ≤768 and carries two `visually-hidden` copies (`.caption`, `.stateLabel`).
- `corporateIdentityDrift` `.accent` span is RED (`$replace-x`) — intentional; keep.

- [ ] `caseStudyCallout.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$white-88` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.figure clamp(1.5rem,2.4vw,2rem)/800` · body `.caption .9/1.6` · pad `6rem 8rem (tab 5/4; pl 4.5/2; ph 4.5/1.25)` · max-w `1200px` · radius `3px`
  - **Notes:** .button white-on-accent .85/700 3px
- [ ] 🔒 `corporateIdentityAnatomy.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · inner → keep 700px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/rgba($accent,.9) PILL (shown on phone)` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.15/-0.025em $white-88` · h3 `.zoneTitle 1.05/700` · body `.intro 1/1.8; .zoneBody .92/1.75` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `700px hdr; 1240px` · radius `2rem,50%`
  - **Notes:** dark; sticky diagram top 6rem; centred header
- [ ] `corporateIdentityComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent (display:inline-block)` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.meterName .9/700; .meterValue 1.5/800` · body `.intro 1/1.8; table .88` · pad `7rem 8rem (NO steps; display:none <=768)` · radius `4px,3px` · raw @media `768 (screen)`
  - **Notes:** .caption + .stateLabel = visually-hidden (copy #4); thead th .7/700/1.5px; .groupRow .68/800/2px; rgba($accent,.035); $shadow-row
- [ ] `corporateIdentityDrift.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → keep 640px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL` · h2 `clamp(1.9rem,3vw,2.6rem)/800/1.2/-0.025em` · h3 `.leadText 1.3/600` · body `.causeItem .92/1.6; .footerText .98/1.85` · pad `7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `640px hdr` · radius `50%`
  - **Notes:** .accent colour = $replace-x (red) — accent span is semantically different here; .causesLabel .8/700/1px; link hover color.adjust -8%; bg $background

- [ ] **P12 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

### 9.2 Service-page families with their own sub-system

#### P13 · api* — Microsoft 365 API Integration page (shared partial)  (7 files)

Seven files that already `@use "./apiIntegration" as api;` and call `api.section-pad / inner / eyebrow / heading / lede / arrow-link / inline-link`. Heading is `clamp(2.1rem,4vw,3.3rem)/900` — not identical to the new `heading-main`.

**Recipe**
- Phase 4: replace `_apiIntegration.scss` with the SHIM in §4.3 (same API, delegates to globals). The 7 files then keep working untouched.
- Phase 6: swap `api.x` → global `x` per file, then delete the partial.

**Watch**
- `apiIntro` `.chip` duplicates `adelaideServices` `.chip` (0.74rem/600 pill).
- `apiAgents` and `apiSurfaces` use the `desktop` mixin — check intent (1025–1199 only).

- [ ] `apiAgents.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `api.eyebrow(0.68rem/700/3px)` · h2 `api.heading clamp(2.1rem,4vw,3.3rem)/900/1.1/-0.03em` · h3 `.title 1.15rem/800` · body `api.lede 1.02rem/1.85` · pad `api.section-pad 7rem 8rem (tab 5.5/4; pl 4.5/1.5; ph 4/1.25)` · max-w `api.inner 1280px` · radius `14px`
  - **Notes:** uses desktop mixin; .status 0.62rem/1.8px; .itemText 0.9rem
- [ ] `apiByProduct.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `api.eyebrow` · h2 `api.heading` · h3 `.title 1.4rem/800/-0.02em` · body `api.lede; .desc 0.95rem/1.8` · pad `api.section-pad` · max-w `api.inner` · radius `14px,12px` · literals `rgba(4,105,153,.08); rgba(11,36,51,.08)`
  - **Notes:** api.$line; .tag 0.64rem/2.5px color $darkGrayText; points li 0.9rem/600
- [ ] `apiFaq.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `api.eyebrow` · h2 `api.heading` · body `api.lede; .answer 0.95rem/1.8` · pad `api.section-pad` · max-w `api.inner` · radius `12px`
  - **Notes:** .question 1rem/700 (ph 0.95rem); api.$line
- [ ] `apiIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `api.eyebrow` · h2 `api.heading` · body `api.lede` · pad `api.section-pad` · max-w `api.inner` · radius `2rem` · literals `rgba(4,105,153,.08)`
  - **Notes:** .chip 0.74rem/600 (dup of adelaideServices .chip)
- [ ] `apiProcess.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `api.eyebrow` · h2 `api.heading` · h3 `.title 1.08rem/800` · body `.text 0.92rem/1.75` · pad `api.section-pad` · max-w `api.inner` · radius `14px` · literals `#0e3a52`
  - **Notes:** .number 2.2rem/900; proofValue clamp(2.2rem,3.8vw,3.1rem)/900 (adelaideWhy has 2.4/4/3.3); proofLabel 0.68rem/1.5px; uses api.$ink
- [ ] `apiSurfaces.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin
  - **Now:** eyebrow `api.eyebrow` · h2 `api.heading` · h3 `.title 1.2rem/800/-0.01em` · body `.text 0.95rem/1.8` · pad `api.section-pad` · max-w `api.inner`
  - **Notes:** uses desktop mixin; api.$line
- [ ] `apiUseCases.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `api.eyebrow` · h2 `api.heading` · h3 `.title 1.12rem/800` · body `.text 0.92rem/1.75` · pad `api.section-pad` · max-w `api.inner` · radius `14px`
  - **Notes:** .stack 0.68rem/700/1.5px $darkGrayText

- [ ] **P13 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P14 · migration* — Upgrades & Migration page  (8 files)

Eight files in a distinct sub-system: weight 700, line-height 1.18, `-0.02em`, `7rem 8rem` padding, light-blue `#7ec8e3`. `migrationWord` is AI-era standard (800) inside this family.

**Recipe**
- Weight is already 700 (the new standard); only size/line-height move when the h2 switches to `heading-section`.

**Watch**
- 🔒 `migrationScenarios` `.cta` band is full-bleed via `margin:0 -8rem; padding:5rem 8rem` — coupled to the section padding. Do NOT change section padding in this file without redoing the band (e.g. `margin-inline: calc(-1 * #{$section-x})`).
- `migrationChallenges` eyebrow uses `$accent` on a DARK background (low contrast) and is not hidden on phone.
- `migrationProcess` has dead `.connector{display:none}`; 6-col step track `::before` line `top:9px` is coupled to the dot size.
- `migrationStack` has an off-token blue map (#046999/#0a85bf/#035878/#2d6a8a); `migrationPaths` has its own intensity palette.
- Button variant B (lighten +6% on dark) is used in `migrationHero`, `migrationPaths`, `migrationProcess` → `btn` (wipe: accent → white on hover; works on dark backgrounds).

- [ ] `migrationChallenges.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ now hidden ≤449px, confirm the background really is dark · inner → keep 760px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent on DARK plain (low contrast; NOT hidden)` · h2 `clamp(1.8rem,3vw,2.6rem)/700/1.2/-0.02em $white-88` · h3 `.rowCategory 1/700` · body `.subheading .97/1.8; .rowList li .88/1.65` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `760px` · radius `2px,4px` · literals `#7ec8e3,rgba(126,200,227,.3),rgba(255,255,255,.3/.25),rgba(4,105,153,.6)`
  - **Notes:** MIGRATION era (weight 700, lh1.18-1.2, -0.02em); button-based accordion w/ bodyReveal keyframes; .rowLink .8/700/.3px #7ec8e3 (5th light-blue) svg translate(2px,-2px); .rowNum .62/800/2.5px
- [ ] `migrationHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent OUTLINE PILL $accent-border (phone .6rem; shown)` · h2 `clamp(2.4rem,5vw,4rem)/700/1.1/-0.02em $white (ph clamp(2rem,8vw,2.6rem))` · body `.lead 1.1/1.75; .body .97/1.8` · pad `7rem 8rem 5rem (tab 6/4/4; pl 5/1.5/3.5; ph 4.5/1.25/3)` · radius `4px,2rem` · literals `#7ec8e3; rgba(4,105,153,.22/.55/.1/.3/.35/.45/.4); color.adjust($accent,+12%/+6%)`
  - **Notes:** keyframes fadeUp (dup),orbPulse,tagFloat; .ctaPrimary .9/700/.3px 4px color.adjust +6% (btn variant B = lighten on dark); .ctaSecondary $white-08/$white-18 .9/600 (dup in migrationScenarios); tag tiers .primary/.secondary/.tertiary; header comment has app path
- [ ] 🔒 `migrationScenarios.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → keep 680px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (shown)` · h2 `clamp(1.9rem,3.2vw,2.75rem)/700/1.18/-0.02em` · h3 `.tileTitle 1.15/700 (.wide 1.5rem); .ctaHeading clamp(1.5rem,2.5vw,2.1rem)/700/1.25/-0.02em` · body `.subheading 1/1.8; .tile .9/1.75; .ctaBody .95/1.85` · pad `7rem 8rem 0 (tab 6/4/0; pl 5/1.5/0; ph 4.5/1.25/0)` · max-w `680px` · radius `10px,12px,2rem`
  - **Notes:** .cta band is full-bleed via `margin:0 -8rem; padding 5rem 8rem` (coupled to section padding — breaks if section padding token changes); .ctaPrimary/.ctaSecondary dup of migrationHero; .tag .65/700/1.5px; .label .62/700/2px; tileLink svg translate(2px,-2px)
- [ ] `migrationPaths.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → keep 680px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (shown)` · h2 `clamp(1.9rem,3.2vw,2.75rem)/700/1.18/-0.02em` · h3 `.pathLabel 1.4/700/-0.01em` · body `.subheading 1/1.8; .pathDesc .9/1.75; li .85/1.55; .pathFit .83` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `680px` · radius `6px` · raw @media `770 (closerCta hide)` · literals `local intensity palette $intensity-low-bar #5ba4c4,mid #046999,high #034e72,low-bg #f0f8fd,mid-bg #e8f4fa; rgba(4,105,153,.12/.22/.3/.07); rgba(0,0,0,.04/.07)`
  - **Notes:** .pathLink .8/700/.3px border-bottom; .closerCta .9/700 4px +6% (btn variant B); `.closerHeading` unstyled (global); .spectrum span .7/700/1.5px
- [ ] 🔒 `migrationProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (shown)` · h2 `.headline clamp(1.9rem,3.2vw,2.75rem)/700/1.18/-0.02em` · h3 `.stepLabel .97/700; .diffHeading .9/700` · body `.intro .97/1.85; .diffBody .85/1.8; .stepDetail .83/1.75` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `6px,2px,50%`
  - **Notes:** sticky top 130; .cta .88/700/.3px 4px +6% (variant B w/ .88); .stepsLabel .68/700/3px $text-muted; .stepNum .62/800/2px; DEAD RULE `.connector{display:none}`; 6-col step track w/ ::before line top:9px (coupled to dot size)
- [ ] 🔒 `migrationProblem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (shown)` · h2 `.heading clamp(1.9rem,3.5vw,2.9rem)/700/1.15/-0.02em + ::after 48x3 bar` · h3 `.signContent h3 .97/700` · body `.introRight p 1/1.85; .signContent p .92/1.75` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `6px,4px` · literals `rgba(4,105,153,.03)`
  - **Notes:** keyframes fadeUp copy #3; .signsLabel .68/700/3px; .closerEyebrow .65/700/3px; .closer $dark-surface w/ left bar; .signLink svg translate(2px,-2px); sticky 130
- [ ] `migrationStack.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → keep 720px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (shown)` · h2 `clamp(1.9rem,3.2vw,2.75rem)/700/1.18/-0.02em` · h3 `.pillarCategory 1/700` · body `.subheading 1/1.8; .pillarSummary .88/1.7; li .85/1.55` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `720px` · radius `6px,4px` · literals `$pillar-colors map #046999/#0a85bf/#035878/#2d6a8a (off-token blues); rgba(255,255,255,.03/.6/.72)`
  - **Notes:** .connector band bg $accent w/ repeating-linear-gradient texture; .connectorLabel .65/700/3px; pillarIndex .65/800/2.5px
- [ ] `migrationWord.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent plain (shown)` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.version 1.15/800; .fix h3 1.05/700` · body `.intro lh1.8; .era .9/1.7` · pad `7rem 8rem (tab 5/4; pl 4.5/2; ph 4.5/1.25)` · max-w `1200px` · radius `6px,50%`
  - **Notes:** AI-era standard but inside migration* family (which otherwise is 700/1.18/-0.02em) => pick one; .format .75/700 $text-muted; .fixLink .85/700 no hover

- [ ] **P14 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P15 · mailMerge* — Mail Merge page  (5 files)

Five files, each defining an identical LOCAL `@mixin stacked` (tablet + phoneLandscape + phone = `belowDesktop`).

**Recipe**
- Delete the local `stacked` mixin in each file and `@include belowDesktop` instead (one commit for all five).

**Watch**
- Eyebrows are NOT hidden on phone (city hubs hide them).
- `mailMergeFixes.code` and `mailMergeOutputs.field` are the same monospace snippet style.
- `mailMergeServices`: `<details>` accordion with CSS +/− (accordion dup #n, §10); links use white + soft underline `$white-35` offset 3px (same as googleMigration*).

- [ ] 🔒 `mailMergeFixes.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → keep 760px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (NOT hidden on phone)` · h2 `clamp(2.1rem,4vw,3.4rem)/900/1.08/-0.035em` · h3 `.title 1.3/800/-0.02em` · body `.note lh1.85 (no size)` · pad `7rem 8rem (tab 5/4; pl 4.5/1.5; ph 4/1.25); scroll-margin-top 150px` · max-w `760px header; no .inner` · radius `4px,6px`
  - **Notes:** MAILMERGE era: defines LOCAL `@mixin stacked` (tablet+phoneLandscape+phone) — identical in all 5 mailMerge* files => promote to globals as `belowDesktop`; local $mono; .code .82 mono; .label .62/700/2px; .before/.after use $before-bg,$replace-x
- [ ] `mailMergeBeyond.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → keep 760px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain` · h2 `clamp(2.1rem,4vw,3.4rem)/900/1.08/-0.035em` · h3 `.title 1.3/800/-0.02em` · body `.note lh1.85; .cta p 1.05/1.8` · pad `7rem 8rem (tab 5/4; pl 4.5/1.5; ph 4/1.25)` · max-w `760px header` · radius `50%`
  - **Notes:** local `stacked` mixin dup; locals $dot,$gutter (timeline); .label .66/700/2.5px; .desc a inline link
- [ ] `mailMergeIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it)
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (via `.copy .eyebrow` specificity bump)` · h2 `clamp(2.1rem,4vw,3.4rem)/900/1.08/-0.035em` · body `.copy p 1.02/1.85` · pad `7rem 8rem (tab 5/4; pl 4.5/1.5; ph 4/1.25)` · max-w `1400px`
  - **Notes:** local `stacked` dup; .sourcesLabel .68/700/2.5px; .sourceList li .92/600; .copy a inline
- [ ] 🔒 `mailMergeServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$white-55 plain` · h2 `clamp(2.1rem,4vw,3.4rem)/900/1.08/-0.035em $white` · h3 `.title clamp(1.25rem,2vw,1.6rem)/700/-0.02em` · body `.lead lh1.85 $white-65; li .94/1.6` · pad `8rem 8rem (tab 5.5/4; pl 4.5/1.5; ph 4/1.25); scroll-margin-top 150px` · max-w `1400px` · radius `50%`
  - **Notes:** local `stacked` dup; <details> accordion w/ CSS plus/minus toggle (dup #12 accordion); sticky top 8rem; .tag .68/700/2px; links white + soft underline $white-35 offset 3px (same as googleMigration*)
- [ ] 🔒 `mailMergeOutputs.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → keep 760px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain` · h2 `clamp(2.1rem,4vw,3.4rem)/900/1.08/-0.035em` · h3 `.title 1.35/800/1.2/-0.02em` · body `.note lh1.85; .desc lh1.85` · pad `7rem 8rem (tab 5/4; pl 4.5/1.5; ph 4/1.25); scroll-margin-top 150px` · max-w `760px header` · radius `4px`
  - **Notes:** local `stacked` dup; .field mono .78 (dup of mailMergeFixes .code)

- [ ] **P15 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P16 · automation* — Automation page (outlier scale)  (4 files)

Four files with their OWN scale: eyebrow `0.75rem/600/0.14em`, h2 weight 700 at `1.6–2.5rem`, `5rem 2rem` padding, `1100px` inner, `$black` headings. The most visibly off-brand family after the legacy pages.

**Recipe**
- Leave the padding as it is (D4). Only change a horizontal gutter if it is vw-based → `$gutter` (10vw).

**Watch**
- `automationMain` has `!important` on a phone `border-left`.
- Root element is `.wrapper` not `.section` — keep class names (JSX); only change the declarations.

- [ ] `automationAi.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$darkGrayText` · h2 `clamp(1.9rem,3.2vw,2.75rem)/800/1.15/-0.025em` · h3 `.cardTitle 1.4rem/800; .bandTitle clamp(1.3rem,2vw,1.6rem)/800` · body `.intro lh1.8; .text 0.95rem/1.75` · pad `.wrapper (not .section) 7rem 8rem (tab 6/4; pl 5/2; ph 5/1.25)` · max-w `1200px` · radius `12px,3px` · raw @media `766px`
  - **Notes:** uses $body; .label 0.75rem/1.5px
- [ ] `automationImpact.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` ≈ 1100→1200px (keep 1100 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.75rem/600/0.14em/yes/$white-55` · h2 `clamp(1.7rem,3vw,2.4rem)/700/1.2/-` · body `.subheading 0.97rem/1.85` · pad `.wrapper 6rem 2rem 5rem (tab 4.5/1.5/4; ph 3.5/1/3)` · max-w `1100px` · radius `10px` · literals `#034f72; rgba(4,105,153,.15/.5/.08)`
  - **Notes:** OUTLIER scale; .stateLabel 0.68rem/700/0.12em; .panelText 0.93rem/1.75
- [ ] `automationIntegration.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` ≈ 1100→1200px (keep 1100 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.75rem/600/0.14em/yes/$accent` · h2 `clamp(1.6rem,2.8vw,2.25rem)/700/1.25/- color $black` · body `.body 1rem/1.75 $darkGrayText` · pad `.wrapper 5rem 2rem (tab 4/1.5; ph 3/1)` · max-w `1100px` · radius `10px,50%` · literals `rgba(4,105,153,.1/.3)`
  - **Notes:** OUTLIER scale; uses $body
- [ ] `automationMain.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.75rem/600/0.14em/yes/$accent` · h2 `clamp(1.75rem,3vw,2.5rem)/700/1.2/- color $black` · h3 `.itemTitle 1.05rem/600` · body `.lead 1.05rem/1.8 $gray; .body 0.97rem/1.8; .itemDesc 0.92rem/1.75` · pad `.wrapper 5rem 2rem (tab 4/1.5; ph 3/1) + mw 1200` · max-w `1200px` · radius `14px` · literals `rgba(0,0,0,.07) x4 (~$border); rgba(4,105,153,.08)`
  - **Notes:** OUTLIER scale; !important border-left in phone

- [ ] **P16 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P17 · conversion* — Conversion page (new system; needs missing mixins)  (6 files)

Six files that `@include container`, `belowDesktop` and `mobile` — none of which exist in the Project copy of `globals.scss`. Eyebrow is `0.85rem/700/0.08em`; padding is `padding-block 6rem`.

**Recipe**
- FIRST resolve §1.1 (do the mixins exist in the real repo?). If not, adding them in §4 fixes these files for free.

**Watch**
- `conversionCta` h2 differs from the rest (1.7/3.5vw/2.4rem vs 1.9/4vw/2.8rem).
- `conversionBento` `.stat` is 4.5rem/800; `.tileEyebrow` is a second eyebrow style (0.78rem).

- [ ] `conversionProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.85rem/700/0.08em/yes/$accent` · h2 `clamp(1.9rem,4vw,2.8rem)/-/1.15/-` · h3 `1.2rem/lh1.3` · body `inherit/1.7` · pad `padding-block 6rem` · max-w `container mixin` · radius `1.5rem`
  - **Notes:** ⚠ uses undefined mixin(s): `container,belowDesktop` — stepNumber 2rem/800
- [ ] `conversionCta.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.85rem/700/0.08em/yes/inherit` · h2 `clamp(1.7rem,3.5vw,2.4rem)/-/1.2/-` · body `inherit/1.7` · pad `padding-block 5rem` · max-w `container` · radius `2rem,1rem,999px`
  - **Notes:** ⚠ uses undefined mixin(s): `container,belowDesktop` — different h2 clamp from rest of conversion*
- [ ] `conversionFaq.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.85rem/700/0.08em/yes/$accent` · h2 `clamp(1.9rem,4vw,2.8rem)/-/1.15/-` · body `inherit/1.7` · pad `padding-block 6rem` · max-w `container` · radius `1.25rem`
  - **Notes:** ⚠ uses undefined mixin(s): `container,belowDesktop`
- [ ] `conversionProblem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → already via mixin
  - **Now:** eyebrow `.eyebrow 0.85rem/700/0.08em/yes/$accent` · h2 `clamp(1.9rem,4vw,2.8rem)/-/1.15/-` · h3 `.name 1.2rem/1.3` · body `inherit/1.7` · pad `padding-block 6rem` · max-w `container`
  - **Notes:** ⚠ uses undefined mixin(s): `container,belowDesktop,mobile` — .number 0.85rem/700/0.1em
- [ ] `conversionComparison.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.85rem/700/0.08em/yes/$white-65` · h2 `clamp(1.9rem,4vw,2.8rem)/-/1.15/-` · body `-/1.6 table` · pad `padding-block 6rem` · max-w `container` · radius `1.5rem`
  - **Notes:** ⚠ uses undefined mixin(s): `container` — thead th 0.85rem/.06em
- [ ] `conversionBento.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.85rem/700/0.08em/yes/$accent` · h2 `clamp(1.9rem,4vw,2.8rem)/-/1.15/-` · h3 `.tileHeading 1.4rem/1.25` · body `inherit/1.7` · pad `padding-block 6rem` · max-w `container` · radius `1.5rem,999px`
  - **Notes:** ⚠ uses undefined mixin(s): `container,belowDesktop,mobile` — .tileEyebrow 0.78rem/700/0.08em/yes ; .stat 4.5rem/800

- [ ] **P17 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### P18 · template* — Word Templates page  (8 files)

Eight files: h2 `clamp(2,3.6vw,3rem)/800/1.12/-.03em`, padding `7rem 6vw`, 1300px inner, `.7rem/700/3px` eyebrow. `templateHero` uses the conversion mixins.

**Recipe**
- 6vw gutters → `$gutter` (10vw, D12) narrows content ≈ 58px each side at 1440px; check wide tables/SVGs.

**Watch**
- ✋ `templateCards` is an A4 card-fan widget — leave alone.
- `templateStyleGuides` `.conversion` has padding but no bg/radius — check JSX/global CSS.
- `templateIntro` uses `a:not(:global(.btn))` → confirms a GLOBAL `.btn` class exists outside the Project.
- `templateHero` local `$accent-bright = color.adjust($accent,28%)` → `$accent-on-dark`.

- [ ] `templateHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ pill → plain, confirm the background really is dark ≈ style change (pill → plain) · inner → already via mixin · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.8rem/-/0.06em/yes/$white-75` · h2 `clamp(2.2rem,5vw,3.6rem)/-/1.1/-` · body `.lead 1.1rem/1.7` · pad `padding-block 7rem 5rem` · max-w `container` · radius `999px`
  - **Notes:** ⚠ uses undefined mixin(s): `container,belowDesktop` — local $accent-bright=color.adjust($accent,28%)  (dup concept of $accent-on-dark #6fc3e8 in _apiIntegration)
- [ ] `templateCards.module.scss`
  - **Target:** eyebrow → — (none today; don’t add without a content decision) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** pad `60px 0 80px` · radius `3` · raw @media `700,768` · literals `local $page-bg #f5f2ee,$shadow-color,$easing; rgba(0,0,0,.22/.35/.12)`
  - **Notes:** ⚠ imports NO globals — A4 card fan widget — LEAVE ALONE; CSS var --card-width etc.
- [ ] `templateIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(2.2,4vw,3.4rem)/800/1.1/-.03em` · body `content lh 1.8` · pad `7rem 6vw (phone 4.5rem 1.25rem; NO tablet/landscape)` · max-w `1300` · raw @media `1024`
  - **Notes:** template* era (7 files); a:not(:global(.btn)) confirms global .btn; cards rotate(-10deg)
- [ ] `templateDesignPrinciples.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.7/700/3px white-65` · h2 `clamp(2,3.6vw,3rem)/800/1.12/-.03em` · h3 `principleTitle 1.4rem/800` · body `lh 1.8` · pad `7rem 6vw (phone 4.5rem 1.25rem)` · max-w `1300` · raw @media `1024,1025`
  - **Notes:** border-left hairline columns
- [ ] `templateDocumentTypes.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(2,3.6vw,3rem)/800/1.12/-.03em` · h3 `tileTitle 1.2/800; shapeHero title clamp(2,3.4,3)/800` · body `tile .92/1.6` · pad `7rem 6vw` · max-w `1300` · radius `20` · raw @media `1024,766,1025`
  - **Notes:** bento radius 20; [data-accent] svg fill pattern
- [ ] `templateFeatures.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(1.8,3vw,2.5rem)/800/1.12/-.03em` · body `lh 1.8` · pad `7rem 6vw` · max-w `1300` · radius `16/999` · raw @media `1024`
  - **Notes:** .card,.panel shared base; panel accent variant
- [ ] `templateStyleGuides.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.7/700/3px white-65` · h2 `clamp(2,3.6vw,3rem)/800/1.12/-.03em; subheading clamp(1.6,2.6,2.2)/800/1.15/-.02em` · body `lh 1.8` · pad `7rem 6vw` · max-w `1300` · raw @media `1024`
  - **Notes:** .conversion has padding but NO bg/radius (check JSX/global); [data-accent] fill
- [ ] `templateWhyChoose.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.7/700/3px plain` · h2 `clamp(2,3.6vw,3rem)/800/1.12/-.03em` · h3 `pointTitle 1.15/800` · body `lh 1.8; conclusion clamp(1.15,2,1.5)/700` · pad `7rem 6vw` · max-w `1300` · raw @media `1024`
  - **Notes:** dot bullet li::before 8px

- [ ] **P18 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

### 9.3 City hubs

#### C_adelaide · Adelaide hub  (4 files)

City-hub page (Adelaide). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Recipe**
- Local `$stone/$stone-line/$ink`, `$card-line`, `$line` — replace with `$text-primary`/`$line`.

**Watch**
- `adelaideServices`/`adelaideWhy` carry local arrow-link copies.

- [ ] `adelaideContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.68rem/700/3px/yes/$accent` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.sector 1.3rem/800; .ctaTitle 1.6rem/900` · body `.lead 1rem/1.85` · pad `padding 8rem 0 7rem; inner padding 0 8rem` · radius `14px,2rem,4px` · literals `#0e3a52; rgba(4,105,153,x)x4; rgba(255,255,255,.78)`
  - **Notes:** LOCAL $stone $stone-line $ink; .places 0.64rem/2px; .areasLabel 0.65rem/2.5px; .count 3rem; color.adjust(-8%); eyebrow hidden on phone
- [ ] `adelaideIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.68rem/700/3px/yes/rgba($accent,.95)` · h2 `.headline clamp(2.4rem,5vw,4.3rem)/900/1.07/-0.035em` · h3 `.stepTitle 1.1rem/800` · body `.lead 1.2rem/500/1.75 + .body 0.98rem/1.85` · pad `padding 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px` · radius `4px` · literals `rgba(255,255,255,.045/.35)`
  - **Notes:** .processTitle 0.68rem/3px; .stepNum 2.6rem/900; .btn 0.88rem/700 (local button); eyebrow hidden on phone
- [ ] `adelaideServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.68rem/700/3px/yes/$accent` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.title clamp(1.45rem,2.4vw,1.95rem)/800` · body `.headerNote 1.02rem/1.85` · pad `padding 8rem 8rem 9rem` · radius `12px,2rem` · literals `#6fc3e8 x2; #0e3a52; rgba(4,105,153,.08/.35); rgba(255,255,255,.78/.12/.45)`
  - **Notes:** LOCAL $card-line(#e3e8ec) $ink; .tag 0.66rem/2.5px; .desc 0.97rem/1.85; .chip 0.74rem; local arrow-link duplicate; eyebrow hidden on phone
- [ ] `adelaideWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.68rem/700/3px/yes/$accent` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em` · pad `padding 8rem` · max-w `1280px` · radius `14px` · literals `#0e3a52; rgba(255,255,255,.75/.72/.84/.45); rgba(11,36,51,.25)`
  - **Notes:** LOCAL $line(#e3e8ec) $ink; ledgerHead 0.66rem/2.5px; proofValue clamp(2.4rem,4vw,3.3rem)/900; proofLabel 0.7rem/1.5px; local arrow-link dup; eyebrow hidden on phone

- [ ] **C_adelaide family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_brisbane · Brisbane hub  (4 files)

City-hub page (Brisbane). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- `brisbaneIntro` has commented-out CSS left in; `.btn` copy of adelaideIntro.
- `brisbaneWhy` `.light` card is actually dark-surface (naming).

- [ ] `brisbaneContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent (hidden phone)` · h2 `clamp(2.4rem,4.5vw,3.8rem)/800/1.18/-0.025em` · h3 `.panelTitle 1.1rem/800/-0.01em` · body `.coverageLead 1rem/1.85; .panelBody 0.93rem/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `6px,2rem,4px` · literals `rgba(4,105,153,.07)`
  - **Notes:** .tagsLabel 0.65rem/2.5px; .tag 0.8rem; local .nicheBtn 0.85rem/700 4px; color.adjust -8%
- [ ] `brisbaneIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba(4,105,153,.9) literal (hidden phone)` · h2 `.headline clamp(2.4rem,4.5vw,3.8rem)/900/1.22/-0.025em` · body `.lead 1.05rem/500/1.85; .body 1rem/1.9` · pad `6rem 8rem (tab 5/4; pl 4/1; ph 4/1)` · radius `4px` · raw @media `770px` · literals `rgba(4,105,153,.9)`
  - **Notes:** .btn 0.88rem/700 4px (dup of adelaideIntro .btn); commented-out CSS left in
- [ ] `brisbaneServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) PILL (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.1/-0.03em` · h3 `.itemTitle clamp(1.1rem,1.6vw,1.35rem)/800` · body `.itemDesc 0.93rem/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `2rem` · literals `rgba(4,105,153,.08)`
  - **Notes:** .itemCategory 0.65rem/2px; .itemLink 0.8rem/700; .itemIndex 4rem/900
- [ ] `brisbaneWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) PILL (hidden phone)` · h2 `clamp(2.4rem,4.5vw,3.8rem)/900/1.08/-0.035em` · h3 `.cardTitle clamp(1.05rem,1.6vw,1.2rem)/800` · body `.headerBody 1rem/1.85; .cardBody 0.9rem/1.8` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `6px,2rem` · literals `rgba(255,255,255,.55/.75)`
  - **Notes:** .statValue clamp(2.8rem,5vw,4rem)/900; .statLabel 0.7rem/1.5px; NAMING LIE: .light card is dark-surface; .headerLink local arrow-link

- [ ] **C_brisbane family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_cairns · Cairns hub  (5 files)

City-hub page (Cairns). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- `cairnsApproach` is a max-height accordion + `.nicheBtn` (button A); `cairnsIndustries` has an extra 860px query and a dark section.

- [ ] `cairnsApproach.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/800/1.18/-0.025em` · h3 `.triggerTitle clamp(1.1rem,2.2vw,1.4rem)/700/-0.015em` · body `.panelBody .95/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `4px`
  - **Notes:** bg $grayBGC; .nicheBtn .85/700 4px color.adjust -8% (dup); accordion w/ max-height
- [ ] `cairnsIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1100→1200px (keep 1100 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `.headline clamp(2.2rem,4.5vw,3.8rem)/900/1.12/-0.03em (+phone override clamp(1.9rem,8vw,2.6rem))` · body `.body p 1rem/1.9` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1100px` · radius `4px,2rem`
  - **Notes:** .btn .88/700 4px color.adjust -8%; .statValue clamp(2rem,3.5vw,3rem)/900; .statLabel .7/600/2px
- [ ] `cairnsIndustries.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) PILL (hidden phone)` · h2 `clamp(2rem,3.5vw,3rem)/900/1.12/-0.03em $white-88` · h3 `.rowName clamp(1.3rem,2.2vw,1.9rem)/900` · body `.intro 1/1.85; .rowDesc .95/1.9` · pad `8rem (tab 6/4/0 bottom; pl 5/1.5/0; ph 4.5/1.25/0)` · radius `50%` · raw @media `860px (extra)` · literals `rgba($accent,.07/.18)`
  - **Notes:** .rowNum clamp(6rem,10vw,9rem)/900; dark
- [ ] `cairnsServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `clamp(2rem,3.5vw,3rem)/900/1.12/-0.03em` · h3 `.cardTitle 1.2rem/800/-0.02em` · body `.subheading 1/1.85; .cardDesc .9/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `8px,2rem` · literals `rgba(0,0,0,.07) shadow`
  - **Notes:** .cardCategory .65/700/2.5px; .feature chip .72/600 pill; .cardLink .82/700 svg arrow (dup)
- [ ] `cairnsWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `clamp(2.2rem,4vw,3.2rem)/900/1.12/-0.03em` · h3 `.rowTitle clamp(1.1rem,1.8vw,1.45rem)/800; .coverageHeading clamp(1.5rem,2.5vw,2rem)/800` · body `.rowBody 1/1.9; .coverageBody 1/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `2rem`
  - **Notes:** .rowEyebrow .65/700/2.5px; .tag pill .8/500 (dup of brisbane/canberra .tag); .rowLink svg arrow

- [ ] **C_cairns family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_canberra · Canberra hub  (4 files)

City-hub page (Canberra). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- 🐞 `canberraServices` `.triggerTitle` uses `$text-primary` on `$dark-bg` (invisible) and `.panelBody` `$text-secondary` on dark (low contrast).
- `canberraServices` eyebrow is NOT hidden on phone (siblings hide it).

- [ ] `canberraIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `.headline clamp(2.4rem,5vw,4.2rem)/900/1.1/-0.035em (+phone clamp(2rem,8vw,2.8rem))` · body `.body 1rem/1.85` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1400px` · radius `4px,2rem`
  - **Notes:** .btn .88/700 4px color.adjust; .stripValue clamp(2rem,3.5vw,3rem)/900/-0.03em; .stripLabel .7/600/2px
- [ ] `canberraContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2rem,3.5vw,3rem)/900/1.1/-0.03em` · h3 `.cardTitle 1rem/800; .coverageHeading clamp(1.8rem,3vw,2.6rem)/900/1.15/-0.03em` · body `.subheading 1/1.7; .cardBody .9/1.8; .coverageCopy .95/1.85` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1400px` · radius `6px,3px`
  - **Notes:** .statValue clamp(1.6rem,2.5vw,2.2rem)/900; .tagsLabel .7/700/2px; .tag radius 3px (others use 2rem)
- [ ] `canberraServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ now hidden ≤449px
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain NOT hidden on phone (differs from siblings)` · h2 `clamp(2rem,3.5vw,3rem)/900/1.1/-0.03em $white-88` · h3 `.triggerTitle clamp(1.05rem,1.8vw,1.3rem)/800` · body `.panelBody .95/1.85` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)`
  - **Notes:** BUG: .triggerTitle color $text-primary (#0d1b2a) on $dark-bg = invisible; .triggerIndex/.triggerChevron $text-muted; .panelBody $text-secondary on dark = low contrast
- [ ] `canberraWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) PILL (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.1/-0.035em` · h3 `.rowTitle clamp(1rem,1.5vw,1.2rem)/800` · body `.headerBody 1/1.85; .rowBody .9/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1400px` · radius `6px,4px`
  - **Notes:** .ctaBtn .88/700 4px color.adjust; .headerLink svg arrow (dup); .ctaText clamp(1rem,1.8vw,1.25rem)/700

- [ ] **C_canberra family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_centralCoast · Central Coast hub  (4 files)

City-hub page (Central Coast). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- Local `$sea-deep/$sea-mist/$sand/$sand-line` (`$sand` unused; `$sand-line:#000` used as a tag border).
- 🔒 `centralCoastIntro` bottom padding 10rem (overlap for the next section); `centralCoastServices` has a short top pad (continuation section).

- [ ] `centralCoastContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.1/-0.03em` · h3 `.sector 1.2rem/800/-0.01em` · body `.lead 1.02/1.85; .body .95/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `4px,2rem,50%` · literals `#fff; #82818110; #aeadad; rgba(4,105,153,.4/.08)`
  - **Notes:** LOCAL $sand #f7f3ea UNUSED; $sand-line #000 used as tag border (black); .tagsLabel .65/2.5px; .place .66/2.5px; .ctaBtn .85/700 4px color.adjust
- [ ] `centralCoastFaq.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → keep 760px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) PILL (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em $white-88` · h3 `.proofValue clamp(2.4rem,4vw,3.3rem)/900; .question 1.08rem/700` · body `.answer .97/1.85; .proofText .95/1.8` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `760px hdr` · radius `16px,4px` · literals `rgba(255,255,255,.7/.18/.72/.84/.45)`
  - **Notes:** LOCAL $sea-deep #033a55 (dup in Intro/Services); <details> FAQ + plus/cross icon pattern; .proofLabel .72/600/1.5px; .proofLink svg arrow
- [ ] `centralCoastIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent w/ ::before 2.25rem line (hidden phone)` · h2 `.headline clamp(2.6rem,5.6vw,4.8rem)/900/1.05/-0.035em` · h3 `.colTitle 1.2rem/800/-0.01em` · body `.colBody .97/1.85` · pad `7rem 8rem 10rem (tab 5.5/4/9; pl 4.5/1.5/8; ph 4/1.25/7)` · radius `50%,4px,2rem` · raw @media `770px` · literals `rgba(4,105,153,.28/.45/.25/.18)`
  - **Notes:** LOCAL $sea-deep,$sea-mist #eef6fa,$dot-size,$tag-space; .btn .88/700 4px; .colNum .7/800/3px; .caption .72
- [ ] `centralCoastServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.08/-0.03em` · h3 `.tileTitle clamp(1.25rem,1.9vw,1.65rem)/800` · body `.headerNote 1.02/1.85; .tileDesc .95/1.85` · pad `4rem 8rem 8rem (tab 3/4/6; pl 2.5/1.5/5; ph 2/1.25/4.5)` · radius `16px,2rem` · literals `rgba(4,105,153,.08/.12); rgba(3,58,85,.1/.28); rgba(255,255,255,.2/.15/.65/.75/.84); #e1f0f8`
  - **Notes:** LOCAL $sea-deep,$sea-mist; .tileTag .63/700/2px; .tileIndex .75/800/2px; .chip .72/600 rgba .08; .tileLink .82/700 svg arrow

- [ ] **C_centralCoast family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_goldCoast · Gold Coast hub  (4 files)

City-hub page (Gold Coast). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- `$ink = color.adjust($accent,-20%)` (derived) — a different ink from adelaide’s `#0b2433`.
- `goldCoastIntro` bottom padding 11rem (overlap); `goldCoastServices` short top pad.

- [ ] `goldCoastContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em $ink` · h3 `.name clamp(1.6rem,2.4vw,2.1rem)/900/1.1/-0.03em` · body `.lead 1.02/1.85; .body .93/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px` · radius `16px,2rem` · literals `local $mist #f4f6f8, $line #e1e5ea; rgba($ink,.76/.12/.6)`
  - **Notes:** CITY HUB (goldCoast*): $ink=color.adjust($accent,-20%) (derived, 'stay in site theme') — 4th ink: #0b2433 (adelaide) vs this; .sector .66/700/2px; .use pill .72/600; .areasLabel .65/2.5px
- [ ] `goldCoastIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ pill → plain, confirm the background really is dark ≈ style change (pill → plain) · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$white on $accent PILL (hidden phone)` · h2 `.headline clamp(2.5rem,5.2vw,4.4rem)/900/1.06/-0.035em` · h3 `.kicker .66/800/2.5px` · body `.lead 1.15/500/1.75; .body .98/1.85` · pad `7rem 8rem 11rem (tab 5.5/4/9; pl 4.5/1.5/8; ph 4/1.25/7)` · max-w `1280px` · radius `4px,14px` · literals `$mist`
  - **Notes:** .btn .88/700/.3px 4px color.adjust -8% translateY(-1px) (btn variant A); .ctaNote .85; tilted .note cards w/ phone resets
- [ ] `goldCoastServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → keep 900px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.title 1.25/800/1.2/-0.015em; .groupTitle 1.6/900/-0.02em` · body `.desc .95/1.85; .groupNote .93/1.7 rgba($white,.8)` · pad `4rem 8rem 8rem (tab 3/4/6; pl 2.5/1.5/5; ph 2/1.25/4.5)` · max-w `900px (header)` · radius `18px,2rem` · literals `$mist,$line; color.adjust($mist,-3/-5%)`
  - **Notes:** continuation section (short top pad); .link .85/700/.3px underline offset 4px + svg translateX(3px) (arrow-link dup); .chip .72/600
- [ ] `goldCoastWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.title 1.55/900/1.15/-0.025em; .label .7/800/3px` · body `.lead 1.02/1.85; .body .96/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px` · radius `18px` · literals `$line; rgba($ink,.76/.62), rgba($white,.2/.75/.85/.92)`
  - **Notes:** .featured card raised translateY(-1.25rem); .proofValue clamp(2.2rem,3.4vw,3rem)/900/-0.04em; .proofLabel .66/700/1.5px; .proofLink dup of goldCoastServices .link

- [ ] **C_goldCoast family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_melbourne · Melbourne hub  (4 files)

City-hub page (Melbourne). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- `melbourneIntro` phone padding (5rem) is LARGER than landscape (4rem) — inversion; `melbourneContext` h2 is the small variant (1.75/2.8vw/2.5rem).
- `melbourneServices` dot-texture ::before 40px — copy of `rdgIntroduction` (36px).

- [ ] 🔒 `melbourneContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(1.75rem,2.8vw,2.5rem)/800/1.18/-0.025em (SMALL variant)` · body `.coverageLead 1.05/1.85; .splitRight p 1/1.9` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `2rem`
  - **Notes:** CITY HUB (melbourne*): uses standard globals ($text-primary etc, no local ink); sticky top 130; .tag .8/500 pill hover $accent-light; .tagsLabel .65/700/2.5px; .divider margin 6rem 0; tablet+phone identical
- [ ] `melbourneIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent OUTLINE PILL $accent-border (hidden phone)` · h2 `.headline clamp(2rem,3.5vw,3rem)/900/1.18 (NO letter-spacing)` · body `.body p 1/1.9` · pad `6rem 8rem (tab 5/4; pl 4/1.5; ph 5/1.25 — PHONE LARGER than phoneLandscape)` · radius `4px,2rem`
  - **Notes:** .btn .88/700/.3px 4px color.adjust -8% translateY(-1px) (btn variant A); .bodyLink weight 600 + border-bottom transparent; grid 1fr 420px; .right hidden phone
- [ ] `melbourneServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain)
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) OUTLINE PILL $accent-border (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.1/-0.03em $white-88` · h3 `.itemTitle clamp(1.1rem,1.6vw,1.35rem)/800/-0.01em` · body `.itemDesc .93/1.85 $white-55` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · raw @media `900 (grid remap)` · literals `rgba(4,105,153,.08/.04/.22); rgba(0,0,0,.5)`
  - **Notes:** dot-texture ::before 40px (comment: copied from rdgIntroduction) => `dot-texture` mixin; .headingMuted $white-35; .itemIndex 4rem/900 $white-08; .itemCategory .65/700/2px; .itemLink .8/700/.5px svg translateX(3px)
- [ ] `melbourneWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) OUTLINE PILL (hidden phone)` · h2 `clamp(2.4rem,4.5vw,3.8rem)/900/1.08/-0.035em $white-88` · h3 `.cardTitle clamp(1.05rem,1.6vw,1.2rem)/800/1.25/-0.01em` · body `.headerBody 1/1.85; .cardBody .9/1.8` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `6px,2rem` · literals `rgba(255,255,255,.55/.75); $dark-mid`
  - **Notes:** .headerLink .85/700/.3px border-bottom $accent-border svg translateX(3px) (arrow-link variant); .statValue clamp(2.8rem,5vw,4rem)/900/-0.04em; .statLabel .7/600/1.5px; card variants .dark/.accent/.light (accent top 3px)

- [ ] **C_melbourne family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_perth · Perth hub  (4 files)

City-hub page (Perth). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- 🔒 `perthServices` `.item::before{left/right:-8rem}` is coupled to section padding; dot texture 40px.
- Weight clash inside the city: Context h2 is 800, Intro/Services/Why are 900.
- 🔒 `perthIntro` `.mapContainer{margin-top:-3rem}`; raw `770px`.

- [ ] `perthContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain inline-block hidden phone` · h2 `clamp(2.2,4vw,3.4rem)/800/1.18/-.025em` · h3 `triggerTitle clamp(1.1,2.2vw,1.4)/700/-.015em` · body `panelBody .95/1.85; coverageLead 1/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `3/4/2rem`
  - **Notes:** city hub; perth* uses 800 here but 900 in Services/Intro/Why (intra-city weight clash); eyebrow plain here but PILL in perthServices; btn A (.85rem 4px -8%); accordion row duplicate of other FAQ copies
- [ ] 🔒 `perthServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px rgba($accent,.9) border $accent-border hidden phone` · h2 `clamp(2.2,4vw,3.4rem)/900/1.1/-.03em` · h3 `itemTitle clamp(1.1,1.6vw,1.35)/800/1.2/-.01em` · body `itemDesc .93/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `2rem pill` · literals `rgba(4,105,153,.08) dot texture; rgba($accent,.04/.22)`
  - **Notes:** item::before left/right:-8rem COUPLED to section padding; dot-texture 40px (rdgIntroduction 36px); desktop+tablet blocks identical; rgba($accent,.9) repeated = accent-on-dark candidate
- [ ] 🔒 `perthIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain hardcoded rgba(4,105,153,.9) hidden phone` · h2 `headline clamp(2.4,4.5vw,3.8rem)/900/1.12/-.025em` · body `lead 1.05/1.85/500; body 1/1.9` · pad `6rem 8rem (5/4,4/1,4/1) landscape==phone duplicate` · radius `4px` · raw @media `770` · literals `rgba(4,105,153,.9)`
  - **Notes:** btn A .88rem; mapContainer margin-top:-3rem; raw 770
- [ ] `perthWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → — (none today; don’t add without a content decision) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** h2 `clamp(2.4,4.5vw,3.8rem)/900/1.08/-.035em` · h3 `cardTitle clamp(1.05,1.6vw,1.2)/800/1.25/-.01em; statValue clamp(2.8,5,4)/900` · body `headerBody 1/1.85; cardBody .9/1.8` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `6px` · literals `rgba(255,255,255,.55/.75) where $white-55/$white-75 exist`
  - **Notes:** arrow-link border-bottom + svg translateX(3px)

- [ ] **C_perth family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_richmond · Richmond hub  (4 files)

City-hub page (Richmond). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- `richmondContext/Intro/Services/Why` are near copies of perth* (Intro lh 1.22 vs 1.12).
- 🔒 `richmondServices` `-8rem` coupling + `nth-child(2)` span; dot texture 40px.

- [ ] `richmondContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain hidden phone` · h2 `clamp(2.4,4.5vw,3.8rem)/800/1.18/-.025em` · h3 `panelTitle 1.1/800/-.01em` · body `panelBody .93/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `6/2rem` · literals `rgba(4,105,153,.07) dot texture 40px; rgba(0,0,0,.08)`
  - **Notes:** CITY HUB COPY of perthContext/sydneyContext (nicheCta, nicheBtn A, coverage, tags, panels) ; 3 cities = 3 different Context h2 clamps (perth 2.2/4/3.4, richmond 2.4/4.5/3.8, sydney 1.75/2.8/2.5) all 800
- [ ] `richmondIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hardcoded rgba(4,105,153,.9) hidden phone` · h2 `headline clamp(2.4,4.5vw,3.8rem)/900/1.22/-.025em` · body `lead 1.05/1.85/500; body 1/1.9` · pad `6rem 8rem (5/4,4/1,4/1)` · radius `4px` · raw @media `770` · literals `rgba(4,105,153,.9)`
  - **Notes:** ~identical to perthIntro (lh 1.22 vs 1.12); dead commented padding; landscape==phone dup; btn A .88rem
- [ ] `richmondServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px rgba($accent,.9) hidden phone` · h2 `clamp(2.2,4vw,3.4rem)/900/1.1/-.03em` · h3 `itemTitle clamp(1.1,1.6vw,1.35)/800` · body `itemDesc .93/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `2rem` · literals `rgba(4,105,153,.08) dot 40px`
  - **Notes:** ~identical to perthServices + nth-child(2) grid-row span 2 structural; left/right -8rem coupling; desktop+tablet dup
- [ ] `richmondWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px hidden phone` · h2 `clamp(2.4,4.5vw,3.8rem)/900/1.08/-.035em` · h3 `cardTitle clamp(1.05,1.6vw,1.2)/800` · body `cardBody .9/1.8` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `6` · literals `rgba(255,255,255,.55/.75)`
  - **Notes:** ~identical to perthWhy (adds eyebrow)

- [ ] **C_richmond family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_sydney · Sydney hub  (4 files)

City-hub page (Sydney). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- `sydneyIntro` phone padding 5rem > landscape 4rem (inversion); `sydneyWhy` overlapping 900px min/max media queries; 🔒 map `margin-top:-9rem`.
- `sydneyContext` h2 = melbourneContext h2 (small variant).

- [ ] `sydneyContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px rgba($accent,.9) plain hidden phone` · h2 `clamp(1.75,2.8vw,2.5rem)/800/1.18/-.025em` · h3 `panelTitle 1.1/800` · body `panelBody .93/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `6/2rem` · literals `rgba(4,105,153,.08) dot 40px`
  - **Notes:** dark variant of perth/richmondContext; same h2 clamp as melbourneContext; .divider
- [ ] `sydneyIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .7/700/3px hidden phone` · h2 `clamp(2,3.5vw,3rem)/900/1.18 (NO letter-spacing)` · body `lead 1.05/1.85/500; colRight 1/1.9` · pad `6rem 8rem (5/4, landscape 4rem 1.5rem, PHONE 5rem 1.25rem = inversion)` · radius `6`
  - **Notes:** differs from perth/richmondIntro (2/3.5/3 vs 2.4/4.5/3.8); btn A .88rem; statStrip
- [ ] 🔒 `sydneyWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain)
  - **Now:** eyebrow `pill .7/700/3px hidden phone` · h2 `clamp(2.2,4vw,3.2rem)/900/1.12/-.03em` · h3 `rowTitle clamp(1.05,1.6,1.25)/800` · body `rowBody .95/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · raw @media `700,900 min AND max (overlap at 900)`
  - **Notes:** row hover uses negative margins (layout shift hack); map margin-top -9rem; headerLink arrow-link
- [ ] `sydneyServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .7/700/3px rgba($accent,.9) hidden phone` · h2 `clamp(2,3.5vw,2.8rem)/900/1.15/-.02em` · h3 `featuredTitle clamp(1.6,2.8,2.2)/900; cardTitle 1.15/800` · body `subtitle 1/1.85; cardDesc .9/1.8` · pad `8rem (6/4,5/1.5,4.5/1.25)` · radius `8/6/4` · literals `rgba(255,255,255,.5/.78/.15/.25/.12/.4); rgba(4,105,153,.35/.4)`
  - **Notes:** featuredTag .62/700/2.5px; cardIndex .6/800/2.5px; grid>*:nth-child(2) span 2 structural; desktop+tablet dup

- [ ] **C_sydney family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_wollongong · Wollongong hub  (4 files)

City-hub page (Wollongong). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- All four files declare the SAME local `@mixin belowDesktop` — delete once the global exists (§4.2).
- `wollongongWhy` aside is sticky only at `deskL`.

- [ ] `wollongongContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · h3 `sector 1.3rem/800/-.015em` · body `lead 1.02/1.85; text .95/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `2rem chip`
  - **Notes:** LOCAL @mixin belowDesktop (tablet+phoneLandscape+phone) redeclared in 4 wollongong files; label .64/700/2.5px; places .64/700/2px
- [ ] 🔒 `wollongongWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain hidden phone` · h2 `clamp(2.2,4vw,3.3rem)/900/1.1/-.03em` · h3 `term 1.05/800` · body `detail .93/1.8` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `14`
  - **Notes:** local belowDesktop; aside sticky only at deskL; +/− \2212 accordion; question 1.08rem/700
- [ ] `wollongongIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain hidden phone` · h2 `clamp(2.3,4.6vw,3.9rem)/900/1.08/-.035em` · h3 `stopName 1/800` · body `lead 1.2/500/1.75; body .98/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `14`
  - **Notes:** local belowDesktop; same h2 as rebrandingIntro
- [ ] `wollongongServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain hidden phone` · h2 `clamp(2.3,4.4vw,3.7rem)/900/1.08/-.035em` · h3 `title clamp(1.4,2.2,1.8)/800/-.02em` · body `desc .95/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `14`
  - **Notes:** local belowDesktop; 6-col bento; tag .66/700/2.5px; underline links offset 4px

- [ ] **C_wollongong family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### C_darwin · Darwin (themed) hub  (4 files)

City-hub page (Darwin (themed)). Headings → `heading-main` (your favourite size); eyebrow plain or pill today. Eyebrow style varies inside the SAME page — apply D3: one plain eyebrow everywhere (no pill), hidden ≤449px.

**Watch**
- REGIONAL THEME: local `$earth/$ember/$sun/$cream/$line` palette repeated in all four files. Decision D10: keep as a documented local theme (recommended) or fold into a `darwin-theme` partial.
- `darwinServices` uses CSS-only radio tabs generated by an `@for` loop — ✋ leave the loop.

- [ ] `darwinContext.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$sun plain (hidden phone)` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.sector clamp(1.35rem,2.2vw,1.8rem)/800/-0.02em` · body `.lead 1.02/1.85; .body .97/1.9` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px` · radius `2rem pill`
  - **Notes:** REGIONAL THEME: local $earth #2a1810,$earth-line,$ember #e8743b,$sun #f6c177,$text-on-earth(+soft); same $earth/$ember/$sun in darwinIntro/Services/Why; .num 1.1/800/2px; .places .64/700/2px; .areasLabel .65/2.5px; .use chip .72/600
- [ ] `darwinIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$ember plain (hidden phone)` · h2 `.headline clamp(2.5rem,5.2vw,4.5rem)/900/1.06/-0.035em` · h3 `.seasonTitle 1.35/900/-0.02em` · body `.prose p 1/1.9; .seasonBody .95/1.8` · pad `7rem 8rem 8rem (tab 5.5/4/6; pl 4.5/1.5/5; ph 4/1.25/4.5)` · max-w `1280px` · radius `14px,4px`
  - **Notes:** local $cream #fbf6ef,$sun,$ember,$earth; .accentText color:$accent on cream; .btn .88/700 4px color.adjust($earth,+8%); .sideText 0.7/700/6px vertical writing-mode
- [ ] `darwinServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$ember plain (hidden phone)` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.title clamp(1.6rem,2.8vw,2.3rem)/900/1.12/-0.025em` · body `.desc 1/1.9` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · radius `14px,2rem` · literals `#faf5ee; rgba(4,105,153,.08/.35)`
  - **Notes:** local $earth,$ember,$line #eadfd2,$count; CSS-only radio tabs w/ @for loop (leave as-is); .tab .95/700; .tabNum .68/800/2px; .tag .66/700/2.5px; .point chip .76/600; .link .88/700 svg arrow
- [ ] `darwinWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$ember plain (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em` · h3 `.q 1.2/800/-0.01em` · body `.a .96/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px` · radius `14px` · literals `rgba(255,255,255,.45/.72/.4)`
  - **Notes:** local $cream,$cream-line,$earth,$ember,$sun; .proofValue clamp(2.2rem,3.4vw,3rem)/900/-0.04em; .proofLabel .66/600/1.5px; .proofLink svg arrow (dup of centralCoastFaq); .mark 4.5rem quote glyph

- [ ] **C_darwin family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

### 9.4 Campaign pages (`heading-main` tier)

#### H01 · bpa* + activex* — BPA & ActiveX pages  (11 files)

Eleven files: pill eyebrows (2.5–3px), `.title clamp(2,3.4vw,3rem)/900`, `8rem` padding.

**Watch**
- `bpaFaq` and `bpaProcess` do NOT import globals and REDECLARE tokens with DIFFERENT values (`$accent-light` rgba(.08) vs global #e8f4fa, `$border` .07 vs .08, `$accent-border` .28/.35, `$accent-dim` .12, extra `$white-45/38/10/05`, `$check-green`) — import globals and map each, deciding per token whether the local or global value wins.
- `bpaDocProcessing` declares local `$bp-desktop-xl/$bp-tablet-min/-max` and three near-identical theme blocks (`.cardDark/.cardMid/.cardAccent`); `bpaFaq/bpaProcess/bpaReplaces` also use local `$bp-*`.
- `bpaReplaces` duplicates `activexReplaces` cell/cellLabel/tagPill/xIcon/checkIcon/arrow blocks.
- 🐞 `activexReplaces` `.title` is `$gray` (#454545) on `$dark-bg` — probably invisible/low contrast.
- `activexAffectedCheck`: `boxOne/Three/Four` are identical; comment says Box 3 is “light” but it is dark.

- [ ] `activexFaq.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.7rem/700/2.5px/yes/$accent` · h2 `.title clamp(1.9rem,3.2vw,2.6rem)/900/1.2/-0.03em` · body `1rem/1.8` · pad `padding 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1200px (header 640)` · radius `2rem`
  - **Notes:** .questionText 0.98rem/700; .answerText 0.9rem/1.8
- [ ] `activexAffectedCheck.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1100→1200px (keep 1100 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.7rem/700/3px/yes/$accent` · h2 `clamp(1.8rem,3vw,2.5rem)/900/1.2/-0.03em` · body `1rem/1.8` · pad `padding 7rem 8rem (tab 5/4; pl 4/1.5; ph 3.5/1.25)` · max-w `1100px` · radius `16px,8px,2rem`
  - **Notes:** boxOne/Three/Four identical blocks; comment says Box 3 'light' but is dark; .cardText 0.92rem
- [ ] `activexHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.75rem/700/3px/yes/rgba($accent,.9)` · h2 `clamp(2.4rem,4.5vw,3.6rem)/900/1.1/-0.03em` · h3 `.noticeTitle 1.15rem/800` · body `.lead 1.1rem/1.75 + .body 0.98rem/1.85` · pad `padding 9rem 8rem 7rem` · max-w `1400px` · radius `4px,10px,2rem` · raw @media `960px`
  - **Notes:** ctaPrimary color.adjust(+6%); timeline 0.72rem/0.82rem
- [ ] `activexReplaces.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → `container` ≈ 1100→1200px (keep 1100 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow PILL 0.7rem/700/2.5px/yes/$accent` · h2 `.title clamp(2rem,3.4vw,3rem)/900/1.18/-0.03em color $gray(!on dark bg)` · body `1rem/1.85` · pad `padding 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1100px` · radius `2rem`
  - **Notes:** BUG? title $gray #454545 on $dark-bg; .cellLabel 0.65rem/2px; .tagPill 0.62rem/1.2px; .cellText 0.93rem
- [ ] `bpaApprovals.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/2.5px/yes/$accent PILL` · h2 `.title clamp(2rem,3.4vw,3rem)/900/1.18/-0.03em` · h3 `.stepLabel 1.05rem/800` · body `.intro 1rem/1.85; .stepBody 0.95rem/1.9` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · radius `8px,6px,50%` · raw @media `770px` · literals `#ffffff x4; rgba(4,105,153,.4/.1)`
  - **Notes:** .replacesEyebrow 0.68rem/2px; rgba($replace-x,.75/.65)
- [ ] `bpaDocProcessing.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → keep 700px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/2.5px/yes/rgba($accent,.9) PILL` · h2 `.title clamp(2rem,3.2vw,2.8rem)/900/1.18/-` · h3 `.cardHeading clamp(1.1rem,1.75vw,1.4rem)/800` · body `.subtitle 1rem/1.85; .cardBody 0.95rem/1.9` · pad `8rem (tab 6/4 via raw min/max; ph 5/1.25 raw 766)` · max-w `700px` · radius `6px,2rem` · raw @media `766px (+ local $bp-*)` · literals `#ffffff x8; rgba(255,255,255,.78/.92/.22/.12/.15/.18/.68/.06)`
  - **Notes:** LOCAL $bp-desktop-xl/$bp-tablet-min/-max; .cardIndex 0.63rem/2px; .cardEyebrow 0.67rem/1.5px; .tag 0.63rem/1.4px; .statValue 2rem/900; 3 near-identical theme blocks (.cardDark/.cardMid/.cardAccent); !important border-left
- [ ] `bpaEmailTriage.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba($accent,.9) PILL` · h2 `.heading clamp(1.85rem,2.8vw,2.6rem)/900/1.2/-0.025em #ffffff` · body `.body 1rem/1.9` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · radius `2rem` · raw @media `770px` · literals `#ffffff; rgba(255,255,255,.35)(=$white-35)`
  - **Notes:** .howLabel 0.68rem/3px; .inboxLabel 0.68rem/2.5px; font Courier New
- [ ] `bpaFaq.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/2.5px/yes/$accent PILL` · h2 `.title clamp(2rem,3.2vw,2.8rem)/900/1.2/-0.03em` · body `.intro 0.97rem/1.85; .answerText 0.93rem/1.95` · pad `8rem (tab 6/4; ph 5/1.25 at 449px)` · radius `2rem` · raw @media `local $bp-*` · literals `#ffffff`
  - **Notes:** ⚠ imports NO globals — REDECLARES TOKENS w/ DIFFERENT VALUES: $accent-light=rgba(.08) vs global #e8f4fa; $accent-border .28; $border .07 vs .08; $item-hover-bg; .questionText 0.97rem/700; .relatedLabel 0.62rem/2px
- [ ] `bpaIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL (hidden <450px)` · h2 `.headline clamp(2rem,3.5vw,3rem)/900/1.18/-` · h3 `.capTitle 1rem/700` · body `.body p 1rem/1.9; .capDesc p 0.93rem/1.8` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · radius `2rem,50%` · raw @media `770px,450px` · literals `#9a9da1 x2 (=$text-muted); #c8cacd x2; #d4d6d9; rgba(0,0,0,.07/.08)`
  - **Notes:** .statValue 2.2rem/900; .capNum 0.63rem; .capTag 0.63rem/2px; .capLabel 0.68rem/3px
- [ ] `bpaProcess.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/rgba($accent,.9) PILL` · h2 `.headline clamp(2rem,3vw,2.8rem)/900/1.18/-0.025em #ffffff` · h3 `.stepPhase clamp(1rem,1.4vw,1.15rem)/800; .diffHeading 0.95rem/800` · body `.intro 1rem/1.9; .diffBody 0.88rem/1.85` · pad `8rem (tab 6/4; ph 5/1.25 at 449px)` · radius `2px,50%` · raw @media `local $bp-*` · literals `#ffffff x3`
  - **Notes:** ⚠ imports NO globals — REDECLARES tokens: $accent-border .35 (global .28/.3), $accent-dim .12 (global .15); EXTRA $white-45/38/10/05, $dark-hover, $dark-drawer, $check-green; .processLabel 0.7rem/3px; .outputsLabel 0.62rem/2.5px
- [ ] `bpaReplaces.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/2.5px/yes/$accent PILL` · h2 `.title clamp(2rem,3.4vw,3rem)/900/1.18/-0.03em` · body `.intro 1rem/1.85; .cellText 0.93rem/1.85` · pad `8rem (tab 6/4; ph 5/1.25 at 449px)` · radius `6px,2rem` · raw @media `local $bp-*` · literals `#ffffff x3; rgba(4,105,153,.08/.25)`
  - **Notes:** DUPLICATES activexReplaces cell/cellLabel/tagPill/xIcon/checkIcon/arrow; .filterBtn dup of bpaFaq; local $bp-*

- [ ] **H01 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H02 · rdg* + webCapabilities — RDG / Web capabilities  (5 files)

Five files with pill eyebrows. `rdgIntroduction` is the ORIGIN of the dot-grid texture. `rdgCapabilities` and `webCapabilities` triplicate dark/mid/accent card themes (~25 lines ×3).

**Recipe**
- Build a `card-theme($bg,$fg,…)` mixin from `rdgCapabilities` and reuse it in `webCapabilities`.

**Watch**
- `webCapabilities` redeclares globals AFTER `@use … as *` (`$accent`, `$black #1a1a1a` vs global #1e1e1e, `$grayText #777a7e` vs global #a0a2a6, `$accentDark: $accentDark` self-reference…) — top-level assignment may mutate the module variable; remove all of them, then check what changes.
- Only file using BEM modifiers `card--light/dark/accent`.

- [ ] `rdgCapabilities.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .7/700/3px rgba($accent,.9) NOT hidden` · h2 `title clamp(2,3.2vw,2.8rem)/900/1.18/-.025em` · h3 `cardHeading clamp(1.15,1.8vw,1.45)/800/1.3/-.01em` · body `subtitle 1/1.85; cardBody .95/1.88` · pad `8rem (6/4,5/2,5/1.25)` · radius `2rem pill` · literals `#1e2d3d,#182533,#024d72,color.adjust(#18232e,-3%),#fff,rgba(255,255,255,.75/.15/.22/.9)`
  - **Notes:** cardDark/cardMid/cardAccent = ~25 identical lines x3 -> card-theme mixin; cardEyebrow .67/700/1.5px; cardIndex .63/800/2px; statValue 1.9/900
- [ ] `rdgHowItWorks.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px rgba($accent,.3) border` · h2 `title clamp(1.9,3vw,2.6rem)/900/1.18/-.025em` · h3 `stepHeading 1.05/800` · body `subtitle 1/1.85; stepBody .92/1.9` · pad `8rem (6/4,5/2,5/1.25)` · radius `2rem pill` · literals `#fff`
  - **Notes:** phase .62/800/3px; stepNumber 3.5rem/900; step has duplicate &:last-child blocks; native details/summary
- [ ] `rdgIntroduction.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px rgba($accent,.9) hidden phone` · h2 `headline clamp(2.2,4vw,3.4rem)/900/1.14/-.03em #ffffff` · body `lead 1.05/1.85; body .97/1.95` · pad `9rem 8rem 6rem (7/4/5, 6/2/4, 5/1.25/3.5)` · radius `6/2rem` · literals `#ffffff, rgba(4,105,153,.12) dot texture 36px; drop-shadow rgba(4,105,153,.18)`
  - **Notes:** ORIGIN of dot-texture (perthServices/melbourneServices copies); statValue clamp(1.6,2.5,2.2)/900
- [ ] `rdgUseCases.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px rgba($accent,.3) NOT hidden` · h2 `title clamp(1.9,3vw,2.6rem)/900/1.18/-.025em` · h3 `cardHeading 1/800` · body `subtitle 1/1.85; cardBody .88/1.85` · pad `8rem (6/4,5/2,5/1.25)` · radius `6` · literals `#fff`
  - **Notes:** rdgHowItWorks header identical; industry tag .62/800/2px
- [ ] `webCapabilities.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .7/700/3px not hidden` · h2 `clamp(2,3.5vw,3rem)/900/1.15/-.02em $black #1a1a1a` · h3 `cardHeading clamp(1.15,1.8,1.45)/800/-.015em` · body `headerSub 1.05/1.8; cardBody .95/1.85` · pad `8rem (6/4,5/1.25 - NO phoneLandscape)` · max-w `640 hdr` · radius `4` · literals `local $accent,$accentLight,$accentDark #024d72,$black #1a1a1a (global #1e1e1e),$grayText #777a7e (global #a0a2a6),$offWhite #f7f8f9,$border,$darkBg,$darkSurface,$darkText,$darkSubtext; #ffffff; rgba(255,255,255,.12/.15/.4/.5/.6/.7/.72/.8/.9)`
  - **Notes:** REDECLARES globals AFTER @use as * (top-level assignment may mutate the module var - verify); $accentDark: $accentDark self-ref; BEM class names card--light/dark/accent (only file); card theme triplicate (same as rdgCapabilities)

- [ ] **H02 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H03 · rebranding* — Rebranding page  (5 files)

Five files; three different h2 maxima on one page (3.4/3.7/3.9rem), three eyebrow styles (filled pill, plain).

**Watch**
- `$text-on-dark: rgba($white,.85)` redeclared in three files — use `$white-88` (≈).
- `rebrandingWhat` has the good `--body/--chip` custom-property theming pattern (candidate to generalise).
- `scroll-margin-top` is 150px in What but 4rem in Why.

- [ ] `rebrandingIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ pill → plain, confirm the background really is dark ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `FILLED pill white-on-accent .68/700/3px` · h2 `clamp(2.3,4.6vw,3.9rem)/900/1.08/-.035em` · body `lead 1.15/500/1.75; body .98/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `2rem pill` · raw @media `1024`
  - **Notes:** rebranding* 3 h2 maxes 3.4/3.7/3.9 on one page; eyebrow 3 styles (filled pill, plain)
- [ ] `rebrandingIncluded.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain` · h2 `clamp(2.3,4.4vw,3.4rem)/900/1.08/-.035em` · h3 `itemTitle 1.15/800; panelTitle 1.4/900` · body `lead 1.02/700/1.85` · pad `8rem` · max-w `1280` · radius `12/16/20` · raw @media `1024,766` · literals `local $text-on-dark rgba($white,.85)`
  - **Notes:** $text-on-dark redeclared in rebrandingWhat+Why (.85 vs global $white-88); <details> accordion
- [ ] `rebrandingWho.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain` · h2 `clamp(2.3,4.4vw,3.7rem)/900/1.08/-.035em` · h3 `name 1.2/800` · body `lead 1.02/1.85` · pad `8rem` · max-w `1280` · radius `14` · raw @media `1024,766`
  - **Notes:** li:nth-child(even) .iconTile structural selector
- [ ] 🔒 `rebrandingWhat.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain` · h2 `clamp(2.3,4.4vw,3.7rem)/900/1.08/-.035em` · h3 `title 1.5rem/900` · body `intro 1.02/1.85` · pad `8rem` · max-w `1280` · radius `18/12/10/999` · raw @media `1024,766` · literals `local $text-on-dark; rgba($text-primary,.08)`
  - **Notes:** good --body/--chip custom-property theming pattern; label .7/800/3px; scroll-margin-top 150px (Why uses 4rem)
- [ ] 🔒 `rebrandingWhy.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px white-65` · h2 `clamp(2.3,4.4vw,3.7rem)/900/1.08/-.035em white-90` · h3 `title 1.4rem/900` · body `lead 1.02/1.85` · pad `8rem` · max-w `1280` · radius `18` · raw @media `1024,766` · literals `local $text-on-dark`
  - **Notes:** .accent span colour is $white deliberately (accent too dark); .link white underline offset 4px; statLabel .68/700/1.5px; scroll-margin-top mismatch 4rem vs 150px

- [ ] **H03 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H04 · copilot* — Copilot page  (7 files)

Seven files; h2 `clamp(1.8,3,2.6rem)/900/1.2/-.02em`, `8rem` padding.

**Watch**
- `copilotIntegration`: padding `14rem 10vw 7rem`, `margin-top:-9rem` overlap, `text-transform: capitalize !important`, relies on global button — hero-like; keep local overrides.
- `copilotCta` is the canonical dual-CTA (white + outline) → `btn-on-accent` (white first, accent wipes in) + leave the outline button local for now; 4th copy of that pair.
- `copilotValue` has a local `@keyframes fadeSlideUp` (likely also in `animate.module.scss`); `sticky top:130px` (header coupling).
- `copilotIntro` phone padding 5rem > landscape 4rem (inversion).

- [ ] `copilotApps.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → keep 680px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent (hidden phone)` · h2 `.title clamp(1.8rem,3vw,2.6rem)/900/1.2/-0.02em $white-90` · h3 `.cardTitle 1.25rem/800/-0.01em` · body `.subtitle 1/1.8; .cardBody .92/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · max-w `680px hdr` · radius `10px,2rem`
  - **Notes:** .cardIndex .65/2px; .cardTag .65/700/2px pill; .cardLink .82/700/0.5px svg arrow; .accentCard dups .card padding/radius
- [ ] `copilotCta.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → keep 820px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/rgba(255,255,255,.5) literal (NOT hidden)` · h2 `.headline clamp(1.6rem,2.8vw,2.2rem)/900/1.2/-0.02em` · h3 `.listItem .88/600` · body `.body 1/1.85 rgba(255,255,255,.78)` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · max-w `820px card` · radius `12px,10px,4px` · literals `rgba(255,255,255,.5/.78/.88/.9/.12/.35/.55); rgba(4,105,153,.3)`
  - **Notes:** .btnPrimary(white)/.btnSecondary(outline) .88/700 4px = canonical dual CTA; 4th pair of that (also caseStudyCallout, companiesControl)
- [ ] `copilotDelivery.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → keep 680px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `.headline clamp(1.8rem,3vw,2.6rem)/900/1.2/-0.02em` · h3 `.cardPhase 1.15/800` · body `.intro 1/1.85; .cardBody .92/1.85; .outputItem .82` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · max-w `680px hdr` · radius `8px,50%` · literals `rgba(4,105,153,.08)`
  - **Notes:** .cardNum .63/700/2px; .cardSummary .95/600 $accent; .outputsLabel .65/2.5px (dup of bpaProcess deliverables); timeline node pattern
- [ ] 🔒 `copilotIntegration.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → — (none today; don’t add without a content decision) · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `none (no eyebrow)` · h2 `.heading clamp(2rem,3.5vw,2.8rem)/800/1.15/-0.025em` · h3 `.subheading 1.25/700` · body `.lead lh1.4 (tight); .capability .85/600` · pad `padding 14rem 10vw 7rem; margin-top:-9rem (overlap hack); only 770px step` · max-w `100% inner` · radius `8px` · raw @media `770,768,1024`
  - **Notes:** 10vw side padding outlier; `.ctaBtn text-transform:capitalize !important`; relies on global button
- [ ] 🔒 `copilotIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `.headline clamp(2rem,3.5vw,3rem)/900/1.18 (no ls)` · h3 `.appName 1.05/700` · body `.body p 1/1.9` · pad `6rem 8rem (tab 5/4; pl 4/1.5; ph 5/1.25 -> phone > landscape)` · radius `4px,8px,2rem`
  - **Notes:** .btn .88/700 4px color.adjust -8%; .panelLabel .68/700/3px; .appIndex .63/1.5px; sticky top:130px (5+ files)
- [ ] `copilotLicensing.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent (hidden phone)` · h2 `.headline clamp(1.8rem,3vw,2.6rem)/900/1.2/-0.02em $white-90` · body `.pricingBody .95/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · radius `10px,8px`
  - **Notes:** .priceValue 2.2rem/900; .priceFrom .65/2.5px; .priceNote .72; dark
- [ ] 🔒 `copilotValue.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL (hidden phone)` · h2 `.headline clamp(2rem,3.5vw,2.8rem)/900/1.18 (no ls)` · h3 `.itemTitle 1/700` · body `.intro 1/1.85; .itemDesc p .93/1.8` · pad `8rem (tab 6/4; pl 5/1.5; ph 5/1.25)` · radius `2rem,50%` · literals `#c8cacd x2; #d4d6d9 (also in bpaIntro => $dot/$line-strong tokens)`
  - **Notes:** local @keyframes fadeSlideUp (also likely animate.module.scss); .listLabel .68/700/3px; .itemTag .63/700/2px pill; sticky top:130px

- [ ] **H04 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H05 · googleMigration* — Google → Microsoft migration page (bento)  (6 files)

Six files with 20–26px radii and 12-column bento grids. Links are white with underline offset 3–4px.

**Recipe**
- Radii 20/22/26px → `$radius-xl` (22px): ≈ ±2px.

**Watch**
- `googleMigrationIntro` `.signsLabel` is a second (muted) eyebrow style.
- `googleMigrationSolution` has `scroll-margin-top:150px`.

- [ ] `googleMigrationCta.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → — (none today; don’t add without a content decision) · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** h2 `.heading clamp(2.1rem,3.8vw,3.1rem)/900/1.1/-0.035em $white` · body `.text 1/1.85` · pad `4rem 8rem 8rem (tab 3/4/6; pl 2.5/1.5/5; ph 2/1.25/4.5)` · max-w `1280px` · radius `26px` · raw @media `1024`
  - **Notes:** GOOGLE-MIGRATION era (bento, 22-26px radii); panel padding 4.5rem; .link white underline offset 4px; .muted $white-65 span
- [ ] `googleMigrationFormatting.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$white-65 plain (hidden phone)` · h2 `clamp(2.1rem,3.8vw,3.2rem)/900/1.1/-0.035em $white` · h3 `.title 1.4/900/1.2/-0.02em` · body `.lead 1.02/1.85; .body .94/1.85` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px (header 54rem)` · radius `22px,2rem` · raw @media `1024 x6`
  - **Notes:** 12-col bento; .tag .72/600; .link white underline offset 3px; .paper tone variants via `.paper &`
- [ ] `googleMigrationIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.3rem,4.4vw,3.7rem)/900/1.08/-0.035em` · h3 `.signTitle 1.05/800` · body `.text 1/1.85; .signText .9/1.75` · pad `7rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px` · radius `20px` · raw @media `1024 x3`
  - **Notes:** .signsLabel .68/700/3px $text-muted (2nd eyebrow style); border-top 2px $text-primary strip (dup w/ Process/Solution)
- [ ] `googleMigrationProcess.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.08/-0.035em` · h3 `.title 1.25/800/-0.015em; .number 3.5rem/900 outlined` · body `.lead 1.02/1.85; .body .92/1.8` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px (52rem hdr)` · radius `50%` · raw @media `1024`
  - **Notes:** top-rule + dot steps; .receiveLabel .62/800/2.5px; -webkit-text-stroke numeral
- [ ] 🔒 `googleMigrationSolution.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.08/-0.035em` · h3 `.title 1.5/900/1.15/-0.02em; .sectorTitle 1.15/800` · body `.lead 1.02/1.85; .body .94/1.85` · pad `8rem + scroll-margin-top 150px` · max-w `1280px` · radius `22px` · raw @media `1024 x2`
  - **Notes:** .tag .68/800/2.5px; .metaLabel .62/800/2.5px; .sectorLabel .68/700/3px; link white (accent on .paper)
- [ ] `googleMigrationWhyWord.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent plain (hidden phone)` · h2 `clamp(2.2rem,4vw,3.4rem)/900/1.08/-0.035em` · h3 `.title 1.75/900/1.15/-0.025em` · body `.lead 1.02/1.85; .body .97/1.85; .detail .88/1.7` · pad `8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `1280px (52rem hdr)` · radius `22px` · raw @media `1024 x3`
  - **Notes:** .label .68/800/3px $white-65; .term .82/800; .closing 1/1.85; 12-col bento 7/5

- [ ] **H05 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H06 · powerPoint* (Intro/Automation/Redesign/Support/Templates)  (5 files)

Five files; hubs-style h2 `clamp(2,3.6vw,3rem)/900/1.1/-.03em`. `powerPointSection` (service-page single) is in P02.

**Watch**
- The powerPoint* page mixes `7rem` and `8rem` padding and THREE different h2 clamps across its files (this family + `powerPointSection`).
- `powerPointAutomation`: section bg `$accent` with a white button (variant C) → `btn-on-accent`.

- [ ] `powerPointIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · h3 `navHeading 1.1/800` · body `lead 1.2/500/1.75; body .98/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · raw @media `1024`
  - **Notes:** facts label .72/700/1.5px; navTitle .68/700/3px; arrow translateX(4px)
- [ ] `powerPointAutomation.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px white-88 hidden phone` · h2 `clamp(2,3.6vw,3rem)/900/1.1/-.03em` · body `body 1/1.85` · pad `7rem 8rem (5.5/4,4.5/1.5,4.5/1.25)` · max-w `1280` · radius `3 (button)` · raw @media `1024`
  - **Notes:** section bg $accent; white button .8rem/.85rem 3px radius (button variant C); stat figure clamp(2.4,4,3.5)/900
- [ ] `powerPointRedesign.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2,3.6vw,3rem)/900/1.1/-.03em` · body `lead 1.05/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `12`
  - **Notes:** local $cols; label .66/700/2.5px
- [ ] `powerPointSupport.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2,3.6vw,3rem)/900/1.1/-.03em` · h3 `panelHeading 1.5/800` · body `lead 1.05/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `12` · raw @media `1024`
  - **Notes:** 6px dot bullet li::before (dup of ~6 files)
- [ ] `powerPointTemplates.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px white-65 hidden phone` · h2 `clamp(2,3.6vw,3rem)/900/1.1/-.03em` · body `body 1/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `1280` · radius `12` · raw @media `1024`
  - **Notes:** arrow-link white border-bottom (dup powerPointAutomation .link)

- [ ] **H06 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H07 · query* — Query page  (4 files)

Four files; h2 weight 800 in Services but 900 in Process/Comparison/SegmentMain with the SAME 1.9/3.2/2.75 clamp.

**Watch**
- `queryComparison`: `@extend .colTag` (cross-selector extend), `.attrCol` declared twice, long stale comment block, ~8× `rgba($accent,.9)`.
- `queryServices` / `queryProcess`: `sticky top:130px` (header coupling).

- [ ] `queryComparison.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `pill .68/700/3px rgba($accent,.9) NOT hidden phone` · h2 `clamp(2,3.4vw,3rem)/900/1.15/-.03em` · body `intro 1/1.85` · pad `8rem (6/4,5/1.5,4.5/1.25)` · max-w `NONE (inner); intro 60ch` · radius `6` · raw @media `767 min-width` · literals `rgba(255,255,255,.02)`
  - **Notes:** @extend .colTag (colTagAlt); .attrCol declared twice; ~8x rgba($accent,.9); arrow translate(2px,-2px); long stale comment block about valueCols
- [ ] 🔒 `queryProcess.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ now hidden ≤449px · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain (not hidden); promoEyebrow pill` · h2 `clamp(1.9,3.2vw,2.75rem)/900/1.15/-.03em; promoHeading clamp(1.75,2.8vw,2.4)/900/1.18/-.025em` · h3 `stepPhase 1/700` · body `intro 1/1.85` · pad `8rem; promo 6rem 8rem` · max-w `740 promo` · radius `2/4/2rem` · raw @media `770`
  - **Notes:** btn B .9rem 4px -6%; sticky top:130px; label .62/800/2px and .65/700/3px; same 1.9/3.2/2.75 clamp as queryServices but weight 900 vs 800
- [ ] `querySegmentMain.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px plain` · h2 `clamp(2,3.4vw,3rem)/900/1.15/-.03em` · body `body 1/1.85` · pad `7rem 8rem (6/4,5/1.5,4.5/1.25)` · radius `6` · raw @media `770`
  - **Notes:** inner gap 7rem; pill .78/600; link underline rgba($accent,.3) repeated
- [ ] 🔒 `queryServices.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.68/700/3px plain` · h2 `clamp(1.9,3.2vw,2.75rem)/800/1.15/-.025em` · h3 `serviceHeading 1.1/700` · body `intro 1/1.85; desc .95/1.8` · pad `8rem (6/4,5/1.5,4.5/1.25)`
  - **Notes:** sticky top:130px (header-height coupling) ; sideLink/serviceLink rgba($accent,.3) underline + translate(2px,-2px); native details accordion

- [ ] **H07 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H08 · companies* — Companies page (clamp-padding era)  (5 files)

Five files with the clamp-based padding `clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem)`, local `$sky` (#6fc3e8 = the new `$accent-on-dark`), repeated `.call/.ctaRow/.ctaNote` blocks.

**Recipe**
- Replace `$sky` with `$accent-on-dark` (identical value → zero change).

**Watch**
- The clamp padding is a different fluid model from the stepped ladder; keep it (D4: padding is left alone).
- `scroll-margin-top: 6rem` on four files.

- [ ] 🔒 `companiesControl.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$white-65 (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em` · h3 `.itemTitle 1.05/800; .exampleTitle 1.05/800` · body `.lead 1.15/500/1.8; .body 1/1.85; .itemBody .95/1.8` · pad `NEW ERA clamp(): clamp(2.5rem,5vw,4rem) clamp(1.25rem,7vw,8rem) clamp(4.5rem,9vw,8rem); scroll-margin-top 6rem` · max-w `1280px` · radius `20px,12px,4px,50%` · raw @media `1024,766`
  - **Notes:** panel clamp(2rem,5vw,4.5rem); .examplesLabel .65/2.5px; .exampleLink .82/700 svg arrow; .cta white-on-accent .88/700 4px
- [ ] 🔒 `companiesCreation.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$sky (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em $white-90` · h3 `.pointTitle 1.05/800` · body `.lead 1.02/1.85; .pointBody .92/1.75` · pad `clamp() era (clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem)); scroll-margin-top 6rem` · max-w `1280px` · radius `14px,10px` · raw @media `1024,766`
  - **Notes:** LOCAL $sky #6fc3e8 (= _apiIntegration $accent-on-dark = adelaideServices #6fc3e8); .point card radius 14px; .call/.ctaRow/.ctaNote repeat across all companies*
- [ ] 🔒 `companiesHeadaches.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em` · h3 `.itemTitle 1.1/800` · body `.lead 1.15/500/1.8; .body 1/1.85; .itemBody .97/1.8` · pad `clamp() era; scroll-margin-top 6rem` · max-w `1280px` · radius `14px,50%` · raw @media `1024`
  - **Notes:** .tick circle 2rem (dup of companiesControl); .proof card radius 14; .proofLabel .65/2.5px; `a{font-weight:700;color:$accent}` inline link repeated in .body/.proofText
- [ ] `companiesIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it)
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em` · h3 `.jumpTitle 1.05/800` · body `.lead 1.1/1.85` · pad `clamp() era` · max-w `1280px` · raw @media `1024,599`
  - **Notes:** .jumpLabel .65/2.5px; .jumpKicker .64/700/2px; .num .8/700/1.5px; raw 599px
- [ ] 🔒 `companiesSolution.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · inner → `container` ≈ 1280→1200px (keep 1280 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent (hidden phone)` · h2 `clamp(2.2rem,4.2vw,3.5rem)/900/1.1/-0.03em` · body `.body 1.05/1.85` · pad `clamp() era; scroll-margin-top 6rem` · max-w `1280px` · radius `2rem pill` · raw @media `1024,766,min 1025`
  - **Notes:** .part chip .8/600 pill border $border-strong

- [ ] **H08 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H09 · toolbars* — Toolbars page (clamp-padding era)  (6 files)

Six files, internally consistent (h2 `2.2/4.2vw/3.5rem` 900). Same clamp-padding model as companies*.

**Watch**
- ✋ `toolbarsApplyTab` timeline/keyframes (`slide/applyActive/buildActive`) — tokenise type/colour only; local `$side-padding`, `$slide-time`, `$cycle`.
- Radii 10/14/16/20 within one page.

- [ ] `toolbarsIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow`
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · body `text 1.05/1.8` · pad `clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem) (NO breakpoints)` · max-w `1280` · raw @media `1024`
  - **Notes:** clamp-padding era (same as companies*); toolbars* (6 files) internally consistent
- [ ] `toolbarsAutomation.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px white-65 hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em white-90` · h3 `groupTitle 1.15/800; itemTitle 1/700` · body `text 1.05/1.8; itemText .92/1.7` · pad `clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem); panel clamp(1.75rem,5vw,4.5rem)` · max-w `1280` · radius `20/14/10` · raw @media `1024`
  - **Notes:** dark panel in light section
- [ ] ✋ `toolbarsApplyTab.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · h3 `groupName .7/700/2px` · body `text 1.05/1.8; groupText .95/1.7` · pad `clamp(4.5rem,9vw,8rem) 0; side padding local $side-padding clamp(1.25rem,7vw,8rem)` · max-w `1280` · radius `16/10` · raw @media `1024,600`
  - **Notes:** local $slide-time/$cycle; keyframes slide/applyActive/buildActive; reduced-motion fallback
- [ ] `toolbarsLayout.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · h3 `label 1.15/800` · body `desc .95/1.7` · pad `clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem)` · max-w `1280` · radius `14` · raw @media `1024,600`
  - **Notes:** tile hover fills accent
- [ ] `toolbarsLifecycle.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · body `text 1.05/1.8` · pad `clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem)` · max-w `1280` · radius `16` · raw @media `766`
  - **Notes:** card hidden <=766
- [ ] `toolbarsLockdown.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.68/700/3px hidden phone` · h2 `clamp(2.2,4.2vw,3.5rem)/900/1.1/-.03em` · h3 `cardTitle 1.35/800` · body `point .98/1.6` · pad `clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem)` · max-w `1280` · radius `16/10` · raw @media `1024`
  - **Notes:** radii 10/14/16/20 across toolbars page

- [ ] **H09 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H10 · Case studies  (3 files)

Three pages-worth of case-study UI.

**Watch**
- `caseStudyDetail` declares a LOCAL `$…` set and has the largest repeat of the 4-step padding (7 blocks); hero top 14rem.
- `caseStudySubmission` is a FORM (inputs, `submitBtn` hover LIGHTENS (+6%) instead of darkening) — likely duplicate of `contact` / popup-form fields.

- [ ] `caseStudies.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · inner → keep 700px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent PILL (NOT hidden on phone)` · h2 `.heroTitle clamp(2.1rem,4vw,3.2rem)/900/1.15/-0.025em` · h3 `.rowTitle 1.6rem/800 (pl 1.35; ph 1.25)` · body `.heroSubtitle 1.05/1.8; .rowSummary .98/1.8` · pad `hero 7rem 8rem 4rem; section 5rem 8rem 8rem (tab 4/4; pl 3/2; ph 2.5/1.25)` · max-w `700px` · radius `8px,2rem`
  - **Notes:** .industry .62/800/2px pill; .resultItem .9/600; .readMore .9/700 svg arrow (dup)
- [ ] `caseStudyDetail.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent PILL (NOT hidden)` · h2 `.heroTitle clamp(2.1rem,3.6vw,3rem)/900/1.18/-0.025em` · h3 `.approachHeading 1.05/800; .statValue clamp(1.6rem,2.4vw,2.1rem)/900; .quoteText clamp(1.2rem,2vw,1.5rem)/700; .videoHeading clamp(1.5rem,1.2rem+1.5vw,2rem) (no weight)` · body `.heroSummary 1.05/1.85; .bodyText 1/1.9; .approachBody .95/1.8` · pad `hero 14rem 8rem 5rem (tab 11/4/4; pl 9/2/3; ph 8/1.25/2.5); 6 more 8rem/4rem/2rem/1.25rem padding blocks` · max-w `1400px,900px` · radius `10px,8px` · raw @media `449px` · literals `rgba(0,0,0,.35/.08/.12) shadows`
  - **Notes:** .blockLabel .68/800/2.5px; .relatedLink svg arrow; .resultItem tick list (dup of caseStudies); LARGEST repeat of the 4-step padding
- [ ] `caseStudySubmission.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · inner → keep 720px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$accent PILL` · h2 `clamp(1.9rem,3.5vw,2.6rem)/900/1.15 (no letter-spacing)` · h3 `.confirmationHeading 1.6rem/900` · body `.intro 1/1.75` · pad `.section 6rem 2rem max 720 (ph 3.5/1.25); .page padding-top 11rem` · max-w `720px` · radius `6px,8px,2rem`
  - **Notes:** FORM styles (input/textarea 0.95rem radius 6; submitBtn .95/700 radius 6 color.adjust +6% LIGHTEN vs -8% darken elsewhere; label .85/700) likely dup of contact/popup forms

- [ ] **H10 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### H11 · Hub singles  (4 files)

Standalone components (`heading-main` tier).

**Watch**
- `howWeWork` and `introduction` SHADOW globals (`$accent`, `$accentLight`, `$black #1a1a1a` vs #1e1e1e, `$grayText #777a7e` vs #a0a2a6!, `$offWhite #f7f8f9` vs #f8f8f8, `$border`, `$darkBg`) — same names, different values: delete the locals one at a time and compare.
- `microsoftSolutions` imports globals but never uses them (own `$ms-*` tokens); `@use "./globals.scss"` is marked “unused”.
- `introduction` has a stale comment “assumes globals has mixins” and a WIPE `.ctaBtn`.
- `goodToKnow` uses `svg margin-top:-16rem` (hack) and a `:global` keyframe `gtk-pulse`.

- [ ] 🔒 `goodToKnow.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · inner → keep 600px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.68rem/700/3px/yes/$accent OUTLINE PILL (border $accent-border; NOT hidden)` · h2 `clamp(2rem,3.4vw,2.9rem)/900/1.15/-0.028em $white-88` · body `.para 1/1.85; .remoteText .88/1.7` · pad `8rem 8rem 4rem 8rem (tab 6/4; pl 5/1.5; ph 4.5/1.25)` · max-w `600px (header)` · radius `6px,2rem` · raw @media `1024` · literals `rgba(4,105,153,.08)`
  - **Notes:** :global @keyframes gtk-pulse; `svg margin-top:-16rem` hack; heading clamp unique (3.4vw/2.9rem)
- [ ] 🔒 `howWeWork.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain, now hidden ≤449px ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/rgba($accent,.9) OUTLINE PILL border rgba($accent,.35) (NOT hidden)` · h2 `.headline clamp(2rem,3vw,2.8rem)/900/1.18/-0.025em #fff` · h3 `.reasonHeading .95/800/-0.01em; .stepLabel 1/800` · body `.intro 1/1.9; .reasonBody .88/1.85; .stepDetail .83/1.85` · pad `8rem (tab 6/4; ph 5/1.25; NO phoneLandscape)` · radius `2rem,2px,4px` · literals `#ffffff, #18232e, #1e2f3e, rgba(255,255,255,.55/.5/.45/.38/.3/.18/.1)`
  - **Notes:** SHADOWS GLOBALS: redeclares $accent,$accentLight,$black #1a1a1a (global #1e1e1e),$grayText #777a7e (global #a0a2a6!),$offWhite #f7f8f9 (global #f8f8f8),$border,$darkBg #111820 (=$dark-bg),$darkBorder; .ctaBtn .88/700/1px WIPE variant; sticky top 130px
- [ ] 🔒 `introduction.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` ≈ pill → plain ≈ style change (pill → plain) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.75rem/700/3px/yes/$accent OUTLINE PILL border rgba($accent,.3)` · h2 `.headline clamp(2rem,3.5vw,3rem)/900/1.18/-0.02em $black` · h3 `.serviceLabel 1.05/700; .counterValue 2.4rem/900` · body `.introBody p 1.05/1.9 $grayText; .serviceDesc p .95/1.8` · pad `margin 8rem (tab 6/4; ph 5/1.25) [margin not padding]` · radius `2rem,2px,50%` · literals `#fff; color.adjust($grayText,+15/20/25%)`
  - **Notes:** SHADOWS GLOBALS: redeclares $accent,$accentLight,$black #1a1a1a,$grayText #777a7e,$offWhite,$border; stale comment 'assumes globals has mixins'; @keyframes fadeSlideUp/growLine/counterPop; .ctaBtn .9/700/1px WIPE; .serviceLink .85/700/.5px arrow svg (arrow-link dup); .statLabel .8/500/.5px; sticky top 130; .serviceTag pill .65/700/2px
- [ ] `microsoftSolutions.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.7rem/700/3px/yes/$ms-theme plain` · h2 `.sectionTitle clamp(1.8rem,3vw,2.6rem)/900/1.2/-0.02em $ms-black` · h3 `.cardHeading 1/800/1.35/-0.01em; .ctaCardTitle 1.5/900` · body `.cardBody .88/1.8; .pointItem .82` · pad `8rem (tab 6/4; ph 5/1.25; NO pl)` · radius `2rem,50%` · literals `#ffffff,#fff, rgba(4,105,153,.1/.25/.2), rgba(255,255,255,.55/.72)`
  - **Notes:** SHADOWS GLOBALS with own $ms-* tokens ($ms-theme #046999,$ms-theme-light,$ms-black #1a1a1a,$ms-gray #777a7e,$ms-border,$ms-bg #f7f8f9,$ms-card-bg) — imports globals but never uses them; .cardCategory pill .68/700/2px; .ctaCardBtn inverted white button .85/700/1px

- [ ] **H11 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

### 9.5 Form-era, government and accessibility pages

#### F01 · Form-era pages (form*, popupForms*, quickParts*, proposalAssistantDemo, fillFormMain)  (16 files)

Sixteen files with a different system: eyebrow `0.85rem/700/0.08em`, FIXED h2 sizes (formBuilding 2.2, formDataJourney 2.3, formFieldsAnatomy 2.4, popupForms Hero 2.6 / Problem 2.4 / Services+Process 2.2, quickParts 2.4), `7rem 6vw` padding, 1200–1400 inner.

**Recipe**
- The three-way popupForms/quickParts/form* h2 split goes away automatically once all use `heading-section` — this is the single biggest “same heading, different size” fix on the site.

**Watch**
- `fillFormMain`: 🐞 `@media screen and (max-width: "700px")` is QUOTED (invalid → rule never fires); eyebrow is `.content p:first-child` (needs a class).
- `formBuilding`: header comment names the wrong file (`segment4Repeat`); eyebrow is `.intro p:first-child`.
- `popupFormsHero`/`popupFormsProcess`: hover-border hack (`.ctaBtn:hover{border:1px solid $accent}`) compensates for the global `.btn` wipe — keep until the global button is replaced; `popupFormsProcess .cta` declared twice.
- `popupFormsUseCases`: NO globals import; sets `font-family: var(--font-garamond)` on h2/tile titles (serif!) — verify intent; local `$brand/$ink #0f1f2b/$muted/$page-bg`.
- `formProtectionExplainer`: `.methodBadge/.methodBadgeMuted` and `.methodList/.methodListMuted` are duplicates differing only in colour.
- Section padding `7rem 6vw` → keep the vertical value, horizontal gutter → `$gutter` (10vw, D12).

- [ ] `fillFormMain.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` (needs a class — structural selector today) · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it)
  - **Now:** eyebrow `0.85rem/700/0.08em/yes/$accent (as `.content p:first-child`)` · h2 `h2 2.3rem fixed (ph 1.8rem) lh1.2` · body `p 1.05rem/1.7` · pad `7rem 6vw (tab 5rem 6vw; ph 4rem 6vw)` · max-w `1300px` · raw @media `700 (QUOTED STRING)`
  - **Notes:** BUG: `@media screen and (max-width: "700px")` quoted value => likely invalid, svg never hides; eyebrow variant = conversion* (0.85/700/0.08em); relies on :first-child hack for eyebrow
- [ ] 🔒 `formBuilding.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` (needs a class — structural selector today) · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it)
  - **Now:** eyebrow `0.85rem/700/0.08em/yes/$accent (as `.intro p:first-child`)` · h2 `h2 2.2rem lh1.2 (ph 1.75rem) no weight` · h3 `.scenarioTag .78/700/.04em` · body `.introBody 1.05/1.7; .scenarioBody 1/1.7` · pad `margin 6rem auto; padding 0 6vw (ph margin 4rem)` · max-w `1300px`
  - **Notes:** form* era (6vw gutters, conversion-style eyebrow). Header comment names wrong file (segment4Repeat). Inline `a{color:$accent;font-weight:700}` x2; sticky svg top 6rem; border-left 3px $accent-border rows
- [ ] `formDataJourney.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.85rem/700/0.08em/yes/$accent block` · h2 `.heading 2.3rem lh1.2 (ph 1.8rem)` · h3 `.stageTitle 1.2` · body `.intro 1.05/1.7; .stageBody .93/1.65; .footNote .98/1.7` · pad `7rem 6vw 8rem (ph 4rem 6vw 5rem)` · max-w `1200px (+700/760 sub-widths)` · radius `14px,999px` · literals `rgba(13,27,42,.22) shadow`
  - **Notes:** form* era; .stageTag pill .72/700/.04em on $accent-light; deskL + desktop identical margin-top blocks; tablet+phone identical; connector svg
- [ ] 🔒 `formFieldsAnatomy.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.85rem/700/0.08em/yes/$accent block` · h2 `.heading 2.4rem lh1.2 (ph 1.8rem)` · h3 `.rowLabel 1.05/700` · body `.intro 1.05/1.7; .rowAnswer .95/1.65` · pad `7rem 6vw (ph 4rem 6vw)` · max-w `1200px` · radius `14px,50%` · literals `rgba(13,27,42,.18) shadow`
  - **Notes:** form* era; accordion rows via <details> (FAQ dup #?); sticky top 6rem; .rows margin-top 7vw; tablet+phone identical
- [ ] `formProtectionExplainer.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.85rem/700/0.08em/yes/$white-65 block` · h2 `.heading 2.2rem lh1.25 (ph 1.7rem) $white-90` · h3 `.methodTitle 1.25` · body `.body 1/1.7; li .9/1.5` · pad `7rem 6vw (ph 4rem 6vw)` · max-w `1300px` · radius `12px,999px`
  - **Notes:** form* era (dark); .methodBadge + .methodBadgeMuted pill .72/700/.04em dup; .methodList + .methodListMuted dup (only colour/dot differ)
- [ ] 🔒 `popupFormsHero.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `capLabel .85/700/.06em upper (no eyebrow)` · h2 `.heading 2.6rem lh1.15 (phone 1.9) no weight` · h3 `capTitle 1.1rem` · body `body 1.05/1.7` · pad `7rem 6vw (phone 4rem 6vw)` · max-w `1400` · radius `12(none) 999 pill`
  - **Notes:** form-era; .ctaBtn:hover{border:1px solid $accent} = hover-border hack compensating for global .btn wipe (also popupFormsProcess .cta, promo .link, payment .homeButton, relatedLinks a:hover); sticky leftCol top:6rem
- [ ] `popupFormsProblem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.85/700/.08em block` · h2 `2.4rem lh1.2 (phone 1.8)` · h3 `rowName 1.15rem` · body `intro 1.05/1.7` · pad `7rem 6vw (phone 4rem 6vw)` · max-w `760 hdr/1100 rows`
  - **Notes:** form-era; popupForms family has 3 h2 sizes: Hero 2.6, Problem 2.4, Services/Process 2.2
- [ ] `popupFormsServices.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.85/700/.08em white-65 block` · h2 `2.2rem lh1.2 (phone 1.7)` · h3 `serviceHeading 1.3rem` · body `intro 1/1.7` · pad `7rem 6vw (phone 4rem 6vw)` · max-w `1400` · radius `12`
  - **Notes:** .serviceAccent card variant (accent bg) dup of quickParts storageRecommended/cardFeatured
- [ ] `popupFormsProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.85/700/.08em block` · h2 `2.2rem lh1.2 (phone 1.7)` · h3 `stepHeading 1.15rem; stepNum 1.4rem/800` · body `body 1/1.7` · pad `7rem 6vw` · max-w `1300` · literals `#fff`
  - **Notes:** .cta DECLARED TWICE (second has color:#fff + hover border hack)
- [ ] `popupFormsUseCases.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.8/700/.12em upper block` · h2 `clamp(2.2,4vw,3.4rem) lh1.1 no weight + font-family var(--font-garamond) (serif!)` · h3 `tileTitle 1.65rem/700 garamond; tileNum 5.5rem garamond` · body `headerBody 1.05/1.75` · pad `5rem 2.5rem 6rem (phone 3.5rem 1.25rem 4rem)` · max-w `1400` · radius `24` · raw @media `1100,760` · literals `$brand #046999 dup of $accent; $brand-deep #03506f; $ink #0f1f2b (5th ink); $muted #55626d; $page-bg #f1f2f4; #8a949c; rgba(15,31,43,*)`
  - **Notes:** ⚠ imports NO globals — NO globals; only file setting heading font-family locally -> CHECK global h1-h6 rule (accent resets to --font-aptos); bento 12-col radius 24
- [ ] `proposalAssistantDemo.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.85/700/.08em block` · h2 `2.2rem lh1.2 (phone 1.7)` · h3 `highlights h3 1.05rem` · body `intro default; li p .95/1.65` · pad `7rem 6vw` · max-w `1200` · radius `3` · raw @media `1024` · literals `rgba(0,0,0,.12) shadow`
  - **Notes:** form-era; link ::after ' →' pattern
- [ ] `quickPartsGallery.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.85/700/.08em (no block)` · h2 `2.4rem lh1.2 (phone 1.8)` · h3 `cardName 1.15rem` · body `intro default; cardDesc .95/1.65` · pad `7rem 6vw (phone 4rem 6vw)` · max-w `1200` · radius `12`
  - **Notes:** form-era; quickParts* all 2.4rem (internally consistent; differs from popupForms)
- [ ] `quickPartsIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.85/700/.08em` · h2 `2.4rem lh1.2 (phone 1.8)` · body `body default/1.7` · pad `7rem 6vw` · max-w `1300`
  - **Notes:** statValue 1.4rem/700
- [ ] `quickPartsProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.85/700/.08em` · h2 `2.4rem lh1.2` · h3 `stepTitle 1.1rem` · body `stepDesc .95/1.65` · pad `7rem 6vw` · max-w `1200`
  - **Notes:** number 2rem/700
- [ ] `quickPartsSystem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own
  - **Now:** eyebrow `.85/700/.08em white-65` · h2 `2.4rem lh1.2 white` · h3 `rowTitle 1.15rem/700` · body `intro white-88/1.7` · pad `7rem 6vw` · max-w `1200`
  - **Notes:** section bg $accent; .light heading span white-65
- [ ] `quickPartsTypes.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.85/700/.08em white-65` · h2 `2.4rem lh1.2 white-90; storageHeading 1.5rem` · body `intro white-55/1.7` · pad `7rem 6vw` · max-w `1200` · radius `12`
  - **Notes:** .storageRecommended accent card

- [ ] **F01 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### F02 · govDept* — Government departments page  (5 files)

Five files: eyebrow `0.85rem/700/0.06em` (third eyebrow family), h2 `clamp(2.1,3.8vw,3.2rem)` with NO weight (relies on global h2) and inconsistent line-height (1.1 vs 1.25), `6rem 10vw` / `7rem 6vw` padding.

**Recipe**
- Set the weight explicitly via `heading-section`; the family currently inherits whatever the global h2 rule is.

**Watch**
- `govDeptProcess` `.cta` is unstyled (global button); `govDeptCompliance` has an inline `a{accent,700}` (→ `inline-link`).

- [ ] `govDeptCapabilities.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow-on-dark` ≈ confirm the background really is dark · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1400→1200px (keep 1400 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.85rem/700/0.06em/yes/$white-65 block` · h2 `clamp(2.1rem,3.8vw,3.2rem)/900/1.25 $white-90 (ph 1.6rem)` · h3 `.cardHeading 1.15 (no weight)` · body `.intro lh1.7; .cardDescription .92/1.6` · pad `7rem 6vw (ph 4rem 6vw)` · max-w `1400px grid` · radius `12px`
  - **Notes:** GOVDEPT era: eyebrow .85/.06em (3rd eyebrow family); .cardLink .9/700; .cardAccent featured card; only phone mixin for padding
- [ ] `govDeptCompliance.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `0.85rem/700/0.06em/yes/$accent block` · h2 `clamp(2.1rem,3.8vw,3.2rem) NO weight lh1.1 (ph 1.5rem)` · h3 `.standardLabel 1.05` · body `.intro lh1.7; .standardBody .95/1.6` · pad `6rem 10vw (ph 3.5rem 6vw)` · max-w `1300px` · radius `12px`
  - **Notes:** govDept era; h2 relies on global weight; inline a{accent,700}
- [ ] `govDeptIntro.module.scss`
  - **Target:** h2 → `heading-main` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it)
  - **Now:** eyebrow `0.85rem/700/0.06em/yes/$accent block` · h2 `clamp(2.1rem,3.8vw,3.2rem) NO weight lh1.25 (ph 1.6rem)` · body `p lh1.7` · pad `6rem 10vw (ph 3.5rem 6vw)` · max-w `1300px`
  - **Notes:** govDept era; line-height 1.25 here vs 1.1 elsewhere
- [ ] `govDeptTemplateSystem.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it)
  - **Now:** eyebrow `0.85rem/700/0.06em/yes/$accent block` · h2 `clamp(2.1rem,3.8vw,3.2rem) NO weight lh1.1 (ph 1.5rem)` · body `p lh1.7` · pad `6rem 10vw (ph 3.5rem 6vw)` · max-w `1300px`
  - **Notes:** govDept era; grid gap 8rem
- [ ] `govDeptProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` · padding → leave (D4); horizontal vw gutter → `$gutter` (10vw) unless this file needs its own · inner → `container` ≈ 1300→1200px (keep 1300 only if the layout needs it)
  - **Now:** eyebrow `0.85rem/700/0.06em/yes/$accent block` · h2 `clamp(2.1rem,3.8vw,3.2rem) NO weight lh1.1 (ph 1.5rem)` · h3 `.stepHeading 1.1` · body `.body lh1.7; .stepBody .95/1.6` · pad `7rem 6vw (ph 4rem 6vw)` · max-w `1300px`
  - **Notes:** govDept era; .stepNum 1.6/700 $accent; .cta unstyled (global button)

- [ ] **F02 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### A01 · accessibility* — Accessibility page  (4 files)

Four files: `.9rem/700` plain eyebrow, fixed h2 1.9–2.1rem, `6rem 1.5rem` padding, 960/1180px inner.

**Recipe**
- `accessibilityPageSegmentMain` uses `p:first-child` as the eyebrow (needs a class in JSX).

**Watch**
- `accessibilityChecklist` has tablet+phone duplicate pairs.
- `accessibilityStandards` has no eyebrow.

- [ ] `accessibilityChecklist.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → `container` ≈ 1180→1200px (keep 1180 only if the layout needs it) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** eyebrow `.eyebrow 0.9rem/700/-/no/$accent` · h2 `1.9rem/-/1.3/-` · h3 `.elementHeading 1.15rem` · body `inherit/1.7` · pad `padding 6rem 1.5rem` · max-w `1180px` · radius `8px,20px,50%`
  - **Notes:** tablet+phone duplicate pairs
- [ ] `accessibilityPageSegmentMain.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` (needs a class — structural selector today) ≈ now hidden ≤449px · inner → `container` ≈ 1180→1200px (keep 1180 only if the layout needs it)
  - **Now:** eyebrow `p:first-child 0.9rem/700/-/no/$accent` · h2 `2rem/-/1.3/-` · body `inherit/1.7` · pad `padding 6rem 1.5rem` · max-w `1180px` · raw @media `700px`
- [ ] `accessibilityProcess.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → `eyebrow` ≈ now hidden ≤449px · inner → `container` ≈ 1180→1200px (keep 1180 only if the layout needs it)
  - **Now:** eyebrow `.eyebrow 0.9rem/700/-/no/$accent` · h2 `1.9rem/-/1.3/-` · h3 `.stepHeading 1.15rem` · body `inherit/1.7` · pad `padding 0 1.5rem 6rem` · max-w `1180px`
  - **Notes:** .stepNum 1.6rem/800
- [ ] `accessibilityStandards.module.scss`
  - **Target:** h2 → `heading-section` · eyebrow → — (none today; don’t add without a content decision) · inner → keep 960px (text measure) · radii → `$radius` (1.5rem) on cards/panels; keep 50%/pill/buttons
  - **Now:** h2 `2.1rem/-/1.25/-` · body `inherit/1.7` · pad `padding 6rem 1.5rem` · max-w `960px` · radius `10px`
  - **Notes:** .pillarNote 0.92rem

- [ ] **A01 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

### 9.6 Legacy components (last)

#### L01 · Legacy page segments  (16 files)

The oldest content blocks: fixed h2 (2–3rem / 900, `$black`), `10vw` gutters, literal colours (`#777a7e`, `#0eaa0e`, `#046999`), hand-rolled WIPE buttons (radius 0.1rem), `.tick` defined 2–3× per file, structural selectors (`p:first-child`, `p:nth-of-type`). Migrate LAST and in small steps.

**Recipe**
- Order: (1) literal → token swaps only; (2) delete duplicate `.tick/.points/.point` blocks (keep the LAST — it is the one winning today); (3) only then consider headings/padding.
- Eyebrow here is “`p:first-child` accent 1px/700, no size” — replacing it needs a class added in the JSX; schedule with the TSX work.

**Watch**
- `isRight` and `isRightWord` are BLOCK-DUPLICATES (contentWrapper/sub/text/textAlone/contentGrid/bar/excerpt/listItem).
- Green tick `#0eaa0e` appears in pageSegment, newPageSegment(4), pageSegment3/4/Center → `$success`.

- [ ] `pageSegment.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `p:first-child inherit/700/1px/no/$accent` · h2 `2.5rem/900/-/-` · body `inherit/2rem #777a7e` · pad `margin 8rem (tab 6rem 4rem)` · radius `0.1rem,50%` · raw @media `700px` · literals `#777a7e x5,#0eaa0e x6,#046999 x2,#fff x2`
  - **Notes:** .points .point .tick defined twice; @include phone twice in .semi; full .btn defined locally
- [ ] `aboutUs.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.underline p 1.125rem/600/-/no/$accent` · h2 `3rem/-/-/-` · body `1.25rem/2rem` · pad `padding 8rem 10vw 2rem` · literals `#bdbdbd6e,#fff`
  - **Notes:** font var(--garamond); .phone 1.125rem/700
- [ ] `boxSegment.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h2 clamp(1.6rem,2.4vw,2.8rem)/700/1.2/-0.02em #1a1a1a` · body `p 1.25rem/1.75 #6b7280; li 1.2rem/1.75` · pad `padding 6rem 10vw 5rem` · radius `1.75rem` · raw @media `768,770,480,1200` · literals `#6b7280 x2,#1a1a1a,#0eaa0e,#df1c1c,#ffffff x2`
  - **Notes:** SHADOWS globals: local $dark-bg=#232528 (global #111820), $accent redeclared; invalid prop `list-style-type-color`; $dark-card=#ffffff
- [ ] `customTab.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h2 3rem/900 $black (hardcoded, LEGACY)` · body `p 1.125rem/2.125rem $darkGrayText` · pad `6rem 10vw`
  - **Notes:** legacy era; h2 3rem same as contact .active h2, pageSegment etc.
- [ ] `isRight.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.sub p accent 1px/600 + border-bottom 6px #b7b7b754 (no size)` · h2 `.contentWrapper h2 3rem/900 $black margin 1.5rem 0 2rem` · h3 `.excerpt h3 1.125/700 (ph 1.25rem)` · body `.text 1.125rem/2.125rem; .excerpt p #777a7e lh1.5rem` · pad `7rem 10vw (1300: 7rem 5vw; ph 7rem 1rem)` · raw @media `1300` · literals `#b7b7b754, #777a7e`
  - **Notes:** LEGACY; BLOCK DUPLICATE of isRightWord (contentWrapper/sub/text/textAlone/contentGrid/bar/excerpt/listItem identical); .btn padding 2rem 4rem; tablet/phoneLandscape/phone near-identical; grayscale hover triple vendor prefixes
- [ ] `isRightWord.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.sub p accent 1px/700 (weight 700 vs 600 in isRight)` · h2 `.contentWrapper h2 3rem/900` · h3 `.excerpt h3 1.125/700` · body `.text 1.125/2.125rem` · pad `7rem 10vw (1300: 7rem 5vw)` · radius `0.1rem` · raw @media `1300,1200` · literals `#b7b7b754,#046999,#fff !important,#777a7e`
  - **Notes:** LEGACY; dup of isRight; .linkBtn hand-rolled WIPE button with literal #046999/#fff !important/radius .1rem/ls 1px/ capitalize
- [ ] 🔒 `newPageSegment.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow ``.content p:first-child` accent 1px/700 (no size/uppercase)` · h2 `.content h2 2.5rem/900 $black margin 2rem 0` · body `p:nth-of-type(2..4,last) #777a7e lh2rem (structural-selector hack)` · pad `margin 8rem 10vw (tab 6rem 4rem; pl/ph 3rem 1rem); scroll-margin-top 150px` · radius `0.1rem,50%` · raw @media `450,700` · literals `#777a7e x4, #0eaa0e green x4, #046999,#fff`
  - **Notes:** LEGACY pageSegment family. `.tick` + `.points` + `.point` DEFINED TWICE (2nd = green #0eaa0e overrides accent version); `.semi` has duplicate `@include phone`; `.btn` = hand-rolled WIPE button (#046999/#fff/radius .1rem/ls 1px/padding 1.5rem 3rem) (dup of isRightWord .linkBtn, pageSegment*); `.locationBtn`; `.homePromo`
- [ ] `newPageSegment4.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** body `.content p lh2rem $darkGrayText` · pad `padding 0 10vw (ph 0 1rem)` · radius `50%` · literals `#0eaa0e x6`
  - **Notes:** LEGACY; `.tick` green circle (dup); `.deskOnly` display:none triple; inline `a{accent,700}` declared twice
- [ ] `pageSegment2.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.info h2 $black/900 margin 1rem 0` · h3 `.contents h3 1.25/700` · body `.info p lh2rem max 90%; .contentLink lh2rem` · pad `4rem 10vw (tab 4rem 2vw)` · radius `0.1rem` · raw @media `1200 (extra)` · literals `rgba($black,.1)? n/a; white`
  - **Notes:** LEGACY; TOC panel `.contents` display:none x4 (desktop/tablet/pl/phone) => `belowDeskL`? NO: hides at desktop too (<1200); `.contentLink a,p::after "→"` hover arrow (dup arrow); `a:hover .contentLink` hack; `[style*="display: flex"]` attr selector hack; duplicate `img` blocks inside .pageSegmentReverse
- [ ] `pageSegment3.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.underline h2 2rem/700` · h3 `.useCases h3 1.5rem` · body `p lh2rem max 80% $darkGrayText` · pad `4rem 10vw; .padded/.paddedBtm/.paddedTop 8rem 10vw variants` · radius `50%` · raw @media `700,1100` · literals `#0eaa0e x4`
  - **Notes:** LEGACY; `.tick` green dup; 8x !important; many phone+phoneLandscape identical pairs; .centered/.flexHolder/.DeskImg variants; desktop padded img fixed 450x300
- [ ] `pageSegment4.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.underline h2 2rem/700; empty `.content h2 {}`` · body `p lh2rem $darkGrayText` · pad `0 10vw 2rem` · radius `50%` · raw @media `800,900` · literals `rgb(202,13,13) x2 (.cross); #0eaa0e x4`
  - **Notes:** LEGACY; `.tick` DECLARED 3x (accent outline, then green); `.points` x2; .cross dup of expertsAwait; .btns .btnLink outline btn 180px; .reverse .content `flex-direction` is a no-op; .alsoTrading list; 3 img hover grayscale blocks
- [ ] `pageSegmentCenter.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h2 1.5rem (.underline h2 1.5/700 + border-bottom 6px $accent)` · body `.tickText lh2rem; .gridSegment p lh1.6` · pad `2rem 10vw; .customSegment 8rem 10vw $grayBGC; .gridSegment margin 6rem 10vw` · radius `6px,50%` · raw @media `900,1100,1240` · literals `#e0e0e0,#f9f9f9,#0a0a0a,#0eaa0e x4, rgba(0,0,0,.1)`
  - **Notes:** LEGACY; `.tick` defined twice w/ DIFFERENT meaning (text glyph in .benefitItem vs green circle); `.pageSegmentCenter` defined twice (nested + top-level); .dropdowns = <details> accordion (FAQ #13, hardcoded greys); img 450x300 fixed repeated x6
- [ ] `pageSegmentDropdowns.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.upgradeSection p:last-of-type accent 1px/700 (eyebrow hack)` · h2 `.underline h2 1.5rem $black (margin-bottom set twice)` · body `p lh2rem $darkGrayText` · pad `8rem 10vw (desktop 8rem 5vw; 1000: 8rem 1rem)` · radius `0.2rem` · raw @media `1000 x3` · literals `rgba($black,.1/.8/.01)`
  - **Notes:** LEGACY; .faqItem accordion IDENTICAL to faqSection .faqItem (rgba($black,x), plus/minus, @keyframes slideDown dup)
- [ ] `pageSegmentFinal.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `0.95rem/700/1px/no/$accent (plain, no uppercase)` · h2 `.heading clamp(2rem,3.5vw,3rem)/900/1.2 #1e1e1e` · h3 `.cardTitle 1.05/800 #1e1e1e; .ctaText h3 1.4/900` · body `.subheading 1/2rem #777a7e; .cardDescription .9/1.75; .statLabel .8/500/.5px` · pad `8rem 0 (tab 6; ph 5); inner margin 0 10vw (tab 5vw; ph 1rem)` · max-w `760px header` · radius `2px,.15rem` · literals `#1e1e1e x4,#777a7e x4,#fff x5,#fafcfd x2; rgba(4,105,153,.04/.07/.1/.15/.3) x12`
  - **Notes:** ⚠ uses undefined mixin(s): `font var(--font-garamond), var(--font-aptos)` — HYBRID (new content, legacy gutters 10vw); eyebrow .95rem = another variant; .btnPrimary WIPE (padding 1.25rem 2rem) + .btnSecondary outline; .tag .7/600/.5px radius 2px; token-swap heavy (best 'literal→token' demo)
- [ ] `pageSegmentSmall.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h2 $black/700 margin-bottom 1.5rem` · body `p lh2rem $darkGrayText` · pad `0 10vw 6rem (ph 0 1rem 6rem)`
  - **Notes:** LEGACY; empty `@include tablet {}`; .tick text glyph accent 1.2rem/bold
- [ ] `whyChoose.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.content p:first-of-type 1.25rem/600 $accent (structural eyebrow)` · h2 `.content h2 3rem` · body `p:last-of-type $darkGrayText lh 2rem` · pad `8rem 10vw` · radius `.2rem` · literals `rgba($black,.1)`
  - **Notes:** legacy; details accordion copy; `details[open] ~ details[open]` hack does not do what comment says; @keyframes slideDown targets .content (wrong?); .semi decorative

- [ ] **L01 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### L02 · Legacy CTAs, FAQ, contact  (7 files)

Dark CTA banners and the FAQ/contact stack. Several of the worst repetition offenders.

**Recipe**
- `ctaMain` first: ~15 identical `phone/phoneLandscape/tablet` triples collapse to `@include belowDesktop { … }` (≈ −120 lines).

**Watch**
- 🐞 `promo`: `@media (min-width: "800px")` QUOTED → never fires; `!important` on font-weight/color.
- `contact`: invalid `font-size: rem;` and `outline: $accent;`; error text uses brand blue instead of an error colour; ~15 identical phone+landscape pairs → `mobile`.
- `ctaFull` `.ctaBtn` declares padding twice (second `!important` wins).
- `faqSection`/`pageSegmentDropdowns`/`whyChoose` accordion is the same ~60 lines (§10).
- `contactNextSteps` uses a THIRD `@use "globals"` style, is mobile-first (`min-width`) and relies on GLOBAL h2/h4 element styles.

- [ ] `ctaFull.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `H2 clamp(2.5rem,5vw,4rem)/900 $offWhite (hardcoded, not on scale)` · pad `height 485px; padding 0 20vw`
  - **Notes:** `.ctaBtn` declares padding twice (1.8rem 3rem then 1.5rem 3rem !important); uses global button; img filter grayscale; commented-out CSS left
- [ ] `ctaMain.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h3 2.5rem (ph 2rem) $offWhite hardcoded` · h3 `.phone p 1.25rem (ph 1rem)` · body `.plead p lh2rem` · radius `0.2rem,0.1rem,50%` · literals `#ffffff51 x4 (=white 32%); #fff; #046999 (hover) hardcoded`
  - **Notes:** WORST DUP FILE: ~15 triple blocks of @include phone/phoneLandscape/tablet with IDENTICAL bodies => single `belowDesktop` mixin; .contact vs .contactAlternate ~95% identical; .svgImg vs .svgImgAlt ~90% identical; .link wipe-hover button (also contact .option h2); `font-family: var(--font-aptos) !important`; @keyframes bounce
- [ ] 🔒 `expertsAwait.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h2 clamp(2rem,5vw,4rem) $offWhite (no weight; hardcoded)` · body `.text p 1.125rem/2.5rem; .point 1.125rem/2rem` · pad `padding 8rem (tab 4rem; ph/pl 4rem 1rem); scroll-margin-top 125px` · radius `0.2rem,50%` · raw @media `1200 raw` · literals `rgb(202,13,13) x2 (red; $replace-x is #c0392b)`
  - **Notes:** LEGACY: ~8 phone/phoneLandscape/tablet identical triples; 5x !important; @keyframes bounce (3rd copy, diff values than ctaMain); uses $cardBGC,$offWhite,$grayText,$darkGrayText
- [ ] `faqSection.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `inherits global h2 (margin-bottom 3rem; $black)` · h3 `.questionText 500` · body `lh1.6; .questionNumber 1.1rem/700` · pad `padding 0 0 6rem; max-width 1200 (90vw <=desktop)` · max-w `1200px` · radius `0.2rem` · literals `rgba($black,.1/.8/.01/.1)`
  - **Notes:** 4 identical @include phone/phoneLandscape/tablet/desktop blocks; one of ~10 FAQ/<details> implementations; `details[open] ~ details[open]` hack; @keyframes slideDown
- [ ] `contact.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.option h2 1rem; .active h2 3rem/900 hardcoded; .successMessage h2 2rem` · body `label 1rem/500; input 1.125rem; placeholder .8` · pad `padding 6rem 10vw (tab col; pl 6rem 5vw; ph 6rem 1rem)` · max-w `500px` · radius `8px,4px,50%` · raw @media `768 (screen)` · literals `#b7b7b7f6; #ddd x2; #f8f9fa; #fff; #fff5f5 #feb2b2 #c53030 (error); rgba(0,0,0,.1)`
  - **Notes:** BUG: `.errorMessage font-size: rem;` invalid; error text uses $accent (brand blue) not red; `outline:$accent;` invalid; ~15 identical @include phone + @include phoneLandscape pairs => mobile mixin; form field/radio/checkbox styles dup of caseStudySubmission/popup forms; .option h2::before wipe-hover (left:-100%) = same pattern as ctaMain .link; color.adjust -6% / -10%
- [ ] `contactNextSteps.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `0.875rem/700/0.1em/yes/$accent (display block)` · h2 `inherits global h2/h4 (no size set)` · h3 `strong clamp(1.75rem,3vw,2.25rem)` · body `p lh1.75` · pad `4rem 1.5rem (NO steps)` · max-w `1200px` · radius `50%` · raw @media `min-width:48rem (rem media)` · literals `#fff`
  - **Notes:** 3rd @use style; mobile-first (min-width) unlike rest; relies on GLOBAL element h2/h4 styles; eyebrow variant #7
- [ ] `promo.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.text h2 2rem/900 $black` · body `p line-height 2rem color #777a7e (=$darkGrayText)` · pad `margin 6rem 8rem (tablet/phone 6rem 1rem)` · max-w `70%` · radius `0.1rem` · raw @media `800 (QUOTED), 700, 768` · literals `#777a7e,#046999,#fff`
  - **Notes:** legacy; BUG @media min-width:"800px" quoted string (invalid; rule never fires); !important on font-weight/color; legacy wipe button .link 0.1rem radius 1.5rem 3rem; .link:hover border hack

- [ ] **L02 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### L03 · Blog, policy & misc content  (8 files)

Long-form/editorial pages with their own heading scales (h1 2.5–3rem, h2 1.8–2rem, h3 1.4rem).

**Recipe**
- These are content typography, not section headings — do NOT force `heading-section` here. Only tokenise colours/radii and add a separate `prose` scale if you want one.

**Watch**
- `blogPost`: ~160 lines duplicated verbatim (`.BgImageContainer` … `#pitfall`) and 9 raw media widths.
- `blog`: 🐞 `.noResults` bg AND color are both `$darkGrayText`; `.postCard/.postImageContainer/.postImage` each defined twice.
- `boringStuff` and `refundPolicy` import NO globals (hard-coded `#0066cc` / `#007bff` link blues).
- `wordTemplatesBlog`: `.templateType` declared twice; `var(--aptos)` (others use `--font-aptos`); stale comment at end.

- [ ] `blog.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** h2 `h1 3rem/700; h2 2rem $accent+3px underline` · h3 `h3 1.2rem/1.4rem $accent` · body `p .95rem/1.5; hero p 1.2rem` · pad `padding 4rem 2rem` · max-w `1200px` · radius `8px,6px,4px` · raw @media `480px,768px` · literals `#1e1e1e (=$black); white x6; rgba(0,0,0,.1-.2) shadows; rgba(128,128,128,.244)`
  - **Notes:** BUG: .noResults bg AND color both $darkGrayText; .postCard/.postImageContainer/.postImage each defined TWICE; h2 underline style dup (.featuredSection / .allPostsSection); .headFiller dup of blogPost .head
- [ ] `blogPost.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** h2 `.blogTitle 2.5rem (3px accent underline); .blogContent h2 1.8rem $accent` · h3 `h3 1.4rem $accent; .shortcutContent h3 1.25rem/600` · body `lh1.6; .quote p 1.25rem/700` · pad `padding 2rem` · max-w `1200px` · radius `8px,4px,5px,50%` · raw @media `450,500,630,700,768,800,1000,1200,480` · literals `#1e1e1e,#333,#1a1a1a,#f5f5f5 x2,#e5e7eb,#6b7280 x3,#111827,#4b5563,rgba(185,185,185,.149)`
  - **Notes:** BUG-RISK: block from .BgImageContainer to #pitfall (~160 lines) DUPLICATED verbatim; 9 raw media widths; .codeBlock/.codeBox dup of codeBlock.module.scss?
- [ ] `wordTemplatesBlog.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** h2 `blogTitle 2.2rem (md 2.8rem)/600; h2 1.8rem/600; h3 1.4rem/600 $accent` · body `introSection 1.1/1.8; p lh1.6 $darkGrayText` · pad `margin/padding ad hoc` · max-w `1200` · radius `8/6/4` · raw @media `768 min x3` · literals `local $light-gray #f5f7fa,$border-color #e0e0e0; #e9f0f9,#f0f2f5,#333,#ffffff`
  - **Notes:** legacy blog; local mixins section-spacing/heading-styles; .templateType DECLARED TWICE; font-family var(--aptos) (probably undefined; others use --font-aptos); stale comment 'Additional styles to add to your WordTemplatesBlog'
- [ ] `boringStuff.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** h2 `h1 2.5rem; h2 1.8rem; h3 1.4rem` · body `lh1.6` · pad `container margin 6rem auto 2rem` · max-w `1200px` · raw @media `770px` · literals `#333,#1a1a1a x3,#0066cc`
  - **Notes:** ⚠ imports NO globals — NO tokens at all; hard-coded link colour #0066cc (not brand $accent)
- [ ] `refundPolicy.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** h2 `mainTitle 2rem/700; sectionTitle 1.5rem/600` · body `p lh1.6; introText 1.1rem` · pad `2rem 1rem` · max-w `800` · radius `4` · literals `#333,#444,#555,#666,#007bff,#fff`
  - **Notes:** ⚠ imports NO globals — legacy; off-brand link blue #007bff; no media queries; no globals
- [ ] `quote.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** h2 `p 1.25rem/700 italic` · pad `margin 4rem auto` · max-w `80%` · raw @media `700` · literals `#046999`
  - **Notes:** ⚠ imports NO globals — tiny legacy; hardcoded brand
- [ ] `iframe.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** eyebrow `.sub p accent 1px/700 (no size/uppercase)` · h2 `h2 2.5rem/900 (770: 2rem)` · body `.description lh2 $darkGrayText` · pad `margin-top 8rem` · max-w `80%` · raw @media `770 x4`
  - **Notes:** legacy; raw 770 (non-standard) not mixin
- [ ] `intro.module.scss`
  - **Target:** colours/radii → tokens only · keep prose heading scale (not section headings)
  - **Now:** pad `margin 6rem 15vw (tab 3rem 5vw; ph/pl 3rem 1rem)` · literals `1160; rgb(242,243,245)=$grayBGC`
  - **Notes:** legacy; accent italic p 1.25rem/700 lh1.5; phone+phoneLandscape identical

- [ ] **L03 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### L04 · Locations, team & testimonials  (21 files)

Legacy cards/carousels/marquees.

**Recipe**
- Marquee: `testimonialsSection` `slideTrack` is the ORIGIN; `meetTheTeamSlider` is a copy (10 stops × 3 breakpoints of `calc()`). Extract once into a `marquee` mixin/`@function` — see §10.

**Watch**
- `solutionsCarousel` and `solutionsCarouselWord` are near duplicates; their `.eyebrow` has NO font-size.
- `testimonialsSection`: eyebrow-as-`h2` (1rem/1px + `font-family … !important`), `.btn` with 7× `!important`.
- `testimonialsCard`: 🐞 `tabindex: 0;` written as a CSS property (no-op).
- `locationGroups`: 🐞 `margin-top: auto 0` is invalid.
- `supportTrainingHub` uses CSS vars (`--text-secondary`, `--primary-rgb`, `--bg-light`) that are not defined in the Project — check `:root` elsewhere.
- `services`: 🐞 phone padding declared twice (the `!important` one wins); `meetTheTeam` has ~30 lines of dead commented CSS.
- `videoSegment`: 🐞 spinner border and border-top are both `$accent` → no visible arc.

- [ ] `locationGroups.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.sectionTitle 2.5rem $accent + 4rem underline bar` · h3 `.serviceLinks h4 1.25rem; .locationName 1.75rem` · body `.locationDescription lh1.6 $darkGrayText` · pad `4rem 0 (+container padding 0 1.5rem)` · max-w `1280px` · radius `.5rem,.25rem` · literals `white; rgba(0,0,0,.08/.12/.7)`
  - **Notes:** legacy-ish; `margin-top: auto 0` invalid; tablet+phone identical; .container 1280 (another container def)
- [ ] `locationsIntro.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.jumpTitle .75rem/700/.25em/uppercase #888 (eyebrow variant #5)` · h2 `.heading clamp(2.25rem,4vw,3.25rem) no weight` · h3 `.jumpName 1.25rem/700 var(--font-garamond); .statValue 1.75/700` · body `.lead 1.2/1.6; .body lh1.7` · pad `6rem 1.5rem` · max-w `1400px` · radius `50%` · raw @media `min-width 900` · literals `#888 x4, #ddd x2`
  - **Notes:** font-family var(--font-garamond); .statLabel .9/.05em uppercase; TOC list (dup of databaseIntro toc); comment says 'matches What we do'
- [ ] 🔒 `locationSummary.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `strong accent 1px/700` · h2 `h2 1.5rem` · body `p lh1.8 $darkGrayText` · pad `margin 6rem auto -2rem` · max-w `800px` · radius `.2rem` · raw @media `850 x3` · literals `rgba(238,238,238,.544); rgba($darkGrayText,.1)`
  - **Notes:** legacy; font-family var(--font-aptos); negative bottom margin
- [ ] `meetTheTeam.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.memberInfo h2 1.25/700/1px; h3 1rem/700 accent` · body `.skills .85/1.8 $darkGrayText` · pad `6rem 10vw` · radius `4px`
  - **Notes:** legacy; ~30 lines of dead commented-out CSS at bottom; grayscale→colour hover image
- [ ] `meetTheTeamSlider.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.box h2 accent 1rem/700/1px + border-bottom 6px #b0b0b05b (eyebrow-ish)` · h2 `.teamHeading 3rem` · pad `margin 4rem auto 6rem; padding 2rem 0` · max-w `1200px` · raw @media `1024,640` · literals `#b0b0b05b`
  - **Notes:** ⚠ uses undefined mixin(s): `font-family var(--font-aptos) !important` — legacy; keyframes slideTrack x3 (desktop/1024/640) each 10 stops of calc() — comment says it's an isolated COPY of testimonialsSection marquee => duplicate across 2+ files => `marquee` mixin/@function; desktop+tablet+phoneLandscape identical padding
- [ ] `teamCard.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.name 1.5rem !important` · body `skills .8rem #666` · pad `padding 1.5rem` · literals `#e0e0e09e,#666`
  - **Notes:** legacy; !important on font-size and text-transform
- [ ] `testimonialPage.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h2 1.5rem lh2.5rem` · pad `4rem 0` · max-w `1200` · raw @media `1024,768` · literals `#f3f4f5f6,#b0b0b05b (hex8)`
  - **Notes:** ⚠ imports NO globals — legacy; hex8 colours
- [ ] `testimonialsCard.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `h5 .8rem/1px accent (author role)` · h2 `h4 1rem $black` · body `p 1.125rem lh 2rem #777a7e (=$darkGrayText) line-clamp 4` · pad `padding 3rem 3rem .5rem` · max-w `350px card` · radius `0` · literals `#777a7e,#b0b0b05b (hex8)`
  - **Notes:** legacy; BUG `tabindex: 0;` written as CSS property (no-op); hover:hover + hover:none dual states
- [ ] `testimonialsSection.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `.box h2 1rem/1px accent + font-family var(--font-aptos) !important (eyebrow-as-h2, unsized caps)` · h2 `h3 3rem $black; .teamHeading 3rem` · pad `margin 4rem auto 6rem` · max-w `1200` · raw @media `1024,640` · literals `#b0b0b05b`
  - **Notes:** legacy; MARQUEE keyframes slideTrack x10 stops x3 breakpoints (origin of meetTheTeamSlider copy); .btn with 7x !important; 8th eyebrow variant
- [ ] 🔒 `supportPage.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `pageHeader h2 1.75rem lh1.5` · body `p $darkGrayText lh1.6` · pad `margin 3rem 0; padding 0 5vw` · max-w `75vw` · radius `50% tick` · raw @media `700,1040,800` · literals `rgb(0,193,0)`
  - **Notes:** legacy; .tick 30px outline circle (4th tick variant) + .checkIcon green rgb(0,193,0) (3rd green); lastSegment negative margins
- [ ] `supportTrainingHub.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.leadText 2.5rem/700 $accent (phone 2rem); h2 2rem/1.8rem $accent; h3 1.4rem` · body `subText 1.2/1.6` · pad `margin 6rem 0 3rem` · max-w `800 subText` · radius `8` · raw @media `768,1024,600` · literals `white, rgba(0,0,0,.1/.15), var(--text-secondary), var(--primary-rgb), var(--bg-light), var(--text-primary) UNDEFINED in Project`
  - **Notes:** legacy; 4-level nesting; CSS custom props not defined in Project (check :root elsewhere); margin-bottom:3rem then margin:0 5vw conflict
- [ ] `videoSegment.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `subtitle accent 700 1px (unsized)` · h2 `title 2rem/700 $black` · body `description lh 2rem $darkGrayText` · pad `padding 6rem 0 0` · max-w `1000` · radius `50% spinner`
  - **Notes:** legacy; BUG spinner border and border-top both $accent -> no visible arc; @keyframes spin (generic, repeats)
- [ ] `solutionsCarousel.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `NO font-size: .eyebrow{font-weight:700;letter-spacing:1px;color:$accent} hidden phone` · h2 `clamp(2,3.5vw,3rem)/900/1.12/-.03em` · h3 `tileTitle .85/600` · body `intro lh1.85` · pad `8rem (tablet bottom 0; 6/4/0,5/1.5/0,4.5/1.25/0)` · radius `8 tile` · raw @media `767` · literals `#fff,rgba(0,0,0,.45)`
  - **Notes:** 7th eyebrow variant (unsized); wipe CTA 0.1rem radius 13px 25px; tooltip; near-dup of solutionsCarouselWord
- [ ] `solutionsCarouselWord.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `same unsized eyebrow hidden phone` · h2 `clamp(2,3.5vw,3rem)/900/1.12/-.03em` · h3 `tileTitle .85/600` · body `intro lh1.85` · pad `8rem (tablet bottom 0)` · radius `8` · raw @media `767` · literals `#fff`
  - **Notes:** DUP of solutionsCarousel (stale header comment 'solutionsCarousel2'); .cta declares display twice (inline-block then flex); -moz-user-select; border: medium none
- [ ] `formatTab.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `inherits global h2 ($white-90)` · body `p lh1.6rem $white-88` · pad `6rem 10vw` · max-w `1520px (img viewport)`
  - **Notes:** dark marquee; @keyframes formatTabSlide (local, fine); .accent{color:$accent}; prefers-reduced-motion handled
- [ ] `ourTemplates.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `inherits global h2 $white-90` · body `p lh1.5rem $white-65` · pad `6rem 10vw` · raw @media `768 x2`
  - **Notes:** legacy dark; `.content a` only sets margin/capitalize (relies on global button class); raw 768
- [ ] `services.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `.content h2 clamp(2rem,6vw,3.5rem)/900 $offWhite` · body `p lh 2rem $grayText` · pad `8rem; phone block declared TWICE (4rem 2rem 8rem !important + 8rem 2rem)` · max-w `600 imageWrapper` · radius `50% sig` · raw @media `580`
  - **Notes:** legacy; BUG duplicate phone padding (!important wins); desktop/tablet/landscape/phone near-dup; bg url ../public/service-bg.webp
- [ ] `servicesCard.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h3 1rem; h4 1rem/900` · body `li .9rem` · max-w `300-400 card` · radius `0.2rem` · literals `rgba(0,0,0,.5) text-shadow`
  - **Notes:** legacy flip card; ~8x !important (inViewImage/Content); $cardBGC; link outlined button
- [ ] `servicePageCards.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** eyebrow `p .8rem/700/1px (tag)` · h2 `card h2 1.25rem lh1.5rem/900 $black` · pad `6rem 10vw 4rem (tablet 3rem 2vw 4rem)` · max-w `280 cards` · radius `0` · literals `#d5d5d592 (hex8)`
  - **Notes:** legacy; wipe hover $black; position:relative !important; generic @keyframes scale; dead .hidden; display:none on phone twice
- [ ] `servicesWord.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h1,h2 clamp(2rem,6vw,3.5rem)/900/1.1` · body `p lh 2rem; lead 1.25rem/700` · pad `8rem 10vw (phone 4rem 2rem 6rem)` · radius `50% portrait` · raw @media `768`
  - **Notes:** legacy; .ctaBtn:hover border hack; h1+h2 same rule
- [ ] `serviceHero.module.scss`
  - **Target:** colours/radii → tokens · identical `phone`/`phoneLandscape`/`tablet` triples → `belowDesktop` / `mobile` · duplicate blocks deleted · headings/padding deferred (D13)
  - **Now:** h2 `h1 clamp(2.5,4.5vw,4.5rem)/900 lh clamp(2.5,5vw,4.5rem)` · pad `height 499px (phone 320)` · max-w `max-width 70vw` · raw @media `450` · literals `rgba(0,0,0,.3/.9)`
  - **Notes:** ONLY page-hero h1 scale; tablet/landscape/phone fixed 2.5rem with lh 4rem/3rem; $offWhite; text-shadow; grayscale image

- [ ] **L04 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

#### L05 · Footer & site chrome  (15 files)

Footer, cookie banner, scroll widgets, TOC and related-links. Tokenise colours and h3 sizes only.

**Recipe**
- `footerHelp`/`footerLogo` link block and `footerLocations`/`footerServices` dropdown block are identical pairs — extract two small mixins.

**Watch**
- `footer`: `top: 00px`; `scrollBtn`/`scrollIndicator` are ~80% duplicates; `bounce` keyframe exists in several files.
- `relatedLinks` is the GOOD dual-theme pattern (`.dark/.light` custom properties) but depends on the global `.btn` class.
- `cookieConsent`: accept hover goes GREEN (off-brand); overlapping `min/max-width:768`.

- [ ] `footer.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** pad `6rem 2rem 6rem 3rem (ph/pl 4rem 1rem 2rem)`
  - **Notes:** `top: 00px`; $footerBGC; phone+phoneLandscape identical
- [ ] `footerHelp.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h2 `h3 1.125rem $offWhite` · pad `padding 1rem`
  - **Notes:** link block {color:$grayText;margin-bottom:1rem;font-weight:500;display:flex;align-items:center;gap:.25rem;hover $accent .5s} IDENTICAL in footerLogo; h3 style x4 (footer*)
- [ ] `footerLocations.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h2 `h3 1.125rem $offWhite` · pad `padding 1rem` · radius `4px` · literals `rgba(30,30,30,.85)(=$black@.85)`
  - **Notes:** font-family var(--font-aptos) !important; dropdown (hover/active/dropdownBackground blur 5px) IDENTICAL to footerServices; @media (hover:none) block dup
- [ ] `footerLogo.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h2 `h3 1.125rem/1px $offWhite` · body `p lh2rem $grayText` · pad `padding 1rem`
  - **Notes:** .contact a block dup of footerHelp; .socials svg stroke $accent
- [ ] `footerServices.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h2 `h3 1.125rem $offWhite; dropdown h3 1rem/500` · pad `padding 1rem` · radius `4px` · literals `rgba(30,30,30,.85)`
  - **Notes:** dropdown pattern dup of footerLocations; font-family var(--font-aptos) !important
- [ ] `copyright.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** body `font .8rem/1px` · pad `3rem 8rem 3rem 4rem (asymmetric; ph/pl 1rem)`
  - **Notes:** footer-bar; $grayText on $black
- [ ] `cookieConsent.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h3 `.title 1.125rem/700` · body `.message lh1.5` · pad `fixed overlay` · max-w `28rem` · radius `0.1rem` · raw @media `min-width 768 & max-width 768 (overlap)` · literals `white; #4b5563; #05a605 (green accept hover); #ff0909; #6b7280; #374151`
  - **Notes:** .srOnly utility (copy #3 of visually-hidden); accept hover goes GREEN (off-brand); radius 0.1rem
- [ ] `scrollBtn.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** radius `50%` · literals `#f8f8f8 (=$offWhite)`
  - **Notes:** fixed 48px round btn; hover color.adjust -10%; 80% dup of scrollIndicator
- [ ] `scrollIndicator.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** radius `50%` · raw @media `768 min` · literals `#f8f8f8`
  - **Notes:** dup of scrollBtn + @keyframes bounce (generic name, also in other file?); header comment says components/ScrollIndicator
- [ ] `scrollLine.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** (no typography/spacing rules)
  - **Notes:** fine; uses $white-35/$accent; CSS var --line-progress
- [ ] `socialLinks.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** radius `0.3rem` · literals `#393f53`
  - **Notes:** tiny; hover colour $accent
- [ ] `brands.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** pad `padding 3rem 0` · radius `4px` · literals `#dddddd,#cccccc,#007bff`
  - **Notes:** hard-coded greys/blue
- [ ] `contents.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h2 `h3 1.25rem/700 $black` · body `.contentItem lh1.5rem; span .9rem` · pad `padding 0 0 6rem` · max-w `1200px` · radius `0.2rem` · literals `rgba($black,.1/.01/.1)`
  - **Notes:** h3 style dup of contentsComponent; `@include phoneLandscape` block appears TWICE in .contentBox; desktop+tablet identical max-width:45vw
- [ ] `contentsComponent.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** h2 `h3 1.25rem/700 $black` · body `a,p lh2rem` · pad `fixed TOC` · radius `0.2rem,0.1rem` · raw @media `min-width 1200px; max-width 1200px (use deskL)` · literals `white; rgba(0,0,0,.7)`
  - **Notes:** `→` ::after arrow (dup); box-shadow 0 0 1000px 1000px overlay hack; `.contentLink[style*="display: flex"]` attr hack; uses $body,$offWhite,$grayBGC,$black,$darkGrayText
- [ ] `relatedLinks.module.scss`
  - **Target:** colours → tokens · h3 sizes → `card-title` where it matches · layout untouched
  - **Now:** eyebrow `.8/700/.12em upper (var --eyebrow)` · h2 `clamp(1.75,3vw,2.4rem)/800/1.15/-.025em` · h3 `title 1.5rem/700` · body `text lh1.8; description .9/1.7` · pad `5rem 8rem (4/4,4/2,3.5/1.25)` · max-w `1200` · radius `.75rem/.5rem`
  - **Notes:** dual theme via CSS custom props (.dark/.light) = good pattern to generalise; .section a:hover{border:1px solid $accent} hover-border hack; depends on global .btn class outside Project

- [ ] **L05 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

### 9.7 Structural / leave alone

#### X01 · Structural / leave-alone (✋)  (15 files)

Navigation, hero, third-party/prism overrides, self-contained widgets and probably-dead prototypes. Touch ONLY what is listed.

**Recipe**
- `header` / `mobileNav` / `hero`: tokenise colours only. 🔒 BREAKPOINT CONTRACT: `mobileNav` hides at `deskL`, shows at desktop+tablet+phone → the nav switches at 1200px; `header` hides `.nav` at `desktop` (1025–1199). Use `belowDeskL`, NEVER `tablet`-only.
- `flipBook`: only add `@use "./globals" as *;` in place of its local `$accent` redeclaration (it has NO globals import and mojibake in comments).
- `compare*`: the `.index0,.index1{hide ≤1024} / .index3{hide ≤449}` block exists in all three files (some with `!important`) → one shared mixin; `compareContainer` redeclares tokens with different values and has DOUBLE padding on phone.

**Watch**
- `animate`, `caseStudyCarousel`, `codeBlock` (Prism theme), `ccp`, `logos`, `templateCards`, `ms365`: no refactor.
- `payment`: ZERO globals, ~30× `#046999`, ~20 selectors declared twice (the second set silently wins) — colour tokens only, in its own commit.
- `header`: 11 per-location keyframes (`@for` candidate) and a duplicate `.nestedDropdown` block — separate commit.

- [ ] ✋ `header.module.scss`
  - **Now:** pad `padding .7rem 2.2rem (topbar)` · radius `5px,4px` · raw @media `1260,1400,1200-1400,1200-1262,450-540,max-height 700` · literals `rgba(0,0,0,.109); #ffffff27; rgba(255,255,255,.275); #f1f1f1; rgba(0,0,0,.3/.5)`
  - **Notes:** STRUCTURAL: nav; 8x display:none triples (phone/tablet/phoneLandscape[/desktop]) => belowDesktop/mobile mixin; 11 location keyframes (@for candidate); duplicate .nestedDropdown block; `.nav` hides at `desktop` (1025-1199) check intent; leave layout alone, tokenise colours only
- [ ] ✋ `hero.module.scss`
  - **Now:** h2 `h1 clamp(4rem,9vw,7rem)/700 lh clamp(3rem,8vw,6rem) ls 1px` · body `h4 1.2rem` · raw @media `rgba(0,0,0,.5) text-shadow` · literals `font-family var(--font-aptos) !important`
  - **Notes:** STRUCTURAL (homepage hero); keyframes fadeInOut,scale,slideIn*; phone+phoneLandscape identical shape sizes; $offWhite text; leave mostly alone
- [ ] ✋ `mobileNav.module.scss`
  - **Now:** h2 `.navContacts p 2rem/700` · body `.navItem 1rem/700/1px` · literals `#25262a,#eeeeee6e,rgba(0,0,0,.9/.1)`
  - **Notes:** ⚠ uses undefined mixin(s): `font-family var(--font-aptos) !important` — STRUCTURAL: BREAKPOINT CONTRACT — deskL hides, desktop+tablet+phone+phoneLandscape show => nav switches at 1200px (header.module.scss hides `.nav` at desktop 1025-1199 too). DO NOT replace with tablet-only; needs `belowDeskL` mixin. @keyframes fadeIn dup; .closeBtn 8rem/900 rotated 270deg
- [ ] ✋ `animate.module.scss`
  - **Now:** (no typography/spacing rules)
  - **Notes:** ⚠ imports NO globals — utility animation classes; no tokens needed (keep)
- [ ] ✋ `caseStudyCarousel.module.scss`
  - **Now:** pad `none`
  - **Notes:** ⚠ imports NO globals — structural selector hack (.carousel > section > div > ul); keyframes; no tokens; EXCLUDE from refactor
- [ ] ✋ `codeBlock.module.scss`
  - **Now:** radius `6px,4px,3px` · raw @media `768` · literals `#1e1e1e(=$black) #d4d4d4 #333 #4d4d4d #444 #ddd`
  - **Notes:** ⚠ imports NO globals — Prism overrides w/ :global + !important; THIRD-PARTY THEME; EXCLUDE from refactor (leave as-is)
- [ ] ✋ `ccp.module.scss`
  - **Now:** pad `padding 20vw` · literals `#bababa`
  - **Notes:** ⚠ imports NO globals — tiny placeholder; likely dead code - check usage before touching
- [ ] ✋ `flipBook.module.scss`
  - **Now:** h2 `.bookSegment h2 2.5rem hardcoded` · body `p lh2rem color #777a7e (=$darkGrayText)` · pad `margin 4rem 0` · max-w `1200px` · radius `3px,2px,50%` · raw @media `768,770,600,480` · literals `local $accent #046999 (dup of global); $page-bg #f2ede8; many rgba(0,0,0,x)`
  - **Notes:** ⚠ imports NO globals — MOJIBAKE in comments (Ã— â†); object-fit declared twice incl !important; font px sizes 10px/9px; 3rd @keyframes hintFade
- [ ] ✋ `ms365.module.scss`
  - **Now:** h2 `.infoLabel 2rem/700/.8px` · body `.infoText 1/1.75 #333 (=$body)` · max-w `560px diagram` · radius `50%,2px` · raw @media `900` · literals `#fff,#333,#f0f0f0,#ddd`
  - **Notes:** ⚠ imports NO globals — self-contained hotspot widget w/ CSS var --app-color + color-mix(); keyframes pulse,fadeSlide,progressSweep; leave alone (optionally import globals for $body)
- [ ] ✋ `logos.module.scss`
  - **Now:** (no typography/spacing rules)
  - **Notes:** DECORATIVE PROTOTYPE: .logos1-.logos7 7 near-duplicate blocks (nth-child delay triplets) and `.logos5 img:hover` declared twice (logos7 hover missing); 4 keyframes; height:70vh;height:70dvh; verify usage — likely dead; do NOT tokenise, delete or leave
- [ ] ✋ `payment.module.scss`
  - **Now:** eyebrow `none (h1 1.8rem/600 in header)` · h2 `h1 1.8/2.2rem, h2 1.6/24px, h3 1.2-1.3rem, h4 1.1rem` · pad `2rem` · max-w `600/800` · radius `4/6/8/12/20` · raw @media `800,768,480` · literals `#046999 x30, #0056b3, #333,#666,#e0e0e0,#f8f9fa,#d32f2f,#4caf50,#28a745,#856404,#fff3cd`
  - **Notes:** ⚠ imports NO globals — checkout page; ZERO globals; px+rem mix; ~20 selectors DECLARED TWICE (receiptCard/Header/Number/Details/Grid/Section/Row/RowTotal/Label/Value, cardTypeBadge, receiptActions, homeButton, additionalInfo, confirmationNote, contactInfo/Details/Method, securityFooter/Badges/Badge, successWrapper) second set silently overrides; stale comment 'Add these styles to your payment.module.scss'; own gradient #046999->#0056b3; LOW PRIORITY tokenise colours only
- [ ] ✋ `compare.module.scss`
  - **Now:** radius `0.5rem,50%,0.25rem` · literals `#046999 (=$accent as $handle-color); #ffffff x5; #fff; rgba(4,105,153,.85); rgba(0,0,0,.12/.08/.16/.1/.15/.25/.3/.55/.5)`
  - **Notes:** DUP: .index0,.index1{hide<=1024}/.index3{hide<=449} block appears in compare + compareContainer + compareScrollReveal (3 copies, `!important` in 2); $line-width/$handle-size local
- [ ] ✋ `compareContainer.module.scss`
  - **Now:** h2 `.heading clamp(1.75rem,4vw,2.6rem)/800/1.15/-0.02em color $text(local #1a1a2e)` · h3 `.walkthroughTitle .95/700` · body `.intro lh2rem max-width 60vw; .subIntro clamp(.8rem,1.3vw,.9rem)` · pad `padding 8rem 10vw (ph/pl 5rem 1rem 0); .container dupes phone padding => DOUBLE PADDING on phone` · max-w `1080px hdr` · radius `0.75rem,0.4rem,0.3rem,0.25rem` · raw @media `770,1024,540,480` · literals `#ffffff; rgba(0,0,0,.14/.08/.04); rgba($accent,.12/.4/.3/.35)`
  - **Notes:** LOCAL SHADOWS globals w/ DIFFERENT VALUES: $accent-light #e8f4f9 (global #e8f4fa), $border (same value), $text #1a1a2e (global $text-primary #0d1b2a), $accent-dark #034e73 (=#034f72 in automationImpact), $surface; uses deprecated global lighten(); 3rd copy of index0/1/3 block
- [ ] ✋ `compareScrollReveal.module.scss`
  - **Now:** (no typography/spacing rules)
  - **Notes:** only the index0/1/3 hide block (3rd copy) + wrapper; candidate to consolidate to ONE shared mixin/utility
- [ ] ✋ `tabComparison.module.scss`
  - **Now:** h2 `h3 1rem/700 $text-secondary` · pad `padding 2rem 0 3.5rem` · raw @media `600,1100`
  - **Notes:** layout only

- [ ] **X01 family gate passed** (§8.3) — compiled-CSS diff reviewed, screenshots compared at the 8 widths (§2.2), committed.

---

## 10. Cross-file duplicate patterns (Phase 5 — after the page families)

Each pattern: **what repeats → variants → plan**. Do these *after* §9, because by then the surrounding type/spacing is already tokenised and the remaining duplicate is visible. Lists are from the audit (candidates, not exhaustive) — grep before acting.

### 10.1 Accordions / FAQ (~12 implementations)
Candidates: `faqSection, pageSegmentDropdowns, whyChoose, pageSegmentCenter(.dropdowns), northernNswFaq, servicesFaq, sqlFaq, thirdPartyFaq, apiFaq, activexFaq, bpaFaq, conversionFaq, centralCoastFaq, wollongongWhy, mailMergeServices, migrationChallenges, cairnsApproach, perthContext, queryServices, rebrandingIncluded, formFieldsAnatomy, darwinWhy, bpaReplaces`.
Variants: (a) legacy `.faqItem` — `rgba($black,x)` borders, +/− glyph, `@keyframes slideDown` (identical in `faqSection` and `pageSegmentDropdowns`; `whyChoose` copy targets the wrong element) · (b) `<details>` with `::after` “+” / “\2212” (`northernNswFaq`, `servicesFaq`, `sqlFaq`, `wollongongWhy`, `mailMergeServices`) · (c) `<details>`-as-card (`thirdPartyFaq`) · (d) button + max-height / `bodyReveal` (`migrationChallenges`, `cairnsApproach`, hub trigger rows) · (e) CSS-only radio tabs (`darwinServices` ✋) · (f) plus/cross icon FAQ (`centralCoastFaq`).
- [ ] Pick (b) as the canonical (cleanest, native semantics, has `:focus-visible` in `sqlFaq`) and build `accordion-item` from `northernNswFaq`.
- [ ] Replace (a) first (3 files, identical code), then (b), then evaluate (c)/(d) — they may stay as intentionally different.
- ⚠ The `details[open] ~ details[open]` selector in `faqSection`/`whyChoose` does not do what its comment says — drop it rather than copy it.

### 10.2 Tick / check / bullet markers
Variants: accent outline circle 30px (`supportPage .tick`) · green filled circle (`pageSegment`, `newPageSegment(4)`, `pageSegment3/4/Center`, `$success`) · text glyph (`pageSegmentSmall .tick`, `pageSegmentCenter .tickText`) · CSS-drawn ✓/✗ via `\2713` `\00D7` (`sqlComparison`) · accent circle 2rem (`companiesControl`, `companiesHeadaches`) · white glyph (`copilotCta .check`) · border-left / dash / dot bullets (`emailTriageApproaches`, `businessAnalysisValue`, `sqlBenefits` dash, `powerPointSupport` 6px dot, `templateWhyChoose` 8px dot).
- [ ] Legacy files **define `.tick` 2–3× each** (`pageSegment`, `newPageSegment`, `newPageSegment4`, `pageSegment3/4/Center`) — the LAST definition wins today; delete the earlier ones (verify with `check`).
- [ ] Add `tick-circle($color, $size)` and `bullet-dot($color, $size)` to globals, then swap.

### 10.3 Arrow links (~41 candidates)
Variants: svg + `translateX(3px)` (api*, hubs — **this is the global `arrow-link`**) · `::after " →"` / `\2192` text arrow (`appDev*`, `businessAnalysisAreas`, `sqlOffice`, `emailTriageApproaches/WhyUs`, `contentsComponent`, `pageSegment2`, `dashboardsPlatforms`, `proposalAssistantDemo`) · svg `translate(2px,-2px)` “external” arrow (`migration*`, `queryComparison`, `queryServices`) · border-bottom reveal (`cairnsServices .cardLink`, hub `.headerLink`, `perthWhy`, `melbourneWhy`).
- [ ] Extend `arrow-link($color, $style: slide | up-right | underline)`; text-arrow variants keep their `::after` (JSX has no svg).

### 10.4 Visually-hidden (5 copies)
`businessAnalysisProof .visuallyHidden`, `cookieConsent .srOnly`, `corporateIdentityComparison .caption` + `.stateLabel`, `databaseChooser .srOnly`.
- [ ] Replace each body with `@include visually-hidden;` (zero change — compare declarations first; clip values differ slightly).

### 10.5 Keyframes
Names repeated across files: `fadeUp` (migrationHero, migrationProblem, +1) · `fadeSlideUp` (copilotValue, introduction, animate) · `slideDown` (faqSection, pageSegmentDropdowns, whyChoose) · `fadeIn` (mobileNav, +) · `flow` + `:global(.et-flow)` (emailTriageHero, emailTriageSuite) · `bounce` (ctaMain, expertsAwait, mobileNav, scrollIndicator — **different values**) · `spin` (payment, videoSegment) · `hintFade` (flipBook) · `scale` (hero, servicePageCards). Single-use and fine: `formatTabSlide`, `gtk-pulse`, `orbPulse`, `tagFloat`.
- [ ] For each name, diff the bodies. Identical → one `kf-*` mixin; different → keep local and **rename** (e.g. `bounceCta`) so two files never look like the same animation.
- [ ] Keep `:global(...)` keyframes (`et-flow`, `gtk-pulse`) exactly as they are unless the JSX is edited too.

### 10.6 Marquee
`testimonialsSection` `slideTrack` is the origin; `meetTheTeamSlider` is a self-described copy. Each repeats `calc()` over 10 stops at desktop / ≤1024 / ≤640 (30 near-identical lines).
- [ ] Extract `@function marquee-offset($n, $item-width, $gap)` / `@mixin marquee($items, …)`; the two files differ only in item width. `formatTab` has its own marquee (different) — leave.

### 10.7 Dot-grid texture
Origin `rdgIntroduction` (36px, `rgba(4,105,153,.12)`). Copies: `perthServices`, `richmondServices`, `richmondContext`, `sydneyContext`, `melbourneServices` (40px, `.07–.08`). `webDatabases` has an 18px canvas variant (leave).
- [ ] `dot-texture($size: 40px, $color: $accent-tint)` — pick 40px; `rdgIntroduction` 36→40 is ≈ invisible.

### 10.8 Wipe-hover buttons and the hover-border hack → `@include btn`
Hand-rolled wipe buttons (radius `0.1rem`, `letter-spacing:1px`, `::before` wipe): `contact .option h2`, `ctaMain .link`, `howWeWork .ctaBtn`, `introduction .ctaBtn`, `isRightWord .linkBtn`, `newPageSegment .btn`, `pageSegmentFinal .btnPrimary`, `popupFormsHero .ctaBtn`, `promo .link`, `servicePageCards`, `solutionsCarousel` (radius `13px 25px`).
Hover-border hack (`:hover{border:1px solid $accent}` to compensate for the global `.btn`): `popupFormsHero`, `popupFormsProcess`, `promo`, `relatedLinks`, `servicesWord`, `payment .homeButton`.
- [ ] Replace each hand-rolled wipe with `@include btn;` and delete its `::before`/hover rules (the mixin has them). Check each one’s own padding/size — `btn` is `13px 25px`, `1px` tracking, capitalised.
- [ ] Delete the hover-border hack in the same commit **and** remove the `btn` class from the element’s `className` in the TSX.
- [ ] When `grep` (§2.3) finds no TSX using `btn`, delete `.btn` from `global.css` (§8 Phase 4).

### 10.9 Button variants → what each becomes (D8)
| Variant | Spec today | Files | Becomes |
|---|---|---|---|
| **A** solid on light | `.88rem/700/.3px`, pad `.95rem 2.25rem`, radius 4px, hover `darken 8%` + `translateY(-1px)` | `adelaideIntro, brisbaneIntro, cairnsIntro, canberraIntro, centralCoastIntro, melbourneIntro, perthIntro, richmondIntro, sydneyIntro, goldCoastIntro, copilotIntro` (+ smaller `.nicheBtn/.ctaBtn` `.85rem` in `adelaideContext, brisbaneContext, cairnsApproach, centralCoastContext, canberraWhy, perthContext, richmondContext`) | `@include btn;` ≈ squarer corners, wipe instead of darken |
| **B** solid on dark | `.9rem/700/.3px`, pad `.85rem 1.75rem`, hover `lighten 6%` | `migrationHero, migrationPaths, migrationProcess, queryProcess, activexHero` | `@include btn;` (works on dark) |
| **C** white on accent | `.85–.88rem/700`, white bg, accent text | `copilotCta, caseStudyCallout, companiesControl, powerPointAutomation, microsoftSolutions` | `@include btn-on-accent;` (white first, accent wipes in) |
| **D** outline | `.88rem/700`, 3px radius, 1px border | `businessAnalysisHero .secondary` = `emailTriageHero .secondary`, `aiAgentsHero`, `aiTemplatesHero`, `sqlHero`, `businessAnalysisProof .all`, `copilotCta .btnSecondary`, `migrationHero .ctaSecondary` | **leave** (A4) — decide later, then one `btn-outline` |
| unstyled → global `.btn` | no padding/font in module | `businessAnalysisHero .primary`, `emailTriageHero .primary`, `sqlHero .primary`, `groupIntro .cta`, `dashboardsAi .cta`, `govDeptProcess .cta` | `@include btn;` on the class + drop `btn` from TSX |
- ⚠ `darwinIntro .btn` hovers with `color.adjust($earth, +8%)` — themed (D10): keep its colours locally.
- ⚠ `caseStudySubmission .submitBtn` lightens on hover — becomes `btn`. `cookieConsent` accept button hovers **green** (`#05a605`) — becomes `btn` (fixes the off-brand colour).

### 10.10 Card-theme triplicates
`rdgCapabilities` (`.cardDark/.cardMid/.cardAccent`, ~25 identical lines ×3), `webCapabilities` (BEM `card--light/dark/accent`), `bpaDocProcessing` (`.cardDark/.cardMid/.cardAccent`). Also `relatedLinks` (`.dark/.light` custom properties — the **good** pattern) and `rebrandingWhat` (`--body/--chip`).
- [ ] Build `card-theme` from the `relatedLinks` custom-property approach (set `--bg/--fg/--muted/--line` per theme once; the card rules read the variables) and apply to the three files.

### 10.11 Form fields
`contact` (inputs 1.125rem, radios/checkboxes, error block — includes invalid CSS, §11) and `caseStudySubmission` (inputs `.95rem`/radius 6, labels `.85/700`, submit `.95/700`). Both duplicate each other.
- [ ] Fix `contact`’s invalid declarations first (own commit), then extract `form-field`, `form-label`, `form-error` (use `$error*`).

### 10.12 Sticky and scroll offsets (header coupling)
`sticky top:` **130px** (`copilotIntro, copilotValue, howWeWork, introduction, melbourneContext, migrationProcess, migrationProblem, queryProcess, queryServices`) · **6rem** (`formFieldsAnatomy, formBuilding, excelSection, corporateIdentityAnatomy`) · **7rem** (`sqlBenefits`) · **8rem** (`mailMergeServices`).
`scroll-margin-top:` **4rem** (`customDevSection, dashboardsAi, dashboardsDemos, databaseChooser, excelSection, microsoft365Section, northernNswAi, northernNswPlatforms, rebrandingWhy, sqlServerAzure, webDatabases, wordSection`) · **6rem** (`companies*`, `sqlProcess`) · **150px** (`mailMergeFixes/Services/Outputs, googleMigrationSolution, newPageSegment, rebrandingWhat`) · **125px** (`expertsAwait`).
- [ ] Measure the real fixed-header height at each breakpoint (DevTools, computed height of the header element).
- [ ] Set `$header-offset` (= height + small gap) and `$scroll-offset` from the measurement; replace all values; verify anchor links land correctly and sticky columns don’t overlap the header at 1200 / 1440.
- ⚠ Do not do this as part of a page-family commit — it is a layout change.

### 10.13 TOC / jump lists
`contentsComponent`, `databaseIntro` (dot+pipe), `locationsIntro` (uppercase `.25em` `#888` jump list), `pageSegment2` (`.contents`, hidden ≤1199 via four `display:none` blocks). `contentsComponent` + `pageSegment2` also share the `[style*="display: flex"]` attribute-selector hack and a `→` hover arrow.
- [ ] Low priority; unify only if the TOC is redesigned.

### 10.14 Chips, tags and micro-labels (largest, least visible)
Micro-label sizes seen: 0.6, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.7, 0.72, 0.74, 0.75, 0.76, 0.78, 0.8, 0.82rem at weights 500–800 and letter-spacing 0.5–3px, in ~120 files (`.tag`, `.label`, `.tagsLabel`, `.places`, `.areasLabel`, `.statLabel`, `.cardIndex`, `.cardCategory`, `.rowEyebrow`, `.proofLabel`, `.tileTag`, `.stepNum`…). Pill chips `0.72rem/600` repeat in ≥15 files (`feature`, `use`, `chip`, `tag`: `adelaideServices, apiIntro, cairnsServices, canberraContext, darwinContext, goldCoast*, melbourneContext, centralCoastServices, dashboardsDataSources…`).
- [ ] Collapse to `label` (0.68rem/700/2px) with a second `label-lg` (0.72rem/1.5px) only if the screenshots show a real need. Anything that sits *above a heading* is an eyebrow instead (`eyebrow`, hidden ≤449px).
- [ ] Chips → one `chip($variant: accent | neutral | dark)` with `$radius-pill`.
- [ ] Do this per family at the end of each family (§7 step 8), **one commit** because it is mass-change/low-risk.

### 10.15 Inline body links
`a { color:$accent; font-weight:700 }` repeated in `companiesHeadaches` (×2), `dashboardsIntro`, `formBuilding` (×2), `govDeptCompliance`, `newPageSegment4` (×2), `northernNswIntro`, `mailMergeBeyond/Intro` — `@include inline-link;` (the mixin already exists in `_apiIntegration`; promoted in §4.1).

### 10.16 Identical responsive triples
`ctaMain` (~15), `expertsAwait` (~8), `header` (8 `display:none` triples), `faqSection` (4), `contact` (~15 phone+landscape pairs), `footer`, `intro`, `aiTemplates*` (tablet+phone pairs), `accessibilityChecklist`, `formDataJourney/formFieldsAnatomy` (tablet+phone identical), `perthServices/richmondServices/sydneyServices` (desktop+tablet identical), `contents` (desktop+tablet identical `max-width:45vw`; `phoneLandscape` block appears twice).
- [ ] Only merge when the bodies are **byte-identical**; wrap them in `belowDesktop` / `mobile` and let the CSS diff confirm. Different bodies stay separate.
- ⚠ `header`/`mobileNav` use `deskL`/`desktop` deliberately — use `belowDeskL`, not `belowDesktop` (§1.3).

### 10.17 Stats / big numbers
`statValue` etc.: `clamp(2.8rem,5vw,4rem)/900` (brisbaneWhy, melbourneWhy, perthWhy, richmondWhy) · `clamp(2.4rem,4vw,3.3rem)` (adelaideWhy, centralCoastFaq) · `clamp(2.2rem,3.8vw,3.1rem)` (apiProcess) · `clamp(2.2rem,3.4vw,3rem)` (darwinWhy, goldCoastWhy) · `clamp(2rem,3.5vw,3rem)` (cairnsIntro, canberraIntro) · `clamp(1.6rem,2.5vw,2.2rem)` (rdgIntroduction, canberraContext) · `2.2rem` (bpaIntro, copilotLicensing) · `clamp(3.5rem,6vw,5rem)/800` (sqlSecurityProof) · `4.5rem/800` (conversionBento).
- [ ] Introduce `stat-value($size: md | lg)` (one scale: md `clamp(2rem,3.5vw,3rem)`, lg `clamp(2.8rem,5vw,4rem)`); weight 700 like headings.

---

## 11. Probable bugs and dead code — fix in their own commits

For each: confirm in the browser (or TSX) that it is really a bug, fix in **one commit per item or per file**, re-snapshot, and note that fixing a silent bug *changes the rendering* (expected).

### 11.1 Invalid CSS / rules that never fire
- [ ] 🐞 `fillFormMain` — `@media screen and (max-width: "700px")` (quoted) → svg never hides on small screens
- [ ] 🐞 `promo` — `@media (min-width: "800px")` (quoted) → rule never fires; plus `!important` on font-weight/colour
- [ ] 🐞 `contact` — `font-size: rem;` (no number) and `outline: $accent;` (no style/width)
- [ ] 🐞 `boxSegment` — `list-style-type-color` is not a CSS property
- [ ] 🐞 `locationGroups` — `margin-top: auto 0` is invalid
- [ ] 🐞 `testimonialsCard` — `tabindex: 0;` written as a CSS property (no-op; belongs in JSX)
- [ ] 🐞 `webCapabilities` — `$accentDark: $accentDark;` self-reference; also redeclares globals after `@use … as *`
- [ ] 🐞 `appDevIntro` — `.dark, .accentTile &` selector is only half-nested
- [ ] 🐞 `footer` — `top: 00px`
- [ ] 🐞 `supportTrainingHub` — CSS variables `--text-secondary/--primary-rgb/--bg-light/--text-primary` undefined in the Project; `margin-bottom:3rem` then `margin:0 5vw` conflict
- [ ] 🐞 `wordTemplatesBlog` — `var(--aptos)` (every other file uses `--font-aptos`)
- [ ] 🐞 `cookieConsent` — `min-width:768` and `max-width:768` overlap at exactly 768px; accept hover is **green** (`#05a605`), off-brand
- [ ] 🐞 `sydneyWhy` — `min-width:900` and `max-width:900` overlap
- [ ] 🐞 `businessAnalysisHero` — raw `770px` vs `phone` mixin mismatch; `img width:900px` fixed
- [ ] 🐞 `flipBook` — mojibake in comments (`Ã—`, `â†`), `object-fit` declared twice (one `!important`)

### 11.2 Contrast / visibility
- [ ] 🐞 `canberraServices` — `.triggerTitle` is `$text-primary` (#0d1b2a) on `$dark-bg` (≈ invisible); `.panelBody` `$text-secondary` on dark (low contrast); eyebrow not hidden on phone (siblings hide it)
- [ ] 🐞 `activexReplaces` — `.title` `$gray` (#454545) on `$dark-bg`
- [ ] 🐞 `migrationChallenges` — `$accent` eyebrow on a dark background (low contrast); eyebrow not hidden on phone
- [ ] 🐞 `videoSegment` — spinner `border` and `border-top` both `$accent` → no visible arc
- [ ] 🐞 `blog` — `.noResults` background **and** colour are both `$darkGrayText`
- [ ] ⚠ ~12 pill eyebrows use `rgba($accent,.9)` on dark sections (contrast ≈ 3:1) → fixed by `eyebrow-on-dark` (`#ffffffbf`, D3)

### 11.3 Responsive inversions and double padding
- [ ] 🐞 `melbourneIntro` — phone padding (5rem) larger than landscape (4rem)
- [ ] 🐞 `sydneyIntro` — phone `5rem 1.25rem` vs landscape `4rem 1.5rem` (same inversion)
- [ ] 🐞 `copilotIntro` — phone `5rem` > landscape `4rem`
- [ ] 🐞 `compareContainer` — `.container` duplicates the phone padding → **double padding on phone**
- [ ] 🐞 `services` — phone padding declared twice (the `!important` one wins)
- [ ] 🐞 `ctaFull` — `.ctaBtn` declares padding twice (second `!important`)
- [ ] 🐞 `perthIntro` and `richmondIntro` — landscape and phone blocks identical (duplicate)

### 11.4 Duplicate declarations (the later one silently wins)
- [ ] `payment` — ~20 selectors declared twice (`receiptCard/Header/Number/Details/Grid/Section/Row/RowTotal/Label/Value, cardTypeBadge, receiptActions, homeButton, additionalInfo, confirmationNote, contactInfo/Details/Method, securityFooter/Badges/Badge, successWrapper`)
- [ ] `blog` — `.postCard`, `.postImageContainer`, `.postImage` each twice; h2 underline duplicated between `.featuredSection` / `.allPostsSection`
- [ ] `blogPost` — ~160 lines (`.BgImageContainer` … `#pitfall`) duplicated verbatim
- [ ] `pageSegment` — `.points .point .tick` defined twice; `newPageSegment` — `.tick/.points/.point` twice + `.semi` has duplicate `@include phone`
- [ ] `pageSegment4` — `.tick` declared **3×**, `.points` ×2, empty `.content h2 {}`, `.reverse .content` `flex-direction` no-op
- [ ] `pageSegmentCenter` — `.tick` defined twice with different meanings; `.pageSegmentCenter` defined twice
- [ ] `pageSegmentSmall` — empty `@include tablet {}`
- [ ] `aiTemplatesHero` — `.secondary` declared twice
- [ ] `popupFormsProcess` — `.cta` declared twice
- [ ] `queryComparison` — `.attrCol` declared twice; long stale `valueCols` comment
- [ ] `wordTemplatesBlog` — `.templateType` declared twice
- [ ] `header` — duplicate `.nestedDropdown` block
- [ ] `logos` — `.logos5 img:hover` declared twice and `.logos7` hover missing (probably dead — confirm usage)
- [ ] `solutionsCarouselWord` — `.cta` declares `display` twice; whole file duplicates `solutionsCarousel`
- [ ] `rdgHowItWorks` — `.step` has duplicate `&:last-child` blocks
- [ ] `activexAffectedCheck` — `boxOne/Three/Four` identical blocks

### 11.5 Dead / unused code
- [ ] `ccp` (likely dead), `logos` (likely dead) — grep TSX for the module import before deleting
- [ ] `thirdPartyMethods` — `.item:hover::before` animates a `::before` that is never defined
- [ ] `migrationProcess` — `.connector { display:none }`
- [ ] `centralCoastContext` — local `$sand` unused (and `$sand-line:#000` used as a tag border)
- [ ] `servicePageCards` — dead `.hidden`
- [ ] `microsoftSolutions` — imports globals but never uses them
- [ ] commented-out CSS: `meetTheTeam` (~30 lines), `brisbaneIntro`, `richmondIntro` (padding), `wordSection .sheetDesc`, `ctaFull`
- [ ] `whyChoose` / `faqSection` — `details[open] ~ details[open]` doesn’t do what its comment says; `whyChoose`’s `@keyframes slideDown` targets `.content` (wrong element?)

### 11.6 Misleading names & stale comments
- [ ] `brisbaneWhy` — `.light` card is actually a dark surface; `activexAffectedCheck` — comment says Box 3 is “light” but it is dark
- [ ] `introduction` — stale “assumes globals has mixins” comment; `formBuilding` — header comment names the wrong file (`segment4Repeat`); `payment` — “Add these styles to your payment.module.scss”; `wordTemplatesBlog` — “Additional styles to add to …”; `solutionsCarouselWord` — header says `solutionsCarousel2`; `migrationHero` — header contains an app path
- [ ] `fillFormMain`, `formBuilding`, `accessibilityPageSegmentMain` — eyebrow is `p:first-child`/`.intro p:first-child` (structural; needs a class)

---

## 12. Leave alone (✋) — and why

| File(s) | Do | Why |
|---|---|---|
| `animate` | nothing | utility animation classes, no tokens needed |
| `caseStudyCarousel` | nothing | structural selector hack (`.carousel > section > div > ul`) + third-party DOM; no globals |
| `codeBlock` | nothing | Prism theme overrides with `:global` + `!important` |
| `ccp`, `logos` | verify usage, then delete or leave | placeholder / prototype (7 near-duplicate blocks) |
| `flipBook` | only replace its local `$accent` with the globals import | self-contained widget, mojibake comments |
| `ms365` | optionally import `$body` | hotspot widget with `color-mix()` and CSS vars |
| `templateCards` | nothing | A4 card-fan widget with its own variables |
| `header`, `mobileNav`, `hero` | colours → tokens only | structural navigation/hero; breakpoint contract §1.3; 8 `display:none` triples & 11 location keyframes are a separate, careful commit |
| `darwin*` | type/spacing only | themed (earth/ember/sun) — D10 |
| `goodToKnow`, `darwinServices` | colours only | unusual layouts (`svg margin-top:-16rem`, `@for` radio tabs) |
| `toolbarsApplyTab` | type/colour only | animated timeline with local `$slide-time/$cycle` |
| `payment` | colour tokens only | zero globals, ~30 hard-coded brand colours, ~20 duplicate selectors — separate commit |
| `servicesCard` | colours only | legacy flip card with ~8 `!important` |
| `webDatabases`, `sqlServerAzure` | type/colour only | console/canvas widgets |
| `compare*` | one shared mixin for the `.index0/1/3` hide block, nothing else | scroll-reveal comparison widget |

---

## 13. Appendix — raw audit tables

Reference data behind the decisions in §3 and the per-file “Now” lines in §9. Counts are from the audit of every file; confirm exact numbers on your tree with the §2.3 greps. Nothing here needs ticking — use it to see which files share a variant before you choose a token.

### 13.1 h2 / section-heading variants (files that use `clamp()`)

Every row ends at **weight 700** (D2). Rows tagged with a mixin are the main tiers; anything untagged goes to `heading-section` unless its file is a page opener (`*Hero`/`*Intro`) or sits in a `heading-main` family (§9). Line-height (1.06–1.25) and letter-spacing (−0.02 → −0.035em) also vary inside each row — the mixins fix both.

| # | `clamp()` | weight | files | which |
|---|---|---|---|---|
| 1 | `clamp(1.9rem, 3.2vw, 2.75rem)` → **`heading-section`** | 800 | 42 | `accessDatabases`, `accessSection`, `aiAutomationSection`, `aiBusinessData`, `automationAi`, `caseStudyCallout`, `corporateIdentityComparison`, `customDevSection`, `dashboardsAi`, `dashboardsDataSources` … +32 more |
| 2 | `clamp(1.9rem, 3vw, 2.6rem)` → `heading-section` (≤2px) | 800 | 30 | `aiAgentsCapabilities`, `aiAgentsComparison`, `aiAgentsGovernance`, `aiAgentsProcess`, `aiAgentsUseCases`, `aiTemplatesAgents`, `aiTemplatesComparison`, `aiTemplatesProcess`, `aiTemplatesReady`, `aiTemplatesReality` … +20 more |
| 3 | `clamp(2.2rem, 4.2vw, 3.5rem)` → **`heading-main`** | 900 | 17 | `adelaideWhy`, `centralCoastFaq`, `centralCoastServices`, `companiesControl`, `companiesCreation`, `companiesHeadaches`, `companiesIntro`, `companiesSolution`, `darwinWhy`, `powerPointIntro` … +7 more |
| 4 | `clamp(2rem, 3.5vw, 3rem)`  | 900 | 13 | `bpaIntro`, `cairnsIndustries`, `cairnsServices`, `canberraContext`, `canberraServices`, `copilotIntro`, `introduction`, `melbourneIntro`, `pageSegmentFinal`, `solutionsCarousel` … +3 more |
| 5 | `clamp(2.3rem, 4.4vw, 3.7rem)` → `heading-main` | 900 | 12 | `adelaideContext`, `adelaideServices`, `darwinContext`, `darwinServices`, `goldCoastContext`, `goldCoastServices`, `goldCoastWhy`, `googleMigrationIntro`, `rebrandingWhat`, `rebrandingWho` … +2 more |
| 6 | `clamp(2.2rem, 4vw, 3.4rem)` → `heading-main` | 900 | 10 | `brisbaneServices`, `canberraWhy`, `centralCoastContext`, `googleMigrationProcess`, `googleMigrationSolution`, `googleMigrationWhyWord`, `melbourneServices`, `perthServices`, `rdgIntroduction`, `richmondServices` |
| 7 | `clamp(2.4rem, 4.5vw, 3.8rem)` → **`heading-main`** (= your favourite size, now at 700) | 900 | 7 | `brisbaneIntro`, `brisbaneWhy`, `melbourneWhy`, `perthIntro`, `perthWhy`, `richmondIntro`, `richmondWhy` |
| 8 | `clamp(1.9rem, 3.2vw, 2.7rem)`  | 800 | 6 | `businessAnalysisAreas`, `businessAnalysisComparison`, `businessAnalysisProblem`, `businessAnalysisProcess`, `businessAnalysisProof`, `businessAnalysisValue` |
| 9 | `clamp(1.9rem, 4vw, 2.8rem)`  | inherit | 5 | `conversionBento`, `conversionComparison`, `conversionFaq`, `conversionProblem`, `conversionProcess` |
| 10 | `clamp(2rem, 3.4vw, 3rem)`  | 900 | 5 | `activexReplaces`, `bpaApprovals`, `bpaReplaces`, `queryComparison`, `querySegmentMain` |
| 11 | `clamp(2rem, 3.6vw, 3rem)`  | 800 | 5 | `emailTriageHero`, `templateDesignPrinciples`, `templateDocumentTypes`, `templateStyleGuides`, `templateWhyChoose` |
| 12 | `clamp(2.1rem, 4vw, 3.4rem)`  | 900 | 5 | `mailMergeBeyond`, `mailMergeFixes`, `mailMergeIntro`, `mailMergeOutputs`, `mailMergeServices` |
| 13 | `clamp(1.9rem, 3.2vw, 2.75rem)`  | 700 | 5 | `migrationPaths`, `migrationProcess`, `migrationScenarios`, `migrationStack`, `wordSection` |
| 14 | `clamp(1.8rem, 3vw, 2.6rem)`  | 900 | 4 | `copilotApps`, `copilotDelivery`, `copilotLicensing`, `microsoftSolutions` |
| 15 | `clamp(2.1rem, 3.8vw, 3.2rem)`  | inherit | 4 | `govDeptCompliance`, `govDeptIntro`, `govDeptProcess`, `govDeptTemplateSystem` |
| 16 | `clamp(2rem, 3.6vw, 3rem)`  | 900 | 4 | `powerPointAutomation`, `powerPointRedesign`, `powerPointSupport`, `powerPointTemplates` |
| 17 | `clamp(2rem, 3.2vw, 2.8rem)`  | 900 | 3 | `bpaDocProcessing`, `bpaFaq`, `rdgCapabilities` |
| 18 | `clamp(2.2rem, 4vw, 3.4rem)`  | 800 | 3 | `cairnsApproach`, `perthContext`, `templateIntro` |
| 19 | `clamp(2.3rem, 4.4vw, 3.4rem)`  | 800 | 2 | `aiTemplatesHero`, `sqlHero` |
| 20 | `clamp(2rem, 3vw, 2.8rem)`  | 900 | 2 | `bpaProcess`, `howWeWork` |
| 21 | `clamp(2.4rem, 4.5vw, 3.8rem)`  | 800 | 2 | `brisbaneContext`, `richmondContext` |
| 22 | `clamp(2.2rem, 4vw, 3.2rem)`  | 900 | 2 | `cairnsWhy`, `sydneyWhy` |
| 23 | `clamp(2rem, 3.5vw, 2.8rem)`  | 900 | 2 | `copilotValue`, `sydneyServices` |
| 24 | `clamp(2.1rem, 3.8vw, 3.2rem)`  | 900 | 2 | `googleMigrationFormatting`, `govDeptCapabilities` |
| 25 | `clamp(1.75rem, 2.8vw, 2.5rem)`  | 800 | 2 | `melbourneContext`, `sydneyContext` |
| 26 | `clamp(1.9rem, 3vw, 2.6rem)`  | 900 | 2 | `rdgHowItWorks`, `rdgUseCases` |
| 27 | `clamp(2.3rem, 4.6vw, 3.9rem)`  | 900 | 2 | `rebrandingIntro`, `wollongongIntro` |
| 28 | `clamp(2rem, 6vw, 3.5rem)`  | 900 | 2 | `services`, `servicesWord` |
| 29 | `clamp(1.7rem, 3.5vw, 2.4rem)`  | inherit | 1 | `conversionCta` |
| 30 | `clamp(2.2rem, 5vw, 3.6rem)`  | inherit | 1 | `templateHero` |
| 31 | `clamp(1.9rem, 3.2vw, 2.6rem)`  | 900 | 1 | `activexFaq` |
| 32 | `clamp(1.8rem, 3vw, 2.5rem)`  | 900 | 1 | `activexAffectedCheck` |
| 33 | `clamp(2.4rem, 4.5vw, 3.6rem)`  | 900 | 1 | `activexHero` |
| 34 | `clamp(2.4rem, 5vw, 4.3rem)`  | 900 | 1 | `adelaideIntro` |
| 35 | `clamp(2rem, 4vw, 3.2rem)`  | 800 | 1 | `aiAgentsProblem` |
| 36 | `clamp(2.2rem, 4.2vw, 3.3rem)`  | 800 | 1 | `aiAgentsHero` |
| 37 | `clamp(2.1rem, 4vw, 3.3rem)`  | 900 | 1 | `apiAgents` |
| 38 | `clamp(1.7rem, 3vw, 2.4rem)`  | 700 | 1 | `automationImpact` |
| 39 | `clamp(1.6rem, 2.8vw, 2.25rem)`  | 700 | 1 | `automationIntegration` |
| 40 | `clamp(1.75rem, 3vw, 2.5rem)`  | 700 | 1 | `automationMain` |
| 41 | `clamp(1.6rem, 2.4vw, 2.8rem)`  | 700 | 1 | `boxSegment` |
| 42 | `clamp(1.85rem, 2.8vw, 2.6rem)`  | 900 | 1 | `bpaEmailTriage` |
| 43 | `clamp(2.3rem, 4.6vw, 3.6rem)`  | 800 | 1 | `businessAnalysisHero` |
| 44 | `clamp(2.2rem, 4.5vw, 3.8rem)`  | 900 | 1 | `cairnsIntro` |
| 45 | `clamp(2.4rem, 5vw, 4.2rem)`  | 900 | 1 | `canberraIntro` |
| 46 | `clamp(2.1rem, 4vw, 3.2rem)`  | 900 | 1 | `caseStudies` |
| 47 | `clamp(2.1rem, 3.6vw, 3rem)`  | 900 | 1 | `caseStudyDetail` |
| 48 | `clamp(1.9rem, 3.5vw, 2.6rem)`  | 900 | 1 | `caseStudySubmission` |
| 49 | `clamp(2.6rem, 5.6vw, 4.8rem)`  | 900 | 1 | `centralCoastIntro` |
| 50 | `clamp(1.75rem, 4vw, 2.6rem)`  | 800 | 1 | `compareContainer` |
| 51 | `clamp(1.6rem, 2.8vw, 2.2rem)`  | 900 | 1 | `copilotCta` |
| 52 | `clamp(2rem, 3.5vw, 2.8rem)`  | 800 | 1 | `copilotIntegration` |
| 53 | `clamp(2.5rem, 5vw, 4rem)`  | 900 | 1 | `ctaFull` |
| 54 | `clamp(2.5rem, 5.2vw, 4.5rem)`  | 900 | 1 | `darwinIntro` |
| 55 | `clamp(1.7rem, 2.6vw, 2.2rem)`  | 800 | 1 | `emailTriageInOut` |
| 56 | `clamp(2rem, 5vw, 4rem)`  | inherit | 1 | `expertsAwait` |
| 57 | `clamp(2.5rem, 5.2vw, 4.4rem)`  | 900 | 1 | `goldCoastIntro` |
| 58 | `clamp(2rem, 3.4vw, 2.9rem)`  | 900 | 1 | `goodToKnow` |
| 59 | `clamp(2.1rem, 3.8vw, 3.1rem)`  | 900 | 1 | `googleMigrationCta` |
| 60 | `clamp(4rem, 9vw, 7rem)`  | 700 | 1 | `hero` |
| 61 | `clamp(2.25rem, 4vw, 3.25rem)`  | inherit | 1 | `locationsIntro` |
| 62 | `clamp(1.8rem, 3vw, 2.6rem)`  | 700 | 1 | `migrationChallenges` |
| 63 | `clamp(2.4rem, 5vw, 4rem)`  | 700 | 1 | `migrationHero` |
| 64 | `clamp(1.9rem, 3.5vw, 2.9rem)`  | 700 | 1 | `migrationProblem` |
| 65 | `clamp(2.2rem, 4vw, 3.4rem)`  | inherit | 1 | `popupFormsUseCases` |
| 66 | `clamp(1.9rem, 3.2vw, 2.75rem)`  | 900 | 1 | `queryProcess` |
| 67 | `clamp(2.3rem, 4.4vw, 3.4rem)`  | 900 | 1 | `rebrandingIncluded` |
| 68 | `clamp(1.75rem, 3vw, 2.4rem)`  | 800 | 1 | `relatedLinks` |
| 69 | `clamp(2.5rem, 4.5vw, 4.5rem)`  | 900 | 1 | `serviceHero` |
| 70 | `clamp(1.8rem, 3vw, 2.5rem)`  | 800 | 1 | `templateFeatures` |
| 71 | `clamp(2.2rem, 4vw, 3.3rem)`  | 900 | 1 | `wollongongWhy` |

**71 distinct clamp+weight combinations** across 243 files.

**Fixed-size / non-clamp h2 rules (77 files)** — first value shown:

| file | rule today |
|---|---|
| `aboutUs` | 3rem/-/-/- |
| `accessibilityChecklist` | 1.9rem/-/1.3/- |
| `accessibilityPageSegmentMain` | 2rem/-/1.3/- |
| `accessibilityProcess` | 1.9rem/-/1.3/- |
| `accessibilityStandards` | 2.1rem/-/1.25/- |
| `apiByProduct` | api.heading |
| `apiFaq` | api.heading |
| `apiIntro` | api.heading |
| `apiProcess` | api.heading |
| `apiSurfaces` | api.heading |
| `apiUseCases` | api.heading |
| `blog` | h1 3rem/700; h2 2rem $accent+3px underline |
| `blogPost` | .blogTitle 2.5rem (3px accent underline); .blogContent h2 1.8rem $accent |
| `boringStuff` | h1 2.5rem; h2 1.8rem; h3 1.4rem |
| `contact` | .option h2 1rem; .active h2 3rem/900 hardcoded; .successMessage h2 2rem |
| `contactNextSteps` | inherits global h2/h4 (no size set) |
| `contents` | h3 1.25rem/700 $black |
| `contentsComponent` | h3 1.25rem/700 $black |
| `ctaMain` | h3 2.5rem (ph 2rem) $offWhite hardcoded |
| `customTab` | h2 3rem/900 $black (hardcoded, LEGACY) |
| `faqSection` | inherits global h2 (margin-bottom 3rem; $black) |
| `fillFormMain` | h2 2.3rem fixed (ph 1.8rem) lh1.2 |
| `flipBook` | .bookSegment h2 2.5rem hardcoded |
| `footerHelp` | h3 1.125rem $offWhite |
| `footerLocations` | h3 1.125rem $offWhite |
| `footerLogo` | h3 1.125rem/1px $offWhite |
| `footerServices` | h3 1.125rem $offWhite; dropdown h3 1rem/500 |
| `formBuilding` | h2 2.2rem lh1.2 (ph 1.75rem) no weight |
| `formDataJourney` | .heading 2.3rem lh1.2 (ph 1.8rem) |
| `formFieldsAnatomy` | .heading 2.4rem lh1.2 (ph 1.8rem) |
| `formProtectionExplainer` | .heading 2.2rem lh1.25 (ph 1.7rem) $white-90 |
| `formatTab` | inherits global h2 ($white-90) |
| `iframe` | h2 2.5rem/900 (770: 2rem) |
| `isRight` | .contentWrapper h2 3rem/900 $black margin 1.5rem 0 2rem |
| `isRightWord` | .contentWrapper h2 3rem/900 |
| `locationGroups` | .sectionTitle 2.5rem $accent + 4rem underline bar |
| `locationSummary` | h2 1.5rem |
| `lockedFormatting` | inherits global |
| `meetTheTeam` | .memberInfo h2 1.25/700/1px; h3 1rem/700 accent |
| `meetTheTeamSlider` | .teamHeading 3rem |
| `mobileNav` | .navContacts p 2rem/700 |
| `ms365` | .infoLabel 2rem/700/.8px |
| `newPageSegment` | .content h2 2.5rem/900 $black margin 2rem 0 |
| `ourTemplates` | inherits global h2 $white-90 |
| `pageSegment` | 2.5rem/900/-/- |
| `pageSegment2` | .info h2 $black/900 margin 1rem 0 |
| `pageSegment3` | .underline h2 2rem/700 |
| `pageSegment4` | .underline h2 2rem/700; empty `.content h2 {}` |
| `pageSegmentCenter` | h2 1.5rem (.underline h2 1.5/700 + border-bottom 6px $accent) |
| `pageSegmentDropdowns` | .underline h2 1.5rem $black (margin-bottom set twice) |
| `pageSegmentSmall` | h2 $black/700 margin-bottom 1.5rem |
| `payment` | h1 1.8/2.2rem, h2 1.6/24px, h3 1.2-1.3rem, h4 1.1rem |
| `popupFormsHero` | .heading 2.6rem lh1.15 (phone 1.9) no weight |
| `popupFormsProblem` | 2.4rem lh1.2 (phone 1.8) |
| `popupFormsProcess` | 2.2rem lh1.2 (phone 1.7) |
| `popupFormsServices` | 2.2rem lh1.2 (phone 1.7) |
| `promo` | .text h2 2rem/900 $black |
| `proposalAssistantDemo` | 2.2rem lh1.2 (phone 1.7) |
| `quickPartsGallery` | 2.4rem lh1.2 (phone 1.8) |
| `quickPartsIntro` | 2.4rem lh1.2 (phone 1.8) |
| `quickPartsProcess` | 2.4rem lh1.2 |
| `quickPartsSystem` | 2.4rem lh1.2 white |
| `quickPartsTypes` | 2.4rem lh1.2 white-90; storageHeading 1.5rem |
| `quote` | p 1.25rem/700 italic |
| `refundPolicy` | mainTitle 2rem/700; sectionTitle 1.5rem/600 |
| `servicePageCards` | card h2 1.25rem lh1.5rem/900 $black |
| `servicesCard` | h3 1rem; h4 1rem/900 |
| `supportPage` | pageHeader h2 1.75rem lh1.5 |
| `supportTrainingHub` | .leadText 2.5rem/700 $accent (phone 2rem); h2 2rem/1.8rem $accent; h3 1.4rem |
| `tabComparison` | h3 1rem/700 $text-secondary |
| `teamCard` | .name 1.5rem !important |
| `testimonialPage` | h2 1.5rem lh2.5rem |
| `testimonialsCard` | h4 1rem $black |
| `testimonialsSection` | h3 3rem $black; .teamHeading 3rem |
| `videoSegment` | title 2rem/700 $black |
| `whyChoose` | .content h2 3rem |
| `wordTemplatesBlog` | blogTitle 2.2rem (md 2.8rem)/600; h2 1.8rem/600; h3 1.4rem/600 $accent |

### 13.2 Eyebrow recipes (size / weight / letter-spacing)

| recipe | files | which (small groups listed in full) |
|---|---|---|
| `0.68rem / 700 / 3px` | 95 | `adelaideContext`, `adelaideIntro`, `adelaideServices`, `adelaideWhy`, `apiAgents`, `bpaEmailTriage`, `brisbaneContext`, `brisbaneIntro`, `brisbaneServices`, `brisbaneWhy`, `cairnsApproach`, `cairnsIndustries` … +83 more |
| `0.7rem / 700 / 3px` | 94 | `accessDatabases`, `accessSection`, `activexAffectedCheck`, `aiAgentsCapabilities`, `aiAgentsHero`, `aiAgentsProblem`, `aiAgentsProcess`, `aiAutomationSection`, `aiBusinessData`, `aiTemplatesHero`, `aiTemplatesProcess`, `appDevIntro` … +82 more |
| `other / structural / unsized` | 28 | `aboutUs`, `accessibilityChecklist`, `accessibilityPageSegmentMain`, `accessibilityProcess`, `apiByProduct`, `apiFaq`, `apiIntro`, `apiProcess`, `apiSurfaces`, `apiUseCases`, `copilotIntegration`, `iframe` … +16 more |
| `0.85rem / 700 / 0.08em` | 11 | `conversionBento`, `conversionComparison`, `conversionCta`, `conversionFaq`, `conversionProblem`, `conversionProcess`, `fillFormMain`, `formBuilding`, `formDataJourney`, `formFieldsAnatomy`, `formProtectionExplainer` |
| `0.85rem / 700 / .08em` | 9 | `popupFormsProblem`, `popupFormsProcess`, `popupFormsServices`, `proposalAssistantDemo`, `quickPartsGallery`, `quickPartsIntro`, `quickPartsProcess`, `quickPartsSystem`, `quickPartsTypes` |
| `0.7rem / 700 / 2.5px` | 6 | `activexFaq`, `activexReplaces`, `bpaApprovals`, `bpaDocProcessing`, `bpaFaq`, `bpaReplaces` |
| `0.85rem / 700 / 0.06em` | 5 | `govDeptCapabilities`, `govDeptCompliance`, `govDeptIntro`, `govDeptProcess`, `govDeptTemplateSystem` |
| `0.75rem / 600 / 0.14em` | 3 | `automationImpact`, `automationIntegration`, `automationMain` |
| `0.75rem / 700 / 3px` | 2 | `activexHero`, `introduction` |
| `0.8rem / 700 / .12em` | 2 | `popupFormsUseCases`, `relatedLinks` |
| `0.7rem / 700 / 2px` | 1 | `aiAgentsUseCases` |
| `0.875rem / 700 / 0.1em` | 1 | `contactNextSteps` |
| `0.75rem / 700 / .25em` | 1 | `locationsIntro` |
| `0.95rem / 700 / 1px` | 1 | `pageSegmentFinal` |
| `0.85rem / 700 / .06em` | 1 | `popupFormsHero` |
| `0.8rem / 700 / 1px` | 1 | `servicePageCards` |

**Pill eyebrows (49):** `activexAffectedCheck`, `activexFaq`, `activexHero`, `activexReplaces`, `adelaideIntro`, `aiTemplatesHero`, `bpaApprovals`, `bpaDocProcessing`, `bpaEmailTriage`, `bpaFaq`, `bpaIntro`, `bpaProcess`, `bpaReplaces`, `brisbaneServices`, `brisbaneWhy`, `businessAnalysisHero`, `cairnsIndustries`, `cairnsIntro`, `cairnsServices`, `cairnsWhy`, `canberraIntro`, `canberraWhy`, `caseStudies`, `caseStudyDetail`, `caseStudySubmission`, `centralCoastFaq`, `copilotDelivery`, `copilotIntro`, `copilotValue`, `corporateIdentityAnatomy`, `corporateIdentityDrift`, `emailTriageHero`, `goldCoastIntro`, `perthServices`, `queryComparison`, `queryProcess`, `rdgCapabilities`, `rdgHowItWorks`, `rdgIntroduction`, `rdgUseCases`, `richmondServices`, `richmondWhy`, `sqlHero`, `sydneyIntro`, `sydneyServices`, `sydneyWhy`, `templateHero`, `thirdPartyIntro`, `webCapabilities`

**Outline-pill eyebrows (7):** `goodToKnow`, `howWeWork`, `introduction`, `melbourneIntro`, `melbourneServices`, `melbourneWhy`, `migrationHero`

**Eyebrow hidden ≤449px (74):** `bpaIntro`, `brisbaneContext`, `brisbaneIntro`, `brisbaneServices`, `brisbaneWhy`, `businessAnalysisHero`, `cairnsApproach`, `cairnsIndustries`, `cairnsIntro`, `cairnsServices`, `cairnsWhy`, `canberraContext`, `canberraIntro`, `canberraWhy`, `centralCoastContext`, `centralCoastFaq`, `centralCoastIntro`, `centralCoastServices`, `companiesControl`, `companiesCreation`, `companiesHeadaches`, `companiesIntro`, `companiesSolution`, `copilotApps`, `copilotDelivery`, `copilotIntro`, `copilotLicensing`, `copilotValue`, `darwinContext`, `darwinIntro`, `darwinServices`, `darwinWhy`, `goldCoastContext`, `goldCoastIntro`, `goldCoastServices`, `goldCoastWhy`, `googleMigrationFormatting`, `googleMigrationIntro`, `googleMigrationProcess`, `googleMigrationSolution`, `googleMigrationWhyWord`, `melbourneContext`, `melbourneIntro`, `melbourneServices`, `melbourneWhy`, `perthContext`, `perthIntro`, `perthServices`, `powerPointAutomation`, `powerPointIntro`, `powerPointRedesign`, `powerPointSupport`, `powerPointTemplates`, `rdgIntroduction`, `richmondContext`, `richmondIntro`, `richmondServices`, `richmondWhy`, `solutionsCarousel`, `solutionsCarouselWord`, `sydneyContext`, `sydneyIntro`, `sydneyServices`, `sydneyWhy`, `toolbarsApplyTab`, `toolbarsAutomation`, `toolbarsIntro`, `toolbarsLayout`, `toolbarsLifecycle`, `toolbarsLockdown`, `wollongongContext`, `wollongongIntro`, `wollongongServices`, `wollongongWhy`

**Eyebrow explicitly shown on phone where siblings hide it (26):** `canberraServices`, `caseStudies`, `caseStudyDetail`, `copilotCta`, `corporateIdentityAnatomy`, `emailTriageHero`, `goodToKnow`, `howWeWork`, `mailMergeFixes`, `migrationChallenges`, `migrationHero`, `migrationPaths`, `migrationProblem`, `migrationProcess`, `migrationScenarios`, `migrationStack`, `migrationWord`, `powerPlatformSection`, `powerPointSection`, `queryComparison`, `queryProcess`, `rdgCapabilities`, `rdgUseCases`, `sqlHero`, `thirdPartyIntro`, `webCapabilities`

### 13.3 Section padding / margin models (desktop value) — for reference only: D4 leaves section padding alone

| desktop value | files | which |
|---|---|---|
| `7rem 8rem` | 93 | `accessDatabases`, `accessSection`, `activexAffectedCheck`, `aiAgentsCapabilities`, `aiAgentsComparison`, `aiAgentsGovernance`, `aiAgentsProblem`, `aiAgentsProcess` … +85 more |
| `8rem` | 78 | `activexFaq`, `activexReplaces`, `adelaideContext`, `adelaideIntro`, `adelaideWhy`, `bpaApprovals`, `bpaDocProcessing`, `bpaEmailTriage` … +70 more |
| `7rem 6vw` | 21 | `fillFormMain`, `formFieldsAnatomy`, `formProtectionExplainer`, `govDeptCapabilities`, `govDeptProcess`, `popupFormsHero`, `popupFormsProblem`, `popupFormsProcess`, `popupFormsServices`, `proposalAssistantDemo`, `quickPartsGallery`, `quickPartsIntro`, `quickPartsProcess`, `quickPartsSystem`, `quickPartsTypes`, `templateDesignPrinciples`, `templateDocumentTypes`, `templateFeatures`, `templateIntro`, `templateStyleGuides`, `templateWhyChoose` |
| `6rem 8rem` | 15 | `brisbaneIntro`, `caseStudyCallout`, `copilotIntro`, `emailTriageInOut`, `melbourneIntro`, `perthIntro`, `promo`, `richmondIntro`, `sydneyIntro`, `thirdPartyAiIntegration`, `thirdPartyFaq`, `thirdPartyIntro`, `thirdPartyMethods`, `thirdPartyPlatforms`, `thirdPartyProcess` |
| `6rem` | 13 | `boringStuff`, `contents`, `conversionBento`, `conversionComparison`, `conversionFaq`, `conversionProblem`, `conversionProcess`, `faqSection`, `formBuilding`, `locationSummary`, `pageSegmentSmall`, `supportTrainingHub`, `videoSegment` |
| `clamp-fluid (`clamp(4.5rem,9vw,8rem) clamp(1.25rem,7vw,8rem)`)` | 11 | `companiesControl`, `companiesCreation`, `companiesHeadaches`, `companiesIntro`, `companiesSolution`, `toolbarsApplyTab`, `toolbarsAutomation`, `toolbarsIntro`, `toolbarsLayout`, `toolbarsLifecycle`, `toolbarsLockdown` |
| `6rem 10vw` | 8 | `contact`, `customTab`, `formatTab`, `govDeptCompliance`, `govDeptIntro`, `govDeptTemplateSystem`, `meetTheTeam`, `ourTemplates` |
| `api.section-pad` | 6 | `apiByProduct`, `apiFaq`, `apiIntro`, `apiProcess`, `apiSurfaces`, `apiUseCases` |
| `4rem` | 6 | `flipBook`, `locationGroups`, `meetTheTeamSlider`, `quote`, `testimonialPage`, `testimonialsSection` |
| `8rem 10vw` | 5 | `compareContainer`, `newPageSegment`, `pageSegmentDropdowns`, `servicesWord`, `whyChoose` |
| `1rem` | 5 | `footerHelp`, `footerLocations`, `footerLogo`, `footerServices`, `newPageSegment4` |
| `6rem 1.5rem` | 4 | `accessibilityChecklist`, `accessibilityPageSegmentMain`, `accessibilityStandards`, `locationsIntro` |
| `2rem` | 4 | `blogPost`, `pageSegment4`, `payment`, `tabComparison` |
| `4rem 8rem 8rem` | 3 | `centralCoastServices`, `goldCoastServices`, `googleMigrationCta` |
| `8rem 7rem` | 2 | `aiTemplatesHero`, `sqlHero` |
| `5rem 2rem` | 2 | `automationIntegration`, `automationMain` |
| `3rem` | 2 | `brands`, `supportPage` |
| `7rem 10vw` | 2 | `isRight`, `isRightWord` |
| `4rem 10vw` | 2 | `pageSegment2`, `pageSegment3` |
| `5rem` | 1 | `conversionCta` |
| `7rem 5rem` | 1 | `templateHero` |
| `8rem 10vw 2rem` | 1 | `aboutUs` |
| `1.5rem 6rem` | 1 | `accessibilityProcess` |
| `9rem 8rem 7rem` | 1 | `activexHero` |
| `8rem 8rem 9rem` | 1 | `adelaideServices` |
| `8rem 6rem` | 1 | `aiAgentsHero` |
| `6rem 2rem 5rem` | 1 | `automationImpact` |
| `4rem 2rem` | 1 | `blog` |
| `6rem 10vw 5rem` | 1 | `boxSegment` |
| `7rem 7rem` | 1 | `businessAnalysisHero` |
| `7rem 8rem 4rem` | 1 | `caseStudies` |
| `14rem 8rem 5rem` | 1 | `caseStudyDetail` |
| `6rem 2rem` | 1 | `caseStudySubmission` |
| `padding 20vw` | 1 | `ccp` |
| `7rem 8rem 10rem` | 1 | `centralCoastIntro` |
| `4rem 1.5rem` | 1 | `contactNextSteps` |
| `fixed overlay` | 1 | `cookieConsent` |
| `fixed toc` | 1 | `contentsComponent` |
| `14rem 10vw 7rem` | 1 | `copilotIntegration` |
| `3rem 8rem 3rem 4rem` | 1 | `copyright` |
| `height 485px; padding 0 20vw` | 1 | `ctaFull` |
| `7rem 8rem 8rem` | 1 | `darwinIntro` |
| `6rem 2rem 6rem 3rem` | 1 | `footer` |
| `7rem 6vw 8rem` | 1 | `formDataJourney` |
| `7rem 8rem 11rem` | 1 | `goldCoastIntro` |
| `8rem 8rem 4rem 8rem` | 1 | `goodToKnow` |
| `7rem 2.2rem` | 1 | `header` |
| `6rem 15vw` | 1 | `intro` |
| `8rem 8rem` | 1 | `mailMergeServices` |
| `7rem 8rem 5rem` | 1 | `migrationHero` |
| `2rem 10vw` | 1 | `pageSegmentCenter` |
| `5rem 2.5rem 6rem` | 1 | `popupFormsUseCases` |
| `9rem 8rem 6rem` | 1 | `rdgIntroduction` |
| `2rem 1rem` | 1 | `refundPolicy` |
| `5rem 8rem` | 1 | `relatedLinks` |
| `height 499px (phone 320)` | 1 | `serviceHero` |
| `6rem 10vw 4rem` | 1 | `servicePageCards` |
| `1.5rem` | 1 | `teamCard` |
| `60px 0 80px` | 1 | `templateCards` |
| `3rem 3rem` | 1 | `testimonialsCard` |
| `margin/padding ad hoc` | 1 | `wordTemplatesBlog` |

Responsive ladders seen (tablet / landscape / phone): `6/4 · 5/2 · 5/1.25` (AI-era standard) · `6/4 · 5/1.5 · 4.5/1.25` (hubs) · `5.5/4 · 4.5/1.5 · 4/1.25` (api*) · `5/4 · 4.5/1.5 · 4/1.25` (mailMerge*) · `5/4 · 4/1.5 · 3.5/1.25` · `4.5/2.5`, `3.5/1` (automation*).

### 13.4 Inner max-widths

| width | files | which |
|---|---|---|
| `1200px` | 99 | `accessDatabases`, `accessSection`, `activexFaq`, `aiAgentsCapabilities`, `aiAgentsComparison`, `aiAgentsGovernance`, `aiAgentsHero`, `aiAgentsProcess` … +91 more |
| `1280px` | 40 | `adelaideIntro`, `adelaideWhy`, `companiesControl`, `companiesCreation`, `companiesHeadaches`, `companiesIntro`, `companiesSolution`, `darwinContext` … +32 more |
| `1300px` | 15 | `fillFormMain`, `formBuilding`, `formProtectionExplainer`, `govDeptCompliance`, `govDeptIntro`, `govDeptProcess`, `govDeptTemplateSystem`, `popupFormsProcess`, `quickPartsIntro`, `templateDesignPrinciples`, `templateDocumentTypes`, `templateFeatures`, `templateIntro`, `templateStyleGuides`, `templateWhyChoose` |
| `via mixin (container / api.inner)` | 14 | `apiAgents`, `apiByProduct`, `apiFaq`, `apiIntro`, `apiProcess`, `apiSurfaces`, `apiUseCases`, `conversionBento`, `conversionComparison`, `conversionCta`, `conversionFaq`, `conversionProblem`, `conversionProcess`, `templateHero` |
| `1400px` | 14 | `activexHero`, `aiAgentsProblem`, `businessAnalysisHero`, `canberraContext`, `canberraIntro`, `canberraWhy`, `caseStudyDetail`, `govDeptCapabilities`, `locationsIntro`, `mailMergeIntro`, `mailMergeServices`, `popupFormsHero`, `popupFormsServices`, `popupFormsUseCases` |
| `760px` | 7 | `centralCoastFaq`, `mailMergeBeyond`, `mailMergeFixes`, `mailMergeOutputs`, `migrationChallenges`, `pageSegmentFinal`, `popupFormsProblem` |
| `1100px` | 5 | `activexAffectedCheck`, `activexReplaces`, `automationImpact`, `automationIntegration`, `cairnsIntro` |
| `680px` | 4 | `copilotApps`, `copilotDelivery`, `migrationPaths`, `migrationScenarios` |
| `1180px` | 3 | `accessibilityChecklist`, `accessibilityPageSegmentMain`, `accessibilityProcess` |
| `700px` | 3 | `bpaDocProcessing`, `caseStudies`, `corporateIdentityAnatomy` |
| `600px` | 3 | `goodToKnow`, `payment`, `services` |
| `800px` | 3 | `locationSummary`, `refundPolicy`, `supportTrainingHub` |
| `720px` | 2 | `caseStudySubmission`, `migrationStack` |
| `640px` | 2 | `corporateIdentityDrift`, `webCapabilities` |
| `960px` | 1 | `accessibilityStandards` |
| `1080px` | 1 | `compareContainer` |
| `500px` | 1 | `contact` |
| `820px` | 1 | `copilotCta` |
| `1520px` | 1 | `formatTab` |
| `900px` | 1 | `goldCoastServices` |
| `560px` | 1 | `ms365` |
| `740px` | 1 | `queryProcess` |
| `280px` | 1 | `servicePageCards` |
| `300px` | 1 | `servicesCard` |
| `350px` | 1 | `testimonialsCard` |
| `1000px` | 1 | `videoSegment` |

### 13.5 Raw `@media` widths still in use (audit, approximate — confirm with the §2.3 grep)

| width | files | suggested mapping |
|---|---|---|
| 450px | 4 | phone/phoneLandscape boundary — keep or use `phoneLandscape` — `blogPost`, `header`, `newPageSegment`, `serviceHero` |
| 480px | 5 | decide (`phone`≤449?) — `blogPost`, `boxSegment`, `compareContainer`, `flipBook`, `payment` |
| 500px | 1 | decide — `blogPost` |
| 540px | 2 | decide — `compareContainer`, `header` |
| 580px | 1 | decide — `services` |
| 599px | 1 | decide — `companiesIntro` |
| 600px | 5 | decide — `flipBook`, `supportTrainingHub`, `tabComparison`, `toolbarsApplyTab`, `toolbarsLayout` |
| 630px | 1 | decide — `blogPost` |
| 640px | 2 | decide — `meetTheTeamSlider`, `testimonialsSection` |
| 700px | 10 | decide (`mobile` ≤766 is +66px) — `blogPost`, `fillFormMain`, `header`, `newPageSegment`, `pageSegment3`, `promo`, `quote`, `supportPage`, `sydneyWhy` … +1 more |
| 760px | 1 | ≈ `mobile` — `popupFormsUseCases` |
| 766px | 32 | `mobile` / `phoneLandscape` upper bound ✓ — `businessAnalysisAreas`, `businessAnalysisProblem`, `businessAnalysisProcess`, `businessAnalysisProof`, `businessAnalysisValue`, `companiesControl`, `companiesCreation`, `companiesSolution`, `customDevSection` … +23 more |
| 767px | 3 | ≈ `mobile` / `tabletUp` — `queryComparison`, `solutionsCarousel`, `solutionsCarouselWord` |
| 768px | 17 | ≈ `mobile` / `tabletUp` — `blogPost`, `boxSegment`, `codeBlock`, `contact`, `cookieConsent`, `copilotIntegration`, `corporateIdentityComparison`, `flipBook`, `ourTemplates` … +8 more |
| 770px | 11 | ≈ `mobile` (+4px) — `boxSegment`, `businessAnalysisHero`, `compareContainer`, `copilotIntegration`, `flipBook`, `iframe`, `migrationPaths`, `perthIntro`, `queryProcess` … +2 more |
| 800px | 5 | decide — `blogPost`, `pageSegment4`, `payment`, `promo`, `supportPage` |
| 850px | 1 | decide (grid remap) — `locationSummary` |
| 900px | 6 | decide (grid remap) — `locationsIntro`, `melbourneServices`, `ms365`, `pageSegment4`, `pageSegmentCenter`, `sydneyWhy` |
| 1000px | 2 | ≈ `belowDesktop` — `blogPost`, `pageSegmentDropdowns` |
| 1024px | 68 | `belowDesktop` / `tablet` upper bound ✓ — `businessAnalysisAreas`, `businessAnalysisHero`, `businessAnalysisProblem`, `businessAnalysisProcess`, `businessAnalysisProof`, `businessAnalysisValue`, `companiesControl`, `companiesCreation`, `companiesHeadaches` … +59 more |
| 1025px | 3 | `desktopUp` ✓ — `companiesSolution`, `templateDesignPrinciples`, `templateDocumentTypes` |
| 1040px | 1 | ≈ `belowDesktop` — `supportPage` |
| 1100px | 4 | decide — `pageSegment3`, `pageSegmentCenter`, `popupFormsUseCases`, `tabComparison` |
| 1160px | 1 | decide — `intro` |
| 1200px | 6 | `deskL` / `belowDeskL` (1199) — `blogPost`, `boxSegment`, `expertsAwait`, `header`, `isRightWord`, `pageSegment2` |
| 1240px | 1 | keep — `pageSegmentCenter` |
| 1260px | 1 | keep (header) — `header` |
| 1262px | 1 | decide — `header` |
| 1300px | 2 | keep — `isRight`, `isRightWord` |
| 1400px | 1 | keep (header) — `header` |

**Observation:** ~100 files already hand-write the exact mixin boundaries (`766px` ×32, `1024px` ×68) — those can use `mobile` / `belowDesktop` with zero change. Another ~30 use 767/768/770 (a ≤4px window).

Also present: `max-height: 700px` (header), `(hover: none)` (footer*), `prefers-reduced-motion` (several) — leave.

### 13.6 Border radii seen (number of files that use each value)

`2rem` ×64 · `4px` ×52 · `50%` ×51 · `6px` ×39 · `12px` ×35 · `8px` ×24 · `pill (999px/2rem)` ×23 · `14px` ×22 · `3px` ×19 · `10px` ×17 · `999px` ×16 · `16px` ×10 · `2px` ×10 · `0.1rem` ×8 · `20px` ×7 · `0.2rem` ×7 · `18px` ×4 · `1.5rem` ×3 · `22px` ×3 · `5px` ×2 · `0.25rem` ×2 · `0.3rem` ×2 · `.5rem` ×2 · `.2rem` ×2 · `1rem` ×1 · `1.25rem` ×1 · `1.75rem` ×1 · `0.5rem` ×1 · `0.4rem` ×1 · `0.75rem` ×1 · `26px` ×1 · `.25rem` ×1 · `.15rem` ×1 · `24px` ×1 · `.75rem` ×1

---

## 14. Final audit — “done when”

Run from the repo root (`STYLES` as in §2.1). Each command should return nothing, or only the documented exceptions in §12.

```bash
# 1 — no hand-written heading/eyebrow recipes or heavy heading weights left
grep -rnE 'clamp\((1\.[5-9]|2(\.[0-9])?)rem, *[0-9.]+vw, *[0-9.]+rem\)' $STYLES --include=*.module.scss | grep -v -E 'padding|margin|gap|scroll'
grep -rnE 'letter-spacing: *(3px|2\.5px|0\.08em|0\.06em|0\.14em)' $STYLES --include=*.module.scss
grep -rnE 'font-weight: *(800|900)' $STYLES --include=*.module.scss      # review each: headings must be 700
grep -rnE 'border-radius: *[0-9.]+(px|rem)' $STYLES --include=*.module.scss | grep -v -E '1\.5rem|999px|0\.1rem'   # review: only tiny elements may remain

# 2 — no raw brand colours or orphan literals
grep -rniE '#046999|rgba\( *4, *105, *153' $STYLES --include=*.module.scss
grep -rniE '#777a7e|#1e1e1e|#0eaa0e|#6fc3e8|#7ec8e3|#5ba4c4|#4fb3e|#034f72|#024d72|#03506f|#035878|#033a55' $STYLES --include=*.module.scss

# 3 — no local token shadows, no local mixins
grep -rnE '^\s*\$(accent|accent-light|black|grayText|offWhite|border|dark-bg|text-primary|text-secondary|ink|line|sky)\s*:' $STYLES --include=*.module.scss
grep -rnE '^@mixin' $STYLES --include=*.module.scss

# 4 — raw media queries only where documented
grep -rnE '@media' $STYLES --include=*.module.scss | grep -v -E 'prefers-reduced-motion|hover: *none|max-height'

# 5 — the shim and the global .btn are gone
grep -rn 'apiIntegration' $STYLES ; ls $STYLES/_apiIntegration.scss 2>/dev/null
grep -rnE 'className=("|\{`)[^"`]*\bbtn\b' src app components 2>/dev/null ; grep -n '^\.btn' global.css

# 6 — every module still compiles, and the output shrank
for f in $STYLES/*.module.scss; do npx sass --no-source-map "$f" >/dev/null || echo "FAIL $f"; done
wc -l $STYLES/*.scss | tail -1          # compare with the number saved in §2.1
```

- [ ] All six greps clean (or exceptions documented in §12)
- [ ] Full screenshot pass at 8 widths vs. the §2.2 baseline reviewed page by page
- [ ] Assumptions A1–A10 (§3.1) confirmed or changed; values recorded in `globals.scss`
- [ ] `_apiIntegration.scss` deleted; no `api.` references
- [ ] Bugs in §11 either fixed or consciously deferred (note which)
- [ ] A short “How to add a new section” note added to the top of `globals.scss`: *use `container` + `eyebrow` + `heading-main` / `heading-section` + `btn` — don’t write your own*

---

## 15. What this audit could not verify (so you know where to double-check)

- **Real `globals.scss`:** the Project copy lacks `container`, `belowDesktop`, `mobile` that seven files call (§1.1). Compare with the repo before Phase 1.
- **Global CSS:** `global.css` is now read (§1.2), but the layout file that defines `--font-aptos` / `--font-garamond` and any `:root` custom properties (e.g. what `supportTrainingHub` expects) was not provided.
- **TSX/JSX usage:** I did not have the components. Class names, `:global` hooks and structural selectors (`p:first-child`, `nth-child`, `[style*=…]`) are listed but their JSX counterparts weren’t checked (§2.3 grep).
- **Assumption A1:** the eyebrow size “8rem” in your brief is treated as `0.8rem`.
- **Rendering:** nothing was rendered. Visual deltas marked “≈” are estimated from the values (e.g. “≤2px at desktop”), not measured.
- **Counts:** compiled from reading every file; where a number is approximate it is marked `~`. The §2.3 / §14 greps give exact numbers on your tree. The `@use` form counts (§6 rule 1) in particular should be confirmed with the grep.
- **Root font-size:** rem values are quoted as written; if the site sets `html { font-size }` to something other than 16px, pixel equivalents in the notes shift.
- **The proposed SCSS (§4.1, §4.3)** compiled cleanly with Dart Sass 1.106 against a copy of the Project’s `globals.scss` and sample modules using every mixin; it has not been compiled inside your build (Next.js / sass-loader options, `includePaths`).
